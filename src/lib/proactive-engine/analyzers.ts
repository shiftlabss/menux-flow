// ============================================================================
// Proactive Engine — Individual Analyzers
// ============================================================================

import type { Opportunity, Activity, Client, Goal } from "@/types";
import type { PipelineStageConfig } from "@/stores/pipeline-store";
import type {
  ProactiveSuggestionType,
  ProactiveSuggestionPriority,
} from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import type { GeneratedSuggestion } from "./types";
import {
  daysBetween,
  hoursBetween,
  relativeTime,
  getStageName,
  filterByUser,
} from "./helpers";

export function analyzeOverdueActivities(
  activities: Activity[],
  opportunities: Opportunity[],
  userId: string,
  userRole: string
): GeneratedSuggestion[] {
  const userActs = filterByUser(activities, userId, userRole);
  const overdue = userActs.filter((a) => {
    if (a.status === "completed" || a.status === "cancelled") return false;
    const dueDate = new Date(a.dueDate);
    return dueDate < new Date();
  });

  return overdue.slice(0, 3).map((act) => {
    const opp = act.opportunityId
      ? opportunities.find((o) => o.id === act.opportunityId)
      : null;
    const daysOverdue = daysBetween(act.dueDate, new Date().toISOString());

    return {
      type: "overdue-activity" as ProactiveSuggestionType,
      priority: (daysOverdue >= 3 ? "high" : "medium") as ProactiveSuggestionPriority,
      message: `Atividade "${act.title}" vencida ${relativeTime(act.dueDate)}.${opp ? ` Lead: ${opp.clientName}.` : ""} Resolva para manter o pipeline saudavel.`,
      cardId: opp?.id,
      cardName: opp?.clientName,
    };
  });
}

export function analyzeHotLeadsIdle(
  opportunities: Opportunity[],
  activities: Activity[],
  userId: string,
  userRole: string,
  thresholdDays = 3
): GeneratedSuggestion[] {
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open" && o.temperature === "hot"
  );

  return userOpps
    .map((opp) => {
      const oppActivities = activities
        .filter((a) => a.opportunityId === opp.id && a.status !== "cancelled")
        .sort(
          (a, b) =>
            new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        );

      const lastDate = oppActivities[0]?.dueDate ?? opp.updatedAt;
      const daysSince = daysBetween(lastDate, new Date().toISOString());

      if (daysSince >= thresholdDays) {
        return {
          type: "hot-lead-idle" as ProactiveSuggestionType,
          priority: "high" as ProactiveSuggestionPriority,
          message: `Lead quente "${opp.clientName}" sem atividade ha ${daysSince} dias. Na etapa ${opp.stage}. Momento de agir!`,
          cardId: opp.id,
          cardName: opp.clientName,
        };
      }
      return null;
    })
    .filter(Boolean) as GeneratedSuggestion[];
}

export function analyzeSLAApproaching(
  opportunities: Opportunity[],
  pipelines: { stages: PipelineStageConfig[] }[],
  userId: string,
  userRole: string
): GeneratedSuggestion[] {
  const now = new Date();
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open" && o.slaDeadline
  );

  return userOpps
    .map((opp) => {
      const hoursLeft = hoursBetween(now.toISOString(), opp.slaDeadline!);
      if (hoursLeft > 0 && hoursLeft <= 6) {
        const stageName = getStageName(opp.stage, pipelines);
        return {
          type: "sla-approaching" as ProactiveSuggestionType,
          priority: "high" as ProactiveSuggestionPriority,
          message: `"${opp.clientName}" esta a ${Math.round(hoursLeft)}h do SLA na etapa ${stageName}. Priorize esta oportunidade!`,
          cardId: opp.id,
          cardName: opp.clientName,
        };
      }
      return null;
    })
    .filter(Boolean) as GeneratedSuggestion[];
}

export function analyzeStaleDeals(
  opportunities: Opportunity[],
  userId: string,
  userRole: string,
  thresholdDays = 7
): GeneratedSuggestion[] {
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open"
  );

  return userOpps
    .map((opp) => {
      const daysSince = daysBetween(opp.updatedAt, new Date().toISOString());
      if (daysSince >= thresholdDays) {
        return {
          type: "stale-deal" as ProactiveSuggestionType,
          priority: (daysSince >= 14 ? "high" : "medium") as ProactiveSuggestionPriority,
          message: `Negociacao "${opp.clientName}" parada ha ${daysSince} dias sem movimentacao. Considere reengajar ou reavaliar.`,
          cardId: opp.id,
          cardName: opp.clientName,
        };
      }
      return null;
    })
    .filter(Boolean) as GeneratedSuggestion[];
}

export function analyzeGoalRisk(
  goals: Goal[]
): GeneratedSuggestion[] {
  const now = new Date();

  return goals
    .map((goal) => {
      const endDate = new Date(goal.endDate);
      const startDate = new Date(goal.startDate);
      if (endDate < now) return null; // past goal

      const totalDuration = daysBetween(startDate.toISOString(), endDate.toISOString());
      const elapsed = daysBetween(startDate.toISOString(), now.toISOString());
      const daysRemaining = daysBetween(now.toISOString(), endDate.toISOString());
      const expectedProgress = totalDuration > 0 ? elapsed / totalDuration : 1;
      const actualProgress = goal.target > 0 ? goal.current / goal.target : 0;

      // Only alert if behind schedule AND within 15 days of deadline
      if (actualProgress < expectedProgress * 0.85 && daysRemaining <= 15) {
        const deficit = goal.target - goal.current;
        const deficitStr =
          goal.type === "revenue"
            ? formatCurrencyBRL(deficit)
            : `${deficit} ${goal.type === "conversion" ? "%" : ""}`;

        return {
          type: "goal-risk" as ProactiveSuggestionType,
          priority: (daysRemaining <= 7 ? "high" : "medium") as ProactiveSuggestionPriority,
          message: `Meta "${goal.title}" em risco. Faltam ${deficitStr} nos proximos ${daysRemaining} dias. Progresso: ${Math.round(actualProgress * 100)}%.`,
        };
      }
      return null;
    })
    .filter(Boolean) as GeneratedSuggestion[];
}

