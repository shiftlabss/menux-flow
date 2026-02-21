"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowUpRight,
  Bot,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Copy,
  Download,
  FileDown,
  FileSpreadsheet,
  FileText,
  Filter,
  Flame,
  ListChecks,
  MoreHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { exportToCSV, exportToExcel, exportToPDF } from "@/lib/export";
import { useAuthStore } from "@/stores/auth-store";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
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
import { PermissionsGuard } from "@/components/shared/permissions-guard";
import type { CommissionStatus } from "@/types";

type StatusScope = "all" | "projected" | "confirmed" | "paid";

interface FinanceCommission {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  sellerName: string;
  value: number;
  baseValue: number;
  percentage: number;
  status: CommissionStatus;
  competenceMonth: string;
  closeDate: string;
  paidAt?: string;
  stage: string;
  contestationReason?: string;
}

interface ExtraFilters {
  contestedOnly: boolean;
  riskOnly: boolean;
  valueMin: string;
  valueMax: string;
  competenceRange: "selected" | "selected-and-prev";
}

interface FeedbackState {
  type: "success" | "error" | "info";
  message: string;
}

const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const REFERENCE_DATE = new Date("2026-02-16T12:00:00.000Z");

const commissionsSeed: FinanceCommission[] = [
  {
    id: "fin-01",
    opportunityId: "opp-01",
    opportunityTitle: "Restaurante Bela Vista",
    sellerName: "Maria Silva",
    value: 1200,
    baseValue: 12000,
    percentage: 10,
    status: "projected",
    competenceMonth: "2026-02",
    closeDate: "2026-02-28",
    stage: "Proposta Enviada",
  },
  {
    id: "fin-02",
    opportunityId: "opp-02",
    opportunityTitle: "Hotel Sunset Premium",
    sellerName: "Maria Silva",
    value: 3600,
    baseValue: 36000,
    percentage: 10,
    status: "confirmed",
    competenceMonth: "2026-02",
    closeDate: "2026-02-15",
    stage: "Contrato Assinado",
  },
  {
    id: "fin-03",
    opportunityId: "opp-03",
    opportunityTitle: "Café Central Express",
    sellerName: "João Santos",
    value: 600,
    baseValue: 6000,
    percentage: 10,
    status: "paid",
    competenceMonth: "2026-02",
    closeDate: "2026-01-20",
    paidAt: "2026-02-05",
    stage: "Finalizado",
  },
  {
    id: "fin-04",
    opportunityId: "opp-04",
    opportunityTitle: "Pousada Mar Azul",
    sellerName: "João Santos",
    value: 2400,
    baseValue: 24000,
    percentage: 10,
    status: "confirmed",
    competenceMonth: "2026-02",
    closeDate: "2026-02-10",
    stage: "Contrato Assinado",
  },
  {
    id: "fin-05",
    opportunityId: "opp-05",
    opportunityTitle: "Churrascaria Fogo Bravo",
    sellerName: "Maria Silva",
    value: 1800,
    baseValue: 18000,
    percentage: 10,
    status: "projected",
    competenceMonth: "2026-02",
    closeDate: "2026-03-05",
    stage: "Negociação",
  },
  {
    id: "fin-06",
    opportunityId: "opp-06",
    opportunityTitle: "Padaria São José",
    sellerName: "Ana Oliveira",
    value: 900,
    baseValue: 9000,
    percentage: 10,
    status: "paid",
    competenceMonth: "2026-02",
    closeDate: "2026-01-25",
    paidAt: "2026-02-03",
    stage: "Finalizado",
  },
  {
    id: "fin-07",
    opportunityId: "opp-07",
    opportunityTitle: "Loja Tech Store",
    sellerName: "Ana Oliveira",
    value: 4500,
    baseValue: 45000,
    percentage: 10,
    status: "projected",
    competenceMonth: "2026-02",
    closeDate: "2026-03-15",
    stage: "Qualificação",
  },
  {
    id: "fin-08",
    opportunityId: "opp-08",
    opportunityTitle: "Clínica Saúde Total",
    sellerName: "Carlos Mendes",
    value: 2100,
    baseValue: 21000,
    percentage: 10,
    status: "confirmed",
    competenceMonth: "2026-02",
    closeDate: "2026-02-12",
    stage: "Contrato Assinado",
  },
  {
    id: "fin-09",
    opportunityId: "opp-09",
    opportunityTitle: "Academia FitLife",
    sellerName: "Carlos Mendes",
    value: 1500,
    baseValue: 15000,
    percentage: 10,
    status: "paid",
    competenceMonth: "2026-02",
    closeDate: "2026-01-18",
    paidAt: "2026-02-01",
    stage: "Finalizado",
  },
  {
    id: "fin-10",
    opportunityId: "opp-10",
    opportunityTitle: "Escritório ContábilPro",
    sellerName: "João Santos",
    value: 750,
    baseValue: 7500,
    percentage: 10,
    status: "projected",
    competenceMonth: "2026-02",
    closeDate: "2026-03-01",
    stage: "Proposta Enviada",
  },
  {
    id: "fin-11",
    opportunityId: "opp-11",
    opportunityTitle: "Rede Super Norte",
    sellerName: "Maria Silva",
    value: 3200,
    baseValue: 32000,
    percentage: 10,
    status: "paid",
    competenceMonth: "2026-01",
    closeDate: "2026-01-15",
    paidAt: "2026-01-29",
    stage: "Finalizado",
  },
  {
    id: "fin-12",
    opportunityId: "opp-12",
    opportunityTitle: "Distribuidora Delta",
    sellerName: "João Santos",
    value: 1800,
    baseValue: 18000,
    percentage: 10,
    status: "confirmed",
    competenceMonth: "2026-01",
    closeDate: "2026-01-26",
    stage: "Contrato Assinado",
  },
  {
    id: "fin-13",
    opportunityId: "opp-13",
    opportunityTitle: "Grupo Praia Brava",
    sellerName: "Ana Oliveira",
    value: 2700,
    baseValue: 27000,
    percentage: 10,
    status: "projected",
    competenceMonth: "2026-02",
    closeDate: "2026-03-04",
    stage: "Negociação",
  },
  {
    id: "fin-14",
    opportunityId: "opp-14",
    opportunityTitle: "Mercado Bom Dia",
    sellerName: "Maria Silva",
    value: 950,
    baseValue: 9500,
    percentage: 10,
    status: "confirmed",
    competenceMonth: "2026-02",
    closeDate: "2026-02-14",
    stage: "Contrato Assinado",
  },
];

const statusConfig: Record<
  CommissionStatus,
  { label: string; badgeClass: string }
