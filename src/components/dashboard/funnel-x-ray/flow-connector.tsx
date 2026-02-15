"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { FlowTransition } from "./funnel-config";

export function FlowConnector({
  transition,
  isBottleneck,
  orientation,
  delay,
}: {
  transition: FlowTransition;
  isBottleneck: boolean;
  orientation: "horizontal" | "vertical";
  delay: number;
}) {
  const lineClass = isBottleneck ? "bg-amber-300/80" : "bg-zinc-300/85";
  const pillClass = isBottleneck
    ? "border-amber-300/80 bg-amber-50 text-amber-700"
    : "border-zinc-200 bg-white text-zinc-600";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className={cn(
            "group/connector relative flex shrink-0 items-center justify-center",
            orientation === "horizontal"
              ? "min-w-[46px] flex-1 md:max-w-[64px]"
              : "h-6 w-full"
          )}
        >
          {orientation === "horizontal" ? (
            <>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.22, delay, ease: "easeOut" }}
                className={cn(
                  "h-px w-full origin-left transition-opacity duration-[120ms] group-hover/connector:opacity-100",
                  lineClass,
                  isBottleneck ? "opacity-95" : "opacity-70"
                )}
              />
              <ArrowRight className="ml-1 h-3 w-3 text-zinc-400 transition-opacity duration-[120ms] group-hover/connector:opacity-100" />
            </>
          ) : (
            <>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.22, delay, ease: "easeOut" }}
                className={cn(
                  "h-full w-px origin-top transition-opacity duration-[120ms] group-hover/connector:opacity-100",
                  lineClass,
                  isBottleneck ? "opacity-95" : "opacity-70"
                )}
              />
              <ArrowDown className="absolute bottom-[-3px] h-3 w-3 text-zinc-400 transition-opacity duration-[120ms] group-hover/connector:opacity-100" />
            </>
          )}

          <span
            className={cn(
              "absolute rounded-full border px-1.5 py-0.5 text-[10px] font-semibold shadow-sm transition-opacity duration-[120ms] group-hover/connector:opacity-100",
              orientation === "horizontal" ? "top-[-11px]" : "right-2 top-[2px]",
              pillClass,
              isBottleneck ? "opacity-100" : "opacity-85"
            )}
          >
            {transition.conversion}%
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-[11px]">
        {transition.advanced} de {transition.base} avançaram
      </TooltipContent>
    </Tooltip>
  );
}
