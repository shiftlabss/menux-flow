"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  LayoutGrid,
  ShieldAlert,
  Sparkles,
  User,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ModuleCommandHeader,
  type ModuleCommandHeaderChip,
} from "@/components/shared/module-command-header";
import { cn } from "@/lib/cn";
import { useDashboardStore, type Period } from "@/stores/dashboard-store";
import { useAuthStore } from "@/stores/auth-store";
import { mockActivities, mockDashboardMetrics } from "@/lib/mock-data";
import { formatCurrencyCompact } from "@/components/dashboard/funnel-x-ray/funnel-utils";
import { usePathname, useRouter } from "next/navigation";

const periodLabels: Record<Period, string> = {
  today: "Hoje",
  "7d": "7 dias",
  "30d": "30 dias",
  quarter: "Trimestre",
};

type IndicatorTone = "danger" | "warning" | "info";
type IndicatorId = "overdue" | "sla" | "risk";

interface IndicatorChip {
  id: IndicatorId;
  value: string;
  label: string;
  icon: LucideIcon;
  tone: IndicatorTone;
}

function toPtBrCompactDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    timeZone: "America/Sao_Paulo",
  });
  const parts = formatter.formatToParts(date);
  const weekdayRaw = parts.find((part) => part.type === "weekday")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const monthRaw = parts.find((part) => part.type === "month")?.value ?? "";
  const weekday = weekdayRaw.replaceAll(".", "").trim();
  const month = monthRaw.replaceAll(".", "").trim();
  const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  return `${weekdayCapitalized}, ${day} ${month}`;
}

const REFERENCE_DATE = new Date("2026-02-16T12:00:00.000Z");

