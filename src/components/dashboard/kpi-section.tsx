"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import {
  ChevronRight,
  Clock3,
  Gauge,
  ShieldAlert,
  TrendingUp
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { getPeriodDateRange } from "@/stores/dashboard-store";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { filterByUser } from "@/lib/proactive-engine/helpers";
import type { Opportunity } from "@/types";
import { cardStaggerContainer, listItemReveal } from "@/lib/motion";

type KPIState = "default" | "loading" | "error";
type ChipTone = "neutral" | "info" | "warning" | "danger" | "success";

const STALE_ACTIVITY_DAYS = 5;
const SLA_RISK_WINDOW_HOURS = 24;
const DAY_MS = 24 * 60 * 60 * 1000;

interface KPIChip {
  id: string;
  label: string;
  tone: ChipTone;
}

interface KPIAction {
  label: string;
  targetPath: string;
}

interface KPIData {
  label: string;
  value: number;
  valueFormat: "currency" | "percent" | "integer";
  valueSuffix?: string;
  subtext: string;
  chips: KPIChip[];
  line4Text?: string;
  detailAction?: KPIAction;
  microText?: string;
  targetPath: string;
  disabled?: boolean;
  state?: KPIState;
}

function isSlaBreached(slaDeadline: string | undefined, now: Date): boolean {
  return Boolean(slaDeadline) && new Date(slaDeadline as string) < now;
}

function isSlaAtRisk(slaDeadline: string | undefined, now: Date): boolean {
  if (!slaDeadline) return false;
  const deadline = new Date(slaDeadline);
  const hoursLeft = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60);
  return hoursLeft > 0 && hoursLeft <= SLA_RISK_WINDOW_HOURS;
}

function calculateConversionInRange(
  opportunities: Opportunity[],
  start: Date,
  end: Date
): { won: number; total: number; rate: number } {
  const closed = opportunities.filter((opportunity) => {
    if (opportunity.status !== "won" && opportunity.status !== "lost") return false;
    const updatedAt = new Date(opportunity.updatedAt);
    return updatedAt >= start && updatedAt <= end;
  });

  const won = closed.filter((opportunity) => opportunity.status === "won").length;
  const total = closed.length;
  const rate = total > 0 ? (won / total) * 100 : 0;

  return { won, total, rate };
}

