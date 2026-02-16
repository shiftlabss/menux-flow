"use client";

import {
  useState,
  useMemo,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  Search,
  Heart,
  AlertTriangle,
  XCircle,
  MoreHorizontal,
  Clock,
  Sparkles,
  LayoutGrid,
  List,
  Plus,
  Bot,
  Copy,
  Check,
  Filter,
  ChevronLeft,
  ChevronRight,
  Download,
  MessageSquare,
  Activity,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { mockClients } from "@/lib/mock-data";
import type { Client, HealthScore } from "@/types";
import { useUIStore } from "@/stores/ui-store";
import { useClientStore } from "@/stores/client-store";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type SuccessColumnId = "onboarding" | "implantacao" | "ativos";
type SuccessPhase = "all" | SuccessColumnId;
type ClientsView = "board" | "list";
type MetricsFilter = "all" | "critical" | "good" | "stale";

interface FiltersState {
  health: HealthScore | "all";
  responsible: string;
  staleOnly: boolean;
}

interface ColumnConfig {
  id: SuccessColumnId;
  label: string;
  stages: Client["stage"][];
}

interface FeedbackState {
  type: "success" | "error";
  message: string;
}

interface CardFeedbackState extends FeedbackState {
  clientId: string;
}

const columnConfig: ColumnConfig[] = [
  { id: "onboarding", label: "Onboarding", stages: ["onboarding"] },
  { id: "implantacao", label: "Implantação", stages: ["implantacao"] },
  {
    id: "ativos",
    label: "Ativos",
    stages: ["acompanhamento", "retencao", "churn"],
  },
];

const healthConfig: Record<
  HealthScore,
  {
    label: string;
    icon: ReactNode;
    badgeClass: string;
    textClass: string;
    tooltip: string;
  }
> = {
  good: {
    label: "Saudável",
    icon: <Heart className="h-3.5 w-3.5 fill-current" />,
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    textClass: "text-emerald-700",
    tooltip: "Cliente com engajamento saudável e baixo risco imediato.",
  },
  warning: {
    label: "Atenção",
    icon: <AlertTriangle className="h-3.5 w-3.5" />,
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
    textClass: "text-amber-700",
    tooltip: "Sinais de queda de engajamento. Requer acompanhamento próximo.",
  },
  critical: {
    label: "Crítico",
    icon: <XCircle className="h-3.5 w-3.5" />,
    badgeClass: "border-red-200 bg-red-50 text-red-700",
    textClass: "text-red-700",
    tooltip: "Risco elevado de churn. Prioridade máxima de ação.",
  },
};

const intelligenceCommands = [
  { id: "plan", label: "Gerar plano de follow-up", icon: <Activity className="h-3.5 w-3.5" /> },
  { id: "critical", label: "Criar atividades para críticos", icon: <AlertTriangle className="h-3.5 w-3.5" /> },
  { id: "messages", label: "Sugerir mensagens por responsável", icon: <MessageSquare className="h-3.5 w-3.5" /> },
  { id: "churn", label: "Mapear risco de churn", icon: <XCircle className="h-3.5 w-3.5" /> },
  { id: "upsell", label: "Identificar upsell", icon: <Sparkles className="h-3.5 w-3.5" /> },
  { id: "summary", label: "Resumo executivo da carteira", icon: <Building2 className="h-3.5 w-3.5" /> },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
}

function formatMRR(value: number): string {
  return `${formatCurrency(value)}/mês`;
}

function getDaysSinceInteraction(dateStr?: string): number {
  if (!dateStr) return Infinity;
  const now = new Date();
  const date = new Date(dateStr);
  return Math.max(
    0,
    Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  );
}

function getRelativeDate(dateStr?: string): string {
  if (!dateStr) return "sem registro";
  const diffDays = getDaysSinceInteraction(dateStr);
  if (diffDays === 0) return "hoje";
  if (diffDays === 1) return "há 1 dia";
  if (diffDays < 7) return `há ${diffDays} dias`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "há 1 semana" : `há ${weeks} semanas`;
  }
  const months = Math.floor(diffDays / 30);
  return months <= 1 ? "há 1 mês" : `há ${months} meses`;
}

function getClientColumn(client: Client): SuccessColumnId {
  if (client.stage === "onboarding") return "onboarding";
  if (client.stage === "implantacao") return "implantacao";
  return "ativos";
}

function getClientRiskScore(client: Client): number {
  const daysWithoutInteraction = getDaysSinceInteraction(client.lastInteraction);
  let score = 0;
  if (client.healthScore === "critical") score += 60;
  if (client.healthScore === "warning") score += 30;
  if (client.stage === "churn") score += 40;
  if (daysWithoutInteraction > 30) score += 25;
  if (daysWithoutInteraction > 14 && daysWithoutInteraction <= 30) score += 12;
  return score;
}

function isRiskClient(client: Client): boolean {
  const staleDays = getDaysSinceInteraction(client.lastInteraction);
  return client.healthScore !== "good" || staleDays > 30 || client.stage === "churn";
}

function getRiskReason(client: Client): string {
  const staleDays = getDaysSinceInteraction(client.lastInteraction);
  if (client.stage === "churn") return "Cliente já em churn";
  if (client.healthScore === "critical") return "Health score crítico";
  if (staleDays > 30) return `Sem interação há ${staleDays} dias`;
  if (client.healthScore === "warning") return "Health score em atenção";
  return "Atenção recomendada";
}

