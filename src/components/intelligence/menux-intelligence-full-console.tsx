"use client";

// ============================================================================
// Menux Intelligence — Full Console (Chat + Composer)
// Connected to Zustand store for real message flow
// ============================================================================

import { Send, Sparkles, Command, X, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useState, useRef, useEffect, useCallback, useMemo, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { IntelligenceMessage } from "./intelligence-message";
import { SlashCommandMenu } from "./slash-command-menu";
import { ConversationHistory } from "./conversation-history";
import { ClientPickerModal } from "./client-picker-modal";
import type { SlashCommandDefinition, SlashCommand } from "@/types/intelligence";
import { INTELLIGENCE_LIMITS } from "@/types/intelligence";

export function MenuxIntelligenceFullConsole() {
  const [inputValue, setInputValue] = useState("");
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [pendingCommand, setPendingCommand] = useState<SlashCommandDefinition | null>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const {
    messages,
    isTyping,
    greetingSent,
    contextCard,
    remainingQueries,
    viewingHistoryConversation,
    sendMessage,
    executeSlashCommand,
    open: initConversation,
  } = useIntelligenceStore();

  // Initialize conversation with greeting on mount
  useEffect(() => {
    if (!greetingSent) {
      initConversation();
    }
  }, [greetingSent, initConversation]);

  const scrollToLatest = useCallback((behavior: ScrollBehavior = "smooth") => {
    const viewport = chatScrollRef.current;
    if (!viewport) return;
    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior,
    });
  }, []);

  const handleChatScroll = useCallback(() => {
    const viewport = chatScrollRef.current;
    if (!viewport) return;
    const distanceToBottom =
      viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight;
    setIsAtBottom(distanceToBottom <= 36);
  }, []);

  // Auto-scroll to bottom on new messages when user is near bottom
  useEffect(() => {
    if (!isAtBottom) return;
    const frame = requestAnimationFrame(() => scrollToLatest("smooth"));
    return () => cancelAnimationFrame(frame);
  }, [messages, isTyping, isAtBottom, scrollToLatest]);

  // Display messages: either active conversation or history
  const displayMessages = viewingHistoryConversation
    ? viewingHistoryConversation.messages
    : messages;

  const isReadOnly = !!viewingHistoryConversation;
  const showJumpToLatest = !isAtBottom && displayMessages.length > 0;

  useEffect(() => {
    handleChatScroll();
  }, [displayMessages.length, handleChatScroll]);

  // Detect slash command input
  useEffect(() => {
    startTransition(() => {
      if (inputValue.startsWith("/") && !pendingCommand) {
        setShowSlashMenu(true);
      } else if (!inputValue.startsWith("/")) {
        setShowSlashMenu(false);
      }
    });
  }, [inputValue, pendingCommand]);

  // Handle send
  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isReadOnly) return;

    const text = inputValue.trim();
    setInputValue("");
    setShowSlashMenu(false);

    if (pendingCommand) {
      // Sending payload for a slash command that requires input
      await executeSlashCommand(pendingCommand.command, text);
      setPendingCommand(null);
    } else if (text.startsWith("/")) {
      // Direct slash command without payload (e.g. user typed /briefing and pressed enter)
      const cmd = text.split(" ")[0] as SlashCommand;
      const payload = text.slice(cmd.length).trim();
      await executeSlashCommand(cmd, payload || undefined);
    } else {
      await sendMessage(text);
    }
  }, [inputValue, pendingCommand, isReadOnly, sendMessage, executeSlashCommand]);

  // Handle slash command selection from menu
  const handleSlashCommandSelect = useCallback(
    (cmd: SlashCommandDefinition) => {
      setShowSlashMenu(false);
      if (cmd.requiresInput) {
        setPendingCommand(cmd);
        setInputValue("");
        inputRef.current?.focus();
      } else {
        setInputValue("");
        executeSlashCommand(cmd.command);
      }
    },
    [executeSlashCommand]
  );

  // Handle key press in input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!showSlashMenu) {
        handleSend();
      }
    }
    if (e.key === "Escape" && pendingCommand) {
      setPendingCommand(null);
      setInputValue("");
    }
  };

  // Group messages by role for WhatsApp-style grouping
  const groupedMessages = useMemo(() => {
    return displayMessages.map((msg, i) => {
      const prev = displayMessages[i - 1];
      const next = displayMessages[i + 1];
      const isGrouped = prev?.role === msg.role;
      const isLastInGroup = !next || next.role !== msg.role;
      return { message: msg, isGrouped, isLastInGroup };
    });
  }, [displayMessages]);

  // Placeholder text
  const placeholder = pendingCommand
    ? pendingCommand.inputPlaceholder ?? "Digite o complemento..."
    : contextCard
      ? `Pergunte sobre ${contextCard.cardName}...`
      : "Digite uma mensagem ou /comando...";

  return (
    <div className="relative flex h-full flex-col bg-transparent">
      {/* History Panel (overlay) */}
      <ConversationHistory />

      {/* Client Picker Modal */}
      <ClientPickerModal />

      {/* Read-only history banner */}
      <AnimatePresence>
        {isReadOnly && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center justify-between border-b border-amber-300/25 bg-amber-500/12 px-4 py-2 backdrop-blur-sm"
          >
            <p className="text-xs font-medium text-amber-200">
              Visualizando conversa do historico (somente leitura)
            </p>
            <button
              onClick={() => useIntelligenceStore.getState().exitHistoryView()}
              className="text-xs font-semibold text-amber-100 underline hover:text-amber-50"
            >
              Voltar para conversa ativa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner Proativo — sugestão de maior prioridade */}
      <ProactiveBanner />

      {/* Chat Area */}
      <div
        ref={chatScrollRef}
        onScroll={handleChatScroll}
        className="flex-1 overflow-y-auto p-4"
      >
        <div className="flex flex-col pb-4 max-w-3xl mx-auto w-full">
          {/* Day Divider */}
          <div className="flex justify-center my-4">
            <span className="rounded-full border border-white/18 bg-white/8 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300 shadow-sm">
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </span>
          </div>

          {/* Messages */}
          {groupedMessages.map(({ message, isGrouped, isLastInGroup }) => (
            <IntelligenceMessage
              key={message.id}
              message={message}
              isReadOnly={isReadOnly}
              isGrouped={isGrouped}
              isLastInGroup={isLastInGroup}
            />
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 mt-2">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/80 to-blue-500/85 text-white shadow-sm ring-2 ring-white/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex h-10 items-center gap-1.5 rounded-2xl rounded-tl-sm border border-white/12 bg-slate-900/55 px-4 shadow-sm">
                <span className="premium-glow-dot h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                <span className="premium-glow-dot h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                <span className="premium-glow-dot h-2 w-2 animate-bounce rounded-full bg-slate-300" />
              </div>
            </div>
          )}

          {/* Empty state */}
          {displayMessages.length === 0 && !isTyping && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/80 to-blue-500/85 text-white shadow-lg">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mb-1 font-heading text-lg font-bold text-slate-100">
                Menux Intelligence
              </h3>
              <p className="max-w-sm text-sm text-slate-300">
                Seu assistente de vendas inteligente. Faça perguntas, use comandos
                com <kbd className="rounded border border-white/18 bg-white/8 px-1 text-xs text-slate-100">/</kbd> ou selecione um cliente para comecar.
              </p>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showJumpToLatest && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={() => {
              scrollToLatest("smooth");
              setIsAtBottom(true);
            }}
            className="absolute bottom-[104px] right-6 z-20 rounded-full border border-cyan-300/25 bg-slate-950/92 px-3 py-1.5 text-xs font-medium text-cyan-100 shadow-lg shadow-black/35 transition-colors hover:bg-slate-900"
          >
            Nova mensagem
          </motion.button>
        )}
      </AnimatePresence>

      {/* Composer Area */}
      {!isReadOnly && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          className="border-t border-white/10 bg-slate-950/28 p-4 pt-2 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto relative">
            {/* Slash Command Menu */}
            <SlashCommandMenu
              inputText={inputValue}
              isVisible={showSlashMenu}
              onSelect={handleSlashCommandSelect}
              onClose={() => {
                setShowSlashMenu(false);
                setInputValue("");
              }}
            />

            {/* Pending command badge */}
            {pendingCommand && (
              <div className="flex items-center gap-2 mb-2 px-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/14 px-3 py-1 text-xs font-medium text-cyan-100">
                  <Command className="h-3 w-3" />
                  {pendingCommand.command}
                </span>
                <button
                  onClick={() => {
                    setPendingCommand(null);
                    setInputValue("");
                    setShowSlashMenu(false);
                  }}
                  className="text-[10px] text-slate-400 hover:text-slate-100"
                >
                  Cancelar
                </button>
              </div>
            )}

            {/* Context card badge */}
            {contextCard && !pendingCommand && (
              <div className="flex items-center gap-2 mb-2 px-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/14 px-3 py-1 text-xs font-medium text-emerald-100">
                  {contextCard.temperature === "hot" ? "🔥" : contextCard.temperature === "warm" ? "🌡️" : "❄️"}
                  {contextCard.cardName} · {contextCard.stageLabel}
                </span>
                <button
                  onClick={() => useIntelligenceStore.getState().setContextCard(null)}
                  className="text-[10px] text-slate-400 hover:text-slate-100"
                >
                  Remover
                </button>
              </div>
            )}

            <div
              className={cn(
                "relative flex items-end gap-2 rounded-[26px] border border-white/12 bg-slate-900/58 p-2 shadow-xl shadow-black/35 transition-all duration-200",
                "focus-within:border-cyan-300/35 focus-within:ring-2 focus-within:ring-cyan-300/20"
              )}
            >
              <div className="flex-1 py-3 min-h-[44px]">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const nextValue = e.target.value;
                    setInputValue(nextValue);
                    if (!pendingCommand) {
                      setShowSlashMenu(nextValue.startsWith("/"));
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  maxLength={INTELLIGENCE_LIMITS.MAX_USER_MESSAGE_LENGTH}
                  className="w-full border-none bg-transparent pl-2 text-sm font-medium text-slate-100 outline-none placeholder:text-slate-400"
                  disabled={isTyping}
                />
              </div>

              <div className="flex items-center gap-1 mb-0.5">
                <Button
                  size="icon"
                  className={cn(
                    "h-10 w-10 rounded-full shadow-md transition-all duration-200",
                    inputValue
                      ? "bg-brand text-white shadow-brand/20 hover:bg-brand-strong"
                      : "bg-slate-700/70 text-slate-300 hover:bg-slate-700"
                  )}
                  disabled={!inputValue.trim() || isTyping}
                  onClick={handleSend}
                >
                  <Send className="h-4 w-4 ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="mt-3 flex justify-between px-4">
              <div className="flex gap-4 text-[10px] font-medium text-slate-400">
                <span className="flex items-center gap-1.5">
                  <kbd className="flex h-[18px] min-w-[18px] items-center justify-center rounded border border-white/16 bg-white/8 px-1 font-sans">
                    ↵
                  </kbd>
                  Enviar
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="flex h-[18px] min-w-[18px] items-center justify-center rounded border border-white/16 bg-white/8 px-1 font-sans">
                    /
                  </kbd>
                  Comandos
                </span>
                {remainingQueries < 10 && (
                  <span className="text-amber-300">
                    {remainingQueries} consultas restantes
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500">
                Menux Intelligence pode cometer erros. Verifique as informacoes.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ============================================================================
// Banner Proativo — exibe a sugestão de maior prioridade no topo do chat
// ============================================================================

function ProactiveBanner() {
  const { proactiveSuggestions, dismissSuggestion, sendMessage } =
    useIntelligenceStore();

  const topSuggestion = useMemo(() => {
    const pending = proactiveSuggestions.filter((s) => !s.dismissed);
    if (pending.length === 0) return null;
    // Prioridade: high > medium > low
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return [...pending].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    )[0];
  }, [proactiveSuggestions]);

  if (!topSuggestion) return null;

  const priorityConfig = {
    high: {
      bg: "border-red-300/30 bg-red-500/12",
      text: "text-red-100",
      icon: <AlertTriangle className="h-4 w-4 text-red-200" />,
    },
    medium: {
      bg: "border-amber-300/30 bg-amber-500/12",
      text: "text-amber-100",
      icon: <TrendingUp className="h-4 w-4 text-amber-200" />,
    },
    low: {
      bg: "border-cyan-300/30 bg-cyan-500/12",
      text: "text-cyan-100",
      icon: <Lightbulb className="h-4 w-4 text-cyan-200" />,
    },
  };

  const config = priorityConfig[topSuggestion.priority];

  return (
    <AnimatePresence>
      <motion.div
        key={topSuggestion.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          "flex items-center gap-3 border-b px-4 py-2.5",
          config.bg
        )}
      >
        {config.icon}
        <div className="flex-1 min-w-0">
          <p className={cn("text-xs font-semibold truncate", config.text)}>
            {topSuggestion.cardName
              ? `${topSuggestion.cardName} — ${topSuggestion.message}`
              : topSuggestion.message}
          </p>
          <p className="truncate text-[10px] capitalize text-slate-400">
            {topSuggestion.type.replace(/-/g, " ")}
          </p>
        </div>
        <button
          onClick={() => {
            const actionText = topSuggestion.cardName
              ? `Analisar: ${topSuggestion.cardName}`
              : `Analisar: ${topSuggestion.message}`;
            sendMessage(actionText);
            dismissSuggestion(topSuggestion.id);
          }}
          className={cn(
            "shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold transition-colors",
            topSuggestion.priority === "high"
              ? "bg-red-500/20 text-red-100 hover:bg-red-500/28"
              : topSuggestion.priority === "medium"
                ? "bg-amber-500/20 text-amber-100 hover:bg-amber-500/28"
                : "bg-cyan-500/20 text-cyan-100 hover:bg-cyan-500/28"
          )}
        >
          Investigar
        </button>
        <button
          onClick={() => dismissSuggestion(topSuggestion.id)}
          className="shrink-0 rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-100"
          title="Dispensar"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