function useKpiData(): Record<"pipeline" | "conversion" | "activities" | "sla", KPIData> {
  const {
    filteredActivities,
    openOpportunities,
    now,
    period,
    context,
    userId,
    userRole,
  } = useDashboardFilters();
  const opportunities = useOpportunityStore((state) => state.opportunities);

  return useMemo(() => {
    const openOpps = openOpportunities;
    const scopedOpportunities =
      context === "me"
        ? filterByUser(opportunities, userId, userRole)
        : opportunities;

    const { start, end } = getPeriodDateRange(period, now);
    const rangeSizeMs = end.getTime() - start.getTime() + 1;
    const previousEnd = new Date(start.getTime() - 1);
    const previousStart = new Date(previousEnd.getTime() - rangeSizeMs + 1);

    const currentConversion = calculateConversionInRange(scopedOpportunities, start, end);
    const previousConversion = calculateConversionInRange(
      scopedOpportunities,
      previousStart,
      previousEnd
    );
    const hasCurrentConversionData = currentConversion.total > 0;
    const hasPreviousBase = previousConversion.total > 0;
    const conversionDelta = hasPreviousBase
      ? currentConversion.rate - previousConversion.rate
      : null;

    const pipelineTotal = openOpps.reduce((sum, o) => sum + (o.value || 0), 0);

    const pendingActivities = filteredActivities.filter(
      (a) => a.effectiveStatus === "pending" || a.effectiveStatus === "overdue"
    );
    const overdueActivityCount = filteredActivities.filter(
      (a) => a.effectiveStatus === "overdue"
    ).length;

    const todayIso = now.toISOString().slice(0, 10);
    const todayPendingCount = filteredActivities.filter(
      (a) => a.effectiveStatus === "pending" && a.dueDate === todayIso
    ).length;

    const staleThreshold = now.getTime() - STALE_ACTIVITY_DAYS * DAY_MS;
    const staleCount = openOpps.filter(
      (opportunity) => new Date(opportunity.updatedAt).getTime() < staleThreshold
    ).length;

    const slaBreachedCount = openOpps.filter((o) => isSlaBreached(o.slaDeadline, now)).length;
    const slaRiskCount = openOpps.filter((o) => isSlaAtRisk(o.slaDeadline, now)).length;
    const riskPct =
      openOpps.length > 0
        ? Math.round(((slaBreachedCount + slaRiskCount) / openOpps.length) * 100)
        : 0;

    const conversionChips: KPIChip[] = [];
    if (hasCurrentConversionData && conversionDelta !== null) {
      if (conversionDelta > 0) {
        conversionChips.push({
          id: "conversion-up",
          label: `Alta +${conversionDelta.toFixed(1)} p.p.`,
          tone: "success",
        });
      } else if (conversionDelta < 0) {
        conversionChips.push({
          id: "conversion-down",
          label: `Queda ${Math.abs(conversionDelta).toFixed(1)} p.p.`,
          tone: "danger",
        });
      } else {
        conversionChips.push({
          id: "conversion-flat",
          label: "Estavel 0.0 p.p.",
          tone: "neutral",
        });
      }
    }

    const activityChips: KPIChip[] = [];
    if (overdueActivityCount > 0) {
      activityChips.push({
        id: "activities-overdue",
        label: `Atrasadas: ${overdueActivityCount}`,
        tone: "danger",
      });
    }
    if (todayPendingCount > 0) {
      activityChips.push({
        id: "activities-today",
        label: `Hoje: ${todayPendingCount}`,
        tone: "warning",
      });
    }
    if (activityChips.length === 0) {
      activityChips.push({
        id: "activities-ok",
        label: "OK",
        tone: "success",
      });
    }

    const slaChips: KPIChip[] = [];
    if (slaBreachedCount > 0) {
      slaChips.push({
        id: "sla-overdue",
        label: `Estourados: ${slaBreachedCount}`,
        tone: "danger",
      });
    }
    if (slaRiskCount > 0) {
      slaChips.push({
        id: "sla-risk",
        label: `Em risco: ${slaRiskCount}`,
        tone: "warning",
      });
    }
    if (slaChips.length === 0) {
      slaChips.push({
        id: "sla-ok",
        label: "OK",
        tone: "success",
      });
    }

    const pipelineChips: KPIChip[] = [];
    if (slaBreachedCount > 0) {
      pipelineChips.push({
        id: "pipeline-overdue",
        label: `Estourados: ${slaBreachedCount}`,
        tone: "danger",
      });
    }

    const slaTargetPath = slaBreachedCount > 0
      ? "/pipes?filter=sla_overdue"
      : "/pipes?filter=sla_risk";

    return {
      pipeline: {
        label: "Pipeline Total",
        value: pipelineTotal,
        valueFormat: "currency",
        subtext: `${openOpps.length} oportunidades abertas`,
        chips: pipelineChips,
        line4Text: pipelineChips.length === 0 && staleCount === 0 ? "Sem alertas hoje" : undefined,
        detailAction:
          staleCount > 0
            ? { label: "Ver sem atividade", targetPath: "/pipes?filter=stale" }
            : undefined,
        targetPath: "/pipes",
        state: "default",
      },
      conversion: {
        label: "Conversão Global",
        value: currentConversion.rate,
        valueFormat: "percent",
        subtext: hasCurrentConversionData
          ? `Ganhos no período: ${currentConversion.won}`
          : "Sem dados no período",
        chips: conversionChips,
        line4Text: hasCurrentConversionData
          ? hasPreviousBase
            ? undefined
            : "Sem base comparável"
          : "Ajuste o período para comparar.",
        disabled: !hasCurrentConversionData,
        targetPath: "/dashboard?view=conversion",
        state: "default",
      },
      activities: {
        label: "Atividades",
        value: pendingActivities.length,
        valueFormat: "integer",
        subtext: `${overdueActivityCount} atrasadas · ${todayPendingCount} para hoje`,
        chips: activityChips.slice(0, 2),
        targetPath: "/activities?statuses=pending,overdue",
        state: "default",
      },
      sla: {
        label: "SLA Crítico",
        value: slaBreachedCount,
        valueFormat: "integer",
        valueSuffix: "estourados",
        subtext: `${slaRiskCount} em risco`,
        chips: slaChips.slice(0, 2),
        detailAction:
          slaBreachedCount > 0 || slaRiskCount > 0
            ? { label: "Ver deals", targetPath: slaTargetPath }
            : undefined,
        microText: `${riskPct}% da carteira em risco`,
        targetPath: slaTargetPath,
        state: "default",
      },
    };
  }, [
    filteredActivities,
    openOpportunities,
    now,
    period,
    context,
    userId,
    userRole,
    opportunities,
  ]);
}

