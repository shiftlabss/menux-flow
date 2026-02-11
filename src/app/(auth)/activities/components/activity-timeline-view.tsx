"use client";

import { useMemo } from "react";
import type { Activity } from "@/types";
import { useUIStore } from "@/stores/ui-store";
import {
  parseDate,
  dateOnly,
  today,
  isSameDay,
  addDays,
  formatDateFullBR,
  getInitials,
  getDelayText,
  formatTimeBR,
} from "./helpers";
import { typeIconComponents, typeColors } from "./config";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TimelineViewProps {
  activities: Activity[];
}

interface DayGroup {
  dateStr: string;
  label: string;
  variant: "overdue" | "today" | "future";
  activities: Activity[];
}

export function ActivityTimelineView({ activities }: TimelineViewProps) {
  const { openDrawer } = useUIStore();

  const dayGroups = useMemo(() => {
    const now = dateOnly(today());
    const active = activities.filter(
      (a) => a.status !== "completed" && a.status !== "cancelled"
    );

    const map = new Map<string, Activity[]>();
    for (const a of active) {
      const key = a.dueDate;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(a);
    }

    for (const [, acts] of map) {
      acts.sort((a, b) => {
        if (!a.dueTime && !b.dueTime) return 0;
        if (!a.dueTime) return 1;
        if (!b.dueTime) return -1;
        return a.dueTime.localeCompare(b.dueTime);
      });
    }

    const groups: DayGroup[] = [];
    const sortedDates = Array.from(map.keys()).sort();

    for (const dateStr of sortedDates) {
      const d = parseDate(dateStr);
      const isOverdue = d < now;
      const isTodayDate = isSameDay(d, now);
      const isTomorrow = isSameDay(d, addDays(now, 1));

      let label: string;
      if (isTodayDate) {
        label = `Hoje — ${formatDateFullBR(dateStr)}`;
      } else if (isTomorrow) {
        label = `Amanha — ${formatDateFullBR(dateStr)}`;
      } else if (isOverdue) {
        label = `Atrasada — ${formatDateFullBR(dateStr)}`;
      } else {
        label = formatDateFullBR(dateStr);
      }

      groups.push({
        dateStr,
        label,
        variant: isOverdue ? "overdue" : isTodayDate ? "today" : "future",
        activities: map.get(dateStr) || [],
      });
    }

    return groups;
  }, [activities]);

  if (dayGroups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="font-body text-sm text-zinc-500">
          Nenhuma atividade pendente na timeline
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Center line (desktop) / Left line (mobile) */}
      <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-zinc-200 lg:left-1/2 lg:-translate-x-px" />

      <div className="space-y-0">
        {dayGroups.map((group) => (
          <div key={group.dateStr}>
            {/* Day separator */}
            <div className="relative z-10 flex items-center py-4">
              <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2">
                <div
                  className={`h-3 w-3 rounded-full border-2 border-white ${
                    group.variant === "overdue"
                      ? "bg-status-danger"
                      : group.variant === "today"
                        ? "bg-brand"
                        : "bg-zinc-300"
                  }`}
                />
              </div>
              <div className="pl-10 lg:w-full lg:pl-0 lg:text-center">
                <span
                  className={`inline-block rounded-full px-3 py-1 font-heading text-xs font-semibold ${
                    group.variant === "overdue"
                      ? "bg-status-danger-light text-status-danger"
                      : group.variant === "today"
                        ? "bg-brand/10 text-brand"
                        : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {group.label}
                </span>
              </div>
            </div>

            {/* Activity cards */}
            {group.activities.map((activity, idx) => {
              const isRight = idx % 2 === 1;
              const TypeIcon = typeIconComponents[activity.type];
              const tColor = typeColors[activity.type];

              return (
                <div key={activity.id} className="relative py-2">
                  {/* Node on the line */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        group.variant === "overdue"
                          ? "bg-status-danger/60"
                          : group.variant === "today"
                            ? "bg-brand/60"
                            : "bg-zinc-300"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-10 lg:ml-0 ${
                      isRight
                        ? "lg:ml-[calc(50%+24px)] lg:mr-0"
                        : "lg:ml-0 lg:mr-[calc(50%+24px)]"
                    }`}
                  >
                    <div
                      className={`cursor-pointer rounded-[var(--radius-bento-card)] border border-zinc-200 p-3 shadow-[var(--shadow-bento-sm)] transition-all duration-[var(--transition-bento)] hover:shadow-[var(--shadow-bento-sm-hover)] active:scale-[var(--scale-bento-active)] ${
                        group.variant === "overdue"
                          ? "border-l-[3px] border-l-status-danger bg-[var(--feedback-error-bg)]"
                          : group.variant === "today"
                            ? "border-l-[3px] border-l-status-info bg-white"
                            : "bg-white"
                      }`}
                      onClick={() =>
                        openDrawer("new-activity", {
                          activityId: activity.id,
                          mode: "edit",
                        })
                      }
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tColor.bg} ${tColor.text}`}
                        >
                          <TypeIcon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="truncate font-body text-sm font-medium text-black">
                              {activity.title}
                            </p>
                            {group.variant === "overdue" && (
                              <Badge
                                variant="destructive"
                                className="shrink-0 rounded-[var(--radius-bento-inner)] px-1.5 py-0 text-[10px]"
                              >
                                {getDelayText(activity.dueDate)}
                              </Badge>
                            )}
                          </div>
                          {(activity.clientName || activity.opportunityTitle) && (
                            <p className="mt-0.5 truncate font-body text-xs text-zinc-500">
                              {activity.opportunityTitle || activity.clientName}
                            </p>
                          )}
                          <div className="mt-2 flex items-center gap-2">
                            <Avatar size="sm">
                              <AvatarFallback className="bg-brand/10 font-heading text-[9px] text-brand">
                                {getInitials(activity.responsibleName)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-body text-xs text-zinc-400">
                              {activity.dueTime || formatTimeBR()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
