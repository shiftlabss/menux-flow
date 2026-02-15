"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CalendarClock,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  CircleDashed,
  Copy,
  Filter,
  GitCommitVertical,
  List,
  Loader2,
  Plus,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "@/stores/ui-store";
import { useActivityStore } from "@/stores/activity-store";
import type { Activity, ActivityStatus, ActivityType } from "@/types";
import { allActivityTypes, typeColors, typeIconComponents, typeLabels } from "./components/config";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ViewMode = "list" | "agenda" | "timeline";
type SlaFilter = "all" | "breached" | "risk";
type SectionKey = "jarvis" | "overdue" | "today" | "next7";

type RecommendationActionState = "idle" | "loading" | "success" | "error";
type ActivityFeedbackState =
  | "idle"
  | "loading-complete"
  | "complete-success"
  | "loading-postpone"
  | "postpone-success"
  | "error";

interface JarvisRecommendation {
  id: string;
  activityId: string;
  title: string;
  context: string;
  why: string;
  primaryActionLabel: string;
  actionKind: "message" | "call" | "reschedule";
}

interface ActivityFeedback {
  state: ActivityFeedbackState;
  message?: string;
}

interface CommandResult {
  status: "success" | "error";
  text: string;
}

const STATUS_OPTIONS: { value: ActivityStatus; label: string }[] = [
  { value: "pending", label: "Pendente" },
  { value: "overdue", label: "Atrasada" },
  { value: "completed", label: "Concluída" },
  { value: "cancelled", label: "Cancelada" },
];

const DEFAULT_STATUS_FILTER = new Set<ActivityStatus>([
  "pending",
  "overdue",
  "completed",
  "cancelled",
]);

const SLA_OPTIONS: { value: SlaFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "breached", label: "Estourado" },
  { value: "risk", label: "Em risco" },
];

