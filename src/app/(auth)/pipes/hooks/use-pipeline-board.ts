"use client";

import { useState, useCallback, useRef } from "react";
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
    cardTitle: string;
  } | null>(null);
  const dragCardRef = useRef<Opportunity | null>(null);

  const handleDragStart = useCallback(
    (e: React.DragEvent, opportunity: Opportunity) => {
      setDraggingCardId(opportunity.id);
      setDraggingCardStage(opportunity.stage);
      dragCardRef.current = opportunity;
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
    },
    []
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

      const card = dragCardRef.current;
      if (!card) return;

      if (card.stage === targetStage) {
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
          message: `Preencha: ${missing.join(", ")}`,
        });
        setDraggingCardId(null);
        setDraggingCardStage(null);
        dragCardRef.current = null;
        announce(`Erro: campos obrigatorios faltando — ${missing.join(", ")}`);
        setTimeout(() => setColumnError(null), 5000);
        return;
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

      setLocalOpportunities((prev) =>
        prev.map((o) =>
          o.id === card.id
            ? {
              ...o,
              stage: targetStage,
              updatedAt: new Date().toISOString(),
              slaDeadline: newSlaDeadline,
            }
            : o
        )
      );

      if (!isRegression) {
        setSuccessFeedback({ stage: targetStage, cardTitle: card.title });
        announce(
          `Card ${card.title} movido com sucesso para ${targetStage.replace(/-/g, " ")}`
        );
        setTimeout(() => setSuccessFeedback(null), 2500);
      }

      setDraggingCardId(null);
      setDraggingCardStage(null);
      dragCardRef.current = null;
    },
    [activeFunnel, announce, setLocalOpportunities]
  );

  const handleDragEnd = useCallback(() => {
    setDraggingCardId(null);
    setDraggingCardStage(null);
    setDragOverStage(null);
    setDropIndicator(null);
    dragCardRef.current = null;
    document.body.style.cursor = "";
  }, []);

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
          cardTitle: `${opp.title} — Ganho!`,
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
