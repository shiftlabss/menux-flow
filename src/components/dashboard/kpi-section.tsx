"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Gauge,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { PIPELINE_STAGE_ORDER } from "@/lib/business-rules";
import { cardStaggerContainer, listItemReveal } from "@/lib/motion";

type KPIState = "default" | "loading" | "error";
type TrendTone = "positive" | "negative" | "neutral";

interface TrendData {
  value: string;
  tone: TrendTone;
}

interface KPIData {
  label: string;
  value: number;
  valueFormat: "currency" | "percent" | "integer" | "sla";
  subtext: string;
  trend?: TrendData;
  targetPath: string;
  state?: KPIState;
}

function useKpiData(): Record<"pipeline" | "conversion" | "activities" | "sla", KPIData> {
  const {
    filteredOpportunities,
    filteredActivities,
    openOpportunities,
    now,
  } = useDashboardFilters();

  return useMemo(() => {
    const openOpps = openOpportunities;
    const wonOpps = filteredOpportunities.filter((o) => o.status === "won");
    const lostOpps = filteredOpportunities.filter((o) => o.status === "lost");
    const closedTotal = wonOpps.length + lostOpps.length;

    const pipelineTotal = openOpps.reduce((sum, o) => sum + (o.value || 0), 0);
    const conversionRate = closedTotal > 0 ? (wonOpps.length / closedTotal) * 100 : 0;

    const pendingActivities = filteredActivities.filter(
      (a) => a.effectiveStatus === "pending" || a.effectiveStatus === "overdue"
    );
    const overdueActivities = filteredActivities.filter(
      (a) => a.effectiveStatus === "overdue"
    );

    const slaBreached = openOpps.filter(
      (o) => o.slaDeadline && new Date(o.slaDeadline) < now
    );
    const slaAtRisk = openOpps.filter((o) => {
      if (!o.slaDeadline) return false;
      const deadline = new Date(o.slaDeadline);
      const hoursLeft = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60);
      return hoursLeft > 0 && hoursLeft <= 24;
    });

    return {
      pipeline: {
        label: "Pipeline Total",
        value: pipelineTotal,
        valueFormat: "currency",
        subtext: `${openOpps.length} oportunidades abertas`,
        trend: wonOpps.length > 0
          ? { value: `${wonOpps.length} ganhos`, tone: "positive" as TrendTone }
          : undefined,
        targetPath: "/pipes",
        state: "default",
      },
      conversion: {
        label: "Conversão Global",
        value: conversionRate,
        valueFormat: "percent",
        subtext: `Ganhos no período: ${wonOpps.length}`,
        trend: conversionRate > 15
          ? { value: `${conversionRate.toFixed(0)}%`, tone: "positive" as TrendTone }
          : { value: `${conversionRate.toFixed(0)}%`, tone: "negative" as TrendTone },
        targetPath: "/pipes",
        state: "default",
      },
      activities: {
        label: "Atividades",
        value: pendingActivities.length,
        valueFormat: "integer",
        subtext: "Pendentes",
        trend: overdueActivities.length > 0
          ? { value: `${overdueActivities.length} atrasadas`, tone: "negative" as TrendTone }
          : { value: "Em dia", tone: "positive" as TrendTone },
        targetPath: "/activities",
        state: "default",
      },
      sla: {
        label: "SLA Crítico",
        value: slaBreached.length,
        valueFormat: "sla",
        subtext: `${slaAtRisk.length} em risco`,
        trend: slaBreached.length > 0
          ? { value: `+${slaBreached.length}`, tone: "negative" as TrendTone }
          : { value: "OK", tone: "positive" as TrendTone },
        targetPath: "/pipes?status=sla-breached",
        state: "default",
      },
    };
  }, [filteredOpportunities, filteredActivities, openOpportunities, now]);
}