function getInitials(name: string): string {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "--";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getColumnInsight(clients: Client[]): string {
  if (clients.length === 0) return "Sem clientes nesta fase";
  const staleWeek = clients.filter(
    (client) => getDaysSinceInteraction(client.lastInteraction) > 7
  ).length;
  const critical = clients.filter((client) => client.healthScore === "critical").length;

  if (critical > 0) {
    return `${critical} cliente${critical > 1 ? "s" : ""} em risco elevado`;
  }
  if (staleWeek > 0) {
    return `${staleWeek} cliente${staleWeek > 1 ? "s" : ""} sem interação esta semana`;
  }
  return "Carteira com ritmo saudável";
}

function getIntelligenceSuggestions(client: Client): {
  messages: string[];
  nextStep: string;
  risk: string;
} {
  const health = healthConfig[client.healthScore].label.toLowerCase();
  const inactivityDays = getDaysSinceInteraction(client.lastInteraction);

  const messages = [
    `Olá ${client.contactName}, tudo bem? Gostaria de alinhar os próximos passos para mantermos os resultados de ${client.companyName}.`,
    `Percebi que estamos há ${Number.isFinite(inactivityDays) ? inactivityDays : 0} dias sem interação. Posso te enviar um plano rápido para avançarmos nesta semana?`,
  ];

  const nextStep =
    client.healthScore === "critical"
      ? "Criar atividade de contato prioritário hoje."
      : client.healthScore === "warning"
        ? "Agendar follow-up com proposta de melhoria em até 48h."
        : "Reforçar valor percebido e mapear oportunidade de upsell.";

  const risk =
    client.healthScore === "critical"
      ? "Risco alto de churn no ciclo atual."
      : `Saúde ${health}; manter cadência para evitar degradação.`;

  return { messages, nextStep, risk };
}

export default function ClientsPage() {
  const { openDrawer } = useUIStore();
  const { clients: storeClients } = useClientStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<ClientsView>("board");
  const [visiblePhase, setVisiblePhase] = useState<SuccessPhase>("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FiltersState>({
    health: "all",
    responsible: "all",
    staleOnly: false,
  });
  const [metricsFilter, setMetricsFilter] = useState<MetricsFilter>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [cardFeedback, setCardFeedback] = useState<CardFeedbackState | null>(null);
  const [focusedClientId, setFocusedClientId] = useState<string | null>(null);
  const [runningCommand, setRunningCommand] = useState<string | null>(null);
  const [commandResult, setCommandResult] = useState<string | null>(null);

  const allClients = storeClients.length > 0 ? storeClients : mockClients;

  // Deep linking for clientId
  useEffect(() => {
    const clientId = searchParams.get("clientId");
    if (clientId) {
      openDrawer("client-card", { id: clientId });
      // Remove param from URL without reload to avoid re-opening on refresh
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("clientId");
      router.replace(`/clients?${newParams.toString()}`, { scroll: false });
    }
  }, [searchParams, openDrawer, router]);

  // Deep linking for filters
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam === "risk") {
      setMetricsFilter("critical");
      setFilters((prev) => ({ ...prev, health: "critical" }));
    }
  }, [searchParams]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchQuery(searchInput.trim());
    }, 250);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const xlQuery = window.matchMedia("(min-width: 1280px)");

    const syncBreakpoints = () => {
      setIsDesktopXL(xlQuery.matches);
      if (mobileQuery.matches) {
        setView("list");
      }
    };

    syncBreakpoints();
    mobileQuery.addEventListener("change", syncBreakpoints);
    xlQuery.addEventListener("change", syncBreakpoints);

    return () => {
      mobileQuery.removeEventListener("change", syncBreakpoints);
      xlQuery.removeEventListener("change", syncBreakpoints);
    };
  }, []);

  useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(null), 2200);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  useEffect(() => {
    if (!cardFeedback) return;
    const timer = window.setTimeout(() => setCardFeedback(null), 1200);
    return () => window.clearTimeout(timer);
  }, [cardFeedback]);

  const responsibleNames = useMemo(
    () =>
      Array.from(new Set(allClients.map((client) => client.responsibleName))).sort(
        (a, b) => a.localeCompare(b, "pt-BR")
      ),
    [allClients]
  );

  const panelFilterCount = useMemo(() => {
    return (
      (filters.health !== "all" ? 1 : 0) +
      (filters.responsible !== "all" ? 1 : 0) +
      (filters.staleOnly ? 1 : 0)
    );
  }, [filters.health, filters.responsible, filters.staleOnly]);

  const phaseScopedClients = useMemo(() => {
    return allClients.filter((client) => {
      if (visiblePhase !== "all" && getClientColumn(client) !== visiblePhase) {
        return false;
      }

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const companyMatch = client.companyName.toLowerCase().includes(q);
        const contactMatch = client.contactName.toLowerCase().includes(q);
        if (!companyMatch && !contactMatch) return false;
      }

      if (filters.health !== "all" && client.healthScore !== filters.health) {
        return false;
      }

      if (
        filters.responsible !== "all" &&
        client.responsibleName !== filters.responsible
      ) {
        return false;
      }

      if (
        filters.staleOnly &&
        getDaysSinceInteraction(client.lastInteraction) <= 30
      ) {
        return false;
      }

      return true;
    });
  }, [allClients, visiblePhase, searchQuery, filters]);

  const criticalCount = useMemo(
    () => phaseScopedClients.filter((client) => client.healthScore === "critical").length,
    [phaseScopedClients]
  );
  const healthyCount = useMemo(
    () => phaseScopedClients.filter((client) => client.healthScore === "good").length,
    [phaseScopedClients]
  );
  const staleCount = useMemo(
    () =>
      phaseScopedClients.filter(
        (client) => getDaysSinceInteraction(client.lastInteraction) > 30
      ).length,
    [phaseScopedClients]
  );

  const clientsForDisplay = useMemo(() => {
    return phaseScopedClients.filter((client) => {
      if (metricsFilter === "all") return true;
      if (metricsFilter === "critical") return client.healthScore === "critical";
      if (metricsFilter === "good") return client.healthScore === "good";
      return getDaysSinceInteraction(client.lastInteraction) > 30;
    });
  }, [phaseScopedClients, metricsFilter]);

  const clientsByColumn = useMemo(() => {
    const grouped: Record<SuccessColumnId, Client[]> = {
      onboarding: [],
      implantacao: [],
      ativos: [],
    };

    for (const client of clientsForDisplay) {
      grouped[getClientColumn(client)].push(client);
    }

    for (const columnId of Object.keys(grouped) as SuccessColumnId[]) {
      grouped[columnId].sort((a, b) => getClientRiskScore(b) - getClientRiskScore(a));
    }

    return grouped;
  }, [clientsForDisplay]);

  const riskClients = useMemo(
    () =>
      clientsForDisplay
        .filter((client) => isRiskClient(client))
        .sort((a, b) => getClientRiskScore(b) - getClientRiskScore(a)),
    [clientsForDisplay]
  );

  const prioritizedClients = useMemo(
    () =>
      phaseScopedClients
        .filter((client) => isRiskClient(client))
        .sort((a, b) => getClientRiskScore(b) - getClientRiskScore(a))
        .slice(0, 5),
    [phaseScopedClients]
  );

  const visibleColumns = useMemo(() => {
    if (visiblePhase === "all") return columnConfig.map((col) => col.id);
    return [visiblePhase];
  }, [visiblePhase]);

  const showRiskColumn = useMemo(
    () =>
      riskClients.length > 0 && (visiblePhase === "all" || visiblePhase === "ativos"),
    [riskClients.length, visiblePhase]
  );

  const showInsightsFillColumn = useMemo(
    () => isDesktopXL && !isIntelligenceOpen && visibleColumns.length <= 2,
    [isDesktopXL, isIntelligenceOpen, visibleColumns.length]
  );

  const focusedClient = useMemo(() => {
    if (focusedClientId) {
      const selected = allClients.find((client) => client.id === focusedClientId);
      if (selected) return selected;
    }
    return prioritizedClients[0] ?? null;
  }, [allClients, focusedClientId, prioritizedClients]);

  const focusedSuggestions = useMemo(
    () => (focusedClient ? getIntelligenceSuggestions(focusedClient) : null),
    [focusedClient]
  );

  const setInlineCardMessage = useCallback(
    (clientId: string, type: "success" | "error", message: string) => {
      setCardFeedback({ clientId, type, message });
    },
    []
  );

  const handleCopyText = useCallback(
    async (text: string, clientId?: string) => {
      try {
        await navigator.clipboard.writeText(text);
        if (clientId) {
          setInlineCardMessage(clientId, "success", "Copiado");
        } else {
          setFeedback({ type: "success", message: "Mensagem copiada." });
        }
      } catch {
        if (clientId) {
          setInlineCardMessage(clientId, "error", "Falha ao copiar");
        } else {
          setFeedback({ type: "error", message: "Não foi possível copiar." });
        }
      }
    },
    [setInlineCardMessage]
  );

  const handleIntelligenceCommand = useCallback((commandId: string, label: string) => {
    setRunningCommand(commandId);
    setCommandResult(null);
    window.setTimeout(() => {
      setRunningCommand(null);
      setCommandResult(`Menux Intelligence executou: ${label.toLowerCase()}.`);
    }, 460);
  }, []);

  const handleExportColumn = useCallback(
    (columnId: SuccessColumnId) => {
      const clients = clientsByColumn[columnId];
      const csvRows = clients.map((client) =>
        [
          client.companyName,
          client.contactName,
          client.responsibleName,
          String(client.monthlyRevenue),
          healthConfig[client.healthScore].label,
          client.lastInteraction ?? "",
        ]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(",")
      );
      const csv = [
        "empresa,contato,responsavel,mrr,health_score,ultima_interacao",
        ...csvRows,
      ].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `clientes-${columnId}.csv`;
      link.click();
      URL.revokeObjectURL(url);
      setFeedback({ type: "success", message: "Exportação iniciada." });
    },
    [clientsByColumn]
  );

  const renderBoard = () => {
    if (clientsForDisplay.length === 0) {
      return (
        <div className="premium-panel flex h-full min-h-[380px] items-center justify-center rounded-[20px] p-8 text-center">
          <div>
            <p className="font-heading text-xl font-semibold text-zinc-900">
              Nenhum cliente encontrado
            </p>
            <p className="mt-2 max-w-[420px] font-body text-sm text-zinc-500">
              Ajuste os filtros ou busque por outro termo para visualizar clientes nesta fase.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setMetricsFilter("all");
                  setFilters({ health: "all", responsible: "all", staleOnly: false });
                  setVisiblePhase("all");
                }}
              >
                Limpar filtros
              </Button>
              <Button
                className="rounded-full bg-black text-white hover:bg-zinc-800"
                onClick={() => openDrawer("new-activity")}
              >
                Criar atividade
              </Button>
            </div>
          </div>
        </div>
      );
    }

    const widthClass =
      visibleColumns.length === 1
        ? "w-full max-w-[420px]"
        : "w-[min(88vw,360px)] md:w-[320px] xl:w-[360px]";

    return (
      <div className="premium-ambient premium-grain relative flex h-full min-h-0 min-w-0 overflow-hidden rounded-[22px] border border-zinc-200/75 bg-white/72 p-3 shadow-[var(--shadow-premium-soft)] backdrop-blur-sm md:p-4">
        <div className="flex min-h-0 min-w-0 flex-1 gap-4 overflow-x-auto pb-1 pr-1 [scroll-snap-type:x_proximity]">
          {visibleColumns.map((columnId) => {
            const config = columnConfig.find((col) => col.id === columnId)!;
            const clients = clientsByColumn[columnId];
            const totalMRR = clients.reduce((acc, client) => acc + client.monthlyRevenue, 0);
            return (
              <SuccessBoardColumn
                key={columnId}
                widthClass={widthClass}
                title={config.label}
                count={clients.length}
                mrrTotal={totalMRR}
                insight={getColumnInsight(clients)}
                clients={clients}
                onOpenClient={(client) => openDrawer("client-card", { id: client.id })}
                onCreateActivity={(client) =>
                  openDrawer("new-activity", {
                    clientId: client.id,
                    clientName: client.companyName,
                  })
                }
                onFocusClient={(client) => setFocusedClientId(client.id)}
                onCopyMessage={handleCopyText}
                cardFeedback={cardFeedback}
                onExport={() => handleExportColumn(columnId)}
                onSuggestPlan={() =>
                  handleIntelligenceCommand("plan-column", `Plano de ação para ${config.label}`)
                }
                onViewAll={() => {
                  setVisiblePhase(columnId);
                  setView("list");
                }}
                onViewFilters={() => setIsFiltersOpen(true)}
                onAddClient={() =>
                  setFeedback({
                    type: "success",
                    message: "Preview de cadastro de cliente aberto.",
                  })
                }
              />
            );
          })}

          {showRiskColumn ? (
            <SuccessBoardColumn
              widthClass={widthClass}
              title="Risco"
              count={riskClients.length}
              mrrTotal={riskClients.reduce((acc, client) => acc + client.monthlyRevenue, 0)}
              insight="Clientes com risco de churn ou inatividade elevada"
              clients={riskClients}
              onOpenClient={(client) => openDrawer("client-card", { id: client.id })}
              onCreateActivity={(client) =>
                openDrawer("new-activity", {
                  clientId: client.id,
                  clientName: client.companyName,
                })
              }
              onFocusClient={(client) => setFocusedClientId(client.id)}
              onCopyMessage={handleCopyText}
              cardFeedback={cardFeedback}
              onExport={() => {
                setFeedback({
                  type: "success",
                  message: "Preview de exportação da coluna de risco gerado.",
                });
              }}
              onSuggestPlan={() =>
                handleIntelligenceCommand("plan-risk", "Plano de ataque para clientes em risco")
              }
              onViewAll={() => {
                setVisiblePhase("ativos");
                setView("list");
              }}
              onViewFilters={() => setIsFiltersOpen(true)}
              onAddClient={() =>
                setFeedback({
                  type: "success",
                  message: "Preview de cadastro de cliente aberto.",
                })
              }
            />
          ) : null}

          {showInsightsFillColumn ? (
            <BoardInsightsColumn
              widthClass={widthClass}
              prioritizedClients={prioritizedClients}
              onFocusClient={(client) => setFocusedClientId(client.id)}
            />
          ) : null}
        </div>
      </div>
    );
  };

  const renderList = () => {
    if (clientsForDisplay.length === 0) {
      return (
        <div className="premium-panel flex h-full min-h-[380px] items-center justify-center rounded-[20px] p-8 text-center">
          <div>
            <p className="font-heading text-xl font-semibold text-zinc-900">
              Nenhum cliente para listar
            </p>
            <p className="mt-2 font-body text-sm text-zinc-500">
              Tente ajustar filtros ou busque por outro termo.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="premium-ambient min-h-0 h-full overflow-y-auto rounded-[22px] border border-zinc-200/75 bg-white/72 p-3 shadow-[var(--shadow-premium-soft)] backdrop-blur-sm md:p-4">
        <div className="space-y-4">
          {visibleColumns.map((columnId) => {
            const config = columnConfig.find((col) => col.id === columnId)!;
            const clients = clientsByColumn[columnId];
            const totalMRR = clients.reduce((acc, client) => acc + client.monthlyRevenue, 0);
            return (
              <section key={columnId} className="rounded-[18px] border border-zinc-200/80 bg-white p-3 shadow-[0_8px_18px_-14px_rgba(15,23,42,0.35)]">
                <div className="mb-3 flex items-center justify-between border-b border-zinc-200/70 pb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      {config.label}
                    </h3>
                    <Badge className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                      {clients.length}
                    </Badge>
                  </div>
                  <p className="font-body text-xs text-zinc-500">
                    MRR {formatCurrency(totalMRR)}
                  </p>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  {clients.length > 0 ? (
                    clients.map((client) => (
                      <ClientCardPremium
                        key={`${columnId}-${client.id}`}
                        client={client}
                        onOpenClient={() => openDrawer("client-card", { id: client.id })}
                        onCreateActivity={() =>
                          openDrawer("new-activity", {
                            clientId: client.id,
                            clientName: client.companyName,
                          })
                        }
                        onFocusClient={() => setFocusedClientId(client.id)}
                        onCopyMessage={handleCopyText}
                        feedback={cardFeedback}
                      />
                    ))
                  ) : (
                    <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50 p-4">
                      <p className="font-body text-sm text-zinc-500">
                        Sem clientes nesta fase.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            );
          })}

          {showRiskColumn ? (
            <section className="rounded-[18px] border border-zinc-200/80 bg-white p-3 shadow-[0_8px_18px_-14px_rgba(15,23,42,0.35)]">
              <div className="mb-3 flex items-center justify-between border-b border-zinc-200/70 pb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-base font-semibold text-zinc-900">Risco</h3>
                  <Badge className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700">
                    {riskClients.length}
                  </Badge>
                </div>
                <p className="font-body text-xs text-zinc-500">Clientes prioritários</p>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {riskClients.map((client) => (
                  <ClientCardPremium
                    key={`risk-${client.id}`}
                    client={client}
                    onOpenClient={() => openDrawer("client-card", { id: client.id })}
                    onCreateActivity={() =>
                      openDrawer("new-activity", {
                        clientId: client.id,
                        clientName: client.companyName,
                      })
                    }
                    onFocusClient={() => setFocusedClientId(client.id)}
                    onCopyMessage={handleCopyText}
                    feedback={cardFeedback}
                    customRiskReason={getRiskReason(client)}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <ClientsPageSkeleton />;
  }

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4"
      >
        {feedback ? (
          <InlineFeedback
            type={feedback.type}
            message={feedback.message}
            compact
            onClose={() => setFeedback(null)}
          />
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.03, ease: "easeOut" }}
          className="shrink-0"
        >
          <ModuleCommandHeader
            title="Clientes"
            description="Funil de sucesso e saúde."
            actions={
              <div className="flex w-full flex-wrap items-center gap-2 xl:justify-end">
                <div className="inline-flex h-9 items-center rounded-full border border-zinc-200/85 bg-zinc-50/90 p-1">
                  <button
                    type="button"
                    onClick={() => setView("board")}
                    className={cn(
                      "inline-flex h-7 items-center gap-1 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                      view === "board"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    )}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    Board
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className={cn(
                      "inline-flex h-7 items-center gap-1 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                      view === "list"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    )}
                  >
                    <List className="h-3.5 w-3.5" />
                    Lista
                  </button>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 rounded-full">
                      <Plus className="h-3.5 w-3.5" />
                      Nova ação
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-[14px]">
                    <DropdownMenuItem
                      onClick={() => {
                        openDrawer("new-activity");
                        setFeedback({
                          type: "success",
                          message: "Nova atividade iniciada.",
                        });
                      }}
                    >
                      <Activity className="mr-2 h-4 w-4" />
                      Criar atividade
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        setFeedback({
                          type: "success",
                          message: "Preview de importação de clientes aberto.",
                        })
                      }
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Importar clientes (preview)
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        handleIntelligenceCommand(
                          "exec-plan",
                          "Plano diário para a carteira de clientes"
                        )
                      }
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Pedir plano do dia
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  size="sm"
                  onClick={() => setIsIntelligenceOpen((prev) => !prev)}
                  className="h-9 rounded-full border border-slate-700/70 bg-[linear-gradient(130deg,#0b1220_0%,#0a1a37_56%,#132d56_100%)] px-3 text-cyan-100 shadow-[0_14px_26px_-18px_rgba(15,23,42,0.78)] hover:brightness-110"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Menux Intelligence
                  {isIntelligenceOpen ? (
                    <ChevronRight className="h-3.5 w-3.5 opacity-80" />
                  ) : (
                    <ChevronLeft className="h-3.5 w-3.5 opacity-80" />
                  )}
                </Button>
              </div>
            }
          >
            <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {(columnConfig.map((column) => column.id) as SuccessColumnId[]).map((phase) => {
                  const isActive = visiblePhase === phase;
                  const phaseLabel = columnConfig.find((col) => col.id === phase)?.label ?? phase;
                  return (
                    <button
                      key={phase}
                      type="button"
                      onClick={() =>
                        setVisiblePhase((prev) => (prev === phase ? "all" : phase))
                      }
                      className={cn(
                        "inline-flex h-9 items-center rounded-full border px-3.5 text-sm font-medium transition-all duration-120",
                        isActive
                          ? "border-zinc-900 bg-zinc-900 text-white"
                          : "border-zinc-200 bg-white/90 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
                      )}
                    >
                      {phaseLabel}
                    </button>
                  );
                })}
              </div>

              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 lg:justify-end">
                <div className="relative min-w-[220px] flex-1 lg:max-w-[360px]">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <Input
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Buscar por empresa ou contato"
                    className="h-9 rounded-full border-zinc-200 bg-white pl-9 pr-8 text-sm transition-[box-shadow,border-color] duration-140 focus:border-zinc-300 focus:shadow-[0_0_0_3px_rgba(148,163,184,0.15)]"
                  />
                  {searchInput ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchInput("");
                        setSearchQuery("");
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-zinc-400 transition-colors hover:text-zinc-600"
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>

                <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 rounded-full">
                      <Filter className="h-3.5 w-3.5" />
                      {panelFilterCount > 0 ? `Filtros (${panelFilterCount})` : "Filtros"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="w-[min(92vw,360px)] rounded-[16px] border-zinc-200 bg-white p-3"
                  >
                    <div className="space-y-3">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                          Health Score
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <FilterOptionButton
                            label="Todos"
                            active={filters.health === "all"}
                            onClick={() => setFilters((prev) => ({ ...prev, health: "all" }))}
                          />
                          <FilterOptionButton
                            label="Saudável"
                            active={filters.health === "good"}
                            onClick={() => setFilters((prev) => ({ ...prev, health: "good" }))}
                          />
                          <FilterOptionButton
                            label="Atenção"
                            active={filters.health === "warning"}
                            onClick={() =>
                              setFilters((prev) => ({ ...prev, health: "warning" }))
                            }
                          />
                          <FilterOptionButton
                            label="Crítico"
                            active={filters.health === "critical"}
                            onClick={() =>
                              setFilters((prev) => ({ ...prev, health: "critical" }))
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                          Responsável
                        </p>
                        <div className="max-h-[120px] space-y-1 overflow-y-auto pr-1">
                          <button
                            type="button"
                            onClick={() =>
                              setFilters((prev) => ({ ...prev, responsible: "all" }))
                            }
                            className={cn(
                              "flex w-full items-center rounded-md px-2.5 py-1.5 text-left text-sm transition-colors",
                              filters.responsible === "all"
                                ? "bg-zinc-900 text-white"
                                : "hover:bg-zinc-100"
                            )}
                          >
                            Todos
                          </button>
                          {responsibleNames.map((name) => (
                            <button
                              key={name}
                              type="button"
                              onClick={() =>
                                setFilters((prev) => ({ ...prev, responsible: name }))
                              }
                              className={cn(
                                "flex w-full items-center rounded-md px-2.5 py-1.5 text-left text-sm transition-colors",
                                filters.responsible === name
                                  ? "bg-zinc-900 text-white"
                                  : "hover:bg-zinc-100"
                              )}
                            >
                              {name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, staleOnly: !prev.staleOnly }))
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-[12px] border px-3 py-2 text-sm transition-colors",
                          filters.staleOnly
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                        )}
                      >
                        <span>Sem interação &gt;30d</span>
                        {filters.staleOnly ? <Check className="h-4 w-4" /> : null}
                      </button>

                      <div className="flex items-center justify-between border-t border-zinc-200 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                          onClick={() =>
                            setFilters({
                              health: "all",
                              responsible: "all",
                              staleOnly: false,
                            })
                          }
                        >
                          Limpar
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                          onClick={() => setIsFiltersOpen(false)}
                        >
                          Aplicar
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </ModuleCommandHeader>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <MetricChip
              label="Críticos"
              count={criticalCount}
              icon={<XCircle className="h-3.5 w-3.5" />}
              active={metricsFilter === "critical"}
              tone="danger"
              onClick={() =>
                setMetricsFilter((prev) => (prev === "critical" ? "all" : "critical"))
              }
            />
            <MetricChip
              label="Saudáveis"
              count={healthyCount}
              icon={<Heart className="h-3.5 w-3.5" />}
              active={metricsFilter === "good"}
              tone="success"
              onClick={() => setMetricsFilter((prev) => (prev === "good" ? "all" : "good"))}
            />
            <MetricChip
              label="Sem interação >30d"
              count={staleCount}
              icon={<Clock className="h-3.5 w-3.5" />}
              active={metricsFilter === "stale"}
              tone="warning"
              onClick={() =>
                setMetricsFilter((prev) => (prev === "stale" ? "all" : "stale"))
              }
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.06, ease: "easeOut" }}
          className="flex min-h-0 flex-1 gap-4"
        >
          <div className="min-h-0 min-w-0 flex-1">{view === "board" ? renderBoard() : renderList()}</div>

          <aside
            className={cn(
              "hidden xl:block transition-[width,opacity] duration-[220ms] ease-out",
              isIntelligenceOpen
                ? "w-[360px] opacity-100"
                : "pointer-events-none w-0 opacity-0"
            )}
          >
            <IntelligenceRail
              criticalCount={criticalCount}
              warningCount={phaseScopedClients.filter((client) => client.healthScore === "warning").length}
              healthyCount={healthyCount}
              prioritizedClients={prioritizedClients}
              focusedClient={focusedClient}
              commandResult={commandResult}
              runningCommand={runningCommand}
              onRunCommand={handleIntelligenceCommand}
              onFocusClient={(client) => setFocusedClientId(client.id)}
              onCopyText={handleCopyText}
              focusedSuggestions={focusedSuggestions}
            />
          </aside>
        </motion.div>

        {!isDesktopXL ? (
          <>
            <div
              onClick={() => setIsIntelligenceOpen(false)}
              className={cn(
                "fixed inset-0 z-40 bg-black/25 transition-opacity duration-200 xl:hidden",
                isIntelligenceOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            />
            <aside
              className={cn(
                "fixed right-0 top-0 z-50 h-full w-[min(92vw,360px)] p-2 transition-transform duration-[220ms] ease-out xl:hidden",
                isIntelligenceOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <IntelligenceRail
                criticalCount={criticalCount}
                warningCount={phaseScopedClients.filter((client) => client.healthScore === "warning").length}
                healthyCount={healthyCount}
                prioritizedClients={prioritizedClients}
                focusedClient={focusedClient}
                commandResult={commandResult}
                runningCommand={runningCommand}
                onRunCommand={handleIntelligenceCommand}
                onFocusClient={(client) => setFocusedClientId(client.id)}
                onCopyText={handleCopyText}
                focusedSuggestions={focusedSuggestions}
                onClose={() => setIsIntelligenceOpen(false)}
              />
            </aside>
          </>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}

function FilterOptionButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-120",
        active
          ? "border-zinc-900 bg-zinc-900 text-white"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
      )}
    >
      {label}
    </button>
  );
}

function MetricChip({
  label,
  count,
  icon,
  active,
  tone,
  onClick,
}: {
  label: string;
  count: number;
  icon: ReactNode;
  active: boolean;
  tone: "danger" | "success" | "warning";
  onClick: () => void;
}) {
  const toneClass = {
    danger: active
      ? "border-red-300 bg-red-50 text-red-700"
      : "border-zinc-200 bg-white text-zinc-600",
    success: active
      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
      : "border-zinc-200 bg-white text-zinc-600",
    warning: active
      ? "border-amber-300 bg-amber-50 text-amber-700"
      : "border-zinc-200 bg-white text-zinc-600",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-all duration-140 hover:bg-zinc-50 active:scale-[0.99]",
        toneClass[tone],
        count === 0 && !active && "opacity-55"
      )}
    >
      {icon}
      <span>
        {label}: {count}
      </span>
    </button>
  );
}

function SuccessBoardColumn({
  title,
  count,
  mrrTotal,
  insight,
  clients,
  widthClass,
  onOpenClient,
  onCreateActivity,
  onFocusClient,
  onCopyMessage,
  cardFeedback,
  onExport,
  onSuggestPlan,
  onViewAll,
  onViewFilters,
  onAddClient,
}: {
  title: string;
  count: number;
  mrrTotal: number;
  insight: string;
  clients: Client[];
  widthClass: string;
  onOpenClient: (client: Client) => void;
  onCreateActivity: (client: Client) => void;
  onFocusClient: (client: Client) => void;
  onCopyMessage: (text: string, clientId: string) => Promise<void>;
  cardFeedback: CardFeedbackState | null;
  onExport: () => void;
  onSuggestPlan: () => void;
  onViewAll: () => void;
  onViewFilters: () => void;
  onAddClient: () => void;
}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <section
      className={cn(
        "flex h-full min-h-0 shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-zinc-200/70 bg-white/88 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.5)]",
        widthClass
      )}
    >
      <div
        className={cn(
          "sticky top-0 z-10 border-b border-zinc-200/80 bg-white/95 px-3.5 py-3 transition-shadow duration-120",
          hasScrolled && "shadow-[0_8px_16px_-14px_rgba(15,23,42,0.5)]"
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-[15px] font-semibold text-zinc-900">{title}</h3>
              <Badge className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                {count}
              </Badge>
            </div>
            <p className="mt-1 text-xs text-zinc-500">MRR {formatCurrency(mrrTotal)}</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-zinc-500">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 rounded-[14px]">
              <DropdownMenuItem onClick={onViewAll}>Ver todos</DropdownMenuItem>
              <DropdownMenuItem onClick={onExport}>Exportar lista (preview)</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onSuggestPlan}>
                <Sparkles className="mr-2 h-4 w-4" />
                Sugerir plano de ação
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="mt-2 text-xs text-zinc-500">{insight}</p>
      </div>

      <div
        onScroll={(event) => setHasScrolled(event.currentTarget.scrollTop > 8)}
        className="min-h-0 flex-1 overflow-y-auto px-3 py-3"
      >
        {clients.length === 0 ? (
          <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/70 p-3">
            <p className="text-sm font-medium text-zinc-700">Sem clientes nesta fase</p>
            <p className="mt-1 text-xs text-zinc-500">
              Adicione um cliente ou revise os filtros aplicados.
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                className="h-8 rounded-full bg-black px-3 text-xs text-white hover:bg-zinc-800"
                onClick={onAddClient}
              >
                Adicionar cliente
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full px-3 text-xs"
                onClick={onViewFilters}
              >
                Ver filtros ativos
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {clients.map((client) => (
              <ClientCardPremium
                key={client.id}
                client={client}
                onOpenClient={() => onOpenClient(client)}
                onCreateActivity={() => onCreateActivity(client)}
                onFocusClient={() => onFocusClient(client)}
                onCopyMessage={onCopyMessage}
                feedback={cardFeedback}
                customRiskReason={isRiskClient(client) ? getRiskReason(client) : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ClientCardPremium({
  client,
  onOpenClient,
  onCreateActivity,
  onFocusClient,
  onCopyMessage,
  feedback,
  customRiskReason,
}: {
  client: Client;
  onOpenClient: () => void;
  onCreateActivity: () => void;
  onFocusClient: () => void;
  onCopyMessage: (text: string, clientId: string) => Promise<void>;
  feedback: CardFeedbackState | null;
  customRiskReason?: string;
}) {
  const health = healthConfig[client.healthScore];
  const suggestions = getIntelligenceSuggestions(client);
  const daysWithoutInteraction = getDaysSinceInteraction(client.lastInteraction);

  return (
    <Card className="premium-lift relative overflow-hidden rounded-[16px] border-zinc-200/85 bg-white shadow-[0_10px_20px_-18px_rgba(15,23,42,0.6)]">
      <CardContent className="flex h-[212px] flex-col p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <button
              type="button"
              onClick={onOpenClient}
              title={client.companyName}
              className="block max-w-full truncate text-left font-heading text-[17px] font-semibold leading-tight text-zinc-900 hover:text-brand"
            >
              {client.companyName}
            </button>
            <p title={client.contactName} className="truncate text-sm text-zinc-500">
              {client.contactName}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-zinc-500">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 rounded-[14px]">
              <DropdownMenuItem onClick={onOpenClient}>Ver cliente</DropdownMenuItem>
              <DropdownMenuItem onClick={onCreateActivity}>Criar atividade</DropdownMenuItem>
              <DropdownMenuItem onClick={onFocusClient}>
                Atualizar insights
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[28px] font-semibold leading-none text-zinc-950">
            {formatMRR(client.monthlyRevenue)}
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
                  health.badgeClass
                )}
              >
                {health.icon}
                {health.label}
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[220px] bg-zinc-900 text-zinc-50">
              {health.tooltip}
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-2">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback className="bg-zinc-100 text-zinc-600">
                {getInitials(client.responsibleName)}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-xs text-zinc-600">{client.responsibleName}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
            {daysWithoutInteraction > 30 ? (
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            ) : daysWithoutInteraction > 14 ? (
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            ) : null}
            <Clock className="h-3 w-3" />
            {getRelativeDate(client.lastInteraction)}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-full px-2.5 text-xs"
            onClick={onOpenClient}
          >
            Ver cliente
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-full px-2.5 text-xs"
            onClick={onCreateActivity}
          >
            Criar atividade
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full px-2.5 text-xs"
                onClick={onFocusClient}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Mensagem
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[320px] rounded-[14px] border-zinc-200 bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                Menux Intelligence
              </p>
              <div className="mt-2 space-y-2">
                {suggestions.messages.map((message, index) => (
                  <div key={`${client.id}-${index}`} className="rounded-[12px] border border-zinc-200 bg-zinc-50 p-2.5">
                    <p className="text-xs text-zinc-700">{message}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 h-7 rounded-full px-2.5 text-[11px]"
                      onClick={() => void onCopyMessage(message, client.id)}
                    >
                      <Copy className="mr-1 h-3 w-3" />
                      Copiar
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-2 rounded-[12px] border border-zinc-200 bg-white p-2.5">
                <p className="text-xs font-medium text-zinc-700">
                  Próximo passo: {suggestions.nextStep}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Risco se ignorar: {customRiskReason ?? suggestions.risk}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {feedback?.clientId === client.id ? (
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold",
              feedback.type === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {feedback.message}
          </span>
        ) : null}
      </CardContent>
    </Card>
  );
}

function BoardInsightsColumn({
  widthClass,
  prioritizedClients,
  onFocusClient,
}: {
  widthClass: string;
  prioritizedClients: Client[];
  onFocusClient: (client: Client) => void;
}) {
  return (
    <section
      className={cn(
        "flex h-full min-h-0 shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-zinc-200/80 bg-zinc-50/92",
        widthClass
      )}
    >
      <div className="border-b border-zinc-200/75 px-3.5 py-3">
        <h3 className="font-heading text-[15px] font-semibold text-zinc-900">Insights</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Recomendações rápidas do Menux Intelligence para ocupar o espaço útil.
        </p>
      </div>
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto px-3 py-3">
        {prioritizedClients.length > 0 ? (
          prioritizedClients.map((client) => (
            <button
              key={client.id}
              onClick={() => onFocusClient(client)}
              className="w-full rounded-[12px] border border-zinc-200 bg-white p-2.5 text-left transition-colors hover:bg-zinc-50"
            >
              <p className="truncate text-sm font-medium text-zinc-900">{client.companyName}</p>
              <p className="mt-1 text-xs text-zinc-500">{getRiskReason(client)}</p>
            </button>
          ))
        ) : (
          <div className="rounded-[12px] border border-dashed border-zinc-200 bg-white p-3 text-sm text-zinc-500">
            Sem recomendações de risco no momento.
          </div>
        )}
      </div>
    </section>
  );
}

function IntelligenceRail({
  criticalCount,
  warningCount,
  healthyCount,
  prioritizedClients,
  focusedClient,
  focusedSuggestions,
  runningCommand,
  commandResult,
  onRunCommand,
  onFocusClient,
  onCopyText,
  onClose,
}: {
  criticalCount: number;
  warningCount: number;
  healthyCount: number;
  prioritizedClients: Client[];
  focusedClient: Client | null;
  focusedSuggestions: { messages: string[]; nextStep: string; risk: string } | null;
  runningCommand: string | null;
  commandResult: string | null;
  onRunCommand: (commandId: string, label: string) => void;
  onFocusClient: (client: Client) => void;
  onCopyText: (text: string) => Promise<void>;
  onClose?: () => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-slate-700/60 bg-[linear-gradient(145deg,#0b1220_0%,#0d1a33_56%,#15345e_100%)] text-slate-100 shadow-[0_34px_52px_-36px_rgba(15,23,42,0.9)]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold">Menux Intelligence</h3>
            <p className="mt-0.5 text-xs text-cyan-100/80">Online · camada de execução ativa</p>
          </div>
          {onClose ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
              onClick={onClose}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <Button
          className="mt-3 h-8 w-full rounded-full border border-white/15 bg-white/10 text-xs text-slate-100 hover:bg-white/15"
          onClick={() => onRunCommand("day-plan", "Plano do dia")}
        >
          <Bot className="mr-1.5 h-3.5 w-3.5" />
          Gerar plano do dia
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Diagnóstico da saúde
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="rounded-[10px] border border-red-300/25 bg-red-400/10 p-2">
              <p className="text-[11px] text-red-100/90">Críticos</p>
              <p className="text-lg font-semibold text-red-100">{criticalCount}</p>
            </div>
            <div className="rounded-[10px] border border-amber-300/25 bg-amber-400/10 p-2">
              <p className="text-[11px] text-amber-100/90">Em risco</p>
              <p className="text-lg font-semibold text-amber-100">{warningCount}</p>
            </div>
            <div className="rounded-[10px] border border-emerald-300/25 bg-emerald-400/10 p-2">
              <p className="text-[11px] text-emerald-100/90">Saudáveis</p>
              <p className="text-lg font-semibold text-emerald-100">{healthyCount}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Ações rápidas
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {intelligenceCommands.map((command) => (
              <button
                key={command.id}
                onClick={() => onRunCommand(command.id, command.label)}
                disabled={runningCommand !== null}
                className={cn(
                  "flex min-h-[36px] items-center gap-1.5 rounded-[10px] border px-2.5 py-2 text-left text-xs transition-colors duration-120",
                  "border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-65"
                )}
              >
                {runningCommand === command.id ? (
                  <span className="h-3 w-3 animate-spin rounded-full border border-cyan-200 border-t-transparent" />
                ) : (
                  command.icon
                )}
                <span>{command.label}</span>
              </button>
            ))}
          </div>
          {commandResult ? (
            <p className="mt-2 rounded-[10px] border border-cyan-300/30 bg-cyan-500/10 px-2.5 py-2 text-xs text-cyan-100">
              {commandResult}
            </p>
          ) : null}
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Clientes prioritários
          </p>
          <div className="mt-2 space-y-2">
            {prioritizedClients.length > 0 ? (
              prioritizedClients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => onFocusClient(client)}
                  className="w-full rounded-[10px] border border-white/10 bg-white/5 px-2.5 py-2 text-left transition-colors hover:bg-white/10"
                >
                  <p className="truncate text-sm font-medium text-slate-50">{client.companyName}</p>
                  <p className="mt-0.5 text-xs text-slate-300">{getRiskReason(client)}</p>
                </button>
              ))
            ) : (
              <p className="rounded-[10px] border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-slate-300">
                Sem clientes críticos no momento.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Mensagens prontas
          </p>
          {focusedClient && focusedSuggestions ? (
            <div className="mt-2 space-y-2">
              <p className="text-xs text-slate-300">
                Cliente selecionado:{" "}
                <span className="font-medium text-slate-100">{focusedClient.companyName}</span>
              </p>
              {focusedSuggestions.messages.slice(0, 2).map((message, index) => (
                <div key={`${focusedClient.id}-suggestion-${index}`} className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
                  <p className="text-xs text-slate-200">{message}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 h-7 rounded-full border-white/20 bg-white/5 px-2.5 text-[11px] text-slate-100 hover:bg-white/10"
                    onClick={() => void onCopyText(message)}
                  >
                    <Copy className="mr-1 h-3 w-3" />
                    Copiar
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 rounded-[10px] border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-slate-300">
              Selecione um cliente para gerar mensagens.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function ClientsPageSkeleton() {
  return (
    <div className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4">
      <div className="shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="mt-2 h-4 w-56" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-64 rounded-full" />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 gap-4">
        <div className="min-h-0 min-w-0 flex-1 rounded-[20px] border border-zinc-200/80 bg-white/75 p-3">
          <div className="flex h-full gap-3 overflow-hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-[320px] shrink-0 rounded-[18px] border border-zinc-200 bg-zinc-50/70 p-3">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="mt-2 h-4 w-40" />
                <div className="mt-3 space-y-2">
                  {Array.from({ length: 3 }).map((__, cardIndex) => (
                    <Skeleton key={cardIndex} className="h-[172px] rounded-[16px]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden w-[360px] xl:block">
          <div className="h-full rounded-[20px] border border-zinc-200/80 bg-zinc-50/75 p-3">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="mt-3 h-24 rounded-[14px]" />
            <Skeleton className="mt-3 h-24 rounded-[14px]" />
            <Skeleton className="mt-3 h-24 rounded-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
