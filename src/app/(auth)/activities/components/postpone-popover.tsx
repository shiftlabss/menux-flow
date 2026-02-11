"use client";

import { useState } from "react";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useActivityStore } from "@/stores/activity-store";
import { addDays, today, dateOnly, formatDateISO } from "./helpers";

interface PostponePopoverProps {
  activityId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  onPostponed: (id: string) => void;
}

const quickOptions = [
  { label: "+1 dia", days: 1 },
  { label: "+3 dias", days: 3 },
  { label: "+1 semana", days: 7 },
];

export function PostponePopover({
  activityId,
  open,
  onOpenChange,
  trigger,
  onPostponed,
}: PostponePopoverProps) {
  const [customDate, setCustomDate] = useState("");
  const { postponeActivity } = useActivityStore();

  function handleQuickPostpone(days: number) {
    const newDate = addDays(dateOnly(today()), days);
    postponeActivity(activityId, formatDateISO(newDate));
    onOpenChange(false);
    onPostponed(activityId);
  }

  function handleCustomPostpone() {
    if (!customDate) return;
    postponeActivity(activityId, customDate);
    onOpenChange(false);
    setCustomDate("");
    onPostponed(activityId);
  }

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setCustomDate("");
      }}
    >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        className="w-[220px] rounded-[var(--radius-bento-card)] border border-zinc-200 p-3 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex items-center gap-2">
          <CalendarClock className="h-4 w-4 text-zinc-500" />
          <p className="font-heading text-sm font-semibold text-black">
            Adiar para
          </p>
        </div>

        <div className="space-y-1" role="list" aria-label="Opcoes rapidas">
          {quickOptions.map(({ label, days }) => (
            <button
              key={days}
              role="listitem"
              onClick={() => handleQuickPostpone(days)}
              className="flex w-full items-center rounded-[var(--radius-bento-inner)] px-3 py-2 font-body text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="my-2 border-t border-zinc-100" />

        <div className="space-y-2">
          <Input
            type="date"
            value={customDate}
            onChange={(e) => setCustomDate(e.target.value)}
            className="h-9 rounded-[var(--radius-bento-inner)] font-body text-sm"
            min={formatDateISO(dateOnly(today()))}
            aria-label="Data personalizada"
          />
          <Button
            size="sm"
            disabled={!customDate}
            className="w-full rounded-full bg-black font-heading text-xs text-white hover:bg-zinc-800"
            onClick={handleCustomPostpone}
          >
            Adiar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
