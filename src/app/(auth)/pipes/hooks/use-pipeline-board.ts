"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { Opportunity, PipelineStage } from "@/types";
import { calculateSlaDeadline, PIPELINE_STAGE_ORDER } from "@/lib/business-rules";
import { validateStageTransition } from "../lib/pipeline-validation";
import type { FunnelDefinition } from "../lib/pipeline-config";

interface UsePipelineBoardOptions {
  localOpportunities: Opportunity[];
  setLocalOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>;
  activeFunnel: FunnelDefinition;
  announce: (message: string) => void;
}

const AUTO_SCROLL_EDGE_PX = 96;
const AUTO_SCROLL_MAX_DELTA = 22;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getAutoScrollDelta(
  pointer: number,
  start: number,
  end: number
) {
  if (pointer < start + AUTO_SCROLL_EDGE_PX) {
    const distance = pointer - start;
    const intensity = 1 - clamp(distance, 0, AUTO_SCROLL_EDGE_PX) / AUTO_SCROLL_EDGE_PX;
    return -Math.ceil(intensity * AUTO_SCROLL_MAX_DELTA);
  }

  if (pointer > end - AUTO_SCROLL_EDGE_PX) {
    const distance = end - pointer;
    const intensity = 1 - clamp(distance, 0, AUTO_SCROLL_EDGE_PX) / AUTO_SCROLL_EDGE_PX;
    return Math.ceil(intensity * AUTO_SCROLL_MAX_DELTA);
  }

  return 0;
}

function resolveInsertIndexForEmptyStage(
  opportunities: Opportunity[],
  targetStage: PipelineStage,
  stageOrder: PipelineStage[]
) {
  const targetStageIndex = stageOrder.indexOf(targetStage);
  if (targetStageIndex === -1) return opportunities.length;

  for (let idx = targetStageIndex - 1; idx >= 0; idx -= 1) {
    const prevStage = stageOrder[idx];
    for (let i = opportunities.length - 1; i >= 0; i -= 1) {
      if (opportunities[i].stage === prevStage) {
        return i + 1;
      }
    }
  }

  for (let idx = targetStageIndex + 1; idx < stageOrder.length; idx += 1) {
    const nextStage = stageOrder[idx];
    const nextIndex = opportunities.findIndex((op) => op.stage === nextStage);
    if (nextIndex !== -1) return nextIndex;
  }

  return opportunities.length;
}

