"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Download,
  Handshake,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import type { NegotiationRound, NegotiationType } from "@/types";
import { mockNegotiationRounds } from "@/lib/mock-data";

// ═══════════════════════════════════════════════════════════════════
// Types & Helpers
// ═══════════════════════════════════════════════════════════════════

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

function downloadTextFile(fileName: string, content: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

// ═══════════════════════════════════════════════════════════════════
// Components
// ═══════════════════════════════════════════════════════════════════

interface NegotiationTabProps {
  dealId: string; // Future use
  dealTitle: string; // Future use
}

export function NegotiationTab({ dealId, dealTitle }: NegotiationTabProps) {
  const [rounds, setRounds] = useState<NegotiationRound[]>(mockNegotiationRounds);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Derived Summary
  const lastRound = rounds[rounds.length - 1];
  const lastInternal = [...rounds].reverse().find((r) => r.type === "proposal" || r.type === "internal");
  const lastClient = [...rounds].reverse().find((r) => r.type === "counter");
  const finalAgreement = rounds.find((r) => r.type === "agreement");

  const status = finalAgreement
    ? "agreed"
    : lastRound?.type === "counter"
    ? "waiting_approval" // Client countered, need internal approval/reply
    : lastRound?.type === "proposal" || lastRound?.type === "internal"
    ? "waiting_client" 
    : rounds.length > 0
    ? "negotiating"
    : "none";

  const handleAddRound = (round: NegotiationRound) => {
    setRounds([...rounds, round]);
    setIsFormOpen(false);
  };

  const showActionFeedback = (type: "success" | "error", message: string) => {
    setActionFeedback({ type, message });
    window.setTimeout(() => setActionFeedback(null), 1200);
  };

  const handleExportSummary = () => {
    try {
      const lines = rounds.map((round, index) => {
        const createdAt = round.createdAt
          ? format(new Date(round.createdAt), "dd/MM/yyyy HH:mm", { locale: ptBR })
          : "Sem data";
        return `${index + 1}. ${round.type.toUpperCase()} | Mensal: ${formatCurrency(round.monthlyValue || 0)} | Setup: ${formatCurrency(round.setupValue || 0)} | Prazo: ${round.termMonths} meses | ${createdAt}`;
      });
      const summary = [
        `Resumo da negociacao: ${dealTitle}`,
        `Total de rodadas: ${rounds.length}`,
        "",
        ...lines,
      ].join("\n");
      downloadTextFile(`negociacao-${dealId}.txt`, summary);
      showActionFeedback("success", "Resumo exportado.");
    } catch {
      showActionFeedback("error", "Falha ao exportar resumo.");
    }
  };

  const handleDownloadContract = () => {
    const agreement = rounds.find((round) => round.type === "agreement");
    if (!agreement) {
      showActionFeedback("error", "Sem acordo final para download.");
      return;
    }

    try {
      const contract = [
        `Contrato Comercial - ${dealTitle}`,
        "",
        `Valor mensal: ${formatCurrency(agreement.monthlyValue || 0)}`,
        `Setup: ${formatCurrency(agreement.setupValue || 0)}`,
        `Prazo: ${agreement.termMonths} meses`,
        `Registrado em: ${agreement.createdAt ? format(new Date(agreement.createdAt), "dd/MM/yyyy HH:mm", { locale: ptBR }) : "Sem data"}`,
        "",
        "Documento mockado para fluxo frontend.",
      ].join("\n");
      downloadTextFile(`contrato-${dealId}.txt`, contract);
      showActionFeedback("success", "Contrato baixado.");
    } catch {
      showActionFeedback("error", "Falha ao baixar contrato.");
    }
  };

  return (
    <div className="space-y-6" data-deal-id={dealId}>
      {/* Header */}
      <header className="flex items-center justify-between pb-4 border-b border-zinc-100">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
              <Handshake className="h-4 w-4" />
            </div>
            <h2 className="text-lg font-heading font-semibold text-zinc-900">
              Negociação
            </h2>
          </div>
          <p className="text-sm text-zinc-500 pl-10">
            Todas as propostas e condições de {dealTitle} em um só lugar
          </p>
        </div>
        <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 text-zinc-500"
              onClick={handleExportSummary}
            >
                <Download className="h-3.5 w-3.5" />
                Exportar resumo
            </Button>
            <Button 
                onClick={() => setIsFormOpen(true)}
                className="h-8 gap-2 bg-zinc-900 text-white hover:bg-zinc-800"
                disabled={!!finalAgreement}
            >
                <Plus className="h-3.5 w-3.5" />
                Nova rodada
            </Button>
        </div>
      </header>

      {actionFeedback ? (
        <div
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-medium",
            actionFeedback.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          )}
          role="status"
        >
          {actionFeedback.message}
        </div>
      ) : null}

      {/* Main Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Timeline (65%) */}
        <div className="lg:col-span-8 space-y-6">
            
            {/* Inline Form */}
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.98 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.98 }}
                        className="overflow-hidden"
                    >
                        <NegotiationForm 
                            onCancel={() => setIsFormOpen(false)}
                            onSave={handleAddRound}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Timeline */}
            <div className="space-y-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-200 z-0" />

                {rounds.length === 0 ? (
                    <EmptyState onStart={() => setIsFormOpen(true)} />
                ) : (
                    rounds.map((round, index) => (
                        <NegotiationRoundCard 
                            key={round.id} 
                            round={round} 
                            displayIndex={index + 1}
                            isLast={index === rounds.length - 1}
                        />
                    ))
                )}
            </div>
        </div>

        {/* Right Column: Sticky Summary (35%) */}
        <div className="lg:col-span-4 sticky top-6">
            <NegotiationSummaryCard 
                status={status}
                lastInternal={lastInternal}
                lastClient={lastClient}
                finalAgreement={finalAgreement}
                onAddRound={() => setIsFormOpen(true)}
                onDownloadContract={handleDownloadContract}
            />
        </div>

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Sub-components
// ═══════════════════════════════════════════════════════════════════

