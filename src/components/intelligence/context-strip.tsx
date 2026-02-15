"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/cn";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { useUIStore } from "@/stores/ui-store";

export function ContextStrip() {
  const { contextCard, openClientPicker } = useIntelligenceStore();
  const { openDrawer } = useUIStore();

  const handleOpenDeal = () => {
    if (contextCard?.cardId) {
       const dType = contextCard.entityType === "client" ? "client-card" : "lead-card";
       openDrawer(dType, { id: contextCard.cardId });
    }
  };

  return (
    <div className="shrink-0 border-b border-white/10 bg-slate-950/35 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {contextCard ? (
          <motion.div
            key="client-selected"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-3 px-4 py-3"
          >
            {/* Avatar / Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/7 text-slate-300 shadow-sm shadow-black/30">
               <span className="text-lg">
                 {contextCard.temperature === "hot" ? "🔥" : contextCard.temperature === "warm" ? "🌡️" : "❄️"}
               </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-heading text-sm font-semibold text-slate-100">
                  {contextCard.cardName}
                </h3>
                <span className={cn(
                  "px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide",
                  "bg-white/9 text-slate-200 border border-white/10"
                )}>
                  {contextCard.stageLabel}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mt-0.5">
                {contextCard.nextActivity ? (
                   <div className="flex items-center gap-1 text-[11px] text-amber-200">
                     <Calendar className="h-3 w-3" />
                     <span>Próx: {contextCard.nextActivity.date}</span>
                   </div>
                ) : (
                  <span className="text-[11px] text-slate-400 italic">Sem próxima atividade</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
                <button 
                onClick={handleOpenDeal}
                className="rounded-lg p-2 text-slate-400 transition-all hover:bg-white/9 hover:text-cyan-200"
                title="Abrir Deal"
              >
                 <ExternalLink className="h-4 w-4" />
               </button>
               <button 
                 onClick={openClientPicker}
                 className="rounded-lg p-2 text-slate-400 transition-all hover:bg-white/9 hover:text-slate-100"
                 title="Trocar Cliente"
               >
                 <Users className="h-4 w-4" />
               </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="no-client"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between px-4 py-3"
          >
             <div className="flex items-center gap-3">
               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-white/20 text-slate-400">
                 <Users className="h-5 w-5" />
               </div>
               <div>
                 <p className="text-sm font-medium text-slate-200">Nenhum cliente selecionado</p>
                 <p className="text-[11px] text-slate-400">Selecione para ver ações específicas</p>
               </div>
             </div>
             
             <button
               onClick={openClientPicker}
               className="rounded-lg border border-cyan-300/24 bg-cyan-400/12 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/20"
             >
               Selecionar
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
