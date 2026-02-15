"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { PipelineStage } from "@/types";
import {
  type StageCustomization,
  stageColorPalette,
  loadStageCustomizations,
  saveStageCustomizations,
} from "../lib/pipeline-config";

export function useStageCustomization() {
  const [stageCustomizations, setStageCustomizations] = useState<
    Record<string, StageCustomization>
  >(() => loadStageCustomizations());

  const [renamingStage, setRenamingStage] = useState<PipelineStage | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const renameInputRef = useRef<HTMLInputElement>(null);

  // Persist stage customizations to localStorage on every change
  useEffect(() => {
    saveStageCustomizations(stageCustomizations);
  }, [stageCustomizations]);

  const startRename = useCallback(
    (stageId: PipelineStage, currentLabel: string) => {
      setRenamingStage(stageId);
      setRenameValue(currentLabel);
      setTimeout(() => renameInputRef.current?.focus(), 50);
    },
    []
  );

  const confirmRename = useCallback(() => {
    if (renamingStage && renameValue.trim()) {
      setStageCustomizations((prev) => ({
        ...prev,
        [renamingStage]: {
          ...prev[renamingStage],
          label: renameValue.trim(),
        },
      }));
    }
    setRenamingStage(null);
    setRenameValue("");
  }, [renamingStage, renameValue]);

  const cancelRename = useCallback(() => {
    setRenamingStage(null);
    setRenameValue("");
  }, []);

  const setStageColor = useCallback(
    (stageId: PipelineStage, colorId: string) => {
      setStageCustomizations((prev) => ({
        ...prev,
        [stageId]: { ...prev[stageId], colorId },
      }));
    },
    []
  );

  const getStageColor = useCallback(
    (stageId: PipelineStage) => {
      const colorId = stageCustomizations[stageId]?.colorId || "default";
      return (
        stageColorPalette.find((c) => c.id === colorId) ?? stageColorPalette[0]
      );
    },
    [stageCustomizations]
  );

  return {
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
  };
}
