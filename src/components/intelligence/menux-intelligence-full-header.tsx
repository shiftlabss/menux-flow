"use client";

// ============================================================================
// Menux Intelligence — Full Header
// Connected to store: mode switching, history, new conversation, commands
// ============================================================================

import {
  History,
  Plus,
  Command,
  Settings,
  Target,
  Search,
  MessageSquare,
  Sparkles,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useRouter } from "next/navigation";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { MenuxIntelligenceMode } from "@/types/intelligence";
import { transition } from "@/lib/motion";

const MODES: { id: MenuxIntelligenceMode; label: string; icon: React.ReactNode }[] = [
  { id: "focus", label: "Foco Cliente", icon: <Target className="h-4 w-4" /> },
  { id: "audit", label: "Auditoria", icon: <Search className="h-4 w-4" /> },
  { id: "reply", label: "Responder", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "proposal", label: "Proposta", icon: <Sparkles className="h-4 w-4" /> },
];

export function MenuxIntelligenceFullHeader() {
  const router = useRouter();
  const {
    menuxIntelligenceMode,
    setMenuxIntelligenceMode,
    toggleHistory,
    startNewConversation,
    remainingQueries,
  } = useIntelligenceStore();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition.panel}
      className="sticky top-0 z-[100] flex flex-col border-b border-white/12 bg-slate-950/35 px-6 py-3 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:bg-white/8 hover:text-slate-200 md:hidden"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/80 to-blue-500/85 text-white shadow-sm ring-1 ring-white/20">
            <Zap className="premium-float h-5 w-5 fill-white text-white" />
          </div>
          <div>
            <h1 className="font-heading text-lg font-bold text-slate-100 leading-tight">
              Menux Intelligence
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="premium-glow-dot relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-body text-xs font-medium text-emerald-300">
                Online · {remainingQueries} consultas
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:bg-white/8 hover:text-slate-100"
                  onClick={toggleHistory}
                >
                  <History className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Historico</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:bg-white/8 hover:text-slate-100"
                  onClick={startNewConversation}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Nova Conversa</TooltipContent>
            </Tooltip>

            <div className="ml-2 h-4 w-px bg-white/15" />

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 h-9 w-9 text-slate-400 hover:bg-white/8 hover:text-slate-100"
                  onClick={() => {
                    useIntelligenceStore.getState().executeSlashCommand("/ajuda");
                  }}
                >
                  <Command className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Ver Comandos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:bg-white/8 hover:text-slate-100"
                  onClick={() => {
                    useIntelligenceStore.getState().openSettings();
                  }}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {MODES.map((mode) => (
          <ModePill
            key={mode.id}
            active={menuxIntelligenceMode === mode.id}
            onClick={() => setMenuxIntelligenceMode(mode.id)}
            label={mode.label}
            icon={mode.icon}
          />
        ))}
      </div>
    </motion.header>
  );
}

function ModePill({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out",
        active
          ? "border-cyan-300/30 bg-white/10 text-slate-50 shadow-sm"
          : "border-transparent text-slate-300 hover:bg-white/7 hover:text-slate-100"
      )}
    >
      {active && (
        <motion.span
          layoutId="menux-intelligence-mode-pill"
          className="absolute inset-0 rounded-full bg-cyan-400/16"
          transition={transition.quick}
        />
      )}
      <span
        className={cn(
          "relative z-10 transition-colors",
          active ? "text-cyan-200" : "text-slate-400 group-hover:text-slate-200"
        )}
      >
        {icon}
      </span>
      <span className="relative z-10">{label}</span>
    </button>
  );
}
