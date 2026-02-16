"use client";

// React
import {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
  Suspense,
} from "react";
// External
import {
  Plus,
  Search,
  Filter,
  ArrowDownToLine,
  X,
  Palette,
  Check,
  CheckCircle2,
  AlertTriangle,
  CircleDollarSign,
  Columns3,
  MoreHorizontal,
  SlidersHorizontal,
  Download,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
// UI
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
// Stores
import { useUIStore } from "@/stores/ui-store";
import { useAuthStore } from "@/stores/auth-store";
// Business logic
import {
  calculateTemperature,
  formatCurrencyBRL,
} from "@/lib/business-rules";
import { generateDynamicMockData } from "@/lib/mock-data";
import { screenContainer, sectionEnter, listItemReveal } from "@/lib/motion";
// Local modules
import { funnels, stageColorPalette, temperatureConfig } from "./lib/pipeline-config";
import type { PipelineStage, Opportunity } from "@/types";
import { usePipelineBoard } from "./hooks/use-pipeline-board";
import { useStageCustomization } from "./hooks/use-stage-customization";
import { DealCardBento } from "./components/deal-card-bento";
import { GhostDealCard } from "./components/ghost-deal-card";
import { PipelineSkeleton } from "./components/pipeline-skeleton";
// External components
import { PipelineManagerDrawer } from "@/components/pipeline/pipeline-manager-drawer";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";

// ===================================================================
// Main Page Component
// ===================================================================

const FILTERS_APPLIED_EVENT = "flow:filters-applied";

function PipesPageContent() {
  const { openDrawer, openModal } = useUIStore();
  const { user } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentUserId = user?.id ?? "demo-user";
  const currentUserName = user?.name ?? "Usuário Demo";
  const [selectedFunnel, setSelectedFunnel] = useState("comercial");
  const [localOpportunities, setLocalOpportunities] = useState<Opportunity[]>(
    () => generateDynamicMockData(currentUserId, currentUserName)
  );
  const opportunities = localOpportunities;
  const [isManageDrawerOpen, setIsManageDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);
  const [recentFiltersCount, setRecentFiltersCount] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const activeFunnel =
    funnels.find((f) => f.id === selectedFunnel) ?? funnels[0];

  const activeStageIds = useMemo(
    () => activeFunnel.stages.map((s) => s.id),
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

  const stageFilterLabel = useMemo(() => {
    if (!stageFilter) return null;
    return activeFunnel.stages.find((stage) => stage.id === stageFilter)?.label ?? null;
  }, [stageFilter, activeFunnel]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleFiltersApplied = (event: Event) => {
      const customEvent = event as CustomEvent<{ context?: string; count?: number }>;
      if (customEvent.detail?.context !== "pipes") return;
      const count = Number(customEvent.detail?.count ?? 0);
      const safeCount = Number.isFinite(count) && count >= 0 ? count : 0;
      setAppliedFiltersCount(safeCount);
      setRecentFiltersCount(safeCount);
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

  // Announce to screen readers
  const announce = useCallback((message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchQuery(searchInputValue);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [searchInputValue]);

  // Normalize search query
  const normalizedSearch = useMemo(
    () => searchQuery.toLowerCase().trim(),
    [searchQuery]
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
    for (const opp of opportunities) {
      if (!effectiveStageIds.includes(opp.stage)) continue;
      if (
        normalizedSearch &&
        !opp.title.toLowerCase().includes(normalizedSearch) &&
        !opp.clientName.toLowerCase().includes(normalizedSearch) &&
        !opp.tags.some((t) => t.toLowerCase().includes(normalizedSearch))
      ) {
        continue;
      }
      grouped[opp.stage].push(opp);
    }
    for (const stage of Object.keys(grouped) as PipelineStage[]) {
      grouped[stage].sort((a, b) => {
        const aOwn = a.responsibleId === currentUserId ? 0 : 1;
        const bOwn = b.responsibleId === currentUserId ? 0 : 1;
        return aOwn - bOwn;
      });
    }
    return grouped;
  }, [opportunities, effectiveStageIds, normalizedSearch, currentUserId]);

  const { boardTotal } = useMemo(() => {
    const active = opportunities.filter((o) =>
      effectiveStageIds.includes(o.stage)
    );
    return {
      boardTotal: active.reduce((acc, o) => acc + o.value, 0),
    };
  }, [opportunities, effectiveStageIds]);

  const averageDealValue = useMemo(() => {
    const active = opportunities.filter((o) =>
      effectiveStageIds.includes(o.stage)
    );
    if (active.length === 0) return 10000;
    return active.reduce((acc, o) => acc + o.value, 0) / active.length;
  }, [opportunities, effectiveStageIds]);

  const getTemp = useCallback(
    (opp: Opportunity) => {
      const computed = calculateTemperature(opp, averageDealValue);
      return temperatureConfig[computed];
    },
    [averageDealValue]
  );

  const activeFilterCount = useMemo(
    () => appliedFiltersCount + (stageFilter ? 1 : 0),
    [appliedFiltersCount, stageFilter]
  );

  const clearSearch = useCallback(() => {
    setSearchInputValue("");
    setSearchQuery("");
    setIsMobileSearchOpen(false);
  }, []);

  const handleFunnelChange = useCallback(
    (pipelineId: string) => {
      setSelectedFunnel(pipelineId);
      if (searchInputValue) {
        clearSearch();
      }
    },
    [clearSearch, searchInputValue]
  );

  const handleExportBoard = useCallback(() => {
    if (typeof window === "undefined") return;
    const rows = opportunities
      .filter((opp) => effectiveStageIds.includes(opp.stage))
      .map((opp) =>
        [
          opp.title,
          opp.clientName,
          opp.stage,
          opp.responsibleName,
          String(opp.value),
          String(opp.monthlyValue),
        ]
          .map((field) => `"${String(field).replaceAll('"', '""')}"`)
          .join(",")
      );
    const csv = [
      "titulo,cliente,etapa,responsavel,valor,valor_mensal",
      ...rows,
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pipes-${selectedFunnel}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    announce("Exportacao iniciada.");
  }, [announce, opportunities, effectiveStageIds, selectedFunnel]);

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
        label: `Pipeline: ${formatCurrencyBRL(boardTotal)}`,
        icon: <CircleDollarSign className="h-3.5 w-3.5" />,
        tone: "info",
      },
      {
        id: "stages-visible",
        label: `Etapas: ${visibleStages.length}`,
        icon: <Columns3 className="h-3.5 w-3.5" />,
        tone: "neutral",
        onClick: () => setIsManageDrawerOpen(true),
      },
    ];

    if (recentFiltersCount !== null) {
      chips.push({
        id: "filters-feedback",
        label: `Filtros: ${activeFilterCount}`,
        icon: <Filter className="h-3.5 w-3.5" />,
        tone: activeFilterCount > 0 ? "warning" : "neutral",
      });
    }

    return chips;
  }, [
    boardTotal,
    visibleStages.length,
    recentFiltersCount,
    activeFilterCount,
  ]);

  // Announce search results to screen readers
  useEffect(() => {
    if (normalizedSearch) {
      const total = Object.values(opportunitiesByStage).reduce(
        (acc, cards) => acc + cards.length,
        0
      );
      announce(`${total} cards encontrados para "${searchQuery}"`);
    }
  }, [normalizedSearch, opportunitiesByStage, announce, searchQuery]);

  // Custom hooks
  const {
    draggingCardId,
    draggingCardStage,
    dragOverStage,
    dropIndicator,
    columnError,
    successFeedback,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
    handleWin,
    handleLose,
  } = usePipelineBoard({
    localOpportunities,
    setLocalOpportunities,
    activeFunnel,
    currentUserId,
    announce,
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

  // Toggle search with Ctrl+K / Cmd+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setTimeout(() => searchInputRef.current?.focus(), 50);
      } else if (e.key === "Escape") {
        setIsMobileSearchOpen(false);
        setSearchInputValue("");
        setSearchQuery("");
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

  // ===================================================================
  // Render
  // ===================================================================

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
        {/* Header & Toolbar */}
        <motion.div variants={sectionEnter} className="shrink-0">
          <ModuleCommandHeader
            title={activeFunnel.label}
            titleAccessory={
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    aria-label="Trocar funil"
                    className="inline-flex h-8 w-6 items-center justify-center rounded-md text-zinc-500 transition-colors duration-120 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 rounded-[14px]">
                  {funnels.map((funnel) => (
                    <DropdownMenuItem
                      key={funnel.id}
                      onClick={() => handleFunnelChange(funnel.id)}
                      className="justify-between"
                    >
                      <span>{funnel.label}</span>
                      {funnel.id === selectedFunnel ? (
                        <Check className="h-3.5 w-3.5 text-zinc-500" />
                      ) : null}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            }
            description="Execução visual do pipeline comercial."
            chips={metricChips}
            actions={
              <div className="flex w-full min-w-0 flex-col gap-2 xl:flex-row xl:items-center xl:justify-end">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <Button
                    size="sm"
                    onClick={() => openDrawer("new-opportunity")}
                    className="h-9 rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800 sm:hidden"
                  >
                    <Plus className="mr-1.5 h-3.5 w-3.5" />
                    Novo
                  </Button>
                </div>

                <div className="flex min-w-0 flex-wrap items-center gap-2 xl:justify-end">
                  <Popover open={isMobileSearchOpen} onOpenChange={setIsMobileSearchOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-full sm:hidden"
                      >
                        <Search className="h-3.5 w-3.5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="end"
                      side="bottom"
                      sideOffset={8}
                      className="w-[min(92vw,320px)] rounded-[16px] border-zinc-200 bg-white p-2"
                    >
                      <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                        <Input
                          ref={mobileSearchInputRef}
                          value={searchInputValue}
                          onChange={(e) => setSearchInputValue(e.target.value)}
                          placeholder="Buscar cards..."
                          className="h-9 w-full rounded-full pl-8 pr-8 font-body text-sm"
                        />
                        {searchInputValue && (
                          <button
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>

                  <div className="group relative hidden sm:block">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                    <Input
                      ref={searchInputRef}
                      value={searchInputValue}
                      onChange={(e) => setSearchInputValue(e.target.value)}
                      placeholder="Buscar cards..."
                      className="h-9 w-[148px] rounded-full pl-8 pr-8 font-body text-sm md:w-[180px] lg:w-[220px]"
                    />
                    {searchInputValue && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 transition-opacity hover:text-zinc-600 sm:opacity-0 sm:group-hover:opacity-100"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openDrawer("filters")}
                    className="h-9 rounded-full font-heading text-sm"
                  >
                    <Filter className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">
                      {activeFilterCount > 0 ? `Filtros (${activeFilterCount})` : "Filtros"}
                    </span>
                    {activeFilterCount > 0 && (
                      <span className="ml-1 rounded-full bg-zinc-200 px-1.5 py-0 text-[10px] font-semibold text-zinc-700 md:hidden">
                        {activeFilterCount}
                      </span>
                    )}
                  </Button>

                  <Button
                    size="sm"
                    onClick={() => openDrawer("new-opportunity")}
                    className="hidden h-9 rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800 sm:inline-flex"
                  >
                    <Plus className="mr-1.5 h-3.5 w-3.5" />
                    Novo Card
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 rounded-full">
                        <MoreHorizontal className="h-3.5 w-3.5" />
                        <span className="hidden md:inline">Mais</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-[14px]">
                      <DropdownMenuItem onClick={() => setIsManageDrawerOpen(true)}>
                        <Columns3 className="mr-2 h-4 w-4" />
                        Gerenciar etapas
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          boardRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                          announce("Colunas reposicionadas.");
                        }}
                      >
                        <SlidersHorizontal className="mr-2 h-4 w-4" />
                        Reordenar colunas
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleExportBoard}>
                        <Download className="mr-2 h-4 w-4" />
                        Exportar
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openDrawer("filters")}>
                        <Filter className="mr-2 h-4 w-4" />
                        Preferencias de visualizacao
                      </DropdownMenuItem>
                      {stageFilter && stageFilterLabel && (
                        <DropdownMenuItem onClick={() => router.replace("/pipes")}>
                          <X className="mr-2 h-4 w-4" />
                          Limpar etapa ({stageFilterLabel})
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            }
          />
        </motion.div>

        {/* Board */}
        <div
          className="premium-ambient premium-grain relative flex min-h-0 min-w-0 flex-1 items-stretch overflow-hidden rounded-[20px] border border-zinc-200/75 bg-white/68 p-3 shadow-[var(--shadow-premium-soft)] backdrop-blur-sm md:p-4"
          role="region"
          aria-label="Pipeline de vendas — arraste os cards entre as etapas"
        >
          <div
            ref={boardRef}
            className="flex min-w-0 flex-1 gap-4 overflow-x-auto scroll-smooth px-1 pb-1 md:px-2"
            style={{ scrollSnapType: "x proximity" }}
          >
            {visibleStages.map((stageDef, index) => {
              const cards = opportunitiesByStage[stageDef.id] || [];
              const totalValue = cards.reduce((acc, o) => acc + o.value, 0);
              const isDropTarget = dragOverStage === stageDef.id;
              const error =
                columnError?.stage === stageDef.id
                  ? columnError.message
                  : null;
              const isRegressionWarning = error?.startsWith("Card retrocedido");
              const hasSuccess = successFeedback?.stage === stageDef.id;

              return (
                <motion.div
                  key={stageDef.id}
                  custom={index}
                  variants={listItemReveal}
                  className={`group/col flex w-[85vw] shrink-0 flex-col rounded-[var(--radius-bento-card)] border transition-all duration-150 sm:w-[320px] xl:w-[340px] ${isDropTarget
                    ? "border-brand bg-brand/5 ring-2 ring-brand/30 shadow-[0_0_0_1px_rgba(37,99,235,0.2)]"
                    : "border-zinc-200/70 bg-white/80"
                    }`}
                  style={{ scrollSnapAlign: "start" }}
                  onDragOver={(e) => handleDragOver(e, stageDef.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, stageDef.id)}
                  role="group"
                  aria-label={`Etapa: ${stageCustomizations[stageDef.id]?.label || stageDef.label}, ${cards.length} cards, ${formatCurrencyBRL(totalValue)}`}
                >
                  {/* Column Header (sticky) */}
                  <div className="sticky top-0 z-10 rounded-t-[var(--radius-bento-card)] bg-inherit px-3 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full transition-transform hover:scale-125 ${getStageColor(stageDef.id).bg}`}
                              aria-label={`Cor da etapa: ${getStageColor(stageDef.id).label}`}
                            />
                          </PopoverTrigger>
                          <PopoverContent
                            align="start"
                            className="w-auto rounded-[var(--radius-bento-card)] p-3"
                          >
                            <span className="mb-2 flex items-center gap-1.5 font-body text-[11px] font-medium text-zinc-500">
                              <Palette className="h-3 w-3" />
                              Cor da etapa
                            </span>
                            <div className="grid grid-cols-5 gap-1.5">
                              {stageColorPalette.map((color) => {
                                const isActive =
                                  (stageCustomizations[stageDef.id]
                                    ?.colorId || "default") === color.id;
                                return (
                                  <button
                                    key={color.id}
                                    onClick={() =>
                                      setStageColor(stageDef.id, color.id)
                                    }
                                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${color.bg} ${isActive
                                      ? "ring-2 ring-zinc-900 ring-offset-2"
                                      : "hover:ring-2 hover:ring-zinc-300 hover:ring-offset-1"
                                      }`}
                                    title={color.label}
                                    aria-label={color.label}
                                  >
                                    {isActive && (
                                      <Check className="h-3 w-3 text-white" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </PopoverContent>
                        </Popover>

                        {renamingStage === stageDef.id ? (
                          <input
                            ref={renameInputRef}
                            value={renameValue}
                            onChange={(e) => setRenameValue(e.target.value)}
                            onBlur={confirmRename}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") confirmRename();
                              if (e.key === "Escape") cancelRename();
                            }}
                            className="min-w-0 flex-1 truncate rounded-md border border-zinc-300 bg-white px-1.5 py-0.5 font-heading text-[13px] font-semibold text-black outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                            aria-label="Renomear etapa"
                          />
                        ) : (
                          <button
                            onClick={() =>
                              startRename(
                                stageDef.id,
                                stageCustomizations[stageDef.id]?.label ||
                                stageDef.label
                              )
                            }
                            className="truncate font-heading text-[13px] font-semibold text-black hover:text-brand transition-colors"
                            title="Clique para renomear"
                          >
                            {stageCustomizations[stageDef.id]?.label ||
                              stageDef.label}
                          </button>
                        )}

                        <span className="shrink-0 rounded-md bg-zinc-200/70 px-1.5 py-0.5 font-body text-[11px] font-medium text-zinc-600">
                          {cards.length}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <span className="font-body text-[11px] font-medium text-zinc-400">
                          {formatCurrencyBRL(totalValue)}
                        </span>
                      </div>
                    </div>

                    {error && (
                      <div
                        className={`mt-2 flex items-start gap-1.5 rounded-[var(--radius-bento-inner)] px-2.5 py-2 ${isRegressionWarning
                          ? "bg-[var(--feedback-warning-bg)] text-[var(--feedback-warning-text)]"
                          : "bg-[var(--feedback-error-bg)] text-[var(--feedback-error-text)]"
                          }`}
                        role="alert"
                      >
                        {isRegressionWarning ? (
                          <ArrowDownToLine className="mt-0.5 h-3 w-3 shrink-0" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" />
                        )}
                        <span className="font-body text-[11px] leading-tight">
                          {error}
                        </span>
                      </div>
                    )}

                    {hasSuccess && (
                      <div
                        className="mt-2 flex items-start gap-1.5 rounded-[var(--radius-bento-inner)] bg-[var(--feedback-success-bg)] px-2.5 py-2 text-[var(--feedback-success-text)]"
                        role="status"
                      >
                        <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0" />
                        <span className="font-body text-[11px] leading-tight">
                          {successFeedback!.cardTitle} movido com sucesso
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Column Cards */}
                  <div className="flex-1 overflow-y-auto px-3 pb-3">
                    {cards.length > 0 || isDropTarget ? (
                      <div className="space-y-2">
                        {(() => {
                          const showPlaceholder =
                            draggingCardId &&
                            dropIndicator?.stage === stageDef.id &&
                            draggingCardStage !== stageDef.id;

                          const elements: React.ReactNode[] = [];

                          if (showPlaceholder && dropIndicator.index === 0) {
                            elements.push(
                              <div
                                key="drop-placeholder"
                                className="rounded-[var(--radius-bento-card)] border-2 border-dashed border-brand/40 bg-brand/5 transition-all duration-200"
                                style={{ height: 72 }}
                              />
                            );
                          }

                          cards.forEach((opportunity, idx) => {
                            const isGhost =
                              opportunity.responsibleId !== currentUserId;

                            if (isGhost) {
                              elements.push(
                                <GhostDealCard
                                  key={opportunity.id}
                                  opportunity={opportunity}
                                />
                              );
                            } else {
                              elements.push(
                                <div
                                  key={opportunity.id}
                                  data-card-index={idx}
                                  className={`transition-transform duration-200 ${draggingCardId === opportunity.id
                                    ? "scale-[0.97] opacity-40"
                                    : ""
                                    }`}
                                >
                                  <DealCardBento
                                    opportunity={opportunity}
                                    temp={getTemp(opportunity)}
                                    onOpen={() =>
                                      openModal("lead-card", {
                                        id: opportunity.id,
                                      })
                                    }
                                    onDragStart={(e) =>
                                      handleDragStart(e, opportunity)
                                    }
                                    onDragEnd={handleDragEnd}
                                    onWin={() =>
                                      handleWin(opportunity.id)
                                    }
                                    onLose={() =>
                                      handleLose(opportunity.id)
                                    }
                                  />
                                </div>
                              );
                            }

                            if (
                              showPlaceholder &&
                              dropIndicator.index === idx + 1
                            ) {
                              elements.push(
                                <div
                                  key="drop-placeholder"
                                  className="rounded-[var(--radius-bento-card)] border-2 border-dashed border-brand/40 bg-brand/5 transition-all duration-200"
                                  style={{ height: 72 }}
                                />
                              );
                            }
                          });

                          if (
                            showPlaceholder &&
                            dropIndicator.index >= cards.length &&
                            !elements.some(
                              (el) =>
                                el !== null &&
                                typeof el === "object" &&
                                "key" in el &&
                                el.key === "drop-placeholder"
                            )
                          ) {
                            elements.push(
                              <div
                                key="drop-placeholder"
                                className="rounded-[var(--radius-bento-card)] border-2 border-dashed border-brand/40 bg-brand/5 transition-all duration-200"
                                style={{ height: 72 }}
                              />
                            );
                          }

                          if (cards.length === 0 && isDropTarget) {
                            elements.push(
                              <div
                                key="drop-placeholder-empty"
                                className="rounded-[var(--radius-bento-card)] border-2 border-dashed border-brand/40 bg-brand/5 transition-all duration-200"
                                style={{ height: 72 }}
                              />
                            );
                          }

                          return elements;
                        })()}
                      </div>
                    ) : (
                      <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-[var(--radius-bento-inner)] border-2 border-dashed border-zinc-200 transition-colors">
                        <p className="font-body text-xs text-zinc-400">
                          Nenhum card nesta etapa
                        </p>
                        <button
                          onClick={() =>
                            openDrawer("new-opportunity", {
                              initialStage: stageDef.id,
                            })
                          }
                          className="font-body text-[11px] font-medium text-brand hover:underline"
                        >
                          + Criar novo
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <PipelineManagerDrawer
          open={isManageDrawerOpen}
          onOpenChange={setIsManageDrawerOpen}
        />
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
