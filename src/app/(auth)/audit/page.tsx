"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
  ArrowRight,
  Shield,
  AlertTriangle,
  Filter,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { mockAuditLog, mockUsers } from "@/lib/mock-data";

// ---------------------------------------------------------------------------
// Framer Motion Variants
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AuditAction = "created" | "updated" | "deleted" | "moved";

type EntityType =
  | "opportunity"
  | "client"
  | "activity"
  | "user"
  | "settings";

interface AuditEvent {
  id: string;
  timestamp: string;
  user: {
    name: string;
    initials: string;
    color: string;
  };
  action: AuditAction;
  entityType: EntityType;
  entityName: string;
  details: string;
  fullDetails?: string;
}

// ---------------------------------------------------------------------------
// Action Configuration
// ---------------------------------------------------------------------------

const actionConfig: Record<
  AuditAction,
  { label: string; bgColor: string; textColor: string; icon: React.ReactNode }
> = {
  created: {
    label: "Criado",
    bgColor: "bg-status-success-light",
    textColor: "text-status-success",
    icon: <Plus className="h-3 w-3" />,
  },
  updated: {
    label: "Atualizado",
    bgColor: "bg-status-info-light",
    textColor: "text-status-info",
    icon: <Pencil className="h-3 w-3" />,
  },
  deleted: {
    label: "Excluído",
    bgColor: "bg-status-danger-light",
    textColor: "text-status-danger",
    icon: <Trash2 className="h-3 w-3" />,
  },
  moved: {
    label: "Movido",
    bgColor: "bg-status-warning-light",
    textColor: "text-status-warning",
    icon: <ArrowRight className="h-3 w-3" />,
  },
};

const entityTypeLabels: Record<EntityType, string> = {
  opportunity: "Oportunidade",
  client: "Cliente",
  activity: "Atividade",
  user: "Usuário",
  settings: "Configuração",
};

const entityFilterOptions = [
  { value: "all", label: "Todos" },
  { value: "opportunity", label: "Oportunidades" },
  { value: "client", label: "Clientes" },
  { value: "activity", label: "Atividades" },
  { value: "user", label: "Usuários" },
  { value: "settings", label: "Configurações" },
];

const userFilterOptions = [
  { value: "all", label: "Todos os usuários" },
  ...mockUsers.filter((u) => u.isActive).map((u) => ({ value: u.name, label: u.name })),
];

// ---------------------------------------------------------------------------
// Mapping from global mock data to local AuditEvent shape
// ---------------------------------------------------------------------------

function mapAuditLogToEvents(events: typeof mockAuditLog): AuditEvent[] {
  const userColors: Record<string, string> = {
    "Rafael Mendes": "bg-brand-light text-brand",
    "Camila Ferreira": "bg-status-info-light text-status-info",
    "Lucas Oliveira": "bg-status-success-light text-status-success",
    "Juliana Costa": "bg-status-warning-light text-status-warning",
    "Fernanda Lima": "bg-purple-100 text-purple-700",
    "Marcos Pereira": "bg-amber-100 text-amber-700",
    "Carolina Santos": "bg-pink-100 text-pink-700",
  };

  const actionMap: Record<string, AuditAction> = {
    "Ganhou oportunidade": "created",
    "Perdeu oportunidade": "deleted",
    "Criou oportunidade": "created",
    "Adicionou cliente": "created",
    "Completou atividade": "updated",
    "Avançou estágio": "moved",
    "Alterou saúde do cliente": "updated",
    "Atualizou configuração": "updated",
    "Criou atividade": "created",
  };

  return events.map((e) => {
    const initials = e.userName
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return {
      id: e.id,
      timestamp: e.timestamp,
      user: {
        name: e.userName,
        initials,
        color: userColors[e.userName] ?? "bg-zinc-100 text-zinc-600",
      },
      action: actionMap[e.action] ?? "updated",
      entityType: e.entity,
      entityName: e.entityName,
      details: e.details,
    };
  });
}

const mappedAuditEvents = mapAuditLogToEvents(mockAuditLog);

const TOTAL_RECORDS = 247;
const PAGE_SIZE = 15;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ---------------------------------------------------------------------------
// Expandable Row
// ---------------------------------------------------------------------------

