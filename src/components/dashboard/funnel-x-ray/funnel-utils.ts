import type { FlowStage, FlowTransition } from "./funnel-config";

export function buildTransitions(stages: FlowStage[]): FlowTransition[] {
  return stages.slice(0, -1).map((from, index) => {
    const to = stages[index + 1];
    const conversion =
      from.volume > 0 ? Math.round((to.volume / from.volume) * 100) : 0;
    return {
      from,
      to,
      conversion,
      advanced: to.volume,
      base: from.volume,
    };
  });
}

export function formatCurrencyCompact(value: number): string {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}k`;
  return `R$ ${value}`;
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
