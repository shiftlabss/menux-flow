"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { Opportunity, PipelineStage } from "@/types";
import { calculateSlaDeadline } from "@/lib/business-rules";
import { validateStageTransition } from "../lib/pipeline-validation";
import type { FunnelDefinition } from "../lib/pipeline-config";

interface UsePipelineBoardOptions {
  localOpportunities: Opportunity[];
  setLocalOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>;
  activeFunnel: FunnelDefinition;
  announce: (message: string) => void;
  canMoveCards?: boolean;
}

interface ColumnErrorState {
  stage: PipelineStage;
  message: string;
  tone: "warning" | "error";
  cardId?: string;
  missingFields?: string[];
  targetStage?: PipelineStage;
}

interface SuccessFeedbackState {
  stage: PipelineStage;
  message: string;
  cardId?: string;
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
  canMoveCards = true,
}: UsePipelineBoardOptions) {
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  const [draggingCardStage, setDraggingCardStage] = useState<PipelineStage | null>(null);
  const [draggingOpportunity, setDraggingOpportunity] = useState<Opportunity | null>(null);
  const [dragOverStage, setDragOverStage] = useState<PipelineStage | null>(null);
  const [dropIndicator, setDropIndicator] = useState<{
    stage: PipelineStage;
    index: number;
  } | null>(null);
  const [columnError, setColumnError] = useState<ColumnErrorState | null>(null);
  const [successFeedback, setSuccessFeedback] = useState<SuccessFeedbackState | null>(null);
  const [updatingCardId, setUpdatingCardId] = useState<string | null>(null);
  const [recentlyMovedCardId, setRecentlyMovedCardId] = useState<string | null>(null);
  const dragCardRef = useRef<Opportunity | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const timeoutIdsRef = useRef<number[]>([]);
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

  const runWithTimeout = useCallback((fn: () => void, delayMs: number) => {
    const timeoutId = window.setTimeout(() => {
      timeoutIdsRef.current = timeoutIdsRef.current.filter((id) => id !== timeoutId);
      fn();
    }, delayMs);
    timeoutIdsRef.current.push(timeoutId);
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
      timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIdsRef.current = [];
    };
  }, [stopAutoScroll]);

  const handleDragStart = useCallback(
    (e: React.DragEvent, opportunity: Opportunity) => {
      if (!canMoveCards) {
        e.preventDefault();
        announce("Voce nao tem permissao para mover oportunidades.");
        return;
      }

      setDraggingCardId(opportunity.id);
      setDraggingCardStage(opportunity.stage);
      setDraggingOpportunity(opportunity);
      dragCardRef.current = opportunity;
      autoScrollStateRef.current = null;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", opportunity.id);
      document.body.style.cursor = "grabbing";
      announce(
        `Arrastando card ${opportunity.title}. Solte em uma etapa para mover.`
      );
    },
    [announce, canMoveCards]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent, stage: PipelineStage) => {
      if (!canMoveCards) return;
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
    [canMoveCards, runAutoScroll]
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
      if (!canMoveCards) {
        e.preventDefault();
        announce("Voce nao tem permissao para mover oportunidades.");
        return;
      }

      e.preventDefault();
      setDragOverStage(null);
      setDropIndicator(null);
      setColumnError(null);
      document.body.style.cursor = "";
      stopAutoScroll();

      const card = dragCardRef.current;
      if (!card) return;
      setUpdatingCardId(card.id);

      try {
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
        setUpdatingCardId(null);
        return;
      }

      const { missing, isRegression } = validateStageTransition(
        card,
        targetStage
      );
      const targetStageDef = activeFunnel.stages.find(
        (stage) => stage.id === targetStage
      );
      const targetStageLabel = targetStageDef?.label ?? targetStage.replace(/-/g, " ");

      if (missing.length > 0) {
        setColumnError({
          stage: targetStage,
          tone: "error",
          cardId: card.id,
          missingFields: missing,
          targetStage,
          message: `Para mover para ${targetStageLabel}, preencha: ${missing.join(", ")}.`,
        });
        announce(`Aviso: campos pendentes — ${missing.join(", ")}`);
        setDraggingCardId(null);
        setDraggingCardStage(null);
        setDraggingOpportunity(null);
        dragCardRef.current = null;
        setUpdatingCardId(null);
        runWithTimeout(() => setColumnError(null), 4200);
        return;
      }

      if (isRegression) {
        const fromLabel = activeFunnel.stages.find(
          (stage) => stage.id === card.stage
        )?.label ?? card.stage;
        const toLabel = targetStageLabel;
        setColumnError({
          stage: targetStage,
          tone: "warning",
          message: `Card retrocedido de ${fromLabel} para ${toLabel}`,
        });
        announce(`Aviso: card retrocedido de ${fromLabel} para ${toLabel}`);
        runWithTimeout(() => setColumnError(null), 4000);
      }

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
          cardId: card.id,
        });
        announce(`Card ${card.title} reordenado dentro da etapa.`);
        runWithTimeout(() => setSuccessFeedback(null), 1800);
      } else if (!isRegression) {
        setSuccessFeedback({
          stage: targetStage,
          message: `${card.title} movido para ${targetStageLabel} agora.`,
          cardId: card.id,
        });
        announce(
          `Card ${card.title} movido com sucesso para ${targetStageLabel}`
        );
        runWithTimeout(() => setSuccessFeedback(null), 2500);
      } else {
        setSuccessFeedback({
          stage: targetStage,
          message: `${card.title} retrocedido para ${targetStageLabel}.`,
          cardId: card.id,
        });
        runWithTimeout(() => setSuccessFeedback(null), 2300);
      }

      setRecentlyMovedCardId(card.id);
      runWithTimeout(() => setRecentlyMovedCardId((prev) => (prev === card.id ? null : prev)), 2600);
      runWithTimeout(() => setUpdatingCardId((prev) => (prev === card.id ? null : prev)), 850);

      } finally {
        setDraggingCardId(null);
        setDraggingCardStage(null);
        setDraggingOpportunity(null);
        dragCardRef.current = null;
        document.body.style.cursor = "";
      }
    },
    [
      activeFunnel,
      announce,
      canMoveCards,
      dropIndicator,
      localOpportunities,
      runWithTimeout,
      setLocalOpportunities,
      stopAutoScroll,
    ]
  );

  const handleDragEnd = useCallback(() => {
    setDraggingCardId(null);
    setDraggingCardStage(null);
    setDraggingOpportunity(null);
    setDragOverStage(null);
    setDropIndicator(null);
    dragCardRef.current = null;
    document.body.style.cursor = "";
    stopAutoScroll();
  }, [stopAutoScroll]);

  return {
    draggingCardId,
    draggingCardStage,
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
  };
}
