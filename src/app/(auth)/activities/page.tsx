"use client";

import { memo, Suspense, useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useNow } from "@/hooks/use-now";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CalendarClock,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  CircleDashed,
  Copy,
  Filter,
  List,
  Loader2,
  Plus,
  Search,
  Sparkles,
  WandSparkles,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useUIStore } from "@/stores/ui-store";
import { useActivityStore } from "@/stores/activity-store";
import { useAuthStore } from "@/stores/auth-store";
import type { Activity, ActivityStatus, ActivityType } from "@/types";
import { allActivityTypes, typeColors, typeIconComponents, typeLabels } from "./components/config";
import { GeneratedContentModal } from "./components/generated-content-modal";
import {
  DAY_MS,
  startOfDay,
  parseDateISO,
  toISODate,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  formatMonthTitle,
  formatDateBR,
  formatDateFull,
  formatCompactDateLabel,
  initials,
  isActivityOverdue,
  isSlaRisk,
  getRelativeTimeLabel,
  getStatusChip,
  getActivityChecklist,
  getActivityInsight,
} from "./components/helpers";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { cn } from "@/lib/utils";
import { SHOW_ALL_MOCK_DATA } from "@/lib/mock-scope";

type ViewMode = "list" | "agenda";
type SlaFilter = "all" | "breached" | "risk";
type SectionKey = "intelligence" | "overdue" | "today" | "next7" | "future";

type RecommendationActionState = "idle" | "loading" | "success" | "error";
type ActivityFeedbackState =
  | "idle"
  | "loading-complete"
  | "loading-cancel"
  | "complete-success"
  | "loading-postpone"
  | "postpone-success"
  | "info"
  | "error";

interface MenuxIntelligenceRecommendation {
  id: string;
  activityId: string;
  title: string;
  context: string;
  why: string;
  primaryActionLabel: string;
  actionKind: "message" | "call" | "prepare";
}

interface ActivityFeedback {
  state: ActivityFeedbackState;
  message?: string;
}

interface CommandResult {
  status: "success" | "error";
  text: string;
}

interface InlineFeedback {
  tone: "success" | "error" | "info";
  message: string;
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
]);

const SLA_OPTIONS: { value: SlaFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "breached", label: "Estourado" },
  { value: "risk", label: "Em risco" },
];

const STATUS_VALUES = STATUS_OPTIONS.map((status) => status.value);
const ALL_ACTIVITY_TYPE_SET = new Set<ActivityType>(allActivityTypes);
const DATE_PARAM_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function isSameSet<T>(left: Set<T>, right: Set<T>): boolean {
  if (left.size !== right.size) return false;
  for (const value of left) {
    if (!right.has(value)) return false;
  }
  return true;
}

function getEffectiveStatus(activity: Activity, now: Date): ActivityStatus {
  if (activity.status === "completed" || activity.status === "cancelled") {
    return activity.status;
  }
  return isActivityOverdue(activity, now) ? "overdue" : "pending";
}

function getExecuteChannelLabel(value: string | null): string {
  if (!value) return "atividade";
  if (value === "call") return "ligação";
  if (value === "email") return "e-mail";
  if (value === "meeting") return "reunião";
  if (value === "whatsapp") return "WhatsApp";
  return "atividade";
}

function parseSetParam<T extends string>(
  rawParam: string | null,
  allowedValues: readonly T[],
  fallbackValues: Set<T>
): Set<T> {
  if (!rawParam) return new Set(fallbackValues);

  const allowed = new Set(allowedValues);
  const parsed = rawParam
    .split(",")
    .map((value) => value.trim())
    .filter((value): value is T => allowed.has(value as T));

  if (parsed.length === 0) {
    return new Set(fallbackValues);
  }

  return new Set(parsed);
}

// Utility functions are imported from ./components/helpers

function buildRecommendations(
  activities: Activity[],
  now: Date,
  seed: number
): MenuxIntelligenceRecommendation[] {
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
      id: `intelligence-rec-${activity.id}`,
      activityId: activity.id,
      title: index === 0 ? "Faça isso agora" : "Ação recomendada",
      context,
      why: overdue
        ? "Prazo estourado com alto impacto no ritmo do pipeline."
        : "Atividade com potencial de destravar avanço ainda hoje.",
      primaryActionLabel: "Ir para atividade",
      actionKind:
        activity.type === "call" || activity.type === "whatsapp"
          ? "call"
          : activity.type === "meeting"
            ? "prepare"
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
  { id: "week-summary", label: "Resumir a semana" },
  { id: "risk-client", label: "Identificar cliente em risco" },
  { id: "call-script", label: "Gerar scripts de ligação" },
] as const;

export default function ActivitiesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[calc(100dvh-2rem)] w-full flex-col gap-4">
          <div className="shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="mt-2 h-4 w-56" />
          </div>
          <div className="flex-1 space-y-4">
            <Skeleton className="h-[200px] rounded-[18px]" />
            <Skeleton className="h-[400px] rounded-[18px]" />
          </div>
        </div>
      }
    >
      <ActivitiesPageContent />
    </Suspense>
  );
}

