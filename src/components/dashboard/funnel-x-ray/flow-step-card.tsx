"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FlowStageId, FlowStage } from "./funnel-config";
import { formatCurrencyCompact } from "./funnel-utils";

export function FlowStepCard({
  stage,
  selected,
  onSelectStage,
  compact,
}: {
  stage: FlowStage;
  selected: boolean;
  onSelectStage: (stageId: FlowStageId) => void;
  compact: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelectStage(stage.id)}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      className={cn(
        "group/step min-w-0 rounded-xl border px-3 py-3 text-left transition-[background-color,border-color,box-shadow,opacity] duration-[140ms] ease-out",
        "shadow-[0_8px_22px_-18px_rgba(15,23,42,0.45)] hover:shadow-[0_10px_26px_-16px_rgba(15,23,42,0.5)]",
        compact ? "w-full" : "flex-[1_1_148px]",
        selected
          ? "border-brand/40 bg-brand/10 shadow-[0_0_0_1px_rgba(29,78,216,0.14),0_10px_26px_-16px_rgba(29,78,216,0.55)]"
          : "border-zinc-200/85 bg-white/90 hover:border-zinc-300/90"
      )}
      aria-pressed={selected}
    >
      <p className="truncate text-[11px] font-semibold uppercase tracking-[0.07em] text-zinc-500">
        {stage.label}
      </p>
      <p className="mt-1 text-xl font-bold leading-none text-zinc-900">
        {stage.volume}
      </p>
      <p className="mt-1 text-[11px] text-zinc-500">{formatCurrencyCompact(stage.value)}</p>
    </motion.button>
  );
}
