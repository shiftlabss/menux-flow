// ============================================================================
// Proactive Engine — Insights (Priorities, Smart Insights, Quick Wins)
// ============================================================================

import { formatCurrencyBRL } from "@/lib/business-rules";
import type { ProactiveEngineInput, PriorityItem, SmartInsight, QuickWinItem } from "./types";
import { daysBetween, hoursBetween, isToday, relativeTime, getStageName, filterByUser } from "./helpers";

export function computeTodaysPriorities(
  input: ProactiveEngineInput
): PriorityItem[] {
  const { opportunities, activities, userId, userRole, pipelines } = input;
  const items: PriorityItem[] = [];
  const now = new Date();

  // 1. Overdue activities
  const userActs = filterByUser(activities, userId, userRole);
  const overdueActs = userActs.filter((a) => {
    if (a.status === "completed" || a.status === "cancelled") return false;
    return new Date(a.dueDate) < now;
  });

  for (const act of overdueActs.slice(0, 3)) {
    items.push({
      id: `pri-${act.id}`,
      type: "overdue",
      title: act.title,
      subtitle: `Vencida ${relativeTime(act.dueDate)}${act.clientName ? ` · ${act.clientName}` : ""}`,
      severity: "critical",
      linkedEntityId: act.opportunityId,
      linkedEntityType: "opportunity",
    });
  }

  // 2. Today's pending activities
  const todayActs = userActs.filter(
    (a) => a.status === "pending" && isToday(a.dueDate)
  );
  for (const act of todayActs.slice(0, 3)) {
    items.push({
      id: `pri-${act.id}`,
      type: "due-today",
      title: act.title,
      subtitle: `Hoje${act.dueTime ? ` as ${act.dueTime}` : ""}${act.clientName ? ` · ${act.clientName}` : ""}`,
      severity: "warning",
      linkedEntityId: act.opportunityId,
      linkedEntityType: "opportunity",
    });
  }

  // 3. SLA approaching
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open" && o.slaDeadline
  );
  for (const opp of userOpps) {
    const hoursLeft = hoursBetween(now.toISOString(), opp.slaDeadline!);
    if (hoursLeft > 0 && hoursLeft <= 8) {
      const stageName = getStageName(opp.stage, pipelines);
      items.push({
        id: `pri-sla-${opp.id}`,
        type: "sla-warning",
        title: opp.clientName,
        subtitle: `${Math.round(hoursLeft)}h para SLA · ${stageName}`,
        severity: "critical",
        linkedEntityId: opp.id,
        linkedEntityType: "opportunity",
      });
    }
  }

  // 4. Hot leads idle
  const hotIdle = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open" && o.temperature === "hot"
  );
  for (const opp of hotIdle.slice(0, 2)) {
    const oppActs = activities.filter(
      (a) => a.opportunityId === opp.id && a.status !== "cancelled"
    );
    const lastDate = oppActs.length
      ? Math.max(...oppActs.map((a) => new Date(a.dueDate).getTime()))
      : new Date(opp.updatedAt).getTime();
    const daysSince = daysBetween(
      new Date(lastDate).toISOString(),
      now.toISOString()
    );
    if (daysSince >= 3) {
      items.push({
        id: `pri-hot-${opp.id}`,
        type: "hot-idle",
        title: opp.clientName,
        subtitle: `Lead quente sem atividade ha ${daysSince}d`,
        severity: "warning",
        linkedEntityId: opp.id,
        linkedEntityType: "opportunity",
      });
    }
  }

  // Sort by severity then return top 8
  const severityOrder = { critical: 0, warning: 1, info: 2 };
  return items
    .sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity])
    .slice(0, 8);
}

