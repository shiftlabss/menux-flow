"use client";

import { MoreHorizontal, Clock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Opportunity } from "@/types";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { useUIStore } from "@/stores/ui-store";
import { getInitials, getSlaStatus, getSlaColors } from "../lib/pipeline-validation";

// ===================================================================
// DealCardBento -- Card Spec padronizado
// ===================================================================
//
// Slots fixos:
//   1. Header row:  title (ellipsis) + menu "..."
//   2. Sub row:     client name (ellipsis) + owner avatar chip
//   3. Meta row:    value (currency) + SLA countdown
//   4. Tags row:    max 2 tags + "+N" chip (conditional)
//   5. Temperature: bottom-right indicator
//
// Estados: default, hover, focus-visible, dragging (ghost via parent)

export function DealCardBento({
  opportunity,
  temp,
  onOpen,
  onDragStart,
  onDragEnd,
  onWin,
  onLose,
}: {
  opportunity: Opportunity;
  temp: { icon: React.ReactNode; label: string; colorClass: string };
  onOpen: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
  onWin: () => void;
  onLose: () => void;
}) {
  const { openDrawer } = useUIStore();
  const sla = getSlaStatus(opportunity.slaDeadline);
  const slaColors = getSlaColors(sla.status);

  return (
    <div
      className={`group relative cursor-pointer rounded-[var(--radius-bento-card)] border border-zinc-200 border-l-[3px] ${slaColors.border} bg-white p-3 shadow-[var(--shadow-bento-sm)] transition-all duration-[var(--transition-bento-fast)] hover:shadow-[var(--shadow-bento-sm-hover)] focus-within:ring-2 focus-within:ring-brand/40 active:scale-[var(--scale-bento-active)]`}
      onClick={onOpen}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      tabIndex={0}
      role="button"
      aria-roledescription="card arrastavel"
      aria-label={`${opportunity.title}, ${formatCurrencyBRL(opportunity.value)}, ${temp.label}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {/* 1. Header row */}
      <div className="flex items-center gap-1.5">
        <span className="min-w-0 flex-1 truncate font-heading text-[13px] font-semibold text-black">
          {opportunity.title}
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-100 hover:text-zinc-600 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              aria-label="Acoes da oportunidade"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="rounded-[var(--radius-bento-card)]"
            onClick={(e) => e.stopPropagation()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                openDrawer("new-activity", {
                  opportunityId: opportunity.id,
                });
              }}
            >
              Nova atividade
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-status-success"
              onClick={(e) => {
                e.stopPropagation();
                onWin();
              }}
            >
              Marcar como Ganho
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-status-danger"
              onClick={(e) => {
                e.stopPropagation();
                onLose();
              }}
            >
              Marcar como Perdido
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 2. Sub row: neighborhood + owner */}
      <div className="mt-1.5 flex items-center gap-2">
        <span className="min-w-0 flex-1 truncate font-body text-[12px] text-zinc-500">
          {opportunity.neighborhood || "Sem bairro"}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 font-heading text-[10px] font-semibold text-white">
              {getInitials(opportunity.responsibleName)}
            </span>
          </TooltipTrigger>
          <TooltipContent>{opportunity.responsibleName}</TooltipContent>
        </Tooltip>
      </div>

      {/* 3. Meta row: value + SLA */}
      <div className="mt-2 flex items-center justify-between">
        <span className="font-heading text-[13px] font-bold text-black">
          {opportunity.value > 0
            ? formatCurrencyBRL(opportunity.value)
            : "Sem valor"}
        </span>

        {sla.label && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={`flex items-center gap-1 font-body text-[11px] font-medium ${slaColors.text}`}
              >
                {sla.status === "breached" ? (
                  <AlertTriangle className="h-3 w-3" />
                ) : (
                  <Clock className="h-3 w-3" />
                )}
                {sla.label}
              </span>
            </TooltipTrigger>
            <TooltipContent>{sla.detailLabel}</TooltipContent>
          </Tooltip>
        )}
      </div>

      {/* 4. Tags row (conditional) */}
      {opportunity.tags.length > 0 && (
        <div className="mt-2 flex items-center gap-1 overflow-hidden">
          {opportunity.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="max-w-[100px] shrink-0 truncate rounded-[var(--radius-bento-inner)] px-1.5 py-0 font-body text-[10px] leading-5"
            >
              {tag}
            </Badge>
          ))}
          {opportunity.tags.length > 2 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="secondary"
                  className="shrink-0 rounded-[var(--radius-bento-inner)] px-1.5 py-0 font-body text-[10px] leading-5"
                >
                  +{opportunity.tags.length - 2}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                {opportunity.tags.slice(2).join(", ")}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      )}

      {/* Temperature indicator (bottom-right) */}
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={`absolute bottom-2.5 right-2.5 ${temp.colorClass}`}
          >
            {temp.icon}
          </span>
        </TooltipTrigger>
        <TooltipContent>{temp.label}</TooltipContent>
      </Tooltip>
    </div>
  );
}
