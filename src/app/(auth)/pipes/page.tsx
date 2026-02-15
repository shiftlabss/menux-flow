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
import { PipelineSwitcher } from "@/components/pipeline/pipeline-switcher";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";

// ===================================================================
// Main Page Component
// ===================================================================

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
  const [showOnlyMine, setShowOnlyMine] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
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

  // Announce to screen readers
  const announce = useCallback((message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }
  }, []);

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
      if (showOnlyMine && opp.responsibleId !== currentUserId) continue;
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
  }, [opportunities, effectiveStageIds, showOnlyMine, normalizedSearch, currentUserId]);

  const { myCount, myTotal, boardCount, boardTotal } = useMemo(() => {
    const active = opportunities.filter((o) =>
      effectiveStageIds.includes(o.stage)
    );
    const mine = active.filter((o) => o.responsibleId === currentUserId);
    return {
      myCount: mine.length,
      myTotal: mine.reduce((acc, o) => acc + o.value, 0),
      boardCount: active.length,
      boardTotal: active.reduce((acc, o) => acc + o.value, 0),
    };
  }, [opportunities, effectiveStageIds, currentUserId]);

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
        setSearchQuery("");
        searchInputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        className="flex h-[calc(100vh-96px)] min-h-[560px] flex-col gap-4"
      >
        {/* Header & Toolbar */}
        <motion.div variants={sectionEnter} className="shrink-0">
          <ModuleCommandHeader
            title="Pipes"
            description="Execução visual do pipeline comercial."
            meta={`Funil ${activeFunnel.label} · ${myCount} meus · ${boardCount} no board`}
            chips={[
              {
                id: "value",
                label: `${formatCurrencyBRL(boardTotal)} em pipeline`,
                icon: <ArrowDownToLine className="h-3.5 w-3.5" />,
                tone: "info",
              },
              {
                id: "mine",
                label: `${myCount} meus`,
                icon: <CheckCircle2 className="h-3.5 w-3.5" />,
                tone: showOnlyMine ? "success" : "neutral",
              },
              {
                id: "stages",
                label: `${visibleStages.length} etapas visíveis`,
                icon: <Filter className="h-3.5 w-3.5" />,
                tone: "neutral",
              },
            ]}
            actions={
              <>
                {stageFilter && stageFilterLabel && (
                  <div className="flex items-center gap-1 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1.5">
                    <span className="text-[11px] font-medium text-brand-strong">
                      Etapa: {stageFilterLabel}
                    </span>
                    <button
                      onClick={() => router.replace("/pipes")}
                      className="text-brand/70 transition-colors hover:text-brand"
                      aria-label="Limpar filtro de etapa"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}

                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                  <Input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar cards..."
                    className="h-9 w-[220px] rounded-full pl-8 pr-8 font-body text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
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
                  <Filter className="mr-1.5 h-3.5 w-3.5" />
                  Filtros
                </Button>

                <Button
                  size="sm"
                  onClick={() => openDrawer("new-opportunity")}
                  className="h-9 rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800"
                >
                  <Plus className="mr-1.5 h-3.5 w-3.5" />
                  Novo Card
                </Button>
              </>
            }
          >
            <div className="min-w-0">
              <PipelineSwitcher
                selectedPipeline={activeFunnel}
                availablePipelines={funnels}
                hasActiveFilters={showOnlyMine || searchQuery.length > 0 || !!stageFilter}
                isAdmin={true}
                showOnlyMine={showOnlyMine}
                onToggleShowOnlyMine={() => setShowOnlyMine((prev) => !prev)}
                onPipelineChange={(pipelineId) => {
                  setSelectedFunnel(pipelineId);
                  if (showOnlyMine || searchQuery) {
                    setShowOnlyMine(false);
                    setSearchQuery("");
                  }
                }}
                onSettingsClick={() => setIsManageDrawerOpen(true)}
              />
              <p className="mt-0.5 font-body text-sm text-zinc-500">
                {myCount} meus · {formatCurrencyBRL(myTotal)}
                <span className="mx-1.5 text-zinc-300">|</span>
                {boardCount} total · {formatCurrencyBRL(boardTotal)}
              </p>
            </div>
          </ModuleCommandHeader>
        </motion.div>

        {/* Board */}
        <div
          className="premium-ambient premium-grain relative flex min-h-0 flex-1 items-stretch overflow-hidden rounded-[20px] border border-zinc-200/75 bg-white/68 p-3 shadow-[var(--shadow-premium-soft)] backdrop-blur-sm md:p-4"
          role="region"
          aria-label="Pipeline de vendas — arraste os cards entre as etapas"
        >
          <div
            ref={boardRef}
            className="flex flex-1 gap-4 overflow-x-auto scroll-smooth px-1 pb-1 md:px-2"
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
