// ============================================================================
// Proactive Engine — Morning Briefing Formatter
// ============================================================================

import { formatCurrencyBRL } from "@/lib/business-rules";
import type { ProactiveEngineInput } from "./types";
import { computeTodaysPriorities, computeSmartInsights, computeQuickWins } from "./insights";
import { computeRiskAlerts } from "./alerts";

export function generateMorningSummaryContent(
  input: ProactiveEngineInput
): string {
  const priorities = computeTodaysPriorities(input);
  const insights = computeSmartInsights(input);
  const quickWins = computeQuickWins(input);
  const risks = computeRiskAlerts(input);

  const sections: string[] = [];

  sections.push("\u{1F305} **Briefing Matinal**\n");

  // Priorities
  if (priorities.length > 0) {
    sections.push("**Prioridades de hoje:**");
    for (const p of priorities.slice(0, 5)) {
      const icon = p.severity === "critical" ? "\u{1F534}" : p.severity === "warning" ? "\u{1F7E1}" : "\u{1F535}";
      sections.push(`  ${icon} **${p.title}** \u2014 ${p.subtitle}`);
    }
    sections.push("");
  } else {
    sections.push("**Prioridades:** \u2705 Nenhuma urgencia. Dia tranquilo!\n");
  }

  // Quick wins
  if (quickWins.length > 0) {
    sections.push("**Ganhos rapidos (maior probabilidade):**");
    for (const qw of quickWins.slice(0, 3)) {
      sections.push(
        `  \u{1F3AF} **${qw.clientName}** \u2014 ${qw.probability}% de probabilidade \u00B7 ${formatCurrencyBRL(qw.value)}/mes \u00B7 ${qw.reason}`
      );
    }
    sections.push("");
  }

  // Risks
  if (risks.length > 0) {
    sections.push("**Alertas de risco:**");
    for (const r of risks.slice(0, 3)) {
      const icon = r.severity === "critical" ? "\u{1F6A8}" : "\u26A0\uFE0F";
      sections.push(`  ${icon} ${r.title} \u2014 ${r.description}`);
    }
    sections.push("");
  }

  // Key metric
  const conversionInsight = insights.find(
    (i) => i.id === "insight-conversion"
  );
  if (conversionInsight?.metric) {
    sections.push(
      `**Metrica do dia:** Taxa de conversao: ${conversionInsight.metric.value} ${conversionInsight.metric.trend === "up" ? "\u{1F4C8}" : conversionInsight.metric.trend === "down" ? "\u{1F4C9}" : "\u27A1\uFE0F"}`
    );
  }

  sections.push("\n\u{1F4A1} Use `/riscos` para detalhes ou `/meta` para progresso das metas.");

  return sections.join("\n");
}
