"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  LayoutGrid,
  ShieldAlert,
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
import { useDashboardStore, type Period, type Context } from "@/stores/dashboard-store";
import { useAuthStore } from "@/stores/auth-store";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { usePathname, useRouter } from "next/navigation";

const periodLabels: Record<Period, string> = {
  today: "Hoje",
  "7d": "7 dias",
  "30d": "30 dias",
  quarter: "Trimestre",
};

const contextLabels: Record<Context, { label: string; icon: typeof User }> = {
  me: { label: "Eu", icon: User },
  team: { label: "Time", icon: Users },
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

export function DashboardHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { period, setPeriod, context, setContext } = useDashboardStore();
  const { user, isLoading } = useAuthStore();
  const [retryingIndicators, setRetryingIndicators] = useState(false);

  const {
    filteredActivities,
    openOpportunities,
    now,
  } = useDashboardFilters();

  const firstName = user?.name?.trim().split(" ")[0] ?? "Admin";
  const userRole = user?.role ?? "comercial";
  const isBroadRole = userRole === "master" || userRole === "admin";

  // ── Compute indicators from real store data ─────────────────────
  const overdueCount = filteredActivities.filter(
    (a) => a.effectiveStatus === "overdue"
  ).length;

  const slaBreachedOpps = openOpportunities.filter(
    (o) => o.slaDeadline && new Date(o.slaDeadline) < now
  );
  const slaBreaches = slaBreachedOpps.length;
  const riskValue = slaBreachedOpps.reduce((sum, o) => sum + (o.value || 0), 0);

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
          value: formatCurrencyBRL(riskValue),
          label: "valor em risco",
          icon: Wallet,
          tone: "info",
        }
      : null,
  ].filter((chip): chip is IndicatorChip => Boolean(chip)).slice(0, 3);

  const compactDateText = `${toPtBrCompactDate(now)} · Olá, ${firstName}`;

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

  const ContextIcon = contextLabels[context].icon;

  const actions = (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-end gap-2",
        isLoading && "pointer-events-none opacity-60"
      )}
    >
      {/* Context toggle (Eu / Time) */}
      {isBroadRole && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="premium-shine h-8 gap-1.5 rounded-full border-zinc-200 bg-white/90 px-3 text-sm font-medium hover:bg-zinc-100/80 active:scale-[0.99]"
            >
              <ContextIcon className="h-3.5 w-3.5 text-zinc-500" />
              {contextLabels[context].label}
              <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36 rounded-xl">
            {(Object.keys(contextLabels) as Context[]).map((value) => {
              const Ic = contextLabels[value].icon;
              return (
                <DropdownMenuItem
                  key={value}
                  onClick={() => setContext(value)}
                  className="gap-2"
                >
                  {context === value ? (
                    <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                  ) : (
                    <Ic className="h-3.5 w-3.5 text-zinc-400" />
                  )}
                  <span className={context === value ? "font-medium" : ""}>
                    {contextLabels[value].label}
                  </span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Period selector */}
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
