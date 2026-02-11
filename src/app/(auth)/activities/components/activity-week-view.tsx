"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Activity } from "@/types";
import { useUIStore } from "@/stores/ui-store";
import { today, startOfWeek, addDays, dateOnly, isSameDay } from "./helpers";
import { typeIconComponents, typeColors } from "./config";

interface WeekViewProps {
  activities: Activity[];
}

const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export function ActivityWeekView({ activities }: WeekViewProps) {
  const { openDrawer } = useUIStore();
  const [weekOffset, setWeekOffset] = useState(0);
  const now = today();
  const weekStart = addDays(startOfWeek(now), weekOffset * 7);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const activitiesByDay = useMemo(() => {
    const map = new Map<string, Activity[]>();
    for (const d of days) {
      const key = d.toISOString().split("T")[0];
      map.set(key, []);
    }
    for (const a of activities) {
      if (a.status === "completed" || a.status === "cancelled") continue;
      const key = a.dueDate;
      if (map.has(key)) {
        map.get(key)!.push(a);
      }
    }
    return map;
  }, [activities, days]);

  return (
    <div className="space-y-4">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon-sm"
          className="rounded-full"
          onClick={() => setWeekOffset((p) => p - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="font-heading text-sm font-medium text-zinc-700">
          {days[0].toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
          })}{" "}
          -{" "}
          {days[6].toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        <Button
          variant="outline"
          size="icon-sm"
          className="rounded-full"
          onClick={() => setWeekOffset((p) => p + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* 7-column grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {days.map((day, i) => {
          const key = day.toISOString().split("T")[0];
          const dayActivities = activitiesByDay.get(key) || [];
          const isCurrentDay = isSameDay(day, dateOnly(now));

          return (
            <div
              key={key}
              className={`min-h-[200px] rounded-[var(--radius-bento-card)] border p-3 shadow-[var(--shadow-bento-sm)] transition-shadow duration-[var(--transition-bento)] hover:shadow-[var(--shadow-bento-sm-hover)] ${
                isCurrentDay
                  ? "border-brand bg-brand/5"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="mb-2 text-center">
                <p className="font-body text-xs text-zinc-400">{dayNames[i]}</p>
                <p
                  className={`font-heading text-lg font-bold ${
                    isCurrentDay ? "text-brand" : "text-black"
                  }`}
                >
                  {day.getDate()}
                </p>
              </div>

              <div className="space-y-1.5">
                {dayActivities.map((a) => {
                  const TypeIcon = typeIconComponents[a.type];
                  const tc = typeColors[a.type];
                  const isOverdue = a.status === "overdue";

                  return (
                    <div
                      key={a.id}
                      className={`cursor-pointer rounded-[var(--radius-bento-inner)] border p-2 transition-colors hover:bg-zinc-50 ${
                        isOverdue
                          ? "border-l-[2px] border-l-status-danger border-t-zinc-100 border-r-zinc-100 border-b-zinc-100 bg-[var(--feedback-error-bg)]"
                          : "border-zinc-100"
                      }`}
                      onClick={() =>
                        openDrawer("new-activity", {
                          activityId: a.id,
                          mode: "edit",
                        })
                      }
                    >
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tc.bg}`}
                        >
                          <span className={tc.text}>
                            <TypeIcon className="h-3 w-3" />
                          </span>
                        </div>
                        <p className="truncate font-body text-xs font-medium text-black">
                          {a.title}
                        </p>
                      </div>
                      {a.dueTime && (
                        <p className="mt-0.5 pl-6 font-body text-[10px] text-zinc-400">
                          {a.dueTime}
                        </p>
                      )}
                    </div>
                  );
                })}
                {dayActivities.length === 0 && (
                  <p className="py-4 text-center font-body text-xs text-zinc-300">
                    --
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
