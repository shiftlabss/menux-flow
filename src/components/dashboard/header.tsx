"use strict";

import { useEffect, useMemo, useState } from "react";
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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
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
  const { period, context, setPeriod, setContext } = useDashboardStore();
  const { user, isLoading } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorsRefreshKey, setIndicatorsRefreshKey] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!(scrollContainer instanceof HTMLElement)) return;

    const onScroll = () => setIsScrolled(scrollContainer.scrollTop > 8);
    onScroll();
    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  const firstName = useMemo(
    () => user?.name?.trim().split(" ")[0] ?? "Admin",
    [user?.name]
  );

  const scopedActivities = useMemo(() => {
    if (context === "team") return mockActivities;
    if (!user?.id) return [];
    return mockActivities.filter((activity) => activity.responsibleId === user.id);
  }, [context, user?.id]);

  const overdueCount = useMemo(
    () =>
      scopedActivities.filter((activity) => activity.status === "overdue").length,
    [scopedActivities, indicatorsRefreshKey]
  );

  const slaBreaches = useMemo(() => {
    if (context === "team") return mockDashboardMetrics.slaBreaches;
    const scopeFactor =
      scopedActivities.length > 0
        ? scopedActivities.length / Math.max(mockActivities.length, 1)
        : 0;
    return Math.round(mockDashboardMetrics.slaBreaches * scopeFactor);
  }, [context, scopedActivities.length, indicatorsRefreshKey]);

  const riskValue = useMemo(() => {
    const baseRiskValue = 45_000;
    if (context === "team") return baseRiskValue;
    const scopeFactor =
      scopedActivities.length > 0
        ? scopedActivities.length / Math.max(mockActivities.length, 1)
        : 0;
    return Math.round(baseRiskValue * scopeFactor);
  }, [context, scopedActivities.length, indicatorsRefreshKey]);

  const hasIndicatorsError =
    !Number.isFinite(overdueCount) ||
    !Number.isFinite(slaBreaches) ||
    !Number.isFinite(riskValue);

  const indicators = useMemo<IndicatorChip[]>(() => {
    const chips: IndicatorChip[] = [];
    if (overdueCount > 0) {
      chips.push({
        id: "overdue",
        value: `${overdueCount}`,
        label: "atrasadas",
        icon: AlertTriangle,
        tone: "danger",
      });
    }
    if (slaBreaches > 0) {
      chips.push({
        id: "sla",
        value: `${slaBreaches}`,
        label: "SLAs estourados",
        icon: ShieldAlert,
        tone: "warning",
      });
    }
    if (riskValue > 0) {
      chips.push({
        id: "risk",
        value: formatCurrencyCompact(riskValue),
        label: "valor em risco",
        icon: Wallet,
        tone: "info",
      });
    }
    return chips.slice(0, 3);
  }, [overdueCount, slaBreaches, riskValue]);

  const compactDateText = useMemo(
    () => `${toPtBrCompactDate(new Date())} · Olá, ${firstName}`,
    [firstName]
  );

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
    setIndicatorsRefreshKey((prev) => prev + 1);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
      className={cn(
        "sticky top-[84px] z-30 rounded-[20px] border border-zinc-200/85 bg-zinc-50/95 backdrop-blur-sm",
        "transition-[padding,box-shadow] duration-160 ease-out",
        isScrolled
          ? "px-4 py-3 shadow-[0_18px_28px_-18px_rgba(15,23,42,0.38)]"
          : "px-5 py-4 shadow-[0_11px_22px_-18px_rgba(15,23,42,0.3)]"
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <h1
              className={cn(
                "font-heading font-bold tracking-tight text-zinc-900 transition-all duration-160 ease-out",
                isScrolled
                  ? "text-[1.76rem] leading-[1.04]"
                  : "text-[1.94rem] leading-[1.04]"
              )}
            >
              Dashboard
            </h1>
            <p className="text-[12.5px] font-medium text-zinc-500/75">
              Raio X do comercial
            </p>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center justify-end gap-2 rounded-[16px] border border-zinc-200/85 bg-white/85 px-2 py-1.5",
              "shadow-[0_10px_18px_-16px_rgba(15,23,42,0.42)]",
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
                    "relative flex h-8 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors duration-120 ease-out",
                    context === item.id
                      ? "text-brand-strong"
                      : "text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  <span className="relative z-10">{item.icon}</span>
                  <span className="relative z-10">{item.label}</span>
                  {context === item.id && (
                    <motion.span
                      layoutId="dashboard-context-underline"
                      className="absolute bottom-[3px] left-3 right-3 h-[2px] rounded-full bg-brand/70"
                      transition={{ duration: 0.12, ease: "easeOut" }}
                    />
                  )}
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
                {(Object.keys(periodLabels) as Period[]).map((p) => (
                  <DropdownMenuItem
                    key={p}
                    onClick={() => setPeriod(p)}
                    className="gap-2"
                  >
                    {period === p && (
                      <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                    <span className={period === p ? "font-medium" : ""}>
                      {periodLabels[p]}
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
        </div>

        <div className="flex flex-col gap-2 border-t border-zinc-200/70 pt-2 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500/70">
            <Calendar className="h-3.5 w-3.5" />
            <span>{compactDateText}</span>
          </div>

          {isLoading ? (
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-8 w-[110px] rounded-full" />
              <Skeleton className="h-8 w-[128px] rounded-full" />
              <Skeleton className="h-8 w-[142px] rounded-full" />
            </div>
          ) : hasIndicatorsError ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3 py-1.5 text-xs text-red-700">
              <AlertTriangle className="h-3.5 w-3.5" />
              Falha ao carregar indicadores.{" "}
              <button
                type="button"
                onClick={handleRetryIndicators}
                className="font-semibold underline underline-offset-4"
              >
                Tentar novamente
              </button>
            </div>
          ) : indicators.length > 0 ? (
            <div className="flex flex-wrap items-center justify-end gap-2">
              {indicators.map((chip) => {
                const Icon = chip.icon;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => handleIndicatorClick(chip.id)}
                    className={cn(
                      "premium-shine inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold",
                      "transition-all duration-120 ease-out hover:bg-white/70 active:scale-[0.99]",
                      chip.tone === "danger" &&
                        "border-red-200 bg-red-50/85 text-red-700",
                      chip.tone === "warning" &&
                        "border-amber-200 bg-amber-50/88 text-amber-700",
                      chip.tone === "info" &&
                        "border-sky-200 bg-sky-50/88 text-sky-700"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{chip.value}</span>
                    <span className="text-zinc-600/90">{chip.label}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => router.push("/pipes")}
              className="premium-shine inline-flex h-8 items-center gap-1.5 rounded-full border border-zinc-200 bg-white/90 px-3 text-xs font-semibold text-zinc-700 transition-all duration-120 ease-out hover:bg-zinc-100/80 active:scale-[0.99]"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-zinc-500" />
              Sem dados do dia
              <span className="text-brand">Ver pipeline</span>
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
