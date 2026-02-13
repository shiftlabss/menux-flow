"use client";

// ============================================================================
// Menux Intelligence — Main Drawer (Premium Redesign)
// Premium Sheet lateral direita — WhatsApp-style chat experience
// 3 zonas fixas: header sticky, body scroll, composer sticky
// ============================================================================

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageSquarePlus,
  Users,
  Send,
  Slash,
  Clock,
  Sparkles,
  ChevronLeft,
  Paperclip,
  AlertCircle,
  Loader2,
  Zap,
  Lightbulb,
  Command,
  ArrowDown,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { useUIStore } from "@/stores/ui-store";
import { IntelligenceMessage } from "./intelligence-message";
import { TypingIndicator } from "./intelligence-typing-indicator";
import { SlashCommandMenu } from "./slash-command-menu";
import { ConversationHistory } from "./conversation-history";
import { ClientPickerModal } from "./client-picker-modal";
import { getInputPlaceholder } from "@/lib/intelligence-commands";
import { INTELLIGENCE_LIMITS } from "@/types/intelligence";
import type { SlashCommandDefinition, Message } from "@/types/intelligence";

// ─── Constants ──────────────────────────────────────────────────────────

const GROUPING_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

// ─── Message Grouping Logic ─────────────────────────────────────────────

interface MessageGroup {
  id: string;
  role: Message["role"];
  messages: Message[];
  showAvatar: boolean;
  showDateSeparator: boolean;
  dateSeparatorLabel?: string;
}

function groupMessages(messages: Message[]): MessageGroup[] {
  const groups: MessageGroup[] = [];

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    const prevMsg = i > 0 ? messages[i - 1] : null;

    // Date separator check
    let showDateSeparator = false;
    let dateSeparatorLabel: string | undefined;
    if (prevMsg) {
      const prevDate = new Date(prevMsg.timestamp).toDateString();
      const currDate = new Date(msg.timestamp).toDateString();
      if (prevDate !== currDate) {
        showDateSeparator = true;
        dateSeparatorLabel = new Date(msg.timestamp).toLocaleDateString("pt-BR", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        });
      }
    }

    // Check if this message should be grouped with the previous one
    const canGroup =
      prevMsg &&
      prevMsg.role === msg.role &&
      !showDateSeparator &&
      Math.abs(new Date(msg.timestamp).getTime() - new Date(prevMsg.timestamp).getTime()) < GROUPING_THRESHOLD_MS;

    if (canGroup && groups.length > 0) {
      // Append to existing group
      groups[groups.length - 1].messages.push(msg);
    } else {
      // Start new group
      groups.push({
        id: `group-${msg.id}`,
        role: msg.role,
        messages: [msg],
        showAvatar: msg.role === "assistant",
        showDateSeparator,
        dateSeparatorLabel,
      });
    }
  }

  return groups;
}

// ─── Empty State Bento Cards ─────────────────────────────────────────────

