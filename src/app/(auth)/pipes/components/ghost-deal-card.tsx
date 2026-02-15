"use client";

import { Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Opportunity } from "@/types";

export function GhostDealCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex cursor-default select-none items-center gap-2.5 rounded-[var(--radius-bento-card)] border border-zinc-100 bg-zinc-50 p-2.5 opacity-60"
          role="listitem"
          aria-label={`Card de ${opportunity.responsibleName}: ${opportunity.clientName}`}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-200">
            <Lock className="h-3 w-3 text-zinc-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading text-[12px] font-medium text-zinc-500">
              {opportunity.clientName}
            </p>
            <p className="truncate font-body text-[11px] text-zinc-400">
              {opportunity.responsibleName}
            </p>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>Card de outro vendedor</TooltipContent>
    </Tooltip>
  );
}
