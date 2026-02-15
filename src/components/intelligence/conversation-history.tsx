"use client";

// ============================================================================
// Menux Intelligence — Conversation History Panel
// Ref: docs/Menux Intelligence.md — seção 7.2
// ============================================================================

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, MessageSquare, ArrowLeft, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIntelligenceStore } from "@/stores/intelligence-store";

// ─── Relative date ──────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hoje";
  if (diffDays === 1) return "Ontem";
  if (diffDays < 7) return `${diffDays} dias atrás`;

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

// ─── Component ──────────────────────────────────────────────────────────

export function ConversationHistory() {
  const {
    history,
    isHistoryOpen,
    toggleHistory,
    loadConversation,
  } = useIntelligenceStore();

  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar por texto — seção 7.2
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return history;
    const q = searchQuery.toLowerCase();
    return history.filter(
      (convo) =>
        convo.preview.toLowerCase().includes(q) ||
        convo.relatedCardName?.toLowerCase().includes(q) ||
        convo.messages.some((m) => m.content.toLowerCase().includes(q))
    );
  }, [history, searchQuery]);

  return (
    <AnimatePresence>
      {isHistoryOpen && (
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-20 flex flex-col border-r border-white/12 bg-slate-950/94 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <button
              onClick={toggleHistory}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/8 hover:text-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <Clock className="h-4 w-4 text-slate-400" />
            <h3 className="flex-1 font-heading text-sm font-semibold text-slate-100">
              Histórico de conversas
            </h3>
            <button
              onClick={toggleHistory}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/8 hover:text-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Search */}
          <div className="px-4 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar no histórico..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 border-white/16 bg-white/7 pl-8 text-xs text-slate-100 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Conversations list */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filtered.length > 0 ? (
                filtered.map((convo) => (
                  <button
                    key={convo.id}
                    onClick={() => loadConversation(convo.id)}
                    className="flex w-full flex-col gap-1 rounded-xl border border-transparent px-3 py-2.5 text-left transition-colors hover:border-white/12 hover:bg-white/7"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                      <span className="truncate text-xs font-medium text-slate-100">
                        {convo.preview || "Conversa sem preview"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pl-5">
                      <span className="text-[10px] text-slate-400">
                        {formatDate(convo.createdAt)}
                      </span>
                      {convo.relatedCardName && (
                        <>
                          <span className="text-[10px] text-slate-500">·</span>
                          <span className="text-[10px] text-cyan-200">
                            {convo.relatedCardName}
                          </span>
                        </>
                      )}
                      <span className="text-[10px] text-slate-500">·</span>
                      <span className="text-[10px] text-slate-400">
                        {convo.messageCount} msgs
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Clock className="mb-2 h-6 w-6 text-slate-500" />
                  <p className="text-center text-xs text-slate-400">
                    {searchQuery
                      ? "Nenhuma conversa encontrada."
                      : "Sem conversas anteriores. Inicie uma conversa com a Menux Intelligence!"}
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
