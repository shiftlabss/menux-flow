"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useActivityStore } from "@/stores/activity-store";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import type { FlowStageId, FunnelXRayState, ActionState } from "./funnel-config";
import {
  FLOW_STAGE_LABELS,
  FLOW_STAGE_ORDER,
  PIPELINE_TO_FLOW,
  STAGE_TO_PIPELINE,
  buildStagesFromOpportunities,
} from "./funnel-config";
import { buildTransitions } from "./funnel-utils";
import { FlowStepsConnected } from "./flow-steps-connected";

const STALLED_OPPORTUNITY_DAYS = 5;
const DAY_MS = 24 * 60 * 60 * 1000;

type InsightCardStatus = "default" | "loading" | "error";
type InsightCardTone = "neutral" | "danger" | "success";

interface InsightCardAction {
  label: string;
  onAction: () => void;
  loading?: boolean;
  disabled?: boolean;
  asButton?: boolean;
}

interface InsightCardSecondaryAction {
  label: string;
  onAction: () => void;
  loading?: boolean;
}

function parseDashboardStageParam(stageParam: string | null): FlowStageId | null {
  if (!stageParam) return null;

  if (FLOW_STAGE_ORDER.includes(stageParam as FlowStageId)) {
    return stageParam as FlowStageId;
  }

  return PIPELINE_TO_FLOW[stageParam] ?? null;
}

function InsightLineCard({
  tag,
  headline,
  description,
  meta,
  primaryAction,
  secondaryAction,
  onRetry,
  status = "default",
  tone = "neutral",
  icon,
  feedback,
}: {
  tag: string;
  headline: string;
  description: string;
  meta?: string;
  primaryAction: InsightCardAction;
  secondaryAction?: InsightCardSecondaryAction;
  onRetry: () => void;
  status?: InsightCardStatus;
  tone?: InsightCardTone;
  icon?: React.ReactNode;
  feedback?: React.ReactNode;
}) {
  const isInteractive = status === "default";

  const toneClass =
    tone === "danger"
      ? "border-red-200/80 bg-red-50/55 hover:border-red-300/90"
      : tone === "success"
        ? "border-emerald-200/80 bg-emerald-50/55 hover:border-emerald-300/90"
        : "border-zinc-200/80 bg-white/85 hover:border-zinc-300/90";

  function handleCardAction() {
    if (!isInteractive || primaryAction.disabled || primaryAction.loading) return;
    primaryAction.onAction();
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (!isInteractive || primaryAction.disabled || primaryAction.loading) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      primaryAction.onAction();
    }
  }

  return (
    <motion.article
      onClick={handleCardAction}
      onKeyDown={handleCardKeyDown}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : -1}
      aria-disabled={!isInteractive}
      whileTap={isInteractive ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={cn(
        "flex min-h-[186px] flex-col rounded-[20px] border p-4",
        "shadow-[0_10px_20px_-18px_rgba(15,23,42,0.5)]",
        "transition-[background-color,border-color,box-shadow,opacity,color] duration-140 ease-out",
        toneClass,
        isInteractive && "cursor-pointer hover:shadow-[0_14px_24px_-18px_rgba(15,23,42,0.55)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"
      )}
    >
      {status === "loading" ? (
        <div className="flex h-full flex-col gap-3">
          <Skeleton className="h-5 w-28 rounded-md" />
          <Skeleton className="h-8 w-4/5 rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <div className="mt-auto">
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>
        </div>
      ) : status === "error" ? (
        <div className="flex h-full flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
            {tag}
          </p>
          <p className="mt-3 text-sm font-semibold text-zinc-900">Erro ao carregar este insight.</p>
          <p className="mt-1 text-xs text-zinc-500">Os dados não puderam ser processados agora.</p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onRetry();
            }}
            className="mt-auto w-fit text-xs font-semibold text-brand underline underline-offset-4"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
              {tag}
            </p>
            {icon ? <span className="text-zinc-500">{icon}</span> : null}
          </div>

          <p className="mt-2 truncate text-[1.18rem] font-bold leading-tight text-zinc-900">
            {headline}
          </p>

          <div className="mt-2">
            <p className="truncate text-[13px] text-zinc-600">{description}</p>
            {meta ? <p className="mt-0.5 text-[11px] text-zinc-500">{meta}</p> : null}
          </div>

          <div className="mt-auto pt-3">
            {feedback ? <div className="mb-2 text-[11px]">{feedback}</div> : null}

            {primaryAction.asButton ? (
              <button
                type="button"
                disabled={Boolean(primaryAction.disabled || primaryAction.loading)}
                onClick={(event) => {
                  event.stopPropagation();
                  if (primaryAction.disabled || primaryAction.loading) return;
                  primaryAction.onAction();
                }}
                className="h-9 w-full rounded-full bg-zinc-900 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-65"
              >
                {primaryAction.label}
              </button>
            ) : (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  primaryAction.onAction();
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand underline-offset-4 transition-colors hover:text-brand-strong hover:underline"
              >
                {primaryAction.label}
                <ArrowRight className="h-3 w-3" />
              </button>
            )}

            {secondaryAction ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  secondaryAction.onAction();
                }}
                disabled={Boolean(secondaryAction.loading)}
                className="mt-2 w-full text-center text-xs font-semibold text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-800 hover:underline disabled:cursor-not-allowed disabled:opacity-65"
              >
                {secondaryAction.label}
              </button>
            ) : null}
          </div>
        </>
      )}
    </motion.article>
  );
}

