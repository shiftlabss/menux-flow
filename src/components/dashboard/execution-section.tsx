"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  MoreHorizontal,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useActivityStore } from "@/stores/activity-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useExecutionPanelData } from "@/hooks/use-execution-panel-data";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import type { RiskAlert } from "@/lib/proactive-engine";

// --- Critical Alerts Component ---

type AlertSeverity = "critical" | "warning" | "info";

interface DisplayAlert {
  id: string;
  severity: AlertSeverity;
  title: string;
  consequence: string;
  type: RiskAlert["type"] | "overdue-activities";
  linkedEntityId?: string;
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
  const updateOpportunity = useOpportunityStore((s) => s.updateOpportunity);
  const addActivity = useActivityStore((s) => s.addActivity);
  const completeActivity = useActivityStore((s) => s.completeActivity);
  const dismissedIds = useMemo(() => new Set<string>(), []);
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());

  // Map proactive engine alerts to display alerts
  const alerts: DisplayAlert[] = useMemo(() => {
    const result: DisplayAlert[] = [];

    // Add proactive engine risk alerts
    for (const alert of riskAlerts) {
      result.push({
        id: alert.id,
        severity: alert.severity === "critical" ? "critical" : "warning",
        title: alert.title,
        consequence: alert.description,
        type: alert.type,
        linkedEntityId: alert.linkedEntityId,
      });
    }

    // Add overdue activities alert if not already covered
    const overdueCount = filteredActivities.filter(
      (a) => a.effectiveStatus === "overdue"
    ).length;
    if (
      overdueCount > 0 &&
      !result.some((a) => a.type === "sla-breach")
    ) {
      result.push({
        id: "overdue-activities",
        severity: "info",
        title: `${overdueCount} atividade${overdueCount > 1 ? "s" : ""} atrasada${overdueCount > 1 ? "s" : ""}`,
        consequence: "Impacto no pipeline da semana",
        type: "overdue-activities",
      });
    }

    return result;
  }, [riskAlerts, filteredActivities]);

  const visibleAlerts = alerts.filter(
    (a) => !dismissedIds.has(a.id) && !resolvedIds.has(a.id)
  );

  function resolveAlert(alert: DisplayAlert) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    switch (alert.type) {
      case "sla-breach":
      case "stale": {
        // Reset the opportunity's updatedAt + create a follow-up activity
        if (alert.linkedEntityId) {
          updateOpportunity(alert.linkedEntityId, {});
          const opp = openOpportunities.find((o) => o.id === alert.linkedEntityId);
          if (opp) {
            addActivity({
              title: `Follow-up urgente: ${opp.title || opp.clientName}`,
              description: `Gerado ao resolver alerta: ${alert.title}`,
              type: "call",
              status: "pending",
              dueDate: tomorrowStr,
              dueTime: "09:00",
              opportunityId: opp.id,
              clientId: opp.clientId || "",
              responsibleId: userId || opp.responsibleId,
              responsibleName: opp.responsibleName,
            });
          }
        }
        break;
      }

      case "overdue-activities": {
        // Complete the first overdue activity
        const firstOverdue = filteredActivities.find(
          (a) => a.effectiveStatus === "overdue"
        );
        if (firstOverdue) {
          completeActivity(firstOverdue.id, "Resolvido via dashboard");
        }
        break;
      }

      case "contract-expiring": {
        // Create a renewal task
        if (alert.linkedEntityId) {
          addActivity({
            title: `Renovação de contrato`,
            description: `Gerado ao resolver alerta: ${alert.title}`,
            type: "meeting",
            status: "pending",
            dueDate: tomorrowStr,
            dueTime: "14:00",
            opportunityId: "",
            clientId: alert.linkedEntityId,
            responsibleId: userId,
            responsibleName: "",
          });
        }
        break;
      }

      case "goal-risk": {
        router.push("/goals");
        break;
      }

      case "health-drop": {
        // Create follow-up activity for client health
        if (alert.linkedEntityId) {
          addActivity({
            title: `Acompanhamento de saúde do cliente`,
            description: `Gerado ao resolver alerta: ${alert.title}`,
            type: "call",
            status: "pending",
            dueDate: tomorrowStr,
            dueTime: "10:00",
            opportunityId: "",
            clientId: alert.linkedEntityId,
            responsibleId: userId,
            responsibleName: "",
          });
        }
        break;
      }
    }

    setResolvedIds((prev) => new Set(prev).add(alert.id));
  }

  return (
    <BentoCard className="premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-900">Alertas Críticos</h3>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600">
          {visibleAlerts.length}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {visibleAlerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <CheckCircle2 className="mb-2 h-8 w-8 text-emerald-500" />
              <p className="text-sm font-medium text-zinc-900">Tudo limpo!</p>
              <p className="text-xs text-zinc-500">Sem alertas pendentes.</p>
            </motion.div>
          )}
          {visibleAlerts.map((alert) => (
            <motion.div
              key={alert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
              className={cn(
                "group relative flex flex-col gap-2 rounded-xl border bg-zinc-50/70 p-3 transition-all duration-140 ease-out hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_14px_24px_-20px_rgba(15,23,42,0.45)]",
                alert.severity === "critical"
                  ? "border-red-200/85"
                  : alert.severity === "warning"
                    ? "border-amber-200/85"
                    : "border-blue-200/85"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {alert.severity === "critical" ? (
                    <AlertCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  ) : alert.severity === "warning" ? (
                    <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-600" />
                  ) : (
                    <Info className="mt-0.5 h-4 w-4 text-blue-600" />
                  )}

                  <div>
                    <p className="text-sm font-medium text-zinc-900">{alert.title}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      Impacto: <span className="font-medium">{alert.consequence}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-1 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 text-xs hover:bg-white hover:text-emerald-600"
                  onClick={() => resolveAlert(alert)}
                >
                  Resolver <CheckCircle2 className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </BentoCard>
  );
}

// --- Today Activities Component ---

interface ActivityDisplay {
  id: string;
  time: string;
  title: string;
  details: string;
  type: "call" | "email" | "meeting";
  status: "pending" | "overdue" | "done";
}

function mapActivityType(type: string): ActivityDisplay["type"] {
  if (type === "call" || type === "email" || type === "meeting") return type;
  return "meeting";
}

export function TodayActivities() {
  const router = useRouter();
  const { filteredActivities } = useDashboardFilters();
  const completeStoreActivity = useActivityStore((s) => s.completeActivity);

  const pendingActivities: ActivityDisplay[] = useMemo(() => {
    return filteredActivities
      .filter((a) => a.effectiveStatus === "pending" || a.effectiveStatus === "overdue")
      .slice(0, 5)
      .map((a) => ({
        id: a.id,
        time: a.dueTime || "—",
        title: a.title,
        details: a.description || a.opportunityId || "—",
        type: mapActivityType(a.type),
        status: a.effectiveStatus === "overdue" ? ("overdue" as const) : ("pending" as const),
      }));
  }, [filteredActivities]);

  const completeActivityHandler = (id: string) => {
    completeStoreActivity(id);
  };

  return (
    <BentoCard className="premium-panel flex min-h-[300px] flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-900">Agenda de Hoje</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreHorizontal className="h-4 w-4 text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-xl">
            <DropdownMenuItem onClick={() => router.push("/activities")}>
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              Ver todas atividades
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/activities?status=overdue")}
            >
              <AlertCircle className="mr-2 h-3.5 w-3.5 text-red-500" />
              Ver atrasadas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative space-y-0">
        {/* Timeline Line */}
        <div className="absolute bottom-2 left-[3.25rem] top-2 w-px bg-zinc-100" />

        <AnimatePresence>
          {pendingActivities.length === 0 && (
            <div className="py-8 text-center text-sm text-zinc-500">
              Agenda livre! Bom descanso.
            </div>
          )}
          {pendingActivities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="group relative flex items-center gap-4 py-3 first:pt-0"
            >
              <div className="w-10 text-right font-mono text-xs font-semibold text-zinc-400">
                {activity.time}
              </div>

              <div
                className={cn(
                  "relative z-10 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-white",
                  activity.status === "overdue" ? "bg-red-500" : "bg-zinc-300"
                )}
              />

              <div className="flex-1 rounded-lg border border-transparent p-2 transition-all group-hover:border-zinc-100 group-hover:bg-zinc-50/50">
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      className={cn(
                        "text-sm font-medium",
                        activity.status === "overdue"
                          ? "text-red-600"
                          : "text-zinc-900"
                      )}
                    >
                      {activity.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      {activity.type === "meeting" && (
                        <Calendar className="h-3 w-3" />
                      )}
                      {activity.type === "call" && <Phone className="h-3 w-3" />}
                      {activity.type === "email" && <Mail className="h-3 w-3" />}
                      <span>{activity.details}</span>
                    </div>
                    {activity.status === "overdue" && (
                      <span className="mt-1 inline-block rounded-sm bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600">
                        ATRASADO
                      </span>
                    )}
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-zinc-400 opacity-0 hover:bg-emerald-50 hover:text-emerald-600 group-hover:opacity-100"
                    onClick={() => completeActivityHandler(activity.id)}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </BentoCard>
  );
}
