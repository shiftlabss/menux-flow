// ─── Greeting — seção 2.3.1 ──────────────────────────────────────────────

import type { Message, CardContext, VendorContext, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";

export function generateGreeting(
  vendor: VendorContext,
  card: CardContext | null,
  isFirstOfDay: boolean
): Message {
  let content: string;

  if (card) {
    // Se o vendedor já tem um card aberto
    content = `✨ **Olá, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nVi que você está com **${card.cardName}** aberto. Quer que eu te ajude com esse lead ou prefere escolher outro?`;
  } else if (isFirstOfDay) {
    // Primeira abertura do dia → resumo matinal
    content = `✨ **Bom dia, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nVocê tem atividades para hoje e leads quentes esperando ação. Quer focar em algum cliente?\n\n**📋 Escolher cliente**\n\nOu pode mandar sua dúvida direto — estou aqui pra ajudar.`;
  } else {
    // Abertura genérica
    content = `✨ **Olá, ${vendor.name}!** Sou a Menux Intelligence, seu braço direito comercial.\n\nQuer falar sobre algum cliente específico? Selecione abaixo para eu carregar todo o contexto.\n\n**📋 Escolher cliente**\n\nOu pode mandar sua dúvida direto — estou aqui pra ajudar.`;
  }

  // Saudações sem card oferecem botão de seleção de cliente
  const suggestedActions: SuggestedAction[] = !card
    ? [
        {
          id: uid(),
          type: "open-card" as SuggestedActionType,
          label: "📋 Escolher cliente",
          icon: "users",
          payload: { action: "open-client-picker" },
        },
      ]
    : [];

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "greeting",
    timestamp: now(),
    suggestedActions: suggestedActions.length > 0 ? suggestedActions : undefined,
  };
}

// ─── Context Loaded Confirmation — seção 2.3.2 ──────────────────────────

export function generateContextLoaded(card: CardContext): Message {
  return {
    id: uid(),
    role: "assistant",
    content: `✅ Contexto carregado: **${card.cardName}** (${card.stageLabel} · ${temperatureEmoji(card.temperature)} ${temperatureLabel(card.temperature)}). Como posso te ajudar com esse lead?`,
    contentType: "context-loaded",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
  };
}
