"use client";

import { useRef, useCallback } from "react";
import {
  MoreHorizontal,
  Clock3,
  AlertTriangle,
  MapPin,
  Tags,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/cn";
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

interface DealCardBentoProps {
  opportunity: Opportunity;
  temp: { icon: React.ReactNode; label: string; colorClass: string };
  isDragging?: boolean;
  isUpdating?: boolean;
  isHighlighted?: boolean;
  canMove?: boolean;
  canEdit?: boolean;
  canCreateActivity?: boolean;
  onOpen: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
  inlineFeedback?: {
    tone: "success" | "warning" | "error";
    message: string;
    actionLabel?: string;
    onAction?: () => void;
  } | null;
  onTagClick?: (tag: string) => void;
}

function formatElapsed(isoDate: string): string {
  const base = new Date(isoDate);
  const now = new Date();
  const diffMs = Math.max(0, now.getTime() - base.getTime());
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return "<1h";
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays}d`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${Math.max(1, diffMonths)}m`;
}

function getTemperatureChipClassesByLabel(label: string) {
  switch (label) {
    case "Quente":
      return "border-red-200 bg-red-50 text-red-700";
    case "Morno":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "Frio":
      return "border-sky-200 bg-sky-50 text-sky-700";
    default:
      return "border-zinc-200 bg-zinc-50 text-zinc-600";
  }
}

function getPriorityVisual(
  opportunity: Opportunity,
  slaStatus: "ok" | "near" | "breached",
  computedTempLabel: string,
) {
  if (slaStatus === "breached") {
    return {
      label: "Critica",
      className: "border-red-200 bg-red-50 text-red-700",
    };
  }

  if (computedTempLabel === "Quente" || opportunity.value >= 20000) {
    return {
      label: "Alta",
      className: "border-amber-200 bg-amber-50 text-amber-700",
    };
  }

  return {
    label: "Normal",
    className: "border-zinc-200 bg-zinc-50 text-zinc-600",
  };
}