export function FunnelXRay({ state = "ready" }: { state?: FunnelXRayState }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addActivity = useActivityStore((store) => store.addActivity);
  const [viewState, setViewState] = useState<FunnelXRayState>(state);
  const [actionState, setActionState] = useState<ActionState>("idle");
  const [messageActionState, setMessageActionState] = useState<ActionState>("idle");
  const [createdCount, setCreatedCount] = useState(0);

  const {
    filteredOpportunities,
    openOpportunities,
    now,
    userId,
  } = useDashboardFilters();

  const stages = useMemo(
    () => buildStagesFromOpportunities(filteredOpportunities, now),
    [filteredOpportunities, now]
  );

  const transitions = useMemo(() => buildTransitions(stages), [stages]);
  const hasEnoughData = stages.length >= 2 && stages.some((stage) => stage.volume > 0);

  const selectedStageId = useMemo(
    () =>
      parseDashboardStageParam(
        searchParams.get("stage") ?? searchParams.get("stageId")
      ),
    [searchParams]
  );

  const selectedStage = useMemo(() => {
    if (!selectedStageId) return null;
    return stages.find((stage) => stage.id === selectedStageId) ?? null;
  }, [selectedStageId, stages]);

  const bottleneck = useMemo(() => {
    if (transitions.length === 0) return null;
    return transitions.reduce((min, current) =>
      current.conversion < min.conversion ? current : min
    );
  }, [transitions]);

  const criticalStage = useMemo(() => {
    const criticalStageId = bottleneck?.to.id ?? stages[0]?.id ?? null;
    if (!criticalStageId) return null;
    return stages.find((stage) => stage.id === criticalStageId) ?? null;
  }, [bottleneck, stages]);

  const scopeStage = selectedStage ?? criticalStage;
  const insightScopeKey = selectedStage?.id ?? "all";

  const bestStage = useMemo(() => {
    if (transitions.length === 0) return null;
    return transitions.reduce((best, current) =>
      current.conversion > best.conversion ? current : best
    );
  }, [transitions]);

  const highlightConversion = bestStage?.conversion ?? 0;
  const highlightStageName = bestStage?.from.label ?? "—";
  const highlightReason = bestStage
    ? `${bestStage.advanced} de ${bestStage.base} oportunidades avançaram no período.`
    : "Sem base comparável no período.";

  const riskData = useMemo(() => {
    const threshold = now.getTime() - STALLED_OPPORTUNITY_DAYS * DAY_MS;
    const selectedPipelineStage = selectedStage
      ? STAGE_TO_PIPELINE[selectedStage.id]
      : null;

    const scopedOpps = openOpportunities.filter((opportunity) => {
      if (!selectedPipelineStage) return true;
      return opportunity.stage === selectedPipelineStage;
    });

    const stalledOpps = scopedOpps
      .filter((opportunity) => new Date(opportunity.updatedAt).getTime() < threshold)
      .sort(
        (first, second) =>
          new Date(first.updatedAt).getTime() - new Date(second.updatedAt).getTime()
      );

    const topDeal = stalledOpps[0] ?? null;
    const total = stalledOpps.length;

    if (!topDeal) {
      const fallbackFlowId = selectedStage?.id ?? criticalStage?.id ?? null;
      return {
        topDealLabel: "Sem oportunidades em risco hoje",
        description: selectedStage
          ? `Etapa ${selectedStage.label} sem alertas críticos.`
          : "Sua carteira está sem riscos críticos no momento.",
        meta: "Total em risco: 0",
        total,
        stageId: fallbackFlowId,
      };
    }

    const topDealFlowId = PIPELINE_TO_FLOW[topDeal.stage] ?? selectedStage?.id ?? null;
    const stageLabel = topDealFlowId
      ? FLOW_STAGE_LABELS[topDealFlowId]
      : "Etapa atual";
    const stalledDays = Math.max(
      1,
      Math.round((now.getTime() - new Date(topDeal.updatedAt).getTime()) / DAY_MS)
    );

    return {
      topDealLabel: topDeal.title || topDeal.clientName,
      description: `${stalledDays} dias sem retorno · ${stageLabel}`,
      meta: `Total em risco: ${total}`,
      total,
      stageId: topDealFlowId,
    };
  }, [openOpportunities, now, selectedStage, criticalStage]);

  const bottleneckDrop = bottleneck ? Math.max(0, 100 - bottleneck.conversion) : 0;

  useEffect(() => {
    setViewState(state);
  }, [state]);

  useEffect(() => {
    setActionState("idle");
    setMessageActionState("idle");
    setCreatedCount(0);
  }, [selectedStage?.id]);

  function setStageSelection(nextStageId: FlowStageId | null) {
    const current = selectedStage?.id ?? null;
    if (current === nextStageId) return;

    const params = new URLSearchParams(searchParams.toString());
    if (nextStageId) {
      params.set("stage", STAGE_TO_PIPELINE[nextStageId]);
    } else {
      params.delete("stage");
      params.delete("stageId");
    }

    const serialized = params.toString();
    router.replace(serialized ? `${pathname}?${serialized}` : pathname, {
      scroll: false,
    });
  }

  function openPipeline({
    stageId,
    filters,
  }: {
    stageId?: FlowStageId;
    filters?: "risk" | "stalled" | "no_activity" | "sla_overdue" | "sla_risk";
  } = {}) {
    const params = new URLSearchParams();

    if (stageId) {
      params.set("stageId", STAGE_TO_PIPELINE[stageId]);
    }

    if (filters) {
      params.set("filters", filters);
    }

    const serialized = params.toString();
    router.push(serialized ? `/pipes?${serialized}` : "/pipes");
  }

  function openHighlightReason() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "insights");
    params.set("focus", `best-conversion-${bestStage?.from.id ?? "funnel"}`);

    const serialized = params.toString();
    router.push(serialized ? `${pathname}?${serialized}` : pathname);
  }

  function openActivitiesFromAction() {
    router.push("/activities?statuses=pending,overdue&q=Follow-up");
  }

  function openDrafts() {
    router.push("/intelligence?source=funnel&view=drafts");
  }

  function handleRecommendedAction() {
    if (actionState === "loading") return;
    if (!scopeStage) {
      setActionState("error");
      return;
    }

    setActionState("loading");

    const pipelineStage = STAGE_TO_PIPELINE[scopeStage.id];
    const stalledThreshold = STALLED_OPPORTUNITY_DAYS * DAY_MS;
    const stalledOpps = openOpportunities
      .filter(
        (opportunity) =>
          opportunity.stage === pipelineStage &&
          now.getTime() - new Date(opportunity.updatedAt).getTime() > stalledThreshold
      )
      .slice(0, 3);

    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    let count = 0;

    for (const opportunity of stalledOpps) {
      addActivity({
        title: `Follow-up: ${opportunity.title || opportunity.clientName}`,
        description: `Cobrar feedback — oportunidade parada há +${Math.round(
          (now.getTime() - new Date(opportunity.updatedAt).getTime()) / DAY_MS
        )} dias`,
        type: "call",
        status: "pending",
        dueDate: tomorrowStr,
        dueTime: "10:00",
        opportunityId: opportunity.id,
        clientId: opportunity.clientId || "",
        responsibleId: userId || opportunity.responsibleId,
        responsibleName: opportunity.responsibleName,
      });
      count += 1;
    }

    if (count === 0) {
      setCreatedCount(0);
      setActionState("error");
      return;
    }

    setCreatedCount(count);
    setActionState("success");
  }

  function handleGenerateMessages() {
    if (messageActionState === "loading") return;

    if (!scopeStage) {
      setMessageActionState("error");
      return;
    }

    setMessageActionState("loading");
    window.setTimeout(() => {
      setMessageActionState("success");
    }, 450);
  }

  function handleRetry() {
    setViewState("loading");
    window.setTimeout(() => {
      setViewState("ready");
    }, 260);
  }

  return (
    <BentoCard
      noPadding
      elevated
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
            onClick={() => openPipeline({ stageId: selectedStage?.id })}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold text-zinc-700 transition-[background-color,color,border-color,opacity] duration-120 ease-out hover:bg-zinc-100 hover:text-zinc-900"
          >
            <span className="underline-offset-4 transition-colors duration-120 group-hover:underline">
              Ver Pipeline
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>

      {viewState === "ready" && !hasEnoughData ? (
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
      ) : null}

      {viewState === "loading" || viewState === "error" ? (
        <div className="p-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            <InsightLineCard
              tag="Oportunidades em risco"
              headline=""
              description=""
              primaryAction={{ label: "Ver etapa", onAction: () => {} }}
              onRetry={handleRetry}
              status={viewState === "loading" ? "loading" : "error"}
            />
            <InsightLineCard
              tag="Top gargalo"
              headline=""
              description=""
              primaryAction={{ label: "Ver lista", onAction: () => {} }}
              onRetry={handleRetry}
              status={viewState === "loading" ? "loading" : "error"}
            />
            <InsightLineCard
              tag="Destaque"
              headline=""
              description=""
              primaryAction={{ label: "Ver motivo", onAction: () => {} }}
              onRetry={handleRetry}
              status={viewState === "loading" ? "loading" : "error"}
            />
            <InsightLineCard
              tag="Ação recomendada"
              headline=""
              description=""
              primaryAction={{ label: "Cobrar feedbacks", onAction: () => {}, asButton: true }}
              secondaryAction={{ label: "Gerar mensagens via IA", onAction: () => {} }}
              onRetry={handleRetry}
              status={viewState === "loading" ? "loading" : "error"}
            />
          </div>
        </div>
      ) : null}

      {viewState === "ready" && hasEnoughData ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex flex-col gap-5 p-5"
        >
          <div className="space-y-4">
            <TooltipProvider delayDuration={80}>
              <FlowStepsConnected
                stages={stages}
                transitions={transitions}
                selectedStageId={selectedStage?.id ?? null}
                bottleneckToStageId={bottleneck?.to.id ?? null}
                onSelectStage={setStageSelection}
              />
            </TooltipProvider>

            {selectedStage ? (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/70 px-3 py-2">
                <p className="text-xs text-zinc-600">
                  Exibindo insights da etapa:{" "}
                  <span className="font-semibold text-zinc-900">{selectedStage.label}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setStageSelection(null)}
                  className="text-xs font-semibold text-brand underline underline-offset-4"
                >
                  Limpar seleção
                </button>
              </div>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.div
                key={insightScopeKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.14 }}
                className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4"
              >
                <InsightLineCard
                  tag="Oportunidades em risco"
                  headline={riskData.topDealLabel}
                  description={riskData.description}
                  meta={riskData.meta}
                  primaryAction={{
                    label: riskData.total > 0 ? "Ver etapa" : "Ver pipeline",
                    onAction: () =>
                      riskData.total > 0
                        ? openPipeline({ stageId: riskData.stageId ?? undefined, filters: "risk" })
                        : openPipeline({ stageId: selectedStage?.id }),
                  }}
                  onRetry={handleRetry}
                  icon={<AlertTriangle className="h-4 w-4 text-amber-600" />}
                />

                <InsightLineCard
                  tag="Top gargalo"
                  headline={
                    bottleneck
                      ? `Queda de ${bottleneckDrop}% em ${bottleneck.to.label}`
                      : "Sem gargalos relevantes no período"
                  }
                  description={
                    bottleneck
                      ? `${bottleneck.to.stalledCount} oportunidades paradas há +${bottleneck.to.stalledDays} dias`
                      : "Nenhuma etapa com queda crítica no período atual."
                  }
                  primaryAction={{
                    label: bottleneck ? "Ver lista" : "Ver pipeline",
                    onAction: () =>
                      bottleneck
                        ? openPipeline({ stageId: bottleneck.to.id, filters: "stalled" })
                        : openPipeline(),
                  }}
                  onRetry={handleRetry}
                  tone={bottleneck ? "danger" : "neutral"}
                  icon={<TrendingDown className="h-4 w-4 text-red-600" />}
                />

                <InsightLineCard
                  tag="Destaque"
                  headline={
                    bestStage && bestStage.base > 0
                      ? `Melhor conversão: ${highlightConversion}% em ${highlightStageName}`
                      : "Sem base comparável no período"
                  }
                  description={highlightReason}
                  primaryAction={{
                    label: bestStage && bestStage.base > 0 ? "Ver motivo" : "Ver pipeline",
                    onAction: () =>
                      bestStage && bestStage.base > 0 ? openHighlightReason() : openPipeline(),
                  }}
                  onRetry={handleRetry}
                  tone={bestStage && bestStage.base > 0 ? "success" : "neutral"}
                  icon={<ArrowUpRight className="h-4 w-4 text-emerald-600" />}
                />

                <InsightLineCard
                  tag="Ação recomendada"
                  headline={scopeStage ? "Cobrar feedbacks" : "Nenhuma ação recomendada agora"}
                  description={
                    scopeStage
                      ? `Atenção: ${riskData.total} oportunidades paradas. Priorizar follow-up hoje.`
                      : "Sem oportunidades paradas críticas neste momento."
                  }
                  primaryAction={{
                    label:
                      actionState === "loading"
                        ? "Criando ações..."
                        : scopeStage
                          ? "Cobrar feedbacks"
                          : "Ver pipeline",
                    onAction: () =>
                      scopeStage ? handleRecommendedAction() : openPipeline(),
                    asButton: true,
                    disabled: actionState === "loading",
                    loading: actionState === "loading",
                  }}
                  secondaryAction={{
                    label:
                      messageActionState === "loading"
                        ? "Gerando mensagens..."
                        : "Gerar mensagens via IA",
                    onAction: handleGenerateMessages,
                    loading: messageActionState === "loading",
                  }}
                  feedback={
                    <>
                      {actionState === "success" ? (
                        <p className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">
                          Ações criadas ({createdCount}).{" "}
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              openActivitiesFromAction();
                            }}
                            className="font-semibold underline underline-offset-4"
                          >
                            Ver atividades
                          </button>
                        </p>
                      ) : null}

                      {actionState === "error" ? (
                        <p className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-red-700">
                          Não foi possível criar ações agora.{" "}
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRecommendedAction();
                            }}
                            className="font-semibold underline underline-offset-4"
                          >
                            Tentar novamente
                          </button>
                        </p>
                      ) : null}

                      {messageActionState === "success" ? (
                        <p className="mt-1 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-zinc-700">
                          Mensagens geradas. {" "}
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              openDrafts();
                            }}
                            className="font-semibold underline underline-offset-4"
                          >
                            Abrir rascunhos
                          </button>
                        </p>
                      ) : null}

                      {messageActionState === "error" ? (
                        <p className="mt-1 rounded-md border border-red-200 bg-red-50 px-2 py-1 text-red-700">
                          Falha ao gerar mensagens. {" "}
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleGenerateMessages();
                            }}
                            className="font-semibold underline underline-offset-4"
                          >
                            Tentar novamente
                          </button>
                        </p>
                      ) : null}
                    </>
                  }
                  onRetry={handleRetry}
                  icon={<Sparkles className="h-4 w-4 text-brand" />}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      ) : null}
    </BentoCard>
  );
}
