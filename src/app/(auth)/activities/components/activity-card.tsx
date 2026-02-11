"use client";

import { CheckCircle2, Clock2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Activity } from "@/types";
import { typeIconComponents, typeLabels, typeColors, statusLabels, statusColors } from "./config";
import { formatDateBR, formatTimeBR, getDelayText, getInitials } from "./helpers";

export type CardVariant = "overdue" | "today" | "upcoming" | "completed" | "cancelled";

interface ActivityCardProps {
  activity: Activity;
  variant: CardVariant;
  justCompleted?: boolean;
  onComplete: (id: string) => void;
  onPostpone: (id: string) => void;
  onOpenDetails: (id: string) => void;
}

const variantStyles: Record<
  CardVariant,
  { border: string; bg: string; compact?: boolean }
> = {
  overdue: {
    border: "border-l-[3px] border-l-status-danger",
    bg: "bg-[var(--feedback-error-bg)]",
  },
  today: {
    border: "border-l-[3px] border-l-status-info",
    bg: "bg-white",
  },
  upcoming: {
    border: "border-l-[3px] border-l-zinc-200",
    bg: "bg-white",
  },
  completed: {
    border: "",
    bg: "bg-white",
    compact: true,
  },
  cancelled: {
    border: "",
    bg: "bg-white",
    compact: true,
  },
};

export function ActivityCard({
  activity,
  variant,
  justCompleted = false,
  onComplete,
  onPostpone,
  onOpenDetails,
}: ActivityCardProps) {
  const style = variantStyles[variant];
  const TypeIcon = typeIconComponents[activity.type];
  const tColor = typeColors[activity.type];
  const isTerminal = variant === "completed" || variant === "cancelled";
  const delayText = variant === "overdue" ? getDelayText(activity.dueDate) : "";

  return (
    <div
      className={`group relative cursor-pointer rounded-[var(--radius-bento-card)] border border-zinc-200 ${style.border} ${style.bg} ${
        style.compact ? "px-3 py-2.5" : "p-4"
      } shadow-[var(--shadow-bento-sm)] transition-all duration-[var(--transition-bento)] hover:shadow-[var(--shadow-bento-sm-hover)] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 active:scale-[var(--scale-bento-active)] ${
        justCompleted ? "ring-2 ring-status-success/50" : ""
      }`}
      tabIndex={0}
      role="article"
      aria-label={`${typeLabels[activity.type]}: ${activity.title}`}
      onClick={() => onOpenDetails(activity.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails(activity.id);
        }
      }}
    >
      {/* Just completed feedback overlay */}
      {justCompleted && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-[var(--radius-bento-card)] bg-status-success-light/80"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 text-status-success">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            <span className="font-heading text-sm font-semibold">Concluida</span>
          </div>
        </div>
      )}

      {/* Header: Type Icon + Title + Overdue Label */}
      <div className="flex items-start gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tColor.bg} ${tColor.text}`}
          aria-label={`Tipo: ${typeLabels[activity.type]}`}
        >
          <TypeIcon className="h-4 w-4" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p
              className={`truncate font-body text-sm font-medium ${
                isTerminal ? "text-zinc-400 line-through" : "text-black"
              }`}
            >
              {activity.title}
            </p>
            {variant === "overdue" && delayText && (
              <Badge
                variant="destructive"
                className="shrink-0 rounded-[var(--radius-bento-inner)] px-2 py-0 font-body text-[10px]"
              >
                {delayText}
              </Badge>
            )}
            {justCompleted && (
              <Badge className="shrink-0 rounded-[var(--radius-bento-inner)] bg-status-success px-2 py-0 font-body text-[10px] text-white">
                Concluida
              </Badge>
            )}
          </div>

          {/* Body: Client/Opportunity */}
          {(activity.clientName || activity.opportunityTitle) && (
            <p className="mt-0.5 truncate font-body text-xs text-zinc-500">
              {activity.opportunityTitle || activity.clientName}
            </p>
          )}

          {/* Footer: Avatar + Date/Time + Status */}
          {!style.compact && (
            <div className="mt-2.5 flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback className="bg-brand/10 font-heading text-[10px] text-brand">
                  {getInitials(activity.responsibleName)}
                </AvatarFallback>
              </Avatar>

              <div className="flex items-center gap-1.5 text-zinc-400">
                <Clock2 className="h-3 w-3" aria-hidden="true" />
                <span className="font-body text-xs">
                  {variant === "today" && activity.dueTime ? (
                    <span className="font-heading font-semibold text-black">
                      {activity.dueTime}
                    </span>
                  ) : (
                    <span className={!activity.dueTime && variant === "today" ? "italic text-zinc-400" : ""}>
                      {activity.dueTime
                        ? `${formatDateBR(activity.dueDate)} ${activity.dueTime}`
                        : variant === "today"
                          ? formatTimeBR()
                          : formatDateBR(activity.dueDate)}
                    </span>
                  )}
                </span>
              </div>

              {/* Status badge */}
              <div className={`ml-auto flex items-center gap-1 ${statusColors[activity.status].color}`}>
                <div className={`h-1.5 w-1.5 rounded-full ${statusColors[activity.status].dotColor}`} />
                <span className="font-body text-[10px] font-medium">
                  {statusLabels[activity.status]}
                </span>
              </div>
            </div>
          )}

          {/* Compact footer for completed/cancelled */}
          {style.compact && (
            <div className="mt-1 flex items-center gap-2">
              <span className="font-body text-[10px] text-zinc-400">
                {formatDateBR(activity.dueDate)}
                {activity.dueTime ? ` ${activity.dueTime}` : ""}
              </span>
              <span className="font-body text-[10px] text-zinc-300">·</span>
              <span className="font-body text-[10px] text-zinc-400">
                {activity.responsibleName}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions (hover on desktop, always visible on overdue) */}
      {!isTerminal && (
        <div
          className={`mt-3 flex items-center gap-2 ${
            variant === "overdue" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-[var(--transition-bento-fast)]`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onComplete(activity.id)}
            aria-label={`Concluir: ${activity.title}`}
            className="flex h-8 items-center gap-1.5 rounded-full bg-black px-3 font-heading text-xs font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            Concluir
          </button>
          <button
            onClick={() => onPostpone(activity.id)}
            aria-label={`Adiar: ${activity.title}`}
            className="flex h-8 items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 font-heading text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Adiar
          </button>
          <button
            onClick={() => onOpenDetails(activity.id)}
            aria-label={`Ver detalhes: ${activity.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:bg-zinc-50"
          >
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export function ActivityCardSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`animate-pulse rounded-[var(--radius-bento-card)] border border-zinc-200 ${
        compact ? "px-3 py-2.5" : "p-4"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-200" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-zinc-200" />
          <div className="h-3 w-1/2 rounded bg-zinc-100" />
          {!compact && (
            <div className="flex items-center gap-3 pt-1">
              <div className="h-6 w-6 rounded-full bg-zinc-200" />
              <div className="h-3 w-20 rounded bg-zinc-100" />
              <div className="ml-auto h-3 w-16 rounded bg-zinc-100" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