function AuditRow({
  event,
  isExpanded,
  onToggle,
}: {
  event: AuditEvent;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const config = actionConfig[event.action];

  return (
    <>
      <TableRow
        className="cursor-pointer transition-colors hover:bg-zinc-50"
        onClick={onToggle}
      >
        {/* Data/Hora */}
        <TableCell>
          <span className="font-body text-sm text-zinc-600">
            {formatDateTime(event.timestamp)}
          </span>
        </TableCell>

        {/* Usuário */}
        <TableCell>
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback className={`text-[10px] ${event.user.color}`}>
                {event.user.initials}
              </AvatarFallback>
            </Avatar>
            <span className="font-body text-sm font-medium text-black">
              {event.user.name}
            </span>
          </div>
        </TableCell>

        {/* Ação */}
        <TableCell>
          <span
            className={`inline-flex items-center gap-1 rounded-[10px] px-2 py-1 font-body text-xs font-medium ${config.bgColor} ${config.textColor}`}
          >
            {config.icon}
            {config.label}
          </span>
        </TableCell>

        {/* Entidade */}
        <TableCell>
          <div className="flex flex-col">
            <span className="font-body text-sm font-medium text-black">
              {event.entityName}
            </span>
            <span className="font-body text-xs text-zinc-400">
              {entityTypeLabels[event.entityType]}
            </span>
          </div>
        </TableCell>

        {/* Detalhes */}
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="flex-1 truncate font-body text-sm text-zinc-600">
              {event.details}
            </span>
            {event.fullDetails && (
              <button
                type="button"
                className="shrink-0 text-zinc-400"
                aria-label={isExpanded ? "Ocultar detalhes" : "Exibir detalhes"}
                onClick={(eventClick) => {
                  eventClick.stopPropagation();
                  onToggle();
                }}
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </TableCell>
      </TableRow>

      {/* Expanded details row */}
      {isExpanded && event.fullDetails && (
        <TableRow className="bg-zinc-50/50">
          <TableCell colSpan={5} className="px-6 py-4">
            <div className="rounded-[10px] bg-zinc-100 p-4">
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Detalhes completos
              </p>
              <pre className="whitespace-pre-wrap font-body text-sm leading-relaxed text-zinc-600">
                {event.fullDetails}
              </pre>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AuditPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setIsLoading(false), 800); return () => clearTimeout(t); }, []);

  const [entityFilter, setEntityFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [actionFilter, setActionFilter] = useState<AuditAction | "all">("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter events
  const filteredEvents = useMemo(() => {
    return mappedAuditEvents.filter((event) => {
      if (entityFilter !== "all" && event.entityType !== entityFilter) {
        return false;
      }
      if (userFilter !== "all" && event.user.name !== userFilter) {
        return false;
      }
      if (actionFilter !== "all" && event.action !== actionFilter) {
        return false;
      }
      if (dateFrom) {
        const eventDate = new Date(event.timestamp);
        const fromDate = new Date(dateFrom);
        if (eventDate < fromDate) return false;
      }
      if (dateTo) {
        const eventDate = new Date(event.timestamp);
        const toDate = new Date(dateTo);
        toDate.setHours(23, 59, 59);
        if (eventDate > toDate) return false;
      }
      return true;
    });
  }, [entityFilter, userFilter, actionFilter, dateFrom, dateTo]);

  const totalPages = Math.ceil(TOTAL_RECORDS / PAGE_SIZE);
  const showingFrom = (currentPage - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(currentPage * PAGE_SIZE, TOTAL_RECORDS);

  const handleToggleRow = useCallback((id: string) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  }, []);

  const handleClearFilters = useCallback(() => {
    setEntityFilter("all");
    setUserFilter("all");
    setActionFilter("all");
    setDateFrom("");
    setDateTo("");
    setCurrentPage(1);
  }, []);

  const hasActiveFilters =
    entityFilter !== "all" || userFilter !== "all" || actionFilter !== "all" || dateFrom || dateTo;
  const deletedEventsCount = filteredEvents.filter((event) => event.action === "deleted").length;
  const movedEventsCount = filteredEvents.filter((event) => event.action === "moved").length;

  const applyDeletedFilter = useCallback(() => {
    setActionFilter("deleted");
    setCurrentPage(1);
  }, []);

  const applyMovedFilter = useCallback(() => {
    setActionFilter("moved");
    setCurrentPage(1);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Skeleton className="h-8 w-52" />
            <Skeleton className="mt-2 h-4 w-72" />
          </div>
          <Skeleton className="h-8 w-56 rounded-lg" />
        </div>
        <Skeleton className="h-14 rounded-xl" />
        <div className="space-y-2 rounded-xl border border-zinc-200 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-12 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <ModuleCommandHeader
          title="Log de Auditoria"
          description="Rastreie todas as ações realizadas no sistema."
          meta={`${filteredEvents.length} registros no filtro atual`}
          chips={[
            {
              id: "deleted",
              label: `${deletedEventsCount} exclusões`,
              icon: <AlertTriangle className="h-3.5 w-3.5" />,
              tone: deletedEventsCount > 0 ? "danger" : "neutral",
              onClick: applyDeletedFilter,
            },
            {
              id: "moved",
              label: `${movedEventsCount} movimentações`,
              icon: <ArrowRight className="h-3.5 w-3.5" />,
              tone: movedEventsCount > 0 ? "warning" : "neutral",
              onClick: applyMovedFilter,
            },
            {
              id: "total",
              label: `${TOTAL_RECORDS} registros totais`,
              icon: <Shield className="h-3.5 w-3.5" />,
              tone: "info",
              onClick: handleClearFilters,
            },
          ]}
          actions={
            <div className="flex flex-wrap items-center justify-end gap-2">
              <div className="flex items-center gap-2 rounded-[10px] bg-zinc-50 px-3 py-2">
                <Shield className="h-4 w-4 text-zinc-400" />
                <span className="font-body text-xs text-zinc-500">
                  Registros mantidos por 5 anos
                </span>
              </div>

            </div>
          }
        />
      </motion.div>

      {/* Filters Row */}
      <motion.div variants={fadeUp} className="flex flex-wrap items-end gap-3 rounded-[15px] border border-zinc-200 bg-white p-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-400" />
          <span className="font-heading text-sm font-medium text-black">
            Filtros
          </span>
        </div>

        {/* Entity type filter */}
        <div className="space-y-1">
          <label className="font-body text-xs text-zinc-500">Entidade</label>
          <Select value={entityFilter} onValueChange={setEntityFilter}>
            <SelectTrigger className="w-full rounded-[10px] sm:w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {entityFilterOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* User filter */}
        <div className="space-y-1">
          <label className="font-body text-xs text-zinc-500">Usuário</label>
          <Select value={userFilter} onValueChange={setUserFilter}>
            <SelectTrigger className="w-full rounded-[10px] sm:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {userFilterOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date range */}
        <div className="space-y-1">
          <label className="font-body text-xs text-zinc-500">Data início</label>
          <div className="relative">
            <Calendar className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            <Input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full rounded-[10px] pl-8 font-body text-sm sm:w-[150px]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-body text-xs text-zinc-500">Data fim</label>
          <div className="relative">
            <Calendar className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            <Input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full rounded-[10px] pl-8 font-body text-sm sm:w-[150px]"
            />
          </div>
        </div>

        {/* Clear filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="rounded-full font-heading text-zinc-500"
          >
            Limpar filtros
          </Button>
        )}
      </motion.div>

      {/* Audit Table */}
      <motion.div variants={fadeUp} className="rounded-[15px] border border-zinc-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-b-zinc-200 hover:bg-transparent">
              <TableHead className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Data/Hora
              </TableHead>
              <TableHead className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Usuário
              </TableHead>
              <TableHead className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Ação
              </TableHead>
              <TableHead className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Entidade
              </TableHead>
              <TableHead className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Detalhes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <AuditRow
                  key={event.id}
                  event={event}
                  isExpanded={expandedRow === event.id}
                  onToggle={() => handleToggleRow(event.id)}
                />
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-12 text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-zinc-400">
                    <Search className="h-8 w-8" />
                    <p className="font-body text-sm">
                      Nenhum registro encontrado com os filtros aplicados
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      className="mt-2 rounded-full font-heading text-brand"
                    >
                      Limpar filtros
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination footer */}
        {filteredEvents.length > 0 && (
          <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-3">
            <span className="font-body text-sm text-zinc-500">
              Mostrando {showingFrom}-{showingTo} de {TOTAL_RECORDS} registros
            </span>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon-xs"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>

              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "ghost"}
                    size="icon-xs"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`rounded-full font-heading text-xs ${
                      currentPage === pageNum
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "text-zinc-600"
                    }`}
                  >
                    {pageNum}
                  </Button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="px-1 font-body text-xs text-zinc-400">
                    ...
                  </span>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => setCurrentPage(totalPages)}
                    className="rounded-full font-heading text-xs text-zinc-600"
                  >
                    {totalPages}
                  </Button>
                </>
              )}

              <Button
                variant="outline"
                size="icon-xs"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Retention notice */}
      <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 rounded-[15px] bg-zinc-50 py-3">
        <Shield className="h-4 w-4 text-zinc-400" />
        <span className="font-body text-sm text-zinc-500">
          Registros mantidos por 5 anos conforme política de retenção de dados
        </span>
      </motion.div>
    </motion.div>
  );
}
