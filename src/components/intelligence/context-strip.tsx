"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronRight, Copy, ExternalLink, Calendar } from "lucide-react";
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
    <div className="shrink-0 border-b border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 shadow-sm dark:bg-slate-800 dark:border-slate-700">
               <span className="text-lg">
                 {contextCard.temperature === 'hot' ? '🔥' : contextCard.temperature === 'warm' ? 'pleasantly_warm' : '❄️'}
               </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-sm font-semibold text-slate-900 truncate dark:text-slate-100">
                  {contextCard.cardName}
                </h3>
                <span className={cn(
                  "px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide",
                  "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                )}>
                  {contextCard.stageLabel}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mt-0.5">
                {contextCard.nextActivity ? (
                   <div className="flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-500">
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
                className="p-2 rounded-lg text-slate-400 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all dark:hover:bg-slate-800"
                title="Abrir Deal"
              >
                 <ExternalLink className="h-4 w-4" />
               </button>
               <button 
                 onClick={openClientPicker}
                 className="p-2 rounded-lg text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm transition-all dark:hover:bg-slate-800"
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
               <div className="h-10 w-10 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-slate-400 dark:border-slate-700">
                 <Users className="h-5 w-5" />
               </div>
               <div>
                 <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Nenhum cliente selecionado</p>
                 <p className="text-[11px] text-slate-400">Selecione para ver ações específicas</p>
               </div>
             </div>
             
             <button
               onClick={openClientPicker}
               className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold hover:bg-indigo-100 transition-colors dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
             >
               Selecionar
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