function EmptyStateBento({ onAction }: { onAction: (action: string) => void }) {
  const cards = [
    {
      id: "quick-actions",
      icon: <Zap className="h-5 w-5" />,
      title: "Ações Rápidas",
      description: "Briefing, follow-up e análise com um comando",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      items: [
        { label: "/briefing", action: "/briefing" },
        { label: "/followup", action: "/followup" },
        { label: "/analise", action: "/analise" },
      ],
    },
    {
      id: "suggestions",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Sugestões Intelligence",
      description: "Deixe a IA analisar seus leads e recomendar ações",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      items: [
        { label: "/funil", action: "/funil" },
        { label: "/pitch", action: "/pitch" },
        { label: "/planos", action: "/planos" },
      ],
    },
    {
      id: "shortcuts",
      icon: <Command className="h-5 w-5" />,
      title: "Atalhos",
      description: "Use / para acessar todos os comandos disponíveis",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      items: [
        { label: "/objecao", action: "/objecao" },
        { label: "/mensagem", action: "/mensagem" },
        { label: "/ajuda", action: "/ajuda" },
      ],
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-8">
      {/* Hero icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/20"
      >
        <Sparkles className="h-7 w-7 text-white" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.16, delay: 0.1 }}
        className="mb-1 font-heading text-sm font-semibold text-slate-800 dark:text-slate-200"
      >
        Como posso ajudar?
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.16, delay: 0.15 }}
        className="mb-6 text-center text-xs text-slate-500 dark:text-slate-400"
      >
        Selecione um cliente ou explore os comandos abaixo
      </motion.p>

      {/* Bento Cards */}
      <div className="flex w-full flex-col gap-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, delay: 0.1 + index * 0.06 }}
            className={cn(
              "group cursor-pointer rounded-2xl border border-slate-100 p-4 transition-all duration-[140ms]",
              "bg-gradient-to-br",
              card.gradient,
              "hover:translate-y-[-2px] hover:shadow-md hover:shadow-slate-200/50",
              "dark:border-slate-800 dark:hover:shadow-slate-900/50"
            )}
            onClick={() => onAction(card.items[0].action)}
          >
            <div className="flex items-start gap-3">
              <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", card.iconBg)}>
                {card.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-heading text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                  {card.title}
                </h4>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {card.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {card.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={(e) => {
                        e.stopPropagation();
                        onAction(item.action);
                      }}
                      className="inline-flex items-center rounded-lg bg-white/60 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-800 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Context Bar (Collapsible) ──────────────────────────────────────────

function ContextBar({
  isCollapsed,
  contextCard,
}: {
  isCollapsed: boolean;
  contextCard: NonNullable<import("@/types/intelligence").CardContext>;
}) {
  const tempEmoji =
    contextCard.temperature === "hot"
      ? "🔥"
      : contextCard.temperature === "warm"
        ? "🌡️"
        : "❄️";

  // Simulated activity/lead counts for context bar
  const overdueCount = contextCard.overdueActivities?.length ?? 0;

  return (
    <AnimatePresence>
      {!isCollapsed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden border-b border-slate-100/80 dark:border-slate-800/80"
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {tempEmoji} {contextCard.stageLabel}
            </span>
            {overdueCount > 0 && (
              <>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-[11px] font-medium text-red-500">
                  {overdueCount} atividade{overdueCount > 1 ? "s" : ""} atrasada{overdueCount > 1 ? "s" : ""}
                </span>
              </>
            )}
            {contextCard.tags?.length > 0 && (
              <>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-[11px] text-slate-400">
                  {contextCard.tags.slice(0, 2).join(", ")}
                </span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Inline Error ────────────────────────────────────────────────────────

function InlineError({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.14 }}
      className="mx-4 mb-2 flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-2 dark:border-red-900/40 dark:bg-red-900/20"
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />
      <p className="flex-1 text-[11px] font-medium text-red-600 dark:text-red-400">{message}</p>
      <button onClick={onDismiss} className="shrink-0 text-red-400 hover:text-red-600">
        <X className="h-3 w-3" />
      </button>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────

export function IntelligenceDrawer() {
  const {
    isOpen,
    close,
    messages,
    isTyping,
    contextCard,
    sendMessage,
    executeSlashCommand,
    openClientPicker,
    startNewConversation,
    toggleHistory,
    isHistoryOpen,
    viewingHistoryConversation,
    exitHistoryView,
    activeScreen,
  } = useIntelligenceStore();

  const { drawerType } = useUIStore();

  const [inputText, setInputText] = useState("");
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [pendingCommand, setPendingCommand] = useState<SlashCommandDefinition | null>(null);
  const [inlineError, setInlineError] = useState<string | null>(null);
  const [contextBarCollapsed, setContextBarCollapsed] = useState(false);
  const [showNewMessageButton, setShowNewMessageButton] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contextBarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAtBottomRef = useRef(true);

  // Mensagens exibidas (conversa ativa ou histórico em somente leitura)
  const displayMessages = viewingHistoryConversation
    ? viewingHistoryConversation.messages
    : messages;

  const isReadOnly = !!viewingHistoryConversation;
  const hasMessages = displayMessages.length > 1; // More than just greeting

  // Group messages for WhatsApp-style rendering
  const messageGroups = useMemo(() => groupMessages(displayMessages), [displayMessages]);

  // ── Smart Autoscroll ──────────────────────────────────────────────────

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
    setShowNewMessageButton(false);
  }, []);

  // Track scroll position
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    isAtBottomRef.current = distanceFromBottom < 60;

    if (isAtBottomRef.current) {
      setShowNewMessageButton(false);
    }
  }, []);

  // Auto-scroll on new messages only if at bottom
  useEffect(() => {
    if (isAtBottomRef.current) {
      scrollToBottom("smooth");
    } else if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === "assistant") {
        setShowNewMessageButton(true);
      }
    }
  }, [messages, isTyping, scrollToBottom]);

  // Auto-focus no input quando abre
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Detectar slash commands no input
  useEffect(() => {
    if (inputText.startsWith("/") && !pendingCommand) {
      setShowSlashMenu(true);
    } else if (!inputText.startsWith("/")) {
      setShowSlashMenu(false);
    }
  }, [inputText, pendingCommand]);

  // Context bar collapse on typing, reappear after 4s idle
  useEffect(() => {
    if (inputText.length > 0 && contextCard) {
      setContextBarCollapsed(true);
      if (contextBarTimerRef.current) {
        clearTimeout(contextBarTimerRef.current);
      }
    }
  }, [inputText, contextCard]);

  useEffect(() => {
    if (inputText.length === 0 && contextBarCollapsed && contextCard) {
      contextBarTimerRef.current = setTimeout(() => {
        setContextBarCollapsed(false);
      }, 4000);
      return () => {
        if (contextBarTimerRef.current) {
          clearTimeout(contextBarTimerRef.current);
        }
      };
    }
  }, [inputText, contextBarCollapsed, contextCard]);

  // Placeholder contextual
  const placeholder = pendingCommand
    ? pendingCommand.inputPlaceholder ?? "Digite sua mensagem..."
    : getInputPlaceholder(activeScreen, contextCard?.cardName);

  // Character count
  const charCount = inputText.length;
  const showCharCount = charCount >= 1800;

  // ── Handlers ────────────────────────────────────────────────────────────

  const handleSubmit = useCallback(
    async (e?: FormEvent) => {
      e?.preventDefault();
      if (!inputText.trim() || isSending) return;

      setInlineError(null);
      setIsSending(true);

      try {
        if (pendingCommand) {
          executeSlashCommand(pendingCommand.command, inputText.trim());
          setPendingCommand(null);
        } else {
          sendMessage(inputText.trim());
        }

        setInputText("");
        setShowSlashMenu(false);

        // Reset textarea height
        if (inputRef.current) {
          inputRef.current.style.height = "40px";
        }
      } catch {
        setInlineError("Erro ao enviar mensagem. Tente novamente.");
      } finally {
        // Small delay to show spinner briefly
        setTimeout(() => setIsSending(false), 300);
      }
    },
    [inputText, isSending, pendingCommand, executeSlashCommand, sendMessage]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }

      if (e.key === "Escape") {
        if (showSlashMenu) {
          setShowSlashMenu(false);
        } else if (pendingCommand) {
          setPendingCommand(null);
          setInputText("");
        }
      }
    },
    [handleSubmit, showSlashMenu, pendingCommand]
  );

  const handleSlashSelect = useCallback(
    (cmd: SlashCommandDefinition) => {
      setShowSlashMenu(false);

      if (cmd.requiresInput) {
        setPendingCommand(cmd);
        setInputText("");
        inputRef.current?.focus();
      } else {
        executeSlashCommand(cmd.command);
        setInputText("");
      }
    },
    [executeSlashCommand]
  );

  const handleSlashButtonClick = useCallback(() => {
    setInputText("/");
    setShowSlashMenu(true);
    inputRef.current?.focus();
  }, []);

  const handleBentoAction = useCallback(
    (action: string) => {
      if (action.startsWith("/")) {
        setInputText(action);
        setShowSlashMenu(true);
        inputRef.current?.focus();
      }
    },
    []
  );

  // ── Temperature badge ──────────────────────────────────────────────────

  const tempEmoji =
    contextCard?.temperature === "hot"
      ? "🔥"
      : contextCard?.temperature === "warm"
        ? "🌡️"
        : contextCard?.temperature === "cold"
          ? "❄️"
          : null;

  // Timestamp da conversa
  const conversationTimestamp = displayMessages.length > 0
    ? new Date(displayMessages[0].timestamp).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.22,
              ease: [0.32, 0.72, 0, 1],
            }}
            className={cn(
              "fixed right-0 top-0 z-40 flex h-screen flex-col",
              "w-[480px] max-w-full",
              // Fundo premium — body não pode ser branco flat
              "bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50",
              "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
              // Borda esquerda gradiente premium
              "border-l-2 border-l-transparent",
              // Sombra lateral difusa premium
              "shadow-[-12px_0_40px_rgba(0,0,0,0.06)]",
              "dark:shadow-[-12px_0_40px_rgba(0,0,0,0.3)]"
            )}
            style={{
              borderImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6) 1",
            }}
          >
            {/* ═══════════════════════════════════════════════════════════
                 ZONA 1 — Header Premium (sticky, 2 linhas)
               ═══════════════════════════════════════════════════════════ */}
            <div
              className={cn(
                "shrink-0",
                // Backdrop blur premium
                "bg-white/80 backdrop-blur-xl",
                "dark:bg-slate-950/80",
                // Divider sutil
                "border-b border-slate-100/80 dark:border-slate-800/60"
              )}
            >
              {/* Linha 1: Identidade + Ações */}
              <div className="flex h-[52px] items-center gap-2 px-4">
                {/* Left: Identity */}
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm shadow-purple-500/20">
                    <Sparkles className="h-4 w-4 text-white" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-heading text-[13px] font-semibold leading-tight text-slate-800 dark:text-slate-200">
                      Menux Intelligence
                    </span>
                    <span className="text-[10px] leading-tight text-slate-400">
                      Assistente IA
                    </span>
                  </div>
                </div>

                {/* Right: Action buttons — 40px hit area */}
                <div className="ml-auto flex items-center gap-0.5">
                  {/* Escolher cliente */}
                  <button
                    onClick={openClientPicker}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-[120ms]",
                      "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600",
                      "active:scale-[0.98]",
                      "dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
                    )}
                    title="Escolher cliente"
                  >
                    <Users className="h-[18px] w-[18px]" />
                  </button>

                  {/* Histórico */}
                  <button
                    onClick={toggleHistory}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-[120ms]",
                      "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600",
                      "active:scale-[0.98]",
                      "dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
                    )}
                    title="Histórico de conversas"
                  >
                    <Clock className="h-[18px] w-[18px]" />
                  </button>

                  {/* Nova conversa */}
                  <button
                    onClick={startNewConversation}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-[120ms]",
                      "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600",
                      "active:scale-[0.98]",
                      "dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
                    )}
                    title="Nova conversa"
                  >
                    <MessageSquarePlus className="h-[18px] w-[18px]" />
                  </button>

                  {/* Fechar */}
                  <button
                    onClick={close}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-[120ms]",
                      "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600",
                      "active:scale-[0.98]",
                      "dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
                    )}
                    title="Fechar (Esc)"
                  >
                    <X className="h-[18px] w-[18px]" />
                  </button>
                </div>
              </div>

              {/* Linha 2: Context pills */}
              <div className="flex items-center gap-2 px-4 pb-2.5">
                {/* Client pill */}
                {contextCard ? (
                  <button
                    onClick={() => {
                      const dType = contextCard.entityType === "client" ? "client-card" : "lead-card";
                      useUIStore.getState().openDrawer(dType, { id: contextCard.cardId });
                    }}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all duration-[120ms]",
                      "bg-purple-50 text-[11px] font-medium text-purple-600",
                      "hover:bg-purple-100",
                      "active:scale-[0.98]",
                      "dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50"
                    )}
                  >
                    {tempEmoji && <span className="text-[10px]">{tempEmoji}</span>}
                    <span className="max-w-[120px] truncate">{contextCard.cardName}</span>
                  </button>
                ) : (
                  <button
                    onClick={openClientPicker}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all duration-[120ms]",
                      "border border-dashed border-slate-200 text-[11px] font-medium text-slate-400",
                      "hover:border-purple-300 hover:text-purple-500",
                      "dark:border-slate-700 dark:hover:border-purple-600 dark:hover:text-purple-400"
                    )}
                  >
                    <Users className="h-3 w-3" />
                    Selecionar cliente
                  </button>
                )}

                {/* Mode pill */}
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                  <Sparkles className="h-2.5 w-2.5" />
                  Chat
                </span>

                {/* Timestamp pill */}
                {conversationTimestamp && (
                  <span className="ml-auto text-[10px] text-slate-400 dark:text-slate-500">
                    Iniciada às {conversationTimestamp}
                  </span>
                )}
              </div>
            </div>

            {/* Context Bar (collapsible) */}
            {contextCard && (
              <ContextBar
                isCollapsed={contextBarCollapsed}
                contextCard={contextCard}
              />
            )}

            {/* ═══════════════════════════════════════════════════════════
                 ZONA 2 — Área de mensagens (scroll vertical)
               ═══════════════════════════════════════════════════════════ */}
            <div className="relative flex-1 overflow-hidden">
              {/* History overlay */}
              <ConversationHistory />

              {/* Read-only banner */}
              {isReadOnly && (
                <div className="flex items-center gap-2 border-b border-amber-200 bg-amber-50/80 px-4 py-2 dark:border-amber-800 dark:bg-amber-900/20">
                  <Clock className="h-3.5 w-3.5 text-amber-600" />
                  <span className="flex-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                    Visualizando conversa anterior
                  </span>
                  <button
                    onClick={exitHistoryView}
                    className="flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium text-amber-600 transition-colors hover:bg-amber-100 hover:text-amber-800"
                  >
                    <ChevronLeft className="h-3 w-3" />
                    Voltar
                  </button>
                </div>
              )}

              {/* Messages or Empty State */}
              {!hasMessages && !isReadOnly ? (
                <div className="h-full overflow-y-auto">
                  <EmptyStateBento onAction={handleBentoAction} />
                </div>
              ) : (
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto scroll-smooth px-4 py-4"
                >
                  <div className="flex flex-col gap-1">
                    {messageGroups.map((group) => (
                      <div key={group.id}>
                        {/* Date separator */}
                        {group.showDateSeparator && group.dateSeparatorLabel && (
                          <div className="flex items-center gap-3 py-3">
                            <div className="h-px flex-1 bg-slate-200/60 dark:bg-slate-700/60" />
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                              {group.dateSeparatorLabel}
                            </span>
                            <div className="h-px flex-1 bg-slate-200/60 dark:bg-slate-700/60" />
                          </div>
                        )}

                        {/* Message group */}
                        <div className={cn(
                          "flex flex-col",
                          group.role === "user" ? "items-end" : "items-start"
                        )}>
                          {/* Avatar (only on first message of assistant group) */}
                          {group.showAvatar && (
                            <div className="mb-1 ml-0.5 flex items-center gap-1.5">
                              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600">
                                <Sparkles className="h-2.5 w-2.5 text-white" />
                              </span>
                              <span className="text-[10px] font-medium text-slate-400">
                                Intelligence
                              </span>
                            </div>
                          )}

                          {/* Messages in the group */}
                          {group.messages.map((msg, msgIdx) => (
                            <IntelligenceMessage
                              key={msg.id}
                              message={msg}
                              isReadOnly={isReadOnly}
                              isGrouped={msgIdx > 0}
                              isLastInGroup={msgIdx === group.messages.length - 1}
                            />
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && !isReadOnly && (
                      <div className="flex items-start">
                        <div className="mb-1 ml-0.5 flex items-center gap-1.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600">
                            <Sparkles className="h-2.5 w-2.5 text-white" />
                          </span>
                        </div>
                      </div>
                    )}
                    {isTyping && !isReadOnly && <TypingIndicator />}

                    <div ref={messagesEndRef} />
                  </div>
                </div>
              )}

              {/* "Nova mensagem" floating button */}
              <AnimatePresence>
                {showNewMessageButton && (
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.14 }}
                    onClick={() => scrollToBottom()}
                    className={cn(
                      "absolute bottom-4 left-1/2 -translate-x-1/2",
                      "flex items-center gap-1.5 rounded-full px-3 py-1.5",
                      "bg-blue-600 text-[11px] font-medium text-white shadow-lg shadow-blue-500/30",
                      "transition-all duration-[120ms]",
                      "hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40"
                    )}
                  >
                    <ArrowDown className="h-3 w-3" />
                    Nova mensagem
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                 ZONA 3 — Composer Premium (sticky bottom)
               ═══════════════════════════════════════════════════════════ */}
            {!isReadOnly && (
              <div
                className={cn(
                  "shrink-0",
                  "bg-white/80 backdrop-blur-xl",
                  "dark:bg-slate-950/80",
                  "border-t border-slate-100/80 dark:border-slate-800/60"
                )}
              >
                {/* Inline error (above composer, no toasts) */}
                <AnimatePresence>
                  {inlineError && (
                    <InlineError
                      message={inlineError}
                      onDismiss={() => setInlineError(null)}
                    />
                  )}
                </AnimatePresence>

                {/* Pending command chip */}
                {pendingCommand && (
                  <div className="flex items-center gap-2 px-4 pt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                      {pendingCommand.icon} {pendingCommand.label}
                    </span>
                    <button
                      onClick={() => {
                        setPendingCommand(null);
                        setInputText("");
                      }}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}

                {/* Composer area */}
                <form onSubmit={handleSubmit} className="p-3">
                  {/* Slash command menu */}
                  <SlashCommandMenu
                    inputText={inputText}
                    isVisible={showSlashMenu}
                    onSelect={handleSlashSelect}
                    onClose={() => {
                      setShowSlashMenu(false);
                      setInputText("");
                    }}
                  />

                  <div className="flex items-end gap-2">
                    {/* Attach button (left) */}
                    <button
                      type="button"
                      className={cn(
                        "mb-[5px] flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-[120ms]",
                        "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600",
                        "active:scale-[0.98]",
                        "dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
                      )}
                      title="Anexar (em breve)"
                    >
                      <Paperclip className="h-[18px] w-[18px]" />
                    </button>

                    {/* Commands button */}
                    <button
                      type="button"
                      onClick={handleSlashButtonClick}
                      className={cn(
                        "mb-[5px] flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-[120ms]",
                        showSlashMenu
                          ? "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"
                          : "text-slate-400 hover:bg-slate-100/80 hover:text-slate-600 dark:hover:bg-slate-800/60 dark:hover:text-slate-300",
                        "active:scale-[0.98]"
                      )}
                      title="Comandos rápidos (/)"
                    >
                      <Slash className="h-[18px] w-[18px]" />
                    </button>

                    {/* Pill input (auto-expand to 5 lines) */}
                    <div className="relative min-w-0 flex-1">
                      <textarea
                        ref={inputRef}
                        value={inputText}
                        onChange={(e) => {
                          if (e.target.value.length <= INTELLIGENCE_LIMITS.MAX_USER_MESSAGE_LENGTH) {
                            setInputText(e.target.value);
                          }
                        }}
                        onKeyDown={handleKeyDown}
                        onFocus={() => {
                          if (contextCard) setContextBarCollapsed(true);
                        }}
                        placeholder={placeholder}
                        rows={1}
                        className={cn(
                          "w-full resize-none rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-2.5",
                          "font-body text-[13px] leading-snug text-slate-700 placeholder:text-slate-400",
                          "outline-none transition-all duration-[140ms]",
                          // Focus glow
                          "focus:border-purple-300/80 focus:bg-white focus:shadow-[0_0_0_3px_rgba(139,92,246,0.08)]",
                          "dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300",
                          "dark:focus:border-purple-600/60 dark:focus:bg-slate-900 dark:focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]",
                          // Max 5 lines
                          "max-h-[120px] overflow-y-auto"
                        )}
                        style={{
                          height: "40px",
                          minHeight: "40px",
                        }}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = "auto";
                          target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
                        }}
                        disabled={isTyping}
                      />
                    </div>

                    {/* Circular send button */}
                    <button
                      type="submit"
                      disabled={!inputText.trim() || isTyping || isSending}
                      className={cn(
                        "mb-[5px] flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-[140ms]",
                        inputText.trim() && !isTyping && !isSending
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.95]"
                          : "bg-slate-100 text-slate-300 dark:bg-slate-800 dark:text-slate-600"
                      )}
                      title="Enviar (Enter)"
                    >
                      {isSending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Character counter */}
                  {showCharCount && (
                    <p
                      className={cn(
                        "mt-1 text-right text-[10px] font-medium",
                        charCount > INTELLIGENCE_LIMITS.MAX_USER_MESSAGE_LENGTH - 50
                          ? "text-red-500"
                          : "text-slate-400"
                      )}
                    >
                      {charCount}/{INTELLIGENCE_LIMITS.MAX_USER_MESSAGE_LENGTH}
                    </p>
                  )}
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal D11 */}
      <ClientPickerModal />
    </>
  );
}
