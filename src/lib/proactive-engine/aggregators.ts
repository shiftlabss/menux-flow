// ============================================================================
// Proactive Engine — Aggregators
// ============================================================================

import type { Opportunity, Activity } from "@/types";
import type { PipelineContext } from "@/types/intelligence";
import type { ProactiveEngineInput, GeneratedSuggestion } from "./types";
import { daysBetween, filterByUser } from "./helpers";
import {
  analyzeOverdueActivities,
  analyzeHotLeadsIdle,
  analyzeSLAApproaching,
  analyzeStaleDeals,
  analyzeGoalRisk,
  analyzeContractExpiring,
  analyzeMissingFields,
  analyzeCrossSell,
  analyzeCompetitiveLosses,
  analyzeTeamPerformance,
} from "./analyzers";

export function generateAllSuggestions(
  input: ProactiveEngineInput
): GeneratedSuggestion[] {
  const { opportunities, activities, clients, goals, pipelines, userId, userRole } =
    input;

  const suggestions: GeneratedSuggestion[] = [
    ...analyzeOverdueActivities(activities, opportunities, userId, userRole),
    ...analyzeSLAApproaching(opportunities, pipelines, userId, userRole),
    ...analyzeHotLeadsIdle(opportunities, activities, userId, userRole),
    ...analyzeStaleDeals(opportunities, userId, userRole),
    ...analyzeGoalRisk(goals),
    ...analyzeContractExpiring(clients, userId, userRole),
    ...analyzeMissingFields(opportunities, userId, userRole),
    ...analyzeCrossSell(clients, userId, userRole),
    ...analyzeCompetitiveLosses(opportunities, userId, userRole),
    ...analyzeTeamPerformance(opportunities, userId),
  ];

  // Sort: high > medium > low
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return suggestions.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
}

export function computePipelineContext(
  opportunities: Opportunity[],
  activities: Activity[],
  userId: string,
  userRole: string
): PipelineContext {
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open"
  );

  const cardsByStage: Record<string, number> = {};
  let totalMRR = 0;
  let overdueCards = 0;
  let hotIdleCards = 0;
  let staleCards = 0;

  for (const opp of userOpps) {
    // Count by stage
    cardsByStage[opp.stage] = (cardsByStage[opp.stage] ?? 0) + 1;

    // Total MRR
    totalMRR += opp.monthlyValue;

    // Overdue check
    const oppActs = activities.filter(
      (a) => a.opportunityId === opp.id && a.status !== "cancelled"
    );
    const hasOverdue = oppActs.some(
      (a) => a.status !== "completed" && new Date(a.dueDate) < new Date()
    );
    if (hasOverdue) overdueCards++;

    // Hot idle check
    if (opp.temperature === "hot") {
      const lastDate = oppActs.length
        ? Math.max(...oppActs.map((a) => new Date(a.dueDate).getTime()))
        : new Date(opp.updatedAt).getTime();
      const daysSince = daysBetween(
        new Date(lastDate).toISOString(),
        new Date().toISOString()
      );
      if (daysSince >= 3) hotIdleCards++;
    }

    // Stale check
    const daysSinceUpdate = daysBetween(
      opp.updatedAt,
      new Date().toISOString()
    );
    if (daysSinceUpdate >= 7) staleCards++;
  }

  return { cardsByStage, totalMRR, overdueCards, hotIdleCards, staleCards };
}