export function analyzeContractExpiring(
  clients: Client[],
  userId: string,
  userRole: string,
  thresholdDays = 30
): GeneratedSuggestion[] {
  const now = new Date();
  const userClients = filterByUser(clients, userId, userRole);

  return userClients
    .map((client) => {
      if (!client.contractEnd) return null;
      const daysUntil = daysBetween(now.toISOString(), client.contractEnd);
      if (daysUntil > 0 && daysUntil <= thresholdDays) {
        return {
          type: "contract-expiring" as ProactiveSuggestionType,
          priority: (daysUntil <= 15 ? "high" : "medium") as ProactiveSuggestionPriority,
          message: `Contrato de "${client.companyName}" expira em ${daysUntil} dias. Inicie a renovacao agora.`,
          cardName: client.companyName,
        };
      }
      return null;
    })
    .filter(Boolean) as GeneratedSuggestion[];
}

export function analyzeMissingFields(
  opportunities: Opportunity[],
  userId: string,
  userRole: string
): GeneratedSuggestion[] {
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open"
  );

  const noCloseDate = userOpps.filter((o) => !o.expectedCloseDate);
  if (noCloseDate.length >= 3) {
    return [
      {
        type: "missing-fields" as ProactiveSuggestionType,
        priority: "low" as ProactiveSuggestionPriority,
        message: `${noCloseDate.length} oportunidades abertas sem data de fechamento prevista. Preencha para melhorar previsibilidade.`,
      },
    ];
  }
  return [];
}

export function analyzeCrossSell(
  clients: Client[],
  userId: string,
  userRole: string
): GeneratedSuggestion[] {
  const userClients = filterByUser(clients, userId, userRole);

  const activeClients = userClients.filter(
    (c) => c.stage !== "churn" && c.monthlyRevenue > 0
  );
  if (activeClients.length === 0) return [];

  const avgRevenue =
    activeClients.reduce((sum, c) => sum + c.monthlyRevenue, 0) /
    activeClients.length;

  return activeClients
    .filter(
      (c) => c.healthScore === "good" && c.monthlyRevenue < avgRevenue * 0.7
    )
    .slice(0, 2)
    .map((c) => ({
      type: "cross-sell-opportunity" as ProactiveSuggestionType,
      priority: "low" as ProactiveSuggestionPriority,
      message: `"${c.companyName}" com saude boa e ticket ${formatCurrencyBRL(c.monthlyRevenue)} (media: ${formatCurrencyBRL(avgRevenue)}). Oportunidade de upsell!`,
      cardName: c.companyName,
    }));
}

export function analyzeCompetitiveLosses(
  opportunities: Opportunity[],
  userId: string,
  userRole: string
): GeneratedSuggestion[] {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentLosses = filterByUser(opportunities, userId, userRole).filter(
    (o) =>
      o.status === "lost" &&
      new Date(o.updatedAt) > thirtyDaysAgo &&
      o.lossReason
  );

  if (recentLosses.length === 0) return [];

  // Group by loss reason
  const reasonCounts = recentLosses.reduce(
    (acc, o) => {
      const reason = o.lossReason ?? "outro";
      acc[reason] = (acc[reason] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const topReason = Object.entries(reasonCounts).sort(
    ([, a], [, b]) => b - a
  )[0];

  if (topReason && topReason[1] >= 2) {
    return [
      {
        type: "competitive-intelligence" as ProactiveSuggestionType,
        priority: "medium" as ProactiveSuggestionPriority,
        message: `${recentLosses.length} deals perdidos nos ultimos 30 dias. Principal motivo: "${topReason[0]}" (${topReason[1]}x). Ajuste sua abordagem.`,
      },
    ];
  }
  return [];
}

export function analyzeTeamPerformance(
  opportunities: Opportunity[],
  userId: string
): GeneratedSuggestion[] {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentOpps = opportunities.filter(
    (o) => new Date(o.updatedAt) > thirtyDaysAgo
  );

  if (recentOpps.length < 5) return [];

  // Calculate user conversion vs team average
  const userOpps = recentOpps.filter((o) => o.responsibleId === userId);
  const userWon = userOpps.filter((o) => o.status === "won").length;
  const userTotal = userOpps.filter(
    (o) => o.status === "won" || o.status === "lost"
  ).length;
  const userRate = userTotal > 0 ? (userWon / userTotal) * 100 : 0;

  const teamWon = recentOpps.filter((o) => o.status === "won").length;
  const teamTotal = recentOpps.filter(
    (o) => o.status === "won" || o.status === "lost"
  ).length;
  const teamRate = teamTotal > 0 ? (teamWon / teamTotal) * 100 : 0;

  if (userTotal < 3) return [];

  const diff = userRate - teamRate;
  if (Math.abs(diff) >= 10) {
    return [
      {
        type: "team-performance" as ProactiveSuggestionType,
        priority: "low" as ProactiveSuggestionPriority,
        message:
          diff > 0
            ? `Sua taxa de conversao (${Math.round(userRate)}%) esta ${Math.round(diff)}% acima da media do time. Excelente trabalho!`
            : `Sua taxa de conversao (${Math.round(userRate)}%) esta ${Math.round(Math.abs(diff))}% abaixo da media. Use /coaching para dicas.`,
      },
    ];
  }
  return [];
}