const DAY_MS = 24 * 60 * 60 * 1000;

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseDateISO(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function formatDateBR(dateStr: string): string {
  return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

function formatDateFull(dateStr: string): string {
  return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getDelayText(daysOverdue: number): string {
  if (daysOverdue <= 0) return "";
  if (daysOverdue === 1) return "1 dia de atraso";
  if (daysOverdue < 7) return `${daysOverdue} dias de atraso`;
  if (daysOverdue < 30) {
    const weeks = Math.floor(daysOverdue / 7);
    return weeks === 1 ? "1 semana de atraso" : `${weeks} semanas de atraso`;
  }
  const months = Math.floor(daysOverdue / 30);
  return months === 1 ? "1 mês de atraso" : `${months} meses de atraso`;
}

function getRelativeTimeLabel(activity: Activity, now: Date): string {
  const dueDate = startOfDay(parseDateISO(activity.dueDate));
  const today = startOfDay(now);
  const diffDays = Math.floor((dueDate.getTime() - today.getTime()) / DAY_MS);

  if (diffDays < 0 || activity.status === "overdue") {
    return getDelayText(Math.max(1, Math.abs(diffDays)));
  }

  if (diffDays === 0) {
    return activity.dueTime ? `Hoje · ${activity.dueTime}` : "Hoje";
  }

  if (diffDays === 1) return "Amanhã";
  if (diffDays <= 7) return `Em ${diffDays} dias`;
  return formatDateFull(activity.dueDate);
}

function isActivityOverdue(activity: Activity, now: Date): boolean {
  if (activity.status === "overdue") return true;
  if (activity.status === "completed" || activity.status === "cancelled") return false;
  return startOfDay(parseDateISO(activity.dueDate)).getTime() < startOfDay(now).getTime();
}

function isSlaRisk(activity: Activity, now: Date): boolean {
  if (activity.status !== "pending") return false;
  const today = startOfDay(now);
  const tomorrow = addDays(today, 1);
  const due = startOfDay(parseDateISO(activity.dueDate));
  return due.getTime() >= today.getTime() && due.getTime() <= tomorrow.getTime();
}

function getStatusChip(activity: Activity, now: Date): {
  label: string;
  className: string;
} {
  if (isActivityOverdue(activity, now)) {
    return {
      label: "Atrasada",
      className: "bg-status-danger-light text-status-danger border-status-danger/20",
    };
  }

  const due = startOfDay(parseDateISO(activity.dueDate));
  const today = startOfDay(now);

  if (due.getTime() === today.getTime()) {
    return {
      label: "Hoje",
      className: "bg-status-warning-light text-status-warning border-status-warning/25",
    };
  }

  if (activity.status === "completed") {
    return {
      label: "Concluída",
      className: "bg-status-success-light text-status-success border-status-success/20",
    };
  }

  if (activity.status === "cancelled") {
    return {
      label: "Cancelada",
      className: "bg-zinc-100 text-zinc-500 border-zinc-200",
    };
  }

  return {
    label: "Pendente",
    className: "bg-status-info-light text-status-info border-status-info/20",
  };
}

function getActivityChecklist(activity: Activity): string[] {
  const base = [
    "Contexto do cliente validado",
    "Objetivo da interação definido",
    "Próxima ação registrada",
  ];

  if (activity.type === "meeting") {
    return [
      "Participantes confirmados",
      "Pauta compartilhada",
      "Follow-up preparado",
    ];
  }

  if (activity.type === "call" || activity.type === "whatsapp") {
    return [
      "Script revisado",
      "Objeções mapeadas",
      "Próximo passo combinado",
    ];
  }

  return base;
}

function getActivityInsight(activity: Activity, now: Date): {
  message: string;
  nextStep: string;
  risk: string;
} {
  const label = activity.clientName || activity.opportunityTitle || "o cliente";
  const overdue = isActivityOverdue(activity, now);
  const urgency = overdue ? "urgente" : "prioritária";

  return {
    message:
      activity.type === "email"
        ? `Olá! Revendo nossa agenda, gostaria de avançar o próximo passo com ${label}. Podemos alinhar ainda hoje?`
        : activity.type === "meeting"
          ? `Perfeito, vamos alinhar os pontos críticos de ${label} e sair com decisão clara no final da reunião.`
          : `Oi! Passando para mantermos ${label} em ritmo ${urgency}. Você consegue me confirmar o melhor horário para avançarmos?`,
    nextStep:
      activity.type === "task"
        ? "Feche esta tarefa e transforme em contato ativo com data definida."
        : "Registrar compromisso com data/horário e responsável antes de encerrar.",
    risk: overdue
      ? `Se ignorar, ${label} pode perder prioridade e aumentar risco de churn.`
      : `Se ignorar, ${label} perde cadência e pode esfriar o ciclo de decisão.`,
  };
}

function buildRecommendations(
  activities: Activity[],
  now: Date,
  seed: number
): JarvisRecommendation[] {
  const sorted = [...activities].sort((a, b) => {
    const aDue = parseDateISO(a.dueDate).getTime();
    const bDue = parseDateISO(b.dueDate).getTime();

    const aScore =
      (isActivityOverdue(a, now) ? 1000 : 0) +
      (a.type === "follow-up" ? 120 : 0) +
      (a.type === "call" ? 90 : 0) +
      (a.status === "pending" ? 40 : 0);
    const bScore =
      (isActivityOverdue(b, now) ? 1000 : 0) +
      (b.type === "follow-up" ? 120 : 0) +
      (b.type === "call" ? 90 : 0) +
      (b.status === "pending" ? 40 : 0);

    if (aScore !== bScore) return bScore - aScore;
    if (aDue !== bDue) return aDue - bDue;
    return a.title.localeCompare(b.title);
  });

  const offset = seed % 2;
  return sorted.slice(offset, offset + 3).map((activity, index) => {
    const context = `${activity.clientName || activity.opportunityTitle || "Sem contexto"} · ${typeLabels[activity.type]}`;
    const overdue = isActivityOverdue(activity, now);

    return {
      id: `jarvis-rec-${activity.id}`,
      activityId: activity.id,
      title: index === 0 ? "Faça isso agora" : "Ação recomendada",
      context,
      why: overdue
        ? "Prazo estourado com alto impacto no ritmo do pipeline."
        : "Atividade com potencial de destravar avanço ainda hoje.",
      primaryActionLabel:
        activity.type === "call" || activity.type === "whatsapp"
          ? "Executar contato"
          : activity.type === "meeting"
            ? "Executar preparação"
            : "Gerar mensagem",
      actionKind:
        activity.type === "call" || activity.type === "whatsapp"
          ? "call"
          : activity.type === "meeting"
            ? "reschedule"
            : "message",
    };
  });
}

function buildCommandResult(
  commandId: string,
  data: {
    overdueCount: number;
    riskCount: number;
    totalActive: number;
    selectedActivity?: Activity;
  }
): CommandResult {
  switch (commandId) {
    case "bulk-messages":
      if (data.overdueCount === 0) {
        return {
          status: "error",
          text: "Sem atividades atrasadas para gerar mensagens no momento.",
        };
      }
      return {
        status: "success",
        text: `Geradas sugestões para ${data.overdueCount} atividades atrasadas.`,
      };
    case "sla-priority":
      if (data.overdueCount === 0) {
        return {
          status: "error",
          text: "Não há SLAs estourados agora. Tudo sob controle.",
        };
      }
      return {
        status: "success",
        text: `${data.overdueCount} SLAs críticos priorizados para execução imediata.`,
      };
    case "reschedule":
      return {
        status: "success",
        text: "Sugestões de reagendamento geradas com foco em impacto comercial.",
      };
    case "week-summary":
      return {
        status: "success",
        text: `Resumo gerado com base em ${data.totalActive} atividades ativas da semana.`,
      };
    case "risk-client":
      if (data.overdueCount === 0 && data.riskCount === 0) {
        return {
          status: "error",
          text: "Nenhum cliente em risco crítico detectado neste momento.",
        };
      }
      return {
        status: "success",
        text: "Cliente com maior risco identificado e destacado para ação imediata.",
      };
    case "call-script":
      return {
        status: "success",
        text: data.selectedActivity
          ? `Script de ligação gerado para ${data.selectedActivity.clientName || data.selectedActivity.opportunityTitle || "atividade selecionada"}.`
          : "Script de ligação gerado para o bloco de maior urgência.",
      };
    default:
      return {
        status: "error",
        text: "Não foi possível executar este comando agora.",
      };
  }
}

const RAIL_COMMANDS = [
  { id: "bulk-messages", label: "Gerar mensagens para atrasadas" },
  { id: "sla-priority", label: "Priorizar SLAs estourados" },
  { id: "reschedule", label: "Sugerir reagendamentos" },
  { id: "week-summary", label: "Resumir a semana" },
  { id: "risk-client", label: "Identificar cliente em risco" },
  { id: "call-script", label: "Gerar scripts de ligação" },
] as const;

export default function ActivitiesPage() {
  const { openDrawer } = useUIStore();
  const { activities, completeActivity, postponeActivity } = useActivityStore();

  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filterTypes, setFilterTypes] = useState<Set<ActivityType>>(
    () => new Set(allActivityTypes)
  );
  const [filterStatuses, setFilterStatuses] = useState<Set<ActivityStatus>>(
    () => new Set(DEFAULT_STATUS_FILTER)
  );
  const [filterResponsible, setFilterResponsible] = useState("all");
  const [filterDateStart, setFilterDateStart] = useState("");
  const [filterDateEnd, setFilterDateEnd] = useState("");
  const [filterSla, setFilterSla] = useState<SlaFilter>("all");

  const [collapsedSections, setCollapsedSections] = useState<Record<SectionKey, boolean>>({
    jarvis: false,
    overdue: false,
    today: false,
    next7: false,
  });

  const [sectionErrors, setSectionErrors] = useState<Record<SectionKey, string | null>>({
    jarvis: null,
    overdue: null,
    today: null,
    next7: null,
  });

  const [planSeed, setPlanSeed] = useState(0);
  const [isPlanning, setIsPlanning] = useState(false);
  const [recommendationStates, setRecommendationStates] = useState<
    Record<string, RecommendationActionState>
  >({});

  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [expandedActivityId, setExpandedActivityId] = useState<string | null>(null);
  const [activityFeedback, setActivityFeedback] = useState<Record<string, ActivityFeedback>>(
    {}
  );
  const [highlightedPostponedId, setHighlightedPostponedId] = useState<string | null>(null);

  const [commandLoadingId, setCommandLoadingId] = useState<string | null>(null);
  const [commandResult, setCommandResult] = useState<CommandResult | null>(null);
  const [isRailElevated, setIsRailElevated] = useState(false);

  const timeoutRef = useRef<number[]>([]);
  const now = useMemo(() => new Date(), []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      fn();
      timeoutRef.current = timeoutRef.current.filter((item) => item !== id);
    }, ms);
    timeoutRef.current.push(id);
  }, []);

  useEffect(() => {
    schedule(() => setIsLoading(false), 780);
  }, [schedule]);

  useEffect(() => {
    return () => {
      timeoutRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsRailElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const responsibles = useMemo(() => {
    const map = new Map<string, string>();
    for (const activity of activities) {
      map.set(activity.responsibleId, activity.responsibleName);
    }
    return Array.from(map.entries());
  }, [activities]);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      if (!filterTypes.has(activity.type)) return false;
      if (!filterStatuses.has(activity.status)) return false;
      if (filterResponsible !== "all" && activity.responsibleId !== filterResponsible) {
        return false;
      }
      if (filterDateStart && activity.dueDate < filterDateStart) return false;
      if (filterDateEnd && activity.dueDate > filterDateEnd) return false;

      if (filterSla === "breached" && !isActivityOverdue(activity, now)) return false;
      if (filterSla === "risk" && !isSlaRisk(activity, now)) return false;

      return true;
    });
  }, [
    activities,
    filterTypes,
    filterStatuses,
    filterResponsible,
    filterDateStart,
    filterDateEnd,
    filterSla,
    now,
  ]);

  const executionActivities = useMemo(
    () =>
      filteredActivities.filter(
        (activity) => activity.status !== "completed" && activity.status !== "cancelled"
      ),
    [filteredActivities]
  );

  const overdueActivities = useMemo(
    () =>
      executionActivities
        .filter((activity) => isActivityOverdue(activity, now))
        .sort((a, b) => parseDateISO(a.dueDate).getTime() - parseDateISO(b.dueDate).getTime()),
    [executionActivities, now]
  );

  const todayActivities = useMemo(() => {
    const todayDate = startOfDay(now).getTime();
    return executionActivities
      .filter((activity) => {
        if (isActivityOverdue(activity, now)) return false;
        return startOfDay(parseDateISO(activity.dueDate)).getTime() === todayDate;
      })
      .sort((a, b) => (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99"));
  }, [executionActivities, now]);

  const next7Activities = useMemo(() => {
    const todayDate = startOfDay(now);
    const next7Date = addDays(todayDate, 7);

    return executionActivities
      .filter((activity) => {
        if (isActivityOverdue(activity, now)) return false;
        const due = startOfDay(parseDateISO(activity.dueDate));
        return due > todayDate && due <= next7Date;
      })
      .sort((a, b) => {
        const diff = parseDateISO(a.dueDate).getTime() - parseDateISO(b.dueDate).getTime();
        if (diff !== 0) return diff;
        return (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99");
      });
  }, [executionActivities, now]);

  const completedActivities = useMemo(
    () =>
      filteredActivities
        .filter((activity) => activity.status === "completed")
        .sort((a, b) => {
          const aDate = a.completedAt || a.dueDate;
          const bDate = b.completedAt || b.dueDate;
          return bDate.localeCompare(aDate);
        }),
    [filteredActivities]
  );

  const overdueCount = overdueActivities.length;
  const riskCount = executionActivities.filter((activity) => isSlaRisk(activity, now)).length;

  const typeCounts = useMemo(() => {
    const counts: Record<ActivityType, number> = {
      call: 0,
      email: 0,
      meeting: 0,
      visit: 0,
      task: 0,
      "follow-up": 0,
      whatsapp: 0,
    };

    for (const activity of filteredActivities) {
      counts[activity.type] += 1;
    }

    return counts;
  }, [filteredActivities]);

  const responsibleCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const activity of filteredActivities) {
      counts.set(
        activity.responsibleName,
        (counts.get(activity.responsibleName) ?? 0) + 1
      );
    }

    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  }, [filteredActivities]);

  const hotspotType = useMemo(() => {
    return Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0] as
      | [ActivityType, number]
      | undefined;
  }, [typeCounts]);

  const weeklyCompletionRate = useMemo(() => {
    const todayDate = startOfDay(now);
    const weekStart = addDays(todayDate, -7);

    const weekSlice = filteredActivities.filter((activity) => {
      const due = startOfDay(parseDateISO(activity.dueDate));
      return due >= weekStart && due <= todayDate;
    });

    if (weekSlice.length === 0) return 0;

    const completedCount = weekSlice.filter((activity) => activity.status === "completed").length;
    return Math.round((completedCount / weekSlice.length) * 100);
  }, [filteredActivities, now]);

  const jarvisRecommendations = useMemo(
    () => buildRecommendations(executionActivities, now, planSeed),
    [executionActivities, now, planSeed]
  );

  const selectedActivity = useMemo(
    () => activities.find((activity) => activity.id === selectedActivityId) || null,
    [activities, selectedActivityId]
  );

  const hasActiveFilters =
    filterTypes.size < allActivityTypes.length ||
    filterStatuses.size < DEFAULT_STATUS_FILTER.size ||
    filterResponsible !== "all" ||
    filterDateStart !== "" ||
    filterDateEnd !== "" ||
    filterSla !== "all";

  const activeFilterChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onRemove: () => void }> = [];

    if (filterTypes.size < allActivityTypes.length) {
      allActivityTypes.forEach((type) => {
        if (!filterTypes.has(type)) return;
        chips.push({
          id: `type-${type}`,
          label: `Tipo: ${typeLabels[type]}`,
          onRemove: () => {
            setFilterTypes((prev) => {
              const next = new Set(prev);
              next.delete(type);
              if (next.size === 0) return new Set(allActivityTypes);
              return next;
            });
          },
        });
      });
    }

    if (filterStatuses.size < DEFAULT_STATUS_FILTER.size) {
      STATUS_OPTIONS.forEach((option) => {
        if (!filterStatuses.has(option.value)) return;
        chips.push({
          id: `status-${option.value}`,
          label: `Status: ${option.label}`,
          onRemove: () => {
            setFilterStatuses((prev) => {
              const next = new Set(prev);
              next.delete(option.value);
              if (next.size === 0) return new Set(DEFAULT_STATUS_FILTER);
              return next;
            });
          },
        });
      });
    }

    if (filterResponsible !== "all") {
      const found = responsibles.find(([id]) => id === filterResponsible)?.[1] || filterResponsible;
      chips.push({
        id: "responsible",
        label: `Responsável: ${found}`,
        onRemove: () => setFilterResponsible("all"),
      });
    }

    if (filterDateStart) {
      chips.push({
        id: "date-start",
        label: `De: ${formatDateBR(filterDateStart)}`,
        onRemove: () => setFilterDateStart(""),
      });
    }

    if (filterDateEnd) {
      chips.push({
        id: "date-end",
        label: `Até: ${formatDateBR(filterDateEnd)}`,
        onRemove: () => setFilterDateEnd(""),
      });
    }

    if (filterSla !== "all") {
      chips.push({
        id: "sla",
        label: `SLA: ${filterSla === "breached" ? "Estourado" : "Em risco"}`,
        onRemove: () => setFilterSla("all"),
      });
    }

    return chips;
  }, [
    filterTypes,
    filterStatuses,
    filterResponsible,
    filterDateStart,
    filterDateEnd,
    filterSla,
    responsibles,
  ]);

  const clearFilters = useCallback(() => {
    setFilterTypes(new Set(allActivityTypes));
    setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
    setFilterResponsible("all");
    setFilterDateStart("");
    setFilterDateEnd("");
    setFilterSla("all");
  }, []);

  const toggleSection = useCallback((key: SectionKey) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleGeneratePlan = useCallback(() => {
    setIsPlanning(true);
    setSectionErrors((prev) => ({ ...prev, jarvis: null }));

    schedule(() => {
      if (executionActivities.length === 0) {
        setIsPlanning(false);
        setSectionErrors((prev) => ({
          ...prev,
          jarvis: "Não há atividades ativas para montar um plano agora.",
        }));
        return;
      }

      setPlanSeed((prev) => prev + 1);
      setCommandResult({
        status: "success",
        text: "Plano do dia gerado com foco em impacto e risco.",
      });
      setIsPlanning(false);
    }, 260);
  }, [executionActivities.length, schedule]);

  const handleExecuteRecommendation = useCallback(
    (recommendation: JarvisRecommendation) => {
      setRecommendationStates((prev) => ({
        ...prev,
        [recommendation.id]: "loading",
      }));

      schedule(() => {
        const target = activities.find((item) => item.id === recommendation.activityId);

        if (!target) {
          setRecommendationStates((prev) => ({
            ...prev,
            [recommendation.id]: "error",
          }));
          schedule(() => {
            setRecommendationStates((prev) => ({
              ...prev,
              [recommendation.id]: "idle",
            }));
          }, 1200);
          return;
        }

        setSelectedActivityId(target.id);
        setExpandedActivityId(target.id);

        setRecommendationStates((prev) => ({
          ...prev,
          [recommendation.id]: "success",
        }));

        setCommandResult({
          status: "success",
          text:
            recommendation.actionKind === "message"
              ? `Mensagem preparada para ${target.clientName || target.opportunityTitle || "atividade"}.`
              : recommendation.actionKind === "call"
                ? `Roteiro de contato acionado para ${target.clientName || target.opportunityTitle || "atividade"}.`
                : `Recomendação de reagendamento criada para ${target.clientName || target.opportunityTitle || "atividade"}.`,
        });

        schedule(() => {
          setRecommendationStates((prev) => ({
            ...prev,
            [recommendation.id]: "idle",
          }));
        }, 1200);
      }, 220);
    },
    [activities, schedule]
  );

  const handleViewActivityFromRecommendation = useCallback((activityId: string) => {
    setSelectedActivityId(activityId);
    setExpandedActivityId(activityId);

    const target = document.getElementById(`activity-card-${activityId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const handleCompleteActivity = useCallback(
    (activityId: string) => {
      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "loading-complete" },
      }));

      schedule(() => {
        setActivityFeedback((prev) => ({
          ...prev,
          [activityId]: { state: "complete-success", message: "Concluída" },
        }));
      }, 180);

      schedule(() => {
        completeActivity(activityId);
      }, 1180);

      schedule(() => {
        setActivityFeedback((prev) => {
          const next = { ...prev };
          delete next[activityId];
          return next;
        });
      }, 1560);
    },
    [completeActivity, schedule]
  );

  const handlePostponeActivity = useCallback(
    (activityId: string, newDate: string) => {
      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "loading-postpone" },
      }));

      schedule(() => {
        postponeActivity(activityId, newDate);
        setHighlightedPostponedId(activityId);
        setActivityFeedback((prev) => ({
          ...prev,
          [activityId]: { state: "postpone-success", message: `Reagendada para ${formatDateBR(newDate)}` },
        }));
      }, 180);

      schedule(() => {
        setHighlightedPostponedId((current) => (current === activityId ? null : current));
        setActivityFeedback((prev) => {
          const next = { ...prev };
          delete next[activityId];
          return next;
        });
      }, 1280);
    },
    [postponeActivity, schedule]
  );

  const handleGenerateFollowup = useCallback(
    (activity: Activity) => {
      setSelectedActivityId(activity.id);
      setCommandResult({
        status: "success",
        text: `Follow-up pronto para ${activity.clientName || activity.opportunityTitle || "atividade selecionada"}.`,
      });
    },
    []
  );

  const handleRunCommand = useCallback(
    (commandId: string) => {
      setCommandLoadingId(commandId);

      schedule(() => {
        if (commandId === "sla-priority") {
          setFilterSla("breached");
          setViewMode("list");
        }

        const result = buildCommandResult(commandId, {
          overdueCount,
          riskCount,
          totalActive: executionActivities.length,
          selectedActivity: selectedActivity || undefined,
        });
        setCommandResult(result);
        setCommandLoadingId(null);
      }, 220);
    },
    [executionActivities.length, overdueCount, riskCount, selectedActivity, schedule]
  );

  const handleExportPreview = useCallback(() => {
    const rows = filteredActivities.slice(0, 40).map((activity) => {
      const context = activity.clientName || activity.opportunityTitle || "Sem contexto";
      return `${activity.title} | ${context} | ${formatDateBR(activity.dueDate)} ${activity.dueTime || ""}`;
    });

    const content = [
      "Preview de exportação — Atividades",
      "",
      ...rows,
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "atividades-preview.txt";
    link.click();
    URL.revokeObjectURL(link.href);

    setCommandResult({
      status: "success",
      text: "Preview de exportação gerada com sucesso.",
    });
  }, [filteredActivities]);

  const renderSectionBody = useCallback(
    (items: Activity[], sectionKey: Exclude<SectionKey, "jarvis">) => {
      if (sectionErrors[sectionKey]) {
        return (
          <InlineSectionError
            message={sectionErrors[sectionKey] || "Erro ao carregar seção."}
            onRetry={() =>
              setSectionErrors((prev) => ({
                ...prev,
                [sectionKey]: null,
              }))
            }
          />
        );
      }

      if (isLoading) {
        return (
          <div className="space-y-3">
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={`${sectionKey}-skeleton-${index}`}
                className="h-[118px] rounded-[18px]"
              />
            ))}
          </div>
        );
      }

      if (items.length === 0) {
        if (sectionKey === "overdue") {
          return (
            <div className="rounded-[16px] border border-emerald-200 bg-emerald-50/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <p className="font-body text-sm font-medium text-emerald-700">
                  Tudo em dia. Nenhuma atividade atrasada.
                </p>
              </div>
            </div>
          );
        }

        if (sectionKey === "today") {
          return (
            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-4">
              <p className="font-body text-sm text-zinc-600">
                Nenhuma atividade para hoje.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                  onClick={() => openDrawer("new-activity")}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Criar atividade
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full"
                  onClick={handleGeneratePlan}
                >
                  <WandSparkles className="h-3.5 w-3.5" />
                  Pedir recomendação
                </Button>
              </div>
            </div>
          );
        }

        return (
          <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-4">
            <p className="font-body text-sm text-zinc-600">
              Nenhuma atividade nesse bloco por enquanto.
            </p>
          </div>
        );
      }

      if (viewMode === "agenda") {
        const groupedByDate = items.reduce<Record<string, Activity[]>>((acc, activity) => {
          if (!acc[activity.dueDate]) acc[activity.dueDate] = [];
          acc[activity.dueDate].push(activity);
          return acc;
        }, {});

        const dates = Object.keys(groupedByDate).sort((a, b) =>
          parseDateISO(a).getTime() - parseDateISO(b).getTime()
        );

        return (
          <div className="space-y-3">
            {dates.map((date) => (
              <div key={date} className="rounded-[16px] border border-zinc-200 bg-white/80 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-heading text-sm font-semibold text-zinc-900">
                    {formatDateFull(date)}
                  </p>
                  <Badge className="rounded-full bg-zinc-100 text-zinc-600">
                    {groupedByDate[date].length}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <AnimatePresence initial={false}>
                    {groupedByDate[date].map((activity) => (
                      <motion.div
                        key={activity.id}
                        layout
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                      >
                        <ExecutionActivityCard
                          activity={activity}
                          now={now}
                          isExpanded={expandedActivityId === activity.id}
                          isHighlighted={highlightedPostponedId === activity.id}
                          feedback={activityFeedback[activity.id]}
                          onToggleExpand={() => {
                            setExpandedActivityId((prev) =>
                              prev === activity.id ? null : activity.id
                            );
                            setSelectedActivityId(activity.id);
                          }}
                          onComplete={() => handleCompleteActivity(activity.id)}
                          onPostpone={(newDate) => handlePostponeActivity(activity.id, newDate)}
                          onSelectIntelligence={() => setSelectedActivityId(activity.id)}
                          onGenerateFollowup={() => handleGenerateFollowup(activity)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        );
      }

      if (viewMode === "timeline") {
        const sorted = [...items].sort((a, b) => {
          const diff = parseDateISO(a.dueDate).getTime() - parseDateISO(b.dueDate).getTime();
          if (diff !== 0) return diff;
          return (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99");
        });

        return (
          <div className="relative pl-4">
            <div className="absolute left-[11px] top-3 bottom-4 w-px bg-zinc-200" />
            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {sorted.map((activity) => (
                  <motion.div
                    key={activity.id}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="relative"
                  >
                    <span className="absolute -left-4.5 top-5 h-2.5 w-2.5 rounded-full bg-brand" />
                    <ExecutionActivityCard
                      activity={activity}
                      now={now}
                      isExpanded={expandedActivityId === activity.id}
                      isHighlighted={highlightedPostponedId === activity.id}
                      feedback={activityFeedback[activity.id]}
                      onToggleExpand={() => {
                        setExpandedActivityId((prev) =>
                          prev === activity.id ? null : activity.id
                        );
                        setSelectedActivityId(activity.id);
                      }}
                      onComplete={() => handleCompleteActivity(activity.id)}
                      onPostpone={(newDate) => handlePostponeActivity(activity.id, newDate)}
                      onSelectIntelligence={() => setSelectedActivityId(activity.id)}
                      onGenerateFollowup={() => handleGenerateFollowup(activity)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {items.map((activity) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4, scale: 0.995 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <ExecutionActivityCard
                  activity={activity}
                  now={now}
                  isExpanded={expandedActivityId === activity.id}
                  isHighlighted={highlightedPostponedId === activity.id}
                  feedback={activityFeedback[activity.id]}
                  onToggleExpand={() => {
                    setExpandedActivityId((prev) => (prev === activity.id ? null : activity.id));
                    setSelectedActivityId(activity.id);
                  }}
                  onComplete={() => handleCompleteActivity(activity.id)}
                  onPostpone={(newDate) => handlePostponeActivity(activity.id, newDate)}
                  onSelectIntelligence={() => setSelectedActivityId(activity.id)}
                  onGenerateFollowup={() => handleGenerateFollowup(activity)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    },
    [
      sectionErrors,
      isLoading,
      viewMode,
      now,
      expandedActivityId,
      highlightedPostponedId,
      activityFeedback,
      openDrawer,
      handleGeneratePlan,
      handleCompleteActivity,
      handlePostponeActivity,
      handleGenerateFollowup,
    ]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
      className="space-y-5 p-4 md:p-6"
    >
      <div className="relative overflow-hidden rounded-[26px] border border-zinc-200/70 bg-white/75 p-5 shadow-[0_22px_58px_-36px_rgba(15,23,42,0.45)] backdrop-blur-lg md:p-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-20 h-[230px] w-[230px] rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute right-[-60px] top-[-40px] h-[230px] w-[230px] rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-950">
                Atividades
              </h1>
              <p className="mt-1 font-body text-sm text-zinc-600">
                Execução do dia, com prioridades e próximos passos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 p-1 shadow-sm">
                {[
                  { key: "list" as const, label: "Lista", icon: List },
                  { key: "agenda" as const, label: "Agenda", icon: CalendarDays },
                  { key: "timeline" as const, label: "Timeline", icon: GitCommitVertical },
                ].map((mode) => {
                  const active = viewMode === mode.key;
                  return (
                    <button
                      key={mode.key}
                      onClick={() => setViewMode(mode.key)}
                      className={cn(
                        "inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all duration-150",
                        active
                          ? "bg-brand text-white shadow-[0_6px_14px_-8px_rgba(29,78,216,0.7)]"
                          : "text-zinc-600 hover:bg-zinc-100"
                      )}
                    >
                      <mode.icon className="h-3.5 w-3.5" />
                      <span>{mode.label}</span>
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                className="rounded-full border-zinc-200 bg-white/80 hover:bg-zinc-100"
                onClick={handleGeneratePlan}
                disabled={isPlanning}
              >
                {isPlanning ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <WandSparkles className="h-4 w-4" />
                )}
                Pedir plano do dia
              </Button>

              <Button
                className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                onClick={() => openDrawer("new-activity")}
              >
                <Plus className="h-4 w-4" />
                Nova atividade
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full border-zinc-200 bg-white/85 hover:bg-zinc-100"
                >
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                side="bottom"
                sideOffset={8}
                className="w-[min(96vw,430px)] rounded-[18px] border-zinc-200 bg-white p-4 shadow-xl"
              >
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 font-heading text-sm font-semibold text-zinc-900">Tipo</p>
                    <div className="grid grid-cols-2 gap-2">
                      {allActivityTypes.map((type) => {
                        const Icon = typeIconComponents[type];
                        const active = filterTypes.has(type);
                        return (
                          <label
                            key={type}
                            className={cn(
                              "flex cursor-pointer items-center gap-2 rounded-[12px] border px-2.5 py-2 text-xs",
                              active
                                ? "border-brand/35 bg-brand/8 text-brand"
                                : "border-zinc-200 bg-white text-zinc-600"
                            )}
                          >
                            <Checkbox
                              checked={active}
                              onCheckedChange={(checked) => {
                                setFilterTypes((prev) => {
                                  const next = new Set(prev);
                                  if (checked === true) next.add(type);
                                  else next.delete(type);
                                  return next.size === 0 ? new Set(allActivityTypes) : next;
                                });
                              }}
                            />
                            <Icon className="h-3.5 w-3.5" />
                            <span>{typeLabels[type]}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-2 font-heading text-sm font-semibold text-zinc-900">Status</p>
                    <div className="grid grid-cols-2 gap-2">
                      {STATUS_OPTIONS.map((status) => (
                        <label
                          key={status.value}
                          className="flex cursor-pointer items-center gap-2 rounded-[12px] border border-zinc-200 px-2.5 py-2 text-xs text-zinc-700"
                        >
                          <Checkbox
                            checked={filterStatuses.has(status.value)}
                            onCheckedChange={(checked) => {
                              setFilterStatuses((prev) => {
                                const next = new Set(prev);
                                if (checked === true) next.add(status.value);
                                else next.delete(status.value);
                                return next.size === 0 ? new Set(DEFAULT_STATUS_FILTER) : next;
                              });
                            }}
                          />
                          <span>{status.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <Label className="mb-1 block text-xs text-zinc-500">Responsável</Label>
                      <select
                        value={filterResponsible}
                        onChange={(event) => setFilterResponsible(event.target.value)}
                        className="h-9 w-full rounded-[12px] border border-zinc-200 bg-white px-3 text-sm text-zinc-700 outline-none focus:border-brand"
                      >
                        <option value="all">Todos</option>
                        {responsibles.map(([id, name]) => (
                          <option key={id} value={id}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label className="mb-1 block text-xs text-zinc-500">SLA</Label>
                      <div className="flex rounded-[12px] border border-zinc-200 p-1">
                        {SLA_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setFilterSla(option.value)}
                            className={cn(
                              "flex-1 rounded-[9px] px-2 py-1.5 text-xs transition-colors",
                              filterSla === option.value
                                ? "bg-zinc-900 text-white"
                                : "text-zinc-500 hover:bg-zinc-100"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="mb-1 block text-xs text-zinc-500">Período de</Label>
                      <Input
                        type="date"
                        value={filterDateStart}
                        onChange={(event) => setFilterDateStart(event.target.value)}
                        className="h-9 rounded-[12px]"
                      />
                    </div>
                    <div>
                      <Label className="mb-1 block text-xs text-zinc-500">até</Label>
                      <Input
                        type="date"
                        value={filterDateEnd}
                        onChange={(event) => setFilterDateEnd(event.target.value)}
                        className="h-9 rounded-[12px]"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-full"
                      onClick={clearFilters}
                    >
                      Limpar tudo
                    </Button>
                    <Button
                      className="flex-1 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Aplicar
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                className="rounded-full px-3 text-xs text-zinc-500 hover:bg-zinc-100"
                onClick={clearFilters}
              >
                Limpar tudo
              </Button>
            )}
          </div>

          <AnimatePresence>
            {activeFilterChips.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-2"
              >
                {activeFilterChips.map((chip) => (
                  <motion.button
                    key={chip.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.12 }}
                    onClick={chip.onRemove}
                    className="group flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                  >
                    <span>{chip.label}</span>
                    <X className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)]">
        <div className="space-y-4">
          <ExecutionSection
            title="O que o Jarvis recomenda agora"
            count={jarvisRecommendations.length}
            collapsed={collapsedSections.jarvis}
            onToggle={() => toggleSection("jarvis")}
            tone="violet"
          >
            {sectionErrors.jarvis ? (
              <InlineSectionError
                message={sectionErrors.jarvis}
                onRetry={() => {
                  setSectionErrors((prev) => ({ ...prev, jarvis: null }));
                  handleGeneratePlan();
                }}
              />
            ) : isLoading ? (
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={`jarvis-skeleton-${index}`} className="h-40 rounded-[18px]" />
                ))}
              </div>
            ) : jarvisRecommendations.length === 0 ? (
              <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-4">
                <p className="font-body text-sm text-zinc-600">
                  Sem recomendações no momento.
                </p>
                <Button
                  size="sm"
                  className="mt-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                  onClick={handleGeneratePlan}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Gerar plano do dia
                </Button>
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {jarvisRecommendations.map((recommendation) => {
                  const state = recommendationStates[recommendation.id] || "idle";

                  return (
                    <article
                      key={recommendation.id}
                      className="rounded-[18px] border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-140 hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.5)]"
                    >
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-violet-100 text-violet-600">
                            <Bot className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-heading text-sm font-semibold text-zinc-900">
                              {recommendation.title}
                            </p>
                            <p className="font-body text-xs text-zinc-500">{recommendation.context}</p>
                          </div>
                        </div>
                      </div>

                      <p className="min-h-[40px] font-body text-xs leading-relaxed text-zinc-600">
                        <span className="font-medium text-zinc-700">Por que:</span> {recommendation.why}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <Button
                          size="sm"
                          className="h-8 flex-1 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
                          disabled={state === "loading"}
                          onClick={() => handleExecuteRecommendation(recommendation)}
                        >
                          {state === "loading" ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              Executando
                            </>
                          ) : state === "success" ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              Executado
                            </>
                          ) : (
                            recommendation.primaryActionLabel
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 rounded-full text-xs"
                          onClick={() =>
                            handleViewActivityFromRecommendation(recommendation.activityId)
                          }
                        >
                          Ver atividade
                        </Button>
                      </div>

                      {state === "error" && (
                        <p className="mt-2 text-xs text-status-danger">
                          Falha ao executar. Tentar novamente.
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </ExecutionSection>

          <ExecutionSection
            title="Atrasadas"
            count={overdueActivities.length}
            collapsed={collapsedSections.overdue}
            onToggle={() => toggleSection("overdue")}
            tone="danger"
          >
            {renderSectionBody(overdueActivities, "overdue")}
          </ExecutionSection>

          <ExecutionSection
            title="Hoje"
            count={todayActivities.length}
            collapsed={collapsedSections.today}
            onToggle={() => toggleSection("today")}
            tone="warning"
          >
            {renderSectionBody(todayActivities, "today")}
          </ExecutionSection>

          <ExecutionSection
            title="Próximos 7 dias"
            count={next7Activities.length}
            collapsed={collapsedSections.next7}
            onToggle={() => toggleSection("next7")}
            tone="neutral"
          >
            {renderSectionBody(next7Activities, "next7")}
          </ExecutionSection>

          <div className="rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-heading text-lg font-semibold text-zinc-900">Resumo do dia</h3>
                <p className="font-body text-xs text-zinc-500">
                  Panorama rápido de execução e produtividade.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full text-xs"
                  onClick={() =>
                    setCommandResult({
                      status: "success",
                      text: "Relatório rápido aberto no modo de visualização da semana.",
                    })
                  }
                >
                  Ver relatório
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full text-xs"
                  onClick={handleExportPreview}
                >
                  Exportar lista
                </Button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <SummaryMetric label="Total de atividades" value={String(filteredActivities.length)} />
              <SummaryMetric label="Conclusão semanal" value={`${weeklyCompletionRate}%`} />
              <SummaryMetric
                label="Tipo dominante"
                value={hotspotType ? typeLabels[hotspotType[0]] : "-"}
              />
              <SummaryMetric
                label="SLA estourado"
                value={String(overdueCount)}
                accent={overdueCount > 0 ? "danger" : "success"}
              />
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/70 p-3">
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Por tipo
                </p>
                <div className="space-y-1.5">
                  {Object.entries(typeCounts)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([type, count]) => (
                      <div key={type} className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600">{typeLabels[type as ActivityType]}</span>
                        <span className="font-medium text-zinc-900">{count}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/70 p-3">
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Por responsável
                </p>
                <div className="space-y-1.5">
                  {responsibleCounts.length === 0 ? (
                    <p className="text-sm text-zinc-500">Sem dados.</p>
                  ) : (
                    responsibleCounts.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600">{item.name}</span>
                        <span className="font-medium text-zinc-900">{item.count}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {completedActivities.length > 0 && (
              <div className="mt-4 rounded-[14px] border border-zinc-200 bg-white p-3">
                <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Concluídas recentes
                </p>
                <div className="space-y-1.5">
                  {completedActivities.slice(0, 4).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between rounded-[10px] bg-zinc-50 px-2.5 py-2"
                    >
                      <p className="truncate text-sm text-zinc-700">{activity.title}</p>
                      <span className="text-xs text-zinc-500">
                        {formatDateBR(activity.completedAt || activity.dueDate)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <aside
          className={cn(
            "self-start xl:sticky xl:top-6",
            "transition-shadow duration-120",
            isRailElevated && "xl:drop-shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          )}
        >
          <div className="space-y-4 rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold text-zinc-900">Menux Intelligence</h2>
                <p className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Online
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
                onClick={handleGeneratePlan}
                disabled={isPlanning}
              >
                {isPlanning ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Sparkles className="h-3.5 w-3.5" />
                )}
                Gerar plano do dia
              </Button>
            </div>

            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3.5">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Diagnóstico do dia
              </p>
              <div className="space-y-1.5 text-sm">
                <DiagnosticItem label="Atrasadas" value={String(overdueCount)} tone={overdueCount > 0 ? "danger" : "success"} />
                <DiagnosticItem label="SLAs estourados" value={String(overdueCount)} tone={overdueCount > 0 ? "danger" : "success"} />
                <DiagnosticItem label="SLAs em risco" value={String(riskCount)} tone={riskCount > 0 ? "warning" : "success"} />
                <DiagnosticItem
                  label="Tipo mais afetado"
                  value={hotspotType ? typeLabels[hotspotType[0]] : "Sem dados"}
                  tone="neutral"
                />
              </div>
              <Button
                size="sm"
                className="mt-3 h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
                onClick={handleGeneratePlan}
              >
                <WandSparkles className="h-3.5 w-3.5" />
                Criar plano de ataque
              </Button>
            </div>

            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3.5">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Sugestões rápidas
              </p>
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                {RAIL_COMMANDS.map((command) => {
                  const loading = commandLoadingId === command.id;
                  return (
                    <button
                      key={command.id}
                      onClick={() => handleRunCommand(command.id)}
                      disabled={loading}
                      className="flex items-center justify-between rounded-[12px] border border-zinc-200 bg-white px-3 py-2 text-left text-xs text-zinc-700 transition-colors duration-120 hover:bg-zinc-100 disabled:opacity-70"
                    >
                      <span>{command.label}</span>
                      {loading ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {commandResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.14 }}
                    className={cn(
                      "mt-3 rounded-[12px] border px-3 py-2 text-xs",
                      commandResult.status === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    )}
                  >
                    {commandResult.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50/80 p-3.5">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Mensagens prontas
              </p>

              {selectedActivity ? (
                <SelectedActivityMessages activity={selectedActivity} now={now} />
              ) : (
                <div className="rounded-[12px] border border-dashed border-zinc-300 bg-white px-3 py-3 text-xs text-zinc-500">
                  Selecione uma atividade para ver mensagens sugeridas aqui.
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function ExecutionSection({
  title,
  count,
  collapsed,
  onToggle,
  tone,
  children,
}: {
  title: string;
  count: number;
  collapsed: boolean;
  onToggle: () => void;
  tone: "violet" | "danger" | "warning" | "neutral";
  children: React.ReactNode;
}) {
  const toneStyles: Record<typeof tone, { badge: string; icon: string; border: string }> = {
    violet: {
      badge: "bg-violet-100 text-violet-700",
      icon: "text-violet-600",
      border: "border-violet-200/70",
    },
    danger: {
      badge: "bg-red-100 text-red-700",
      icon: "text-red-600",
      border: "border-red-200/70",
    },
    warning: {
      badge: "bg-amber-100 text-amber-700",
      icon: "text-amber-600",
      border: "border-amber-200/70",
    },
    neutral: {
      badge: "bg-zinc-100 text-zinc-700",
      icon: "text-zinc-500",
      border: "border-zinc-200",
    },
  };

  const style = toneStyles[tone];

  return (
    <section className={cn("rounded-[20px] border bg-white p-4 shadow-sm md:p-5", style.border)}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {tone === "violet" ? (
            <Sparkles className={cn("h-4 w-4", style.icon)} />
          ) : tone === "danger" ? (
            <AlertTriangle className={cn("h-4 w-4", style.icon)} />
          ) : tone === "warning" ? (
            <CircleAlert className={cn("h-4 w-4", style.icon)} />
          ) : (
            <CircleDashed className={cn("h-4 w-4", style.icon)} />
          )}
          <h3 className="font-heading text-[15px] font-semibold text-zinc-900">{title}</h3>
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", style.badge)}>
            {count}
          </span>
        </div>
        {collapsed ? (
          <ChevronDown className="h-4 w-4 text-zinc-500" />
        ) : (
          <ChevronUp className="h-4 w-4 text-zinc-500" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function InlineSectionError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-red-700">{message}</p>
        <Button
          size="sm"
          variant="outline"
          className="h-7 rounded-full border-red-300 text-red-700"
          onClick={onRetry}
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}

function ExecutionActivityCard({
  activity,
  now,
  feedback,
  isExpanded,
  isHighlighted,
  onToggleExpand,
  onComplete,
  onPostpone,
  onSelectIntelligence,
  onGenerateFollowup,
}: {
  activity: Activity;
  now: Date;
  feedback?: ActivityFeedback;
  isExpanded: boolean;
  isHighlighted: boolean;
  onToggleExpand: () => void;
  onComplete: () => void;
  onPostpone: (newDate: string) => void;
  onSelectIntelligence: () => void;
  onGenerateFollowup: () => void;
}) {
  const [postponeOpen, setPostponeOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  const [customPostponeDate, setCustomPostponeDate] = useState("");
  const [copied, setCopied] = useState(false);

  const TypeIcon = typeIconComponents[activity.type];
  const chip = getStatusChip(activity, now);
  const insight = getActivityInsight(activity, now);

  const isBusy =
    feedback?.state === "loading-complete" || feedback?.state === "loading-postpone";

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(insight.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article
      id={`activity-card-${activity.id}`}
      className={cn(
        "rounded-[18px] border border-zinc-200 bg-white p-4 transition-all duration-140",
        "hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.48)]",
        isHighlighted && "ring-2 ring-brand/35",
        feedback?.state === "complete-success" && "border-emerald-300 bg-emerald-50/40"
      )}
      onClick={onToggleExpand}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex items-start gap-3">
          <div
            className={cn(
              "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]",
              typeColors[activity.type].bg,
              typeColors[activity.type].text
            )}
          >
            <TypeIcon className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="truncate font-heading text-[17px] font-semibold text-zinc-900">
                {activity.title}
              </h4>
              <span className={cn("rounded-full border px-2 py-0.5 text-[11px] font-medium", chip.className)}>
                {chip.label}
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              <span className="truncate max-w-[360px]">
                {activity.clientName || activity.opportunityTitle || "Sem cliente vinculado"}
              </span>
              <span className="text-zinc-300">•</span>
              <span>{typeLabels[activity.type]}</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <Avatar size="sm">
                <AvatarFallback className="bg-brand/10 text-[10px] font-semibold text-brand">
                  {initials(activity.responsibleName)}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-zinc-600">{activity.responsibleName}</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-500">
                {formatDateBR(activity.dueDate)}
                {activity.dueTime ? ` ${activity.dueTime}` : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs font-medium text-zinc-500">{getRelativeTimeLabel(activity, now)}</p>
        </div>
      </div>

      <div
        className="mt-3 flex flex-wrap items-center gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          size="sm"
          className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
          disabled={isBusy}
          onClick={onComplete}
        >
          {feedback?.state === "loading-complete" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <CheckCircle2 className="h-3.5 w-3.5" />
          )}
          Concluir
        </Button>

        <Popover open={postponeOpen} onOpenChange={setPostponeOpen}>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs"
              disabled={isBusy}
            >
              {feedback?.state === "loading-postpone" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <CalendarClock className="h-3.5 w-3.5" />
              )}
              Adiar
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            className="w-[250px] rounded-[16px] border-zinc-200 p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Reagendar
            </p>
            <div className="space-y-2">
              {[1, 3].map((days) => (
                <button
                  key={days}
                  onClick={() => {
                    onPostpone(toISODate(addDays(startOfDay(now), days)));
                    setPostponeOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-[10px] border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
                >
                  <span>+{days} {days === 1 ? "dia" : "dias"}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
                </button>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              <Label className="text-xs text-zinc-500">Escolher data</Label>
              <Input
                type="date"
                value={customPostponeDate}
                min={toISODate(startOfDay(now))}
                onChange={(event) => setCustomPostponeDate(event.target.value)}
                className="h-9 rounded-[10px]"
              />
              <Button
                size="sm"
                className="h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
                disabled={!customPostponeDate}
                onClick={() => {
                  onPostpone(customPostponeDate);
                  setPostponeOpen(false);
                  setCustomPostponeDate("");
                }}
              >
                Confirmar data
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover open={insightOpen} onOpenChange={setInsightOpen}>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs"
              onClick={onSelectIntelligence}
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              Intelligence
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            className="w-[min(92vw,340px)] rounded-[16px] border-zinc-200 p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Sugestões do Jarvis
            </p>
            <div className="space-y-2 rounded-[12px] border border-zinc-200 bg-zinc-50 p-2.5">
              <p className="text-[11px] font-medium text-zinc-700">Mensagem pronta</p>
              <p className="text-xs leading-relaxed text-zinc-600">{insight.message}</p>
              <Button
                size="sm"
                variant="outline"
                className="h-7 rounded-full px-2.5 text-[11px]"
                onClick={handleCopyMessage}
              >
                <Copy className="h-3 w-3" />
                {copied ? "Copiado" : "Copiar"}
              </Button>
            </div>
            <div className="mt-2 rounded-[12px] border border-zinc-200 bg-zinc-50 p-2.5">
              <p className="text-[11px] font-medium text-zinc-700">Próximo passo</p>
              <p className="text-xs text-zinc-600">{insight.nextStep}</p>
            </div>
            <div className="mt-2 rounded-[12px] border border-zinc-200 bg-zinc-50 p-2.5">
              <p className="text-[11px] font-medium text-zinc-700">Risco se ignorar</p>
              <p className="text-xs text-zinc-600">{insight.risk}</p>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          size="sm"
          variant="ghost"
          className="h-8 rounded-full px-3 text-xs text-zinc-600 hover:bg-zinc-100"
          onClick={onToggleExpand}
        >
          {isExpanded ? "Ocultar detalhes" : "Ver detalhes"}
        </Button>

        {feedback?.state === "complete-success" && (
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-700">
            Concluída
          </span>
        )}

        {feedback?.state === "postpone-success" && (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-[11px] font-medium text-blue-700">
            {feedback.message || "Reagendada"}
          </span>
        )}

        {feedback?.state === "error" && (
          <span className="rounded-full bg-red-100 px-2 py-1 text-[11px] font-medium text-red-700">
            {feedback.message || "Falha ao executar"}
          </span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3.5">
              <div className="grid gap-3 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Descrição
                  </p>
                  <p className="mt-1 text-sm text-zinc-700">
                    {activity.description || "Sem descrição detalhada para esta atividade."}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Checklist
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {getActivityChecklist(activity).map((item, index) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                        <span
                          className={cn(
                            "inline-flex h-4 w-4 items-center justify-center rounded-full border",
                            index === 0
                              ? "border-emerald-300 bg-emerald-100 text-emerald-700"
                              : "border-zinc-300 bg-white text-zinc-400"
                          )}
                        >
                          {index === 0 ? <Check className="h-3 w-3" /> : null}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Histórico curto
                  </p>
                  <div className="mt-1.5 space-y-2 text-sm text-zinc-700">
                    <div className="rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2">
                      <p className="text-xs text-zinc-500">Criada em</p>
                      <p>{formatDateBR(activity.createdAt.slice(0, 10))}</p>
                    </div>
                    <div className="rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2">
                      <p className="text-xs text-zinc-500">Prazo atual</p>
                      <p>
                        {formatDateBR(activity.dueDate)}
                        {activity.dueTime ? ` · ${activity.dueTime}` : ""}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="mt-3 h-8 w-full rounded-full bg-violet-600 text-xs text-white hover:bg-violet-700"
                    onClick={onGenerateFollowup}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    Gerar mensagem de follow-up
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function SelectedActivityMessages({
  activity,
  now,
}: {
  activity: Activity;
  now: Date;
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const insight = getActivityInsight(activity, now);

  const templates = [
    {
      id: "msg-1",
      title: "Mensagem principal",
      body: insight.message,
    },
    {
      id: "msg-2",
      title: "Próximo passo",
      body: insight.nextStep,
    },
    {
      id: "msg-3",
      title: "Risco se ignorar",
      body: insight.risk,
    },
  ];

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1200);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[12px] border border-zinc-200 bg-white px-3 py-2.5">
        <p className="truncate text-xs font-medium text-zinc-700">{activity.title}</p>
        <p className="mt-0.5 text-[11px] text-zinc-500">
          {activity.clientName || activity.opportunityTitle || "Sem contexto"}
        </p>
      </div>

      {templates.map((template) => (
        <div key={template.id} className="rounded-[12px] border border-zinc-200 bg-white px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
            {template.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-700">{template.body}</p>
          <Button
            size="sm"
            variant="outline"
            className="mt-2 h-7 rounded-full px-2.5 text-[11px]"
            onClick={() => handleCopy(template.id, template.body)}
          >
            <Copy className="h-3 w-3" />
            {copiedId === template.id ? "Copiado" : "Copiar"}
          </Button>
        </div>
      ))}
    </div>
  );
}

function DiagnosticItem({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "success" | "warning" | "danger" | "neutral";
}) {
  const toneClass: Record<typeof tone, string> = {
    success: "text-emerald-700",
    warning: "text-amber-700",
    danger: "text-red-700",
    neutral: "text-zinc-700",
  };

  return (
    <div className="flex items-center justify-between rounded-[10px] bg-white px-2.5 py-2">
      <span className="text-zinc-600">{label}</span>
      <span className={cn("font-semibold", toneClass[tone])}>{value}</span>
    </div>
  );
}

function SummaryMetric({
  label,
  value,
  accent = "neutral",
}: {
  label: string;
  value: string;
  accent?: "neutral" | "danger" | "success";
}) {
  return (
    <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/70 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
      <p
        className={cn(
          "mt-1 font-heading text-2xl font-semibold",
          accent === "danger"
            ? "text-red-700"
            : accent === "success"
              ? "text-emerald-700"
              : "text-zinc-900"
        )}
      >
        {value}
      </p>
    </div>
  );
}