function ActivitiesPageContent() {
  const { openDrawer } = useUIStore();
  const { user, permissions } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    activities: storeActivities,
    completeActivity,
    cancelActivity,
    postponeActivity,
  } = useActivityStore();

  const isLoading = false;
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [ownerOverrideId, setOwnerOverrideId] = useState<string | null>(null);

  const [filterTypes, setFilterTypes] = useState<Set<ActivityType>>(
    () => new Set(allActivityTypes)
  );
  const [filterStatuses, setFilterStatuses] = useState<Set<ActivityStatus>>(
    () => new Set(DEFAULT_STATUS_FILTER)
  );
  const [filterDateStart, setFilterDateStart] = useState("");
  const [filterDateEnd, setFilterDateEnd] = useState("");
  const [filterSla, setFilterSla] = useState<SlaFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [collapsedSections, setCollapsedSections] = useState<Record<SectionKey, boolean>>({
    intelligence: false,
    overdue: false,
    today: false,
    next7: false,
    future: true,
  });

  const [sectionErrors, setSectionErrors] = useState<Record<SectionKey, string | null>>({
    intelligence: null,
    overdue: null,
    today: null,
    next7: null,
    future: null,
  });

  const [planSeed, setPlanSeed] = useState(0);
  const [isPlanning, setIsPlanning] = useState(false);
  const [recommendationStates, setRecommendationStates] = useState<
    Record<string, RecommendationActionState>
  >({});

  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [expandedActivityId, setExpandedActivityId] = useState<string | null>(null);
  const [selectedActivityIds, setSelectedActivityIds] = useState<Set<string>>(
    () => new Set()
  );
  const [confirmBulkCancelOpen, setConfirmBulkCancelOpen] = useState(false);
  const [confirmBulkCompleteOpen, setConfirmBulkCompleteOpen] = useState(false);
  const [bulkPostponeOpen, setBulkPostponeOpen] = useState(false);
  const [bulkPostponeCustomDate, setBulkPostponeCustomDate] = useState("");
  const [activityFeedback, setActivityFeedback] = useState<Record<string, ActivityFeedback>>(
    {}
  );
  const [headerInlineFeedback, setHeaderInlineFeedback] = useState<InlineFeedback | null>(null);
  const [bulkInlineFeedback, setBulkInlineFeedback] = useState<InlineFeedback | null>(null);
  const [summaryInlineFeedback, setSummaryInlineFeedback] = useState<InlineFeedback | null>(null);
  const [highlightedPostponedId, setHighlightedPostponedId] = useState<string | null>(null);

  const [commandLoadingId, setCommandLoadingId] = useState<string | null>(null);
  const [commandResult, setCommandResult] = useState<CommandResult | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  // Modal State
  const [generatedModalOpen, setGeneratedModalOpen] = useState(false);
  const [generatedContent, setGeneratedContent] = useState({ title: "", content: "" });
  const [detailsModalActivityId, setDetailsModalActivityId] = useState<string | null>(null);

  const timeoutRef = useRef<number[]>([]);
  const appliedQueryRef = useRef<string | null>(null);
  const intelligenceRailRef = useRef<HTMLDivElement | null>(null);
  const now = useNow(60_000);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => startOfMonth(now));
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<string>(
    () => toISODate(startOfDay(now))
  );

  const canViewTeamScope = Boolean(SHOW_ALL_MOCK_DATA || permissions?.canViewAllUnits || user?.role === "master");
  const canCreateActivity = Boolean(permissions?.canCreateActivity);
  const canExecuteActivityActions = Boolean(permissions?.canEditActivity);
  const canCancelActivity = Boolean(permissions?.canCancelActivity);
  const canExportActivities = Boolean(permissions?.canExportData);

  const { scopedOwnerId, scopeMode } = useMemo(() => {
    const preferredOwnerId = user?.id ?? null;

    if (SHOW_ALL_MOCK_DATA) {
      if (
        ownerOverrideId &&
        storeActivities.some((activity) => activity.responsibleId === ownerOverrideId)
      ) {
        return {
          scopedOwnerId: ownerOverrideId,
          scopeMode: "override" as const,
        };
      }

      return { scopedOwnerId: null, scopeMode: "team" as const };
    }

    if (canViewTeamScope) {
      if (
        ownerOverrideId &&
        storeActivities.some((activity) => activity.responsibleId === ownerOverrideId)
      ) {
        return {
          scopedOwnerId: ownerOverrideId,
          scopeMode: "override" as const,
        };
      }

      if (preferredOwnerId) {
        return { scopedOwnerId: preferredOwnerId, scopeMode: "self" as const };
      }

      return { scopedOwnerId: null, scopeMode: "team" as const };
    }

    return { scopedOwnerId: preferredOwnerId, scopeMode: "self" as const };
  }, [canViewTeamScope, ownerOverrideId, storeActivities, user?.id]);

  const isTeamScope = canViewTeamScope && scopeMode === "team";

  const activities = useMemo(
    () => {
      if (canViewTeamScope && scopedOwnerId === null) {
        return storeActivities;
      }

      if (!scopedOwnerId) {
        return [];
      }

      return storeActivities.filter((activity) => activity.responsibleId === scopedOwnerId);
    },
    [canViewTeamScope, scopedOwnerId, storeActivities]
  );

  const hasNoScopedActivities = activities.length === 0;

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      fn();
      timeoutRef.current = timeoutRef.current.filter((item) => item !== id);
    }, ms);
    timeoutRef.current.push(id);
  }, []);

  const pushHeaderInlineFeedback = useCallback(
    (feedback: InlineFeedback) => {
      setHeaderInlineFeedback(feedback);
      schedule(() => setHeaderInlineFeedback(null), 2600);
    },
    [schedule]
  );

  const pushBulkInlineFeedback = useCallback(
    (feedback: InlineFeedback) => {
      setBulkInlineFeedback(feedback);
      schedule(() => setBulkInlineFeedback(null), 2600);
    },
    [schedule]
  );

  const pushSummaryInlineFeedback = useCallback(
    (feedback: InlineFeedback) => {
      setSummaryInlineFeedback(feedback);
      schedule(() => setSummaryInlineFeedback(null), 2600);
    },
    [schedule]
  );

  // Loading is instant since data comes from the local store (no API).

  // Auto-dismiss commandResult after 6 seconds
  useEffect(() => {
    if (!commandResult) return;
    const timer = window.setTimeout(() => setCommandResult(null), 6000);
    return () => window.clearTimeout(timer);
  }, [commandResult]);

  useEffect(() => {
    return () => {
      timeoutRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsPageScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const applyStatusFromParam = useCallback((statusParam: string) => {
    const normalized = statusParam.trim().toLowerCase();

    setViewMode("list");
    setFilterTypes(new Set(allActivityTypes));
    setFilterDateStart("");
    setFilterDateEnd("");

    if (normalized === "overdue") {
      setFilterStatuses(new Set<ActivityStatus>(["pending", "overdue"]));
      setFilterSla("breached");
      return;
    }

    if (normalized === "risk") {
      setFilterStatuses(new Set<ActivityStatus>(["pending"]));
      setFilterSla("risk");
      return;
    }

    if (normalized === "pace") {
      setFilterStatuses(new Set<ActivityStatus>(["pending", "overdue"]));
      setFilterSla("all");
      return;
    }

    if (normalized === "achieved") {
      setFilterStatuses(new Set<ActivityStatus>(["completed"]));
      setFilterSla("all");
      return;
    }

    if (
      normalized === "pending" ||
      normalized === "completed" ||
      normalized === "cancelled"
    ) {
      setFilterStatuses(new Set<ActivityStatus>([normalized]));
      setFilterSla("all");
      return;
    }

    setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
    setFilterSla("all");
  }, []);

  const applyExplicitUrlFilters = useCallback(
    (data: {
      viewMode: ViewMode;
      query: string;
      types: Set<ActivityType>;
      statuses: Set<ActivityStatus>;
      sla: SlaFilter;
      start: string;
      end: string;
    }) => {
      setViewMode(data.viewMode);
      setSearchQuery(data.query);
      setFilterTypes(data.types);
      setFilterStatuses(data.statuses);
      setFilterSla(data.sla);
      setFilterDateStart(data.start);
      setFilterDateEnd(data.end);
    },
    []
  );

  const resetFiltersToDefault = useCallback(() => {
    setViewMode("list");
    setSearchQuery("");
    setFilterTypes(new Set(allActivityTypes));
    setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
    setFilterDateStart("");
    setFilterDateEnd("");
    setFilterSla("all");
  }, []);

  useEffect(() => {
    const queryString = searchParams.toString();
    if (appliedQueryRef.current === queryString) return;
    appliedQueryRef.current = queryString;

    const sourceParam = searchParams.get("source");
    const statusParam = searchParams.get("status");
    const focusParam = searchParams.get("focus");
    const goalParam = searchParams.get("goal");
    const activityIdParam = searchParams.get("activityId") ?? searchParams.get("id");
    const executeParam = searchParams.get("execute");
    const viewParam = searchParams.get("view");
    const queryParam = searchParams.get("q");
    const typesParam = searchParams.get("types");
    const statusesParam = searchParams.get("statuses");
    const slaParam = searchParams.get("sla");
    const startParam = searchParams.get("start");
    const endParam = searchParams.get("end");
    const hasExplicitUrlFilters =
      viewParam !== null ||
      queryParam !== null ||
      typesParam !== null ||
      statusesParam !== null ||
      slaParam !== null ||
      startParam !== null ||
      endParam !== null;

    if (hasExplicitUrlFilters) {
      applyExplicitUrlFilters({
        viewMode: viewParam === "agenda" ? "agenda" : "list",
        query: queryParam ?? "",
        types: parseSetParam(typesParam, allActivityTypes, new Set(allActivityTypes)),
        statuses: parseSetParam(
          statusesParam,
          STATUS_VALUES,
          new Set(DEFAULT_STATUS_FILTER)
        ),
        sla: slaParam === "breached" || slaParam === "risk" ? slaParam : "all",
        start: startParam && DATE_PARAM_REGEX.test(startParam) ? startParam : "",
        end: endParam && DATE_PARAM_REGEX.test(endParam) ? endParam : "",
      });
    } else if (statusParam) {
      applyStatusFromParam(statusParam);
      setSearchQuery("");
    } else {
      resetFiltersToDefault();
    }

    if (sourceParam === "goals" && goalParam) {
      setCommandResult({
        status: "success",
        text: `Filtro aplicado para acompanhar a meta "${goalParam}".`,
      });
    } else if (sourceParam === "goals" && focusParam === "metas") {
      setCommandResult({
        status: "success",
        text: "Painel ajustado para apoiar execução de metas.",
      });
    }

    if (activityIdParam) {
      const linkedActivity = storeActivities.find(
        (activity) => activity.id === activityIdParam
      );

      if (!linkedActivity) {
        setOwnerOverrideId(null);
        setCommandResult({
          status: "error",
          text: "Atividade do link não encontrada na sua carteira atual.",
        });
        return;
      }

      const canAccessLinkedActivity =
        canViewTeamScope || linkedActivity.responsibleId === user?.id;

      if (!canAccessLinkedActivity) {
        setOwnerOverrideId(null);
        setCommandResult({
          status: "error",
          text: "Essa atividade não pertence à sua carteira.",
        });
        return;
      }

      setOwnerOverrideId(canViewTeamScope ? linkedActivity.responsibleId : null);
      setSelectedActivityId(linkedActivity.id);
      setExpandedActivityId(linkedActivity.id);

      schedule(() => {
        const target = document.getElementById(
          `activity-card-${linkedActivity.id}`
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 80);

      if (executeParam) {
        pushHeaderInlineFeedback({
          tone: "info",
          message: `Canal de ${getExecuteChannelLabel(executeParam)} pronto para execução desta atividade.`,
        });
      }
    } else {
      setOwnerOverrideId(null);
    }
  }, [
    applyExplicitUrlFilters,
    canViewTeamScope,
    applyStatusFromParam,
    pushHeaderInlineFeedback,
    resetFiltersToDefault,
    schedule,
    searchParams,
    storeActivities,
    user?.id,
  ]);

  useEffect(() => {
    if (appliedQueryRef.current === null) return;

    const params = new URLSearchParams(searchParams.toString());
    const normalizedQuery = searchQuery.trim();
    const selectedTypes = allActivityTypes.filter((type) => filterTypes.has(type));
    const selectedStatuses = STATUS_VALUES.filter((status) =>
      filterStatuses.has(status)
    );

    if (viewMode !== "list") params.set("view", viewMode);
    else params.delete("view");

    if (normalizedQuery) params.set("q", normalizedQuery);
    else params.delete("q");

    if (selectedTypes.length === allActivityTypes.length) params.delete("types");
    else params.set("types", selectedTypes.join(","));

    if (selectedStatuses.length === STATUS_VALUES.length) params.delete("statuses");
    else params.set("statuses", selectedStatuses.join(","));

    if (filterSla === "all") params.delete("sla");
    else params.set("sla", filterSla);

    if (filterDateStart) params.set("start", filterDateStart);
    else params.delete("start");

    if (filterDateEnd) params.set("end", filterDateEnd);
    else params.delete("end");

    // Legacy status param can diverge from explicit filters.
    params.delete("status");
    params.delete("id");
    params.delete("activityId");
    params.delete("execute");
    params.delete("source");
    params.delete("focus");
    params.delete("goal");

    const nextQuery = params.toString();
    const currentQuery = searchParams.toString();
    if (nextQuery === currentQuery) return;

    appliedQueryRef.current = nextQuery;
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
      scroll: false,
    });
  }, [
    filterDateEnd,
    filterDateStart,
    filterSla,
    filterStatuses,
    filterTypes,
    pathname,
    router,
    searchParams,
    searchQuery,
    viewMode,
  ]);

  const filteredActivities = useMemo(() => {
    const normalizedQuery = deferredSearchQuery.trim().toLowerCase();

    return activities.filter((activity) => {
      const effectiveStatus = getEffectiveStatus(activity, now);
      if (!filterTypes.has(activity.type)) return false;
      if (!filterStatuses.has(effectiveStatus)) return false;
      if (filterDateStart && activity.dueDate < filterDateStart) return false;
      if (filterDateEnd && activity.dueDate > filterDateEnd) return false;
      if (normalizedQuery) {
        const searchableContent = [
          activity.title,
          activity.description || "",
          activity.clientName || "",
          activity.opportunityTitle || "",
          activity.responsibleName,
          typeLabels[activity.type],
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableContent.includes(normalizedQuery)) return false;
      }

      if (filterSla === "breached" && !isActivityOverdue(activity, now)) return false;
      if (filterSla === "risk" && !isSlaRisk(activity, now)) return false;

      return true;
    });
  }, [
    activities,
    filterTypes,
    filterStatuses,
    filterDateStart,
    filterDateEnd,
    filterSla,
    deferredSearchQuery,
    now,
  ]);

  const executionActivities = useMemo(
    () =>
      filteredActivities.filter(
        (activity) => activity.status !== "completed" && activity.status !== "cancelled"
      ),
    [filteredActivities]
  );

  const executionActivityIdSet = useMemo(
    () => new Set(executionActivities.map((activity) => activity.id)),
    [executionActivities]
  );

  const selectedExecutionIds = useMemo(
    () =>
      Array.from(selectedActivityIds).filter((activityId) =>
        executionActivityIdSet.has(activityId)
      ),
    [selectedActivityIds, executionActivityIdSet]
  );

  const allVisibleExecutionSelected =
    executionActivities.length > 0 &&
    selectedExecutionIds.length === executionActivities.length;

  const toggleActivitySelection = useCallback((activityId: string) => {
    setSelectedActivityIds((prev) => {
      const next = new Set(prev);
      if (next.has(activityId)) next.delete(activityId);
      else next.add(activityId);
      return next;
    });
  }, []);

  const handleSelectAllVisibleActivities = useCallback((checked: boolean) => {
    if (!checked) {
      setSelectedActivityIds(new Set());
      return;
    }

    setSelectedActivityIds(new Set(executionActivities.map((activity) => activity.id)));
  }, [executionActivities]);

  const clearSelectedActivities = useCallback(() => {
    setSelectedActivityIds(new Set());
  }, []);

  const calendarActivitiesByDate = useMemo(() => {
    const byDate = new Map<string, Activity[]>();

    for (const activity of executionActivities) {
      const key = activity.dueDate;
      const list = byDate.get(key) || [];
      list.push(activity);
      byDate.set(key, list);
    }

    for (const [key, list] of byDate.entries()) {
      list.sort((a, b) => (a.dueTime || "99:99").localeCompare(b.dueTime || "99:99"));
      byDate.set(key, list);
    }

    return byDate;
  }, [executionActivities]);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(calendarMonth);
    const monthEnd = endOfMonth(calendarMonth);
    const gridStart = startOfWeek(monthStart);
    const gridEnd = endOfWeek(monthEnd);

    const days: Date[] = [];
    let cursor = gridStart;

    while (cursor.getTime() <= gridEnd.getTime()) {
      days.push(cursor);
      cursor = addDays(cursor, 1);
    }

    return days;
  }, [calendarMonth]);

  const selectedCalendarDayActivities = useMemo(() => {
    return calendarActivitiesByDate.get(selectedCalendarDate) || [];
  }, [calendarActivitiesByDate, selectedCalendarDate]);

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

  const futureActivities = useMemo(() => {
    const next7Date = addDays(startOfDay(now), 7);

    return executionActivities
      .filter((activity) => {
        if (isActivityOverdue(activity, now)) return false;
        const due = startOfDay(parseDateISO(activity.dueDate));
        return due > next7Date;
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
  const headerMetaText = useMemo(
    () =>
      `${formatCompactDateLabel(now)} · Olá, ${user?.name?.trim().split(" ")[0] ?? "Vendedor"
      }`,
    [now, user?.name]
  );

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

  const menuxIntelligenceRecommendations = useMemo(
    () => buildRecommendations(executionActivities, now, planSeed),
    [executionActivities, now, planSeed]
  );

  const selectedActivity = useMemo(
    () => activities.find((activity) => activity.id === selectedActivityId) || null,
    [activities, selectedActivityId]
  );

  const detailsModalActivity = useMemo(
    () => activities.find((activity) => activity.id === detailsModalActivityId) || null,
    [activities, detailsModalActivityId]
  );

  const hasActiveFilters =
    !isSameSet(filterTypes, ALL_ACTIVITY_TYPE_SET) ||
    !isSameSet(filterStatuses, DEFAULT_STATUS_FILTER) ||
    filterDateStart !== "" ||
    filterDateEnd !== "" ||
    filterSla !== "all" ||
    searchQuery.trim() !== "";

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

    if (!isSameSet(filterStatuses, DEFAULT_STATUS_FILTER)) {
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

    if (searchQuery.trim()) {
      chips.push({
        id: "search",
        label: `Busca: "${searchQuery.trim()}"`,
        onRemove: () => setSearchQuery(""),
      });
    }

    return chips;
  }, [
    filterTypes,
    filterStatuses,
    filterDateStart,
    filterDateEnd,
    filterSla,
    searchQuery,
  ]);

  const clearFilters = useCallback(() => {
    setFilterTypes(new Set(allActivityTypes));
    setFilterStatuses(new Set(DEFAULT_STATUS_FILTER));
    setFilterDateStart("");
    setFilterDateEnd("");
    setFilterSla("all");
    setSearchQuery("");
    setSelectedActivityIds(new Set());
  }, []);

  const toggleSection = useCallback((key: SectionKey) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleGeneratePlan = useCallback(() => {
    setIsPlanning(true);
    setSectionErrors((prev) => ({ ...prev, intelligence: null }));

    schedule(() => {
      if (executionActivities.length === 0) {
        setIsPlanning(false);
        setSectionErrors((prev) => ({
          ...prev,
          intelligence: "Não há atividades ativas para montar um plano agora.",
        }));
        pushHeaderInlineFeedback({
          tone: "error",
          message: "Não há atividades ativas para montar um plano agora.",
        });
        return;
      }

      setPlanSeed((prev) => prev + 1);
      setCommandResult({
        status: "success",
        text: "Plano do dia gerado com foco em impacto e risco.",
      });
      pushHeaderInlineFeedback({
        tone: "success",
        message: "Plano do dia gerado com foco em impacto e risco.",
      });
      setIsPlanning(false);
    }, 260);
  }, [executionActivities.length, pushHeaderInlineFeedback, schedule]);

  const handleQuickFilterOverdue = useCallback(() => {
    setViewMode("list");
    setFilterStatuses(new Set<ActivityStatus>(["pending", "overdue"]));
    setFilterSla("breached");
    setFilterDateStart("");
    setFilterDateEnd("");
  }, []);

  const handleQuickFilterToday = useCallback(() => {
    const todayIso = toISODate(startOfDay(now));
    setViewMode("list");
    setFilterStatuses(new Set<ActivityStatus>(["pending", "overdue"]));
    setFilterDateStart(todayIso);
    setFilterDateEnd(todayIso);
    setFilterSla("all");
  }, [now]);

  const handleQuickFilterSlaRisk = useCallback(() => {
    setViewMode("list");
    setFilterStatuses(new Set<ActivityStatus>(["pending"]));
    setFilterSla("risk");
    setFilterDateStart("");
    setFilterDateEnd("");
  }, []);

  const handleExecuteRecommendation = useCallback(
    (recommendation: MenuxIntelligenceRecommendation) => {
      if (!canExecuteActivityActions) {
        setCommandResult({
          status: "error",
          text: "Você não tem permissão para executar ações nesta carteira.",
        });
        return;
      }

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
                : `Checklist de preparação gerado para ${target.clientName || target.opportunityTitle || "atividade"}.`,
        });

        schedule(() => {
          setRecommendationStates((prev) => ({
            ...prev,
            [recommendation.id]: "idle",
          }));
        }, 1200);
      }, 220);
    },
    [activities, canExecuteActivityActions, schedule]
  );

  const handleViewActivityFromRecommendation = useCallback((activityId: string) => {
    setSelectedActivityId(activityId);
    setExpandedActivityId(activityId);

    const target = document.getElementById(`activity-card-${activityId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const clearActivityFeedback = useCallback((activityId: string) => {
    setActivityFeedback((prev) => {
      const next = { ...prev };
      delete next[activityId];
      return next;
    });
  }, []);

  const handleActionDenied = useCallback(
    (activityId: string, message: string) => {
      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "error", message },
      }));

      schedule(() => {
        clearActivityFeedback(activityId);
      }, 2200);
    },
    [clearActivityFeedback, schedule]
  );

  const canRunActionOnActivity = useCallback(
    (activityId: string) => activities.some((activity) => activity.id === activityId),
    [activities]
  );

  const handleCompleteActivity = useCallback(
    (activityId: string, notes?: string) => {
      if (!canExecuteActivityActions) {
        handleActionDenied(activityId, "Você não tem permissão para concluir atividades.");
        return;
      }

      if (!canRunActionOnActivity(activityId)) {
        handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
        return;
      }

      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "loading-complete" },
      }));

      schedule(() => {
        try {
          completeActivity(activityId, notes);
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: { state: "complete-success", message: "Concluída" },
          }));
        } catch {
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: { state: "error", message: "Falha ao concluir atividade." },
          }));
        }
      }, 180);

      schedule(() => {
        clearActivityFeedback(activityId);
      }, 1500);
    },
    [
      canExecuteActivityActions,
      canRunActionOnActivity,
      clearActivityFeedback,
      completeActivity,
      handleActionDenied,
      schedule,
    ]
  );

  const handleCancelActivity = useCallback(
    (activityId: string) => {
      if (!canCancelActivity) {
        handleActionDenied(activityId, "Você não tem permissão para cancelar atividades.");
        return;
      }

      if (!canRunActionOnActivity(activityId)) {
        handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
        return;
      }

      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "loading-cancel" },
      }));

      schedule(() => {
        try {
          cancelActivity(activityId);
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: { state: "complete-success", message: "Cancelada" },
          }));
        } catch {
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: { state: "error", message: "Falha ao cancelar atividade." },
          }));
        }
      }, 180);

      schedule(() => {
        clearActivityFeedback(activityId);
      }, 1500);
    },
    [
      canCancelActivity,
      canRunActionOnActivity,
      cancelActivity,
      clearActivityFeedback,
      handleActionDenied,
      schedule,
    ]
  );

  const handlePostponeActivity = useCallback(
    (activityId: string, newDate: string) => {
      if (!canExecuteActivityActions) {
        handleActionDenied(activityId, "Você não tem permissão para reagendar atividades.");
        return;
      }

      if (!canRunActionOnActivity(activityId)) {
        handleActionDenied(activityId, "A atividade não pertence à sua carteira.");
        return;
      }

      if (!DATE_PARAM_REGEX.test(newDate)) {
        handleActionDenied(activityId, "Data de reagendamento inválida.");
        return;
      }

      const todayIso = toISODate(startOfDay(now));
      if (newDate < todayIso) {
        handleActionDenied(activityId, "Escolha uma data a partir de hoje.");
        return;
      }

      setActivityFeedback((prev) => ({
        ...prev,
        [activityId]: { state: "loading-postpone" },
      }));

      schedule(() => {
        try {
          postponeActivity(activityId, newDate);
          setHighlightedPostponedId(activityId);
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: {
              state: "postpone-success",
              message: `Reagendada para ${formatDateBR(newDate)}`,
            },
          }));
        } catch {
          setActivityFeedback((prev) => ({
            ...prev,
            [activityId]: { state: "error", message: "Falha ao reagendar atividade." },
          }));
        }
      }, 180);

      schedule(() => {
        setHighlightedPostponedId((current) => (current === activityId ? null : current));
        clearActivityFeedback(activityId);
      }, 1500);
    },
    [
      canExecuteActivityActions,
      canRunActionOnActivity,
      clearActivityFeedback,
      handleActionDenied,
      now,
      postponeActivity,
      schedule,
    ]
  );

  const handleRequestBulkCompleteActivities = useCallback(() => {
    if (selectedExecutionIds.length === 0) return;

    if (!canExecuteActivityActions) {
      setCommandResult({
        status: "error",
        text: "Você não tem permissão para concluir atividades em lote.",
      });
      pushBulkInlineFeedback({
        tone: "error",
        message: "Você não tem permissão para concluir atividades em lote.",
      });
      return;
    }

    setConfirmBulkCompleteOpen(true);
  }, [canExecuteActivityActions, pushBulkInlineFeedback, selectedExecutionIds.length]);

  const handleConfirmBulkCompleteActivities = useCallback(() => {
    if (selectedExecutionIds.length === 0) {
      setConfirmBulkCompleteOpen(false);
      return;
    }

    let successCount = 0;
    let deniedCount = 0;
    selectedExecutionIds.forEach((activityId) => {
      if (!canRunActionOnActivity(activityId)) {
        deniedCount += 1;
        return;
      }
      handleCompleteActivity(activityId);
      successCount += 1;
    });
    clearSelectedActivities();
    setConfirmBulkCompleteOpen(false);
    const message =
      deniedCount > 0
        ? `${successCount} concluída(s), ${deniedCount} sem permissão/escopo.`
        : `${successCount} atividade(s) concluída(s) em lote.`;
    setCommandResult({
      status: deniedCount > 0 ? "error" : "success",
      text: message,
    });
    pushBulkInlineFeedback({
      tone: deniedCount > 0 ? "error" : "success",
      message,
    });
  }, [
    canRunActionOnActivity,
    clearSelectedActivities,
    handleCompleteActivity,
    pushBulkInlineFeedback,
    selectedExecutionIds,
  ]);

  const handleRequestBulkCancelActivities = useCallback(() => {
    if (selectedExecutionIds.length === 0) return;

    if (!canCancelActivity) {
      setCommandResult({
        status: "error",
        text: "Você não tem permissão para cancelar atividades em lote.",
      });
      pushBulkInlineFeedback({
        tone: "error",
        message: "Você não tem permissão para cancelar atividades em lote.",
      });
      return;
    }

    setConfirmBulkCancelOpen(true);
  }, [canCancelActivity, pushBulkInlineFeedback, selectedExecutionIds.length]);

  const handleConfirmBulkCancelActivities = useCallback(() => {
    if (selectedExecutionIds.length === 0) {
      setConfirmBulkCancelOpen(false);
      return;
    }

    let successCount = 0;
    let deniedCount = 0;
    selectedExecutionIds.forEach((activityId) => {
      if (!canRunActionOnActivity(activityId)) {
        deniedCount += 1;
        return;
      }
      handleCancelActivity(activityId);
      successCount += 1;
    });
    clearSelectedActivities();
    setConfirmBulkCancelOpen(false);
    const message =
      deniedCount > 0
        ? `${successCount} cancelada(s), ${deniedCount} sem permissão/escopo.`
        : `${successCount} atividade(s) cancelada(s) em lote.`;
    setCommandResult({
      status: deniedCount > 0 ? "error" : "success",
      text: message,
    });
    pushBulkInlineFeedback({
      tone: deniedCount > 0 ? "error" : "success",
      message,
    });
  }, [
    canRunActionOnActivity,
    clearSelectedActivities,
    handleCancelActivity,
    pushBulkInlineFeedback,
    selectedExecutionIds,
  ]);

  const handleBulkPostponeActivities = useCallback(
    (targetDate: string) => {
      if (selectedExecutionIds.length === 0) return;

      if (!canExecuteActivityActions) {
        setCommandResult({
          status: "error",
          text: "Você não tem permissão para reagendar atividades em lote.",
        });
        pushBulkInlineFeedback({
          tone: "error",
          message: "Você não tem permissão para reagendar atividades em lote.",
        });
        return;
      }

      if (!DATE_PARAM_REGEX.test(targetDate)) {
        pushBulkInlineFeedback({
          tone: "error",
          message: "Data de reagendamento inválida para lote.",
        });
        return;
      }

      const todayIso = toISODate(startOfDay(now));
      if (targetDate < todayIso) {
        pushBulkInlineFeedback({
          tone: "error",
          message: "Escolha uma data de lote a partir de hoje.",
        });
        return;
      }

      let successCount = 0;
      let deniedCount = 0;
      selectedExecutionIds.forEach((activityId) => {
        if (!canRunActionOnActivity(activityId)) {
          deniedCount += 1;
          return;
        }
        handlePostponeActivity(activityId, targetDate);
        successCount += 1;
      });
      clearSelectedActivities();
      setBulkPostponeOpen(false);
      setBulkPostponeCustomDate("");
      const message =
        deniedCount > 0
          ? `${successCount} reagendada(s), ${deniedCount} sem permissão/escopo.`
          : `${successCount} atividade(s) reagendada(s) para ${formatDateBR(targetDate)}.`;
      setCommandResult({
        status: deniedCount > 0 ? "error" : "success",
        text: message,
      });
      pushBulkInlineFeedback({
        tone: deniedCount > 0 ? "error" : "success",
        message,
      });
    },
    [
      canExecuteActivityActions,
      canRunActionOnActivity,
      clearSelectedActivities,
      handlePostponeActivity,
      now,
      pushBulkInlineFeedback,
      selectedExecutionIds,
    ]
  );

  const handleOpenIntelligenceFromActivity = useCallback(
    (activity: Activity) => {
      const insight = getActivityInsight(activity, now);
      const contextLabel =
        activity.clientName || activity.opportunityTitle || "atividade selecionada";

      setSelectedActivityId(activity.id);
      setGeneratedContent({
        title: `Menux Intelligence · ${contextLabel}`,
        content: `Mensagem pronta:\n${insight.message}\n\nPróximo passo:\n${insight.nextStep}\n\nRisco se ignorar:\n${insight.risk}`,
      });
      setGeneratedModalOpen(true);
      setCommandResult({
        status: "success",
        text: `Sugestões da Menux Intelligence abertas para ${contextLabel}.`,
      });

      setActivityFeedback((prev) => ({
        ...prev,
        [activity.id]: {
          state: "info",
          message: "Insights gerados para esta atividade.",
        },
      }));
      schedule(() => clearActivityFeedback(activity.id), 1800);
    },
    [clearActivityFeedback, now, schedule]
  );

  const handleGenerateFollowup = useCallback(
    (activity: Activity) => {
      const insight = getActivityInsight(activity, now);
      const contextLabel =
        activity.clientName || activity.opportunityTitle || "atividade selecionada";

      setSelectedActivityId(activity.id);
      setGeneratedContent({
        title: `Follow-up · ${contextLabel}`,
        content: insight.message,
      });
      setGeneratedModalOpen(true);
      setCommandResult({
        status: "success",
        text: `Follow-up pronto para ${contextLabel}.`,
      });

      setActivityFeedback((prev) => ({
        ...prev,
        [activity.id]: {
          state: "info",
          message: "Follow-up gerado e pronto para envio.",
        },
      }));
      schedule(() => clearActivityFeedback(activity.id), 1800);
    },
    [clearActivityFeedback, now, schedule]
  );

  const handleRunCommand = useCallback(
    (commandId: string) => {
      setCommandLoadingId(commandId);

      schedule(() => {
        if (commandId === "sla-priority") {
          setFilterSla("breached");
          setViewMode("list");
          setCommandResult({
            status: "success",
            text: "Filtro de SLA 'Estourado' aplicado.",
          });
        } else if (commandId === "risk-client") {
          setCommandLoadingId(null);
          router.push("/clients?filter=risk");
          return; // Navigation handles feedback
        } else if (commandId === "week-summary") {
          setGeneratedContent({
            title: "Resumo da Semana",
            content: `### Minha semana em atividades\n- Total ativas: ${executionActivities.length}\n- Atrasadas: ${overdueCount}\n- SLAs em risco: ${riskCount}\n\n**Próximo passo recomendado:** focar primeiro nas atividades atrasadas de maior impacto comercial.`,
          });
          setGeneratedModalOpen(true);
          setCommandResult({
            status: "success",
            text: "Resumo semanal gerado com foco na sua carteira.",
          });
        } else if (commandId === "bulk-messages") {
          if (overdueCount === 0) {
            setCommandResult({
              status: "error",
              text: "Sem atividades atrasadas para gerar mensagens no momento.",
            });
            setCommandLoadingId(null);
            return;
          }

          setGeneratedContent({
            title: "Mensagens para Atrasadas",
            content: `Olá [Nome], vi que não conseguimos nos falar na data combinada. Como está sua agenda para retomarmos amanhã?\n\nOi [Nome], tudo bem? Gostaria de reagendar nosso papo sobre [Assunto]. Teria disponibilidade esta tarde?`
          });
          setGeneratedModalOpen(true);
          setCommandResult({ status: "success", text: "Sugestões de mensagem geradas." });
        } else if (commandId === "call-script") {
          setGeneratedContent({
            title: "Script de Ligação",
            content: `**Abertura:** "Olá [Nome], aqui é ${user?.name || "Consultor"} da [Empresa]. Tudo bem?"\n\n**Gancho:** "Estou ligando pois vi que ficou pendente nosso alinhamento sobre [Assunto] e não gostaria de deixar passar..."\n\n**Fechamento:** "Conseguimos 5 minutinhos agora ou prefere agendar?"`
          });
          setGeneratedModalOpen(true);
          setCommandResult({ status: "success", text: "Script de ligação gerado." });
        } else {
          // Fallback for others
          const result = buildCommandResult(commandId, {
            overdueCount,
            riskCount,
            totalActive: executionActivities.length,
            selectedActivity: selectedActivity || undefined,
          });
          setCommandResult(result);
        }

        setCommandLoadingId(null);
      }, 500);
    },
    [executionActivities.length, overdueCount, riskCount, selectedActivity, schedule, router, user?.name]
  );

  const handleExportCSV = useCallback(() => {
    if (!canExportActivities) {
      setCommandResult({
        status: "error",
        text: "Você não tem permissão para exportar dados desta tela.",
      });
      pushSummaryInlineFeedback({
        tone: "error",
        message: "Você não tem permissão para exportar dados desta tela.",
      });
      return;
    }

    setIsExporting(true);
    pushSummaryInlineFeedback({
      tone: "info",
      message: "Exportando lista de atividades...",
    });

    const header = ["Título", "Tipo", "Status", "Cliente", "Oportunidade", "Data", "Horário", "Responsável"];
    try {
      const rows = filteredActivities.map((activity) => {
        const effectiveStatus = getEffectiveStatus(activity, now);
        return [
          activity.title,
          typeLabels[activity.type],
          effectiveStatus === "pending"
            ? "Pendente"
            : effectiveStatus === "completed"
              ? "Concluída"
              : effectiveStatus === "overdue"
                ? "Atrasada"
                : "Cancelada",
          activity.clientName || "",
          activity.opportunityTitle || "",
          formatDateBR(activity.dueDate),
          activity.dueTime || "",
          activity.responsibleName,
        ];
      });

      const csvContent = [
        header.join(";"),
        ...rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(";")),
      ].join("\n");

      const BOM = "\uFEFF";
      const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `atividades-${toISODate(now)}.csv`;
      link.click();
      URL.revokeObjectURL(link.href);

      setCommandResult({
        status: "success",
        text: `${filteredActivities.length} atividades exportadas em CSV.`,
      });
      pushSummaryInlineFeedback({
        tone: "success",
        message: `${filteredActivities.length} atividade(s) exportada(s) em CSV.`,
      });
    } catch {
      setCommandResult({
        status: "error",
        text: "Não foi possível exportar a lista agora.",
      });
      pushSummaryInlineFeedback({
        tone: "error",
        message: "Não foi possível exportar a lista agora.",
      });
    } finally {
      setIsExporting(false);
    }
  }, [canExportActivities, filteredActivities, now, pushSummaryInlineFeedback]);

  const renderSectionBody = useCallback(
    (items: Activity[], sectionKey: Exclude<SectionKey, "intelligence">) => {
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
                  disabled={!canCreateActivity}
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
                          selected={selectedActivityIds.has(activity.id)}
                          canExecuteActions={canExecuteActivityActions}
                          canCancelActions={canCancelActivity}
                          feedback={activityFeedback[activity.id]}
                          onToggleExpand={() => {
                            setExpandedActivityId((prev) =>
                              prev === activity.id ? null : activity.id
                            );
                            setSelectedActivityId(activity.id);
                          }}
                          onToggleSelect={() => toggleActivitySelection(activity.id)}
                          onComplete={(notes) => handleCompleteActivity(activity.id, notes)}
                          onCancel={() => handleCancelActivity(activity.id)}
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

      return (
        <VirtualizedActivityList
          items={items}
          estimateSize={214}
          renderItem={(activity) => (
            <ExecutionActivityCard
              activity={activity}
              now={now}
              isExpanded={expandedActivityId === activity.id}
              isHighlighted={highlightedPostponedId === activity.id}
              selected={selectedActivityIds.has(activity.id)}
              canExecuteActions={canExecuteActivityActions}
              canCancelActions={canCancelActivity}
              feedback={activityFeedback[activity.id]}
              onToggleExpand={() => {
                setExpandedActivityId((prev) => (prev === activity.id ? null : activity.id));
                setSelectedActivityId(activity.id);
              }}
              onToggleSelect={() => toggleActivitySelection(activity.id)}
              onComplete={(notes) => handleCompleteActivity(activity.id, notes)}
              onCancel={() => handleCancelActivity(activity.id)}
              onPostpone={(newDate) => handlePostponeActivity(activity.id, newDate)}
              onSelectIntelligence={() => setSelectedActivityId(activity.id)}
              onGenerateFollowup={() => handleGenerateFollowup(activity)}
            />
          )}
        />
      );
    },
    [
      sectionErrors,
      isLoading,
      viewMode,
      now,
      expandedActivityId,
      highlightedPostponedId,
      selectedActivityIds,
      activityFeedback,
      canCreateActivity,
      canExecuteActivityActions,
      canCancelActivity,
      openDrawer,
      handleGeneratePlan,
      toggleActivitySelection,
      handleCompleteActivity,
      handleCancelActivity,
      handlePostponeActivity,
      handleGenerateFollowup,
    ]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
      className="space-y-7 lg:space-y-8"
    >
      <ModuleCommandHeader
        title="Atividades"
        description="Execução do dia, com prioridades e próximos passos."
        className={cn(
          "border-zinc-200/80 bg-zinc-50/88",
          isPageScrolled && "shadow-[0_14px_24px_-18px_rgba(15,23,42,0.32)]"
        )}
        meta={headerMetaText}
        chips={[
          {
            id: "overdue",
            label: `${overdueCount} atrasadas`,
            icon: <AlertTriangle className="h-3.5 w-3.5" />,
            tone: overdueCount > 0 ? "danger" : "neutral",
            onClick: handleQuickFilterOverdue,
          },
          {
            id: "today",
            label: `${todayActivities.length} para hoje`,
            icon: <CalendarClock className="h-3.5 w-3.5" />,
            tone: todayActivities.length > 0 ? "info" : "neutral",
            onClick: handleQuickFilterToday,
          },
          hasActiveFilters
            ? {
                id: "active-filters",
                label: `${activeFilterChips.length} filtros ativos`,
                icon: <Filter className="h-3.5 w-3.5" />,
                tone: "warning",
                onClick: () => setIsFilterOpen(true),
              }
            : {
                id: "sla-risk",
                label: `${riskCount} SLAs em risco`,
                icon: <CircleAlert className="h-3.5 w-3.5" />,
                tone: riskCount > 0 ? "warning" : "success",
                onClick: handleQuickFilterSlaRisk,
              },
        ]}
        actions={
          <div className="flex w-full flex-col gap-3">
            <div className="flex w-full flex-col gap-2.5 min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between">
              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center min-[1180px]:w-auto min-[1180px]:flex-1">
                <div className="relative w-full sm:flex-1 min-[1180px]:max-w-[380px]">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                  <Input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Buscar atividade, cliente ou oportunidade..."
                    className="h-10 rounded-full border-zinc-200 bg-white/90 pl-8 text-sm"
                  />
                </div>

                <div className="flex w-full items-center gap-1 rounded-full border border-zinc-200/90 bg-white/90 p-1 shadow-sm sm:w-auto">
                  {[
                    { key: "list" as const, label: "Lista", icon: List },
                    { key: "agenda" as const, label: "Agenda", icon: CalendarDays },
                  ].map((mode) => {
                    const active = viewMode === mode.key;
                    return (
                      <button
                        key={mode.key}
                        onClick={() => setViewMode(mode.key)}
                        className={cn(
                          "inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all duration-120 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 sm:flex-none",
                          active
                            ? "bg-brand text-white shadow-[0_6px_14px_-8px_rgba(29,78,216,0.7)]"
                            : "text-zinc-600 hover:bg-zinc-100/90"
                        )}
                      >
                        <mode.icon className="h-3.5 w-3.5" />
                        <span>{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:justify-end min-[1180px]:shrink-0">
                <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full border-zinc-200 bg-white/90 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300"
                    >
                      <Filter className="h-4 w-4" />
                      Filtros
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
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

                      <div className="grid grid-cols-1 gap-3">
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
                        <Button variant="outline" className="flex-1 rounded-full" onClick={clearFilters}>
                          Limpar tudo
                        </Button>
                        <Button
                          className="flex-1 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                          onClick={() => setIsFilterOpen(false)}
                        >
                          Fechar
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    className="rounded-full px-3 text-xs text-zinc-500 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300"
                    onClick={clearFilters}
                  >
                    Limpar tudo
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="h-9 rounded-full border-zinc-200 bg-white/90 px-4 transition-all duration-120 ease-out hover:bg-zinc-100/90 active:scale-[0.98] focus-visible:ring-zinc-300"
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
                  className="h-9 rounded-full bg-zinc-900 px-4 text-white transition-all duration-120 ease-out hover:bg-zinc-800 active:scale-[0.98] focus-visible:ring-zinc-300"
                  onClick={() => openDrawer("new-activity")}
                  disabled={!canCreateActivity}
                >
                  <Plus className="h-4 w-4" />
                  Nova atividade
                </Button>
              </div>
            </div>
          </div>
        }
      />

      {headerInlineFeedback ? (
        <InlineFeedbackMessage
          tone={headerInlineFeedback.tone}
          message={headerInlineFeedback.message}
        />
      ) : null}

      {hasActiveFilters && activeFilterChips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilterChips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={chip.onRemove}
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-zinc-50"
            >
              <span>{chip.label}</span>
              <span className="text-zinc-400">×</span>
            </button>
          ))}
        </div>
      )}

      {isTeamScope && activities.length > 0 && (
        <div className="rounded-[14px] border border-blue-200 bg-blue-50/80 px-4 py-3">
          <p className="font-body text-sm text-blue-800">
            <span className="font-semibold">Visão de equipe:</span> você está navegando atividades agregadas da equipe.
          </p>
        </div>
      )}

      {hasNoScopedActivities && !isTeamScope && (
        <div className="rounded-[14px] border border-zinc-200 bg-white px-4 py-4">
          <p className="font-body text-sm text-zinc-700">
            Você não possui atividades atribuídas na sua carteira no momento.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              size="sm"
              className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
              onClick={() => openDrawer("new-activity")}
              disabled={!canCreateActivity}
            >
              <Plus className="h-3.5 w-3.5" />
              Criar atividade
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs"
              onClick={handleGeneratePlan}
              disabled={isPlanning}
            >
              <WandSparkles className="h-3.5 w-3.5" />
              Pedir plano
            </Button>
          </div>
        </div>
      )}

      {viewMode === "list" && executionActivities.length > 0 && (
        <div className="space-y-3 rounded-[18px] border border-zinc-200 bg-white px-4 py-3.5 md:px-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Checkbox
                checked={allVisibleExecutionSelected}
                onCheckedChange={(checked) =>
                  handleSelectAllVisibleActivities(Boolean(checked))
                }
              />
              <span>
                Selecionar todas visíveis ({executionActivities.length})
              </span>
            </div>
            {selectedExecutionIds.length > 0 ? (
              <span className="text-xs font-medium text-zinc-600">
                {selectedExecutionIds.length} selecionada(s)
              </span>
            ) : (
              <span className="text-xs text-zinc-500">
                Selecione atividades para usar ações em lote.
              </span>
            )}
          </div>

          {selectedExecutionIds.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                className="h-8 rounded-full bg-zinc-900 px-3 text-xs text-white hover:bg-zinc-800"
                onClick={handleRequestBulkCompleteActivities}
                disabled={!canExecuteActivityActions}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Concluir em lote
              </Button>
              <Popover open={bulkPostponeOpen} onOpenChange={setBulkPostponeOpen}>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 rounded-full px-3 text-xs"
                    disabled={!canExecuteActivityActions}
                  >
                    <CalendarClock className="h-3.5 w-3.5" />
                    Adiar
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  sideOffset={8}
                  className="w-[250px] rounded-[16px] border-zinc-200 p-3"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Reagendar em lote
                  </p>
                  <div className="space-y-2">
                    {[1, 3, 7].map((days) => (
                      <button
                        key={days}
                        onClick={() =>
                          handleBulkPostponeActivities(
                            toISODate(addDays(startOfDay(now), days))
                          )
                        }
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
                      value={bulkPostponeCustomDate}
                      min={toISODate(startOfDay(now))}
                      onChange={(event) => setBulkPostponeCustomDate(event.target.value)}
                      className="h-9 rounded-[10px]"
                    />
                    <Button
                      size="sm"
                      className="h-8 w-full rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
                      disabled={!bulkPostponeCustomDate}
                      onClick={() =>
                        handleBulkPostponeActivities(bulkPostponeCustomDate)
                      }
                    >
                      Confirmar data
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 rounded-full px-3 text-xs text-red-600 hover:bg-red-50"
                onClick={handleRequestBulkCancelActivities}
                disabled={!canCancelActivity}
              >
                <XCircle className="h-3.5 w-3.5" />
                Cancelar em lote
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 rounded-full px-3 text-xs text-zinc-500"
                onClick={clearSelectedActivities}
              >
                Limpar seleção
              </Button>
            </div>
          )}

          {bulkInlineFeedback ? (
            <InlineFeedbackMessage
              tone={bulkInlineFeedback.tone}
              message={bulkInlineFeedback.message}
              className="mt-2"
            />
          ) : null}
        </div>
      )}

      <div className="grid gap-6 2xl:grid-cols-[minmax(0,7fr)_minmax(340px,3fr)]">
        <div className="space-y-5">
          {viewMode === "agenda" ? (
            <ActivitiesCalendarView
              now={now}
              monthDate={calendarMonth}
              days={calendarDays}
              selectedDate={selectedCalendarDate}
              activitiesByDate={calendarActivitiesByDate}
              selectedDayActivities={selectedCalendarDayActivities}
              expandedActivityId={expandedActivityId}
              highlightedPostponedId={highlightedPostponedId}
              selectedActivityIds={selectedActivityIds}
              canExecuteActions={canExecuteActivityActions}
              canCancelActions={canCancelActivity}
              activityFeedback={activityFeedback}
              onPreviousMonth={() =>
                setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
              }
              onNextMonth={() =>
                setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
              }
              onGoToToday={() => {
                const todayDate = startOfDay(now);
                setCalendarMonth(startOfMonth(todayDate));
                setSelectedCalendarDate(toISODate(todayDate));
              }}
              onSelectDate={(date) => {
                const monthStart = startOfMonth(date);
                const iso = toISODate(date);
                setSelectedCalendarDate(iso);
                setCalendarMonth(monthStart);
              }}
              onToggleExpand={(activityId) => {
                setExpandedActivityId((prev) => (prev === activityId ? null : activityId));
                setSelectedActivityId(activityId);
              }}
              onComplete={handleCompleteActivity}
              onCancel={handleCancelActivity}
              onPostpone={handlePostponeActivity}
              onToggleSelectActivity={toggleActivitySelection}
              onSelectIntelligence={setSelectedActivityId}
              onGenerateFollowup={handleGenerateFollowup}
              onOpenActivityDetails={(activity) => {
                setSelectedActivityId(activity.id);
                setDetailsModalActivityId(activity.id);
              }}
            />
          ) : (
            <>
          <ExecutionSection
            title="O que a Menux Intelligence recomenda agora"
            count={menuxIntelligenceRecommendations.length}
            collapsed={collapsedSections.intelligence}
            onToggle={() => toggleSection("intelligence")}
            tone="violet"
          >
            {sectionErrors.intelligence ? (
              <InlineSectionError
                message={sectionErrors.intelligence}
                onRetry={() => {
                  setSectionErrors((prev) => ({ ...prev, intelligence: null }));
                  handleGeneratePlan();
                }}
              />
            ) : isLoading ? (
              <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={`intelligence-skeleton-${index}`} className="h-44 rounded-[18px]" />
                ))}
              </div>
            ) : menuxIntelligenceRecommendations.length === 0 ? (
              <div className="rounded-[18px] border border-cyan-200/20 bg-slate-900/45 px-5 py-5">
                <p className="font-body text-sm text-slate-200">
                  Sem recomendações no momento.
                </p>
                <Button
                  size="sm"
                  className="mt-3 rounded-full border border-cyan-300/25 bg-cyan-500/18 text-cyan-50 hover:bg-cyan-500/28"
                  onClick={handleGeneratePlan}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Gerar plano do dia
                </Button>
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {menuxIntelligenceRecommendations.map((recommendation) => {
                  const state = recommendationStates[recommendation.id] || "idle";

                  return (
                    <article
                      key={recommendation.id}
                      className="rounded-[20px] border border-cyan-200/20 bg-slate-900/52 p-5 shadow-[0_12px_24px_-20px_rgba(2,6,23,0.75)] transition-all duration-140 hover:-translate-y-[1px] hover:border-cyan-200/35"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-cyan-300/25 bg-cyan-500/16 text-cyan-100">
                            <Bot className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-heading text-sm font-semibold text-slate-100">
                              {recommendation.title}
                            </p>
                            <p className="font-body text-sm leading-snug text-slate-400">{recommendation.context}</p>
                          </div>
                        </div>
                      </div>

                      <p className="min-h-[62px] font-body text-sm leading-relaxed text-slate-300">
                        <span className="font-medium text-slate-100">Por que:</span> {recommendation.why}
                      </p>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <Button
                          size="sm"
                          className="h-9 rounded-full border border-cyan-300/24 bg-cyan-500/18 text-xs text-cyan-50 hover:bg-cyan-500/28"
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
                          className="h-9 rounded-full border-white/16 bg-white/6 text-xs text-slate-200 hover:bg-white/10"
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

          <ExecutionSection
            title="Futuras"
            count={futureActivities.length}
            collapsed={collapsedSections.future}
            onToggle={() => toggleSection("future")}
            tone="neutral"
          >
            {renderSectionBody(futureActivities, "future")}
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
                  onClick={() => {
                    setGeneratedContent({
                      title: "Resumo do dia",
                      content: `### Execução do dia\n- Total de atividades: ${filteredActivities.length}\n- Conclusão semanal: ${weeklyCompletionRate}%\n- Atrasadas: ${overdueCount}\n\n**Próximo passo:** atacar primeiro as atividades atrasadas com maior risco de SLA.`,
                    });
                    setGeneratedModalOpen(true);
                  }}
                >
                  Ver resumo
                </Button>
                {canExportActivities ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full text-xs"
                    disabled={isExporting}
                    onClick={handleExportCSV}
                  >
                    {isExporting ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Exportando...
                      </>
                    ) : (
                      "Exportar lista"
                    )}
                  </Button>
                ) : null}
              </div>
            </div>

            {summaryInlineFeedback ? (
              <InlineFeedbackMessage
                tone={summaryInlineFeedback.tone}
                message={summaryInlineFeedback.message}
                className="mt-3"
              />
            ) : null}

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

            <div className="mt-4 grid gap-3 lg:grid-cols-1">
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
            </>
          )}
        </div>

        <aside
          ref={intelligenceRailRef}
          className={cn(
            "self-start 2xl:sticky 2xl:top-6",
            "transition-shadow duration-120 ease-out",
            isPageScrolled && "2xl:drop-shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
          )}
        >
          <div className="menux-intelligence-theme space-y-5 rounded-[20px] border border-cyan-300/16 p-5 shadow-[0_14px_26px_-22px_rgba(2,6,23,0.8)] md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold text-slate-100">Menux Intelligence</h2>
                <p className="mt-1 flex items-center gap-2 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Online
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-white/16 bg-white/8 text-slate-100 hover:bg-white/12"
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

            <div className="rounded-[16px] border border-white/14 bg-white/7 p-4">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300">
                Diagnóstico do dia
              </p>
              <div className="space-y-1.5 text-sm">
                <DiagnosticItem label="Atrasadas" value={String(overdueCount)} tone={overdueCount > 0 ? "danger" : "success"} />
                <DiagnosticItem label="SLAs críticos" value={String(overdueActivities.filter((a) => {
                  const daysLate = Math.floor((startOfDay(now).getTime() - parseDateISO(a.dueDate).getTime()) / DAY_MS);
                  return daysLate >= 3;
                }).length)} tone={overdueActivities.some((a) => {
                  const daysLate = Math.floor((startOfDay(now).getTime() - parseDateISO(a.dueDate).getTime()) / DAY_MS);
                  return daysLate >= 3;
                }) ? "danger" : "success"} />
                <DiagnosticItem label="SLAs em risco" value={String(riskCount)} tone={riskCount > 0 ? "warning" : "success"} />
                <DiagnosticItem
                  label="Tipo mais afetado"
                  value={hotspotType ? typeLabels[hotspotType[0]] : "Sem dados"}
                  tone="neutral"
                />
              </div>
            </div>

            <div className="rounded-[16px] border border-white/14 bg-white/7 p-4">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300">
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
                      className="flex items-center justify-between rounded-[12px] border border-white/14 bg-white/8 px-3 py-2 text-left text-xs text-slate-200 transition-colors duration-120 hover:bg-white/12 disabled:opacity-70"
                    >
                      <span>{command.label}</span>
                      {loading ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
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
                        ? "border-emerald-300/28 bg-emerald-500/14 text-emerald-100"
                        : "border-red-300/30 bg-red-500/14 text-red-100"
                    )}
                  >
                    {commandResult.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-[16px] border border-white/14 bg-white/7 p-4">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300">
                Mensagens prontas
              </p>

              {selectedActivity ? (
                <SelectedActivityMessages activity={selectedActivity} now={now} />
              ) : (
                <div className="rounded-[12px] border border-dashed border-white/20 bg-white/6 px-3 py-3 text-xs text-slate-300">
                  Selecione uma atividade para ver mensagens sugeridas aqui.
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      <AlertDialog
        open={confirmBulkCompleteOpen}
        onOpenChange={setConfirmBulkCompleteOpen}
      >
        <AlertDialogContent className="rounded-[20px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading text-xl">
              Concluir atividades em lote?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-sm text-zinc-600">
              Essa ação conclui {selectedExecutionIds.length} atividade(s) selecionada(s) e
              registra o status imediatamente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">
              Voltar
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
              onClick={handleConfirmBulkCompleteActivities}
            >
              Confirmar conclusão
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={confirmBulkCancelOpen}
        onOpenChange={setConfirmBulkCancelOpen}
      >
        <AlertDialogContent className="rounded-[20px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading text-xl">
              Cancelar atividades em lote?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-sm text-zinc-600">
              Essa ação cancela {selectedExecutionIds.length} atividade(s) selecionada(s) e
              registra o status imediatamente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">
              Voltar
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full bg-red-600 text-white hover:bg-red-700"
              onClick={handleConfirmBulkCancelActivities}
            >
              Confirmar cancelamento
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <GeneratedContentModal
        open={generatedModalOpen}
        onOpenChange={setGeneratedModalOpen}
        title={generatedContent.title}
        content={generatedContent.content}
      />

      <ActivityDetailsModal
        open={Boolean(detailsModalActivity)}
        activity={detailsModalActivity}
        now={now}
        onOpenChange={(open) => {
          if (!open) {
            setDetailsModalActivityId(null);
          }
        }}
        onSelectIntelligence={(activity) => {
          setDetailsModalActivityId(null);
          handleOpenIntelligenceFromActivity(activity);
        }}
        onGenerateFollowup={(activity) => {
          setDetailsModalActivityId(null);
          handleGenerateFollowup(activity);
        }}
      />
    </motion.div>
  );
}

function VirtualizedActivityList({
  items,
  renderItem,
  estimateSize = 176,
}: {
  items: Activity[];
  renderItem: (activity: Activity) => React.ReactNode;
  estimateSize?: number;
}) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const shouldVirtualize = items.length > 14;

  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Virtual is intentional here for large lists.
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    overscan: 6,
  });

  if (!shouldVirtualize) {
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
              {renderItem(activity)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  const viewportHeight = Math.min(720, Math.max(320, Math.round(items.length * estimateSize)));

  return (
    <div
      ref={parentRef}
      className="overflow-auto pr-1"
      style={{ height: viewportHeight }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const activity = items[virtualRow.index];

          return (
            <div
              key={activity.id}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div className="pb-3">{renderItem(activity)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ActivitiesCalendarView({
  now,
  monthDate,
  days,
  selectedDate,
  activitiesByDate,
  selectedDayActivities,
  expandedActivityId,
  highlightedPostponedId,
  selectedActivityIds,
  canExecuteActions,
  canCancelActions,
  activityFeedback,
  onPreviousMonth,
  onNextMonth,
  onGoToToday,
  onSelectDate,
  onToggleExpand,
  onComplete,
  onCancel,
  onPostpone,
  onToggleSelectActivity,
  onSelectIntelligence,
  onGenerateFollowup,
  onOpenActivityDetails,
}: {
  now: Date;
  monthDate: Date;
  days: Date[];
  selectedDate: string;
  activitiesByDate: Map<string, Activity[]>;
  selectedDayActivities: Activity[];
  expandedActivityId: string | null;
  highlightedPostponedId: string | null;
  selectedActivityIds: Set<string>;
  canExecuteActions: boolean;
  canCancelActions: boolean;
  activityFeedback: Record<string, ActivityFeedback>;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onGoToToday: () => void;
  onSelectDate: (date: Date) => void;
  onToggleExpand: (activityId: string) => void;
  onComplete: (activityId: string, notes?: string) => void;
  onCancel: (activityId: string) => void;
  onPostpone: (activityId: string, newDate: string) => void;
  onToggleSelectActivity: (activityId: string) => void;
  onSelectIntelligence: (activityId: string) => void;
  onGenerateFollowup: (activity: Activity) => void;
  onOpenActivityDetails: (activity: Activity) => void;
}) {
  const monthStart = startOfMonth(monthDate);
  const selectedDateLabel = formatDateFull(selectedDate);
  const weekdayLabels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const todayIso = toISODate(startOfDay(now));

  return (
    <section className="rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-zinc-900">Agenda em calendário</h3>
          <p className="font-body text-xs text-zinc-500">
            Visualização mensal para planejar a execução por dia.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="rounded-full border-zinc-200 text-xs"
            onClick={onGoToToday}
          >
            Hoje
          </Button>
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/90 p-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-zinc-600"
              onClick={onPreviousMonth}
              aria-label="Mês anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[164px] text-center font-heading text-sm font-semibold text-zinc-900 capitalize">
              {formatMonthTitle(monthDate)}
            </span>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-zinc-600"
              onClick={onNextMonth}
              aria-label="Próximo mês"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[16px] border border-zinc-200 bg-white">
        <div className="grid grid-cols-7 border-b border-zinc-200 bg-zinc-50/80">
          {weekdayLabels.map((label) => (
            <div
              key={label}
              className="px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-500"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-zinc-200/80">
          {days.map((date) => {
            const iso = toISODate(date);
            const activities = activitiesByDate.get(iso) || [];
            const inCurrentMonth = date.getMonth() === monthStart.getMonth();
            const isSelected = iso === selectedDate;
            const isToday = iso === todayIso;

            return (
              <div
                key={iso}
                role="button"
                tabIndex={0}
                onClick={() => onSelectDate(date)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectDate(date);
                  }
                }}
                className={cn(
                  "min-h-[116px] bg-white px-2 py-2 text-left transition-colors duration-120 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand/35",
                  "hover:bg-zinc-50",
                  !inCurrentMonth && "bg-zinc-50/70 text-zinc-400",
                  isSelected && "bg-brand/6 ring-2 ring-inset ring-brand/35",
                  isToday && !isSelected && "ring-1 ring-inset ring-zinc-300"
                )}
                aria-label={`Dia ${date.getDate()} com ${activities.length} atividade${activities.length === 1 ? "" : "s"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-semibold",
                      isSelected
                        ? "bg-brand text-white"
                        : isToday
                          ? "bg-zinc-900 text-white"
                          : "text-zinc-700"
                    )}
                  >
                    {date.getDate()}
                  </span>

                  {activities.length > 0 ? (
                    <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600">
                      {activities.length}
                    </span>
                  ) : null}
                </div>

                <div className="mt-2 space-y-1">
                  {activities.slice(0, 2).map((activity) => (
                    <button
                      key={activity.id}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onSelectDate(date);
                        onOpenActivityDetails(activity);
                      }}
                      className="block w-full truncate rounded-[8px] bg-zinc-100/85 px-1.5 py-1 text-left text-[10px] text-zinc-700 transition-colors duration-120 hover:bg-zinc-200/70"
                    >
                      {activity.dueTime ? `${activity.dueTime} ` : ""}
                      {activity.title}
                    </button>
                  ))}

                  {activities.length > 2 ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onSelectDate(date);
                      }}
                      className="text-[10px] font-medium text-brand hover:underline"
                    >
                      +{activities.length - 2} atividades
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 rounded-[16px] border border-zinc-200 bg-zinc-50/70 p-3 md:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-zinc-900">
              {selectedDateLabel}
            </p>
            <p className="text-xs text-zinc-500">
              {selectedDayActivities.length}{" "}
              {selectedDayActivities.length === 1 ? "atividade" : "atividades"} no dia
            </p>
          </div>
        </div>

        {selectedDayActivities.length === 0 ? (
          <div className="rounded-[12px] border border-dashed border-zinc-200 bg-white px-3 py-4 text-sm text-zinc-500">
            Sem atividades para este dia.
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {selectedDayActivities.map((activity) => (
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
                    selected={selectedActivityIds.has(activity.id)}
                    canExecuteActions={canExecuteActions}
                    canCancelActions={canCancelActions}
                    feedback={activityFeedback[activity.id]}
                    onToggleExpand={() => onToggleExpand(activity.id)}
                    onToggleSelect={() => onToggleSelectActivity(activity.id)}
                    onComplete={(notes) => onComplete(activity.id, notes)}
                    onCancel={() => onCancel(activity.id)}
                    onPostpone={(newDate) => onPostpone(activity.id, newDate)}
                    onSelectIntelligence={() => onSelectIntelligence(activity.id)}
                    onGenerateFollowup={() => onGenerateFollowup(activity)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

function ActivityDetailsModal({
  open,
  activity,
  now,
  onOpenChange,
  onSelectIntelligence,
  onGenerateFollowup,
}: {
  open: boolean;
  activity: Activity | null;
  now: Date;
  onOpenChange: (open: boolean) => void;
  onSelectIntelligence: (activity: Activity) => void;
  onGenerateFollowup: (activity: Activity) => void;
}) {
  if (!activity) return null;

  const statusChip = getStatusChip(activity, now);
  const insight = getActivityInsight(activity, now);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[680px] rounded-[20px] border-zinc-200 p-5 sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-semibold text-zinc-900">
            {activity.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-500">
            {activity.clientName || activity.opportunityTitle || "Atividade comercial"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("rounded-full border px-2.5 py-1 text-xs font-semibold", statusChip.className)}>
              {statusChip.label}
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600">
              {typeLabels[activity.type]}
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600">
              {getRelativeTimeLabel(activity, now)}
            </span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-[12px] border border-zinc-200 bg-zinc-50/80 px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Responsável</p>
              <p className="mt-1 text-sm text-zinc-700">{activity.responsibleName}</p>
            </div>
            <div className="rounded-[12px] border border-zinc-200 bg-zinc-50/80 px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Prazo</p>
              <p className="mt-1 text-sm text-zinc-700">
                {formatDateBR(activity.dueDate)}
                {activity.dueTime ? ` · ${activity.dueTime}` : ""}
              </p>
            </div>
          </div>

          <div className="rounded-[14px] border border-zinc-200 bg-white p-3.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Descrição</p>
            <p className="mt-1 text-sm text-zinc-700">
              {activity.description || "Sem descrição detalhada para esta atividade."}
            </p>
          </div>

          <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Recomendação da Menux Intelligence
            </p>
            <p className="mt-1 text-sm text-zinc-700">{insight.nextStep}</p>
            <p className="mt-2 text-xs text-zinc-500">{insight.risk}</p>
          </div>
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-end gap-2">
          <Button
            size="sm"
            variant="outline"
            className="h-9 rounded-full"
            onClick={() => onSelectIntelligence(activity)}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Menux Intelligence
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
            onClick={() => onGenerateFollowup(activity)}
          >
            Gerar follow-up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
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
      badge: "border border-cyan-300/25 bg-cyan-500/18 text-cyan-100",
      icon: "text-cyan-200",
      border: "border-cyan-300/20",
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
  const isIntelligenceTone = tone === "violet";

  return (
    <section
      className={cn(
        "rounded-[20px] border p-5 shadow-sm md:p-6",
        style.border,
        isIntelligenceTone
          ? "bg-slate-900/62 shadow-[0_12px_24px_-20px_rgba(2,6,23,0.82)]"
          : "bg-white"
      )}
    >
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
          <h3
            className={cn(
              "font-heading text-[15px] font-semibold",
              isIntelligenceTone ? "text-slate-100" : "text-zinc-900"
            )}
          >
            {title}
          </h3>
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", style.badge)}>
            {count}
          </span>
        </div>
        {collapsed ? (
          <ChevronDown className={cn("h-4 w-4", isIntelligenceTone ? "text-slate-300" : "text-zinc-500")} />
        ) : (
          <ChevronUp className={cn("h-4 w-4", isIntelligenceTone ? "text-slate-300" : "text-zinc-500")} />
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

function InlineFeedbackMessage({
  tone,
  message,
  className,
}: {
  tone: "success" | "error" | "info";
  message: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[12px] border px-3 py-2 text-xs",
        tone === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        tone === "error" && "border-red-200 bg-red-50 text-red-700",
        tone === "info" && "border-blue-200 bg-blue-50 text-blue-700",
        className
      )}
    >
      {message}
    </div>
  );
}

const ExecutionActivityCard = memo(function ExecutionActivityCard({
  activity,
  now,
  feedback,
  isExpanded,
  isHighlighted,
  selected,
  canExecuteActions,
  canCancelActions,
  onToggleExpand,
  onToggleSelect,
  onComplete,
  onCancel,
  onPostpone,
  onSelectIntelligence,
  onGenerateFollowup,
}: {
  activity: Activity;
  now: Date;
  feedback?: ActivityFeedback;
  isExpanded: boolean;
  isHighlighted: boolean;
  selected: boolean;
  canExecuteActions: boolean;
  canCancelActions: boolean;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
  onComplete: (notes?: string) => void;
  onCancel: () => void;
  onPostpone: (newDate: string) => void;
  onSelectIntelligence: () => void;
  onGenerateFollowup: () => void;
}) {
  const [postponeOpen, setPostponeOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false);
  const [confirmCancelOpen, setConfirmCancelOpen] = useState(false);
  const [completionNotes, setCompletionNotes] = useState("");
  const [customPostponeDate, setCustomPostponeDate] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const TypeIcon = typeIconComponents[activity.type];
  const chip = getStatusChip(activity, now);
  const insight = getActivityInsight(activity, now);

  const isBusy =
    feedback?.state === "loading-complete" || feedback?.state === "loading-cancel" || feedback?.state === "loading-postpone";

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(insight.message);
      setCopied(true);
      setCopyError(null);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
      setCopyError("Não foi possível copiar agora.");
    }
  };

  return (
    <article
      id={`activity-card-${activity.id}`}
      className={cn(
        "rounded-[20px] border border-zinc-200 bg-white p-5 transition-all duration-140 md:p-6",
        "hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.48)]",
        isHighlighted && "ring-2 ring-brand/35",
        feedback?.state === "complete-success" && "border-emerald-300 bg-emerald-50/40"
      )}
      onClick={onToggleExpand}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex items-start gap-3.5">
          <div
            className={cn(
              "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px]",
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

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              <span className="truncate max-w-[420px]">
                {activity.clientId ? (
                  <Link href={`/clients?clientId=${activity.clientId}`} className="hover:text-brand hover:underline">
                    {activity.clientName || "Sem nome"}
                  </Link>
                ) : activity.opportunityId ? (
                  <Link href={`/pipes?opportunityId=${activity.opportunityId}`} className="hover:text-brand hover:underline">
                    {activity.opportunityTitle || "Sem título"}
                  </Link>
                ) : (
                  activity.clientName || activity.opportunityTitle || "Sem contexto"
                )}
              </span>
              <span className="text-zinc-300">•</span>
              <span>{typeLabels[activity.type]}</span>
            </div>

            <div className="mt-3 flex items-center gap-2">
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

        <div className="text-left lg:text-right">
          <p className="text-xs font-medium text-zinc-500">{getRelativeTimeLabel(activity, now)}</p>
        </div>
      </div>

      <div
        className="mt-4 flex flex-wrap items-center gap-2.5"
        onClick={(event) => event.stopPropagation()}
      >
        <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-600">
          <Checkbox
            checked={selected}
            onCheckedChange={() => onToggleSelect()}
            disabled={!canExecuteActions}
          />
          Selecionar
        </label>

        <Popover open={completeOpen} onOpenChange={setCompleteOpen}>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              className="h-9 rounded-full bg-zinc-900 px-4 text-xs text-white hover:bg-zinc-800"
              disabled={isBusy || !canExecuteActions}
            >
              {feedback?.state === "loading-complete" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <CheckCircle2 className="h-3.5 w-3.5" />
              )}
              Concluir
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            className="w-[280px] rounded-[16px] border-zinc-200 p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Concluir atividade
            </p>
            <textarea
              placeholder="Observações da conclusão (opcional)"
              value={completionNotes}
              onChange={(event) => setCompletionNotes(event.target.value)}
              className="w-full resize-none rounded-[10px] border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 placeholder:text-zinc-400 focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20"
              rows={3}
            />
            <div className="mt-2 flex gap-2">
              <Button
                size="sm"
                className="h-8 flex-1 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
                onClick={() => {
                  onComplete(completionNotes.trim() || undefined);
                  setCompleteOpen(false);
                  setCompletionNotes("");
                }}
                disabled={!canExecuteActions}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Confirmar
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 rounded-full text-xs"
                onClick={() => {
                  setCompleteOpen(false);
                  setCompletionNotes("");
                }}
              >
                Cancelar
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover open={postponeOpen} onOpenChange={setPostponeOpen}>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="h-9 rounded-full px-4 text-xs"
              disabled={isBusy || !canExecuteActions}
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
              {[1, 3, 7].map((days) => (
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
                disabled={!customPostponeDate || !canExecuteActions}
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
              className="menux-intelligence-btn-soft h-9 rounded-full px-4 text-xs text-slate-100"
              onClick={onSelectIntelligence}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-100" />
              Menux Intelligence
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            className="w-[min(92vw,340px)] rounded-[16px] border-white/14 bg-slate-950/94 p-3 text-slate-100 shadow-2xl shadow-black/40 backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              Sugestões da Menux Intelligence
            </p>
            <div className="space-y-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5">
              <p className="text-[11px] font-medium text-slate-200">Mensagem pronta</p>
              <p className="text-xs leading-relaxed text-slate-300">{insight.message}</p>
              <Button
                size="sm"
                variant="outline"
                className="h-7 rounded-full border-white/14 bg-white/7 px-2.5 text-[11px] text-slate-100 hover:bg-white/11"
                onClick={handleCopyMessage}
              >
                <Copy className="h-3 w-3" />
                {copied ? "Copiado" : "Copiar"}
              </Button>
            </div>
            <div className="mt-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5">
              <p className="text-[11px] font-medium text-slate-200">Próximo passo</p>
              <p className="text-xs text-slate-300">{insight.nextStep}</p>
            </div>
            <div className="mt-2 rounded-[12px] border border-white/14 bg-white/8 p-2.5">
              <p className="text-[11px] font-medium text-slate-200">Risco se ignorar</p>
              <p className="text-xs text-slate-300">{insight.risk}</p>
            </div>
            {copyError ? (
              <p className="mt-2 text-[11px] text-red-300">{copyError}</p>
            ) : null}
          </PopoverContent>
        </Popover>

        <div className="basis-full" />

        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {feedback?.state === "complete-success" && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                {feedback.message || "Concluída"}
              </span>
            )}

            {feedback?.state === "postpone-success" && (
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-medium text-blue-700">
                {feedback.message || "Reagendada"}
              </span>
            )}

            {feedback?.state === "error" && (
              <span className="rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-medium text-red-700">
                {feedback.message || "Falha ao executar"}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 rounded-full px-3 text-xs text-zinc-600 hover:bg-zinc-100"
              onClick={onToggleExpand}
            >
              {isExpanded ? "Ocultar detalhes" : "Ver detalhes"}
            </Button>

            {activity.status !== "completed" && activity.status !== "cancelled" && (
              <Button
                size="sm"
                variant="ghost"
                className="h-8 rounded-full px-3 text-xs text-red-500 hover:bg-red-50 hover:text-red-600"
                disabled={isBusy || !canCancelActions}
                onClick={() => setConfirmCancelOpen(true)}
              >
                <XCircle className="h-3.5 w-3.5" />
                Cancelar
              </Button>
            )}
          </div>
        </div>
      </div>

      <AlertDialog open={confirmCancelOpen} onOpenChange={setConfirmCancelOpen}>
        <AlertDialogContent className="rounded-[20px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading text-xl">
              Cancelar atividade?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-sm text-zinc-600">
              Esta ação define a atividade como cancelada e interrompe o ciclo de execução.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">
              Voltar
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full bg-red-600 text-white hover:bg-red-700"
              onClick={onCancel}
            >
              Confirmar cancelamento
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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

                  {activity.completionNotes && (
                    <>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Notas de conclusão
                      </p>
                      <p className="mt-1 rounded-[8px] border border-emerald-200 bg-emerald-50/60 px-2.5 py-2 text-sm text-emerald-800">
                        {activity.completionNotes}
                      </p>
                    </>
                  )}

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Checklist de preparação
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {getActivityChecklist(activity).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
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
                    className="mt-3 h-8 w-full rounded-full border border-cyan-300/22 bg-cyan-500/18 text-xs text-cyan-50 hover:bg-cyan-500/28"
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
});

const SelectedActivityMessages = memo(function SelectedActivityMessages({
  activity,
  now,
}: {
  activity: Activity;
  now: Date;
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

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
      setCopyError(null);
      setTimeout(() => setCopiedId(null), 1200);
    } catch {
      setCopiedId(null);
      setCopyError("Não foi possível copiar o conteúdo.");
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[12px] border border-white/14 bg-white/8 px-3 py-2.5">
        <p className="truncate text-xs font-medium text-slate-100">{activity.title}</p>
        <p className="mt-0.5 text-[11px] text-slate-400">
          {activity.clientName || activity.opportunityTitle || "Sem contexto"}
        </p>
      </div>

      {templates.map((template) => (
        <div key={template.id} className="rounded-[12px] border border-white/14 bg-white/8 px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            {template.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-200">{template.body}</p>
          <Button
            size="sm"
            variant="outline"
            className="mt-2 h-7 rounded-full border-white/14 bg-white/7 px-2.5 text-[11px] text-slate-100 hover:bg-white/11"
            onClick={() => handleCopy(template.id, template.body)}
          >
            <Copy className="h-3 w-3" />
            {copiedId === template.id ? "Copiado" : "Copiar"}
          </Button>
        </div>
      ))}

      {copyError ? (
        <p className="text-[11px] text-red-300">{copyError}</p>
      ) : null}
    </div>
  );
});

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
    success: "text-emerald-100",
    warning: "text-amber-100",
    danger: "text-red-100",
    neutral: "text-slate-100",
  };

  return (
    <div className="flex items-center justify-between rounded-[10px] border border-white/10 bg-white/7 px-2.5 py-2">
      <span className="text-slate-300">{label}</span>
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
