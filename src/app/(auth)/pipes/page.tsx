"use client";

import {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
  Suspense,
} from "react";
import {
  Search,
  Filter,
  X,
  Palette,
  Check,
  CheckCircle2,
  AlertTriangle,
  CircleDollarSign,
  Columns3,
  ChevronDown,
  Settings2,
  Plus,
  Sparkles,
  Flame,
  TimerReset,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUIStore } from "@/stores/ui-store";
import { useAuthStore } from "@/stores/auth-store";
import {
  calculateTemperature,
  formatCurrencyBRL,
} from "@/lib/business-rules";
import { generateDynamicMockData } from "@/lib/mock-data";
import { screenContainer, sectionEnter, listItemReveal } from "@/lib/motion";
import { cn } from "@/lib/cn";
import {
  funnels,
  stageColorPalette,
  temperatureConfig,
} from "./lib/pipeline-config";
import type { PipelineStage, Opportunity, Temperature } from "@/types";
import { getSlaStatus, validateStageTransition } from "./lib/pipeline-validation";
import { usePipelineBoard } from "./hooks/use-pipeline-board";
import { useStageCustomization } from "./hooks/use-stage-customization";
import { DealCardBento } from "./components/deal-card-bento";
import { PipelineSkeleton } from "./components/pipeline-skeleton";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";

const FILTERS_APPLIED_EVENT = "flow:filters-applied";
const STALE_ACTIVITY_DAYS = 5;
type GlobalPipesFilters = {
  responsible: string[];
  stage: string[];
  temperature: string[];
  tags: string[];
  dateStart: string;
  dateEnd: string;
  valueMin: string;
  valueMax: string;
  overdue: boolean;
  stale: boolean;
};

const WIP_LIMIT_BY_STAGE: Record<PipelineStage, number> = {
  "lead-in": 9,
  "contato-feito": 8,
  "reuniao-agendada": 7,
  "proposta-enviada": 7,
  negociacao: 6,
  fechamento: 5,
};

function isStaleOpportunity(opportunity: Opportunity): boolean {
  const updatedAt = new Date(opportunity.updatedAt).getTime();
  const staleThreshold = Date.now() - STALE_ACTIVITY_DAYS * 24 * 60 * 60 * 1000;
  return updatedAt < staleThreshold;
}

function getStageParamLabel(stage: PipelineStage) {
  return stage.replace(/-/g, " ");
}

