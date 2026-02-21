"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  Info,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Phone,
  RefreshCw,
  ShieldAlert,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useActivityStore } from "@/stores/activity-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useClientStore } from "@/stores/client-store";
import { useAuthStore } from "@/stores/auth-store";
import { useExecutionPanelData } from "@/hooks/use-execution-panel-data";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { getActivityDueAt } from "@/lib/business-rules";
import type { RiskAlert } from "@/lib/proactive-engine";
import type { Activity, PipelineStage } from "@/types";

type AlertSeverity = "critical" | "high" | "medium";
type AlertKind =
  | "health_critical"
  | "goal_risk"
  | "stalled_deal"
  | "overdue_activities"
  | "sla_risk"
  | "contract_risk";
type AlertGroup = "churn" | "pipeline" | "activities" | "goals";
type AlertFilter = "all" | "critical" | AlertGroup;
type AlertLifecycle = "open" | "in_progress" | "resolved" | "snoozed";
type FeedbackTone = "success" | "error" | "info";

interface AlertFeedback {
  tone: FeedbackTone;
  message: string;
  linkLabel?: string;
  linkPath?: string;
}

interface AlertRuntime {
  status: AlertLifecycle;
  feedback?: AlertFeedback;
}

interface DisplayAlert {
  id: string;
  title: string;
  context: string;
  impact: string;
  recommendation: string;
  consequence: string;
  severity: AlertSeverity;
  kind: AlertKind;
  group: AlertGroup;
  reasonCode: string;
  viewPath: string;
  entityId?: string;
  impactScore: number;
  duplicateCount: number;
}

interface SnoozedAlert {
  id: string;
  label: string;
}

interface ResolveResult {
  message: string;
  linkLabel?: string;
  linkPath?: string;
}

interface ActivityAgendaItem {
  id: string;
  title: string;
  clientLine: string;
  description: string;
  type: Activity["type"];
  status: "pending" | "overdue";
  dueDate: string;
  dueTime?: string;
  dueAt: Date;
  hasTime: boolean;
  delayLabel: string | null;
}

interface AgendaNotice {
  tone: FeedbackTone;
  message: string;
  linkLabel?: string;
  linkPath?: string;
}

interface AgendaItemRuntime {
  loading?: boolean;
  error?: string;
}

interface RescheduleDraft {
  dueDate: string;
  dueTime: string;
}

const STAGE_LABELS: Record<PipelineStage, string> = {
  "lead-in": "Leads",
  "contato-feito": "Contato",
  "reuniao-agendada": "Reuniao",
  "proposta-enviada": "Proposta",
  negociacao: "Negociacao",
  fechamento: "Fechamento",
};

const ALERT_FILTER_OPTIONS: Array<{ id: AlertFilter; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "critical", label: "Criticos" },
  { id: "churn", label: "Risco de churn" },
  { id: "pipeline", label: "Pipeline parado" },
  { id: "activities", label: "Atividades" },
  { id: "goals", label: "Metas" },
];

const SNOOZE_OPTIONS = [
  { label: "1h", hours: 1 },
  { label: "Amanha", hours: 24 },
  { label: "1 semana", hours: 24 * 7 },
] as const;

const ALERT_SEVERITY_ORDER: Record<AlertSeverity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
};

const ALERT_STATUS_ORDER: Record<AlertLifecycle, number> = {
  in_progress: 0,
  open: 1,
  resolved: 2,
  snoozed: 3,
};

const FALLBACK_RETRY_MESSAGE = "Nao consegui resolver agora.";

