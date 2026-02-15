// ─── Helpers ──────────────────────────────────────────────────────────────

import type { CardContext, ContextBadge } from "@/types/intelligence";

export function uid(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function now(): string {
  return new Date().toISOString();
}

export function buildContextBadge(card: CardContext | null): ContextBadge | undefined {
  if (!card) return undefined;
  return {
    cardId: card.cardId,
    cardName: card.cardName,
    stage: card.stageLabel,
    temperature: card.temperature,
  };
}

export function temperatureEmoji(t: string): string {
  switch (t) {
    case "hot":
      return "🔥";
    case "warm":
      return "🌡️";
    case "cold":
      return "❄️";
    default:
      return "🌡️";
  }
}

export function temperatureLabel(t: string): string {
  switch (t) {
    case "hot":
      return "Quente";
    case "warm":
      return "Morno";
    case "cold":
      return "Frio";
    default:
      return t;
  }
}