function PipesPageContent() {
  const { openDrawer, openModal } = useUIStore();
  const { user, permissions } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const canCreateOpportunity = permissions?.canCreateOpportunity ?? true;
  const canMoveCards = permissions?.canEditOpportunity ?? true;
  const canConfigureStages = permissions?.canManageSettings ?? false;

  const currentUserId = user?.id ?? "demo-user";
  const currentUserName = user?.name ?? "Usuario Demo";

  const [selectedFunnel, setSelectedFunnel] = useState("comercial");
  const [localOpportunities, setLocalOpportunities] = useState<Opportunity[]>(
    () => generateDynamicMockData(currentUserId, currentUserName)
  );
  const opportunities = localOpportunities;

  useEffect(() => {
    const opportunityId = searchParams.get("opportunityId");
    if (!opportunityId) return;

    openModal("lead-card", { id: opportunityId });

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("opportunityId");
    const serialized = nextParams.toString();
    router.replace(serialized ? `/pipes?${serialized}` : "/pipes", {
      scroll: false,
    });
  }, [openModal, router, searchParams]);

  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);
  const [recentFiltersCount, setRecentFiltersCount] = useState<number | null>(null);
  const [globalPipesFilters, setGlobalPipesFilters] = useState<GlobalPipesFilters | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const activeFunnel = funnels.find((funnel) => funnel.id === selectedFunnel) ?? funnels[0];

  const activeStageIds = useMemo(
    () => activeFunnel.stages.map((stage) => stage.id),
    [activeFunnel]
  );

  const stageFilter = useMemo(() => {
    const raw = searchParams.get("stage");
    if (!raw) return null;
    const candidate = raw as PipelineStage;
    return activeStageIds.includes(candidate) ? candidate : null;
  }, [searchParams, activeStageIds]);

  const visibleStages = useMemo(
    () =>
      stageFilter
        ? activeFunnel.stages.filter((stage) => stage.id === stageFilter)
        : activeFunnel.stages,
    [activeFunnel, stageFilter]
  );

  const effectiveStageIds = useMemo(
    () => (stageFilter ? [stageFilter] : activeStageIds),
    [stageFilter, activeStageIds]
  );

  const announce = useCallback((message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFiltersApplied = (event: Event) => {
      const customEvent = event as CustomEvent<{
        context?: string;
        count?: number;
        filters?: GlobalPipesFilters;
      }>;
      if (customEvent.detail?.context !== "pipes") return;

      const count = Number(customEvent.detail?.count ?? 0);
      const safeCount = Number.isFinite(count) && count >= 0 ? count : 0;
      setAppliedFiltersCount(safeCount);
      setRecentFiltersCount(safeCount);

      if (customEvent.detail?.filters) {
        setGlobalPipesFilters(customEvent.detail.filters);
      }
    };

    window.addEventListener(FILTERS_APPLIED_EVENT, handleFiltersApplied as EventListener);
    return () =>
      window.removeEventListener(
        FILTERS_APPLIED_EVENT,
        handleFiltersApplied as EventListener
      );
  }, []);

  useEffect(() => {
    if (recentFiltersCount === null) return;
    const timer = window.setTimeout(() => setRecentFiltersCount(null), 1200);
    return () => window.clearTimeout(timer);
  }, [recentFiltersCount]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchQuery(searchInputValue);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [searchInputValue]);

  const normalizedSearch = useMemo(
    () => searchQuery.toLowerCase().trim(),
    [searchQuery]
  );

  const activeCards = useMemo(
    () => opportunities.filter((opportunity) => effectiveStageIds.includes(opportunity.stage)),
    [effectiveStageIds, opportunities]
  );

  const averageDealValue = useMemo(() => {
    if (activeCards.length === 0) return 10000;
    return activeCards.reduce((acc, opportunity) => acc + opportunity.value, 0) / activeCards.length;
  }, [activeCards]);

  const resolveTemperature = useCallback(
    (opportunity: Opportunity) => calculateTemperature(opportunity, averageDealValue),
    [averageDealValue]
  );

  const getTemp = useCallback(
    (opportunity: Opportunity) => temperatureConfig[resolveTemperature(opportunity)],
    [resolveTemperature]
  );

  const opportunitiesByStage = useMemo(() => {
    const grouped: Record<PipelineStage, Opportunity[]> = {
      "lead-in": [],
      "contato-feito": [],
      "reuniao-agendada": [],
      "proposta-enviada": [],
      negociacao: [],
      fechamento: [],
    };

    for (const opportunity of opportunities) {
      if (!effectiveStageIds.includes(opportunity.stage)) continue;

      if (
        normalizedSearch &&
        !opportunity.title.toLowerCase().includes(normalizedSearch) &&
        !opportunity.clientName.toLowerCase().includes(normalizedSearch) &&
        !opportunity.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch))
      ) {
        continue;
      }

      const computedTemperature = resolveTemperature(opportunity);

      if (globalPipesFilters) {
        if (globalPipesFilters.temperature?.length > 0 && !globalPipesFilters.temperature.includes(computedTemperature)) continue;
        if (globalPipesFilters.responsible?.length > 0 && !globalPipesFilters.responsible.includes(opportunity.responsibleId)) continue;
        if (globalPipesFilters.tags?.length > 0 && !globalPipesFilters.tags.some(t => opportunity.tags.includes(t))) continue;
        if (globalPipesFilters.overdue && getSlaStatus(opportunity.slaDeadline).status !== "breached") continue;
        if (globalPipesFilters.stale && !isStaleOpportunity(opportunity)) continue;
        if (globalPipesFilters.stage?.length > 0 && !globalPipesFilters.stage.includes(opportunity.stage)) continue;
      }

      grouped[opportunity.stage].push(opportunity);
    }

    return grouped;
  }, [
    opportunities,
    effectiveStageIds,
    normalizedSearch,
    resolveTemperature,
    globalPipesFilters,
  ]);

  const boardMetrics = useMemo(() => {
    const allVisibleCards = Object.values(opportunitiesByStage).flat();

    return {
      totalCards: allVisibleCards.length,
      boardTotal: allVisibleCards.reduce((acc, opportunity) => acc + opportunity.value, 0),
      overdueCards: allVisibleCards.filter(
        (opportunity) => getSlaStatus(opportunity.slaDeadline).status === "breached"
      ).length,
      staleCards: allVisibleCards.filter((opportunity) => isStaleOpportunity(opportunity)).length,
    };
  }, [opportunitiesByStage]);

  const activeFilterCount = useMemo(
    () => appliedFiltersCount + (stageFilter ? 1 : 0),
    [appliedFiltersCount, stageFilter]
  );

  const clearSearch = useCallback(() => {
    setSearchInputValue("");
    setSearchQuery("");
    setIsMobileSearchOpen(false);
  }, []);

  const updateStageFilter = useCallback(
    (next: PipelineStage | "all") => {
      const params = new URLSearchParams(searchParams.toString());
      if (next === "all") {
        params.delete("stage");
      } else {
        params.set("stage", next);
      }
      const serialized = params.toString();
      router.replace(serialized ? `/pipes?${serialized}` : "/pipes", {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  const clearLocalFilters = useCallback(() => {
    setGlobalPipesFilters(null);
    setAppliedFiltersCount(0);
    setRecentFiltersCount(0);
    setSearchInputValue("");
    setSearchQuery("");
    setIsMobileSearchOpen(false);
    if (stageFilter) {
      updateStageFilter("all");
    }
  }, [stageFilter, updateStageFilter]);

  const handleFunnelChange = useCallback(
    (pipelineId: string) => {
      setSelectedFunnel(pipelineId);
      if (searchInputValue) {
        clearSearch();
      }
      updateStageFilter("all");
    },
    [clearSearch, searchInputValue, updateStageFilter]
  );

  const metricChips = useMemo(() => {
    const chips: Array<{
      id: string;
      label: string;
      icon: React.ReactNode;
      tone: "neutral" | "info" | "warning" | "danger" | "success";
      onClick?: () => void;
    }> = [
      {
        id: "pipeline-total",
        label: `Pipeline: ${formatCurrencyBRL(boardMetrics.boardTotal)}`,
        icon: <CircleDollarSign className="h-3.5 w-3.5" />,
        tone: "info",
      },
      {
        id: "stages-visible",
        label: `Etapas: ${visibleStages.length}`,
        icon: <Columns3 className="h-3.5 w-3.5" />,
        tone: "neutral",
      },
      {
        id: "cards-total",
        label: `Cards: ${boardMetrics.totalCards}`,
        icon: <Filter className="h-3.5 w-3.5" />,
        tone: "neutral",
      },
      {
        id: "cards-overdue",
        label: `Estourados: ${boardMetrics.overdueCards}`,
        icon: <Flame className="h-3.5 w-3.5" />,
        tone: boardMetrics.overdueCards > 0 ? "danger" : "neutral",
      },
      {
        id: "cards-stale",
        label: `Sem atividade: ${boardMetrics.staleCards}`,
        icon: <TimerReset className="h-3.5 w-3.5" />,
        tone: boardMetrics.staleCards > 0 ? "warning" : "neutral",
      },
    ];

    return chips;
  }, [
    boardMetrics.boardTotal,
    boardMetrics.overdueCards,
    boardMetrics.staleCards,
    boardMetrics.totalCards,
    visibleStages.length,
  ]);

  const activeFilters = useMemo(() => {
    const filters: { id: string; label: string; onRemove: () => void }[] = [];
    if (!globalPipesFilters) return filters;

    const dispatchUpdate = (newFilters: NonNullable<typeof globalPipesFilters>) => {
      setGlobalPipesFilters(newFilters);
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("flow:filters-update", { detail: { context: "pipes", filters: newFilters } })
        );
      }
    };

    if (globalPipesFilters.temperature?.length > 0) {
      filters.push({
        id: "temp",
        label: `Temperatura: ${globalPipesFilters.temperature.map((t) => (t === "hot" ? "Quente" : t === "warm" ? "Morna" : "Fria")).join(", ")}`,
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, temperature: [] }),
      });
    }
    if (globalPipesFilters.responsible?.length > 0) {
      filters.push({
        id: "owner",
        label: `Donos: ${globalPipesFilters.responsible.length}`,
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, responsible: [] }),
      });
    }
    if (globalPipesFilters.tags?.length > 0) {
      filters.push({
        id: "segment",
        label: `Tags: ${globalPipesFilters.tags.join(", ")}`,
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, tags: [] }),
      });
    }
    if (globalPipesFilters.stage?.length > 0) {
      filters.push({
        id: "stage-filters",
        label: `Etapas: ${globalPipesFilters.stage.length}`,
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, stage: [] }),
      });
    }
    if (globalPipesFilters.overdue) {
      filters.push({
        id: "overdue",
        label: "Somente estourados",
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, overdue: false }),
      });
    }
    if (globalPipesFilters.stale) {
      filters.push({
        id: "stale",
        label: "Somente sem atividade",
        onRemove: () => dispatchUpdate({ ...globalPipesFilters, stale: false }),
      });
    }

    if (stageFilter) {
      filters.push({
        id: "stage",
        label: `Status: ${activeFunnel.stages.find((stage) => stage.id === stageFilter)?.label ?? getStageParamLabel(stageFilter)}`,
        onRemove: () => updateStageFilter("all"),
      });
    }

    return filters;
  }, [globalPipesFilters, stageFilter, activeFunnel.stages, updateStageFilter]);

  useEffect(() => {
    if (!normalizedSearch) return;
    const total = Object.values(opportunitiesByStage).reduce(
      (acc, cards) => acc + cards.length,
      0
    );
    announce(`${total} cards encontrados para "${searchQuery}"`);
  }, [announce, normalizedSearch, opportunitiesByStage, searchQuery]);

  const {
    draggingCardId,
    draggingOpportunity,
    dragOverStage,
    dropIndicator,
    columnError,
    setColumnError,
    successFeedback,
    updatingCardId,
    recentlyMovedCardId,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  } = usePipelineBoard({
    localOpportunities,
    setLocalOpportunities,
    activeFunnel,
    announce,
    canMoveCards,
  });

  const {
    stageCustomizations,
    renamingStage,
    renameValue,
    setRenameValue,
    renameInputRef,
    startRename,
    confirmRename,
    cancelRename,
    setStageColor,
    getStageColor,
  } = useStageCustomization();

  const getDropPreview = useCallback(
    (targetStage: PipelineStage) => {
      if (!draggingOpportunity || dragOverStage !== targetStage) return null;

      const targetLabel =
        activeFunnel.stages.find((stage) => stage.id === targetStage)?.label ??
        getStageParamLabel(targetStage);
      const validation = validateStageTransition(draggingOpportunity, targetStage);

      if (validation.missing.length > 0) {
        return {
          tone: "error" as const,
          message: `Bloqueado: faltam ${validation.missing.join(", ")} para mover para ${targetLabel}.`,
        };
      }

      if (validation.isRegression) {
        return {
          tone: "warning" as const,
          message: `Retrocesso detectado. Solte para mover para ${targetLabel}.`,
        };
      }

      return {
        tone: "success" as const,
        message: `Solte para mover para ${targetLabel}.`,
      };
    },
    [activeFunnel.stages, dragOverStage, draggingOpportunity]
  );

  const handleOpenBlockedMove = useCallback(() => {
    if (!columnError?.cardId) return;
    openModal("lead-card", {
      id: columnError.cardId,
      focusFields: columnError.missingFields,
      pendingStage: columnError.targetStage,
    });
  }, [columnError, openModal]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        window.setTimeout(() => searchInputRef.current?.focus(), 50);
        return;
      }

      if (event.key === "Escape") {
        setIsMobileSearchOpen(false);
        searchInputRef.current?.blur();
        mobileSearchInputRef.current?.blur();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isMobileSearchOpen) return;
    const timer = window.setTimeout(() => {
      mobileSearchInputRef.current?.focus();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [isMobileSearchOpen]);

  if (isLoading) {
    return <PipelineSkeleton stageCount={visibleStages.length} />;
  }

  return (
    <>
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={screenContainer}
        className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4"
      >
        <motion.div variants={sectionEnter} className="shrink-0">
          <ModuleCommandHeader
            title={activeFunnel.label}
            titleAccessory={
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    aria-label="Trocar funil"
                    className="premium-shine inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-500 transition-all duration-120 hover:-translate-y-px hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[270px] rounded-[16px] border-zinc-200 bg-white/95 p-1.5 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.45)]"
                >
                  <div className="px-2.5 pb-2 pt-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                      Selecionar funil
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      Troque o contexto do board e mantenha o foco operacional.
                    </p>
                  </div>

                  {funnels.map((funnel) => (
                    <DropdownMenuItem
                      key={funnel.id}
                      onClick={() => handleFunnelChange(funnel.id)}
                      className="h-9 rounded-xl px-2.5 font-medium text-zinc-700"
                    >
                      <span className="truncate">{funnel.label}</span>
                      {funnel.id === selectedFunnel ? (
                        <Check className="h-3.5 w-3.5 text-brand" />
                      ) : null}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            }
            description="Mesa de controle do pipeline comercial com prioridade operacional clara."
            chips={metricChips}
            actionsClassName="gap-2.5 p-2"
            actions={[
              <div key="search" className="relative hidden w-[min(38vw,360px)] md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  ref={searchInputRef}
                  value={searchInputValue}
                  onChange={(event) => setSearchInputValue(event.target.value)}
                  placeholder="Buscar atividade, cliente, valor ou segmento"
                  className="h-10 rounded-full border-zinc-200 pl-9 pr-16 font-body text-sm"
                />
                <span className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 lg:inline-flex">
                  Ctrl K
                </span>
                {searchInputValue ? (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
                    aria-label="Limpar busca"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </div>,
              <Popover
                key="mobile-search"
                open={isMobileSearchOpen}
                onOpenChange={setIsMobileSearchOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 rounded-full px-3 md:hidden"
                  >
                    <Search className="h-3.5 w-3.5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  side="bottom"
                  sideOffset={8}
                  className="w-[min(92vw,360px)] rounded-[16px] border-zinc-200 bg-white p-2"
                >
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <Input
                      ref={mobileSearchInputRef}
                      value={searchInputValue}
                      onChange={(event) => setSearchInputValue(event.target.value)}
                      placeholder="Buscar cards..."
                      className="h-10 w-full rounded-full pl-8 pr-8 font-body text-sm"
                    />
                    {searchInputValue ? (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                        aria-label="Limpar busca"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    ) : null}
                  </div>
                </PopoverContent>
              </Popover>,
              <Button
                key="filters"
                variant="outline"
                size="sm"
                className="h-10 rounded-full px-4"
                onClick={() => openDrawer("filters")}
              >
                <Filter className="h-4 w-4" />
                Filtros
                {activeFilterCount > 0 ? (
                  <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-[7px] bg-zinc-100 text-[10px] font-bold text-zinc-900 border border-zinc-200">
                    {activeFilterCount}
                  </span>
                ) : null}
              </Button>,
              <DropdownMenu key="new-card">
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    className="h-10 rounded-full px-5"
                    disabled={!canCreateOpportunity}
                  >
                    <Plus className="h-4 w-4" />
                    Novo
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[220px] rounded-[16px]">
                  <DropdownMenuItem
                    onClick={() => openDrawer("new-opportunity")}
                    disabled={!canCreateOpportunity}
                  >
                    <Plus className="h-4 w-4" />
                    Novo card
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      openDrawer("new-opportunity", {
                        source: "captura-rapida",
                      })
                    }
                    disabled={!canCreateOpportunity}
                  >
                    <Sparkles className="h-4 w-4" />
                    Capturar lead
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>,
            ]}
          >
            {activeFilters.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtros ativos">
                {activeFilters.map((f) => (
                  <span
                    key={f.id}
                    className="inline-flex h-[28px] items-center gap-1 rounded-full border border-zinc-200/80 bg-white/70 pl-2.5 pr-1 text-[11.5px] font-medium text-zinc-700 shadow-(--shadow-premium-soft)"
                  >
                    <span className="truncate max-w-[140px] sm:max-w-[200px]">{f.label}</span>
                    <button
                      type="button"
                      onClick={f.onRemove}
                      className="ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-900 focus:outline-none"
                      aria-label={`Remover filtro ${f.label}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={clearLocalFilters}
                  className="ml-2 flex h-[26px] items-center justify-center text-[11.5px] font-semibold text-zinc-500 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-zinc-900"
                >
                  Limpar tudo
                </button>
              </div>
            ) : null}
          </ModuleCommandHeader>
        </motion.div>

        <div
          className="premium-ambient premium-grain relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[22px] border border-zinc-200/70 bg-white/72 p-3 shadow-(--shadow-premium-soft) backdrop-blur-sm md:p-4"
          role="region"
          aria-label="Pipeline de vendas arrastavel"
        >
          <div className="mb-2 flex items-center justify-between px-1 text-[11px] text-zinc-500 md:hidden">
            <span>Deslize para ver as etapas</span>
            <span>{visibleStages.length} colunas</span>
          </div>

          <div
            data-pipe-board-scroll
            className="flex min-w-0 flex-1 gap-4 overflow-x-auto scroll-smooth px-1 pb-1 md:gap-5 md:px-2"
            style={{ scrollSnapType: "x proximity" }}
          >
            {visibleStages.map((stageDef, index) => {
              const cards = opportunitiesByStage[stageDef.id] || [];
              const stageLabel = stageCustomizations[stageDef.id]?.label || stageDef.label;
              const stageColor = getStageColor(stageDef.id);
              const totalValue = cards.reduce((acc, opportunity) => acc + opportunity.value, 0);
              const isDropTarget = dragOverStage === stageDef.id;
              const stageError = columnError?.stage === stageDef.id ? columnError : null;
              const stageSuccess = successFeedback?.stage === stageDef.id ? successFeedback : null;
              const dropPreview = getDropPreview(stageDef.id);
              const stageBreachedCount = cards.filter(
                (opportunity) => getSlaStatus(opportunity.slaDeadline).status === "breached"
              ).length;
              const wipLimit = WIP_LIMIT_BY_STAGE[stageDef.id] ?? 7;
              const isWipExceeded = cards.length > wipLimit;

              return (
                <motion.div
                  key={stageDef.id}
                  custom={index}
                  variants={listItemReveal}
                  className={cn(
                    "group/col flex w-[min(88vw,372px)] shrink-0 flex-col rounded-[22px] border transition-all duration-200 sm:w-[352px]",
                    isDropTarget
                      ? "border-brand/70 bg-brand/5 ring-2 ring-brand/26 shadow-[0_18px_30px_-22px_rgba(37,99,235,0.52)]"
                      : "border-zinc-200/80 bg-white/88"
                  )}
                  style={{ scrollSnapAlign: "start" }}
                  onDragOver={(event) => handleDragOver(event, stageDef.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(event) => handleDrop(event, stageDef.id)}
                  role="list"
                  aria-label={`Etapa ${stageLabel}, ${cards.length} cards, total ${formatCurrencyBRL(totalValue)}`}
                >
                  <div className="sticky top-0 z-10 rounded-t-[22px] bg-inherit px-3.5 pb-3 pt-3 backdrop-blur-sm">
                    <div className="mb-2 h-1 w-full rounded-full bg-zinc-200/70">
                      <div className={cn("h-1 rounded-full", stageColor.bg)} />
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        {canConfigureStages ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                                aria-label={`Personalizar etapa ${stageLabel}`}
                              >
                                <Settings2 className="h-3.5 w-3.5" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-auto rounded-[16px] p-3">
                              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-zinc-600">
                                <Palette className="h-3 w-3" />
                                Cor da etapa
                              </div>
                              <div className="grid grid-cols-5 gap-1.5">
                                {stageColorPalette.map((color) => {
                                  const isActive =
                                    (stageCustomizations[stageDef.id]?.colorId || "default") ===
                                    color.id;
                                  return (
                                    <button
                                      key={color.id}
                                      onClick={() => setStageColor(stageDef.id, color.id)}
                                      className={cn(
                                        "flex h-6 w-6 items-center justify-center rounded-full transition-all",
                                        color.bg,
                                        isActive
                                          ? "ring-2 ring-zinc-900 ring-offset-2"
                                          : "hover:ring-2 hover:ring-zinc-300 hover:ring-offset-1"
                                      )}
                                      title={color.label}
                                      aria-label={color.label}
                                    >
                                      {isActive ? <Check className="h-3 w-3 text-white" /> : null}
                                    </button>
                                  );
                                })}
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : null}

                        {renamingStage === stageDef.id && canConfigureStages ? (
                          <input
                            ref={renameInputRef}
                            value={renameValue}
                            onChange={(event) => setRenameValue(event.target.value)}
                            onBlur={confirmRename}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") confirmRename();
                              if (event.key === "Escape") cancelRename();
                            }}
                            className="min-w-0 flex-1 truncate rounded-md border border-zinc-300 bg-white px-1.5 py-0.5 font-heading text-[14px] font-semibold text-zinc-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                            aria-label="Renomear etapa"
                          />
                        ) : canConfigureStages ? (
                          <button
                            onClick={() => startRename(stageDef.id, stageLabel)}
                            className="truncate font-heading text-[15px] font-semibold text-zinc-900 transition-colors hover:text-brand"
                            title="Clique para renomear"
                          >
                            {stageLabel}
                          </button>
                        ) : (
                          <span className="truncate font-heading text-[15px] font-semibold text-zinc-900">
                            {stageLabel}
                          </span>
                        )}

                        <span className="shrink-0 rounded-md bg-zinc-200/80 px-1.5 py-0.5 font-body text-[11px] font-semibold text-zinc-700">
                          {cards.length}
                        </span>
                      </div>

                      <span className="shrink-0 text-[11px] font-semibold text-zinc-500">
                        {formatCurrencyBRL(totalValue)}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[10px] font-semibold text-zinc-600">
                        SLA {stageDef.slaHours}h
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-1 text-[10px] font-semibold",
                          isWipExceeded
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700"
                        )}
                      >
                        WIP {cards.length}/{wipLimit}
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-1 text-[10px] font-semibold",
                          stageBreachedCount > 0
                            ? "border-red-200 bg-red-50 text-red-700"
                            : "border-zinc-200 bg-zinc-50 text-zinc-600"
                        )}
                      >
                        Estourados {stageBreachedCount}
                      </span>
                    </div>

                    {dropPreview ? (
                      <div
                        className={cn(
                          "mt-2 rounded-[14px] border px-2.5 py-2 text-[11px] font-medium",
                          dropPreview.tone === "error"
                            ? "border-red-200 bg-red-50 text-red-700"
                            : dropPreview.tone === "warning"
                              ? "border-amber-200 bg-amber-50 text-amber-700"
                              : "border-emerald-200 bg-emerald-50 text-emerald-700"
                        )}
                        role="status"
                      >
                        {dropPreview.message}
                      </div>
                    ) : null}

                    {stageError ? (
                      <div
                        className={cn(
                          "mt-2 rounded-[14px] border px-2.5 py-2",
                          stageError.tone === "warning"
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-red-200 bg-red-50 text-red-700"
                        )}
                        role="alert"
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-medium leading-relaxed">{stageError.message}</p>
                            {stageError.missingFields?.length ? (
                              <button
                                type="button"
                                onClick={handleOpenBlockedMove}
                                className="mt-1 text-[11px] font-semibold underline underline-offset-2"
                              >
                                Preencher agora
                              </button>
                            ) : null}
                          </div>
                          <button
                            onClick={() => setColumnError(null)}
                            className="rounded-md p-1 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2"
                            aria-label="Fechar aviso"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : null}

                    {stageSuccess ? (
                      <div
                        className="mt-2 rounded-[14px] border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-emerald-700"
                        role="status"
                      >
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <span className="text-[11px] font-medium leading-relaxed">
                            {stageSuccess.message}
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    data-pipe-column-scroll
                    className="flex-1 overflow-y-auto px-3.5 pb-3.5"
                    onDragOver={(event) => handleDragOver(event, stageDef.id)}
                    onDrop={(event) => handleDrop(event, stageDef.id)}
                  >
                    {cards.length > 0 || isDropTarget ? (
                      <div className="space-y-3">
                        {(() => {
                          const showPlaceholder = Boolean(
                            draggingCardId && dropIndicator?.stage === stageDef.id
                          );
                          const placeholderIndex = showPlaceholder
                            ? Math.min(dropIndicator?.index ?? 0, cards.length)
                            : -1;

                          return (
                            <AnimatePresence initial={false}>
                              {cards.flatMap((opportunity, idx) => {
                                const nodes: React.ReactNode[] = [];
                                const isDraggingCurrentCard = draggingCardId === opportunity.id;
                                const cardInlineFeedback =
                                  stageError?.cardId === opportunity.id
                                    ? ({
                                        tone: stageError.tone === "error" ? "error" : "warning",
                                        message: stageError.message,
                                        actionLabel: stageError.missingFields?.length
                                          ? "Preencher agora"
                                          : undefined,
                                        onAction: stageError.missingFields?.length
                                          ? handleOpenBlockedMove
                                          : undefined,
                                      } as const)
                                    : stageSuccess?.cardId === opportunity.id
                                      ? ({
                                          tone: "success",
                                          message: stageSuccess.message,
                                        } as const)
                                      : null;

                                if (showPlaceholder && placeholderIndex === idx) {
                                  nodes.push(
                                    <motion.div
                                      key={`drop-placeholder-${stageDef.id}-${idx}`}
                                      layout
                                      initial={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                      animate={{ opacity: 1, scaleY: 1, height: 190 }}
                                      exit={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                      className="rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                    />
                                  );
                                }

                                nodes.push(
                                  <motion.div
                                    key={opportunity.id}
                                    layout
                                    data-card-index={idx}
                                    transition={{
                                      layout: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                                    }}
                                    className={cn(
                                      "transition-[transform,opacity,filter] duration-180 ease-out",
                                      isDraggingCurrentCard ? "scale-[0.985] opacity-30 saturate-50" : ""
                                    )}
                                  >
                                    <DealCardBento
                                      opportunity={opportunity}
                                      temp={getTemp(opportunity)}
                                      isDragging={isDraggingCurrentCard}
                                      isUpdating={updatingCardId === opportunity.id}
                                      isHighlighted={recentlyMovedCardId === opportunity.id}
                                      canMove={canMoveCards}
                                      canEdit={canMoveCards}
                                      inlineFeedback={cardInlineFeedback}
                                      onOpen={() =>
                                        openModal("lead-card", {
                                          id: opportunity.id,
                                        })
                                      }
                                      onDragStart={(event) =>
                                        handleDragStart(event, opportunity)
                                      }
                                      onDragEnd={handleDragEnd}
                                    />
                                  </motion.div>
                                );

                                if (
                                  idx === cards.length - 1 &&
                                  showPlaceholder &&
                                  placeholderIndex >= cards.length
                                ) {
                                  nodes.push(
                                    <motion.div
                                      key={`drop-placeholder-${stageDef.id}-end`}
                                      layout
                                      initial={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                      animate={{ opacity: 1, scaleY: 1, height: 190 }}
                                      exit={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                      className="rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                    />
                                  );
                                }

                                return nodes;
                              })}

                              {cards.length === 0 && isDropTarget ? (
                                <motion.div
                                  key={`drop-placeholder-empty-${stageDef.id}`}
                                  layout
                                  initial={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                  animate={{ opacity: 1, scaleY: 1, height: 190 }}
                                  exit={{ opacity: 0, scaleY: 0.82, height: 0 }}
                                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                  className="rounded-[22px] border border-dashed border-brand/45 bg-brand/5 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.16)]"
                                />
                              ) : null}
                            </AnimatePresence>
                          );
                        })()}
                      </div>
                    ) : (
                      <div className="mt-1 flex min-h-[180px] flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-zinc-200 bg-zinc-50/40 px-4 text-center">
                        <p className="text-sm font-semibold text-zinc-700">Sem cards nesta etapa</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          Crie um novo card aqui ou mova um card de outra coluna.
                        </p>
                        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                          <Button
                            size="sm"
                            className="h-8 rounded-full px-3 text-xs"
                            onClick={() =>
                              openDrawer("new-opportunity", {
                                initialStage: stageDef.id,
                              })
                            }
                            disabled={!canCreateOpportunity}
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Criar card nesta etapa
                          </Button>
                          <button
                            type="button"
                            onClick={() =>
                              announce(
                                `Arraste um card de outra etapa e solte em ${stageLabel}.`
                              )
                            }
                            className="inline-flex h-8 items-center rounded-full border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-600 transition hover:bg-zinc-50"
                          >
                            Mover um card para ca
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}

function PipesPageFallback() {
  return (
    <div className="premium-ambient min-h-[calc(100vh-72px)] p-6">
      <PipelineSkeleton stageCount={6} />
    </div>
  );
}

export default function PipesPage() {
  return (
    <Suspense fallback={<PipesPageFallback />}>
      <PipesPageContent />
    </Suspense>
  );
}
