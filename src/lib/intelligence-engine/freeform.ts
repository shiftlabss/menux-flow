// ─── Free-form response ─────────────────────────────────────────────────

import type { Message, CardContext, MenuxIntelligenceMode, AiTone } from "@/types/intelligence";
import { uid, now, buildContextBadge } from "./helpers";
import { generatePlansInfo } from "./analysis";
import { generateMorningBriefing, generateRiskReport, generateGoalProgress, generateCoachingInsights, generateAgenda } from "./proactive-commands";

const MODE_LABELS: Record<MenuxIntelligenceMode, string> = {
  focus: "Foco Cliente",
  audit: "Auditoria",
  reply: "Responder",
  proposal: "Proposta",
};

const MODE_HINTS: Record<MenuxIntelligenceMode, string> = {
  focus: "Focando na situação específica deste cliente e próximos passos práticos.",
  audit: "Analisando métricas, gargalos e oportunidades de otimização.",
  reply: "Gerando mensagens prontas para envio. Direto e prático.",
  proposal: "Focando em argumentos de venda, diferenciação e proposta de valor.",
};

export function generateFreeResponse(
  text: string,
  card: CardContext | null,
  mode?: MenuxIntelligenceMode,
  tone?: AiTone,
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
  const toneHint = tone === "formal"
    ? " Responderei de forma executiva e profissional."
    : tone === "casual"
      ? " Responderei de forma descontraída e direta."
      : "";

  const modeHint = mode && mode !== "focus"
    ? `\n\n*Modo ${MODE_LABELS[mode]} ativo — ${MODE_HINTS[mode]}*`
    : "";

  const content = card
    ? `Entendi sua pergunta sobre **${card.cardName}**! ${card.temperature === "hot" ? "🔥 Esse lead está quente — " : ""}Como posso te ajudar com isso? Posso gerar um \`/briefing\`, preparar uma \`/mensagem\` ou analisar o card com \`/analise\`.${toneHint}${modeHint}`
    : `Entendi! Posso te ajudar de várias formas. Use os comandos rápidos (/) para ações específicas, ou me pergunte sobre planos, objeções, ou estratégias de venda.${toneHint}\n\n💡 Dica: selecione um cliente com 📋 para eu carregar todo o contexto e personalizar minhas respostas.${modeHint}`;

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
  type:
    | "no-card"
    | "rate-limit"
    | "api-error"
    | "max-messages"
    | "media-unsupported"
    | "forbidden-command"
    | "invalid-command"
    | "missing-command-input",
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
    "forbidden-command":
      `Você não tem permissão para usar o comando ${extra?.command ?? "solicitado"} neste perfil.`,
    "invalid-command":
      "Comando inválido. Use /ajuda para ver os comandos disponíveis.",
    "missing-command-input":
      `Faltou informar o conteúdo para ${extra?.command ?? "este comando"}. ${extra?.hint ?? "Preencha o campo e tente novamente."}`,
  };

  return {
    id: uid(),
    role: "assistant",
    content: messages[type] ?? messages["api-error"],
    contentType: "error",
    timestamp: now(),
  };
}
