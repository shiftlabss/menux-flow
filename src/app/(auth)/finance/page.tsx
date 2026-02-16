"use client";

import {
  Fragment,
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
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Copy,
  Download,
  FileDown,
  FileSpreadsheet,
  FileText,
  Filter,
  ListChecks,
  MoreHorizontal,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { exportToCSV, exportToExcel, exportToPDF } from "@/lib/export";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  highValueOnly: boolean;
  projectedAgingOnly: boolean;
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
  const router = useRouter();
  const tableRef = useRef<HTMLDivElement>(null);
  const railAutoOpenedRef = useRef(false);

  const [isLoading, setIsLoading] = useState(true);
  const [commissions, setCommissions] = useState<FinanceCommission[]>(commissionsSeed);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [sellerFilter, setSellerFilter] = useState("all");
  const [statusScope, setStatusScope] = useState<StatusScope>("all");
  const [extraFilters, setExtraFilters] = useState<ExtraFilters>({
    contestedOnly: false,
    highValueOnly: false,
    projectedAgingOnly: false,
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);
  const [rowFeedback, setRowFeedback] = useState<Record<string, FeedbackState>>({});
  const [calcOpenRowId, setCalcOpenRowId] = useState<string | null>(null);
  const [pageFeedback, setPageFeedback] = useState<FeedbackState | null>(null);
  const [intelRunningAction, setIntelRunningAction] = useState<string | null>(null);
  const [intelResult, setIntelResult] = useState<string | null>(null);
  const [kpiError, setKpiError] = useState(false);
  const [tableError, setTableError] = useState(false);
  const [sellerSummaryError, setSellerSummaryError] = useState(false);

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

  const sellers = useMemo(
    () =>
      Array.from(
        new Set(commissions.map((commission) => commission.sellerName))
      ).sort((a, b) => a.localeCompare(b, "pt-BR")),
    [commissions]
  );

  const periodCommissions = useMemo(
    () =>
      commissions.filter((commission) => {
        const matchesPeriod = commission.competenceMonth === periodKey;
        const matchesSeller =
          sellerFilter === "all" || commission.sellerName === sellerFilter;
        return matchesPeriod && matchesSeller;
      }),
    [commissions, periodKey, sellerFilter]
  );

  const filteredCommissions = useMemo(() => {
    return periodCommissions
      .filter((commission) => {
        if (!matchesStatusScope(commission.status, statusScope)) return false;
        if (extraFilters.contestedOnly && commission.status !== "contested") return false;
        if (extraFilters.highValueOnly && commission.value < 3000) return false;
        if (
          extraFilters.projectedAgingOnly &&
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

  const sellerSummary = useMemo(() => {
    const sellerMap = new Map<
      string,
      { projected: number; confirmed: number; paid: number; count: number }
    >();

    for (const commission of periodCommissions) {
      const existing = sellerMap.get(commission.sellerName) ?? {
        projected: 0,
        confirmed: 0,
        paid: 0,
        count: 0,
      };

      existing.count += 1;
      if (commission.status === "projected") existing.projected += commission.value;
      if (commission.status === "paid") existing.paid += commission.value;
      if (commission.status === "confirmed" || commission.status === "contested") {
        existing.confirmed += commission.value;
      }

      sellerMap.set(commission.sellerName, existing);
    }

    return Array.from(sellerMap.entries())
      .map(([seller, values]) => ({ seller, ...values }))
      .sort(
        (a, b) =>
          b.projected + b.confirmed + b.paid - (a.projected + a.confirmed + a.paid)
      );
  }, [periodCommissions]);

  const topSeller = sellerSummary[0] ?? null;

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
    const valuesBySeller = new Map<string, number[]>();

    for (const commission of periodCommissions) {
      if (!valuesBySeller.has(commission.sellerName)) {
        valuesBySeller.set(commission.sellerName, []);
      }
      valuesBySeller.get(commission.sellerName)!.push(commission.value);
    }

    let count = 0;
    for (const [seller, values] of valuesBySeller.entries()) {
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      count += periodCommissions.filter(
        (commission) =>
          commission.sellerName === seller && commission.value > average * 1.5
      ).length;
    }
    return count;
  }, [periodCommissions]);

  const filterCount = useMemo(
    () =>
      (extraFilters.contestedOnly ? 1 : 0) +
      (extraFilters.highValueOnly ? 1 : 0) +
      (extraFilters.projectedAgingOnly ? 1 : 0),
    [extraFilters]
  );

  const activeChips = useMemo(() => {
    const chips: Array<{ id: string; label: string; onClear?: () => void }> = [];

    if (sellerFilter !== "all") {
      chips.push({
        id: "seller",
        label: `Vendedor: ${sellerFilter}`,
        onClear: () => setSellerFilter("all"),
      });
    }

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

    if (extraFilters.highValueOnly) {
      chips.push({
        id: "high-value",
        label: "Valor > R$ 3.000",
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, highValueOnly: false })),
      });
    }

    if (extraFilters.projectedAgingOnly) {
      chips.push({
        id: "aging",
        label: "Projetadas sem confirmar >7d",
        onClear: () =>
          setExtraFilters((prev) => ({ ...prev, projectedAgingOnly: false })),
      });
    }

    return chips;
  }, [sellerFilter, statusScope, extraFilters]);

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
      const summaryText = `Oportunidade: ${commission.opportunityTitle}\nVendedor: ${
        commission.sellerName
      }\nComissão: ${formatCurrency(commission.value)} (${
        commission.percentage
      }%)\nStatus: ${
        statusConfig[commission.status].label
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

  const handleMarkContested = useCallback(
    (commission: FinanceCommission) => {
      if (commission.status !== "confirmed") {
        setRowInlineFeedback(
          commission.id,
          "error",
          "Somente confirmadas podem ser contestadas"
        );
        return;
      }

      setCommissions((prev) =>
        prev.map((current) =>
          current.id === commission.id
            ? {
                ...current,
                status: "contested",
                contestationReason:
                  "Contestação registrada para revisão financeira interna.",
              }
            : current
        )
      );
      setRowInlineFeedback(commission.id, "success", "Contestação registrada");
    },
    [setRowInlineFeedback]
  );

  const handleExport = useCallback(
    (format: "csv" | "pdf" | "excel") => {
      const data = filteredCommissions.map((commission) => ({
        Oportunidade: commission.opportunityTitle,
        Vendedor: commission.sellerName,
        Percentual: `${commission.percentage}%`,
        Valor: commission.value,
        Competencia: formatMonthLabel(commission.competenceMonth),
        Status: statusConfig[commission.status].label,
      }));
      const fileName = `financeiro-${periodKey}`;

      if (format === "csv") exportToCSV(data, fileName);
      if (format === "pdf") exportToPDF(data, fileName, "Resumo financeiro");
      if (format === "excel") exportToExcel(data, fileName);

      setPageFeedback({
        type: "success",
        message: `Exportação ${format.toUpperCase()} iniciada.`,
      });
    },
    [filteredCommissions, periodKey]
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
    setSellerFilter("all");
    setStatusScope("all");
    setExtraFilters({
      contestedOnly: false,
      highValueOnly: false,
      projectedAgingOnly: false,
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
            description="Comissões e receitas do time"
            actions={
              <div className="flex w-full min-w-0 flex-wrap items-center gap-2 xl:justify-end">
                <Select value={sellerFilter} onValueChange={setSellerFilter}>
                  <SelectTrigger className="h-9 min-w-[180px] rounded-full border-zinc-200 bg-white/90 text-sm">
                    <SelectValue placeholder="Vendedor" />
                  </SelectTrigger>
                  <SelectContent align="end" className="rounded-[14px]">
                    <SelectItem value="all">Todos os vendedores</SelectItem>
                    {sellers.map((seller) => (
                      <SelectItem key={seller} value={seller}>
                        {seller}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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

                <Button
                  size="sm"
                  onClick={() => setIsIntelligenceOpen((prev) => !prev)}
                  className="menux-intelligence-btn premium-shine h-9 rounded-full px-3.5 text-sm transition-transform duration-120 ease-out hover:-translate-y-px active:scale-[0.99]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-cyan-100" />
                  Menux Intelligence
                </Button>
              </div>
            }
          >
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
                    className="w-[min(92vw,360px)] rounded-[16px] border-zinc-200 bg-white p-3"
                  >
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
                        Filtros de comissões
                      </p>

                      <FilterOptionButton
                        active={extraFilters.contestedOnly}
                        label="Somente contestadas"
                        tone="danger"
                        onClick={() =>
                          setExtraFilters((prev) => ({
                            ...prev,
                            contestedOnly: !prev.contestedOnly,
                          }))
                        }
                      />
                      <FilterOptionButton
                        active={extraFilters.highValueOnly}
                        label="Valor acima de R$ 3.000"
                        tone="info"
                        onClick={() =>
                          setExtraFilters((prev) => ({
                            ...prev,
                            highValueOnly: !prev.highValueOnly,
                          }))
                        }
                      />
                      <FilterOptionButton
                        active={extraFilters.projectedAgingOnly}
                        label="Projetadas sem confirmação >7 dias"
                        tone="warning"
                        onClick={() =>
                          setExtraFilters((prev) => ({
                            ...prev,
                            projectedAgingOnly: !prev.projectedAgingOnly,
                          }))
                        }
                      />

                      <div className="flex items-center justify-between border-t border-zinc-200 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                          onClick={() =>
                            setExtraFilters({
                              contestedOnly: false,
                              highValueOnly: false,
                              projectedAgingOnly: false,
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
                onClearFilters={clearAllFilters}
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
                        subtext="no período atual"
                        trend={`${summary.totalCount} comissões`}
                        miniVisual={
                          <div className="flex h-8 items-end gap-1">
                            {[0.4, 0.56, 0.52, 0.68, 0.61, 0.74].map((height, index) => (
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
                        subtext="total de comissões registradas"
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
                        subtext="pendências de contestação"
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
                        subtext="pago vs total"
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
                        Status Funnel
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Projetado, confirmado e pago sincronizados com a tabela.
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

                <section
                  ref={tableRef}
                  className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h3 className="font-heading text-base font-semibold text-zinc-900">
                        Comissões
                      </h3>
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

                    <div className="rounded-[14px] border border-zinc-200 bg-zinc-50/70 px-3 py-2">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-zinc-600">
                          <span className="font-semibold">Menux Intelligence:</span>{" "}
                          {projectedAgedCount > 0
                            ? `${projectedAgedCount} itens projetados sem confirmação há mais de 7 dias.`
                            : "Sem atrasos críticos de confirmação no período."}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 rounded-full px-2.5 text-[11px]"
                            onClick={() => setStatusScope("projected")}
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
                        message="Falha ao carregar comissões do período."
                        onRetry={() => setTableError(false)}
                      />
                    ) : !hasRows ? (
                      <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/70 p-6 text-center">
                        <p className="font-heading text-lg font-semibold text-zinc-900">
                          Sem comissões para este filtro
                        </p>
                        <p className="mt-1 text-sm text-zinc-500">
                          Ajuste status e filtros para visualizar dados.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-3 rounded-full"
                          onClick={() => {
                            setStatusScope("all");
                            setExtraFilters({
                              contestedOnly: false,
                              highValueOnly: false,
                              projectedAgingOnly: false,
                            });
                          }}
                        >
                          Limpar filtros
                        </Button>
                      </div>
                    ) : (
                      <div className="max-h-[420px] overflow-auto rounded-[14px] border border-zinc-200/80">
                        <table className="w-full border-collapse">
                          <thead className="sticky top-0 z-10 bg-zinc-50">
                            <tr className="border-b border-zinc-200">
                              <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Oportunidade
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Vendedor
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                %
                              </th>
                              <th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Valor
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Competência
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Status
                              </th>
                              <th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-[0.05em] text-zinc-500">
                                Ações
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredCommissions.map((commission) => {
                              const status = statusConfig[commission.status];
                              const inline = rowFeedback[commission.id];
                              const isCalcOpen = calcOpenRowId === commission.id;
                              return (
                                <Fragment key={commission.id}>
                                  <tr className="border-b border-zinc-100 transition-colors duration-120 hover:bg-zinc-50/80">
                                    <td className="px-3 py-2 text-sm font-medium text-zinc-900">
                                      {commission.opportunityTitle}
                                    </td>
                                    <td className="px-3 py-2 text-sm text-zinc-600">
                                      {commission.sellerName}
                                    </td>
                                    <td className="px-3 py-2 text-sm text-zinc-600">
                                      {commission.percentage}%
                                    </td>
                                    <td className="px-3 py-2 text-right text-sm font-semibold text-zinc-900">
                                      {formatCurrency(commission.value)}
                                    </td>
                                    <td className="px-3 py-2 text-sm text-zinc-600">
                                      {formatMonthLabel(commission.competenceMonth)}
                                    </td>
                                    <td className="px-3 py-2">
                                      <Badge
                                        className={cn(
                                          "rounded-full border px-2 py-0.5 text-[11px]",
                                          status.badgeClass
                                        )}
                                      >
                                        {status.label}
                                      </Badge>
                                    </td>
                                    <td className="px-3 py-2">
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <Button
                                              variant="ghost"
                                              size="icon"
                                              className="h-8 w-8 rounded-full text-zinc-500"
                                              aria-label="Ações da comissão"
                                            >
                                              <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end" className="w-52 rounded-[14px]">
                                            <DropdownMenuItem
                                              onClick={() =>
                                                router.push(`/pipes?opportunityId=${commission.opportunityId}`)
                                              }
                                            >
                                              <ArrowUpRight className="mr-2 h-4 w-4" />
                                              Ver oportunidade
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                              onClick={() =>
                                                setCalcOpenRowId((prev) =>
                                                  prev === commission.id ? null : commission.id
                                                )
                                              }
                                            >
                                              <Calculator className="mr-2 h-4 w-4" />
                                              Ver cálculo
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                              onClick={() => void handleCopySummary(commission)}
                                            >
                                              <Copy className="mr-2 h-4 w-4" />
                                              Copiar resumo
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                              disabled={commission.status !== "confirmed"}
                                              onClick={() => handleMarkContested(commission)}
                                              className={
                                                commission.status === "confirmed"
                                                  ? "text-red-700"
                                                  : ""
                                              }
                                            >
                                              <AlertTriangle className="mr-2 h-4 w-4" />
                                              Marcar contestação
                                            </DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                  </tr>

                                  {isCalcOpen || inline ? (
                                    <tr className="border-b border-zinc-100 bg-zinc-50/50">
                                      <td colSpan={7} className="px-3 py-2">
                                        {isCalcOpen ? (
                                          <div className="mb-2 rounded-[12px] border border-zinc-200 bg-white p-2.5 text-xs text-zinc-600">
                                            <div className="flex items-start justify-between gap-2">
                                              <div>
                                                <p className="font-medium text-zinc-700">
                                                  Cálculo da comissão
                                                </p>
                                                <p className="mt-1">
                                                  {formatCurrency(commission.baseValue)} ×{" "}
                                                  {commission.percentage}% ={" "}
                                                  <span className="font-semibold text-zinc-900">
                                                    {formatCurrency(commission.value)}
                                                  </span>
                                                </p>
                                                <p className="mt-1 text-zinc-500">
                                                  Etapa: {commission.stage} · Fechamento:{" "}
                                                  {formatDate(commission.closeDate)}
                                                  {commission.paidAt
                                                    ? ` · Pago em ${formatDate(commission.paidAt)}`
                                                    : ""}
                                                </p>
                                                {commission.contestationReason ? (
                                                  <p className="mt-1 text-red-700">
                                                    {commission.contestationReason}
                                                  </p>
                                                ) : null}
                                              </div>
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 rounded-full px-2 text-[11px]"
                                                onClick={() => setCalcOpenRowId(null)}
                                              >
                                                Fechar
                                              </Button>
                                            </div>
                                          </div>
                                        ) : null}
                                        {inline ? (
                                          <span
                                            className={cn(
                                              "inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
                                              inline.type === "success" &&
                                                "bg-emerald-100 text-emerald-700",
                                              inline.type === "error" &&
                                                "bg-red-100 text-red-700",
                                              inline.type === "info" &&
                                                "bg-blue-100 text-blue-700"
                                            )}
                                          >
                                            {inline.message}
                                          </span>
                                        ) : null}
                                      </td>
                                    </tr>
                                  ) : null}
                                </Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </section>

                <section className="rounded-[20px] border border-zinc-200/80 bg-white/82 p-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.45)] md:p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-zinc-500" />
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      Resumo por vendedor
                    </h3>
                  </div>

                  {sellerSummaryError ? (
                    <SectionError
                      message="Falha ao carregar resumo por vendedor."
                      onRetry={() => setSellerSummaryError(false)}
                    />
                  ) : sellerSummary.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {sellerSummary.map((seller) => (
                        <button
                          key={seller.seller}
                          type="button"
                          onClick={() => {
                            setSellerFilter(seller.seller);
                            tableRef.current?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }}
                          className="premium-lift rounded-[14px] border border-zinc-200/85 bg-white p-3 text-left shadow-[0_10px_18px_-16px_rgba(15,23,42,0.4)]"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Avatar size="sm">
                                <AvatarFallback className="bg-zinc-100 text-zinc-600">
                                  {getInitials(seller.seller)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-semibold text-zinc-900">{seller.seller}</p>
                                <p className="text-xs text-zinc-500">{seller.count} comissões</p>
                              </div>
                            </div>
                            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600">
                              Ver detalhes
                            </span>
                          </div>
                          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                            <div className="rounded-[10px] border border-blue-200/70 bg-blue-50 px-2 py-1.5">
                              <p className="text-blue-700">Projetado</p>
                              <p className="mt-0.5 font-semibold text-zinc-900">
                                {formatCurrency(seller.projected)}
                              </p>
                            </div>
                            <div className="rounded-[10px] border border-amber-200/70 bg-amber-50 px-2 py-1.5">
                              <p className="text-amber-700">Confirmado</p>
                              <p className="mt-0.5 font-semibold text-zinc-900">
                                {formatCurrency(seller.confirmed)}
                              </p>
                            </div>
                            <div className="rounded-[10px] border border-emerald-200/70 bg-emerald-50 px-2 py-1.5">
                              <p className="text-emerald-700">Pago</p>
                              <p className="mt-0.5 font-semibold text-zinc-900">
                                {formatCurrency(seller.paid)}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-[14px] border border-dashed border-zinc-200 bg-zinc-50/70 p-4 text-sm text-zinc-500">
                      Sem dados de vendedor para este período.
                    </div>
                  )}
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
              periodLabel={periodLabel}
              topSeller={topSeller}
              projectedGap={summary.projected - summary.paid}
              projectedAgedCount={projectedAgedCount}
              inconsistentCount={inconsistentCount}
              aboveAverageCount={aboveAverageCount}
              runningAction={intelRunningAction}
              result={intelResult}
              onClose={() => setIsIntelligenceOpen(false)}
              onRunAction={runIntelligenceAction}
              applyProjectedFilter={() => setStatusScope("projected")}
              applyConfirmedFilter={() => setStatusScope("confirmed")}
              applyPaidFilter={() => setStatusScope("paid")}
              applyHighValueFilter={() =>
                setExtraFilters((prev) => ({ ...prev, highValueOnly: true }))
              }
              onGenerateSummary={() =>
                setPageFeedback({
                  type: "success",
                  message: "Resumo executivo financeiro gerado.",
                })
              }
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
              <FinanceIntelligenceRail
                periodLabel={periodLabel}
                topSeller={topSeller}
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
                  setIsIntelligenceOpen(false);
                }}
                applyConfirmedFilter={() => {
                  setStatusScope("confirmed");
                  setIsIntelligenceOpen(false);
                }}
                applyPaidFilter={() => {
                  setStatusScope("paid");
                  setIsIntelligenceOpen(false);
                }}
                applyHighValueFilter={() => {
                  setExtraFilters((prev) => ({ ...prev, highValueOnly: true }));
                  setIsIntelligenceOpen(false);
                }}
                onGenerateSummary={() => {
                  setPageFeedback({
                    type: "success",
                    message: "Resumo executivo financeiro gerado.",
                  });
                  setIsIntelligenceOpen(false);
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

function FinanceIntelligenceRail({
  periodLabel,
  topSeller,
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
  periodLabel: string;
  topSeller:
    | {
        seller: string;
        projected: number;
        confirmed: number;
        paid: number;
        count: number;
      }
    | null;
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
  onGenerateSummary: () => void;
  onClose?: () => void;
}) {
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
            onRunAction("plan", "Plano de follow-up financeiro gerado.", applyConfirmedFilter)
          }
          disabled={runningAction === "plan"}
        >
          {runningAction === "plan" ? (
            <span className="mr-2 h-3 w-3 animate-spin rounded-full border border-cyan-100 border-t-transparent" />
          ) : (
            <Bot className="mr-1.5 h-3.5 w-3.5" />
          )}
          Gerar plano do período
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <section className="rounded-[14px] border border-white/10 bg-white/5 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">
            Diagnóstico do período
          </p>
          <div className="mt-2 space-y-2 text-xs text-slate-200">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Maior vendedor do mês</p>
              <p className="mt-1 font-medium text-slate-50">
                {topSeller ? topSeller.seller : "Sem dados no período"}
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Maior gap projetado vs pago</p>
              <p className="mt-1 font-medium text-slate-50">{formatCurrency(projectedGap)}</p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-2.5">
              <p className="text-slate-300">Comissões em risco</p>
              <p className="mt-1 font-medium text-slate-50">
                {projectedAgedCount} itens projetados antigos
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
              label={`${aboveAverageCount} valores acima da média por vendedor`}
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
              actionLabel="Filtrar confirmadas"
              onClick={() =>
                onRunAction(
                  "inconsistent",
                  "Filtro aplicado: itens para revisão.",
                  applyConfirmedFilter
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
              label="Cobrar confirmação de itens pendentes"
              onClick={() =>
                onRunAction("confirm", "Checklist de cobrança gerado.", applyConfirmedFilter)
              }
              loading={runningAction === "confirm"}
            />
            <IntelligenceQuickAction
              label="Priorizar pagamentos do período"
              onClick={() => onRunAction("paid", "Filtro aplicado: comissões pagas.", applyPaidFilter)}
              loading={runningAction === "paid"}
            />
            <IntelligenceQuickAction
              label="Gerar resumo para financeiro"
              onClick={() => onRunAction("summary", "Resumo executivo gerado.", onGenerateSummary)}
              loading={runningAction === "summary"}
            />
          </div>
        </section>

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
  onClearFilters,
  onChangePeriod,
}: {
  periodLabel: string;
  onClearFilters: () => void;
  onChangePeriod: () => void;
}) {
  return (
    <div className="premium-panel flex min-h-[380px] flex-col items-center justify-center rounded-[22px] p-8 text-center">
      <p className="font-heading text-2xl font-semibold text-zinc-900">
        Sem comissões em {periodLabel}
      </p>
      <p className="mt-2 max-w-[420px] text-sm text-zinc-500">
        Troque o período ou remova filtros para visualizar os dados financeiros.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Button variant="outline" className="rounded-full" onClick={onClearFilters}>
          Limpar filtros
        </Button>
        <Button
          className="rounded-full bg-black text-white hover:bg-zinc-800"
          onClick={onChangePeriod}
        >
          Mudar período
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