> = {
  projected: {
    label: "Projetada",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
  },
  confirmed: {
    label: "Confirmada",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
  },
  paid: {
    label: "Paga",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  contested: {
    label: "Contestada",
    badgeClass: "border-red-200 bg-red-50 text-red-700",
  },
};

const statusOrder: Record<CommissionStatus, number> = {
  projected: 0,
  confirmed: 1,
  contested: 2,
  paid: 3,
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

function formatMonthLabel(periodKey: string): string {
  const [year, month] = periodKey.split("-");
  const monthIndex = Number.parseInt(month, 10) - 1;
  return `${MONTH_NAMES[monthIndex]} ${year}`;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "-";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "--";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getDaysFromReference(dateStr: string): number {
  const date = new Date(dateStr);
  return Math.floor(
    (REFERENCE_DATE.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function matchesStatusScope(status: CommissionStatus, scope: StatusScope): boolean {
  if (scope === "all") return true;
  if (scope === "confirmed") return status === "confirmed" || status === "contested";
  return status === scope;
}

function getScopeLabel(scope: Exclude<StatusScope, "all">): string {
  if (scope === "projected") return "Projetadas";
  if (scope === "confirmed") return "Confirmadas";
  return "Pagas";
}

function useAnimatedNumber(target: number, duration = 220): number {
  const [value, setValue] = useState(target);
  const previousValueRef = useRef(target);

  useEffect(() => {
    const start = previousValueRef.current;
    const delta = target - start;
    if (delta === 0) return;

    const startTs = performance.now();
    let raf = 0;

    const tick = (ts: number) => {
      const progress = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + delta * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    previousValueRef.current = target;
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function FinancePage() {
  return (
    <PermissionsGuard permission="canViewFinance">
      <FinancePageContent />
    </PermissionsGuard>
  );
}

function FinancePageContent() {
  const router = useRouter();
  const railAutoOpenedRef = useRef(false);
  const { user, permissions } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  const [commissions, setCommissions] = useState<FinanceCommission[]>(commissionsSeed);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [statusScope, setStatusScope] = useState<StatusScope>("all");
  const [listMode, setListMode] = useState<"group-status" | "list" | "group-competence">(
    "group-status"
  );
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set(["status-paid"]));
  const [highlightedCommissionIds, setHighlightedCommissionIds] = useState<Set<string>>(
    new Set()
  );
  const [extraFilters, setExtraFilters] = useState<ExtraFilters>({
    contestedOnly: false,
    riskOnly: false,
    valueMin: "",
    valueMax: "",
    competenceRange: "selected",
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);
  const [rowFeedback, setRowFeedback] = useState<Record<string, FeedbackState>>({});
  const [calcOpenRowId, setCalcOpenRowId] = useState<string | null>(null);
  const [contestConfirmId, setContestConfirmId] = useState<string | null>(null);
  const [contestReason, setContestReason] = useState("");
  const [pageFeedback, setPageFeedback] = useState<FeedbackState | null>(null);
  const [intelRunningAction, setIntelRunningAction] = useState<string | null>(null);
  const [intelResult, setIntelResult] = useState<string | null>(null);
  const [kpiError, setKpiError] = useState(false);
  const [tableError, setTableError] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const xlQuery = window.matchMedia("(min-width: 1280px)");

    const syncBreakpoint = () => {
      const isXl = xlQuery.matches;
      setIsDesktopXL(isXl);
      if (isXl && !railAutoOpenedRef.current) {
        setIsIntelligenceOpen(true);
        railAutoOpenedRef.current = true;
      }
      if (!isXl) {
        setIsIntelligenceOpen(false);
      }
    };

    syncBreakpoint();
    xlQuery.addEventListener("change", syncBreakpoint);
    return () => xlQuery.removeEventListener("change", syncBreakpoint);
  }, []);

  useEffect(() => {
    if (!pageFeedback) return;
    const timer = window.setTimeout(() => setPageFeedback(null), 2200);
    return () => window.clearTimeout(timer);
  }, [pageFeedback]);

  useEffect(() => {
    if (!intelResult) return;
    const timer = window.setTimeout(() => setIntelResult(null), 1200);
    return () => window.clearTimeout(timer);
  }, [intelResult]);

  const periodKey = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}`;
  const periodLabel = `${MONTH_NAMES[selectedMonth]} ${selectedYear}`;
  const previousPeriodDate = new Date(selectedYear, selectedMonth - 1, 1);
  const previousPeriodKey = `${previousPeriodDate.getFullYear()}-${String(
    previousPeriodDate.getMonth() + 1
  ).padStart(2, "0")}`;

  const currentSellerName = useMemo(() => {
    return user?.name?.trim() || "Usuário não identificado";
  }, [user?.name]);
  const sellerInitials = getInitials(currentSellerName);

  const periodCommissions = useMemo(
    () =>
      commissions.filter((commission) => {
        if (commission.sellerName !== currentSellerName) return false;
        if (extraFilters.competenceRange === "selected-and-prev") {
          return (
            commission.competenceMonth === periodKey ||
            commission.competenceMonth === previousPeriodKey
          );
        }
        return commission.competenceMonth === periodKey;
      }),
    [
      commissions,
      currentSellerName,
      extraFilters.competenceRange,
      periodKey,
      previousPeriodKey,
    ]
  );

  const filteredCommissions = useMemo(() => {
    const minValue = Number.parseFloat(extraFilters.valueMin);
    const maxValue = Number.parseFloat(extraFilters.valueMax);

    return periodCommissions
      .filter((commission) => {
        if (!matchesStatusScope(commission.status, statusScope)) return false;
        if (extraFilters.contestedOnly && commission.status !== "contested") return false;
        if (Number.isFinite(minValue) && commission.value < minValue) return false;
        if (Number.isFinite(maxValue) && commission.value > maxValue) return false;
        if (
          extraFilters.riskOnly &&
          !(commission.status === "projected" && getDaysFromReference(commission.closeDate) > 7)
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        const order = statusOrder[a.status] - statusOrder[b.status];
        if (order !== 0) return order;
        return b.value - a.value;
      });
  }, [periodCommissions, statusScope, extraFilters]);

  const summary = useMemo(() => {
    const projected = periodCommissions
      .filter((commission) => commission.status === "projected")
      .reduce((sum, commission) => sum + commission.value, 0);
    const confirmed = periodCommissions
      .filter(
        (commission) =>
          commission.status === "confirmed" || commission.status === "contested"
      )
      .reduce((sum, commission) => sum + commission.value, 0);
    const paid = periodCommissions
      .filter((commission) => commission.status === "paid")
      .reduce((sum, commission) => sum + commission.value, 0);

    const total = projected + confirmed + paid;
    const contestedCount = periodCommissions.filter(
      (commission) => commission.status === "contested"
    ).length;
    const paymentRate = total > 0 ? Math.round((paid / total) * 100) : 0;

    return {
      projected,
      confirmed,
      paid,
      total,
      totalCount: periodCommissions.length,
      contestedCount,
      paymentRate,
    };
  }, [periodCommissions]);

  const previousPeriodSummary = useMemo(() => {
    const previous = commissions.filter(
      (commission) =>
        commission.competenceMonth === previousPeriodKey &&
        commission.sellerName === currentSellerName
    );
    const prevPaid = previous
      .filter((commission) => commission.status === "paid")
      .reduce((sum, commission) => sum + commission.value, 0);
    const prevTotal = previous.reduce((sum, commission) => sum + commission.value, 0);
    return {
      paymentRate: prevTotal > 0 ? Math.round((prevPaid / prevTotal) * 100) : 0,
    };
  }, [commissions, currentSellerName, previousPeriodKey]);

  const projectedPct =
    summary.total > 0 ? Math.round((summary.projected / summary.total) * 100) : 0;
  const confirmedPct =
    summary.total > 0 ? Math.round((summary.confirmed / summary.total) * 100) : 0;
  const paidPct =
    summary.total > 0 ? Math.round((summary.paid / summary.total) * 100) : 0;

  const animatedTotal = useAnimatedNumber(summary.total, 220);
  const animatedCount = useAnimatedNumber(summary.totalCount, 220);
  const animatedContested = useAnimatedNumber(summary.contestedCount, 220);
  const animatedPaymentRate = useAnimatedNumber(summary.paymentRate, 220);

  const projectedAgedCount = useMemo(
    () =>
      periodCommissions.filter(
        (commission) =>
          commission.status === "projected" &&
          getDaysFromReference(commission.closeDate) > 7
      ).length,
    [periodCommissions]
  );

  const inconsistentCount = useMemo(
    () =>
      periodCommissions.filter(
        (commission) => commission.status === "paid" && !commission.paidAt
      ).length,
    [periodCommissions]
  );

  const aboveAverageCount = useMemo(() => {
    if (periodCommissions.length === 0) return 0;
    const average =
      periodCommissions.reduce((sum, commission) => sum + commission.value, 0) /
      periodCommissions.length;
    return periodCommissions.filter((commission) => commission.value > average * 1.5).length;
  }, [periodCommissions]);

  const filterCount = useMemo(
    () =>
      (statusScope !== "all" ? 1 : 0) +
      (extraFilters.contestedOnly ? 1 : 0) +
      (extraFilters.riskOnly ? 1 : 0) +
      (extraFilters.valueMin ? 1 : 0) +
      (extraFilters.valueMax ? 1 : 0) +
      (extraFilters.competenceRange === "selected-and-prev" ? 1 : 0),
    [extraFilters, statusScope]
  );

  const activeChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onClear?: () => void }> = [];

    if (statusScope !== "all") {
      chips.push({
        id: "status",
        label: `Status: ${getScopeLabel(statusScope)}`,
        onClear: () => setStatusScope("all"),
      });
    }

    if (extraFilters.contestedOnly) {
      chips.push({
        id: "contested",
        label: "Somente contestadas",
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, contestedOnly: false })),
      });
    }

    if (extraFilters.riskOnly) {
      chips.push({
        id: "risk",
        label: "Somente em risco (>7 dias)",
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, riskOnly: false })),
      });
    }

    if (extraFilters.valueMin) {
      chips.push({
        id: "value-min",
        label: `Mínimo: ${formatCurrency(Number.parseFloat(extraFilters.valueMin) || 0)}`,
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, valueMin: "" })),
      });
    }

    if (extraFilters.valueMax) {
      chips.push({
        id: "value-max",
        label: `Máximo: ${formatCurrency(Number.parseFloat(extraFilters.valueMax) || 0)}`,
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, valueMax: "" })),
      });
    }

    if (extraFilters.competenceRange === "selected-and-prev") {
      chips.push({
        id: "competence",
        label: "Competência: mês + anterior",
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, competenceRange: "selected" })),
      });
    }

    return chips;
  }, [statusScope, extraFilters]);

  const clearRowFeedback = useCallback((commissionId: string) => {
    window.setTimeout(() => {
      setRowFeedback((prev) => {
        const next = { ...prev };
        delete next[commissionId];
        return next;
      });
    }, 1200);
  }, []);

  const setRowInlineFeedback = useCallback(
    (commissionId: string, type: FeedbackState["type"], message: string) => {
      setRowFeedback((prev) => ({ ...prev, [commissionId]: { type, message } }));
      clearRowFeedback(commissionId);
    },
    [clearRowFeedback]
  );

  const handleCopySummary = useCallback(
    async (commission: FinanceCommission) => {
      const summaryText = `Oportunidade: ${commission.opportunityTitle}\nComissão: ${formatCurrency(
        commission.value
      )} (${commission.percentage
        }%)\nStatus: ${statusConfig[commission.status].label
        }\nCompetência: ${formatMonthLabel(commission.competenceMonth)}`;

      if (typeof navigator === "undefined" || !navigator.clipboard) {
        setRowInlineFeedback(commission.id, "error", "Copiar indisponível");
        return;
      }

      try {
        await navigator.clipboard.writeText(summaryText);
        setRowInlineFeedback(commission.id, "success", "Copiado");
      } catch {
        setRowInlineFeedback(commission.id, "error", "Falha ao copiar");
      }
    },
    [setRowInlineFeedback]
  );

  const handleRequestContest = useCallback(
    (commission: FinanceCommission) => {
      if (commission.status !== "confirmed") {
        setRowInlineFeedback(
          commission.id,
          "error",
          "Somente confirmadas podem ser contestadas"
        );
        return;
      }
      setContestConfirmId(commission.id);
      setContestReason("");
    },
    [setRowInlineFeedback]
  );

  const handleConfirmContest = useCallback(
    (commissionId: string) => {
      if (!contestReason.trim() || contestReason.trim().length < 5) {
        setRowInlineFeedback(commissionId, "error", "Motivo é obrigatório e deve ser claro.");
        return;
      }
      setCommissions((prev) =>
        prev.map((current) =>
          current.id === commissionId
            ? {
              ...current,
              status: "contested" as CommissionStatus,
              contestationReason: contestReason.trim(),
            }
            : current
        )
      );
      setContestConfirmId(null);
      setContestReason("");
      setRowInlineFeedback(commissionId, "success", "Contestação enviada ao financeiro");
    },
    [contestReason, setRowInlineFeedback]
  );

  const handleCancelContest = useCallback(() => {
    setContestConfirmId(null);
    setContestReason("");
  }, []);

  const handleExport = useCallback(
    (format: "csv" | "pdf" | "excel") => {
      if (filteredCommissions.length === 0) {
        setPageFeedback({
          type: "error",
          message: "Nenhum dado para exportar. Ajuste os filtros ou período.",
        });
        return;
      }

      const data = filteredCommissions.map((commission) => ({
        Oportunidade: commission.opportunityTitle,
        Vendedor: commission.sellerName,
        "Valor Base": commission.baseValue,
        Percentual: `${commission.percentage}%`,
        "Valor Comissão": commission.value,
        Competencia: formatMonthLabel(commission.competenceMonth),
        Status: statusConfig[commission.status].label,
        Fechamento: formatDate(commission.closeDate),
        "Pago em": commission.paidAt ? formatDate(commission.paidAt) : "-",
      }));
      const sellerSlug = currentSellerName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
      const fileName = `financeiro-${sellerSlug}-${periodKey}`;

      if (format === "csv") exportToCSV(data, fileName);
      if (format === "pdf") exportToPDF(data, fileName, `Resumo financeiro · ${currentSellerName} · ${periodLabel}`);
      if (format === "excel") exportToExcel(data, fileName);

      setPageFeedback({
        type: "success",
        message: `Exportação ${format.toUpperCase()} iniciada.`,
      });
    },
    [filteredCommissions, periodKey, currentSellerName, periodLabel]
  );

  const runIntelligenceAction = useCallback(
    (actionId: string, resultMessage: string, callback?: () => void) => {
      setIntelRunningAction(actionId);
      window.setTimeout(() => {
        callback?.();
        setIntelRunningAction(null);
        setIntelResult(resultMessage);
      }, 220);
    },
    []
  );

  const clearAllFilters = useCallback(() => {
    setStatusScope("all");
    setExtraFilters({
      contestedOnly: false,
      riskOnly: false,
      valueMin: "",
      valueMax: "",
      competenceRange: "selected",
    });
  }, []);

  const goPrevMonth = useCallback(() => {
    setCalcOpenRowId(null);
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((year) => year - 1);
      return;
    }
    setSelectedMonth((month) => month - 1);
  }, [selectedMonth]);

  const goNextMonth = useCallback(() => {
    setCalcOpenRowId(null);
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((year) => year + 1);
      return;
    }
    setSelectedMonth((month) => month + 1);
  }, [selectedMonth]);

  const toggleGroupCollapse = useCallback((groupId: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  }, []);

  const highlightCommissions = useCallback((ids: string[]) => {
    if (ids.length === 0) return;
    setHighlightedCommissionIds(new Set(ids));
    window.setTimeout(() => setHighlightedCommissionIds(new Set()), 1200);
  }, []);

  const groupedByStatus = useMemo(() => {
    const groups: Array<{
      id: CommissionStatus;
      label: string;
      items: FinanceCommission[];
      total: number;
    }> = (["projected", "confirmed", "contested", "paid"] as CommissionStatus[]).map(
      (status) => {
        const items = filteredCommissions.filter((commission) => commission.status === status);
        return {
          id: status,
          label: statusConfig[status].label,
          items,
          total: items.reduce((sum, commission) => sum + commission.value, 0),
        };
      }
    );
    return groups.filter((group) => group.items.length > 0);
  }, [filteredCommissions]);

  const groupedByCompetence = useMemo(() => {
    const grouped = new Map<string, FinanceCommission[]>();
    for (const commission of filteredCommissions) {
      if (!grouped.has(commission.competenceMonth)) grouped.set(commission.competenceMonth, []);
      grouped.get(commission.competenceMonth)!.push(commission);
    }
    return Array.from(grouped.entries())
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([competence, items]) => ({
        id: competence,
        label: formatMonthLabel(competence),
        items: items.sort((a, b) => b.value - a.value),
        total: items.reduce((sum, commission) => sum + commission.value, 0),
      }));
  }, [filteredCommissions]);

  const topClients = useMemo(() => {
    const totals = new Map<string, number>();
    for (const commission of periodCommissions) {
      totals.set(
        commission.opportunityTitle,
        (totals.get(commission.opportunityTitle) ?? 0) + commission.value
      );
    }
    return Array.from(totals.entries())
      .map(([title, total]) => ({ title, total }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 3);
  }, [periodCommissions]);

  const miniChartBars = useMemo(() => {
    const values = periodCommissions.map((c) => c.value);
    if (values.length === 0) return [0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
    const maxVal = Math.max(...values);
    if (maxVal === 0) return values.slice(0, 6).map(() => 0.1);
    const normalized = values
      .sort((a, b) => a - b)
      .slice(0, 6)
      .map((v) => Math.max(0.1, v / maxVal));
    while (normalized.length < 6) normalized.push(0.1);
    return normalized;
  }, [periodCommissions]);

  const topRiskCommissions = useMemo(
    () =>
      periodCommissions
        .filter(
          (commission) =>
            commission.status === "projected" && getDaysFromReference(commission.closeDate) > 7
        )
        .sort((a, b) => b.value - a.value)
        .slice(0, 3),
    [periodCommissions]
  );

  const buildPersonalSummary = useCallback(() => {
    const delta = summary.paymentRate - previousPeriodSummary.paymentRate;
    const deltaText = delta === 0 ? "estável" : delta > 0 ? `+${delta}pp` : `${delta}pp`;
    return [
      `Resumo financeiro pessoal · ${periodLabel}`,
      `Vendedor: ${currentSellerName}`,
      `Total no período: ${formatCurrency(summary.total)}`,
      `Projetado: ${formatCurrency(summary.projected)}`,
      `Confirmado: ${formatCurrency(summary.confirmed)}`,
      `Pago: ${formatCurrency(summary.paid)}`,
      `Taxa de pagamento: ${summary.paymentRate}% (${deltaText} vs mês anterior)`,
      `Itens em risco (>7 dias): ${projectedAgedCount}`,
      `Contestadas: ${summary.contestedCount}`,
    ].join("\n");
  }, [
    currentSellerName,
    periodLabel,
    projectedAgedCount,
    previousPeriodSummary.paymentRate,
    summary.confirmed,
    summary.contestedCount,
    summary.paid,
    summary.paymentRate,
    summary.projected,
    summary.total,
  ]);

  if (isLoading) {
    return <FinanceLoadingSkeleton />;
  }

  const hasPeriodData = periodCommissions.length > 0;
  const hasRows = filteredCommissions.length > 0;

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4"
      >
        {pageFeedback ? (
          <InlineFeedback
            type={pageFeedback.type}
            message={pageFeedback.message}
            compact
            onClose={() => setPageFeedback(null)}
          />
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.02, ease: "easeOut" }}
          className="shrink-0"
        >
          <ModuleCommandHeader
            title="Financeiro"
            description="Meu previsto, confirmado e pago"
            actions={
              <div className="flex w-full min-w-0 flex-wrap items-center gap-2 xl:justify-end">
                <div className="inline-flex h-9 items-center gap-2 rounded-full border border-zinc-200/85 bg-white/90 px-2.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white">
                    {sellerInitials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-zinc-900">
                      Minha central financeira
                    </p>
                    <p className="truncate text-[10px] text-zinc-500">{currentSellerName}</p>
                  </div>
                </div>

                {permissions?.canExportData ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 rounded-full">
                        <Download className="h-3.5 w-3.5" />
                        Exportar
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52 rounded-[14px]">
                      <DropdownMenuItem onClick={() => handleExport("csv")}>
                        <FileText className="mr-2 h-4 w-4" />
                        Exportar CSV
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleExport("pdf")}>
                        <FileDown className="mr-2 h-4 w-4" />
                        Exportar PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleExport("excel")}>
                        <FileSpreadsheet className="mr-2 h-4 w-4" />
                        Exportar Excel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : null}

              </div>
            }
          >
            <div className="space-y-2">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <div className="inline-flex h-9 items-center rounded-full border border-zinc-200/85 bg-white/90 px-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-zinc-500 hover:bg-zinc-100"
                      onClick={goPrevMonth}
                      aria-label="Mês anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="px-2 text-sm font-medium text-zinc-700">
                      {periodLabel}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-zinc-500 hover:bg-zinc-100"
                      onClick={goNextMonth}
                      aria-label="Próximo mês"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 rounded-full">
                        <Filter className="h-3.5 w-3.5" />
                        {filterCount > 0 ? `Filtros (${filterCount})` : "Filtros"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="end"
                      className="w-[min(92vw,380px)] rounded-[16px] border-zinc-200 bg-white p-3"
                    >
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                          Filtros das minhas comissões
                        </p>

                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                            Status
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { id: "all" as StatusScope, label: "Todos" },
                              { id: "projected" as StatusScope, label: "Projetadas" },
                              { id: "confirmed" as StatusScope, label: "Confirmadas" },
                              { id: "paid" as StatusScope, label: "Pagas" },
                            ].map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setStatusScope(item.id)}
                                className={cn(
                                  "h-8 rounded-[10px] border px-2 text-xs font-medium transition-colors",
                                  statusScope === item.id
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                                )}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                            Competência
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <FilterOptionButton
                              active={extraFilters.competenceRange === "selected"}
                              label="Somente mês selecionado"
                              tone="info"
                              onClick={() =>
                                setExtraFilters((prev) => ({
                                  ...prev,
                                  competenceRange: "selected",
                                }))
                              }
                            />
                            <FilterOptionButton
                              active={extraFilters.competenceRange === "selected-and-prev"}
                              label="Mês + mês anterior"
                              tone="warning"
                              onClick={() =>
                                setExtraFilters((prev) => ({
                                  ...prev,
                                  competenceRange: "selected-and-prev",
                                }))
                              }
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                            Faixa de valor
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="number"
                              min={0}
                              placeholder="Mínimo"
                              value={extraFilters.valueMin}
                              onChange={(event) =>
                                setExtraFilters((prev) => ({ ...prev, valueMin: event.target.value }))
                              }
                              className="h-9 rounded-[10px] border border-zinc-200 px-2.5 text-sm text-zinc-700 outline-none focus:border-zinc-300"
                            />
                            <input
                              type="number"
                              min={0}
                              placeholder="Máximo"
                              value={extraFilters.valueMax}
                              onChange={(event) =>
                                setExtraFilters((prev) => ({ ...prev, valueMax: event.target.value }))
                              }
                              className="h-9 rounded-[10px] border border-zinc-200 px-2.5 text-sm text-zinc-700 outline-none focus:border-zinc-300"
                            />
                          </div>
                        </div>

                        <FilterOptionButton
                          active={extraFilters.riskOnly}
                          label="Somente em risco (>7 dias projetada)"
                          tone="warning"
                          onClick={() => {
                            const newVal = !extraFilters.riskOnly;
                            setExtraFilters((prev) => ({
                              ...prev,
                              riskOnly: newVal,
                            }));
                            if (newVal) {
                              setStatusScope("projected");
                            }
                          }}
                        />
                        <FilterOptionButton
                          active={extraFilters.contestedOnly}
                          label="Somente contestadas"
                          tone="danger"
                          onClick={() => {
                            const newVal = !extraFilters.contestedOnly;
                            setExtraFilters((prev) => ({
                              ...prev,
                              contestedOnly: newVal,
                            }));
                            if (newVal) {
                              setStatusScope("confirmed");
                            }
                          }}
                        />

                        <div className="flex items-center justify-between border-t border-zinc-200 pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full"
                            onClick={clearAllFilters}
                          >
                            Limpar
                          </Button>
                          <Button
                            size="sm"
                            className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
                            onClick={() => setIsFiltersOpen(false)}
                          >
                            Pronto
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  {activeChips.length > 0 ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="h-9 rounded-full text-xs text-zinc-500 hover:text-zinc-900"
                    >
                      Limpar tudo
                    </Button>
                  ) : null}
                </div>
              </div>

              {activeChips.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {activeChips.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={chip.onClear}
                      className="inline-flex h-8 items-center gap-1 rounded-full border border-zinc-200 bg-white/90 px-2.5 text-xs font-medium text-zinc-600 transition-colors duration-120 hover:bg-zinc-50"
                    >
                      {chip.label}
                      <span className="text-zinc-400">×</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </ModuleCommandHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.05, ease: "easeOut" }}
          className="flex min-h-0 flex-1 gap-4"
        >
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto pr-1">
            {!hasPeriodData ? (
              <FinanceEmptyState
                periodLabel={periodLabel}
                onChangePeriod={goPrevMonth}
              />
            ) : (
              <div className="space-y-4 pb-4">
                <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {kpiError ? (
                    <SectionError
                      message="Falha ao carregar indicadores financeiros."
                      onRetry={() => setKpiError(false)}
                    />
                  ) : (
                    <>
                      <KpiCard
                        icon={<CircleDollarSign className="h-5 w-5 text-blue-700" />}
                        label="Total no período"
                        value={formatCurrency(animatedTotal)}
                        subtext="no meu período atual"
                        trend={`${summary.totalCount} minhas comissões`}
                        miniVisual={
                          <div className="flex h-8 items-end gap-1">
                            {miniChartBars.map((height, index) => (
                              <span
                                key={index}
                                className="w-1.5 rounded bg-zinc-300/85"
                                style={{ height: `${height * 100}%` }}
                              />
                            ))}
                          </div>
                        }
                      />
                      <KpiCard
                        icon={<ListChecks className="h-5 w-5 text-zinc-700" />}
                        label="Comissões"
                        value={`${Math.round(animatedCount)}`}
                        subtext="minhas comissões registradas"
                        trend={`${summary.projected > 0 ? "em projeção" : "sem projeção ativa"}`}
                        miniVisual={
                          <div className="mt-1 flex gap-1.5">
                            <span className="h-2 w-8 rounded-full bg-blue-200" />
                            <span className="h-2 w-8 rounded-full bg-amber-200" />
                            <span className="h-2 w-8 rounded-full bg-emerald-200" />
                          </div>
                        }
                      />
                      <KpiCard
                        icon={<AlertTriangle className="h-5 w-5 text-red-700" />}
                        label="Contestadas"
                        value={`${Math.round(animatedContested)}`}
                        subtext="minhas pendências de contestação"
                        trend={summary.contestedCount === 0 ? "Tudo ok" : "Requer análise"}
                        miniVisual={
                          <Badge
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px]",
                              summary.contestedCount === 0
                                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                                : "border border-red-200 bg-red-50 text-red-700"
                            )}
                          >
                            {summary.contestedCount === 0 ? "Tudo ok" : "Atenção"}
                          </Badge>
                        }
                      />
                      <KpiCard
                        icon={<CheckCircle2 className="h-5 w-5 text-emerald-700" />}
                        label="Taxa de pagamento"
                        value={`${Math.round(animatedPaymentRate)}%`}
                        subtext="pago vs meu total"
                        trend={summary.paid > 0 ? `${formatCurrency(summary.paid)} pagos` : "Sem pagamento"}
                        miniVisual={
                          <div className="w-full">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                              <div
                                className="h-full rounded-full bg-emerald-400 transition-[width] duration-200"
                                style={{ width: `${summary.paymentRate}%` }}
                              />
                            </div>
                          </div>
                        }
                      />
                    </>
                  )}
                </section>

                <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-base font-semibold text-zinc-900">
                        Funil de Status
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Projetado, confirmado e pago sincronizados com minhas comissões.
                      </p>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-600">
                      {formatMonthLabel(periodKey)}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <StatusFunnelCard
                      label="Projetado"
                      value={summary.projected}
                      percentage={projectedPct}
                      active={statusScope === "projected"}
                      tone="info"
                      tooltip="Comissões previstas aguardando confirmação."
                      onClick={() =>
                        setStatusScope((prev) => (prev === "projected" ? "all" : "projected"))
                      }
                    />
                    <StatusFunnelCard
                      label="Confirmado"
                      value={summary.confirmed}
                      percentage={confirmedPct}
                      active={statusScope === "confirmed"}
                      tone="warning"
                      tooltip="Comissões confirmadas e contestadas."
                      onClick={() =>
                        setStatusScope((prev) => (prev === "confirmed" ? "all" : "confirmed"))
                      }
                    />
                    <StatusFunnelCard
                      label="Pago"
                      value={summary.paid}
                      percentage={paidPct}
                      active={statusScope === "paid"}
                      tone="success"
                      tooltip="Comissões efetivamente pagas no período."
                      onClick={() =>
                        setStatusScope((prev) => (prev === "paid" ? "all" : "paid"))
                      }
                    />
                  </div>
                </section>

                <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h3 className="font-heading text-base font-semibold text-zinc-900">
                        Minhas comissões
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50/90 p-1">
                          {[
                            { id: "group-status" as const, label: "Por status" },
                            { id: "list" as const, label: "Lista" },
                            { id: "group-competence" as const, label: "Competência" },
                          ].map((mode) => (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() => setListMode(mode.id)}
                              className={cn(
                                "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                                listMode === mode.id
                                  ? "bg-white text-zinc-900 shadow-sm"
                                  : "text-zinc-500 hover:text-zinc-900"
                              )}
                            >
                              {mode.label}
                            </button>
                          ))}
                        </div>
                        <div className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-zinc-50/90 p-1">
                          {[
                            { id: "all" as StatusScope, label: "Todas" },
                            { id: "projected" as StatusScope, label: "Projetadas" },
                            { id: "confirmed" as StatusScope, label: "Confirmadas" },
                            { id: "paid" as StatusScope, label: "Pagas" },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setStatusScope(item.id)}
                              className={cn(
                                "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-120",
                                statusScope === item.id
                                  ? "bg-white text-zinc-900 shadow-sm"
                                  : "text-zinc-500 hover:text-zinc-900"
                              )}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/70 px-3 py-2">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-zinc-600">
                          <span className="font-semibold">Menux Intelligence:</span>{" "}
                          {projectedAgedCount > 0
                            ? `Você tem ${projectedAgedCount} itens projetados sem confirmação há mais de 7 dias.`
                            : "Sem atrasos críticos de confirmação no seu período."}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 rounded-full px-2.5 text-[11px]"
                            onClick={() => {
                              setStatusScope("projected");
                              highlightCommissions(
                                periodCommissions
                                  .filter((commission) => commission.status === "projected")
                                  .map((commission) => commission.id)
                              );
                            }}
                          >
                            Aplicar filtro
                          </Button>
                          <Button
                            size="sm"
                            className="menux-intelligence-btn-soft h-7 rounded-full px-2.5 text-[11px] text-slate-100"
                            onClick={() => setIsIntelligenceOpen(true)}
                          >
                            Ver análise
                          </Button>
                        </div>
                      </div>
                    </div>

                    {tableError ? (
                      <SectionError
                        message="Falha ao carregar minhas comissões do período."
                        onRetry={() => setTableError(false)}
                      />
                    ) : !hasRows ? (
                      <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/70 p-6 text-center">
                        {filterCount > 0 ? (
                          <>
                            <p className="font-heading text-lg font-semibold text-zinc-900">
                              Nenhuma comissão encontrada com esses filtros
                            </p>
                            <p className="mt-1 text-sm text-zinc-500">
                              Remova ou ajuste os filtros para ver suas comissões do período.
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <Button
                                variant="outline"
                                className="rounded-full"
                                onClick={clearAllFilters}
                              >
                                Limpar filtros
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="font-heading text-lg font-semibold text-zinc-900">
                              Você ainda não tem comissões neste mês
                            </p>
                            <p className="mt-1 text-sm text-zinc-500">
                              Volte ao pipeline para acelerar novas oportunidades.
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <Button
                                variant="outline"
                                className="rounded-full"
                                onClick={() => router.push("/pipes")}
                              >
                                Ver pipeline
                              </Button>
                            </div>
                          </>
                        )}
                      </div>
                    ) : listMode === "list" ? (
                      <div className="space-y-2">
                        {filteredCommissions.map((commission) => (
                          <FinanceCommissionItem
                            key={commission.id}
                            commission={commission}
                            highlighted={highlightedCommissionIds.has(commission.id)}
                            inlineFeedback={rowFeedback[commission.id]}
                            isDetailsOpen={calcOpenRowId === commission.id}
                            onToggleDetails={() =>
                              setCalcOpenRowId((prev) => (prev === commission.id ? null : commission.id))
                            }
                            onViewOpportunity={() =>
                              router.push(`/pipes?opportunityId=${commission.opportunityId}`)
                            }
                            isContestPending={contestConfirmId === commission.id}
                            contestReason={contestReason}
                            onContestReasonChange={setContestReason}
                            onCopySummary={() => void handleCopySummary(commission)}
                            onRequestContest={() => handleRequestContest(commission)}
                            onConfirmContest={() => handleConfirmContest(commission.id)}
                            onCancelContest={handleCancelContest}
                            onOpenIntelligence={() => {
                              setIsIntelligenceOpen(true);
                              setRowInlineFeedback(commission.id, "info", "Dica aberta no painel");
                            }}
                          />
                        ))}
                      </div>
                    ) : listMode === "group-status" ? (
                      <div className="space-y-3">
                        {groupedByStatus.map((group) => {
                          const groupId = `status-${group.id}`;
                          const collapsed = collapsedGroups.has(groupId);
                          return (
                            <div key={groupId} className="rounded-[14px] border border-zinc-200/80 bg-white/90">
                              <button
                                type="button"
                                onClick={() => toggleGroupCollapse(groupId)}
                                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
                              >
                                <div className="flex items-center gap-2">
                                  <Badge className={cn("rounded-full border px-2 py-0.5 text-[11px]", statusConfig[group.id].badgeClass)}>
                                    {group.label}
                                  </Badge>
                                  <span className="text-xs text-zinc-500">{group.items.length} itens</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-zinc-900">
                                    {formatCurrency(group.total)}
                                  </span>
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 text-zinc-500 transition-transform duration-180",
                                      collapsed && "-rotate-90"
                                    )}
                                  />
                                </div>
                              </button>
                              {!collapsed ? (
                                <div className="space-y-2 border-t border-zinc-100 p-2.5">
                                  {group.items.map((commission) => (
                                    <FinanceCommissionItem
                                      key={commission.id}
                                      commission={commission}
                                      highlighted={highlightedCommissionIds.has(commission.id)}
                                      inlineFeedback={rowFeedback[commission.id]}
                                      isDetailsOpen={calcOpenRowId === commission.id}
                                      onToggleDetails={() =>
                                        setCalcOpenRowId((prev) => (prev === commission.id ? null : commission.id))
                                      }
                                      onViewOpportunity={() =>
                                        router.push(`/pipes?opportunityId=${commission.opportunityId}`)
                                      }
                                      isContestPending={contestConfirmId === commission.id}
                                      contestReason={contestReason}
                                      onContestReasonChange={setContestReason}
                                      onCopySummary={() => void handleCopySummary(commission)}
                                      onRequestContest={() => handleRequestContest(commission)}
                                      onConfirmContest={() => handleConfirmContest(commission.id)}
                                      onCancelContest={handleCancelContest}
                                      onOpenIntelligence={() => {
                                        setIsIntelligenceOpen(true);
                                        setRowInlineFeedback(commission.id, "info", "Dica aberta no painel");
                                      }}
                                    />
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {groupedByCompetence.map((group) => {
                          const groupId = `competence-${group.id}`;
                          const collapsed = collapsedGroups.has(groupId);
                          return (
                            <div key={groupId} className="rounded-[14px] border border-zinc-200/80 bg-white/90">
                              <button
                                type="button"
                                onClick={() => toggleGroupCollapse(groupId)}
                                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-zinc-900">{group.label}</span>
                                  <span className="text-xs text-zinc-500">{group.items.length} itens</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-zinc-900">
                                    {formatCurrency(group.total)}
                                  </span>
                                  <ChevronDown
                                    className={cn(
                                      "h-4 w-4 text-zinc-500 transition-transform duration-180",
                                      collapsed && "-rotate-90"
                                    )}
                                  />
                                </div>
                              </button>
                              {!collapsed ? (
                                <div className="space-y-2 border-t border-zinc-100 p-2.5">
                                  {group.items.map((commission) => (
                                    <FinanceCommissionItem
                                      key={commission.id}
                                      commission={commission}
                                      highlighted={highlightedCommissionIds.has(commission.id)}
                                      inlineFeedback={rowFeedback[commission.id]}
                                      isDetailsOpen={calcOpenRowId === commission.id}
                                      onToggleDetails={() =>
                                        setCalcOpenRowId((prev) => (prev === commission.id ? null : commission.id))
                                      }
                                      onViewOpportunity={() =>
                                        router.push(`/pipes?opportunityId=${commission.opportunityId}`)
                                      }
                                      isContestPending={contestConfirmId === commission.id}
                                      contestReason={contestReason}
                                      onContestReasonChange={setContestReason}
                                      onCopySummary={() => void handleCopySummary(commission)}
                                      onRequestContest={() => handleRequestContest(commission)}
                                      onConfirmContest={() => handleConfirmContest(commission.id)}
                                      onCancelContest={handleCancelContest}
                                      onOpenIntelligence={() => {
                                        setIsIntelligenceOpen(true);
                                        setRowInlineFeedback(commission.id, "info", "Dica aberta no painel");
                                      }}
                                    />
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </section>

                <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                    <div className="rounded-[14px] border border-zinc-200/80 bg-zinc-50/60 p-3">
                      <h4 className="text-sm font-semibold text-zinc-900">Meus top 3 clientes no mês</h4>
                      <div className="mt-2 space-y-2">
                        {topClients.length > 0 ? (
                          topClients.map((item) => (
                            <button
                              key={item.title}
                              type="button"
                              className="flex w-full items-center justify-between rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2 text-left transition-colors duration-120 hover:bg-zinc-50"
                              onClick={() => {
                                const ids = filteredCommissions
                                  .filter((commission) => commission.opportunityTitle === item.title)
                                  .map((commission) => commission.id);
                                highlightCommissions(ids);
                              }}
                            >
                              <span className="text-sm text-zinc-700">{item.title}</span>
                              <span className="text-sm font-semibold text-zinc-900">
                                {formatCurrency(item.total)}
                              </span>
                            </button>
                          ))
                        ) : (
                          <p className="text-sm text-zinc-500">Sem clientes com comissão neste período.</p>
                        )}
                      </div>
                    </div>

                    <div className="rounded-[14px] border border-zinc-200/80 bg-zinc-50/60 p-3">
                      <h4 className="text-sm font-semibold text-zinc-900">Top 3 comissões em risco</h4>
                      <div className="mt-2 space-y-2">
                        {topRiskCommissions.length > 0 ? (
                          topRiskCommissions.map((commission) => (
                            <button
                              key={commission.id}
                              type="button"
                              className="flex w-full items-center justify-between rounded-[10px] border border-zinc-200 bg-white px-2.5 py-2 text-left transition-colors duration-120 hover:bg-zinc-50"
                              onClick={() => {
                                setStatusScope("projected");
                                setExtraFilters((prev) => ({ ...prev, riskOnly: true }));
                                highlightCommissions([commission.id]);
                              }}
                            >
                              <span className="text-sm text-zinc-700">{commission.opportunityTitle}</span>
                              <span className="text-sm font-semibold text-red-700">
                                {formatCurrency(commission.value)}
                              </span>
                            </button>
                          ))
                        ) : (
                          <p className="text-sm text-zinc-500">Nenhuma comissão em risco acima de 7 dias.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>

          <aside
            className={cn(
              "hidden xl:block shrink-0 transition-[width,opacity] duration-[220ms] ease-out",
              isIntelligenceOpen
                ? "w-[360px] opacity-100"
                : "pointer-events-none w-0 opacity-0"
            )}
          >
            <FinanceIntelligenceRail
              sellerName={currentSellerName}
              periodLabel={periodLabel}
              confirmationDelta={summary.paymentRate - previousPeriodSummary.paymentRate}
              projectedGap={summary.projected - summary.paid}
              projectedAgedCount={projectedAgedCount}
              inconsistentCount={inconsistentCount}
              aboveAverageCount={aboveAverageCount}
              runningAction={intelRunningAction}
              result={intelResult}
              onClose={() => setIsIntelligenceOpen(false)}
              onRunAction={runIntelligenceAction}
              applyProjectedFilter={() => {
                setStatusScope("projected");
                setExtraFilters((prev) => ({ ...prev, riskOnly: false }));
                highlightCommissions(
                  periodCommissions
                    .filter((commission) => commission.status === "projected")
                    .map((commission) => commission.id)
                );
              }}
              applyConfirmedFilter={() => {
                setStatusScope("confirmed");
                highlightCommissions(
                  periodCommissions
                    .filter(
                      (commission) =>
                        commission.status === "confirmed" || commission.status === "contested"
                    )
                    .map((commission) => commission.id)
                );
              }}
              applyPaidFilter={() => {
                setStatusScope("paid");
                highlightCommissions(
                  periodCommissions
                    .filter((commission) => commission.status === "paid")
                    .map((commission) => commission.id)
                );
              }}
              applyHighValueFilter={() => {
                setExtraFilters((prev) => ({ ...prev, valueMin: "3000" }));
                highlightCommissions(
                  periodCommissions
                    .filter((commission) => commission.value >= 3000)
                    .map((commission) => commission.id)
                );
              }}
              onGenerateSummary={() => {
                setPageFeedback({
                  type: "success",
                  message: "Resumo financeiro pessoal gerado.",
                });
                return buildPersonalSummary();
              }}
            />
          </aside>
        </motion.div>

        {!isDesktopXL ? (
          <>
            <div
              role="button"
              tabIndex={isIntelligenceOpen ? 0 : -1}
              aria-label="Fechar painel de inteligência"
              onClick={() => setIsIntelligenceOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                  e.preventDefault();
                  setIsIntelligenceOpen(false);
                }
              }}
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
              <FinanceIntelligenceRail
                sellerName={currentSellerName}
                periodLabel={periodLabel}
                confirmationDelta={summary.paymentRate - previousPeriodSummary.paymentRate}
                projectedGap={summary.projected - summary.paid}
                projectedAgedCount={projectedAgedCount}
                inconsistentCount={inconsistentCount}
                aboveAverageCount={aboveAverageCount}
                runningAction={intelRunningAction}
                result={intelResult}
                onClose={() => setIsIntelligenceOpen(false)}
                onRunAction={runIntelligenceAction}
                applyProjectedFilter={() => {
                  setStatusScope("projected");
                  setExtraFilters((prev) => ({ ...prev, riskOnly: false }));
                  highlightCommissions(
                    periodCommissions
                      .filter((commission) => commission.status === "projected")
                      .map((commission) => commission.id)
                  );
                  setIsIntelligenceOpen(false);
                }}
                applyConfirmedFilter={() => {
                  setStatusScope("confirmed");
                  highlightCommissions(
                    periodCommissions
                      .filter(
                        (commission) =>
                          commission.status === "confirmed" || commission.status === "contested"
                      )
                      .map((commission) => commission.id)
                  );
                  setIsIntelligenceOpen(false);
                }}
                applyPaidFilter={() => {
                  setStatusScope("paid");
                  highlightCommissions(
                    periodCommissions
                      .filter((commission) => commission.status === "paid")
                      .map((commission) => commission.id)
                  );
                  setIsIntelligenceOpen(false);
                }}
                applyHighValueFilter={() => {
                  setExtraFilters((prev) => ({ ...prev, valueMin: "3000" }));
                  highlightCommissions(
                    periodCommissions
                      .filter((commission) => commission.value >= 3000)
                      .map((commission) => commission.id)
                  );
                  setIsIntelligenceOpen(false);
                }}
                onGenerateSummary={() => {
                  setPageFeedback({
                    type: "success",
                    message: "Resumo financeiro pessoal gerado.",
                  });
                  const summaryText = buildPersonalSummary();
                  setIsIntelligenceOpen(false);
                  return summaryText;
                }}
              />
            </aside>
          </>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}

function FilterOptionButton({
  active,
  label,
  tone,
  onClick,
}: {
  active: boolean;
  label: string;
  tone: "info" | "warning" | "danger";
  onClick: () => void;
}) {
  const toneClass: Record<typeof tone, string> = {
    info: "border-blue-200 bg-blue-50 text-blue-700",
    warning: "border-amber-200 bg-amber-50 text-amber-700",
    danger: "border-red-200 bg-red-50 text-red-700",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between rounded-[12px] border px-3 py-2 text-sm transition-colors duration-120",
        active
          ? toneClass[tone]
          : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
      )}
    >
      <span>{label}</span>
      {active ? <CheckCircle2 className="h-4 w-4" /> : null}
    </button>
  );
}

function KpiCard({
  icon,
  label,
  value,
  subtext,
  trend,
  miniVisual,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  subtext: string;
  trend: string;
  miniVisual: ReactNode;
}) {
  return (
    <article className="premium-lift h-[154px] rounded-[18px] border border-zinc-200/80 bg-white p-3.5 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.5)]">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 text-zinc-600">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-zinc-100">
            {icon}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.08em]">{label}</span>
        </div>
        <div className="mt-3">
          <p className="font-heading text-[30px] font-semibold leading-none text-zinc-900">
            {value}
          </p>
          <p className="mt-1 truncate text-xs text-zinc-500">{subtext}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-2">
          <span className="truncate rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600">
            {trend}
          </span>
          <div className="min-w-[72px]">{miniVisual}</div>
        </div>
      </div>
    </article>
  );
}

function StatusFunnelCard({
  label,
  value,
  percentage,
  active,
  tone,
  tooltip,
  onClick,
}: {
  label: string;
  value: number;
  percentage: number;
  active: boolean;
  tone: "info" | "warning" | "success";
  tooltip: string;
  onClick: () => void;
}) {
  const toneClass = {
    info: active
      ? "border-blue-300 bg-blue-50"
      : "border-zinc-200 bg-white hover:border-blue-200",
    warning: active
      ? "border-amber-300 bg-amber-50"
      : "border-zinc-200 bg-white hover:border-amber-200",
    success: active
      ? "border-emerald-300 bg-emerald-50"
      : "border-zinc-200 bg-white hover:border-emerald-200",
  };

  const barClass = {
    info: "bg-blue-400",
    warning: "bg-amber-400",
    success: "bg-emerald-400",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          className={cn(
            "premium-lift rounded-[14px] border p-3 text-left transition-colors duration-120",
            toneClass[tone]
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-700">{label}</span>
            <span className="rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold text-zinc-600">
              {percentage}%
            </span>
          </div>
          <p className="mt-2 text-[30px] font-semibold leading-none text-zinc-900">
            {formatCurrency(value)}
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
            <div
              className={cn("h-full rounded-full transition-[width] duration-160", barClass[tone])}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[240px] bg-zinc-900 text-zinc-50">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

function FinanceCommissionItem({
  commission,
  highlighted,
  inlineFeedback,
  isDetailsOpen,
  isContestPending,
  contestReason,
  onContestReasonChange,
  onToggleDetails,
  onViewOpportunity,
  onCopySummary,
  onRequestContest,
  onConfirmContest,
  onCancelContest,
  onOpenIntelligence,
}: {
  commission: FinanceCommission;
  highlighted: boolean;
  inlineFeedback?: FeedbackState;
  isDetailsOpen: boolean;
  isContestPending: boolean;
  contestReason: string;
  onContestReasonChange: (reason: string) => void;
  onToggleDetails: () => void;
  onViewOpportunity: () => void;
  onCopySummary: () => void;
  onRequestContest: () => void;
  onConfirmContest: () => void;
  onCancelContest: () => void;
  onOpenIntelligence: () => void;
}) {
  const status = statusConfig[commission.status];
  const isRiskyProjected =
    commission.status === "projected" && getDaysFromReference(commission.closeDate) > 7;
  const hasPaidDate = Boolean(commission.paidAt);

  return (
    <article
      className={cn(
        "rounded-[14px] border border-zinc-200/80 bg-white px-3 py-2.5 transition-all duration-140 ease-out hover:-translate-y-[1px] hover:shadow-[0_10px_20px_-18px_rgba(15,23,42,0.35)]",
        highlighted && "border-cyan-300 bg-cyan-50/40 shadow-[0_0_0_1px_rgba(6,182,212,0.2)]"
      )}
    >
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-sm font-semibold text-zinc-900">
              {commission.opportunityTitle}
            </p>
            <div className="flex items-center gap-1.5">
              <Badge className={cn("rounded-full border px-2 py-0.5 text-[11px]", status.badgeClass)}>
                {status.label}
              </Badge>
              {isRiskyProjected && (
                <Badge className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700">
                  <Flame className="mr-1 h-3 w-3" />
                  Risco SLA
                </Badge>
              )}
            </div>
          </div>
          <p className="mt-1 truncate text-xs text-zinc-500">
            Competência {formatMonthLabel(commission.competenceMonth)} · {commission.percentage}%
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-zinc-500 hover:bg-zinc-100"
              aria-label="Mais ações"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52 rounded-[14px]">
            <DropdownMenuItem onClick={onViewOpportunity}>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Ver oportunidade
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onToggleDetails}>
              <Calculator className="mr-2 h-4 w-4" />
              Ver detalhes
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onCopySummary}>
              <Copy className="mr-2 h-4 w-4" />
              Copiar resumo
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={onRequestContest}
              disabled={commission.status !== "confirmed"}
              className={cn(commission.status === "confirmed" ? "text-red-700" : "")}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Marcar contestação
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onOpenIntelligence}>
              <Sparkles className="mr-2 h-4 w-4" />
              Dica Menux Intelligence
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-heading text-[22px] font-semibold leading-none text-zinc-900">
            {formatCurrency(commission.value)}
          </p>
          <p
            className={cn(
              "mt-1 text-xs",
              isRiskyProjected ? "text-red-600" : "text-zinc-500"
            )}
          >
            {isRiskyProjected
              ? `${getDaysFromReference(commission.closeDate)} dias sem confirmação`
              : hasPaidDate
                ? `Pago em ${formatDate(commission.paidAt)}`
                : `Última atualização ${formatDate(commission.closeDate)}`}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="h-7 rounded-full px-2.5 text-[11px]"
            onClick={onToggleDetails}
          >
            {isDetailsOpen ? "Ocultar detalhes" : "Ver detalhes"}
          </Button>
          <Button
            size="sm"
            className="menux-intelligence-btn-soft h-7 rounded-full px-2.5 text-[11px] text-slate-100"
            onClick={onOpenIntelligence}
          >
            Menux Intelligence
          </Button>
        </div>
      </div>

      {isDetailsOpen ? (
        <div className="mt-2 rounded-[12px] border border-zinc-200 bg-zinc-50/75 p-2.5">
          <div className="grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
            <div>
              <p className="text-zinc-500">Base</p>
              <p className="font-medium text-zinc-800">{formatCurrency(commission.baseValue)}</p>
            </div>
            <div>
              <p className="text-zinc-500">Percentual</p>
              <p className="font-medium text-zinc-800">{commission.percentage}%</p>
            </div>
            <div>
              <p className="text-zinc-500">Fechamento</p>
              <p className="font-medium text-zinc-800">{formatDate(commission.closeDate)}</p>
            </div>
            <div>
              <p className="text-zinc-500">Etapa</p>
              <p className="truncate font-medium text-zinc-800">{commission.stage}</p>
            </div>
          </div>
          {commission.contestationReason ? (
            <p className="mt-2 rounded-[10px] border border-red-100 bg-red-50 px-2 py-1.5 text-xs text-red-700">
              {commission.contestationReason}
            </p>
          ) : null}
          <div className="mt-2 flex items-center justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 rounded-full px-2.5 text-[11px] text-zinc-600 hover:text-zinc-900"
              onClick={onViewOpportunity}
            >
              Abrir oportunidade
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      ) : null}

      {isContestPending ? (
        <div className="mt-2 rounded-[12px] border border-red-200 bg-red-50/80 p-3">
          <p className="font-heading text-sm font-semibold text-red-900">
            Contestar comissão
          </p>
          <p className="mt-0.5 text-xs text-red-700">
            O valor ou os dados de &ldquo;{commission.opportunityTitle}&rdquo; divergem do acordado? Detalhe o motivo abaixo para análise do backoffice.
          </p>
          <textarea
            className="mt-3 min-h-[64px] w-full resize-none rounded-[10px] border border-red-200 bg-white px-2.5 py-2 text-xs text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-red-400"
            placeholder="Ex: O valor base faturado foi de R$ 10.000,00, não R$ 8.000,00."
            value={contestReason}
            onChange={(e) => onContestReasonChange(e.target.value)}
          />
          <div className="mt-3 flex items-center justify-end gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 rounded-[8px] px-3 text-xs text-zinc-600 hover:bg-red-100"
              onClick={onCancelContest}
            >
              Cancelar
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-[8px] border-red-200 bg-white px-3 text-xs font-semibold text-red-700 shadow-sm hover:bg-red-50"
              onClick={onConfirmContest}
            >
              Enviar para análise
            </Button>
          </div>
        </div>
      ) : null}

      {inlineFeedback ? (
        <InlineFeedback
          type={inlineFeedback.type}
          message={inlineFeedback.message}
          compact
          className="mt-2"
        />
      ) : null}
    </article>
  );
}

function FinanceIntelligenceRail({
  sellerName,
  periodLabel,
  confirmationDelta,
  projectedGap,
  projectedAgedCount,
  inconsistentCount,
  aboveAverageCount,
  runningAction,
  result,
  onRunAction,
  applyProjectedFilter,
  applyConfirmedFilter,
  applyPaidFilter,
  applyHighValueFilter,
  onGenerateSummary,
  onClose,
}: {
  sellerName: string;
  periodLabel: string;
  confirmationDelta: number;
  projectedGap: number;
  projectedAgedCount: number;
  inconsistentCount: number;
  aboveAverageCount: number;
  runningAction: string | null;
  result: string | null;
  onRunAction: (actionId: string, resultMessage: string, callback?: () => void) => void;
  applyProjectedFilter: () => void;
  applyConfirmedFilter: () => void;
  applyPaidFilter: () => void;
  applyHighValueFilter: () => void;
  onGenerateSummary: () => string;
  onClose?: () => void;
}) {
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const handleCopyGeneratedSummary = useCallback(async () => {
    if (!generatedSummary || typeof navigator === "undefined" || !navigator.clipboard) {
      setCopyFeedback("Copiar indisponível no momento");
      window.setTimeout(() => setCopyFeedback(null), 1200);
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedSummary);
      setCopyFeedback("Copiado");
    } catch {
      setCopyFeedback("Falha ao copiar");
    }
    window.setTimeout(() => setCopyFeedback(null), 1200);
  }, [generatedSummary]);

  return (
    <div className="menux-intelligence-theme flex h-full min-h-0 flex-col overflow-hidden rounded-[20px] border border-slate-700/70 bg-[linear-gradient(145deg,#020817_0%,#03132b_56%,#0a2340_100%)] text-slate-100 shadow-[0_34px_52px_-36px_rgba(15,23,42,0.92)]">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold">Menux Intelligence</h3>
            <p className="mt-0.5 text-xs text-cyan-100/80">Online · {periodLabel}</p>
          </div>
          {onClose ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
              onClick={onClose}
              aria-label="Fechar Intelligence"
            >
              <X className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <Button
          className="mt-3 h-8 w-full rounded-full border border-white/15 bg-white/10 text-xs text-slate-100 hover:bg-white/15"
          onClick={() =>
            onRunAction("plan", "Análise de regras aplicada. Revise as anomalias detectadas no painel.")
          }
          disabled={runningAction === "plan"}
        >
          {runningAction === "plan" ? (
            <span className="mr-2 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
          ) : (
            <Bot className="mr-1.5 h-3.5 w-3.5" />
          )}
          Rodar diagnóstico do período
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Diagnóstico do período
          </p>
          <div className="mt-2 space-y-2 text-xs text-slate-200">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Central financeira de</p>
              <p className="mt-1 font-medium text-slate-50">{sellerName}</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Meu maior gap projetado vs pago</p>
              <p className="mt-1 font-medium text-slate-50">{formatCurrency(projectedGap)}</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Minha taxa de pagamento vs mês anterior</p>
              <p className="mt-1 font-medium text-slate-50">
                {confirmationDelta === 0
                  ? "Estável"
                  : confirmationDelta > 0
                    ? `+${confirmationDelta}pp`
                    : `${confirmationDelta}pp`}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Anomalias e alertas
          </p>
          <div className="mt-2 space-y-2">
            <IntelligenceAction
              label={`${projectedAgedCount} projetadas sem confirmação >7 dias`}
              actionLabel="Filtrar projetadas"
              onClick={() =>
                onRunAction("aged", "Filtro aplicado: projetadas em atraso.", applyProjectedFilter)
              }
              loading={runningAction === "aged"}
            />
            <IntelligenceAction
              label={`${aboveAverageCount} valores acima da minha média`}
              actionLabel="Filtrar altos valores"
              onClick={() =>
                onRunAction(
                  "high-value",
                  "Filtro aplicado: valores acima da média.",
                  applyHighValueFilter
                )
              }
              loading={runningAction === "high-value"}
            />
            <IntelligenceAction
              label={`${inconsistentCount} itens com status inconsistente`}
              actionLabel="Filtrar pagas"
              onClick={() =>
                onRunAction(
                  "inconsistent",
                  "Filtro aplicado: itens para revisão.",
                  applyPaidFilter
                )
              }
              loading={runningAction === "inconsistent"}
            />
          </div>
        </section>

        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Recomendações acionáveis
          </p>
          <div className="mt-2 space-y-2">
            <IntelligenceQuickAction
              label="Destacar itens pendentes para cobrança"
              onClick={() =>
                onRunAction("confirm", "Filtro aplicado: projetadas pendentes para sua cobrança local.", applyProjectedFilter)
              }
              loading={runningAction === "confirm"}
            />
            <IntelligenceQuickAction
              label="Priorizar pagamentos do período"
              onClick={() => onRunAction("paid", "Filtro aplicado: comissões pagas.", applyPaidFilter)}
              loading={runningAction === "paid"}
            />
            <IntelligenceQuickAction
              label="Gerar resumo contábil para o financeiro"
              onClick={() =>
                onRunAction("summary", "Resumo estruturado gerado e pronto para cópia.", () => {
                  setGeneratedSummary(onGenerateSummary());
                })
              }
              loading={runningAction === "summary"}
            />
          </div>
        </section>

        {generatedSummary ? (
          <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
                Resumo pronto para envio
              </p>
              <Button
                size="sm"
                variant="outline"
                className="h-7 rounded-full border-white/20 bg-white/5 px-2.5 text-[11px] text-slate-100 hover:bg-white/10"
                onClick={() => void handleCopyGeneratedSummary()}
              >
                <Copy className="mr-1 h-3.5 w-3.5" />
                Copiar
              </Button>
            </div>
            <textarea
              readOnly
              value={generatedSummary}
              className="mt-2 h-28 w-full resize-none rounded-[10px] border border-white/10 bg-slate-950/35 p-2 text-xs text-slate-100 outline-none"
            />
            {copyFeedback ? (
              <span className="mt-2 inline-flex rounded-full bg-cyan-500/15 px-2 py-0.5 text-[11px] text-cyan-100">
                {copyFeedback}
              </span>
            ) : null}
          </section>
        ) : null}

        {result ? (
          <div className="rounded-[12px] border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
            {result}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function IntelligenceAction({
  label,
  actionLabel,
  onClick,
  loading,
}: {
  label: string;
  actionLabel: string;
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
      <p className="text-xs text-slate-200">{label}</p>
      <Button
        size="sm"
        variant="outline"
        className="mt-2 h-7 rounded-full border-white/20 bg-white/5 px-2.5 text-[11px] text-slate-100 hover:bg-white/10"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <span className="mr-1 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
        ) : null}
        {actionLabel}
      </Button>
    </div>
  );
}

function IntelligenceQuickAction({
  label,
  onClick,
  loading,
}: {
  label: string;
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex w-full items-center justify-between rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-100 transition-colors duration-120 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span>{label}</span>
      {loading ? (
        <span className="h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
      ) : (
        <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
      )}
    </button>
  );
}

function SectionError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-[14px] border border-red-200 bg-red-50/85 p-3 text-sm text-red-700">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span>{message}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 rounded-full border-red-200 bg-white text-red-700 hover:bg-red-50"
          onClick={onRetry}
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}

function FinanceEmptyState({
  periodLabel,
  onChangePeriod,
}: {
  periodLabel: string;
  onChangePeriod: () => void;
}) {
  return (
    <div className="premium-panel flex min-h-[380px] flex-col items-center justify-center rounded-[22px] p-8 text-center">
      <p className="font-heading text-2xl font-semibold text-zinc-900">
        Sem comissões em {periodLabel}
      </p>
      <p className="mt-2 max-w-[420px] text-sm text-zinc-500">
        Você não possui comissões registradas neste período. Navegue para outro mês para visualizar seus dados financeiros.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Button
          className="rounded-full bg-black text-white hover:bg-zinc-800"
          onClick={onChangePeriod}
        >
          Ir para mês anterior
        </Button>
      </div>
    </div>
  );
}

function FinanceLoadingSkeleton() {
  return (
    <div className="flex h-[calc(100dvh-2rem)] min-h-0 w-full max-w-full flex-col gap-4">
      <div className="shrink-0 rounded-[20px] border border-zinc-200/80 bg-zinc-50/85 px-5 py-4">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-2 h-4 w-56" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Skeleton className="h-9 w-48 rounded-full" />
          <Skeleton className="h-9 w-28 rounded-full" />
          <Skeleton className="h-9 w-44 rounded-full" />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 gap-4">
        <div className="min-h-0 min-w-0 flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-[154px] rounded-[18px]" />
            ))}
          </div>
          <Skeleton className="h-[168px] rounded-[20px]" />
          <Skeleton className="h-[380px] rounded-[20px]" />
          <Skeleton className="h-[220px] rounded-[20px]" />
        </div>
        <div className="hidden w-[360px] xl:block">
          <Skeleton className="h-full rounded-[20px]" />
        </div>
      </div>
    </div>
  );
}
