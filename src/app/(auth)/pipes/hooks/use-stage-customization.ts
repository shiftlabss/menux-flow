"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { PipelineStage } from "@/types";
import {
  type StageCustomization,
  stageColorPalette,
  loadStageCustomizations,
  saveStageCustomizations,
} from "../lib/pipeline-config";

const RENAME_MIN_LENGTH = 2;
const RENAME_MAX_LENGTH = 30;

export function useStageCustomization() {
  const [stageCustomizations, setStageCustomizations] = useState<
    Record<string, StageCustomization>
  >(() => loadStageCustomizations());

  const [renamingStage, setRenamingStage] = useState<PipelineStage | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [renameError, setRenameError] = useState<string | null>(null);
  const renameInputRef = useRef<HTMLInputElement>(null);

  // Persist stage customizations to localStorage on every change
  useEffect(() => {
    saveStageCustomizations(stageCustomizations);
  }, [stageCustomizations]);

  const startRename = useCallback(
    (stageId: PipelineStage, currentLabel: string) => {
      setRenamingStage(stageId);
      setRenameValue(currentLabel);
      setRenameError(null);
      setTimeout(() => renameInputRef.current?.focus(), 50);
    },
    []
  );

  const confirmRename = useCallback(() => {
    if (!renamingStage) return;

    const trimmed = renameValue.trim();

    if (trimmed.length < RENAME_MIN_LENGTH) {
      setRenameError(`Mínimo ${RENAME_MIN_LENGTH} caracteres`);
      renameInputRef.current?.focus();
      return;
    }

    if (trimmed.length > RENAME_MAX_LENGTH) {
      setRenameError(`Máximo ${RENAME_MAX_LENGTH} caracteres`);
      renameInputRef.current?.focus();
      return;
    }

    setStageCustomizations((prev) => ({
      ...prev,
      [renamingStage]: {
        ...prev[renamingStage],
        label: trimmed,
      },
    }));
    setRenamingStage(null);
    setRenameValue("");
    setRenameError(null);
  }, [renamingStage, renameValue]);

  const cancelRename = useCallback(() => {
    setRenamingStage(null);
    setRenameValue("");
    setRenameError(null);
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
    renameError,
    setRenameValue,
    renameInputRef,
    startRename,
    confirmRename,
    cancelRename,
    setStageColor,
    getStageColor,
  };
}
