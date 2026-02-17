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
  ArrowRight,
  Bot,
  Check,
  DollarSign,
  Sparkles,
  Target,
  Trophy,
  TrendingUp,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Goal } from "@/types";
import { cn } from "@/lib/cn";
import { useGoalStore } from "@/stores/goal-store";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { GeneratedContentModal } from "../activities/components/generated-content-modal";
import { useUIStore } from "@/stores/ui-store";
import { useAuthStore } from "@/stores/auth-store";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";

type PeriodFilter = "weekly" | "monthly" | "quarterly" | "yearly";
type GoalStatus = "risk" | "pace" | "achieved";
type GoalStatusFilter = "all" | GoalStatus;
type GoalTypeFilter = "all" | Goal["type"];

interface FeedbackState {
  type: "success" | "error" | "info";
  message: string;
}

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
  weekly: "Semana",
  monthly: "Mês",
  quarterly: "Trimestre",
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
        "Antecipar bloqueios operacionais no próprio funil.",
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

function scoreGoal(goal: Goal) {
  return Math.min(100, Math.round(getProgress(goal)));
}


export default function GoalsPage() {
  const router = useRouter();
  const { goals } = useGoalStore();
  const { user } = useAuthStore();
  const { openDrawer } = useUIStore();

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshingPeriod, setIsRefreshingPeriod] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>("yearly");
  const [statusFilter, setStatusFilter] = useState<GoalStatusFilter>("all");
  const [typeFilter, setTypeFilter] = useState<GoalTypeFilter>("all");
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
  const [kpiError, setKpiError] = useState(false);

  const refreshTimerRef = useRef<number | null>(null);
  const highlightTimerRef = useRef<number | null>(null);
  const autoOpenedRailRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 720);
    return () => window.clearTimeout(timer);
  }, []);

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

  const scopedOwnerId = useMemo(() => {
    const preferredId = user?.id;
    if (preferredId && goals.some((goal) => goal.userId === preferredId)) {
      return preferredId;
    }
    return goals.find((goal) => goal.userId)?.userId ?? preferredId ?? "user-5";
  }, [goals, user?.id]);

  const personalGoals = useMemo(
    () =>
      goals.filter(
        (goal) => !goal.userId || goal.userId === scopedOwnerId
      ),
    [goals, scopedOwnerId]
  );

  const periodGoals = useMemo(() => {
    if (selectedPeriod === "yearly") return personalGoals;
    if (selectedPeriod === "monthly") {
      return personalGoals.filter((goal) => goal.period === "monthly");
    }
    return personalGoals.filter((goal) => goal.period === "quarterly");
  }, [personalGoals, selectedPeriod]);

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

  // Modal State
  const [generatedModalOpen, setGeneratedModalOpen] = useState(false);
  const [generatedContent, setGeneratedContent] = useState({ title: "", content: "" });

  const filteredGoals = useMemo(() => {
    return periodGoals.filter((goal) => {
      if (typeFilter !== "all" && goal.type !== typeFilter) return false;
      const status = getGoalStatus(goal);
      if (statusFilter !== "all" && status !== statusFilter) return false;
      return true;
    });
  }, [periodGoals, typeFilter, statusFilter]);

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

  const activeHeaderChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onClear?: () => void }> = [];
    if (typeFilter !== "all") {
      chips.push({
        id: "type",
        label: `Tipo: ${goalTypeConfig[typeFilter].label}`,
        onClear: () => setTypeFilter("all"),
      });
    }
    return chips;
  }, [typeFilter]);

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

        // Define content based on actionId
        let title = "Conteúdo Gerado";
        let content = resultMessage;

        if (actionId === "weekly-plan") {
          title = "Plano Semanal de Metas";
          content = `### Plano Semanal Focado em Resultados
1. **Segunda-feira**: Revisão de Pipeline - Identificar oportunidades estagnadas há +5 dias.
2. **Terça-feira**: Prospecção Ativa - Focar em perfis semelhantes aos clientes fechados no último mês.
3. **Quarta-feira**: Follow-up de Propostas - Contatar todos os leads em fase de negociação.
4. **Quinta-feira**: Recuperação de Clientes - Reativar contatos frios da base.
5. **Sexta-feira**: Fechamento e Relatório - Garantir assinaturas pendentes e preparar próxima semana.

*Dica: Utilize o filtro de "Em Risco" para priorizar ações.*
`;
        } else if (actionId === "risk-plan") {
          title = "Plano de Recuperação de Risco";
          content = `### Estratégia de Recuperação Acelerada
**Diagnóstico**: Metas marcadas como "Em Risco" indicam desvio significativo da projeção ideal.

**Ações Imediatas:**
1. **Auditoria de Oportunidades**: Verifique se os valores e datas de fechamento no CRM estão realistas.
2. **Campanha Relâmpago**: Ofereça uma condição especial (ex: consultoria extra) para fechamentos até sexta-feira.
3. **Aumento de Volume**: Dobre a meta de ligações/mensagens diárias pelos próximos 3 dias.

**Mensagem Sugerida para Clientes:**
"Olá [Nome], identifiquei uma oportunidade de acelerar seu projeto. Tenho uma condição exclusiva válida apenas esta semana..."
`;
        } else if (actionId === "daily-actions") {
          title = "Sugestões de Atividades Diárias";
          content = `### Foco do Dia: Alta Performance
- [ ] Enviar 10 mensagens de introdução para novos leads.
- [ ] Realizar 5 ligações de qualificação.
- [ ] Fazer follow-up em 3 propostas enviadas na semana passada.
- [ ] Postar conteúdo relevante no LinkedIn para atrair inbound.
- [ ] Revisar tarefas atrasadas no CRM.
`;
        } else if (actionId === "speech") {
          title = "Mensagem de Foco Pessoal";
          content = `### Foco para os próximos dias
"Estou em uma fase decisiva do meu ciclo comercial. Meu objetivo agora é manter disciplina diária, atacar metas em risco primeiro e proteger o que já foi conquistado.
Hoje vou priorizar as ações com maior impacto de conversão e encerrar o dia com o funil limpo, sem pendências críticas."
`;
        } else if (actionId === "export-summary") {
          title = "Resumo de Performance Exportado";
          content = `### Resumo de Performance - ${new Date().toLocaleDateString()}
**Status Geral:**
- Metas Ativas: ${counts.active}
- Metas Batidas: ${counts.achieved}
- Metas em Risco: ${counts.risk}

*Este resumo está pronto para ser copiado e enviado por e-mail ou Slack.*
`;
        }

        setGeneratedContent({ title, content });
        setGeneratedModalOpen(true);
        // setIntelResult(resultMessage); // Optional: keep small feedback or remove
      }, 700);
    },
    [counts]
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
            title="Minhas metas"
            description="Performance pessoal e gamificação"
            meta={`Período: ${periodLabel[selectedPeriod]}`}
            chips={[
              {
                id: "goals-active",
                label: `Ativas (${counts.active})`,
                tone: statusFilter === "all" ? "info" : "neutral",
                onClick: () => setStatusFilter("all"),
              },
              {
                id: "goals-achieved",
                label: `Batidas (${counts.achieved})`,
                tone: statusFilter === "achieved" ? "success" : "neutral",
                onClick: () =>
                  setStatusFilter((current) => (current === "achieved" ? "all" : "achieved")),
              },
              {
                id: "goals-risk",
                label: `Em risco (${counts.risk})`,
                tone: statusFilter === "risk" ? "danger" : "neutral",
                onClick: () =>
                  setStatusFilter((current) => (current === "risk" ? "all" : "risk")),
              },
            ]}
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
                <span className="text-xs font-medium text-zinc-500">Tipo:</span>
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
          className="flex-1"
        >
          <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            {/* Left Column: Goals Execution */}
            <div className="min-h-0 min-w-0 overflow-y-auto pb-8">
              {!hasGoalsInPeriod ? (
                <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-zinc-200 bg-zinc-50/50 py-20 text-center">
                  <div className="mb-4 rounded-full bg-white p-4 shadow-sm ring-1 ring-zinc-100">
                    <Target className="h-8 w-8 text-zinc-300" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-zinc-900">
                    Nenhuma meta atribuída
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-500">
                    Você não possui metas definidas para este período. Entre em contato com seu
                    gestor para alinhar seus objetivos.
                  </p>
                </div>
              ) : isRefreshingPeriod ? (
                <GoalsContentSkeleton />
              ) : (
                <motion.div
                  key={`${selectedPeriod}-${statusFilter}-${typeFilter}`}
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
                          label="Score pessoal"
                          value={`${scoreMetrics.current}`}
                          subtext="média da minha execução"
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
                          onPrimaryAction={() => {
                            const status = getGoalStatus(goal);
                            if (status === "risk") {
                              togglePlan(goal.id);
                              return;
                            }
                            if (status === "pace") {
                              runCardAction(
                                goal.id,
                                () => { },
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
                            openDrawer("new-activity", {
                              initialNote: `Ação para recuperar meta em risco: ${goal.title}`,
                            })
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
                          onPrimaryAction={() =>
                            openDrawer("new-activity", {
                              initialNote: `Ação para acelerar meta: ${goal.title}`,
                            })
                          }
                          onCreateActivities={() =>
                            openDrawer("new-activity", {
                              initialNote: `Nova atividade para meta: ${goal.title}`,
                            })
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
                                onPrimaryAction={() => {
                                  setGeneratedContent({
                                    title: "Meta Batida! 🚀",
                                    content: `### Parabéns pela Conquista!
A meta **${goal.title}** foi superada com sucesso.

**Destaques:**
- Execução consistente durante todo o período.
- Superação do alvo em **${Math.round(getProgress(goal) - 100)}%**.

*Continue assim no próximo ciclo!*`,
                                  });
                                  setGeneratedModalOpen(true);
                                }}
                                onCreateActivities={() =>
                                  openDrawer("new-activity", {
                                    initialNote: `Manter ritmo da meta batida: ${goal.title}`,
                                  })
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

                </motion.div>
              )}
            </div>

            <div className="hidden h-full min-w-0 lg:block">
              <GoalsIntelligenceRail
                activeCount={counts.active}
                riskCount={counts.risk}
                paceCount={counts.pace}
                achievedCount={counts.achieved}
                runningAction={runningIntelAction}
                result={intelResult}
                onClose={() => { }}
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
            </div>
          </div>
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

      <GeneratedContentModal
        open={generatedModalOpen}
        onOpenChange={setGeneratedModalOpen}
        title={generatedContent.title}
        content={generatedContent.content}
      />
    </TooltipProvider >
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
  onCreateActivities,
  onOpenActivities,
}: {
  goal: Goal;
  expanded: boolean;
  isRunningAction: boolean;
  inlineFeedback?: FeedbackState;
  onTogglePlan: () => void;
  onPrimaryAction: () => void;
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
              className={cn(
                "h-8 rounded-full px-4 text-xs font-medium shadow-sm transition-transform active:scale-95",
                status === "risk"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              )}
              onClick={onPrimaryAction}
              disabled={isRunningAction}
            >
              {statusCfg.ctaLabel}
              <ArrowRight className="ml-1.5 h-3 w-3" />
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
            <p className="mt-0.5 text-xs text-cyan-100/80">Coach de performance pessoal</p>
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
              label="Gerar mensagem de foco do dia"
              loading={runningAction === "speech"}
              onClick={() =>
                onRunAction("speech", "Mensagem de foco gerada.")
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
