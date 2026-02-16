"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Calendar,
  Check,
  Clock3,
  Copy,
  DollarSign,
  Minus,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Target,
  Trophy,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Goal } from "@/types";
import { cn } from "@/lib/cn";
import { useGoalStore } from "@/stores/goal-store";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";

type PeriodFilter = "monthly" | "quarterly" | "yearly";
type GoalStatus = "risk" | "pace" | "achieved";
type GoalStatusFilter = "all" | GoalStatus;
type GoalTypeFilter = "all" | Goal["type"];

interface FeedbackState {
  type: "success" | "error" | "info";
  message: string;
}

interface RankingUser {
  id: string;
  name: string;
  score: number;
  trend: "up" | "down" | "stable";
  weeklyDelta: number;
  completedGoals: number;
  riskGoals: number;
  role: "SDR" | "Closer" | "CS";
  isCurrentUser: boolean;
}

const rankingSeed: RankingUser[] = [
  {
    id: "user-01",
    name: "Ana Souza",
    score: 2450,
    trend: "up",
    weeklyDelta: 110,
    completedGoals: 5,
    riskGoals: 0,
    role: "Closer",
    isCurrentUser: false,
  },
  {
    id: "user-02",
    name: "Carlos Lima",
    score: 2280,
    trend: "up",
    weeklyDelta: 74,
    completedGoals: 4,
    riskGoals: 1,
    role: "SDR",
    isCurrentUser: false,
  },
  {
    id: "user-03",
    name: "Fernanda Reis",
    score: 2140,
    trend: "stable",
    weeklyDelta: 2,
    completedGoals: 3,
    riskGoals: 1,
    role: "CS",
    isCurrentUser: true,
  },
  {
    id: "user-04",
    name: "Pedro Alves",
    score: 1980,
    trend: "down",
    weeklyDelta: -36,
    completedGoals: 2,
    riskGoals: 2,
    role: "Closer",
    isCurrentUser: false,
  },
  {
    id: "user-05",
    name: "Julia Mendes",
    score: 1860,
    trend: "up",
    weeklyDelta: 52,
    completedGoals: 2,
    riskGoals: 1,
    role: "SDR",
    isCurrentUser: false,
  },
];

const goalTypeConfig: Record<
  Goal["type"],
  {
    label: string;
    icon: ReactNode;
    formatter: (value: number) => string;
    chipClass: string;
  }