function toDateOnly(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(baseDate: Date, days: number): Date {
  const next = new Date(baseDate);
  next.setDate(next.getDate() + days);
  return next;
}

function formatStage(stage?: PipelineStage): string {
  if (!stage) return "Sem etapa";
  return STAGE_LABELS[stage] ?? "Sem etapa";
}

function mapRiskSeverity(severity: RiskAlert["severity"]): AlertSeverity {
  return severity === "critical" ? "critical" : "high";
}

function formatDelay(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return "0min";
  const totalMinutes = Math.max(1, Math.round(ms / (1000 * 60)));
  if (totalMinutes < 60) return `${totalMinutes}min`;

  const totalHours = Math.round(totalMinutes / 60);
  if (totalHours < 24) return `${totalHours}h`;

  const days = Math.round(totalHours / 24);
  return `${days}d`;
}

function formatSnoozeUntil(baseDate: Date, hours: number): string {
  const until = new Date(baseDate.getTime() + hours * 60 * 60 * 1000);
  return until.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatRescheduleLabel(dueDate: string, dueTime?: string): string {
  const parsed = new Date(`${dueDate}T${dueTime || "09:00"}:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dueTime ? `${dueDate} ${dueTime}` : dueDate;
  }

  return parsed.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getAlertBadgeClass(severity: AlertSeverity): string {
  if (severity === "critical") {
    return "border-red-200 bg-red-50 text-red-700";
  }

  if (severity === "high") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-sky-200 bg-sky-50 text-sky-700";
}

function getSeverityLabel(severity: AlertSeverity): string {
  if (severity === "critical") return "Critico";
  if (severity === "high") return "Alto";
  return "Medio";
}

function getAlertIcon(alert: DisplayAlert) {
  if (alert.kind === "sla_risk") {
    return <ShieldAlert className="h-4 w-4 text-red-600" />;
  }

  if (alert.kind === "goal_risk") {
    return <Target className="h-4 w-4 text-amber-600" />;
  }

  if (alert.severity === "critical") {
    return <AlertCircle className="h-4 w-4 text-red-600" />;
  }

  if (alert.severity === "high") {
    return <AlertTriangle className="h-4 w-4 text-amber-600" />;
  }

  return <Info className="h-4 w-4 text-sky-600" />;
}

function matchesAlertFilter(alert: DisplayAlert, filter: AlertFilter): boolean {
  if (filter === "all") return true;
  if (filter === "critical") return alert.severity === "critical";
  return alert.group === filter;
}

function getExecuteLabel(type: Activity["type"]): string {
  if (type === "call") return "Ligar";
  if (type === "whatsapp") return "WhatsApp";
  if (type === "email") return "Email";
  if (type === "meeting") return "Entrar";
  return "Executar";
}

function getExecutePath(activityId: string, type: Activity["type"]): string {
  return `/activities?activityId=${activityId}&execute=${type}`;
}

function getActivityTypeIcon(type: Activity["type"]) {
  if (type === "call") return Phone;
  if (type === "email") return Mail;
  if (type === "whatsapp") return MessageCircle;
  return CalendarClock;
}

function isActionableAlert(status: AlertLifecycle): boolean {
  return status === "open" || status === "in_progress";
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function CriticalAlerts() {
  const router = useRouter();
  const { riskAlerts } = useExecutionPanelData();
  const {
    filteredActivities,
    openOpportunities,
    now,
    userId,
  } = useDashboardFilters();

  const userName = useAuthStore((s) => s.user?.name ?? "Sales Executive");
  const clients = useClientStore((s) => s.clients);
  const allActivities = useActivityStore((s) => s.activities);
  const activityLoading = useActivityStore((s) => s.isLoading);
  const opportunityLoading = useOpportunityStore((s) => s.isLoading);

  const addActivity = useActivityStore((s) => s.addActivity);
  const updateOpportunity = useOpportunityStore((s) => s.updateOpportunity);

  const [activeFilter, setActiveFilter] = useState<AlertFilter>("all");
  const [runtimeById, setRuntimeById] = useState<Record<string, AlertRuntime>>({});
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [snoozePopoverId, setSnoozePopoverId] = useState<string | null>(null);
  const [snoozeReasonById, setSnoozeReasonById] = useState<Record<string, string>>({});
  const [snoozedAlerts, setSnoozedAlerts] = useState<SnoozedAlert[]>([]);

  const alerts = useMemo(() => {
    const opportunityById = new Map(openOpportunities.map((opportunity) => [opportunity.id, opportunity]));
    const clientById = new Map(clients.map((client) => [client.id, client]));
    const map = new Map<string, DisplayAlert>();

    const pushAlert = (candidate: Omit<DisplayAlert, "duplicateCount">) => {
      const dedupeKey = `${candidate.kind}:${candidate.entityId ?? "global"}:${candidate.reasonCode}`;
      const existing = map.get(dedupeKey);
      if (!existing) {
        map.set(dedupeKey, { ...candidate, duplicateCount: 1 });
        return;
      }

      map.set(dedupeKey, {
        ...existing,
        impactScore: Math.max(existing.impactScore, candidate.impactScore),
        severity:
          ALERT_SEVERITY_ORDER[candidate.severity] < ALERT_SEVERITY_ORDER[existing.severity]
            ? candidate.severity
            : existing.severity,
        duplicateCount: existing.duplicateCount + 1,
      });
    };

    for (const alert of riskAlerts) {
      if (alert.type === "health-drop") {
        const client = alert.linkedEntityId ? clientById.get(alert.linkedEntityId) : null;
        pushAlert({
          id: alert.id,
          title: "Saude critica",
          context: client?.companyName ?? alert.title,
          impact: alert.description,
          recommendation: "Reengajar cliente com follow-up imediato.",
          consequence: "Vai criar atividade de WhatsApp para hoje.",
          severity: mapRiskSeverity(alert.severity),
          kind: "health_critical",
          group: "churn",
          reasonCode: "health_drop",
          viewPath: alert.linkedEntityId ? `/clients/${alert.linkedEntityId}` : "/clients?health=critical",
          entityId: alert.linkedEntityId,
          impactScore: client?.monthlyRevenue ?? 0,
        });
        continue;
      }

      if (alert.type === "stale") {
        const opportunity = alert.linkedEntityId ? opportunityById.get(alert.linkedEntityId) : null;
        const staleDays = opportunity
          ? Math.max(1, Math.round((now.getTime() - new Date(opportunity.updatedAt).getTime()) / (1000 * 60 * 60 * 24)))
          : null;

        pushAlert({
          id: alert.id,
          title: staleDays ? `Parado ha ${staleDays}d` : "Pipeline parado",
          context: opportunity
            ? `${opportunity.clientName} - ${formatStage(opportunity.stage)}`
            : alert.title,
          impact: alert.description,
          recommendation: "Cobrar resposta e registrar proxima acao.",
          consequence: "Vai criar follow-up para hoje e abrir a oportunidade filtrada.",
          severity: mapRiskSeverity(alert.severity),
          kind: "stalled_deal",
          group: "pipeline",
          reasonCode: "stalled_deal",
          viewPath: alert.linkedEntityId
            ? `/pipes?opportunityId=${alert.linkedEntityId}&tab=activities`
            : "/pipes?filter=stale",
          entityId: alert.linkedEntityId,
          impactScore: opportunity?.value ?? 0,
        });
        continue;
      }

      if (alert.type === "sla-breach") {
        const opportunity = alert.linkedEntityId ? opportunityById.get(alert.linkedEntityId) : null;

        pushAlert({
          id: alert.id,
          title: "SLA estourado",
          context: opportunity
            ? `${opportunity.clientName} - ${formatStage(opportunity.stage)}`
            : alert.title,
          impact: alert.description,
          recommendation: "Tratar SLA imediatamente e formalizar proxima acao.",
          consequence: "Vai criar atividade critica de follow-up para hoje.",
          severity: "critical",
          kind: "sla_risk",
          group: "pipeline",
          reasonCode: "sla_breach",
          viewPath: alert.linkedEntityId
            ? `/pipes?opportunityId=${alert.linkedEntityId}&filter=sla_overdue`
            : "/pipes?filter=sla_overdue",
          entityId: alert.linkedEntityId,
          impactScore: (opportunity?.value ?? 0) + 200000,
        });
        continue;
      }

      if (alert.type === "goal-risk") {
        pushAlert({
          id: alert.id,
          title: "Meta em risco",
          context: alert.title,
          impact: alert.description,
          recommendation: "Ajustar plano de recuperacao da meta agora.",
          consequence: "Vai criar tarefa de recuperacao e abrir metas em risco.",
          severity: "critical",
          kind: "goal_risk",
          group: "goals",
          reasonCode: "goal_risk",
          viewPath: "/goals?filter=risk",
          entityId: alert.linkedEntityId,
          impactScore: 120000,
        });
        continue;
      }

      if (alert.type === "contract-expiring") {
        const client = alert.linkedEntityId ? clientById.get(alert.linkedEntityId) : null;

        pushAlert({
          id: alert.id,
          title: "Contrato expirando",
          context: client?.companyName ?? alert.title,
          impact: alert.description,
          recommendation: "Iniciar renovacao com proposta de valor objetiva.",
          consequence: "Vai criar atividade de renovacao para hoje.",
          severity: mapRiskSeverity(alert.severity),
          kind: "contract_risk",
          group: "churn",
          reasonCode: "contract_expiring",
          viewPath: alert.linkedEntityId ? `/clients/${alert.linkedEntityId}` : "/clients",
          entityId: alert.linkedEntityId,
          impactScore: client?.monthlyRevenue ?? 0,
        });
      }
    }

    const overdueActivities = filteredActivities.filter(
      (activity) => activity.effectiveStatus === "overdue"
    );

    if (overdueActivities.length > 0) {
      const maxDelayMs = overdueActivities.reduce((maxDelay, activity) => {
        const dueAt = getActivityDueAt(activity);
        return Math.max(maxDelay, now.getTime() - dueAt.getTime());
      }, 0);

      const severity: AlertSeverity =
        overdueActivities.length >= 8 ? "critical" : overdueActivities.length >= 3 ? "high" : "medium";

      pushAlert({
        id: "overdue-activities",
        title: "Atividades atrasadas",
        context: `${overdueActivities.length} item(ns) aguardando execucao`,
        impact: `Maior atraso acumulado: ${formatDelay(maxDelayMs)}.`,
        recommendation: "Priorizar backlog atrasado para proteger o SLA.",
        consequence: "Vai abrir a lista de atrasadas e criar tarefa de mutirao.",
        severity,
        kind: "overdue_activities",
        group: "activities",
        reasonCode: "overdue_activities",
        viewPath: "/activities?status=overdue",
        impactScore: overdueActivities.length * 10000,
      });
    }

    return Array.from(map.values()).sort((a, b) => {
      const bySeverity = ALERT_SEVERITY_ORDER[a.severity] - ALERT_SEVERITY_ORDER[b.severity];
      if (bySeverity !== 0) return bySeverity;
      return b.impactScore - a.impactScore;
    });
  }, [riskAlerts, filteredActivities, openOpportunities, clients, now]);

  const visibleAlerts = useMemo(() => {
    return alerts
      .filter((alert) => !dismissedIds.has(alert.id))
      .filter((alert) => (runtimeById[alert.id]?.status ?? "open") !== "snoozed")
      .filter((alert) => matchesAlertFilter(alert, activeFilter))
      .sort((a, b) => {
        const statusA = runtimeById[a.id]?.status ?? "open";
        const statusB = runtimeById[b.id]?.status ?? "open";
        const statusOrder = ALERT_STATUS_ORDER[statusA] - ALERT_STATUS_ORDER[statusB];
        if (statusOrder !== 0) return statusOrder;
        return ALERT_SEVERITY_ORDER[a.severity] - ALERT_SEVERITY_ORDER[b.severity];
      });
  }, [alerts, dismissedIds, runtimeById, activeFilter]);

  const actionableVisible = visibleAlerts.filter((alert) => {
    const status = runtimeById[alert.id]?.status ?? "open";
    return isActionableAlert(status);
  });

  const counterByFilter = useMemo(() => {
    const next: Record<AlertFilter, number> = {
      all: 0,
      critical: 0,
      churn: 0,
      pipeline: 0,
      activities: 0,
      goals: 0,
    };

    for (const alert of alerts) {
      if (dismissedIds.has(alert.id)) continue;
      const status = runtimeById[alert.id]?.status ?? "open";
      if (!isActionableAlert(status)) continue;

      next.all += 1;
      if (alert.severity === "critical") next.critical += 1;
      next[alert.group] += 1;
    }

    return next;
  }, [alerts, dismissedIds, runtimeById]);

  const isLoading = activityLoading || opportunityLoading;

  const setAlertRuntime = (alertId: string, runtime: AlertRuntime) => {
    setRuntimeById((prev) => ({
      ...prev,
      [alertId]: runtime,
    }));
  };

  const scheduleDismiss = (alertId: string) => {
    window.setTimeout(() => {
      setDismissedIds((prev) => {
        const next = new Set(prev);
        next.add(alertId);
        return next;
      });
    }, 1800);
  };

  const ensureFollowUpActivity = (
    opts: {
      title: string;
      description: string;
      type: Activity["type"];
      dueTime: string;
      opportunityId?: string;
      clientId?: string;
      searchTerm: string;
    }
  ): string => {
    const openActivity = allActivities.find((activity) => {
      if (activity.status === "completed" || activity.status === "cancelled") return false;

      const lowerTitle = activity.title.toLowerCase();
      const linkedToOpportunity = opts.opportunityId && activity.opportunityId === opts.opportunityId;
      const linkedToClient = opts.clientId && activity.clientId === opts.clientId;

      return (Boolean(linkedToOpportunity) || Boolean(linkedToClient)) && lowerTitle.includes(opts.searchTerm);
    });

    if (openActivity) {
      return openActivity.id;
    }

    const created = addActivity({
      title: opts.title,
      description: opts.description,
      type: opts.type,
      status: "pending",
      dueDate: toDateOnly(now),
      dueTime: opts.dueTime,
      opportunityId: opts.opportunityId,
      clientId: opts.clientId,
      responsibleId: userId,
      responsibleName: userName,
    });

    return created.id;
  };

  const resolveAlertByType = async (alert: DisplayAlert): Promise<ResolveResult> => {
    if (alert.kind === "health_critical") {
      const activityId = ensureFollowUpActivity({
        title: `Follow-up de saude: ${alert.context}`,
        description: `Gerado a partir de alerta: ${alert.title}`,
        type: "whatsapp",
        dueTime: "16:00",
        clientId: alert.entityId,
        searchTerm: "saude",
      });

      return {
        message: "Resolvido, atividade criada para hoje.",
        linkLabel: "Ver atividade",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    if (alert.kind === "contract_risk") {
      const activityId = ensureFollowUpActivity({
        title: `Renovacao de contrato: ${alert.context}`,
        description: `Gerado a partir de alerta: ${alert.title}`,
        type: "meeting",
        dueTime: "15:00",
        clientId: alert.entityId,
        searchTerm: "renovacao",
      });

      return {
        message: "Resolvido, atividade de renovacao criada.",
        linkLabel: "Ver atividade",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    if (alert.kind === "stalled_deal") {
      const opportunity = alert.entityId
        ? openOpportunities.find((item) => item.id === alert.entityId)
        : null;

      const activityId = ensureFollowUpActivity({
        title: `Follow-up urgente: ${opportunity?.clientName ?? alert.context}`,
        description: `Gerado a partir de alerta: ${alert.title}`,
        type: "follow-up",
        dueTime: "11:00",
        opportunityId: opportunity?.id,
        clientId: opportunity?.clientId,
        searchTerm: "follow-up",
      });

      if (opportunity?.id) {
        updateOpportunity(opportunity.id, {});
      }

      return {
        message: "Resolvido, follow-up registrado e deal atualizado.",
        linkLabel: "Ver atividade",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    if (alert.kind === "sla_risk") {
      const opportunity = alert.entityId
        ? openOpportunities.find((item) => item.id === alert.entityId)
        : null;

      const activityId = ensureFollowUpActivity({
        title: `SLA critico: ${opportunity?.clientName ?? alert.context}`,
        description: `Gerado a partir de alerta: ${alert.title}`,
        type: "call",
        dueTime: "10:00",
        opportunityId: opportunity?.id,
        clientId: opportunity?.clientId,
        searchTerm: "sla",
      });

      if (opportunity?.id) {
        updateOpportunity(opportunity.id, {});
      }

      return {
        message: "Resolvido, plano de SLA registrado para hoje.",
        linkLabel: "Ver atividade",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    if (alert.kind === "goal_risk") {
      const activityId = ensureFollowUpActivity({
        title: "Plano de recuperacao da meta",
        description: `Gerado a partir de alerta: ${alert.context}`,
        type: "task",
        dueTime: "09:00",
        searchTerm: "recuperacao da meta",
      });

      return {
        message: "Resolvido, plano de recuperacao criado.",
        linkLabel: "Ver plano",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    if (alert.kind === "overdue_activities") {
      const activityId = ensureFollowUpActivity({
        title: "Mutirao de atividades atrasadas",
        description: "Priorizar backlog atrasado e concluir itens criticos.",
        type: "task",
        dueTime: "09:30",
        searchTerm: "mutirao",
      });

      return {
        message: "Resolvido, mutirao criado para limpar atrasos.",
        linkLabel: "Ver mutirao",
        linkPath: `/activities?activityId=${activityId}`,
      };
    }

    return {
      message: "Alerta tratado com sucesso.",
      linkLabel: "Ver detalhes",
      linkPath: alert.viewPath,
    };
  };

  const handleResolve = async (alert: DisplayAlert) => {
    setAlertRuntime(alert.id, { status: "in_progress" });

    try {
      await sleep(180);
      const result = await resolveAlertByType(alert);
      setAlertRuntime(alert.id, {
        status: "resolved",
        feedback: {
          tone: "success",
          message: result.message,
          linkLabel: result.linkLabel,
          linkPath: result.linkPath,
        },
      });
      scheduleDismiss(alert.id);
    } catch {
      setAlertRuntime(alert.id, {
        status: "open",
        feedback: {
          tone: "error",
          message: FALLBACK_RETRY_MESSAGE,
        },
      });
    }
  };

  const handleMarkAsTreated = (alert: DisplayAlert) => {
    setAlertRuntime(alert.id, {
      status: "resolved",
      feedback: {
        tone: "success",
        message: "Marcado como tratado.",
        linkLabel: "Ver entidade",
        linkPath: alert.viewPath,
      },
    });
    scheduleDismiss(alert.id);
  };

  const handleCopySummary = async (alert: DisplayAlert) => {
    try {
      await navigator.clipboard.writeText(
        `${alert.title} | ${alert.context} | ${alert.impact} | Acao: ${alert.recommendation}`
      );
      setAlertRuntime(alert.id, {
        status: runtimeById[alert.id]?.status ?? "open",
        feedback: {
          tone: "info",
          message: "Resumo copiado.",
        },
      });
    } catch {
      setAlertRuntime(alert.id, {
        status: runtimeById[alert.id]?.status ?? "open",
        feedback: {
          tone: "error",
          message: "Nao consegui copiar o resumo.",
        },
      });
    }
  };

  const handleSnooze = (alert: DisplayAlert, hours: number) => {
    const reason = (snoozeReasonById[alert.id] ?? "").trim();
    const untilLabel = formatSnoozeUntil(now, hours);

    setAlertRuntime(alert.id, {
      status: "snoozed",
      feedback: {
        tone: "info",
        message: reason
          ? `Adiado ate ${untilLabel}. Motivo: ${reason}.`
          : `Adiado ate ${untilLabel}.`,
      },
    });

    setSnoozedAlerts((prev) => [...prev, { id: alert.id, label: alert.title }]);
    setSnoozePopoverId(null);
  };

  const handleUndoLastSnooze = () => {
    setSnoozedAlerts((prev) => {
      if (prev.length === 0) return prev;

      const next = [...prev];
      const last = next.pop();
      if (last) {
        setAlertRuntime(last.id, {
          status: "open",
          feedback: {
            tone: "info",
            message: "Adiamento desfeito.",
          },
        });
      }
      return next;
    });
  };

  const handleResolveVisible = async () => {
    if (actionableVisible.length < 2) return;

    const confirmed = window.confirm(
      `Resolver ${actionableVisible.length} alerta(s) visivel(is) de uma vez?`
    );

    if (!confirmed) return;

    for (const alert of actionableVisible) {
      await handleResolve(alert);
    }
  };

  return (
    <BentoCard className="premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/88 p-5 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="text-base font-semibold text-zinc-900">Alertas Criticos</h3>
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-red-200 bg-red-50 px-2 text-xs font-semibold text-red-700">
            {counterByFilter.all}
          </span>
          {snoozedAlerts.length > 0 ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700">
              Adiados {snoozedAlerts.length}
              <button
                type="button"
                className="underline underline-offset-4"
                onClick={handleUndoLastSnooze}
              >
                Desfazer
              </button>
            </span>
          ) : null}
        </div>

        {actionableVisible.length > 1 ? (
          <Button
            size="xs"
            variant="outline"
            className="h-7 rounded-full border-zinc-200 px-3 text-xs"
            onClick={handleResolveVisible}
          >
            Resolver todos do tipo
          </Button>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ALERT_FILTER_OPTIONS.map((option) => {
          const active = activeFilter === option.id;
          const count = counterByFilter[option.id];
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setActiveFilter(option.id)}
              className={cn(
                "inline-flex h-7 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium transition-[border-color,background-color,color] duration-150",
                active
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
              )}
            >
              {option.label}
              <span className={cn("text-[10px]", active ? "text-white/80" : "text-zinc-400")}>{count}</span>
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-xl border border-zinc-200/80 p-3">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="mt-2 h-3 w-full" />
              <Skeleton className="mt-2 h-3 w-[82%]" />
            </div>
          ))}
        </div>
      ) : null}

      {!isLoading && visibleAlerts.length === 0 ? (
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/40 p-6 text-center">
          <CheckCircle2 className="mx-auto h-7 w-7 text-emerald-600" />
          <p className="mt-2 text-sm font-medium text-zinc-900">Sem alertas ativos no seu escopo.</p>
          <p className="mt-1 text-xs text-zinc-500">Tudo estavel por enquanto.</p>
        </div>
      ) : null}

      {!isLoading ? (
        <div className="space-y-2.5">
          {visibleAlerts.map((alert) => {
            const runtime = runtimeById[alert.id];
            const status = runtime?.status ?? "open";
            const isProcessing = status === "in_progress";
            const isResolved = status === "resolved";

            return (
              <article
                key={alert.id}
                className={cn(
                  "rounded-xl border bg-white p-3 transition-[border-color,box-shadow,background-color] duration-150",
                  "hover:border-zinc-300 hover:bg-zinc-50/40 hover:shadow-[0_14px_24px_-24px_rgba(15,23,42,0.45)]",
                  isResolved && "border-emerald-200 bg-emerald-50/30",
                  !isResolved && alert.severity === "critical" && "border-red-200/85",
                  !isResolved && alert.severity === "high" && "border-amber-200/85",
                  !isResolved && alert.severity === "medium" && "border-sky-200/85"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0">{getAlertIcon(alert)}</span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <p className="text-sm font-semibold text-zinc-900">{alert.title}</p>
                          <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold", getAlertBadgeClass(alert.severity))}>
                            {getSeverityLabel(alert.severity)}
                          </span>
                          {alert.duplicateCount > 1 ? (
                            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
                              +{alert.duplicateCount - 1}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-1 truncate text-sm text-zinc-700">{alert.context}</p>
                        <p className="mt-0.5 text-xs text-zinc-500">Impacto: {alert.impact}</p>
                      </div>
                    </div>

                    <div className="mt-2 rounded-lg border border-zinc-200/80 bg-zinc-50/70 p-2.5">
                      <p className="text-xs font-semibold text-zinc-700">Acao recomendada: {alert.recommendation}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{alert.consequence}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <Button
                      size="xs"
                      className="h-7 rounded-md bg-zinc-900 px-3 text-xs font-semibold text-white hover:bg-zinc-800"
                      disabled={isProcessing || isResolved}
                      onClick={() => handleResolve(alert)}
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          Executando...
                        </>
                      ) : (
                        "Resolver"
                      )}
                    </Button>

                    <Button
                      size="xs"
                      variant="outline"
                      className="h-7 rounded-md border-zinc-200 px-3 text-xs"
                      onClick={() => router.push(alert.viewPath)}
                    >
                      Ver
                    </Button>

                    <div className="flex items-center gap-1">
                      <Popover
                        open={snoozePopoverId === alert.id}
                        onOpenChange={(open) => setSnoozePopoverId(open ? alert.id : null)}
                      >
                        <PopoverTrigger asChild>
                          <Button size="xs" variant="ghost" className="h-7 px-2 text-xs text-zinc-600">
                            <Clock3 className="h-3.5 w-3.5" />
                            Adiar
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-64 rounded-xl border-zinc-200 p-3">
                          <PopoverHeader className="gap-0.5">
                            <PopoverTitle>Adiar alerta</PopoverTitle>
                            <PopoverDescription>Escolha o tempo e informe o motivo.</PopoverDescription>
                          </PopoverHeader>
                          <Input
                            className="mt-2 h-8"
                            placeholder="Motivo (opcional)"
                            value={snoozeReasonById[alert.id] ?? ""}
                            onChange={(event) =>
                              setSnoozeReasonById((prev) => ({
                                ...prev,
                                [alert.id]: event.target.value,
                              }))
                            }
                          />
                          <div className="mt-2 grid grid-cols-3 gap-1.5">
                            {SNOOZE_OPTIONS.map((option) => (
                              <Button
                                key={option.label}
                                size="xs"
                                variant="outline"
                                className="h-7 rounded-md border-zinc-200 text-[11px]"
                                onClick={() => handleSnooze(alert, option.hours)}
                              >
                                {option.label}
                              </Button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon-xs" variant="ghost" className="h-7 w-7 text-zinc-500">
                            <MoreHorizontal className="h-3.5 w-3.5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-52 rounded-xl">
                          <DropdownMenuItem onClick={() => handleMarkAsTreated(alert)}>
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Marcar como tratado
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleCopySummary(alert)}>
                            <Copy className="h-3.5 w-3.5" />
                            Copiar resumo
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => router.push(alert.viewPath)}>
                            <ExternalLink className="h-3.5 w-3.5" />
                            Abrir entidade
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                {runtime?.feedback ? (
                  <div
                    className={cn(
                      "mt-2 flex flex-wrap items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs",
                      runtime.feedback.tone === "success" && "border-emerald-200 bg-emerald-50/70 text-emerald-700",
                      runtime.feedback.tone === "info" && "border-sky-200 bg-sky-50/70 text-sky-700",
                      runtime.feedback.tone === "error" && "border-red-200 bg-red-50/70 text-red-700"
                    )}
                  >
                    <span>{runtime.feedback.message}</span>
                    {runtime.feedback.linkPath && runtime.feedback.linkLabel ? (
                      <button
                        type="button"
                        className="font-semibold underline underline-offset-4"
                        onClick={() => router.push(runtime.feedback?.linkPath ?? alert.viewPath)}
                      >
                        {runtime.feedback.linkLabel}
                      </button>
                    ) : null}
                    {runtime.feedback.tone === "error" ? (
                      <button
                        type="button"
                        className="font-semibold underline underline-offset-4"
                        onClick={() => handleResolve(alert)}
                      >
                        Tentar novamente
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      ) : null}
    </BentoCard>
  );
}

export function TodayActivities() {
  const router = useRouter();
  const { filteredActivities, now } = useDashboardFilters();

  const completeActivity = useActivityStore((s) => s.completeActivity);
  const postponeActivity = useActivityStore((s) => s.postponeActivity);
  const cancelActivity = useActivityStore((s) => s.cancelActivity);
  const activityLoading = useActivityStore((s) => s.isLoading);

  const [executedIds, setExecutedIds] = useState<Set<string>>(new Set());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [rescheduleDraftById, setRescheduleDraftById] = useState<Record<string, RescheduleDraft>>({});
  const [notice, setNotice] = useState<AgendaNotice | null>(null);
  const [runtimeById, setRuntimeById] = useState<Record<string, AgendaItemRuntime>>({});

  const todayIso = toDateOnly(now);

  const agendaItems = useMemo<ActivityAgendaItem[]>(() => {
    return filteredActivities
      .filter((activity) => activity.effectiveStatus === "pending" || activity.effectiveStatus === "overdue")
      .filter((activity) => activity.dueDate <= todayIso)
      .map((activity) => {
        const dueAt = getActivityDueAt(activity);
        const isOverdue = activity.effectiveStatus === "overdue";
        const status: ActivityAgendaItem["status"] = isOverdue ? "overdue" : "pending";

        return {
          id: activity.id,
          title: activity.title,
          clientLine:
            activity.clientName ||
            activity.opportunityTitle ||
            "Sem cliente associado",
          description: activity.description || "Sem descricao registrada.",
          type: activity.type,
          status,
          dueDate: activity.dueDate,
          dueTime: activity.dueTime,
          dueAt,
          hasTime: Boolean(activity.dueTime),
          delayLabel: isOverdue ? `Atrasada ${formatDelay(now.getTime() - dueAt.getTime())}` : null,
        };
      })
      .sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime())
      .slice(0, 10);
  }, [filteredActivities, now, todayIso]);

  const timedItems = agendaItems.filter((item) => item.hasTime);
  const unscheduledItems = agendaItems.filter((item) => !item.hasTime);

  const overdueCount = agendaItems.filter((item) => item.status === "overdue").length;
  const todayCount = agendaItems.filter((item) => item.dueDate === todayIso).length;

  const setItemRuntime = (activityId: string, runtime: AgendaItemRuntime) => {
    setRuntimeById((prev) => ({
      ...prev,
      [activityId]: runtime,
    }));
  };

  const openReschedule = (item: ActivityAgendaItem) => {
    const fallbackDate = toDateOnly(addDays(now, 1));
    setEditingId(item.id);
    setRescheduleDraftById((prev) => ({
      ...prev,
      [item.id]: {
        dueDate: item.dueDate || fallbackDate,
        dueTime: item.dueTime || "09:00",
      },
    }));
  };

  const handleExecute = (item: ActivityAgendaItem) => {
    setExecutedIds((prev) => {
      const next = new Set(prev);
      next.add(item.id);
      return next;
    });

    setNotice({
      tone: "info",
      message: `${getExecuteLabel(item.type)} iniciado. Ao voltar, conclua ou registre nota.`,
      linkLabel: "Abrir atividade",
      linkPath: `/activities?activityId=${item.id}`,
    });

    router.push(getExecutePath(item.id, item.type));
  };

  const handleComplete = (item: ActivityAgendaItem) => {
    setItemRuntime(item.id, { loading: true });
    try {
      completeActivity(item.id, "Concluida pela Agenda de Hoje");
      setNotice({
        tone: "success",
        message: "Atividade concluida com sucesso.",
        linkLabel: "Ver historico",
        linkPath: "/activities?status=completed",
      });
      setExecutedIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
      setItemRuntime(item.id, {});
    } catch {
      setItemRuntime(item.id, { error: "Nao consegui concluir agora." });
    }
  };

  const handleSaveReschedule = (item: ActivityAgendaItem) => {
    const draft = rescheduleDraftById[item.id];
    if (!draft?.dueDate) {
      setItemRuntime(item.id, { error: "Escolha uma data valida." });
      return;
    }

    setItemRuntime(item.id, { loading: true });

    try {
      postponeActivity(item.id, draft.dueDate, draft.dueTime || undefined);
      setEditingId(null);
      setNotice({
        tone: "success",
        message: `Reagendado para ${formatRescheduleLabel(draft.dueDate, draft.dueTime)}.`,
      });
      setExecutedIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
      setItemRuntime(item.id, {});
    } catch {
      setItemRuntime(item.id, { error: "Nao consegui reagendar agora." });
    }
  };

  const handleCancel = (item: ActivityAgendaItem) => {
    const confirmed = window.confirm("Cancelar esta atividade?");
    if (!confirmed) return;

    setItemRuntime(item.id, { loading: true });

    try {
      cancelActivity(item.id);
      setNotice({
        tone: "info",
        message: "Atividade cancelada.",
      });
      setItemRuntime(item.id, {});
    } catch {
      setItemRuntime(item.id, { error: "Nao consegui cancelar agora." });
    }
  };

  return (
    <BentoCard className="premium-panel flex min-h-[320px] flex-col gap-4 border-zinc-200/80 bg-white/88 p-5 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="text-base font-semibold text-zinc-900">Agenda de Hoje</h3>
          <span className="inline-flex h-6 items-center rounded-full border border-red-200 bg-red-50 px-2 text-[11px] font-semibold text-red-700">
            Atrasadas {overdueCount}
          </span>
          <span className="inline-flex h-6 items-center rounded-full border border-zinc-200 bg-zinc-100 px-2 text-[11px] font-semibold text-zinc-700">
            Hoje {todayCount}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="xs"
            variant="outline"
            className="h-7 rounded-full border-zinc-200 px-3 text-xs"
            onClick={() => router.push("/activities?view=agenda")}
          >
            Ver tudo
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon-xs" variant="ghost" className="h-7 w-7 text-zinc-500">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 rounded-xl">
              <DropdownMenuItem onClick={() => router.push("/activities?view=agenda&export=csv")}>Exportar agenda</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/activities?view=agenda&settings=display")}>Preferencias de visualizacao</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/activities?status=overdue")}>Ver apenas atrasadas</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {notice ? (
        <div
          className={cn(
            "flex flex-wrap items-center gap-2 rounded-lg border px-3 py-2 text-xs",
            notice.tone === "success" && "border-emerald-200 bg-emerald-50/70 text-emerald-700",
            notice.tone === "info" && "border-sky-200 bg-sky-50/70 text-sky-700",
            notice.tone === "error" && "border-red-200 bg-red-50/70 text-red-700"
          )}
        >
          <span>{notice.message}</span>
          {notice.linkPath && notice.linkLabel ? (
            <button
              type="button"
              className="font-semibold underline underline-offset-4"
              onClick={() => router.push(notice.linkPath ?? "/activities")}
            >
              {notice.linkLabel}
            </button>
          ) : null}
        </div>
      ) : null}

      {activityLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-xl border border-zinc-200/80 p-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="mt-2 h-3 w-[88%]" />
              <Skeleton className="mt-2 h-8 w-40" />
            </div>
          ))}
        </div>
      ) : null}

      {!activityLoading && agendaItems.length === 0 ? (
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/40 p-6 text-center">
          <CheckCircle2 className="mx-auto h-7 w-7 text-emerald-600" />
          <p className="mt-2 text-sm font-medium text-zinc-900">Sem atividades pendentes para hoje.</p>
          <p className="mt-1 text-xs text-zinc-500">A agenda esta limpa no seu escopo.</p>
          <Button
            size="xs"
            variant="outline"
            className="mt-3 h-7 rounded-full border-zinc-200 px-3 text-xs"
            onClick={() => router.push("/activities?view=agenda")}
          >
            Abrir agenda completa
          </Button>
        </div>
      ) : null}

      {!activityLoading && agendaItems.length > 0 ? (
        <div className="space-y-2">
          {timedItems.map((item) => {
            const Icon = getActivityTypeIcon(item.type);
            const runtime = runtimeById[item.id];
            const draft = rescheduleDraftById[item.id];
            const isEditing = editingId === item.id;
            const wasExecuted = executedIds.has(item.id);

            return (
              <article
                key={item.id}
                className={cn(
                  "rounded-xl border border-zinc-200/85 bg-white p-3 transition-[border-color,box-shadow,background-color] duration-150",
                  "hover:border-zinc-300 hover:bg-zinc-50/40 hover:shadow-[0_12px_24px_-24px_rgba(15,23,42,0.45)]",
                  item.status === "overdue" && "border-red-200/90"
                )}
              >
                <div className="grid gap-3 md:grid-cols-[96px_minmax(0,1fr)_auto] md:items-start">
                  <div className="space-y-1">
                    <p className="text-xl font-semibold tabular-nums text-zinc-900">{item.dueTime || "--:--"}</p>
                    {item.delayLabel ? <p className="text-xs font-medium text-red-600">{item.delayLabel}</p> : <p className="text-xs text-zinc-500">No prazo</p>}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start gap-2">
                      <Icon className="mt-0.5 h-4 w-4 text-zinc-500" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-zinc-900">{item.title}</p>
                        <p className="truncate text-xs text-zinc-600">{item.clientLine}</p>
                        <p className="mt-0.5 truncate text-xs text-zinc-500">{item.description}</p>
                      </div>
                    </div>

                    {wasExecuted ? (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 p-2">
                        <span className="text-xs text-zinc-600">Execucao iniciada:</span>
                        <Button
                          size="xs"
                          className="h-7 rounded-md bg-zinc-900 px-2.5 text-xs text-white hover:bg-zinc-800"
                          onClick={() => handleComplete(item)}
                        >
                          Marcar concluida
                        </Button>
                        <Button
                          size="xs"
                          variant="outline"
                          className="h-7 rounded-md border-zinc-200 px-2.5 text-xs"
                          onClick={() => router.push(`/activities?activityId=${item.id}`)}
                        >
                          Registrar nota
                        </Button>
                      </div>
                    ) : null}

                    {isEditing ? (
                      <div className="mt-2 grid gap-1.5 rounded-md border border-zinc-200 bg-zinc-50/80 p-2 md:grid-cols-[1fr_110px_auto] md:items-center">
                        <Input
                          type="date"
                          className="h-8"
                          value={draft?.dueDate ?? ""}
                          onChange={(event) =>
                            setRescheduleDraftById((prev) => ({
                              ...prev,
                              [item.id]: {
                                dueDate: event.target.value,
                                dueTime: prev[item.id]?.dueTime ?? item.dueTime ?? "09:00",
                              },
                            }))
                          }
                        />
                        <Input
                          type="time"
                          className="h-8"
                          value={draft?.dueTime ?? ""}
                          onChange={(event) =>
                            setRescheduleDraftById((prev) => ({
                              ...prev,
                              [item.id]: {
                                dueDate: prev[item.id]?.dueDate ?? item.dueDate,
                                dueTime: event.target.value,
                              },
                            }))
                          }
                        />
                        <div className="flex items-center gap-1">
                          <Button
                            size="xs"
                            className="h-8 rounded-md bg-zinc-900 px-2.5 text-xs text-white hover:bg-zinc-800"
                            onClick={() => handleSaveReschedule(item)}
                          >
                            Salvar
                          </Button>
                          <Button
                            size="xs"
                            variant="ghost"
                            className="h-8 rounded-md px-2.5 text-xs"
                            onClick={() => setEditingId(null)}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    ) : null}

                    {runtime?.error ? (
                      <div className="mt-2 rounded-md border border-red-200 bg-red-50/70 px-2.5 py-1.5 text-xs text-red-700">
                        {runtime.error}
                        <button
                          type="button"
                          className="ml-2 font-semibold underline underline-offset-4"
                          onClick={() => setItemRuntime(item.id, {})}
                        >
                          Tentar novamente
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 md:flex-col md:items-end">
                    <Button
                      size="xs"
                      className="h-7 rounded-md bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
                      disabled={runtime?.loading}
                      onClick={() => handleExecute(item)}
                    >
                      {runtime?.loading ? (
                        <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        getExecuteLabel(item.type)
                      )}
                    </Button>

                    <Button
                      size="xs"
                      variant="outline"
                      className="h-7 rounded-md border-zinc-200 px-3 text-xs"
                      disabled={runtime?.loading}
                      onClick={() => openReschedule(item)}
                    >
                      Reagendar
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon-xs" variant="ghost" className="h-7 w-7 text-zinc-500">
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44 rounded-xl">
                        <DropdownMenuItem onClick={() => handleComplete(item)}>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Concluir
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push(`/activities?activityId=${item.id}`)}>
                          <ExternalLink className="h-3.5 w-3.5" />
                          Ver detalhes
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleCancel(item)}>
                          Cancelar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </article>
            );
          })}

          {unscheduledItems.length > 0 ? (
            <div className="rounded-xl border border-zinc-200/85 bg-zinc-50/30 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Sem horario</p>
                <Button
                  size="xs"
                  variant="ghost"
                  className="h-7 px-2 text-xs text-zinc-600"
                  onClick={() => {
                    const first = unscheduledItems[0];
                    if (first) openReschedule(first);
                  }}
                >
                  Definir horario
                </Button>
              </div>

              <div className="space-y-2">
                {unscheduledItems.map((item) => {
                  const Icon = getActivityTypeIcon(item.type);
                  return (
                    <div
                      key={item.id}
                      className="rounded-lg border border-zinc-200/85 bg-white p-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 items-start gap-2">
                          <Icon className="mt-0.5 h-4 w-4 text-zinc-500" />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-zinc-900">{item.title}</p>
                            <p className="truncate text-xs text-zinc-600">{item.clientLine}</p>
                          </div>
                        </div>
                        <Button
                          size="xs"
                          variant="outline"
                          className="h-7 rounded-md border-zinc-200 px-2.5 text-xs"
                          onClick={() => openReschedule(item)}
                        >
                          Definir horario
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </BentoCard>
  );
}
