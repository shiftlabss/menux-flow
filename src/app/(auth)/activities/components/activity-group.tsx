"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Activity } from "@/types";
import { ActivityCard, type CardVariant } from "./activity-card";
import { CompletionPopover } from "./completion-popover";
import { PostponePopover } from "./postpone-popover";

interface ActivityGroupProps {
  title: string;
  count: number;
  variant: CardVariant;
  activities: Activity[];
  defaultCollapsed?: boolean;
  justCompletedIds: Set<string>;
  onCompleted: (id: string) => void;
  onPostponed: (id: string) => void;
  onOpenDetails: (id: string) => void;
}

const groupHeaderStyles: Record<
  CardVariant,
  { headerColor: string; badgeColor: string; containerBg?: string }
> = {
  overdue: {
    headerColor: "text-status-danger",
    badgeColor: "bg-status-danger text-white",
    containerBg: "bg-[var(--feedback-error-bg)] rounded-[var(--radius-bento-card)] p-4",
  },
  today: {
    headerColor: "text-black",
    badgeColor: "bg-black text-white",
  },
  upcoming: {
    headerColor: "text-zinc-600",
    badgeColor: "bg-zinc-200 text-zinc-700",
  },
  completed: {
    headerColor: "text-status-success",
    badgeColor: "bg-status-success-light text-status-success",
  },
  cancelled: {
    headerColor: "text-zinc-400",
    badgeColor: "bg-zinc-100 text-zinc-400",
  },
};

export function ActivityGroup({
  title,
  count,
  variant,
  activities,
  defaultCollapsed = false,
  justCompletedIds,
  onCompleted,
  onPostponed,
  onOpenDetails,
}: ActivityGroupProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const style = groupHeaderStyles[variant];
  const isCollapsible = variant === "completed" || variant === "cancelled";

  const sectionId = `activity-group-${variant}-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={style.containerBg ?? ""}>
      {/* Group Header */}
      <button
        onClick={() => isCollapsible && setCollapsed(!collapsed)}
        className={`mb-3 flex items-center gap-2 ${
          isCollapsible ? "cursor-pointer" : "cursor-default"
        }`}
        aria-expanded={isCollapsible ? !collapsed : undefined}
        aria-controls={isCollapsible ? sectionId : undefined}
      >
        <h2 className={`font-heading text-sm font-semibold ${style.headerColor}`}>
          {title}
        </h2>
        <span
          className={`inline-flex h-5 min-w-5 items-center justify-center rounded-[var(--radius-bento-inner)] px-1.5 font-heading text-xs font-semibold ${style.badgeColor}`}
          aria-label={`${count} atividades`}
        >
          {count}
        </span>
        {isCollapsible && (
          <ChevronDown
            className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${
              collapsed ? "" : "rotate-180"
            }`}
            aria-hidden="true"
          />
        )}
      </button>

      {/* Cards */}
      {!collapsed && (
        <div id={sectionId} className="space-y-2" role="list" aria-label={`${title}: ${count} atividades`}>
          {activities.map((activity) => (
            <ActivityCardWithPopovers
              key={activity.id}
              activity={activity}
              variant={variant}
              justCompleted={justCompletedIds.has(activity.id)}
              onCompleted={onCompleted}
              onPostponed={onPostponed}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ActivityCardWithPopovers({
  activity,
  variant,
  justCompleted,
  onCompleted,
  onPostponed,
  onOpenDetails,
}: {
  activity: Activity;
  variant: CardVariant;
  justCompleted: boolean;
  onCompleted: (id: string) => void;
  onPostponed: (id: string) => void;
  onOpenDetails: (id: string) => void;
}) {
  const [activePopover, setActivePopover] = useState<"complete" | "postpone" | null>(null);

  return (
    <div className="relative">
      <ActivityCard
        activity={activity}
        variant={variant}
        justCompleted={justCompleted}
        onComplete={() => setActivePopover("complete")}
        onPostpone={() => setActivePopover("postpone")}
        onOpenDetails={onOpenDetails}
      />
      <CompletionPopover
        activityId={activity.id}
        open={activePopover === "complete"}
        onOpenChange={(o) => !o && setActivePopover(null)}
        trigger={<span className="sr-only">Concluir atividade</span>}
        onCompleted={(id) => {
          setActivePopover(null);
          onCompleted(id);
        }}
      />
      <PostponePopover
        activityId={activity.id}
        open={activePopover === "postpone"}
        onOpenChange={(o) => !o && setActivePopover(null)}
        trigger={<span className="sr-only">Adiar atividade</span>}
        onPostponed={(id) => {
          setActivePopover(null);
          onPostponed(id);
        }}
      />
    </div>
  );
}