export function usePipelineBoard({
  localOpportunities,
  setLocalOpportunities,
  activeFunnel,
  announce,
}: UsePipelineBoardOptions) {
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  const [draggingCardStage, setDraggingCardStage] = useState<PipelineStage | null>(null);
  const [dragOverStage, setDragOverStage] = useState<PipelineStage | null>(null);
  const [dropIndicator, setDropIndicator] = useState<{
    stage: PipelineStage;
    index: number;
  } | null>(null);
  const [columnError, setColumnError] = useState<{
    stage: PipelineStage;
    message: string;
  } | null>(null);
  const [successFeedback, setSuccessFeedback] = useState<{
    stage: PipelineStage;
    message: string;
  } | null>(null);
  const dragCardRef = useRef<Opportunity | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const autoScrollStateRef = useRef<{
    clientX: number;
    clientY: number;
    horizontalContainer: HTMLElement | null;
    verticalContainer: HTMLElement | null;
  } | null>(null);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollFrameRef.current !== null) {
      window.cancelAnimationFrame(autoScrollFrameRef.current);
      autoScrollFrameRef.current = null;
    }
    autoScrollStateRef.current = null;
  }, []);

  const runAutoScroll = useCallback(() => {
    const tick = () => {
      const state = autoScrollStateRef.current;
      if (!state) {
        autoScrollFrameRef.current = null;
        return;
      }

      const { clientX, clientY, horizontalContainer, verticalContainer } = state;
      let shouldKeepLooping = false;

      if (verticalContainer) {
        const rect = verticalContainer.getBoundingClientRect();
        const deltaY = getAutoScrollDelta(clientY, rect.top, rect.bottom);
        if (deltaY !== 0) {
          verticalContainer.scrollTop += deltaY;
          shouldKeepLooping = true;
        }
      }

      if (horizontalContainer) {
        const rect = horizontalContainer.getBoundingClientRect();
        const deltaX = getAutoScrollDelta(clientX, rect.left, rect.right);
        if (deltaX !== 0) {
          horizontalContainer.scrollLeft += deltaX;
          shouldKeepLooping = true;
        }
      }

      if (shouldKeepLooping || autoScrollStateRef.current !== null) {
        autoScrollFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      autoScrollFrameRef.current = null;
    };

    tick();
  }, []);

  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, [stopAutoScroll]);

  const handleDragStart = useCallback(
    (e: React.DragEvent, opportunity: Opportunity) => {
      setDraggingCardId(opportunity.id);
      setDraggingCardStage(opportunity.stage);
      dragCardRef.current = opportunity;
      autoScrollStateRef.current = null;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", opportunity.id);
      document.body.style.cursor = "grabbing";
      announce(
        `Arrastando card ${opportunity.title}. Solte em uma etapa para mover.`
      );
    },
    [announce]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent, stage: PipelineStage) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDragOverStage(stage);

      const column = e.currentTarget as HTMLElement;
      const cardElements = column.querySelectorAll("[data-card-index]");
      let insertIndex = cardElements.length;

      for (let i = 0; i < cardElements.length; i++) {
        const rect = cardElements[i].getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
          insertIndex = i;
          break;
        }
      }

      setDropIndicator({ stage, index: insertIndex });

      const target = e.currentTarget as HTMLElement;
      const verticalContainer = target.closest("[data-pipe-column-scroll]") as HTMLElement | null;
      const horizontalContainer = target.closest("[data-pipe-board-scroll]") as HTMLElement | null;

      autoScrollStateRef.current = {
        clientX: e.clientX,
        clientY: e.clientY,
        horizontalContainer,
        verticalContainer,
      };

      if (autoScrollFrameRef.current === null) {
        autoScrollFrameRef.current = window.requestAnimationFrame(runAutoScroll);
      }
    },
    [runAutoScroll]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    const related = e.relatedTarget as Node | null;
    // relatedTarget can be null in Chrome during drag — only clear if we
    // truly left the column (related exists and is outside currentTarget)
    if (related && !e.currentTarget.contains(related)) {
      setDragOverStage(null);
      setDropIndicator(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetStage: PipelineStage) => {
      e.preventDefault();
      setDragOverStage(null);
      setDropIndicator(null);
      setColumnError(null);
      document.body.style.cursor = "";
      stopAutoScroll();

      const card = dragCardRef.current;
      if (!card) return;
      const stageOrder = activeFunnel.stages.map((stage) => stage.id);
      const sourceStageCards = localOpportunities.filter(
        (opportunity) => opportunity.stage === card.stage
      );
      const sourceStageIndex = sourceStageCards.findIndex(
        (opportunity) => opportunity.id === card.id
      );

      const rawDropIndex =
        dropIndicator?.stage === targetStage
          ? dropIndicator.index
          : localOpportunities.filter((opportunity) => opportunity.stage === targetStage)
            .length;

      let normalizedDropIndex = rawDropIndex;
      if (card.stage === targetStage && sourceStageIndex > -1 && sourceStageIndex < normalizedDropIndex) {
        normalizedDropIndex -= 1;
      }

      if (
        card.stage === targetStage &&
        sourceStageIndex > -1 &&
        normalizedDropIndex === sourceStageIndex
      ) {
        setDraggingCardId(null);
        setDraggingCardStage(null);
        dragCardRef.current = null;
        return;
      }

      const { missing, isRegression } = validateStageTransition(
        card,
        targetStage
      );

      if (missing.length > 0) {
        setColumnError({
          stage: targetStage,
          message: `Atenção: pendências em ${missing.join(", ")}`,
        });
        announce(`Aviso: campos pendentes — ${missing.join(", ")}`);
        setTimeout(() => setColumnError(null), 4200);
      }

      if (isRegression) {
        const fromLabel =
          PIPELINE_STAGE_ORDER[PIPELINE_STAGE_ORDER.indexOf(card.stage)]
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()) || card.stage;
        const toLabel =
          PIPELINE_STAGE_ORDER[PIPELINE_STAGE_ORDER.indexOf(targetStage)]
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()) || targetStage;
        setColumnError({
          stage: targetStage,
          message: `Card retrocedido de ${fromLabel} para ${toLabel}`,
        });
        announce(`Aviso: card retrocedido de ${fromLabel} para ${toLabel}`);
        setTimeout(() => setColumnError(null), 4000);
      }

      const targetStageDef = activeFunnel.stages.find(
        (s) => s.id === targetStage
      );
      const newSlaDeadline = targetStageDef
        ? calculateSlaDeadline(targetStageDef.slaHours)
        : undefined;

      setLocalOpportunities((prev) => {
        const sourceIndex = prev.findIndex((opportunity) => opportunity.id === card.id);
        if (sourceIndex === -1) return prev;

        const sourceCard = prev[sourceIndex];
        const remaining = prev.filter((opportunity) => opportunity.id !== sourceCard.id);
        const targetStageCards = remaining.filter(
          (opportunity) => opportunity.stage === targetStage
        );
        const safeTargetIndex = clamp(
          normalizedDropIndex,
          0,
          targetStageCards.length
        );

        const updatedCard: Opportunity = {
          ...sourceCard,
          stage: targetStage,
          updatedAt: new Date().toISOString(),
          slaDeadline: newSlaDeadline,
        };

        let insertIndex = remaining.length;
        if (targetStageCards.length === 0) {
          insertIndex = resolveInsertIndexForEmptyStage(
            remaining,
            targetStage,
            stageOrder
          );
        } else if (safeTargetIndex >= targetStageCards.length) {
          const anchorId = targetStageCards[targetStageCards.length - 1].id;
          const anchorIndex = remaining.findIndex((opportunity) => opportunity.id === anchorId);
          insertIndex = anchorIndex === -1 ? remaining.length : anchorIndex + 1;
        } else {
          const anchorId = targetStageCards[safeTargetIndex].id;
          const anchorIndex = remaining.findIndex((opportunity) => opportunity.id === anchorId);
          insertIndex = anchorIndex === -1 ? remaining.length : anchorIndex;
        }

        const next = [...remaining];
        next.splice(insertIndex, 0, updatedCard);
        return next;
      });

      if (card.stage === targetStage) {
        setSuccessFeedback({
          stage: targetStage,
          message: `${card.title} reordenado na etapa.`,
        });
        announce(`Card ${card.title} reordenado dentro da etapa.`);
        setTimeout(() => setSuccessFeedback(null), 1800);
      } else if (!isRegression) {
        setSuccessFeedback({
          stage: targetStage,
          message:
            missing.length > 0
              ? `${card.title} movido para ${targetStage.replace(/-/g, " ")} com pendências.`
              : `${card.title} movido para ${targetStage.replace(/-/g, " ")}.`,
        });
        announce(
          `Card ${card.title} movido com sucesso para ${targetStage.replace(/-/g, " ")}`
        );
        setTimeout(() => setSuccessFeedback(null), 2500);
      } else {
        setSuccessFeedback({
          stage: targetStage,
          message:
            missing.length > 0
              ? `${card.title} retrocedido com pendências.`
              : `${card.title} retrocedido para ${targetStage.replace(/-/g, " ")}.`,
        });
        setTimeout(() => setSuccessFeedback(null), 2300);
      }

      setDraggingCardId(null);
      setDraggingCardStage(null);
      dragCardRef.current = null;
    },
    [activeFunnel, announce, dropIndicator, localOpportunities, setLocalOpportunities, stopAutoScroll]
  );

  const handleDragEnd = useCallback(() => {
    setDraggingCardId(null);
    setDraggingCardStage(null);
    setDragOverStage(null);
    setDropIndicator(null);
    dragCardRef.current = null;
    document.body.style.cursor = "";
    stopAutoScroll();
  }, [stopAutoScroll]);

  // Win / Lose handlers
  const handleWin = useCallback(
    (opportunityId: string) => {
      setLocalOpportunities((prev) =>
        prev.map((o) =>
          o.id === opportunityId
            ? { ...o, status: "won" as const, updatedAt: new Date().toISOString() }
            : o
        )
      );
      const opp = localOpportunities.find((o) => o.id === opportunityId);
      if (opp) {
        setSuccessFeedback({
          stage: opp.stage,
          message: `${opp.title} — ganho com sucesso.`,
        });
        announce(`Oportunidade ${opp.title} marcada como ganha!`);
        setTimeout(() => setSuccessFeedback(null), 3000);
      }
    },
    [localOpportunities, announce, setLocalOpportunities]
  );

  const handleLose = useCallback(
    (opportunityId: string) => {
      setLocalOpportunities((prev) =>
        prev.map((o) =>
          o.id === opportunityId
            ? { ...o, status: "lost" as const, updatedAt: new Date().toISOString() }
            : o
        )
      );
      const opp = localOpportunities.find((o) => o.id === opportunityId);
      if (opp) {
        announce(`Oportunidade ${opp.title} marcada como perdida.`);
      }
    },
    [localOpportunities, announce, setLocalOpportunities]
  );

  return {
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
  };
}
