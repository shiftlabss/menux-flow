"use client";

// ============================================================================
// Menux Intelligence — Context Panel (Left Sidebar)
// Connected to store + opportunity data for real client selection
// ============================================================================

import { Search, Clock, X, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useMemo } from "react";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useAuthStore } from "@/stores/auth-store";
import type { ClientPickerItem } from "@/types/intelligence";
import type { Temperature } from "@/types";

const stageLabels: Record<string, string> = {
  "lead-in": "Lead In",
  "contato-feito": "Contato Feito",
  "reuniao-agendada": "Reuniao Agendada",
  "proposta-enviada": "Proposta Enviada",
  negociacao: "Negociacao",
  fechamento: "Fechamento",
};

export function IntelligenceContextPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListScrolled, setIsListScrolled] = useState(false);
  const { contextCard, selectClient, setContextCard, openClientPicker } =
    useIntelligenceStore();
  const { opportunities } = useOpportunityStore();
  const user = useAuthStore((s) => s.user);

  // Build items from real opportunities
  const allItems: ClientPickerItem[] = useMemo(() => {
    return opportunities
      .filter((opp) => {
        if (user?.role === "comercial" || user?.role === "cs") {
          return opp.responsibleId === user.id;
        }
        return true;
      })
      .map((opp) => ({
        id: opp.id,
        entityId: opp.id,
        entityType: "opportunity" as const,
        companyName: opp.clientName ?? opp.title,
        segment: opp.tags?.[0],
        stage: opp.stage,
        stageLabel: stageLabels[opp.stage] ?? opp.stage,
        temperature: opp.temperature,
        lastContact: opp.updatedAt,
        value: opp.monthlyValue,
        tags: opp.tags,
      }));
  }, [opportunities, user]);

  // Priorities: hot leads + overdue (simulated via hot temperature)
  const priorities = useMemo(() => {
    return allItems
      .filter((item) => item.temperature === "hot")
      .slice(0, 5);
  }, [allItems]);

  // Recent: last updated
  const recents = useMemo(() => {
    return [...allItems]
      .sort((a, b) => {
        const da = a.lastContact ? new Date(a.lastContact).getTime() : 0;
        const db = b.lastContact ? new Date(b.lastContact).getTime() : 0;
        return db - da;
      })
      .slice(0, 8);
  }, [allItems]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return allItems.filter(
      (item) =>
        item.companyName.toLowerCase().includes(q) ||
        item.segment?.toLowerCase().includes(q) ||
        item.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [allItems, searchQuery]);

  const handleSelectItem = (item: ClientPickerItem) => {
    selectClient(item);
  };

  const initials = (name: string) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };

  const colorForIndex = (i: number) => {
    const colors = [
      "bg-blue-400/18 text-blue-100",
      "bg-emerald-400/18 text-emerald-100",
      "bg-amber-400/18 text-amber-100",
      "bg-indigo-400/18 text-indigo-100",
      "bg-rose-400/18 text-rose-100",
      "bg-cyan-400/18 text-cyan-100",
    ];
    return colors[i % colors.length];
  };

  return (
    <div className="flex h-full flex-col bg-transparent text-slate-200">
      {/* Search Block */}
      <div
        className={cn(
          "sticky top-0 z-10 shrink-0 border-b border-white/10 bg-slate-950/36 p-4 backdrop-blur-sm transition-shadow duration-120 ease-out",
          isListScrolled && "shadow-[0_14px_22px_-18px_rgba(2,6,23,0.9)]"
        )}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Buscar cliente, deal ou tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-xl border-white/16 bg-slate-900/55 pl-9 font-body text-sm text-slate-100 placeholder:text-slate-400 transition-all focus:bg-slate-900/70"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div
        className="min-h-0 flex-1 overflow-y-auto"
        onScroll={(event) => {
          const target = event.currentTarget;
          setIsListScrolled(target.scrollTop > 6);
        }}
      >
        <div className="flex flex-col p-2 gap-6 pb-20">
          {/* Selected Client Card */}
          {contextCard && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-2 mt-2 rounded-xl border border-cyan-300/22 bg-cyan-400/12 p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/70 text-sm font-bold text-white">
                    {initials(contextCard.cardName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-100 leading-tight">
                      {contextCard.cardName}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-slate-300">
                      {temperatureEmoji(contextCard.temperature)}
                      {contextCard.stageLabel}
                      {contextCard.leadScore ? ` · ${contextCard.leadScore} pts` : ""}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 -mr-2 text-slate-400 hover:text-slate-100"
                  onClick={() => setContextCard(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="rounded-lg border border-white/14 bg-slate-950/42 p-2">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">
                    Fase
                  </span>
                  <p className="text-xs font-medium text-slate-200">
                    {contextCard.stageLabel}
                  </p>
                </div>
                <div className="rounded-lg border border-white/14 bg-slate-950/42 p-2">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">
                    Tags
                  </span>
                  <p className="text-xs font-medium text-slate-200">
                    {contextCard.tags.length > 0 ? contextCard.tags.join(", ") : "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 flex-1 border-white/14 bg-white/6 text-xs text-slate-100 hover:bg-white/10"
                  onClick={() => {
                    useIntelligenceStore
                      .getState()
                      .executeSlashCommand("/briefing");
                  }}
                >
                  📋 Briefing
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 flex-1 border-white/14 bg-white/6 text-xs text-slate-100 hover:bg-white/10"
                  onClick={() => {
                    useIntelligenceStore
                      .getState()
                      .executeSlashCommand("/analise");
                  }}
                >
                  🔍 Analisar
                </Button>
              </div>
            </motion.div>
          )}

          {/* Search Results */}
          {searchResults !== null ? (
            <div className="px-2">
              <h4 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 px-2">
                Resultados ({searchResults.length})
              </h4>
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((item, i) => (
                    <ClientRow
                      key={item.id}
                      item={item}
                      initials={initials(item.companyName)}
                      color={colorForIndex(i)}
                      isSelected={contextCard?.cardId === item.entityId}
                      onClick={() => handleSelectItem(item)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 px-2">
                  Nenhum resultado para &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          ) : (
            <>
              {/* Priorities Section */}
              {priorities.length > 0 && (
                <div className="px-2">
                  <div className="flex items-center justify-between mb-2 px-2">
                    <h4 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Prioridades
                    </h4>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1">
                      {priorities.length}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    {priorities.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleSelectItem(item)}
                        whileHover={{ y: -1, scale: 1.005 }}
                        whileTap={{ y: 0, scale: 0.992 }}
                        className={cn(
                          "w-full text-left flex items-start gap-3 p-2.5 rounded-lg transition-all group",
                          contextCard?.cardId === item.entityId
                            ? "border-brand/20 bg-brand/10 shadow-sm ring-1 ring-brand/20"
                            : "border border-transparent hover:bg-white/6"
                        )}
                      >
                        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-400 shadow-amber-300/40" />
                        <div className="flex-1 min-w-0">
                          <p className="mb-1 text-sm leading-none font-medium text-slate-100 group-hover:text-cyan-200">
                            {item.companyName}
                          </p>
                          <p className="line-clamp-1 text-xs text-slate-400">
                            {item.stageLabel}
                          </p>
                          {item.lastContact && (
                            <div className="mt-1.5 flex items-center gap-1 text-[10px] text-slate-400">
                              <Clock className="h-3 w-3" />
                              {relativeTime(item.lastContact)}
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Section */}
              {recents.length > 0 && (
                <div className="px-2">
                  <h4 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 px-2">
                    Recentes
                  </h4>
                  <div className="space-y-1">
                    {recents.map((item, i) => (
                      <ClientRow
                        key={item.id}
                        item={item}
                        initials={initials(item.companyName)}
                        color={colorForIndex(i)}
                        isSelected={contextCard?.cardId === item.entityId}
                        onClick={() => handleSelectItem(item)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state */}
              {allItems.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                  <Users className="mb-3 h-8 w-8 text-slate-500" />
                  <p className="mb-2 text-sm text-slate-300">
                    Nenhum cliente encontrado
                  </p>
                  <p className="text-xs text-slate-400">
                    Seus leads e oportunidades aparecerão aqui automaticamente.
                  </p>
                </div>
              )}

              {/* Browse all */}
              {allItems.length > 0 && (
                <div className="px-2">
                  <button
                    onClick={openClientPicker}
                    className="flex w-full items-center gap-2 p-2 text-xs font-medium text-cyan-200 transition-colors hover:text-cyan-100"
                  >
                    <Users className="h-3.5 w-3.5" />
                    Ver todos os clientes ({allItems.length})
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ClientRow({
  item,
  initials,
  color,
  isSelected,
  onClick,
}: {
  item: ClientPickerItem;
  initials: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -1, scale: 1.008 }}
      whileTap={{ y: 0, scale: 0.992 }}
      className={cn(
        "w-full text-left flex items-center gap-3 p-2 rounded-lg transition-all group",
        isSelected
          ? "border-brand/20 bg-brand/10 shadow-sm ring-1 ring-brand/20"
          : "border border-transparent hover:bg-white/6"
      )}
    >
      <div
        className={cn(
          "h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0",
          color
        )}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-slate-100 group-hover:text-cyan-200">
          {item.companyName}
        </p>
        <p className="flex items-center gap-1 truncate text-xs text-slate-400">
          {temperatureEmoji(item.temperature)} {item.stageLabel}
        </p>
      </div>
    </motion.button>
  );
}

function relativeTime(dateStr?: string): string {
  if (!dateStr) return "—";
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "hoje";
  if (diffDays === 1) return "ha 1 dia";
  if (diffDays < 7) return `ha ${diffDays} dias`;
  if (diffDays < 30) return `ha ${Math.floor(diffDays / 7)} semana(s)`;
  return `ha ${Math.floor(diffDays / 30)} mes(es)`;
}

function temperatureEmoji(t: Temperature) {
  return t === "hot" ? "🔥" : t === "warm" ? "🌡️" : "❄️";
}