function NegotiationRoundCard({ round, displayIndex, isLast }: { round: NegotiationRound, displayIndex: number, isLast: boolean }) {
    const [isExpanded, setIsExpanded] = useState(isLast); // Expand last by default? Or define logic. Let's start collapsed unless explicitly clicked, or last one expanded.

    const typeConfig = {
        proposal: { label: "Proposta", color: "bg-blue-50 text-blue-700 border-blue-100", icon: FileText },
        counter: { label: "Contra Proposta", color: "bg-orange-50 text-orange-700 border-orange-100", icon: ArrowRight },
        internal: { label: "Ajuste Interno", color: "bg-zinc-100 text-zinc-700 border-zinc-200", icon: CheckCircle2 }, // Changed icon just to differ
        agreement: { label: "Acordo Final", color: "bg-green-50 text-green-700 border-green-100", icon: Handshake },
    }[round.type] || { label: "Rodada", color: "bg-zinc-50 text-zinc-700", icon: FileText };

    const Icon = typeConfig.icon;

    return (
        <div className="relative z-10 pl-6 group">
            {/* Timeline Dot */}
            <div className={cn(
                "absolute left-3 top-5 h-6 w-6 -translate-x-1/2 flex items-center justify-center rounded-full border-2 bg-white transition-colors duration-200",
                round.type === 'agreement' 
                    ? "border-green-500 text-green-500"
                    : isLast ? "border-violet-500 text-violet-500" : "border-zinc-300 text-zinc-300 group-hover:border-zinc-400"
            )}>
                <div className={cn("h-2 w-2 rounded-full", round.type === 'agreement' ? "bg-green-500" : isLast ? "bg-violet-500" : "bg-transparent")} />
            </div>

            <motion.div 
                layout
                className={cn(
                    "rounded-xl border bg-white shadow-sm transition-all hover:shadow-md",
                    isExpanded ? "ring-1 ring-zinc-200" : ""
                )}
            >
                {/* Header (Always Visible) */}
                <div 
                    className="flex items-center gap-4 p-4 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border", typeConfig.color)}>
                        <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                Rodada {displayIndex}
                            </span>
                            <Badge variant="outline" className={cn("text-[10px] h-5 px-1.5 font-medium border-0 px-2", typeConfig.color)}>
                                {typeConfig.label}
                            </Badge>
                             {round.createdAt && (
                                <span className="text-xs text-zinc-400 ml-auto flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {format(new Date(round.createdAt), "dd MMM, HH:mm", { locale: ptBR })}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm text-zinc-900 truncate">
                                {round.authorName} - {round.type === 'counter' ? 'Cliente' : 'Equipe'}
                            </h4>
                             {!isExpanded && (
                                <div className="flex items-center gap-3 text-sm text-zinc-600">
                                    {round.monthlyValue && <span>Mensal: <strong>{formatCurrency(round.monthlyValue)}</strong></span>}
                                    {round.setupValue !== undefined && <span>Setup: <strong>{formatCurrency(round.setupValue)}</strong></span>}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400"
                      type="button"
                      aria-label={isExpanded ? "Ocultar rodada" : "Exibir rodada"}
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsExpanded((prev) => !prev);
                      }}
                    >
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 pt-0 space-y-4">
                                <Separator />
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-50/50 p-3 rounded-lg border border-zinc-100 space-y-1">
                                        <span className="text-xs text-zinc-500 font-medium">Valor Mensal</span>
                                        <div className="text-lg font-bold text-zinc-900">{formatCurrency(round.monthlyValue || 0)}</div>
                                    </div>
                                    <div className="bg-zinc-50/50 p-3 rounded-lg border border-zinc-100 space-y-1">
                                        <span className="text-xs text-zinc-500 font-medium">Setup (Implantação)</span>
                                        <div className="text-lg font-bold text-zinc-900">{formatCurrency(round.setupValue || 0)}</div>
                                    </div>
                                    <div className="bg-zinc-50/50 p-3 rounded-lg border border-zinc-100 space-y-1">
                                        <span className="text-xs text-zinc-500 font-medium">Valor Total (Contrato)</span>
                                        <div className="text-lg font-bold text-zinc-900">{formatCurrency(round.totalValue || 0)}</div>
                                    </div>
                                    <div className="bg-zinc-50/50 p-3 rounded-lg border border-zinc-100 space-y-1">
                                        <span className="text-xs text-zinc-500 font-medium">Prazo</span>
                                        <div className="text-lg font-bold text-zinc-900 flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-zinc-400" />
                                            {round.termMonths} meses
                                        </div>
                                    </div>
                                </div>

                                {round.conditions && round.conditions.length > 0 && (
                                    <div className="space-y-2">
                                        <span className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Condições</span>
                                        <div className="flex flex-wrap gap-2">
                                            {round.conditions.map((condition, i) => (
                                                <Badge key={i} variant="secondary" className="font-normal text-zinc-600 bg-zinc-100">
                                                    {condition}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {round.details && (
                                     <div className="space-y-2">
                                        <span className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Observações</span>
                                        <p className="text-sm text-zinc-600 bg-zinc-50 p-3 rounded-md border border-zinc-100">
                                            {round.details}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

function NegotiationSummaryCard({ 
    status, 
    lastInternal, 
    lastClient, 
    finalAgreement, 
    onAddRound,
    onDownloadContract
}: { 
    status: string, 
    lastInternal?: NegotiationRound, 
    lastClient?: NegotiationRound, 
    finalAgreement?: NegotiationRound, 
    onAddRound: () => void,
    onDownloadContract: () => void
}) {
    // Determine what to show in the "Current Deal" section
    // If agreed, show agreement. Else show internal proposal (our offer).
    const currentOffer = finalAgreement || lastInternal;

    return (
        <div className="space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <div className="p-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-sm text-zinc-900">Resumo Executivo</h3>
                    <StatusBadge status={status} />
                </div>
                
                <div className="p-5 space-y-6">
                    {/* Main Numbers */}
                    <div>
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                            {finalAgreement ? "Acordo Fechado" : "Nossa Última Oferta"}
                        </span>
                        {currentOffer ? (
                            <div className="mt-2 space-y-1">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-zinc-900">{formatCurrency(currentOffer.monthlyValue || 0)}</span>
                                    <span className="text-sm text-zinc-500 font-medium">/mês</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-zinc-500">
                                    <span>Setup: {formatCurrency(currentOffer.setupValue || 0)}</span>
                                    <span>•</span>
                                    <span>{currentOffer.termMonths} meses</span>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-2 text-sm text-zinc-400 italic">Nenhuma proposta registrada.</div>
                        )}
                    </div>

                    <Separator />

                    {/* Counter Proposal Info */}
                    <div>
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block mb-2">
                            Última Contra Proposta (Cliente)
                        </span>
                        {lastClient ? (
                             <div className="bg-orange-50/50 rounded-lg p-3 border border-orange-100/50">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-orange-900">{formatCurrency(lastClient.monthlyValue || 0)}/mês</span>
                                    <span className="text-xs text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded">
                                        {format(new Date(lastClient.createdAt), "dd/MM")}
                                    </span>
                                </div>
                                <p className="text-xs text-orange-800 line-clamp-2">
                                    {lastClient.details || "Sem detalhes adicionais."}
                                </p>
                             </div>
                        ) : (
                            <div className="text-xs text-zinc-400">Sem contra proposta registrada.</div>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                        {status === 'agreed' ? (
                             <Button
                               type="button"
                               className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200 shadow-none"
                               onClick={onDownloadContract}
                             >
                                <Download className="mr-2 h-4 w-4" /> Baixar Contrato
                             </Button>
                        ) : (
                            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-sm" onClick={onAddRound}>
                                {lastClient && status === 'waiting_approval' ? "Responder Cliente" : "Registrar Nova Rodada"}
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Next Steps Hint */}
            {!finalAgreement && (
                <div className="rounded-lg bg-blue-50/50 border border-blue-100 p-3 flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <div className="text-xs text-blue-700">
                        <strong className="block font-medium mb-0.5">Próximo Passo</strong>
                        {status === 'waiting_client' ? "Aguarde o retorno do cliente sobre a proposta enviada." : "Analise a contra proposta ou registre uma nova oferta."}
                    </div>
                </div>
            )}
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const config = {
        none: { label: "Não iniciada", className: "bg-zinc-100 text-zinc-500" },
        negotiating: { label: "Em negociação", className: "bg-blue-100 text-blue-700" },
        waiting_client: { label: "Aguardando Cliente", className: "bg-purple-100 text-purple-700" },
        waiting_approval: { label: "Aguardando Aprovação", className: "bg-orange-100 text-orange-700" },
        agreed: { label: "Acordo Fechado", className: "bg-green-100 text-green-700" },
    }[status] || { label: "Desconhecido", className: "bg-zinc-100 text-zinc-500" };

    return (
        <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide", config.className)}>
            {config.label}
        </span>
    );
}

function EmptyState({ onStart }: { onStart: () => void }) {
    return (
        <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-10 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-zinc-400" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-1">Nenhuma negociação iniciada</h3>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto mb-6">
                Registre a primeira proposta para começar o histórico de negociação deste deal.
            </p>
            <Button onClick={onStart} variant="outline" className="bg-white hover:bg-zinc-50">
                Registrar Proposta Inicial
            </Button>
        </div>
    );
}

interface NegotiationFormProps {
    onCancel: () => void;
    onSave: (round: NegotiationRound) => void;
}

function NegotiationForm({ onCancel, onSave }: NegotiationFormProps) {
    // Simple controlled inputs for now
    const [type, setType] = useState<NegotiationType>("proposal");
    const [monthly, setMonthly] = useState("");
    const [setup, setSetup] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation would go here
        
        const newRound: NegotiationRound = {
            id: `round-${Date.now()}`,
            type,
            authorId: "current-user",
            authorName: type === 'counter' ? "Cliente" : "Você", // Context aware
            createdAt: new Date().toISOString(),
            monthlyValue: parseFloat(monthly) || 0,
            setupValue: parseFloat(setup) || 0,
            totalValue: (parseFloat(monthly) || 0) * 12 + (parseFloat(setup) || 0), // naive calc
            termMonths: 12,
            conditions: [],
            details,
            status: "active",
        };

        onSave(newRound);
    };

    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm mb-6 ring-1 ring-zinc-200/50">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-sm text-zinc-900">Nova Rodada de Negociação</h3>
                    <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={onCancel}>
                        <ArrowRight className="h-4 w-4 rotate-180" />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-zinc-500">Tipo da Rodada</Label>
                        <Select value={type} onValueChange={(v: NegotiationType) => setType(v)}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="proposal">Proposta (Nossa)</SelectItem>
                                <SelectItem value="counter">Contra Proposta (Cliente)</SelectItem>
                                <SelectItem value="internal">Ajuste Interno</SelectItem>
                                <SelectItem value="agreement">Acordo Final</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-zinc-500">Valor Mensal (R$)</Label>
                        <Input 
                            type="number" 
                            placeholder="0,00" 
                            value={monthly} 
                            onChange={(e) => setMonthly(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-zinc-500">Setup (R$)</Label>
                        <Input 
                            type="number" 
                            placeholder="0,00" 
                            value={setup}
                            onChange={(e) => setSetup(e.target.value)}
                        />
                    </div>
                     <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-zinc-500">Prazo (Meses)</Label>
                        <Input 
                            type="number" 
                            defaultValue={12}
                            disabled
                            className="bg-zinc-50 text-zinc-500"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-zinc-500">Observações / Detalhes</Label>
                    <Textarea 
                        placeholder="Descreva as condições ou justificativas..." 
                        className="resize-none h-20"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <Button type="button" variant="ghost" onClick={onCancel}>Cancelar</Button>
                    <Button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white">Salvar Rodada</Button>
                </div>
            </form>
        </div>
    );
}