function formatKpiValue(value: number, format: KPIData["valueFormat"]): string {
  if (format === "currency") {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  }

  if (format === "percent") {
    return `${value.toFixed(1)}%`;
  }

  if (format === "sla") {
    return `${Math.round(value)} estourados`;
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

function TrendBadge({ trend }: { trend?: TrendData }) {
  if (!trend) {
    return <div className="h-6 min-w-[68px]" aria-hidden />;
  }

  const Icon =
    trend.tone === "positive"
      ? ArrowUpRight
      : trend.tone === "negative"
        ? ArrowDownRight
        : TrendingUp;

  return (
    <div
      className={cn(
        "inline-flex h-[26px] min-w-fit items-center justify-center gap-1.5 rounded-full px-2.5 text-[12px] font-semibold tracking-tight whitespace-nowrap",
        trend.tone === "positive" && "bg-emerald-100/80 text-emerald-700",
        trend.tone === "negative" && "bg-red-100/80 text-red-700",
        trend.tone === "neutral" && "bg-zinc-100/80 text-zinc-700"
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {trend.value}
    </div>
  );
}

function SparklineMini({ data }: { data: number[] }) {
  if (data.length < 2) return null;
  const maxVal = Math.max(...data, 1);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 126;
      const y = 26 - (v / maxVal) * 24;
      return `${x.toFixed(0)},${y.toFixed(0)}`;
    })
    .join(" ");
  const isPositive = data[data.length - 1] >= data[0];
  return (
    <svg
      width="126"
      height="28"
      viewBox="0 0 126 28"
      fill="none"
      className="h-7 w-[126px]"
      aria-hidden
    >
      <polyline
        points={points}
        stroke={isPositive ? "#10b981" : "#ef4444"}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConversionBarsMini({ stages }: { stages: number[] }) {
  const maxVal = Math.max(...stages, 1);
  const bars = stages.map((v) => Math.round((v / maxVal) * 100));
  return (
    <div className="flex h-7 w-[126px] items-end gap-1.5" aria-hidden>
      {bars.map((height, index) => (
        <div
          key={`bar-${index}`}
          className={cn(
            "w-full rounded-[6px]",
            index === bars.length - 1 ? "bg-brand" : "bg-brand/25"
          )}
          style={{ height: `${Math.max(8, Math.round((height / 100) * 28))}px` }}
        />
      ))}
    </div>
  );
}

function ActivityMiniChips({ overdueCount, pendingCount }: { overdueCount: number; pendingCount: number }) {

  return (
    <div className="flex flex-col items-end gap-1.5 w-full flex-wrap" aria-hidden>
      {overdueCount > 0 && (
        <span className="inline-flex h-[26px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-red-200/60 bg-red-50/80 px-2.5 text-red-700 w-full max-w-[126px]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
          <span className="text-[11px] font-semibold whitespace-nowrap truncate text-left w-full max-w-full">
            {overdueCount} atrasad{overdueCount !== 1 ? "as" : "a"}
          </span>
        </span>
      )}
      <span className="inline-flex h-[26px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-zinc-200/60 bg-zinc-50/80 px-2.5 text-zinc-700 w-full max-w-[126px]">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
        <span className="text-[11px] font-semibold whitespace-nowrap truncate text-left w-full max-w-full">
          {pendingCount} pendente{pendingCount !== 1 ? "s" : ""}
        </span>
      </span>
    </div>
  );
}

function SlaProgressMini({ riskPct }: { riskPct: number }) {

  return (
    <div className="w-[126px]" aria-hidden>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/80">
        <div
          className="h-full rounded-full bg-red-500"
          style={{ width: `${Math.min(riskPct, 100)}%` }}
        />
      </div>
      <p className="mt-1 text-right text-[10px] text-zinc-500">{riskPct}% de risco</p>
    </div>
  );
}

function KPITemplateCard({
  icon,
  data,
  miniVisual,
  onClick,
  onRetry,
}: {
  icon: React.ReactNode;
  data: KPIData;
  miniVisual: React.ReactNode;
  onClick: () => void;
  onRetry: () => void;
}) {
  const state = data.state ?? "default";

  return (
    <motion.button
      type="button"
      onClick={state === "default" ? onClick : undefined}
      whileTap={state === "default" ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.09, ease: "easeInOut" }}
      className={cn(
        "premium-shine group flex h-[172px] shrink-0 w-full flex-col rounded-[24px] border border-zinc-200/80 bg-white/90 p-5 text-left",
        "shadow-(--shadow-bento-sm) transition-[transform,box-shadow,border-color] duration-150 ease-out",
        "hover:-translate-y-[2px] hover:shadow-(--shadow-bento-sm-hover)",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25",
        state !== "default" && "cursor-default hover:translate-y-0"
      )}
    >
      {state === "loading" ? (
        <div className="flex h-full flex-col">
          <Skeleton className="h-3 w-24 rounded-md before:animation-duration-[900ms]" />
          <Skeleton className="mt-4 h-8 w-32 rounded-lg before:animation-duration-[900ms]" />
          <Skeleton className="mt-2 h-3 w-28 rounded-md before:animation-duration-[900ms]" />
          <div className="mt-auto flex h-[42px] items-end">
            <Skeleton className="h-7 w-full rounded-md before:animation-duration-[900ms]" />
          </div>
        </div>
      ) : state === "error" ? (
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-900">{data.label}</p>
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
          <header className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[10px] bg-zinc-100 text-zinc-700">
                {icon}
              </div>
              <p className="truncate text-[13px] font-medium text-zinc-600">
                {data.label}
              </p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600" />
          </header>

          <div className="mt-3">
            <p className="text-[32px] font-bold tracking-tight leading-none text-zinc-900">
              <AnimatedKpiValue value={data.value} format={data.valueFormat} />
            </p>
            <p className="mt-1.5 truncate text-[12.5px] font-medium text-zinc-500">{data.subtext || "—"}</p>
          </div>

          <footer className="mt-auto flex w-full flex-row items-end justify-between gap-x-2 gap-y-2 pt-2">
            <div className="shrink-0 mb-0.5"><TrendBadge trend={data.trend} /></div>
            <div className="flex min-w-0 flex-1 flex-col items-end justify-end ml-auto">{miniVisual}</div>
          </footer>
        </>
      )}
    </motion.button>
  );
}

export function KpiSection() {
  const router = useRouter();
  const {
    filteredActivities,
    openOpportunities,
    now,
  } = useDashboardFilters();
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

  // ── Compute mini-chart data ──────────────────────────────────────
  const sparklineData = useMemo(() => {
    // Build 7 time-bucketed pipeline values for the sparkline
    const openOpps = openOpportunities;
    const buckets = 7;
    const msPerBucket = (7 * 24 * 60 * 60 * 1000) / buckets;
    const end = now.getTime();
    const start = end - 7 * 24 * 60 * 60 * 1000;
    const data: number[] = Array.from({ length: buckets }, () => 0);

    for (const opp of openOpps) {
      const created = new Date(opp.createdAt).getTime();
      for (let i = 0; i < buckets; i++) {
        const bucketEnd = start + (i + 1) * msPerBucket;
        if (created <= bucketEnd) {
          data[i] += opp.value || 0;
        }
      }
    }
    // Ensure at least some variation for visual interest
    return data.length >= 2 ? data : [0, 0];
  }, [openOpportunities, now]);

  const stageCounts = useMemo(() => {
    const counts: number[] = PIPELINE_STAGE_ORDER.map(
      (stage) => openOpportunities.filter((o) => o.stage === stage).length
    );
    return counts;
  }, [openOpportunities]);

  const activityCounts = useMemo(() => {
    const overdueCount = filteredActivities.filter(
      (a) => a.effectiveStatus === "overdue"
    ).length;
    const pendingCount = filteredActivities.filter(
      (a) => a.effectiveStatus === "pending"
    ).length;
    return { overdueCount, pendingCount };
  }, [filteredActivities]);

  const slaRiskPct = useMemo(() => {
    const total = openOpportunities.length;
    if (total === 0) return 0;
    const breached = openOpportunities.filter(
      (o) => o.slaDeadline && new Date(o.slaDeadline) < now
    ).length;
    const atRisk = openOpportunities.filter((o) => {
      if (!o.slaDeadline) return false;
      const deadline = new Date(o.slaDeadline);
      const hoursLeft = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60);
      return hoursLeft > 0 && hoursLeft <= 24;
    }).length;
    return Math.round(((breached + atRisk) / total) * 100);
  }, [openOpportunities, now]);

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
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      <motion.div custom={0} variants={listItemReveal}>
        <KPITemplateCard
          icon={<Gauge className="h-4 w-4" />}
          data={kpis.pipeline}
          miniVisual={<SparklineMini data={sparklineData} />}
          onClick={() => router.push(kpis.pipeline.targetPath)}
          onRetry={() => retryCard("pipeline")}
        />
      </motion.div>

      <motion.div custom={1} variants={listItemReveal}>
        <KPITemplateCard
          icon={<TrendingUp className="h-4 w-4" />}
          data={kpis.conversion}
          miniVisual={<ConversionBarsMini stages={stageCounts} />}
          onClick={() => router.push(kpis.conversion.targetPath)}
          onRetry={() => retryCard("conversion")}
        />
      </motion.div>

      <motion.div custom={2} variants={listItemReveal}>
        <KPITemplateCard
          icon={<Clock3 className="h-4 w-4" />}
          data={kpis.activities}
          miniVisual={
            <ActivityMiniChips
              overdueCount={activityCounts.overdueCount}
              pendingCount={activityCounts.pendingCount}
            />
          }
          onClick={() => router.push(kpis.activities.targetPath)}
          onRetry={() => retryCard("activities")}
        />
      </motion.div>

      <motion.div custom={3} variants={listItemReveal}>
        <KPITemplateCard
          icon={<ShieldAlert className="h-4 w-4" />}
          data={kpis.sla}
          miniVisual={<SlaProgressMini riskPct={slaRiskPct} />}
          onClick={() => router.push(kpis.sla.targetPath)}
          onRetry={() => retryCard("sla")}
        />
      </motion.div>
    </motion.div>
  );
}