function formatKpiValue(value: number, format: KPIData["valueFormat"]): string {
  if (format === "currency") {
    const absValue = Math.abs(value);
    if (absValue >= 1_000) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        notation: "compact",
        maximumFractionDigits: absValue >= 1_000_000 ? 2 : 1,
      }).format(value);
    }

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  }

  if (format === "percent") {
    return `${value.toFixed(1)}%`;
  }

  return Math.round(value).toString();
}

function AnimatedKpiValue({
  value,
  format,
}: {
  value: number;
  format: KPIData["valueFormat"];
}) {
  const motionValue = useMotionValue(value);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.22,
      ease: [0.22, 0.61, 0.36, 1],
    });
    return controls.stop;
  }, [motionValue, value]);

  return <>{formatKpiValue(displayValue, format)}</>;
}

function KpiChipBadge({ chip }: { chip: KPIChip }) {
  return (
    <span
      className={cn(
        "inline-flex h-[24px] max-w-full items-center rounded-full border px-2.5 text-[11px] font-semibold tracking-tight whitespace-nowrap",
        chip.tone === "neutral" && "border-zinc-200/85 bg-zinc-100/80 text-zinc-700",
        chip.tone === "info" && "border-sky-200/80 bg-sky-50/80 text-sky-700",
        chip.tone === "warning" && "border-amber-200/80 bg-amber-50/80 text-amber-700",
        chip.tone === "danger" && "border-rose-200/80 bg-rose-50/80 text-rose-700",
        chip.tone === "success" && "border-emerald-200/80 bg-emerald-50/80 text-emerald-700"
      )}
      title={chip.label}
    >
      <span className="truncate">{chip.label}</span>
    </span>
  );
}

function KPITemplateCard({
  icon,
  data,
  onNavigate,
  onRetry,
}: {
  icon: React.ReactNode;
  data: KPIData;
  onNavigate: (path: string) => void;
  onRetry: () => void;
}) {
  const state = data.state ?? "default";
  const isInteractive = state === "default" && !data.disabled;
  const chips = data.chips.slice(0, 2);
  const hasOverflow = data.chips.length > 2;
  const detailAction = hasOverflow
    ? { label: "Ver detalhes", targetPath: data.targetPath }
    : data.detailAction;

  function handleCardAction() {
    if (!isInteractive) return;
    onNavigate(data.targetPath);
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (!isInteractive) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onNavigate(data.targetPath);
    }
  }

  return (
    <motion.article
      onClick={handleCardAction}
      onKeyDown={handleCardKeyDown}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : -1}
      aria-disabled={!isInteractive}
      whileTap={isInteractive ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.09, ease: "easeInOut" }}
      className={cn(
        "premium-shine group flex h-[222px] w-full flex-col overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white/90 p-5 text-left",
        "shadow-(--shadow-bento-sm) transition-[box-shadow,border-color,background-color] duration-150 ease-out",
        isInteractive && "cursor-pointer hover:shadow-(--shadow-bento-sm-hover)",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"
      )}
    >
      {state === "loading" ? (
        <div className="flex h-full flex-col gap-4">
          <Skeleton className="h-4 w-28 rounded-md before:animation-duration-[900ms]" />
          <Skeleton className="h-10 w-36 rounded-lg before:animation-duration-[900ms]" />
        </div>
      ) : state === "error" ? (
        <div className="flex h-full flex-col justify-between gap-3">
          <div>
            <p className="text-[13px] font-semibold text-zinc-900">{data.label}</p>
            <p className="mt-2 text-xs text-red-700">Erro ao carregar métrica.</p>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onRetry();
            }}
            className="w-fit text-xs font-semibold text-brand underline underline-offset-4"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <>
          <header className="flex h-8 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-zinc-100 text-zinc-700">
                {icon}
              </div>
              <p className="truncate text-[13px] font-medium text-zinc-600">
                {data.label}
              </p>
            </div>
            {isInteractive ? (
              <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 transition-[color,transform] duration-150 group-hover:translate-x-[1px] group-hover:text-zinc-600" />
            ) : null}
          </header>

          <div className="mt-3 flex h-[66px] min-w-0 items-end gap-1.5">
            <p className="tabular-nums whitespace-nowrap text-[clamp(1.9rem,2.35vw,2.85rem)] leading-[0.92] font-bold tracking-tight text-zinc-900">
              <AnimatedKpiValue value={data.value} format={data.valueFormat} />
            </p>
            {data.valueSuffix ? (
              <p className="tabular-nums shrink-0 truncate pb-1 text-[13px] font-semibold text-zinc-500">{data.valueSuffix}</p>
            ) : null}
          </div>

          <p className="mt-2 h-6 truncate text-[13px] font-medium text-zinc-500">{data.subtext}</p>

          <footer className="mt-auto flex h-[58px] flex-col justify-end pt-3">
            <div className="flex min-h-[24px] items-center gap-2 overflow-hidden">
              {chips.map((chip) => (
                <KpiChipBadge key={chip.id} chip={chip} />
              ))}

              {chips.length === 0 && !detailAction ? (
                <p className="truncate text-[12px] text-zinc-500" title={data.line4Text || "Sem alertas hoje"}>
                  {data.line4Text || "Sem alertas hoje"}
                </p>
              ) : null}

              {detailAction ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onNavigate(detailAction.targetPath);
                  }}
                  className="inline-flex h-[24px] shrink-0 items-center text-[12px] font-semibold text-brand underline underline-offset-4 transition-[color,transform,opacity] duration-150 hover:translate-x-[1px] hover:text-brand/80"
                >
                  {detailAction.label}
                </button>
              ) : null}
            </div>

            <p className="tabular-nums mt-1.5 h-[16px] truncate text-[11px] text-zinc-500">
              {data.microText ?? ""}
            </p>
          </footer>
        </>
      )}
    </motion.article>
  );
}