export function DashboardHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { period, context, setPeriod, setContext } = useDashboardStore();
  const { user, isLoading } = useAuthStore();
  const [retryingIndicators, setRetryingIndicators] = useState(false);

  const firstName = user?.name?.trim().split(" ")[0] ?? "Admin";

  const scopedActivities =
    context === "team"
      ? mockActivities
      : !user?.id
        ? []
        : mockActivities.filter((activity) => activity.responsibleId === user.id);

  const overdueCount = scopedActivities.filter(
    (activity) => activity.status === "overdue"
  ).length;

  const scopeFactor =
    scopedActivities.length > 0
      ? scopedActivities.length / Math.max(mockActivities.length, 1)
      : 0;

  const slaBreaches =
    context === "team"
      ? mockDashboardMetrics.slaBreaches
      : Math.round(mockDashboardMetrics.slaBreaches * scopeFactor);

  const riskValue =
    context === "team" ? 45_000 : Math.round(45_000 * scopeFactor);

  const hasIndicatorsError =
    !Number.isFinite(overdueCount) ||
    !Number.isFinite(slaBreaches) ||
    !Number.isFinite(riskValue);

  const indicators: IndicatorChip[] = [
    overdueCount > 0
      ? {
          id: "overdue",
          value: `${overdueCount}`,
          label: "atrasadas",
          icon: AlertTriangle,
          tone: "danger",
        }
      : null,
    slaBreaches > 0
      ? {
          id: "sla",
          value: `${slaBreaches}`,
          label: "SLAs estourados",
          icon: ShieldAlert,
          tone: "warning",
        }
      : null,
    riskValue > 0
      ? {
          id: "risk",
          value: formatCurrencyCompact(riskValue),
          label: "valor em risco",
          icon: Wallet,
          tone: "info",
        }
      : null,
  ].filter((chip): chip is IndicatorChip => Boolean(chip)).slice(0, 3);

  const compactDateText = `${toPtBrCompactDate(REFERENCE_DATE)} · Olá, ${firstName}`;

  const handleIntelligenceOpen = () => {
    router.push("/intelligence");
  };

  const handleIndicatorClick = (id: IndicatorId) => {
    if (id === "overdue") {
      router.push("/activities?status=overdue");
      return;
    }

    const targetId = id === "sla" ? "dashboard-execution" : "dashboard-funnel";
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (pathname !== "/dashboard") {
      router.push(`/dashboard#${targetId}`);
    }
  };

  const handleRetryIndicators = () => {
    setRetryingIndicators(true);
    router.refresh();
    window.setTimeout(() => setRetryingIndicators(false), 220);
  };

  const indicatorChips: ModuleCommandHeaderChip[] = hasIndicatorsError
    ? []
    : indicators.map((chip) => {
        const Icon = chip.icon;
        return {
          id: chip.id,
          label: `${chip.value} ${chip.label}`,
          icon: <Icon className="h-3.5 w-3.5" />,
          tone:
            chip.tone === "danger"
              ? "danger"
              : chip.tone === "warning"
                ? "warning"
                : "info",
          onClick: () => handleIndicatorClick(chip.id),
        };
      });

  const fallbackChip: ModuleCommandHeaderChip = {
    id: "dashboard-empty",
    label: "Sem dados do dia · Ver pipeline",
    icon: <LayoutGrid className="h-3.5 w-3.5 text-zinc-500" />,
    onClick: () => router.push("/pipes"),
    tone: "neutral",
  };

  const actions = (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-end gap-2",
        isLoading && "pointer-events-none opacity-60"
      )}
    >
      <div className="flex items-center rounded-full border border-zinc-200/90 bg-zinc-50/95 p-1">
        {[
          {
            id: "me" as const,
            label: "Meus",
            icon: <User className="h-3.5 w-3.5" />,
          },
          {
            id: "team" as const,
            label: "Time",
            icon: <Users className="h-3.5 w-3.5" />,
          },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setContext(item.id)}
            className={cn(
              "relative inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm font-medium",
              "transition-colors duration-120 ease-out",
              context === item.id
                ? "bg-white text-brand-strong shadow-[0_8px_16px_-14px_rgba(15,23,42,0.45)]"
                : "text-zinc-500 hover:text-zinc-900"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="premium-shine h-8 gap-1.5 rounded-full border-zinc-200 bg-white/90 px-3 text-sm font-medium hover:bg-zinc-100/80 active:scale-[0.99]"
          >
            <LayoutGrid className="h-3.5 w-3.5 text-zinc-500" />
            {periodLabels[period]}
            <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40 rounded-xl">
          {(Object.keys(periodLabels) as Period[]).map((value) => (
            <DropdownMenuItem
              key={value}
              onClick={() => setPeriod(value)}
              className="gap-2"
            >
              {period === value ? (
                <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              ) : null}
              <span className={period === value ? "font-medium" : ""}>
                {periodLabels[value]}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        onClick={handleIntelligenceOpen}
        className={cn(
          "menux-intelligence-btn premium-shine h-8 gap-1.5 rounded-full px-3.5 text-sm",
          "transition-transform duration-120 ease-out hover:-translate-y-px active:scale-[0.99]"
        )}
      >
        <Sparkles className="h-3.5 w-3.5 text-cyan-100" />
        Menux Intelligence
      </Button>
    </div>
  );

  return (
    <ModuleCommandHeader
      title="Dashboard"
      description="Raio X do comercial"
      sticky
      actions={actions}
      meta={
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {compactDateText}
        </span>
      }
      chips={indicatorChips}
      fallbackChip={fallbackChip}
      className="premium-panel"
    >
      {isLoading ? (
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-8 w-[110px] rounded-full" />
          <Skeleton className="h-8 w-[128px] rounded-full" />
          <Skeleton className="h-8 w-[142px] rounded-full" />
        </div>
      ) : null}

      {hasIndicatorsError ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3 py-1.5 text-xs text-red-700">
          <AlertTriangle className="h-3.5 w-3.5" />
          Falha ao carregar indicadores.
          <button
            type="button"
            onClick={handleRetryIndicators}
            className="font-semibold underline underline-offset-4"
          >
            {retryingIndicators ? "Tentando..." : "Tentar novamente"}
          </button>
        </div>
      ) : null}
    </ModuleCommandHeader>
  );
}
