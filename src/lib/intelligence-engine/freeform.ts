// ─── Free-form response ─────────────────────────────────────────────────

import type { Message, CardContext, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { uid, now, buildContextBadge } from "./helpers";
import { generatePlansInfo } from "./analysis";
import { generateMorningBriefing, generateRiskReport, generateGoalProgress, generateCoachingInsights, generateAgenda } from "./proactive-commands";

export function generateFreeResponse(
  text: string,
  card: CardContext | null
): Message {
  const txtLower = text.toLowerCase();

  // Detectar intenção e responder contextualmente
  if (
    txtLower.includes("preço") ||
    txtLower.includes("plano") ||
    txtLower.includes("quanto custa")
  ) {
    return generatePlansInfo();
  }

  if (
    txtLower.includes("bom dia") ||
    txtLower.includes("resumo do dia") ||
    txtLower.includes("meu dia") ||
    txtLower.includes("briefing matinal")
  ) {
    return generateMorningBriefing();
  }

  if (
    txtLower.includes("risco") ||
    txtLower.includes("alerta") ||
    txtLower.includes("perigo") ||
    txtLower.includes("problema")
  ) {
    return generateRiskReport();
  }

  if (
    txtLower.includes("meta") ||
    txtLower.includes("objetivo") ||
    txtLower.includes("target")
  ) {
    return generateGoalProgress();
  }

  if (
    txtLower.includes("coaching") ||
    txtLower.includes("performance") ||
    txtLower.includes("desempenho") ||
    txtLower.includes("como estou")
  ) {
    return generateCoachingInsights();
  }

  if (
    txtLower.includes("agenda") ||
    txtLower.includes("atividades de hoje") ||
    txtLower.includes("o que tenho")
  ) {
    return generateAgenda();
  }

  if (
    txtLower.includes("mover") ||
    txtLower.includes("mova") ||
    txtLower.includes("avançar card")
  ) {
    // Edge case: seção 11 — IA não executa ações diretas
    return {
      id: uid(),
      role: "assistant",
      content: `Não consigo mover cards diretamente, mas posso te ajudar a preparar tudo para o avanço. ${card ? `O card **${card.cardName}** está na etapa **${card.stageLabel}**. Quer que eu verifique o que falta para avançar?` : "Abra o card que deseja avançar e eu te ajudo!"}`,
      contentType: "text",
      timestamp: now(),
      contextBadge: buildContextBadge(card),
    };
  }

  // Resposta genérica contextual
  const content = card
    ? `Entendi sua pergunta sobre **${card.cardName}**! ${card.temperature === "hot" ? "🔥 Esse lead está quente — " : ""}Como posso te ajudar com isso? Posso gerar um \`/briefing\`, preparar uma \`/mensagem\` ou analisar o card com \`/analise\`.`
    : `Entendi! Posso te ajudar de várias formas. Use os comandos rápidos (/) para ações específicas, ou me pergunte sobre planos, objeções, ou estratégias de venda.\n\n💡 Dica: selecione um cliente com 📋 para eu carregar todo o contexto e personalizar minhas respostas.`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "text",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
  };
}

// ─── Error responses — seção 11 ─────────────────────────────────────────

export function generateErrorMessage(
  type: "no-card" | "rate-limit" | "api-error" | "max-messages" | "media-unsupported",
  extra?: Record<string, string>
): Message {
  const messages: Record<string, string> = {
    "no-card":
      "Para usar este comando, abra o card do lead primeiro ou selecione um cliente com 📋. Posso te ajudar com outra coisa?",
    "rate-limit": `Você atingiu o limite de consultas nesta hora. O limite será resetado às ${extra?.resetTime ?? "--:--"}. Enquanto isso, suas conversas e histórico continuam disponíveis.`,
    "api-error":
      "Ops, tive um problema ao processar sua mensagem. Tente novamente em alguns instantes.",
    "max-messages":
      "Atingimos o limite desta conversa (100 mensagens). Inicie uma nova conversa para continuar.",
    "media-unsupported":
      "Por enquanto, consigo processar apenas texto. Descreva sua dúvida por escrito que eu te ajudo!",
  };

  return {
    id: uid(),
    role: "assistant",
    content: messages[type] ?? messages["api-error"],
    contentType: "error",
    timestamp: now(),
  };
}
