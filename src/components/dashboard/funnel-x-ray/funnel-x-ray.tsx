"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Lightbulb,
  Loader2,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useActivityStore } from "@/stores/activity-store";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import type { FlowStageId, FunnelXRayState, ActionState } from "./funnel-config";
import {
  STAGE_TO_PIPELINE,
  buildStagesFromOpportunities,
  buildInsightsFromData,
} from "./funnel-config";
import { buildTransitions, formatCurrencyBRL } from "./funnel-utils";
import { FlowStepsConnected } from "./flow-steps-connected";
import { SummaryMiniCard } from "./summary-mini-card";
import { FunnelXRaySkeleton } from "./funnel-x-ray-skeleton";

export function FunnelXRay({ state = "ready" }: { state?: FunnelXRayState }) {
  const router = useRouter();
  const addActivity = useActivityStore((s) => s.addActivity);
  const [viewState, setViewState] = useState<FunnelXRayState>(state);
  const [actionState, setActionState] = useState<ActionState>("idle");
  const [activeStageId, setActiveStageId] = useState<FlowStageId | null>(null);
  const [createdCount, setCreatedCount] = useState(0);

  const {
    filteredOpportunities,
    openOpportunities,
    now,
    userId,
  } = useDashboardFilters();

  // ── Build stages and insights from real data ──────────────────────
  const stages = useMemo(
    () => buildStagesFromOpportunities(filteredOpportunities, now),
    [filteredOpportunities, now]
  );

  const insights = useMemo(
    () => buildInsightsFromData(stages, filteredOpportunities, now),
    [stages, filteredOpportunities, now]
  );

  const { riskValue, averageSpeedDays } = useMemo(() => {
    const openOpps = openOpportunities;
    const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

    const stalledOpps = openOpps.filter((o) => new Date(o.updatedAt) < fiveDaysAgo);
    const computedRiskValue = stalledOpps.reduce((sum, o) => sum + (o.value || 0), 0);

    const wonOpps = filteredOpportunities.filter((o) => o.status === "won");
    let totalDays = 0;
    wonOpps.forEach((o) => {
      const created = new Date(o.createdAt).getTime();
      const closed = new Date(o.updatedAt).getTime();
      totalDays += Math.max(1, Math.round((closed - created) / (1000 * 60 * 60 * 24)));
    });
    const computedAvgDays = wonOpps.length > 0 ? Math.round(totalDays / wonOpps.length) : 0;

    return { riskValue: computedRiskValue, averageSpeedDays: computedAvgDays };
  }, [filteredOpportunities, openOpportunities, now]);

  const transitions = useMemo(() => buildTransitions(stages), [stages]);
  const hasEnoughData = stages.length >= 2 && stages.some((stage) => stage.volume > 0);

  const bottleneck = useMemo(() => {
    if (transitions.length === 0) return null;
    return transitions.reduce((min, current) =>
      current.conversion < min.conversion ? current : min
    );
  }, [transitions]);

  const criticalStageId = bottleneck?.to.id ?? stages[0]?.id ?? null;
  const bottleneckDrop = bottleneck ? Math.max(0, 100 - bottleneck.conversion) : 0;
  const bottleneckStalledCount = bottleneck?.to.stalledCount ?? 0;
  const bottleneckStalledDays = bottleneck?.to.stalledDays ?? 0;

  const activeStage = stages.find((stage) => stage.id === activeStageId) ?? null;
  const activeInsight = activeStage ? insights[activeStage.id] : null;
  const highlightText = activeInsight?.highlight ?? "Sem destaque para a etapa selecionada";
  const recommendationText =
    activeInsight?.recommendation ??
    "Sem recomendação disponível para a etapa selecionada.";

  // ── Dynamic highlight card ───────────────────────────────────────
  const bestStage = useMemo(() => {
    if (transitions.length === 0) return null;
    return transitions.reduce((best, current) =>
      current.conversion > best.conversion ? current : best
    );
  }, [transitions]);

  const highlightConversion = bestStage ? bestStage.conversion : 0;
  const highlightStageName = bestStage?.from.label ?? "—";

  useEffect(() => {
    setViewState(state);
  }, [state]);

  useEffect(() => {
    if (criticalStageId) {
      setActiveStageId(criticalStageId);
    }
  }, [criticalStageId]);

  useEffect(() => {
    if (actionState !== "success") return;
    const timer = window.setTimeout(() => setActionState("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [actionState]);

  function openPipeline(stageId?: FlowStageId) {
    if (!stageId) {
      router.push("/pipes");
      return;
    }
    const stageParam = STAGE_TO_PIPELINE[stageId];
    router.push(`/pipes?stage=${stageParam}`);
  }

  function handleRecommendedAction() {
    if (actionState === "loading" || !activeStage) return;
    setActionState("loading");

    // Find stalled opportunities in the active stage and create follow-up activities
    const pipelineStage = STAGE_TO_PIPELINE[activeStage.id];
    const stalledThreshold = 5 * 24 * 60 * 60 * 1000;
    const stalledOpps = openOpportunities
      .filter(
        (o) =>
          o.stage === pipelineStage &&
          now.getTime() - new Date(o.updatedAt).getTime() > stalledThreshold
      )
      .slice(0, 3);

    // Create real follow-up activities in the store
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    let count = 0;
    for (const opp of stalledOpps) {
      addActivity({
        title: `Follow-up: ${opp.title || opp.clientName}`,
        description: `Cobrar feedback — oportunidade parada há +${Math.round(
          (now.getTime() - new Date(opp.updatedAt).getTime()) / (1000 * 60 * 60 * 24)
        )} dias`,
        type: "call",
        status: "pending",
        dueDate: tomorrowStr,
        dueTime: "10:00",
        opportunityId: opp.id,
        clientId: opp.clientId || "",
        responsibleId: userId || opp.responsibleId,
        responsibleName: opp.responsibleName,
      });
      count++;
    }

    // If no stalled opps, create a general follow-up for the stage
    if (count === 0 && openOpportunities.some((o) => o.stage === pipelineStage)) {
      const firstOpp = openOpportunities.find((o) => o.stage === pipelineStage)!;
      addActivity({
        title: `Follow-up: ${firstOpp.title || firstOpp.clientName}`,
        description: `Follow-up gerado automaticamente para etapa ${activeStage.label}`,
        type: "call",
        status: "pending",
        dueDate: tomorrowStr,
        dueTime: "10:00",
        opportunityId: firstOpp.id,
        clientId: firstOpp.clientId || "",
        responsibleId: userId || firstOpp.responsibleId,
        responsibleName: firstOpp.responsibleName,
      });
      count = 1;
    }

    setCreatedCount(count);
    setActionState(count > 0 ? "success" : "error");
  }

  function handleRetry() {
    setViewState("loading");
    window.setTimeout(() => {
      setViewState("ready");
    }, 220);
  }

  return (
    <BentoCard
      noPadding
      elevated
      hoverable
      className="premium-panel min-h-0 overflow-hidden border-zinc-200/80 bg-white/86 shadow-[0_20px_32px_-28px_rgba(15,23,42,0.45)]"
    >
      <div className="border-b border-zinc-200/75 bg-white/85 px-3.5 py-3 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-heading text-[1.02rem] font-semibold text-zinc-900">
              Raio X do Funil
            </h3>
            <p className="truncate text-xs text-zinc-500">
              Fluxo de conversão, gargalos e ação recomendada para hoje
            </p>
          </div>
          <motion.button
            type="button"
            onClick={() => openPipeline(activeStage?.id)}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold text-zinc-700 transition-all duration-[120ms] ease-out hover:-translate-y-px hover:bg-zinc-100 hover:text-zinc-900"
          >
            <span className="underline-offset-4 transition-all duration-[120ms] group-hover:underline">
              Ver Pipeline
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>

      {viewState === "error" && (
        <div className="mx-5 mt-4 rounded-xl border border-red-200/80 bg-red-50/70 px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-xs font-medium text-red-700">
              <AlertTriangle className="h-3.5 w-3.5" />
              Não foi possível carregar o Raio X agora.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="text-xs font-semibold text-red-700 underline underline-offset-4 transition-colors hover:text-red-800"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      )}

      {viewState === "loading" && <FunnelXRaySkeleton />}

      {viewState === "ready" && !hasEnoughData && (
        <div className="p-5">
          <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 p-4">
            <p className="text-sm font-semibold text-zinc-900">
              Sem dados suficientes para o Raio X
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Cadastre oportunidades para gerar conversão e gargalos acionáveis.
            </p>
            <Button
              size="sm"
              className="mt-3 h-8 rounded-full bg-zinc-900 text-xs text-white hover:bg-zinc-800"
              onClick={() => openPipeline()}
            >
              Ver pipeline
            </Button>
          </div>
        </div>
      )}

      {viewState === "ready" && hasEnoughData && activeStage && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-12"
        >
          <div className="space-y-3 lg:col-span-7">
            <TooltipProvider delayDuration={80}>
              <FlowStepsConnected
                stages={stages}
                transitions={transitions}
                activeStageId={activeStage.id}
                bottleneckToStageId={bottleneck?.to.id ?? null}
                onHoverStage={setActiveStageId}
                onOpenStage={openPipeline}
              />
            </TooltipProvider>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.14 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <SummaryMiniCard
                    icon={<Gauge className="h-3.5 w-3.5 text-brand" />}
                    label="Velocidade média"
                    value={averageSpeedDays > 0 ? `${averageSpeedDays} dias` : "—"}
                    helper="Da entrada ao fechamento"
                    onClick={() => openPipeline()}
                  />
                  <SummaryMiniCard
                    icon={<AlertTriangle className="h-3.5 w-3.5 text-amber-600" />}
                    label="Valor em risco"
                    value={formatCurrencyBRL(riskValue)}
                    helper="Deals sem retorno > 5 dias"
                    onClick={() => openPipeline(activeStage?.id)}
                  />
                  <SummaryMiniCard
                    icon={<Lightbulb className="h-3.5 w-3.5 text-emerald-600" />}
                    label="Etapa crítica hoje"
                    value={bottleneck?.to.label ?? "—"}
                    helper={`${bottleneckDrop}% de queda`}
                    onClick={() => openPipeline(bottleneck?.to.id)}
                  />
                </div>

                <div className="rounded-xl border border-zinc-200/80 bg-white/80 p-3.5">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Oportunidades em risco
                    </p>
                    <button
                      type="button"
                      onClick={() => openPipeline(activeStage.id)}
                      className="text-[11px] font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-strong hover:underline"
                    >
                      Ver etapa
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {activeInsight && activeInsight.riskDeals.length > 0 ? (
                      activeInsight.riskDeals.slice(0, 3).map((deal) => (
                        <div
                          key={deal}
                          className="flex items-center justify-between rounded-lg border border-zinc-200/70 bg-zinc-50/70 px-2.5 py-2"
                        >
                          <span className="truncate text-xs font-medium text-zinc-700">
                            {deal}
                          </span>
                          <span className="ml-3 text-[10px] text-zinc-500">
                            +{activeStage.stalledDays} dias
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="py-2 text-center text-xs text-zinc-400">
                        Nenhuma oportunidade em risco nesta etapa
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-3 lg:col-span-5">
            <div className="rounded-xl border border-red-200/75 bg-red-50/60 p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-red-700">
                  TOP GARGALO
                </span>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </div>
              <p className="text-[1rem] font-semibold text-zinc-900">
                Queda de <span className="text-red-600">{bottleneckDrop}%</span> em{" "}
                {bottleneck?.to.label ?? "—"}
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                {bottleneckStalledCount > 0
                  ? `${bottleneckStalledCount} oportunidades paradas há +${bottleneckStalledDays} dias.`
                  : "Sem oportunidades paradas nesta etapa."}
              </p>
              <button
                type="button"
                onClick={() => openPipeline(bottleneck?.to.id)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-700 underline-offset-4 transition-colors hover:text-red-800 hover:underline"
              >
                Ver lista
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="rounded-xl border border-emerald-200/75 bg-emerald-50/65 p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                  DESTAQUE
                </span>
                <ArrowUpRight className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-[1rem] font-semibold text-zinc-900">
                {highlightConversion > 0 ? (
                  <>
                    Melhor conversão:{" "}
                    <span className="text-emerald-600">{highlightConversion}%</span> em{" "}
                    {highlightStageName}
                  </>
                ) : (
                  "Sem dados de conversão suficientes"
                )}
              </p>
              <p className="mt-1 text-xs text-zinc-600">{highlightText}</p>
              <button
                type="button"
                onClick={() => openPipeline(bestStage?.from.id as FlowStageId | undefined)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline"
              >
                Ver motivo
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="rounded-xl border border-zinc-200/80 bg-white/85 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-zinc-900">
                  Ação recomendada
                </h4>
                <Sparkles className="h-4 w-4 text-brand" />
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.14 }}
                  className="text-xs leading-relaxed text-zinc-600"
                >
                  {recommendationText}
                </motion.p>
              </AnimatePresence>

              <div className="mt-3 space-y-2">
                <Button
                  onClick={handleRecommendedAction}
                  disabled={actionState === "loading"}
                  className="h-9 w-full rounded-full bg-zinc-900 text-xs font-semibold text-white hover:bg-zinc-800 active:scale-[0.99]"
                >
                  {actionState === "loading" ? (
                    <>
                      <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                      Criando atividades...
                    </>
                  ) : (
                    "Cobrar feedbacks"
                  )}
                </Button>
                <button
                  type="button"
                  onClick={() => router.push("/intelligence")}
                  className="w-full text-center text-xs font-semibold text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline active:scale-[0.99]"
                >
                  Gerar mensagens via IA
                </button>
              </div>

              <AnimatePresence>
                {actionState === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.09 }}
                    className="mt-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700"
                  >
                    {createdCount} atividade{createdCount !== 1 ? "s" : ""} criada{createdCount !== 1 ? "s" : ""}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {actionState === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="mt-2 rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-xs text-red-700"
                  >
                    Nenhuma oportunidade parada encontrada nesta etapa.
                    <button
                      type="button"
                      onClick={() => openPipeline(activeStage?.id)}
                      className="ml-1.5 font-semibold underline underline-offset-4"
                    >
                      Ver pipeline
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </BentoCard>
  );
}
