"use client";

import { useState } from "react";
import { CheckCircle2, ThumbsUp, Minus, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useActivityStore } from "@/stores/activity-store";

interface CompletionPopoverProps {
  activityId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  onCompleted: (id: string) => void;
}

type Sentiment = "positive" | "neutral" | "negative";

const sentiments: {
  key: Sentiment;
  label: string;
  icon: typeof ThumbsUp;
  activeColor: string;
  activeBg: string;
}[] = [
  {
    key: "positive",
    label: "Positivo",
    icon: ThumbsUp,
    activeColor: "text-status-success",
    activeBg: "border-status-success bg-status-success-light",
  },
  {
    key: "neutral",
    label: "Neutro",
    icon: Minus,
    activeColor: "text-status-warning",
    activeBg: "border-status-warning bg-status-warning-light",
  },
  {
    key: "negative",
    label: "Negativo",
    icon: ThumbsDown,
    activeColor: "text-status-danger",
    activeBg: "border-status-danger bg-status-danger-light",
  },
];

export function CompletionPopover({
  activityId,
  open,
  onOpenChange,
  trigger,
  onCompleted,
}: CompletionPopoverProps) {
  const [sentiment, setSentiment] = useState<Sentiment | null>(null);
  const [notes, setNotes] = useState("");
  const { completeActivity } = useActivityStore();

  function handleComplete() {
    const allNotes = [
      sentiment ? `Sentimento: ${sentiment}` : "",
      notes,
    ]
      .filter(Boolean)
      .join("\n");

    completeActivity(activityId, allNotes || undefined);
    onOpenChange(false);
    setSentiment(null);
    setNotes("");
    onCompleted(activityId);
  }

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) {
          setSentiment(null);
          setNotes("");
        }
      }}
    >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        className="w-[260px] rounded-[var(--radius-bento-card)] border border-zinc-200 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-3 font-heading text-sm font-semibold text-black">
          Como foi?
        </p>
        <div className="mb-3 flex gap-2" role="radiogroup" aria-label="Sentimento">
          {sentiments.map(({ key, label, icon: Icon, activeColor, activeBg }) => (
            <button
              key={key}
              role="radio"
              aria-checked={sentiment === key}
              onClick={() => setSentiment(key)}
              className={`flex flex-1 flex-col items-center gap-1 rounded-[var(--radius-bento-inner)] border px-3 py-2 transition-colors ${
                sentiment === key
                  ? activeBg
                  : "border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  sentiment === key ? activeColor : "text-zinc-400"
                }`}
              />
              <span className="font-body text-xs text-zinc-600">{label}</span>
            </button>
          ))}
        </div>
        <Textarea
          placeholder="Observacoes (opcional)..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mb-3 min-h-[60px] rounded-[var(--radius-bento-inner)] font-body text-sm"
          aria-label="Observacoes"
        />
        <Button
          className="w-full rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800"
          onClick={handleComplete}
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Concluir
        </Button>
      </PopoverContent>
    </Popover>
  );
}
