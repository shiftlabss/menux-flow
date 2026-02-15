// ============================================================================
// Proactive Engine — Risk Alerts
// ============================================================================

import type { ProactiveEngineInput, RiskAlert } from "./types";
import { daysBetween, hoursBetween, filterByUser } from "./helpers";

export function computeRiskAlerts(
  input: ProactiveEngineInput
): RiskAlert[] {
  const { opportunities, clients, goals, userId, userRole } = input;
  const alerts: RiskAlert[] = [];
  const now = new Date();

  // 1. SLA breaches
  const userOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) => o.status === "open" && o.slaDeadline
  );
  for (const opp of userOpps) {
    const hoursLeft = hoursBetween(now.toISOString(), opp.slaDeadline!);
    if (hoursLeft < 0) {
      alerts.push({
        id: `risk-sla-${opp.id}`,
        type: "sla-breach",
        title: `SLA estourado: ${opp.clientName}`,
        description: `SLA vencido ha ${Math.abs(Math.round(hoursLeft))}h na etapa ${opp.stage}.`,
        severity: "critical",
        linkedEntityId: opp.id,
      });
    }
  }

  // 2. Client health drops
  const userClients =
    userRole === "master" || userRole === "admin"
      ? clients
      : clients.filter((c) => c.responsibleId === userId);

  const atRiskClients = userClients.filter(
    (c) =>
      c.healthScore === "critical" &&
      c.stage !== "churn"
  );
  for (const client of atRiskClients.slice(0, 3)) {
    alerts.push({
      id: `risk-health-${client.id}`,
      type: "health-drop",
      title: `Saude critica: ${client.companyName}`,
      description: `Cliente com health score critico. Risco de churn iminente.`,
      severity: "critical",
      linkedEntityId: client.id,
    });
  }

  // 3. Stale deals
  const staleOpps = filterByUser(opportunities, userId, userRole).filter(
    (o) =>
      o.status === "open" &&
      daysBetween(o.updatedAt, now.toISOString()) >= 14
  );
  for (const opp of staleOpps.slice(0, 2)) {
    const days = daysBetween(opp.updatedAt, now.toISOString());
    alerts.push({
      id: `risk-stale-${opp.id}`,
      type: "stale",
      title: `Parado ha ${days}d: ${opp.clientName}`,
      description: `Sem movimentacao ha ${days} dias. Reengaje ou reavalie.`,
      severity: "warning",
      linkedEntityId: opp.id,
    });
  }

  // 4. Contract expiring
  for (const client of userClients) {
    if (!client.contractEnd) continue;
    const daysUntil = daysBetween(now.toISOString(), client.contractEnd);
    if (daysUntil > 0 && daysUntil <= 30) {
      alerts.push({
        id: `risk-contract-${client.id}`,
        type: "contract-expiring",
        title: `Contrato expirando: ${client.companyName}`,
        description: `Expira em ${daysUntil} dias. Inicie renovacao.`,
        severity: daysUntil <= 15 ? "critical" : "warning",
        linkedEntityId: client.id,
      });
    }
  }

  // 5. Goal risk
  const activeGoals = goals.filter((g) => new Date(g.endDate) > now);
  for (const goal of activeGoals) {
    const progress = goal.target > 0 ? goal.current / goal.target : 0;
    const daysLeft = daysBetween(now.toISOString(), goal.endDate);
    const totalDays = daysBetween(goal.startDate, goal.endDate);
    const expectedProgress = totalDays > 0 ? (totalDays - daysLeft) / totalDays : 1;

    if (progress < expectedProgress * 0.7 && daysLeft <= 10) {
      alerts.push({
        id: `risk-goal-${goal.id}`,
        type: "goal-risk",
        title: `Meta em risco: ${goal.title}`,
        description: `${Math.round(progress * 100)}% concluido com ${daysLeft} dias restantes.`,
        severity: "critical",
      });
    }
  }

  // Sort by severity
  const severityOrder = { critical: 0, warning: 1 };
  return alerts
    .sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity])
    .slice(0, 8);
}