export function computeSmartInsights(
  input: ProactiveEngineInput
): SmartInsight[] {
  const { opportunities, goals, userId, userRole } = input;
  const insights: SmartInsight[] = [];
  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const userOpps = filterByUser(opportunities, userId, userRole);

  // 1. Pipeline velocity (avg days to close won deals)
  const recentWins = userOpps.filter(
    (o) => o.status === "won" && new Date(o.updatedAt) > thirtyDaysAgo
  );
  if (recentWins.length >= 2) {
    const avgDays = Math.round(
      recentWins.reduce(
        (sum, o) => sum + daysBetween(o.createdAt, o.updatedAt),
        0
      ) / recentWins.length
    );
    insights.push({
      id: "insight-velocity",
      icon: "zap",
      title: "Velocidade do Pipeline",
      description: `Ciclo medio de fechamento: ${avgDays} dias (${recentWins.length} deals fechados nos ultimos 30 dias).`,
      metric: { value: `${avgDays}d`, trend: avgDays <= 21 ? "up" : "down" },
    });
  }

  // 2. Conversion rate
  const closed = userOpps.filter(
    (o) =>
      (o.status === "won" || o.status === "lost") &&
      new Date(o.updatedAt) > thirtyDaysAgo
  );
  const won = closed.filter((o) => o.status === "won");
  if (closed.length >= 3) {
    const rate = Math.round((won.length / closed.length) * 100);
    insights.push({
      id: "insight-conversion",
      icon: "trending-up",
      title: "Taxa de Conversao",
      description: `${rate}% de conversao (${won.length} ganhos de ${closed.length} finalizados) nos ultimos 30 dias.`,
      metric: {
        value: `${rate}%`,
        trend: rate >= 50 ? "up" : rate >= 35 ? "stable" : "down",
      },
    });
  }

  // 3. Goal progress
  const activeGoals = goals.filter((g) => new Date(g.endDate) > now);
  if (activeGoals.length > 0) {
    const mainGoal = activeGoals[0];
    const progress = Math.round(
      (mainGoal.current / mainGoal.target) * 100
    );
    const remaining = mainGoal.target - mainGoal.current;
    const remainingStr =
      mainGoal.type === "revenue" ? formatCurrencyBRL(remaining) : `${remaining}`;
    const daysLeft = daysBetween(now.toISOString(), mainGoal.endDate);

    insights.push({
      id: "insight-goal",
      icon: "target",
      title: `Meta: ${mainGoal.title}`,
      description: `${progress}% concluido. Faltam ${remainingStr} em ${daysLeft} dias.`,
      metric: {
        value: `${progress}%`,
        trend: progress >= 80 ? "up" : progress >= 50 ? "stable" : "down",
      },
      actionLabel: "Detalhes",
      actionCommand: "/meta",
    });
  }

  // 4. Total pipeline value
  const openOpps = userOpps.filter((o) => o.status === "open");
  if (openOpps.length > 0) {
    const totalMRR = openOpps.reduce((sum, o) => sum + o.monthlyValue, 0);
    const totalValue = openOpps.reduce((sum, o) => sum + o.value, 0);
    insights.push({
      id: "insight-pipeline-value",
      icon: "bar-chart",
      title: "Pipeline Ativo",
      description: `${openOpps.length} oportunidades abertas. MRR potencial: ${formatCurrencyBRL(totalMRR)}. Valor total: ${formatCurrencyBRL(totalValue)}.`,
      metric: { value: formatCurrencyBRL(totalMRR), trend: "stable" },
      actionLabel: "Ver funil",
      actionCommand: "/funil",
    });
  }

  return insights;
}

export function computeQuickWins(
  input: ProactiveEngineInput
): QuickWinItem[] {
  const { opportunities, activities, userId, userRole } = input;

  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open"
  );

  return userOpps
    .map((opp) => {
      // Calculate probability based on stage, temperature, recent activity
      let probability = 0;

      // Stage advancement (later stages = higher probability)
      const stageScores: Record<string, number> = {
        "lead-in": 10,
        "contato-feito": 20,
        "reuniao-agendada": 40,
        "proposta-enviada": 60,
        "negociacao": 75,
        "fechamento": 90,
      };
      probability += stageScores[opp.stage] ?? 15;

      // Temperature bonus
      if (opp.temperature === "hot") probability += 15;
      else if (opp.temperature === "warm") probability += 5;

      // Recent activity bonus
      const oppActs = activities.filter(
        (a) => a.opportunityId === opp.id && a.status !== "cancelled"
      );
      const hasRecentActivity = oppActs.some(
        (a) => daysBetween(a.dueDate, new Date().toISOString()) <= 3
      );
      if (hasRecentActivity) probability += 10;

      // Cap at 95
      probability = Math.min(95, probability);

      // Reason text
      const reasons: string[] = [];
      if (opp.temperature === "hot") reasons.push("Lead quente");
      if (
        opp.stage === "negociacao" ||
        opp.stage === "fechamento" ||
        opp.stage === "proposta-enviada"
      )
        reasons.push(opp.stage.replace(/-/g, " "));
      if (hasRecentActivity) reasons.push("Atividade recente");

      return {
        id: opp.id,
        opportunityId: opp.id,
        clientName: opp.clientName,
        stage: opp.stage,
        probability,
        value: opp.monthlyValue,
        reason: reasons.join(" + ") || opp.stage,
      };
    })
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 5);
}
