"use client";

// ============================================================================
// Menux Intelligence — Execution Panel (Right Sidebar)
// Painel com dados computados em tempo real: prioridades, insights, ganhos
// rápidos, alertas de risco e ações rápidas.
// ============================================================================

import {
  Calendar,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  Mail,
  MessageSquare,
  FileText,
  Zap,
  Target,
  ShieldAlert,
  Trophy,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Sunrise,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAvailableCommands } from "@/lib/intelligence-commands";
import type { SlashCommand, UserRoleIntelligence } from "@/types/intelligence";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useAuthStore } from "@/stores/auth-store";
import { useExecutionPanelData } from "@/hooks/use-execution-panel-data";
import { formatCurrencyBRL } from "@/lib/business-rules";

function isIntelligenceRole(
  role: string | undefined
): role is UserRoleIntelligence {
  return (
    role === "master" ||
    role === "admin" ||
    role === "comercial" ||
    role === "cs"
  );
}

export function IntelligenceExecutionPanel() {
  const { contextCard, executeSlashCommand, proactiveSuggestions, dismissSuggestion, menuxIntelligenceMode } =
    useIntelligenceStore();
  const { opportunities } = useOpportunityStore();
  const userRole = useAuthStore((s) => s.user?.role);

  const { priorities, insights, quickWins, riskAlerts } =
    useExecutionPanelData();

  const hasClient = !!contextCard;

  const pendingSuggestions = proactiveSuggestions.filter((s) => !s.dismissed);

  // Mode-based section visibility
  const sectionVisibility: Record<string, { suggestions: boolean; priorities: boolean; actions: boolean; insights: boolean; quickWins: boolean; risks: boolean }> = {
    focus: { suggestions: true, priorities: true, actions: true, insights: false, quickWins: false, risks: false },
    audit: { suggestions: false, priorities: false, actions: true, insights: true, quickWins: true, risks: true },
    reply: { suggestions: true, priorities: true, actions: true, insights: false, quickWins: false, risks: false },
    proposal: { suggestions: false, priorities: false, actions: true, insights: true, quickWins: true, risks: false },
  };

  const visible = sectionVisibility[menuxIntelligenceMode] ?? sectionVisibility.focus;

  // Mode-based quick action filtering
  const quickActionFilter: Record<string, string[]> = {
    focus: ["whatsapp", "email", "agendar", "proposta", "resumo", "funil", "riscos", "planos"],
    audit: ["resumo", "funil", "riscos", "planos"],
    reply: ["whatsapp", "email", "agendar"],
    proposal: ["proposta", "planos"],
  };

  const allowedQuickActions = quickActionFilter[menuxIntelligenceMode] ?? quickActionFilter.focus;
  const availableCommandSet = useMemo(() => {
    if (!isIntelligenceRole(userRole)) return new Set<SlashCommand>();
    return new Set(getAvailableCommands(userRole).map((command) => command.command));
  }, [userRole]);

  const allQuickActions = [
    { key: "whatsapp", command: "/mensagem" as SlashCommand, icon: <MessageSquare className="h-3.5 w-3.5" />, label: "WhatsApp", color: "border-emerald-300/25 bg-emerald-400/12 text-emerald-100 hover:bg-emerald-400/18 hover:border-emerald-300/40", needsClient: true },
    { key: "email", command: "/mensagem" as SlashCommand, icon: <Mail className="h-3.5 w-3.5" />, label: "Email", color: "border-cyan-300/25 bg-cyan-400/12 text-cyan-100 hover:bg-cyan-400/18 hover:border-cyan-300/40", needsClient: true },
    { key: "agendar", command: "/followup" as SlashCommand, icon: <Calendar className="h-3.5 w-3.5" />, label: "Follow-up", color: "border-violet-300/25 bg-violet-400/12 text-violet-100 hover:bg-violet-400/18 hover:border-violet-300/40", needsClient: true },
    { key: "proposta", command: "/pitch" as SlashCommand, icon: <Target className="h-3.5 w-3.5" />, label: "Pitch", color: "border-amber-300/25 bg-amber-400/12 text-amber-100 hover:bg-amber-400/18 hover:border-amber-300/40", needsClient: true },
    { key: "resumo", command: "/resumo" as SlashCommand, icon: <Sunrise className="h-3.5 w-3.5" />, label: "Resumo", color: "border-indigo-300/25 bg-indigo-400/12 text-indigo-100 hover:bg-indigo-400/18 hover:border-indigo-300/40", needsClient: false },
    { key: "funil", command: "/funil" as SlashCommand, icon: <TrendingUp className="h-3.5 w-3.5" />, label: "Funil", color: "border-blue-300/25 bg-blue-400/12 text-blue-100 hover:bg-blue-400/18 hover:border-blue-300/40", needsClient: false },
    { key: "riscos", command: "/riscos" as SlashCommand, icon: <ShieldAlert className="h-3.5 w-3.5" />, label: "Riscos", color: "border-rose-300/25 bg-rose-400/12 text-rose-100 hover:bg-rose-400/18 hover:border-rose-300/40", needsClient: false },
    { key: "planos", command: "/planos" as SlashCommand, icon: <FileText className="h-3.5 w-3.5" />, label: "Planos", color: "border-slate-300/25 bg-slate-400/12 text-slate-100 hover:bg-slate-400/18 hover:border-slate-200/35", needsClient: false },
  ];

  const filteredQuickActions = allQuickActions.filter(
    (action) =>
      allowedQuickActions.includes(action.key) &&
      availableCommandSet.has(action.command)
  );

  // Collapsible sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    priorities: true,
    actions: true,
    insights: true,
    quickWins: false,
    risks: true,
    suggestions: true,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Quick action handlers
  const handleQuickAction = (action: string) => {
    switch (action) {
      case "whatsapp":
        executeSlashCommand("/mensagem", "WhatsApp");
        break;
      case "email":
        executeSlashCommand("/mensagem", "email");
        break;
      case "agendar":
        executeSlashCommand("/followup");
        break;
      case "proposta":
        executeSlashCommand("/pitch");
        break;
      case "funil":
        executeSlashCommand("/funil");
        break;
      case "planos":
        executeSlashCommand("/planos");
        break;
      case "resumo":
        executeSlashCommand("/resumo");
        break;
      case "riscos":
        executeSlashCommand("/riscos");
        break;
    }
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-transparent">
      <div className="p-5 space-y-6">
        {/* Proactive Suggestions */}
        {visible.suggestions && pendingSuggestions.length > 0 && (
          <section>
            <SectionHeader
              icon={<Sunrise className="h-4 w-4 text-violet-500" />}
              title="Sugestoes da Menux Intelligence"
              count={pendingSuggestions.length}
              expanded={expandedSections.suggestions}
              onToggle={() => toggleSection("suggestions")}
              accentColor="violet"
            />
            <AnimatePresence>
              {expandedSections.suggestions && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mt-3">
                    {pendingSuggestions.slice(0, 5).map((suggestion) => (
                      <motion.div
                        key={suggestion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={cn(
                          "rounded-lg border p-3 text-xs",
                          suggestion.priority === "high"
                            ? "border-red-300/35 bg-red-500/12"
                            : suggestion.priority === "medium"
                              ? "border-amber-300/35 bg-amber-500/12"
                              : "border-white/14 bg-white/7"
                        )}
                      >
                        <p className={cn(
                          "leading-relaxed",
                          suggestion.priority === "high" ? "text-red-100" :
                          suggestion.priority === "medium" ? "text-amber-100" :
                          "text-slate-200"
                        )}>
                          {suggestion.message}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          {suggestion.cardName && (
                            <button
                              onClick={() => {
                                const opp = opportunities.find(
                                  (o) => o.id === suggestion.cardId || o.clientName === suggestion.cardName
                                );
                                if (opp) {
                                  useIntelligenceStore.getState().selectClient({
                                    id: opp.id,
                                    entityId: opp.id,
                                    entityType: "opportunity",
                                    companyName: opp.clientName ?? opp.title,
                                    stage: opp.stage,
                                    stageLabel: opp.stage,
                                    temperature: opp.temperature,
                                    lastContact: opp.updatedAt,
                                    value: opp.monthlyValue,
                                    tags: opp.tags,
                                  });
                                }
                              }}
                              className="text-[10px] font-medium text-cyan-200 hover:text-cyan-100"
                            >
                              Investigar →
                            </button>
                          )}
                          <button
                            onClick={() => dismissSuggestion(suggestion.id)}
                            className="ml-auto text-[10px] text-slate-400 hover:text-slate-200"
                          >
                            Dispensar
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Priorities */}
        {visible.priorities && (<section>
          <SectionHeader
            icon={<Clock className="h-4 w-4 text-red-500" />}
            title="Prioridades de Hoje"
            count={priorities.length}
            expanded={expandedSections.priorities}
            onToggle={() => toggleSection("priorities")}
            accentColor="red"
          />
          <AnimatePresence>
            {expandedSections.priorities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {priorities.length > 0 ? (
                  <div className="space-y-2 mt-3">
                    {priorities.map((item) => (
                      <PriorityCard
                        key={item.id}
                        severity={item.severity}
                        title={item.title}
                        subtitle={item.subtitle}
                        type={item.type}
                        onClick={() => {
                          if (item.linkedEntityId) {
                            const opp = opportunities.find((o) => o.id === item.linkedEntityId);
                            if (opp) {
                              useIntelligenceStore.getState().selectClient({
                                id: opp.id,
                                entityId: opp.id,
                                entityType: "opportunity",
                                companyName: opp.clientName ?? opp.title,
                                stage: opp.stage,
                                stageLabel: opp.stage,
                                temperature: opp.temperature,
                                lastContact: opp.updatedAt,
                                value: opp.monthlyValue,
                                tags: opp.tags,
                              });
                            }
                          }
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-white/14 bg-slate-900/55 p-3 text-center mt-3">
                    <p className="text-xs text-slate-400">
                      ✅ Nenhuma prioridade urgente.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>)}

        {/* Quick Actions */}
        {visible.actions && (<section>
          <SectionHeader
            icon={<Zap className="h-4 w-4 text-amber-500 fill-amber-500" />}
            title="Acoes Rapidas"
            expanded={expandedSections.actions}
            onToggle={() => toggleSection("actions")}
            accentColor="amber"
          />
          <AnimatePresence>
            {expandedSections.actions && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <TooltipProvider>
                  <div className="mt-3 grid grid-cols-1 gap-2 [@media(min-width:1200px)]:grid-cols-2">
                    {filteredQuickActions.map((action) => (
                      <QuickActionCard
                        key={action.key}
                        icon={action.icon}
                        label={action.label}
                        color={action.color}
                        onClick={() => handleQuickAction(action.key)}
                        disabled={action.needsClient && !hasClient}
                        tooltip={action.needsClient && !hasClient ? "Selecione um cliente primeiro" : undefined}
                      />
                    ))}
                  </div>
                </TooltipProvider>
              </motion.div>
            )}
          </AnimatePresence>
        </section>)}

        {/* Smart Insights */}
        {visible.insights && insights.length > 0 && (
          <section>
            <SectionHeader
              icon={<BarChart3 className="h-4 w-4 text-indigo-500" />}
              title="Insights Inteligentes"
              count={insights.length}
              expanded={expandedSections.insights}
              onToggle={() => toggleSection("insights")}
              accentColor="indigo"
            />
            <AnimatePresence>
              {expandedSections.insights && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mt-3">
                    {insights.map((insight) => (
                      <InsightCard
                        key={insight.id}
                        title={insight.title}
                        description={insight.description}
                        metric={insight.metric}
                        actionLabel={insight.actionLabel}
                        onAction={
                          insight.actionCommand
                            ? () =>
                                executeSlashCommand(
                                  insight.actionCommand as SlashCommand
                                )
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Quick Wins */}
        {visible.quickWins && quickWins.length > 0 && (
          <section>
            <SectionHeader
              icon={<Trophy className="h-4 w-4 text-emerald-500" />}
              title="Ganhos Rapidos"
              count={quickWins.length}
              expanded={expandedSections.quickWins}
              onToggle={() => toggleSection("quickWins")}
              accentColor="emerald"
            />
            <AnimatePresence>
              {expandedSections.quickWins && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mt-3">
                    {quickWins.map((qw) => (
                      <div
                        key={qw.id}
                        onClick={() => {
                          const opp = opportunities.find(
                            (o) => o.id === qw.opportunityId
                          );
                          if (opp) {
                            useIntelligenceStore.getState().selectClient({
                              id: opp.id,
                              entityId: opp.id,
                              entityType: "opportunity",
                              companyName: opp.clientName ?? opp.title,
                              stage: opp.stage,
                              stageLabel: opp.stage,
                              temperature: opp.temperature,
                              lastContact: opp.updatedAt,
                              value: opp.monthlyValue,
                              tags: opp.tags,
                            });
                          }
                        }}
                        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-emerald-300/24 bg-emerald-400/8 p-3 transition-all hover:border-emerald-300/38 hover:shadow-sm"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="line-clamp-1 text-xs font-medium text-slate-100 transition-colors group-hover:text-emerald-100">
                            {qw.clientName}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {qw.reason} · {formatCurrencyBRL(qw.value)}/mes
                          </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1.5">
                          <div
                            className={cn(
                              "h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold",
                              qw.probability >= 70
                                ? "bg-emerald-400/20 text-emerald-100"
                                : qw.probability >= 50
                                  ? "bg-amber-400/20 text-amber-100"
                                  : "bg-slate-700/70 text-slate-200"
                            )}
                          >
                            {qw.probability}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Risk Alerts */}
        {visible.risks && riskAlerts.length > 0 && (
          <section>
            <SectionHeader
              icon={<ShieldAlert className="h-4 w-4 text-red-500" />}
              title="Alertas de Risco"
              count={riskAlerts.length}
              expanded={expandedSections.risks}
              onToggle={() => toggleSection("risks")}
              accentColor="red"
            />
            <AnimatePresence>
              {expandedSections.risks && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mt-3">
                    {riskAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => {
                          if (alert.linkedEntityId) {
                            const opp = opportunities.find(
                              (o) => o.id === alert.linkedEntityId
                            );
                            if (opp) {
                              useIntelligenceStore.getState().selectClient({
                                id: opp.id,
                                entityId: opp.id,
                                entityType: "opportunity",
                                companyName: opp.clientName ?? opp.title,
                                stage: opp.stage,
                                stageLabel: opp.stage,
                                temperature: opp.temperature,
                                lastContact: opp.updatedAt,
                                value: opp.monthlyValue,
                                tags: opp.tags,
                              });
                            }
                          }
                        }}
                        className={cn(
                          "rounded-lg border p-3 cursor-pointer transition-all",
                          alert.severity === "critical"
                            ? "border-red-300/35 bg-red-500/12 hover:border-red-300/50"
                            : "border-amber-300/35 bg-amber-500/12 hover:border-amber-300/50"
                        )}
                      >
                        <p
                          className={cn(
                            "font-medium text-xs",
                            alert.severity === "critical"
                              ? "text-red-100"
                              : "text-amber-100"
                          )}
                        >
                          {alert.title}
                        </p>
                        <p
                          className={cn(
                            "text-[10px] mt-0.5",
                            alert.severity === "critical"
                              ? "text-red-200"
                              : "text-amber-200"
                          )}
                        >
                          {alert.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Context-aware card insights (when a card is selected) */}
        {contextCard && (
          <section>
            <SectionHeader
              icon={<Target className="h-4 w-4 text-violet-500" />}
              title={`Contexto: ${contextCard.cardName}`}
              accentColor="violet"
            />
            <div className="space-y-2 mt-3">
              <InsightCard
                title={
                  contextCard.temperature === "hot"
                    ? "Lead quente!"
                    : contextCard.temperature === "cold"
                      ? "Lead frio"
                      : "Lead morno"
                }
                description={
                  contextCard.temperature === "hot"
                    ? "Momento ideal para avancar com proposta ou demonstracao."
                    : contextCard.temperature === "cold"
                      ? "Considere reengajamento antes de oferecer algo."
                      : "Mantenha contato e identifique gatilhos de decisao."
                }
                actionLabel="Analise completa"
                onAction={() => executeSlashCommand("/analise")}
              />

              {contextCard.registeredObjections.length > 0 && (
                <InsightCard
                  title={`${contextCard.registeredObjections.length} objecao(oes)`}
                  description="Use /objecao para preparar contra-argumentos personalizados."
                  actionLabel="Quebrar objecao"
                  onAction={() =>
                    executeSlashCommand(
                      "/objecao",
                      contextCard.registeredObjections[0]
                    )
                  }
                />
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeader({
  icon,
  title,
  count,
  expanded,
  onToggle,
  accentColor = "zinc",
}: {
  icon: React.ReactNode;
  title: string;
  count?: number;
  expanded?: boolean;
  onToggle?: () => void;
  accentColor?: string;
}) {
  const content = (
    <>
      {icon}
      <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 flex-1 text-left">
        {title}
      </h3>
      {typeof count === "number" && count > 0 && (
        <span
          className={cn(
            "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
            accentColor === "red"
              ? "bg-red-500/22 text-red-100"
              : accentColor === "amber"
                ? "bg-amber-500/22 text-amber-100"
                : accentColor === "emerald"
                  ? "bg-emerald-500/22 text-emerald-100"
                  : accentColor === "violet"
                    ? "bg-violet-500/22 text-violet-100"
                    : "bg-indigo-500/22 text-indigo-100"
          )}
        >
          {count}
        </span>
      )}
    </>
  );

  if (!onToggle) {
    return <div className="flex items-center gap-2 w-full px-1">{content}</div>;
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 w-full px-1 group"
    >
      {content}
      <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
        {expanded ? (
          <ChevronUp className="h-3.5 w-3.5" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}

function PriorityCard({
  severity,
  title,
  subtitle,
  type,
  onClick,
}: {
  severity: "critical" | "warning" | "info";
  title: string;
  subtitle: string;
  type: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer",
        severity === "critical"
          ? "border-red-300/30 bg-red-500/11 hover:border-red-300/45"
          : severity === "warning"
            ? "border-amber-300/30 bg-amber-500/11 hover:border-amber-300/45"
            : "border-white/14 bg-white/7 hover:border-cyan-300/30"
      )}
    >
      <div
        className={cn(
          "h-6 w-6 shrink-0 rounded-full flex items-center justify-center mt-0.5",
          severity === "critical"
            ? "bg-red-400/20"
            : severity === "warning"
              ? "bg-amber-400/20"
              : "bg-slate-700/65"
        )}
      >
        {type === "overdue" ? (
          <AlertTriangle className={cn("h-3 w-3", severity === "critical" ? "text-red-100" : "text-amber-100")} />
        ) : type === "sla-warning" ? (
          <Clock className="h-3 w-3 text-red-100" />
        ) : type === "hot-idle" ? (
          <Zap className="h-3 w-3 fill-amber-100 text-amber-100" />
        ) : (
          <Calendar className="h-3 w-3 text-slate-200" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-xs text-slate-100 line-clamp-1">
          {title}
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
          {subtitle}
        </p>
      </div>
      <ArrowRight className="h-3 w-3 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
    </div>
  );
}

function QuickActionCard({
  label,
  icon,
  color,
  onClick,
  disabled,
  tooltip,
}: {
  label: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
  disabled?: boolean;
  tooltip?: string;
}) {
  const button = (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={cn(
        "flex h-20 flex-col items-center justify-center gap-1.5 rounded-lg border p-2.5 text-sm font-medium transition-all",
        disabled
          ? "cursor-not-allowed border-white/10 bg-slate-900/35 text-slate-500 opacity-50"
          : color
      )}
    >
      {icon}
      <span className="text-[10px]">{label}</span>
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="top">{tooltip}</TooltipContent>
      </Tooltip>
    );
  }

  return button;
}

function InsightCard({
  title,
  description,
  metric,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  metric?: { value: string; trend: "up" | "down" | "stable" };
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-indigo-300/22 bg-indigo-400/8 p-3">
      <div className="flex items-center justify-between mb-1">
        <span className="font-semibold text-xs text-slate-100">{title}</span>
        {metric && (
          <span
            className={cn(
              "text-xs font-bold",
              metric.trend === "up"
                ? "text-emerald-200"
                : metric.trend === "down"
                  ? "text-red-200"
                  : "text-slate-400"
            )}
          >
            {metric.value}{" "}
            {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→"}
          </span>
        )}
      </div>
      <p className="text-[10px] text-slate-300 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button
          variant="link"
          className="mt-1 h-auto p-0 text-[10px] text-cyan-200 hover:text-cyan-100"
          onClick={onAction}
        >
          {actionLabel} <ArrowRight className="h-2.5 w-2.5 ml-0.5" />
        </Button>
      )}
    </div>
  );
}