export function KpiSection() {
  const router = useRouter();
  const baseData = useKpiData();
  const [cardState, setCardState] = useState<Record<keyof typeof baseData, KPIState>>({
    pipeline: "default",
    conversion: "default",
    activities: "default",
    sla: "default",
  });

  const kpis = useMemo(
    () => ({
      pipeline: { ...baseData.pipeline, state: cardState.pipeline },
      conversion: { ...baseData.conversion, state: cardState.conversion },
      activities: { ...baseData.activities, state: cardState.activities },
      sla: { ...baseData.sla, state: cardState.sla },
    }),
    [baseData, cardState]
  );

  function retryCard(card: keyof typeof kpis) {
    setCardState((prev) => ({ ...prev, [card]: "loading" }));
    window.setTimeout(() => {
      setCardState((prev) => ({ ...prev, [card]: "default" }));
    }, 240);
  }

  return (
    <motion.div
      variants={cardStaggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      <motion.div custom={0} variants={listItemReveal} className="h-full">
        <KPITemplateCard
          icon={<Gauge className="h-4 w-4" />}
          data={kpis.pipeline}
          onNavigate={(path) => router.push(path)}
          onRetry={() => retryCard("pipeline")}
        />
      </motion.div>

      <motion.div custom={1} variants={listItemReveal} className="h-full">
        <KPITemplateCard
          icon={<TrendingUp className="h-4 w-4" />}
          data={kpis.conversion}
          onNavigate={(path) => router.push(path)}
          onRetry={() => retryCard("conversion")}
        />
      </motion.div>

      <motion.div custom={2} variants={listItemReveal} className="h-full">
        <KPITemplateCard
          icon={<Clock3 className="h-4 w-4" />}
          data={kpis.activities}
          onNavigate={(path) => router.push(path)}
          onRetry={() => retryCard("activities")}
        />
      </motion.div>

      <motion.div custom={3} variants={listItemReveal} className="h-full">
        <KPITemplateCard
          icon={<ShieldAlert className="h-4 w-4" />}
          data={kpis.sla}
          onNavigate={(path) => router.push(path)}
          onRetry={() => retryCard("sla")}
        />
      </motion.div>
    </motion.div>
  );
}
