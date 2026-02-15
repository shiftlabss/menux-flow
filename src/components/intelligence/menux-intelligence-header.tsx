"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  MessageSquarePlus,
  X,
  Settings,
  Target,
  Search,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useIntelligenceStore } from "@/stores/intelligence-store";

export type MenuxIntelligenceMode = "focus" | "audit" | "reply" | "proposal";

const MODES: { id: MenuxIntelligenceMode; label: string; icon: typeof Target }[] = [
  { id: "focus", label: "Foco Cliente", icon: Target },
  { id: "audit", label: "Auditoria", icon: Search },
  { id: "reply", label: "Responder", icon: MessageSquare },
  { id: "proposal", label: "Proposta", icon: Sparkles },
];

export function MenuxIntelligenceHeader() {
  const {
    close,
    toggleHistory,
    startNewConversation,
    menuxIntelligenceMode,
    setMenuxIntelligenceMode,
    isTyping
  } = useIntelligenceStore();

  return (
    <div className={cn(
      "shrink-0",
      "border-b border-white/12 bg-slate-950/38 backdrop-blur-xl",
      "transition-all duration-300"
    )}>
      {/* LINE 1: Identity & Actions */}
      <div className="flex h-[52px] items-center gap-3 px-4">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/90 to-blue-600/90 shadow-sm shadow-cyan-900/35 ring-1 ring-white/20">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            {/* Status Dot */}
            <span className={cn(
              "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950/85",
              isTyping ? "bg-amber-400 animate-pulse" : "bg-emerald-500"
            )} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[13px] font-semibold leading-tight text-slate-100">
              Menux Intelligence
            </span>
            <span className="text-[10px] leading-tight text-slate-400">
              {isTyping ? "Pensando..." : "Online"}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="ml-auto flex items-center gap-0.5">
          <ActionButton onClick={toggleHistory} icon={Clock} title="Histórico" />
          <ActionButton onClick={startNewConversation} icon={MessageSquarePlus} title="Nova conversa" />
          <ActionButton disabled tooltip="Em breve" icon={Settings} title="Configurações" />
          <div className="mx-1 h-4 w-px bg-white/14" />
          <ActionButton onClick={close} icon={X} title="Fechar (Esc)" />
        </div>
      </div>

      {/* LINE 2: Mode Switcher */}
      <div className="flex items-center gap-1.5 px-4 pb-3 overflow-x-auto no-scrollbar">
        {MODES.map((mode) => {
          const isActive = menuxIntelligenceMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setMenuxIntelligenceMode(mode.id)}
              className={cn(
                "relative flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-200",
                isActive
                  ? "border border-cyan-300/30 bg-white/10 text-slate-50 shadow-sm"
                  : "text-slate-300 hover:bg-white/8 hover:text-slate-100"
              )}
            >
              <mode.icon className={cn("h-3.5 w-3.5", isActive ? "text-cyan-200" : "text-slate-400")} />
              <span className="text-[11px] font-medium whitespace-nowrap">{mode.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeMode"
                  className="absolute inset-0 rounded-full ring-1 ring-inset ring-cyan-300/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ActionButton({
  onClick,
  icon: Icon,
  title,
  disabled,
  tooltip,
}: {
  onClick?: () => void;
  icon: typeof Target;
  title: string;
  disabled?: boolean;
  tooltip?: string;
}) {
  const button = (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-[120ms]",
        disabled
          ? "cursor-not-allowed text-slate-500"
          : cn(
            "text-slate-400 hover:bg-white/9 hover:text-slate-100",
            "active:scale-95"
          )
      )}
      title={tooltip ? undefined : title}
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent side="bottom">{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return button;
}