> = {
  revenue: {
    label: "Receita",
    icon: <DollarSign className="h-4 w-4" />,
    formatter: (value) => formatCurrency(value),
    chipClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  opportunities: {
    label: "Oportunidades",
    icon: <Target className="h-4 w-4" />,
    formatter: (value) => Math.round(value).toLocaleString("pt-BR"),
    chipClass: "bg-blue-50 text-blue-700 border-blue-200",
  },
  conversion: {
    label: "Conversão",
    icon: <TrendingUp className="h-4 w-4" />,
    formatter: (value) => `${value.toFixed(1).replace(".", ",")}%`,
    chipClass: "bg-violet-50 text-violet-700 border-violet-200",
  },
  activities: {
    label: "Atividades",
    icon: <Activity className="h-4 w-4" />,
    formatter: (value) => Math.round(value).toLocaleString("pt-BR"),
    chipClass: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

const periodLabel: Record<PeriodFilter, string> = {
  monthly: "Mensal",
  quarterly: "Trimestral",
  yearly: "Ano",
};

const goalPeriodLabel: Record<Goal["period"], string> = {
  monthly: "Mensal",
  quarterly: "Trimestral",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
}

function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "--";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getProgress(goal: Goal) {
  if (!goal.target) return 0;
  return (goal.current / goal.target) * 100;
}

function getGoalStatus(goal: Goal): GoalStatus {
  const progress = getProgress(goal);
  if (progress >= 100) return "achieved";
  if (progress < 60) return "risk";
  return "pace";
}

const goalStatusConfig: Record<
  GoalStatus,
  {
    label: string;
    badgeClass: string;
    progressClass: string;
    textClass: string;
    ctaLabel: string;
  }
> = {
  risk: {
    label: "Em risco",
    badgeClass: "border-red-200 bg-red-50 text-red-700",
    progressClass: "bg-red-400",
    textClass: "text-red-700",
    ctaLabel: "Ver plano",
  },
  pace: {
    label: "No ritmo",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    progressClass: "bg-blue-500",
    textClass: "text-blue-700",
    ctaLabel: "Criar ações",
  },
  achieved: {
    label: "Batida",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    progressClass: "bg-emerald-500",
    textClass: "text-emerald-700",
    ctaLabel: "Ver detalhes",
  },
};

function getPlanSummary(goal: Goal, status: GoalStatus) {
  const progress = Math.min(100, Math.round(getProgress(goal)));
  if (status === "risk") {
    return {
      why: `Meta em ${progress}% do objetivo. Cadência atual não sustenta fechamento do período.`,
      actions: [
        "Aumentar volume de atividades críticas nos próximos 3 dias.",
        "Repriorizar carteira com foco nos itens de maior potencial.",
        "Executar follow-up diário até recuperar ritmo da meta.",
      ],
    };
  }

  if (status === "pace") {
    return {
      why: `Meta em ${progress}% e evolução consistente. Próximas ações aumentam margem de segurança.`,
      actions: [
        "Consolidar oportunidades em estágio avançado nesta semana.",
        "Criar checkpoints diários para manter taxa de execução.",
        "Antecipar bloqueios operacionais com o time.",
      ],
    };
  }

  return {
    why: `Meta já batida com ${progress}%. O foco agora é proteger resultado e abrir upside.`,
    actions: [
      "Garantir manutenção de performance com rotina leve de acompanhamento.",
      "Duplicar práticas que geraram resultado para outras metas.",
      "Mapear oportunidade de meta stretch para o próximo ciclo.",
    ],
  };
}

function getRankingTrendIcon(trend: RankingUser["trend"]) {
  if (trend === "up") return <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />;
  if (trend === "down") return <ArrowDownRight className="h-3.5 w-3.5 text-red-600" />;
  return <Minus className="h-3.5 w-3.5 text-zinc-500" />;
}

function scoreGoal(goal: Goal) {
  return Math.min(100, Math.round(getProgress(goal)));
}

function NewGoalDialog({
  onCreated,
}: {
  onCreated: (message: string) => void;
}) {
  const { addGoal } = useGoalStore();

  const [open, setOpen] = useState(false);
  const [goalType, setGoalType] = useState<Goal["type"] | "">("");
  const [target, setTarget] = useState("");
  const [period, setPeriod] = useState<Goal["period"] | "">("");
  const [assignedTo, setAssignedTo] = useState("team-all");

  const canCreate = Boolean(goalType && target && period && Number(target) > 0);

  const resetForm = useCallback(() => {
    setGoalType("");
    setTarget("");
    setPeriod("");
    setAssignedTo("team-all");
  }, []);

  const handleCreate = useCallback(() => {
    if (!goalType || !period || !target) return;

    const now = new Date("2026-02-16T12:00:00.000Z");
    let startDate = "";
    let endDate = "";

    if (period === "monthly") {
      startDate = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-01`;
      endDate = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-28`;
    } else {
      const quarter = Math.floor(now.getUTCMonth() / 3);
      startDate = `${now.getUTCFullYear()}-${String(quarter * 3 + 1).padStart(2, "0")}-01`;
      endDate = `${now.getUTCFullYear()}-${String(quarter * 3 + 3).padStart(2, "0")}-30`;
    }

    addGoal({
      title: `${goalTypeConfig[goalType].label} ${period === "monthly" ? "mensal" : "trimestral"} - Novo ciclo`,
      type: goalType,
      target: Number(target),
      current: 0,
      period,
      startDate,
      endDate,
      userId: assignedTo === "team-all" ? undefined : assignedTo,
      userName:
        assignedTo === "team-all"
          ? undefined
          : assignedTo === "user-1"
            ? "Ana Souza"
            : assignedTo === "user-2"
              ? "Carlos Lima"
              : assignedTo === "user-3"
                ? "Fernanda Reis"
                : assignedTo === "user-4"
                  ? "Pedro Alves"
                  : "Julia Mendes",
    });

    onCreated("Meta criada com sucesso.");
    resetForm();
    setOpen(false);
  }, [addGoal, assignedTo, goalType, onCreated, period, resetForm, target]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) resetForm();
      }}
    >
      <DialogTrigger asChild>
        <Button className="h-9 rounded-full bg-black px-3 text-sm text-white hover:bg-zinc-800">
          <Plus className="h-3.5 w-3.5" />
          Nova meta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] rounded-[18px] border-zinc-200 bg-white sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-semibold text-zinc-900">
            Nova meta
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label className="text-sm text-zinc-700">Tipo da meta</Label>
            <Select value={goalType} onValueChange={(value) => setGoalType(value as Goal["type"])}>
              <SelectTrigger className="rounded-[12px]">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent className="rounded-[12px]">
                {(Object.keys(goalTypeConfig) as Goal["type"][]).map((type) => (
                  <SelectItem key={type} value={type}>
                    <div className="flex items-center gap-2">
                      {goalTypeConfig[type].icon}
                      {goalTypeConfig[type].label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-zinc-700">Valor alvo</Label>
            <Input
              type="number"
              value={target}
              onChange={(event) => setTarget(event.target.value)}
              placeholder="Ex: 100"
              className="rounded-[12px]"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-zinc-700">Período</Label>
            <Select value={period} onValueChange={(value) => setPeriod(value as Goal["period"])}>
              <SelectTrigger className="rounded-[12px]">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent className="rounded-[12px]">
                <SelectItem value="monthly">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    Mensal
                  </div>
                </SelectItem>
                <SelectItem value="quarterly">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    Trimestral
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-zinc-700">Responsável</Label>
            <Select value={assignedTo} onValueChange={setAssignedTo}>
              <SelectTrigger className="rounded-[12px]">
                <SelectValue placeholder="Selecione o responsável" />
              </SelectTrigger>
              <SelectContent className="rounded-[12px]">
                <SelectItem value="team-all">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-zinc-500" />
                    Todo o time
                  </div>
                </SelectItem>
                <SelectItem value="user-1">Ana Souza</SelectItem>
                <SelectItem value="user-2">Carlos Lima</SelectItem>
                <SelectItem value="user-3">Fernanda Reis</SelectItem>
                <SelectItem value="user-4">Pedro Alves</SelectItem>
                <SelectItem value="user-5">Julia Mendes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="flex-1 rounded-full"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!canCreate}
            className="flex-1 rounded-full bg-black text-white hover:bg-zinc-800 disabled:opacity-50"
          >
            Criar meta
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function GoalsPage() {
  const router = useRouter();
  const { goals, addGoal, deleteGoal } = useGoalStore();

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshingPeriod, setIsRefreshingPeriod] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>("yearly");
  const [statusFilter, setStatusFilter] = useState<GoalStatusFilter>("all");
  const [typeFilter, setTypeFilter] = useState<GoalTypeFilter>("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAchievedCollapsed, setIsAchievedCollapsed] = useState(true);
  const [expandedPlans, setExpandedPlans] = useState<Set<string>>(new Set());
  const [cardFeedback, setCardFeedback] = useState<Record<string, FeedbackState>>({});
  const [cardLoadingId, setCardLoadingId] = useState<string | null>(null);
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);
  const [headerHighlight, setHeaderHighlight] = useState(false);
  const [pageFeedback, setPageFeedback] = useState<FeedbackState | null>(null);
  const [runningIntelAction, setRunningIntelAction] = useState<string | null>(null);
  const [intelResult, setIntelResult] = useState<string | null>(null);
  const [rankingError, setRankingError] = useState(false);
  const [kpiError, setKpiError] = useState(false);

  const refreshTimerRef = useRef<number | null>(null);
  const highlightTimerRef = useRef<number | null>(null);
  const autoOpenedRailRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 720);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setSearchQuery(searchInput.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const sync = () => {
      setIsDesktopXL(mediaQuery.matches);
      if (mediaQuery.matches && !autoOpenedRailRef.current) {
        setIsIntelligenceOpen(true);
        autoOpenedRailRef.current = true;
      }
      if (!mediaQuery.matches) {
        setIsIntelligenceOpen(false);
      }
    };

    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!pageFeedback) return;
    const timer = window.setTimeout(() => setPageFeedback(null), 2200);
    return () => window.clearTimeout(timer);
  }, [pageFeedback]);

  useEffect(() => {
    if (!intelResult) return;
    const timer = window.setTimeout(() => setIntelResult(null), 1200);
    return () => window.clearTimeout(timer);
  }, [intelResult]);

  useEffect(() => {
    return () => {
      if (refreshTimerRef.current) window.clearTimeout(refreshTimerRef.current);
      if (highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);
    };
  }, []);

  const periodGoals = useMemo(() => {
    if (selectedPeriod === "yearly") return goals;
    if (selectedPeriod === "monthly") return goals.filter((goal) => goal.period === "monthly");
    return goals.filter((goal) => goal.period === "quarterly");
  }, [goals, selectedPeriod]);

  const counts = useMemo(() => {
    const risk = periodGoals.filter((goal) => getGoalStatus(goal) === "risk").length;
    const achieved = periodGoals.filter((goal) => getGoalStatus(goal) === "achieved").length;
    const pace = periodGoals.filter((goal) => getGoalStatus(goal) === "pace").length;
    return {
      active: periodGoals.length,
      risk,
      achieved,
      pace,
    };
  }, [periodGoals]);

  const scoreMetrics = useMemo(() => {
    const current =
      periodGoals.length > 0
        ? Math.round(
            periodGoals.reduce((sum, goal) => sum + scoreGoal(goal), 0) /
              periodGoals.length
          )
        : 0;
    const previous = Math.max(
      0,
      current - (selectedPeriod === "yearly" ? 3 : selectedPeriod === "quarterly" ? 4 : 6)
    );
    return {
      current,
      previous,
      delta: current - previous,
    };
  }, [periodGoals, selectedPeriod]);

  const filteredGoals = useMemo(() => {
    return periodGoals.filter((goal) => {
      if (typeFilter !== "all" && goal.type !== typeFilter) return false;
      const status = getGoalStatus(goal);
      if (statusFilter !== "all" && status !== statusFilter) return false;
      if (searchQuery) {
        const normalized = searchQuery.toLowerCase();
        if (!goal.title.toLowerCase().includes(normalized)) return false;
      }
      return true;
    });
  }, [periodGoals, typeFilter, statusFilter, searchQuery]);

  const groupedGoals = useMemo(() => {
    const grouped: Record<GoalStatus, Goal[]> = {
      risk: [],
      pace: [],
      achieved: [],
    };

    for (const goal of filteredGoals) {
      grouped[getGoalStatus(goal)].push(goal);
    }

    for (const key of Object.keys(grouped) as GoalStatus[]) {
      grouped[key].sort((a, b) => getProgress(a) - getProgress(b));
    }

    return grouped;
  }, [filteredGoals]);

  const ranking = useMemo(
    () => [...rankingSeed].sort((a, b) => b.score - a.score).slice(0, 5),
    []
  );

  const rankingInsights = useMemo(() => {
    const mostUp = ranking.reduce((best, user) =>
      user.weeklyDelta > best.weeklyDelta ? user : best
    );
    const stuck = ranking.reduce((candidate, user) =>
      Math.abs(user.weeklyDelta) < Math.abs(candidate.weeklyDelta) ? user : candidate
    );
    const topCloser =
      ranking
        .filter((user) => user.role === "Closer")
        .sort((a, b) => b.completedGoals - a.completedGoals)[0] ?? ranking[0];

    return {
      mostUp,
      stuck,
      topCloser,
    };
  }, [ranking]);

  const activeHeaderChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onClear?: () => void }> = [];
    if (statusFilter !== "all") {
      chips.push({
        id: "status",
        label:
          statusFilter === "achieved"
            ? "Batidas"
            : statusFilter === "risk"
              ? "Em risco"
              : "No ritmo",
        onClear: () => setStatusFilter("all"),
      });
    }
    if (typeFilter !== "all") {
      chips.push({
        id: "type",
        label: `Tipo: ${goalTypeConfig[typeFilter].label}`,
        onClear: () => setTypeFilter("all"),
      });
    }
    if (searchQuery) {
      chips.push({
        id: "search",
        label: `Busca: ${searchQuery}`,
        onClear: () => {
          setSearchInput("");
          setSearchQuery("");
        },
      });
    }
    return chips;
  }, [searchQuery, statusFilter, typeFilter]);

  const setGoalFeedback = useCallback((goalId: string, feedback: FeedbackState) => {
    setCardFeedback((prev) => ({ ...prev, [goalId]: feedback }));
    window.setTimeout(() => {
      setCardFeedback((prev) => {
        const next = { ...prev };
        delete next[goalId];
        return next;
      });
    }, 1200);
  }, []);

  const handlePeriodChange = useCallback((period: PeriodFilter) => {
    if (period === selectedPeriod) return;

    setSelectedPeriod(period);
    setIsRefreshingPeriod(true);
    setHeaderHighlight(true);

    if (refreshTimerRef.current) window.clearTimeout(refreshTimerRef.current);
    if (highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);

    refreshTimerRef.current = window.setTimeout(() => {
      setIsRefreshingPeriod(false);
    }, 260);
    highlightTimerRef.current = window.setTimeout(() => {
      setHeaderHighlight(false);
    }, 1200);
  }, [selectedPeriod]);

  const clearAllFilters = useCallback(() => {
    setStatusFilter("all");
    setTypeFilter("all");
    setSearchInput("");
    setSearchQuery("");
  }, []);

  const togglePlan = useCallback((goalId: string) => {
    setExpandedPlans((prev) => {
      const next = new Set(prev);
      if (next.has(goalId)) next.delete(goalId);
      else next.add(goalId);
      return next;
    });
  }, []);

  const runCardAction = useCallback(
    (goalId: string, action: () => void, successMessage: string) => {
      setCardLoadingId(goalId);
      window.setTimeout(() => {
        action();
        setCardLoadingId(null);
        setGoalFeedback(goalId, { type: "success", message: successMessage });
      }, 180);
    },
    [setGoalFeedback]
  );

  const runIntelAction = useCallback(
    (actionId: string, resultMessage: string, callback?: () => void) => {
      setRunningIntelAction(actionId);
      window.setTimeout(() => {
        callback?.();
        setRunningIntelAction(null);
        setIntelResult(resultMessage);
      }, 220);
    },
    []
  );

  if (isLoading) {
    return <GoalsLoadingSkeleton />;
  }

  const hasGoalsInPeriod = periodGoals.length > 0;

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4"
      >
        {pageFeedback ? (
          <InlineFeedback
            type={pageFeedback.type}
            message={pageFeedback.message}
            compact
            onClose={() => setPageFeedback(null)}
          />
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.02, ease: "easeOut" }}
          className="shrink-0"
        >
          <ModuleCommandHeader
            title="Metas"
            description="Performance do time e gamificação"
            actions={
              <div className="flex w-full min-w-0 flex-wrap items-center gap-2 xl:justify-end">
                <div className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50/90 p-1">
                  {(Object.keys(periodLabel) as PeriodFilter[]).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => handlePeriodChange(period)}
                      className={cn(
                        "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                        selectedPeriod === period
                          ? "bg-white text-zinc-900 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-900"
                      )}
                    >
                      {periodLabel[period]}
                    </button>
                  ))}
                </div>

                <NewGoalDialog
                  onCreated={(message) => {
                    setPageFeedback({ type: "success", message });
                  }}
                />

                <Button
                  size="sm"
                  onClick={() => setIsIntelligenceOpen((prev) => !prev)}
                  className="menux-intelligence-btn premium-shine h-9 rounded-full px-3.5 text-sm transition-transform duration-120 ease-out hover:-translate-y-px active:scale-[0.99]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-100" />
                  Menux Intelligence
                </Button>
              </div>
            }
          >
            <div className="flex flex-col gap-2">
              <div
                className={cn(
                  "flex flex-wrap items-center gap-2 transition-colors duration-200",
                  headerHighlight && "rounded-[12px] bg-zinc-100/60 p-1"
                )}
              >
                <button
                  type="button"
                  onClick={() => setStatusFilter("all")}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors duration-120",
                    statusFilter === "all"
                      ? "border-zinc-300 bg-white text-zinc-900"
                      : "border-zinc-200 bg-white/90 text-zinc-600 hover:bg-zinc-50"
                  )}
                >
                  Ativas ({counts.active})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("achieved")}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors duration-120",
                    statusFilter === "achieved"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-emerald-200/80 bg-emerald-50/80 text-emerald-700"
                  )}
                >
                  Batidas ({counts.achieved})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("risk")}
                  className={cn(
                    "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors duration-120",
                    statusFilter === "risk"
                      ? "border-red-300 bg-red-50 text-red-700"
                      : "border-red-200/80 bg-red-50/80 text-red-700"
                  )}
                >
                  Em risco ({counts.risk})
                </button>

                <span className="ml-1 text-xs font-medium text-zinc-500">Tipo:</span>
                {(Object.keys(goalTypeConfig) as Goal["type"][]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setTypeFilter((current) => (current === type ? "all" : type))
                    }
                    className={cn(
                      "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors duration-120",
                      typeFilter === type
                        ? "border-zinc-300 bg-white text-zinc-900"
                        : "border-zinc-200 bg-white/90 text-zinc-600 hover:bg-zinc-50"
                    )}
                  >
                    {goalTypeConfig[type].icon}
                    {goalTypeConfig[type].label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="group relative min-w-[220px] flex-1 max-w-[340px]">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                  <Input
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Buscar meta"
                    className="h-9 rounded-full pl-8 pr-8 text-sm"
                  />
                  {searchInput ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchInput("");
                        setSearchQuery("");
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-opacity hover:text-zinc-700 sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label="Limpar busca"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                </div>

                {activeHeaderChips.length > 0 ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="h-9 rounded-full text-xs text-zinc-500 hover:text-zinc-900"
                  >
                    Limpar filtros
                  </Button>
                ) : null}
              </div>

              {activeHeaderChips.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {activeHeaderChips.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={chip.onClear}
                      className="inline-flex h-7 items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 text-[11px] font-medium text-zinc-600 transition-colors duration-120 hover:bg-zinc-50"
                    >
                      {chip.label}
                      <X className="h-3 w-3 text-zinc-400" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </ModuleCommandHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.05, ease: "easeOut" }}
          className="flex min-h-0 flex-1 gap-4"
        >
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto pr-1">
            {!hasGoalsInPeriod ? (
              <GoalsEmptyState
                onCreateGoal={() => {
                  addGoal({
                    title: "Receita mensal - Novo ciclo",
                    type: "revenue",
                    target: 500000,
                    current: 0,
                    period: "monthly",
                    startDate: "2026-02-01",
                    endDate: "2026-02-28",
                  });
                  setPageFeedback({
                    type: "success",
                    message: "Meta inicial criada para o período.",
                  });
                }}
                onOpenIntelligence={() => setIsIntelligenceOpen(true)}
              />
            ) : isRefreshingPeriod ? (
              <GoalsContentSkeleton />
            ) : (
              <motion.div
                key={`${selectedPeriod}-${statusFilter}-${typeFilter}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="space-y-4 pb-4"
              >
                <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {kpiError ? (
                    <SectionError
                      message="Falha ao carregar indicadores de metas."
                      onRetry={() => setKpiError(false)}
                    />
                  ) : (
                    <>
                      <GoalsKpiCard
                        icon={<Target className="h-5 w-5 text-zinc-700" />}
                        label="Metas ativas"
                        value={`${counts.active}`}
                        subtext="no período selecionado"
                        trend={`${counts.active} metas em acompanhamento`}
                        miniVisual={
                          <div className="mt-1 flex gap-1.5">
                            <span className="h-2 w-8 rounded-full bg-zinc-300/80" />
                            <span className="h-2 w-8 rounded-full bg-zinc-200/80" />
                            <span className="h-2 w-8 rounded-full bg-zinc-400/80" />
                          </div>
                        }
                      />
                      <GoalsKpiCard
                        icon={<Trophy className="h-5 w-5 text-emerald-700" />}
                        label="Metas batidas"
                        value={`${counts.achieved}`}
                        subtext="taxa de sucesso do período"
                        trend={
                          counts.active > 0
                            ? `${Math.round((counts.achieved / counts.active) * 100)}% de sucesso`
                            : "Sem metas no período"
                        }
                        miniVisual={
                          <div className="w-full">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                              <div
                                className="h-full rounded-full bg-emerald-400 transition-[width] duration-200"
                                style={{
                                  width:
                                    counts.active > 0
                                      ? `${Math.round((counts.achieved / counts.active) * 100)}%`
                                      : "0%",
                                }}
                              />
                            </div>
                          </div>
                        }
                      />
                      <GoalsKpiCard
                        icon={<AlertTriangle className="h-5 w-5 text-red-700" />}
                        label="Metas em risco"
                        value={`${counts.risk}`}
                        subtext="atenção imediata"
                        trend={counts.risk > 0 ? "Prioridade de execução" : "Sem alertas críticos"}
                        miniVisual={
                          <Badge
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px]",
                              counts.risk > 0
                                ? "border border-red-200 bg-red-50 text-red-700"
                                : "border border-emerald-200 bg-emerald-50 text-emerald-700"
                            )}
                          >
                            {counts.risk > 0 ? "Atenção" : "Tudo em dia"}
                          </Badge>
                        }
                      />
                      <GoalsKpiCard
                        icon={<Sparkles className="h-5 w-5 text-blue-700" />}
                        label="Score do time"
                        value={`${scoreMetrics.current}`}
                        subtext="média de pontos do time"
                        trend={
                          scoreMetrics.delta >= 0
                            ? `+${scoreMetrics.delta} vs período anterior`
                            : `${scoreMetrics.delta} vs período anterior`
                        }
                        miniVisual={
                          <div className="flex h-8 items-end gap-1">
                            {[0.42, 0.48, 0.44, 0.52, 0.56, 0.63].map((height, index) => (
                              <span
                                key={index}
                                className="w-1.5 rounded bg-blue-300/80"
                                style={{ height: `${height * 100}%` }}
                              />
                            ))}
                          </div>
                        }
                      />
                    </>
                  )}
                </section>

                <section className="space-y-4">
                  <GoalsGroupSection
                    title="Em risco"
                    description="Metas que precisam de ação imediata."
                    goals={groupedGoals.risk}
                    emptyLabel="Nenhuma meta em risco no período."
                    renderGoal={(goal) => (
                      <GoalPerformanceCard
                        key={goal.id}
                        goal={goal}
                        expanded={expandedPlans.has(goal.id)}
                        isRunningAction={cardLoadingId === goal.id}
                        inlineFeedback={cardFeedback[goal.id]}
                        onTogglePlan={() => togglePlan(goal.id)}
                        onEdit={() =>
                          setGoalFeedback(goal.id, {
                            type: "info",
                            message: "Editor de meta em preview.",
                          })
                        }
                        onDuplicate={() =>
                          runCardAction(
                            goal.id,
                            () => {
                              addGoal({
                                ...goal,
                                title: `${goal.title} (cópia)`,
                                current: 0,
                              });
                            },
                            "Meta duplicada"
                          )
                        }
                        onArchive={() =>
                          runCardAction(
                            goal.id,
                            () => deleteGoal(goal.id),
                            "Meta arquivada"
                          )
                        }
                        onViewHistory={() =>
                          setGoalFeedback(goal.id, {
                            type: "info",
                            message: "Histórico do período carregado.",
                          })
                        }
                        onPrimaryAction={() => {
                          const status = getGoalStatus(goal);
                          if (status === "risk") {
                            togglePlan(goal.id);
                            return;
                          }
                          if (status === "pace") {
                            runCardAction(
                              goal.id,
                              () => {},
                              "Plano de ações criado"
                            );
                            return;
                          }
                          setGoalFeedback(goal.id, {
                            type: "info",
                            message: "Meta batida: detalhes exibidos.",
                          });
                        }}
                        onCreateActivities={() =>
                          runCardAction(
                            goal.id,
                            () => {},
                            "Criado"
                          )
                        }
                        onOpenActivities={() =>
                          router.push(
                            `/activities?source=goals&goal=${encodeURIComponent(goal.title)}&status=${getGoalStatus(goal)}`
                          )
                        }
                      />
                    )}
                  />

                  <GoalsGroupSection
                    title="No ritmo"
                    description="Metas com execução saudável, focadas em aceleração."
                    goals={groupedGoals.pace}
                    emptyLabel="Sem metas em ritmo no filtro selecionado."
                    renderGoal={(goal) => (
                      <GoalPerformanceCard
                        key={goal.id}
                        goal={goal}
                        expanded={expandedPlans.has(goal.id)}
                        isRunningAction={cardLoadingId === goal.id}
                        inlineFeedback={cardFeedback[goal.id]}
                        onTogglePlan={() => togglePlan(goal.id)}
                        onEdit={() =>
                          setGoalFeedback(goal.id, {
                            type: "info",
                            message: "Editor de meta em preview.",
                          })
                        }
                        onDuplicate={() =>
                          runCardAction(
                            goal.id,
                            () => {
                              addGoal({
                                ...goal,
                                title: `${goal.title} (cópia)`,
                                current: 0,
                              });
                            },
                            "Meta duplicada"
                          )
                        }
                        onArchive={() =>
                          runCardAction(
                            goal.id,
                            () => deleteGoal(goal.id),
                            "Meta arquivada"
                          )
                        }
                        onViewHistory={() =>
                          setGoalFeedback(goal.id, {
                            type: "info",
                            message: "Histórico do período carregado.",
                          })
                        }
                        onPrimaryAction={() =>
                          runCardAction(goal.id, () => {}, "Plano de ações criado")
                        }
                        onCreateActivities={() =>
                          runCardAction(goal.id, () => {}, "Criado")
                        }
                        onOpenActivities={() =>
                          router.push(
                            `/activities?source=goals&goal=${encodeURIComponent(goal.title)}&status=${getGoalStatus(goal)}`
                          )
                        }
                      />
                    )}
                  />

                  <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-base font-semibold text-zinc-900">
                          Batidas
                        </h3>
                        <p className="text-xs text-zinc-500">
                          Metas concluídas no período. Seção colapsável para manter foco.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-full"
                        onClick={() => setIsAchievedCollapsed((value) => !value)}
                      >
                        {isAchievedCollapsed ? "Expandir" : "Recolher"}
                      </Button>
                    </div>

                    {!isAchievedCollapsed ? (
                      groupedGoals.achieved.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                          {groupedGoals.achieved.map((goal) => (
                            <GoalPerformanceCard
                              key={goal.id}
                              goal={goal}
                              expanded={expandedPlans.has(goal.id)}
                              isRunningAction={cardLoadingId === goal.id}
                              inlineFeedback={cardFeedback[goal.id]}
                              onTogglePlan={() => togglePlan(goal.id)}
                              onEdit={() =>
                                setGoalFeedback(goal.id, {
                                  type: "info",
                                  message: "Editor de meta em preview.",
                                })
                              }
                              onDuplicate={() =>
                                runCardAction(
                                  goal.id,
                                  () => {
                                    addGoal({
                                      ...goal,
                                      title: `${goal.title} (cópia)`,
                                      current: 0,
                                    });
                                  },
                                  "Meta duplicada"
                                )
                              }
                              onArchive={() =>
                                runCardAction(
                                  goal.id,
                                  () => deleteGoal(goal.id),
                                  "Meta arquivada"
                                )
                              }
                              onViewHistory={() =>
                                setGoalFeedback(goal.id, {
                                  type: "info",
                                  message: "Histórico do período carregado.",
                                })
                              }
                              onPrimaryAction={() =>
                                setGoalFeedback(goal.id, {
                                  type: "info",
                                  message: "Meta batida: detalhe exibido.",
                                })
                              }
                              onCreateActivities={() =>
                                runCardAction(goal.id, () => {}, "Criado")
                              }
                              onOpenActivities={() =>
                                router.push(
                                  `/activities?source=goals&goal=${encodeURIComponent(goal.title)}&status=${getGoalStatus(goal)}`
                                )
                              }
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-500">
                          Sem metas batidas no filtro atual.
                        </div>
                      )
                    ) : (
                      <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3 text-xs text-zinc-600">
                        Seção recolhida para reduzir ruído visual.
                      </div>
                    )}
                  </section>
                </section>

                <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-zinc-500" />
                      <h3 className="font-heading text-base font-semibold text-zinc-900">
                        Ranking
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-600">
                      Semana atual
                    </span>
                  </div>

                  {rankingError ? (
                    <SectionError
                      message="Falha ao carregar ranking de performance."
                      onRetry={() => setRankingError(false)}
                    />
                  ) : ranking.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_320px]">
                      <div className="space-y-2 rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-2.5">
                        {ranking.map((user, index) => (
                          <Popover key={user.id}>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className={cn(
                                  "flex w-full items-center justify-between rounded-[12px] border px-3 py-2.5 text-left transition-colors duration-120",
                                  user.isCurrentUser
                                    ? "border-blue-200 bg-blue-50"
                                    : "border-zinc-200 bg-white hover:bg-zinc-50"
                                )}
                              >
                                <div className="flex min-w-0 items-center gap-2.5">
                                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-[11px] font-semibold text-zinc-700">
                                    {index + 1}
                                  </span>
                                  <Avatar size="sm">
                                    <AvatarFallback className="bg-zinc-100 text-zinc-600">
                                      {getInitials(user.name)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-zinc-900">
                                      {user.name}
                                    </p>
                                    <p className="text-xs text-zinc-500">{user.role}</p>
                                  </div>
                                </div>

                                <div className="ml-3 flex items-center gap-3">
                                  <div className="text-right">
                                    <p className="text-sm font-semibold text-zinc-900">
                                      {user.score.toLocaleString("pt-BR")}
                                    </p>
                                    <p className="text-[11px] text-zinc-500">pontos</p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    {getRankingTrendIcon(user.trend)}
                                    {user.isCurrentUser ? (
                                      <Badge className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0 text-[10px] text-blue-700">
                                        Você
                                      </Badge>
                                    ) : null}
                                  </div>
                                </div>
                              </button>
                            </PopoverTrigger>
                            <PopoverContent
                              align="end"
                              className="w-[min(92vw,300px)] rounded-[14px] border-zinc-200 bg-white p-3"
                            >
                              <p className="text-sm font-semibold text-zinc-900">{user.name}</p>
                              <p className="mt-0.5 text-xs text-zinc-500">{user.role}</p>
                              <div className="mt-3 space-y-2 text-xs">
                                <div className="flex items-center justify-between rounded-[10px] border border-zinc-200 bg-zinc-50 px-2.5 py-2">
                                  <span className="text-zinc-600">Metas batidas</span>
                                  <span className="font-semibold text-zinc-900">{user.completedGoals}</span>
                                </div>
                                <div className="flex items-center justify-between rounded-[10px] border border-zinc-200 bg-zinc-50 px-2.5 py-2">
                                  <span className="text-zinc-600">Metas em risco</span>
                                  <span className="font-semibold text-zinc-900">{user.riskGoals}</span>
                                </div>
                                <div className="rounded-[10px] border border-zinc-200 bg-zinc-50 px-2.5 py-2">
                                  <p className="font-medium text-zinc-700">Próximo passo sugerido</p>
                                  <p className="mt-1 text-zinc-600">
                                    {user.riskGoals > 0
                                      ? "Focar em metas de alta alavancagem nas próximas 48h."
                                      : "Replicar rotina da semana atual no próximo ciclo."}
                                  </p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ))}
                      </div>

                      <div className="space-y-2 rounded-[14px] border border-zinc-200 bg-zinc-50/80 p-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                          Insights da semana
                        </h4>
                        <div className="rounded-[12px] border border-zinc-200 bg-white p-2.5">
                          <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                            Quem mais subiu
                          </p>
                          <p className="mt-1 text-sm font-semibold text-zinc-900">
                            {rankingInsights.mostUp.name}
                          </p>
                        </div>
                        <div className="rounded-[12px] border border-zinc-200 bg-white p-2.5">
                          <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                            Quem está travado
                          </p>
                          <p className="mt-1 text-sm font-semibold text-zinc-900">
                            {rankingInsights.stuck.name}
                          </p>
                        </div>
                        <div className="rounded-[12px] border border-zinc-200 bg-white p-2.5">
                          <p className="text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                            Top closer
                          </p>
                          <p className="mt-1 text-sm font-semibold text-zinc-900">
                            {rankingInsights.topCloser.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-500">
                      Ranking será exibido quando houver pontuação registrada.
                    </div>
                  )}
                </section>
              </motion.div>
            )}
          </div>

          <aside
            className={cn(
              "hidden xl:block shrink-0 transition-[width,opacity] duration-[220ms] ease-out",
              isIntelligenceOpen
                ? "w-[360px] opacity-100"
                : "pointer-events-none w-0 opacity-0"
            )}
          >
            <GoalsIntelligenceRail
              activeCount={counts.active}
              riskCount={counts.risk}
              paceCount={counts.pace}
              achievedCount={counts.achieved}
              runningAction={runningIntelAction}
              result={intelResult}
              onClose={() => setIsIntelligenceOpen(false)}
              onRunAction={runIntelAction}
              onFilterRisk={() => setStatusFilter("risk")}
              onFilterOpportunities={() => setTypeFilter("opportunities")}
              onFilterConversion={() => setTypeFilter("conversion")}
              onFilterActivities={() => setTypeFilter("activities")}
              onOpenActivities={() => router.push("/activities?source=goals&focus=metas")}
              onGenerateSummary={() =>
                setPageFeedback({
                  type: "success",
                  message: "Resumo de coaching gerado.",
                })
              }
            />
          </aside>
        </motion.div>

        {!isDesktopXL ? (
          <>
            <div
              onClick={() => setIsIntelligenceOpen(false)}
              className={cn(
                "fixed inset-0 z-40 bg-black/25 transition-opacity duration-200 xl:hidden",
                isIntelligenceOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            />
            <aside
              className={cn(
                "fixed right-0 top-0 z-50 h-full w-[min(92vw,360px)] p-2 transition-transform duration-[220ms] ease-out xl:hidden",
                isIntelligenceOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <GoalsIntelligenceRail
                activeCount={counts.active}
                riskCount={counts.risk}
                paceCount={counts.pace}
                achievedCount={counts.achieved}
                runningAction={runningIntelAction}
                result={intelResult}
                onClose={() => setIsIntelligenceOpen(false)}
                onRunAction={runIntelAction}
                onFilterRisk={() => {
                  setStatusFilter("risk");
                  setIsIntelligenceOpen(false);
                }}
                onFilterOpportunities={() => {
                  setTypeFilter("opportunities");
                  setIsIntelligenceOpen(false);
                }}
                onFilterConversion={() => {
                  setTypeFilter("conversion");
                  setIsIntelligenceOpen(false);
                }}
                onFilterActivities={() => {
                  setTypeFilter("activities");
                  setIsIntelligenceOpen(false);
                }}
                onOpenActivities={() => {
                  setIsIntelligenceOpen(false);
                  router.push("/activities?source=goals&focus=metas");
                }}
                onGenerateSummary={() => {
                  setPageFeedback({
                    type: "success",
                    message: "Resumo de coaching gerado.",
                  });
                  setIsIntelligenceOpen(false);
                }}
              />
            </aside>
          </>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}

function GoalsKpiCard({
  icon,
  label,
  value,
  subtext,
  trend,
  miniVisual,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  subtext: string;
  trend: string;
  miniVisual: ReactNode;
}) {
  return (
    <article className="premium-lift h-[154px] rounded-[18px] border border-zinc-200/80 bg-white p-3.5 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.5)]">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 text-zinc-600">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-zinc-100">
            {icon}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.08em]">{label}</span>
        </div>
        <div className="mt-3">
          <p className="font-heading text-[30px] font-semibold leading-none text-zinc-900">
            {value}
          </p>
          <p className="mt-1 truncate text-xs text-zinc-500">{subtext}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-2">
          <span className="truncate rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600">
            {trend}
          </span>
          <div className="min-w-[72px]">{miniVisual}</div>
        </div>
      </div>
    </article>
  );
}

function GoalsGroupSection({
  title,
  description,
  goals,
  emptyLabel,
  renderGoal,
}: {
  title: string;
  description: string;
  goals: Goal[];
  emptyLabel: string;
  renderGoal: (goal: Goal) => ReactNode;
}) {
  return (
    <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
      <div className="mb-3">
        <h3 className="font-heading text-base font-semibold text-zinc-900">{title}</h3>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      {goals.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal) => (
            <Fragment key={goal.id}>{renderGoal(goal)}</Fragment>
          ))}
        </div>
      ) : (
        <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-500">
          {emptyLabel}
        </div>
      )}
    </section>
  );
}

function GoalPerformanceCard({
  goal,
  expanded,
  isRunningAction,
  inlineFeedback,
  onTogglePlan,
  onPrimaryAction,
  onEdit,
  onDuplicate,
  onArchive,
  onViewHistory,
  onCreateActivities,
  onOpenActivities,
}: {
  goal: Goal;
  expanded: boolean;
  isRunningAction: boolean;
  inlineFeedback?: FeedbackState;
  onTogglePlan: () => void;
  onPrimaryAction: () => void;
  onEdit: () => void;
  onDuplicate: () => void;
  onArchive: () => void;
  onViewHistory: () => void;
  onCreateActivities: () => void;
  onOpenActivities: () => void;
}) {
  const status = getGoalStatus(goal);
  const statusCfg = goalStatusConfig[status];
  const typeCfg = goalTypeConfig[goal.type];
  const rawProgress = getProgress(goal);
  const progress = Math.min(100, Math.max(0, Math.round(rawProgress)));
  const plan = getPlanSummary(goal, status);

  return (
    <article className="premium-lift overflow-hidden rounded-[16px] border border-zinc-200/85 bg-white shadow-[0_12px_22px_-18px_rgba(15,23,42,0.48)]">
      <div className="p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              <Badge className={cn("rounded-full border px-2 py-0 text-[10px]", typeCfg.chipClass)}>
                {goalTypeConfig[goal.type].label}
              </Badge>
              <Badge className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0 text-[10px] text-zinc-600">
                {goalPeriodLabel[goal.period]}
              </Badge>
            </div>
            <h4 className="truncate text-sm font-semibold text-zinc-900">{goal.title}</h4>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-zinc-500"
                aria-label="Ações da meta"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-[14px]">
              <DropdownMenuItem onClick={onEdit}>
                <Target className="mr-2 h-4 w-4" />
                Editar meta
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onDuplicate}>
                <Copy className="mr-2 h-4 w-4" />
                Duplicar meta
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onViewHistory}>
                <Clock3 className="mr-2 h-4 w-4" />
                Ver histórico
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onArchive} className="text-red-700">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Arquivar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-3">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-[30px] font-semibold leading-none text-zinc-900">
              {goalTypeConfig[goal.type].formatter(goal.current)}
            </span>
            <span className="text-sm text-zinc-500">
              / {goalTypeConfig[goal.type].formatter(goal.target)}
            </span>
          </div>
          <p className={cn("mt-1 text-sm font-semibold", statusCfg.textClass)}>{progress}%</p>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className={cn("h-full rounded-full", statusCfg.progressClass)}
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <Badge className={cn("rounded-full border px-2 py-0.5 text-[11px]", statusCfg.badgeClass)}>
            {statusCfg.label}
          </Badge>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs"
              onClick={onPrimaryAction}
              disabled={isRunningAction}
            >
              {statusCfg.ctaLabel}
            </Button>
            <Button
              size="sm"
              className="menux-intelligence-btn-soft h-8 rounded-full px-3 text-xs text-slate-100"
              onClick={onTogglePlan}
            >
              <Bot className="h-3.5 w-3.5" />
              Plano
            </Button>
          </div>
        </div>
      </div>

      {expanded ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="border-t border-zinc-200 bg-zinc-50/70 px-3.5 py-3"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
            Plano da Menux Intelligence
          </p>
          <p className="mt-1 text-xs text-zinc-600">{plan.why}</p>

          <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
            {plan.actions.map((action, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-3.5 w-3.5 text-zinc-500" />
                <span>{action}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              className="h-7 rounded-full bg-zinc-900 px-3 text-[11px] text-white hover:bg-zinc-800"
              onClick={onCreateActivities}
              disabled={isRunningAction}
            >
              {isRunningAction ? (
                <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-white border-t-transparent" />
              ) : null}
              Criar ações
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-7 rounded-full px-3 text-[11px]"
              onClick={onOpenActivities}
            >
              Ir para atividades
            </Button>
          </div>
        </motion.div>
      ) : null}

      {inlineFeedback ? (
        <div className="border-t border-zinc-200 bg-white px-3.5 py-2">
          <span
            className={cn(
              "inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
              inlineFeedback.type === "success" && "bg-emerald-100 text-emerald-700",
              inlineFeedback.type === "error" && "bg-red-100 text-red-700",
              inlineFeedback.type === "info" && "bg-blue-100 text-blue-700"
            )}
          >
            {inlineFeedback.message}
          </span>
        </div>
      ) : null}
    </article>
  );
}

function GoalsIntelligenceRail({
  activeCount,
  riskCount,
  paceCount,
  achievedCount,
  runningAction,
  result,
  onRunAction,
  onClose,
  onFilterRisk,
  onFilterOpportunities,
  onFilterConversion,
  onFilterActivities,
  onOpenActivities,
  onGenerateSummary,
}: {
  activeCount: number;
  riskCount: number;
  paceCount: number;
  achievedCount: number;
  runningAction: string | null;
  result: string | null;
  onRunAction: (actionId: string, resultMessage: string, callback?: () => void) => void;
  onClose?: () => void;
  onFilterRisk: () => void;
  onFilterOpportunities: () => void;
  onFilterConversion: () => void;
  onFilterActivities: () => void;
  onOpenActivities: () => void;
  onGenerateSummary: () => void;
}) {
  return (
    <div className="menux-intelligence-theme flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-slate-700/70 bg-[linear-gradient(145deg,#020817_0%,#03132b_56%,#0a2340_100%)] text-slate-100 shadow-[0_34px_52px_-36px_rgba(15,23,42,0.92)]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold">Menux Intelligence</h3>
            <p className="mt-0.5 text-xs text-cyan-100/80">Coach de performance do time</p>
          </div>
          {onClose ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
              onClick={onClose}
              aria-label="Fechar Menux Intelligence"
            >
              <X className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <Button
          className="mt-3 h-8 w-full rounded-full border border-white/15 bg-white/10 text-xs text-slate-100 hover:bg-white/15"
          onClick={() =>
            onRunAction("weekly-plan", "Plano semanal gerado.", onFilterRisk)
          }
          disabled={runningAction === "weekly-plan"}
        >
          {runningAction === "weekly-plan" ? (
            <span className="mr-2 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
          ) : (
            <Bot className="mr-1.5 h-3.5 w-3.5" />
          )}
          Gerar plano semanal
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Diagnóstico do período
          </p>
          <div className="mt-2 space-y-2 text-xs text-slate-200">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Metas ativas</p>
              <p className="mt-1 font-medium text-slate-50">{activeCount}</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Metas em risco</p>
              <p className="mt-1 font-medium text-slate-50">{riskCount}</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Alavanca mais rápida</p>
              <p className="mt-1 font-medium text-slate-50">
                {paceCount > riskCount ? "Manter cadência de execução" : "Recuperar metas críticas"}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Recomendações por perfil
          </p>
          <div className="mt-2 space-y-2">
            <IntelligenceRecommendation
              label="SDR: foco em oportunidades criadas"
              actionLabel="Aplicar filtro"
              loading={runningAction === "sdr"}
              onClick={() =>
                onRunAction("sdr", "Filtro aplicado: oportunidades.", onFilterOpportunities)
              }
            />
            <IntelligenceRecommendation
              label="Closer: foco em conversão e fechamento"
              actionLabel="Aplicar filtro"
              loading={runningAction === "closer"}
              onClick={() =>
                onRunAction("closer", "Filtro aplicado: conversão.", onFilterConversion)
              }
            />
            <IntelligenceRecommendation
              label="CS: foco em atividades e saúde da carteira"
              actionLabel="Aplicar filtro"
              loading={runningAction === "cs"}
              onClick={() =>
                onRunAction("cs", "Filtro aplicado: atividades.", onFilterActivities)
              }
            />
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Comandos rápidos
          </p>
          <div className="mt-2 space-y-2">
            <IntelligenceCommand
              label="Gerar plano para metas em risco"
              loading={runningAction === "risk-plan"}
              onClick={() =>
                onRunAction("risk-plan", "Plano para metas em risco gerado.", onFilterRisk)
              }
            />
            <IntelligenceCommand
              label="Sugerir atividades diárias"
              loading={runningAction === "daily-actions"}
              onClick={() =>
                onRunAction("daily-actions", "Sugestões de atividades geradas.", onOpenActivities)
              }
            />
            <IntelligenceCommand
              label="Exportar resumo de performance"
              loading={runningAction === "export-summary"}
              onClick={() =>
                onRunAction("export-summary", "Resumo exportado.", onGenerateSummary)
              }
            />
            <IntelligenceCommand
              label="Gerar discurso de motivação para o time"
              loading={runningAction === "speech"}
              onClick={() =>
                onRunAction("speech", "Discurso de motivação gerado.")
              }
            />
          </div>
        </section>

        <div className="rounded-[12px] border border-white/10 bg-white/5 p-3 text-xs text-slate-200">
          <p className="font-medium text-slate-50">Resumo rápido</p>
          <p className="mt-1">Batidas: {achievedCount} · Em risco: {riskCount} · No ritmo: {paceCount}</p>
        </div>

        {result ? (
          <div className="rounded-[12px] border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
            {result}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function IntelligenceRecommendation({
  label,
  actionLabel,
  onClick,
  loading,
}: {
  label: string;
  actionLabel: string;
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
      <p className="text-xs text-slate-200">{label}</p>
      <Button
        size="sm"
        variant="outline"
        className="mt-2 h-7 rounded-full border-white/20 bg-white/5 px-2.5 text-[11px] text-slate-100 hover:bg-white/10"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
        ) : null}
        {actionLabel}
      </Button>
    </div>
  );
}

function IntelligenceCommand({
  label,
  onClick,
  loading,
}: {
  label: string;
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex w-full items-center justify-between rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-100 transition-colors duration-120 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span>{label}</span>
      {loading ? (
        <span className="h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
      ) : (
        <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
      )}
    </button>
  );
}

function GoalsEmptyState({
  onCreateGoal,
  onOpenIntelligence,
}: {
  onCreateGoal: () => void;
  onOpenIntelligence: () => void;
}) {
  return (
    <div className="premium-panel flex min-h-[420px] flex-col items-center justify-center rounded-[22px] p-8 text-center">
      <p className="font-heading text-2xl font-semibold text-zinc-900">
        Sem metas para este período
      </p>
      <p className="mt-2 max-w-[460px] text-sm text-zinc-500">
        Crie uma meta para iniciar o acompanhamento de performance ou peça um plano da Menux Intelligence.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Button className="rounded-full bg-black text-white hover:bg-zinc-800" onClick={onCreateGoal}>
          Nova meta
        </Button>
        <Button variant="outline" className="rounded-full" onClick={onOpenIntelligence}>
          Abrir Menux Intelligence
        </Button>
      </div>
    </div>
  );
}

function SectionError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-[14px] border border-red-200 bg-red-50/85 p-3 text-sm text-red-700">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span>{message}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 rounded-full border-red-200 bg-white text-red-700 hover:bg-red-50"
          onClick={onRetry}
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}

function GoalsLoadingSkeleton() {
  return (
    <div className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4">
      <div className="shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-64" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Skeleton className="h-9 w-48 rounded-full" />
          <Skeleton className="h-9 w-36 rounded-full" />
          <Skeleton className="h-9 w-44 rounded-full" />
        </div>
      </div>
      <GoalsContentSkeleton />
    </div>
  );
}

function GoalsContentSkeleton() {
  return (
    <div className="flex min-h-0 flex-1 gap-4">
      <div className="min-h-0 min-w-0 flex-1 space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-[154px] rounded-[18px]" />
          ))}
        </div>
        <Skeleton className="h-[280px] rounded-[20px]" />
        <Skeleton className="h-[280px] rounded-[20px]" />
        <Skeleton className="h-[280px] rounded-[20px]" />
        <Skeleton className="h-[320px] rounded-[20px]" />
      </div>
      <div className="hidden w-[360px] xl:block">
        <Skeleton className="h-full rounded-[20px]" />
      </div>
    </div>
  );
}