export function DealCardBento({
  opportunity,
  temp,
  isDragging,
  isUpdating,
  isHighlighted,
  canMove = true,
  canEdit = true,
  canCreateActivity = true,
  onOpen,
  onDragStart,
  onDragEnd,
  inlineFeedback,
  onTagClick,
}: DealCardBentoProps) {
  const { openDrawer, openModal } = useUIStore();
  const wasDraggingRef = useRef(false);
  const sla = getSlaStatus(opportunity.slaDeadline);
  const slaColors = getSlaColors(sla.status);
  const priority = getPriorityVisual(opportunity, sla.status, temp.label);
  const primarySegment = opportunity.tags[0] ?? "Sem segmento";

  const handleDragStartInternal = useCallback(
    (e: React.DragEvent) => {
      wasDraggingRef.current = true;
      onDragStart(e);
    },
    [onDragStart]
  );

  const handleDragEndInternal = useCallback(() => {
    // Keep wasDragging flag set for the click event that fires after dragEnd
    setTimeout(() => {
      wasDraggingRef.current = false;
    }, 0);
    onDragEnd();
  }, [onDragEnd]);

  const handleClick = useCallback(() => {
    if (wasDraggingRef.current) return;
    onOpen();
  }, [onOpen]);

  return (
    <div
      className={`group relative rounded-[22px] border border-zinc-200/90 border-l-[3px] ${slaColors.border} bg-white p-4 shadow-[var(--shadow-bento-sm)] transition-all duration-300 hover:-translate-y-[1.5px] hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-brand/40 active:scale-[0.98] ${isDragging
        ? "cursor-grabbing shadow-[0_14px_30px_-18px_rgba(15,23,42,0.38)] scale-[1.02]"
        : canMove
          ? "cursor-grab"
          : "cursor-pointer"
        } ${isUpdating ? "opacity-60 saturate-50 pointer-events-none" : ""} ${isHighlighted
          ? "ring-2 ring-emerald-300/70"
          : ""
        }`}
      onClick={handleClick}
      draggable={canMove}
      onDragStart={handleDragStartInternal}
      onDragEnd={handleDragEndInternal}
      tabIndex={0}
      role="button"
      aria-roledescription="card arrastavel"
      aria-label={`${opportunity.title}, ${formatCurrencyBRL(opportunity.value)}, prioridade ${priority.label}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {/* 1. Linha principal: nome + prioridade + acoes */}
      <div className="flex items-start gap-2">
        <span className="min-w-0 flex-1 truncate font-heading text-[17px] font-semibold text-zinc-950">
          {opportunity.title}
        </span>
        <span
          className={`inline-flex h-6 shrink-0 items-center rounded-full border px-2.5 text-[11px] font-semibold ${priority.className}`}
        >
          {priority.label}
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-100 hover:text-zinc-600 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
              disabled={!canEdit}
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={!canCreateActivity}
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
              disabled={!canEdit}
              className="text-status-success"
              onClick={(e) => {
                e.stopPropagation();
                openModal("win-opportunity", { opportunityId: opportunity.id });
              }}
            >
              Marcar como Ganho
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={!canEdit}
              className="text-status-danger"
              onClick={(e) => {
                e.stopPropagation();
                openModal("lose-opportunity", { opportunityId: opportunity.id });
              }}
            >
              Marcar como Perdido
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 2. Valor + temperatura */}
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="font-heading text-[20px] font-bold tracking-tight text-zinc-950">
          {opportunity.value > 0
            ? formatCurrencyBRL(opportunity.value)
            : "Sem valor"}
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getTemperatureChipClassesByLabel(temp.label)}`}
        >
          {temp.icon}
          {temp.label}
        </span>
      </div>

      {/* 3. Localizacao + segmento */}
      <div className="mt-2 flex items-center justify-between gap-2 text-[12px] text-zinc-600">
        <span className="inline-flex min-w-0 flex-1 items-center gap-1.5 truncate">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
          {opportunity.neighborhood || "Sem localizacao"}
        </span>
        <span
          className={cn("inline-flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors",
            onTagClick && primarySegment !== "Sem segmento" && "cursor-pointer hover:bg-zinc-100 hover:text-zinc-900"
          )}
          onClick={(e) => {
            if (onTagClick && primarySegment !== "Sem segmento") {
              e.stopPropagation();
              onTagClick(primarySegment);
            }
          }}
        >
          <Tags className="h-3 w-3" />
          {primarySegment}
        </span>
      </div>

      {/* 4. Ultima atividade + idade do card */}
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] text-zinc-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
          Ultima atividade {formatElapsed(opportunity.updatedAt)}
        </span>
        <span className="inline-flex items-center justify-end gap-1.5 text-right">
          <CalendarClock className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
          No pipeline ha {formatElapsed(opportunity.createdAt)}
        </span>
      </div>

      {/* 5. SLA + owner */}
      <div className="mt-2.5 flex items-center justify-between gap-2">
        <span
          className={`inline-flex min-w-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${sla.status === "breached"
            ? "border-red-200 bg-red-50 text-red-700"
            : sla.status === "near"
              ? "border-amber-200 bg-amber-50 text-amber-700"
              : "border-zinc-200 bg-zinc-50 text-zinc-600"
            }`}
        >
          {sla.status === "breached" ? (
            <AlertTriangle className="h-3.5 w-3.5" />
          ) : (
            <Clock3 className="h-3.5 w-3.5" />
          )}
          {sla.status === "breached" ? "Estourado" : `SLA ${sla.label || "ok"}`}
        </span>

        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 font-heading text-[10px] font-semibold text-white">
              {getInitials(opportunity.responsibleName)}
            </span>
          </TooltipTrigger>
          <TooltipContent>{opportunity.responsibleName}</TooltipContent>
        </Tooltip>
      </div>

      {/* Tags extras */}
      {opportunity.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {opportunity.tags.slice(0, 2).map((tag: string, idx: number) => (
            <Badge
              key={idx}
              variant="secondary"
              className={cn("shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-body text-[10px] text-zinc-600 transition-colors",
                onTagClick && "cursor-pointer hover:bg-zinc-100 hover:text-zinc-900"
              )}
              onClick={(e) => {
                if (onTagClick) {
                  e.stopPropagation();
                  onTagClick(tag);
                }
              }}
            >
              {tag}
            </Badge>
          ))}
          {opportunity.tags.length > 2 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="secondary"
                  className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-body text-[10px] text-zinc-600"
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

      {inlineFeedback ? (
        <div
          className={`mt-3 rounded-xl border px-2.5 py-2 text-[11px] ${inlineFeedback.tone === "error"
            ? "border-red-200 bg-red-50 text-red-700"
            : inlineFeedback.tone === "warning"
              ? "border-amber-200 bg-amber-50 text-amber-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          role={inlineFeedback.tone === "error" ? "alert" : "status"}
        >
          <div className="flex items-start gap-1.5">
            {inlineFeedback.tone === "success" ? (
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            ) : (
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            )}
            <div className="min-w-0 flex-1">
              <p>{inlineFeedback.message}</p>
              {inlineFeedback.actionLabel && inlineFeedback.onAction ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    inlineFeedback.onAction?.();
                  }}
                  className="mt-1 font-semibold underline underline-offset-2"
                >
                  {inlineFeedback.actionLabel}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <span className="sr-only">{sla.detailLabel}</span>
    </div>
  );
}
