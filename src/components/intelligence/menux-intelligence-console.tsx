"use client";

import React from "react";
import { 
  Zap, 
  Calendar, 
  Clock, 
  Briefcase, 
  MessageCircle,
  BarChart3,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import type { MenuxIntelligenceMode } from "./menux-intelligence-header";

interface MenuxIntelligenceConsoleProps {
  onAction: (action: string) => void;
}

export function MenuxIntelligenceConsole({ onAction }: MenuxIntelligenceConsoleProps) {
  const { menuxIntelligenceMode, contextCard } = useIntelligenceStore();

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
       {/* 
         Dynamic content based on Mode 
         This section replaces the previous giant empty state
       */}
       
       {/* Module A: Priorities (Always relevant, but filtered by mode maybe?) */}
       <PriorityModule />

       {/* Module B: Suggested Commands */}
       <CommandSuggestions mode={menuxIntelligenceMode as MenuxIntelligenceMode} onAction={onAction} />

       {/* Module C: Quick Actions (Only if client selected) */}
       {contextCard && (
         <QuickActionsModule />
       )}
    </div>
  );
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

function PriorityModule() {
  return (
    <section>
      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
        <Clock className="h-3 w-3" /> Prioridades de Hoje
      </h4>
      <div className="space-y-2">
         <div className="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/14 bg-white/7 p-3 shadow-sm transition-shadow hover:shadow-md">
            <div className="mt-0.5 rounded-md bg-red-500/18 p-1.5 text-red-100">
               <AlertCircle className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1">
               <p className="text-xs font-medium text-slate-100 transition-colors group-hover:text-cyan-200">Follow-up: Clinica Odonto Plus</p>
               <p className="text-[10px] text-slate-400 mt-0.5">Atrasado há 2 dias • Proposta enviada</p>
            </div>
         </div>
         
         <div className="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/14 bg-white/7 p-3 shadow-sm transition-shadow hover:shadow-md">
            <div className="mt-0.5 rounded-md bg-amber-500/18 p-1.5 text-amber-100">
               <Calendar className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1">
               <p className="text-xs font-medium text-slate-100 transition-colors group-hover:text-cyan-200">Reunião: Construtora Horizonte</p>
               <p className="text-[10px] text-slate-400 mt-0.5">Hoje às 14:00 • Apresentação de Proposta</p>
            </div>
         </div>
      </div>
    </section>
  );
}

function CommandSuggestions({ mode, onAction }: { mode: MenuxIntelligenceMode; onAction: (cmd: string) => void }) {
  // Define commands per mode
  const commands = {
    focus: [
      { id: 'brief', label: 'Briefing do Cliente', cmd: '/briefing', desc: 'Resumo completo e histórico' },
      { id: 'follow', label: 'Sugerir Follow-up', cmd: '/followup', desc: 'Mensagem personalizada de retomada' },
      { id: 'objec', label: 'Tratar Objeção', cmd: '/objecao', desc: 'Argumentos para contornar negativas' },
      { id: 'next', label: 'Próximo Passo', cmd: '/proximo', desc: 'Sugerir melhor ação para avançar' },
    ],
    audit: [
      { id: 'funnel', label: 'Análise de Funil', cmd: '/funil', desc: 'Identificar gargalos e oportunidades' },
      { id: 'stalled', label: 'Leads Estagnados', cmd: '/estagnados', desc: 'Listar leads sem interação há 7 dias' },
      { id: 'forecast', label: 'Previsão Vendas', cmd: '/forecast', desc: 'Estimativa de fechamento mensal' },
    ],
    reply: [
      { id: 'msg', label: 'Gerar Resposta', cmd: '/responder', desc: 'Criar resposta contextual para última msg' },
      { id: 'formal', label: 'Tom Formal', cmd: '/tom formal', desc: 'Reescrever com tom executivo' },
      { id: 'casual', label: 'Tom Casual', cmd: '/tom casual', desc: 'Reescrever com tom amigável' },
    ],
    proposal: [
      { id: 'draft', label: 'Rascunho Proposta', cmd: '/proposta', desc: 'Gerar estrutura de proposta comercial' },
      { id: 'terms', label: 'Condições', cmd: '/termos', desc: 'Sugerir termos de negociação' },
      { id: 'pitch', label: 'Pitch de Venda', cmd: '/pitch', desc: 'Argumentos de venda para este perfil' },
    ]
  };

  const activeCommands = commands[mode] || commands.focus;

  return (
    <section>
      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
        <Zap className="h-3 w-3" /> Ações da Menux Intelligence
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {activeCommands.map((item) => (
          <button
            key={item.id}
            onClick={() => onAction(item.cmd)}
            className={cn(
               "group rounded-xl border border-white/14 bg-white/7 p-3 text-left transition-all hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-sm",
            )}
          >
             <p className="text-xs font-semibold text-slate-100 group-hover:text-cyan-100">{item.label}</p>
             <p className="mt-1 text-[10px] leading-snug text-slate-400 group-hover:text-slate-300">{item.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function QuickActionsModule() {
   return (
    <section>
       <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
         <Briefcase className="h-3 w-3" /> Execução Rápida
       </h4>
       
       <div className="flex flex-col gap-2">
          {/* Action Row */}
          <div className="flex items-center gap-1 rounded-xl border border-white/14 bg-white/7 p-1">
             <QuickActionButton icon={CheckCircle2} label="Nova Atividade" color="text-emerald-100" bg="bg-emerald-400/18" />
             <QuickActionButton icon={MessageCircle} label="Reg. Conversa" color="text-cyan-100" bg="bg-cyan-400/18" />
             <QuickActionButton icon={BarChart3} label="Reg. Visita" color="text-violet-100" bg="bg-violet-400/18" />
          </div>
       </div>
    </section>
   );
}

function QuickActionButton({ icon: Icon, label, color, bg }: { icon: React.ComponentType<{ className?: string }>; label: string; color: string; bg: string }) {
  return (
    <button className="group flex flex-1 flex-col items-center gap-1.5 rounded-lg px-2 py-3 transition-colors hover:bg-white/10">
       <div className={cn("p-2 rounded-lg transition-transform group-hover:scale-110", bg, color)}>
          <Icon className="h-4 w-4" />
       </div>
       <span className="text-[10px] font-medium text-slate-300">{label}</span>
    </button>
  )
}
