"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Users, ThermometerSun, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/bento-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useActivityStore } from "@/stores/activity-store";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import {
  calculateTemperature,
  calculateProjectedCommission,
  formatCurrencyBRL,
} from "@/lib/business-rules";
import { mockUsers } from "@/lib/mock-data";

// --- Pipeline Health Component ---
export function PipelineHealth() {
  const router = useRouter();
  const {
    openOpportunities,
    filteredOpportunities,
    now,
  } = useDashboardFilters();

  const { healthMetrics, temperature, avgDays } = useMemo(() => {
    const openOpps = openOpportunities;

    const stalledCount = openOpps.filter((o) => {
      const daysSinceUpdate = Math.round(
        (now.getTime() - new Date(o.updatedAt).getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysSinceUpdate > 30;
    }).length;

    const activities = useActivityStore.getState().activities;
    const oppsWithoutAction = openOpps.filter((o) => {
      const oppActivities = activities.filter(
        (a) =>
          a.opportunityId === o.id &&
          (a.status === "pending" || a.status === "overdue")
      );
      return oppActivities.length === 0;
    }).length;

    const noValueCount = openOpps.filter((o) => !o.value || o.value === 0).length;

    const maxDenominator = Math.max(openOpps.length, 1);

    // Calculate temperature using business rules
    const avgValue =
      openOpps.length > 0
        ? openOpps.reduce((sum, o) => sum + (o.value || 0), 0) / openOpps.length
        : 10000;

    let hotCount = 0;
    let coldCount = 0;
    for (const opp of openOpps) {
      const temp = calculateTemperature(opp, avgValue, now);
      if (temp === "hot") hotCount++;
      else if (temp === "cold") coldCount++;
    }
    const computedTemp =
      hotCount > coldCount ? "Quente" : coldCount > hotCount ? "Frio" : "Morno";

    const wonOpps = filteredOpportunities.filter((o) => o.status === "won");
    let totalDays = 0;
    wonOpps.forEach((o) => {
      const created = new Date(o.createdAt).getTime();
      const closed = new Date(o.updatedAt).getTime();
      totalDays += Math.max(
        1,
        Math.round((closed - created) / (1000 * 60 * 60 * 24))
      );
    });
    const computedAvgDays =
      wonOpps.length > 0 ? Math.round(totalDays / wonOpps.length) : 0;

    return {
      healthMetrics: [
        {
          label: "Estagnados (+30 dias)",
          value: stalledCount,
          color: "bg-red-500",
          filter: "stale",
          max: maxDenominator,
        },
        {
          label: "Sem próxima ação",
          value: oppsWithoutAction,
          color: "bg-amber-500",
          filter: "no_activity",
          max: maxDenominator,
        },
        {
          label: "Valor vazio",
          value: noValueCount,
          color: "bg-zinc-400",
          filter: "stale",
          max: maxDenominator,
        },
      ],
      temperature: computedTemp,
      avgDays: computedAvgDays,
    };
  }, [openOpportunities, filteredOpportunities, now]);

  const tempColor =
    temperature === "Quente"
      ? "text-emerald-600"
      : temperature === "Frio"
        ? "text-red-600"
        : "text-amber-600";

  return (
    <BentoCard className="premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
          <ThermometerSun className="h-4 w-4 text-orange-500" />
          Saúde do Pipeline
        </h3>
      </div>

      <div className="space-y-4">
        {healthMetrics.map((metric) => (
          <div
            key={metric.label}
            className="group cursor-pointer"
            onClick={() => router.push(`/pipes?filter=${metric.filter}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                router.push(`/pipes?filter=${metric.filter}`);
            }}
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-600 transition-colors group-hover:text-zinc-900">
                {metric.label}
              </span>
              <span className="text-xs font-bold text-zinc-900">
                {metric.value} deals
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(
                    (metric.value / Math.max(metric.max, 1)) * 100,
                    100
                  )}%`,
                }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className={cn(
                  "h-full rounded-full transition-all group-hover:brightness-110",
                  metric.color
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto border-t border-zinc-100 pt-4">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Temperatura
            </p>
            <p className={cn("text-lg font-bold", tempColor)}>{temperature}</p>
          </div>
          <div className="h-8 w-px bg-zinc-100" />
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Velocidade
            </p>
            <p className="text-lg font-bold text-zinc-900">
              {avgDays > 0 ? `${avgDays} dias` : "—"}
            </p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

// --- Performance Component ---
export function TeamPerformance() {
  const router = useRouter();
  const { filteredOpportunities, context, userId, userRole } = useDashboardFilters();

  const isBroadRole = userRole === "master" || userRole === "admin";

  const teamData = useMemo(() => {
    // filteredOpportunities already respects context via useDashboardFilters:
    // - context "me" + role master/admin → returns ALL items
    // - context "me" + role comercial → returns only own items
    // So we only need the extra responsibleId filter for non-admin roles
    const allOpps = filteredOpportunities.filter(
      (o) => o.status === "won" || o.status === "lost"
    );

    const byUser: Record<
      string,
      {
        name: string;
        role: string;
        revenue: number;
        won: number;
        total: number;
      }
    > = {};

    for (const opp of allOpps) {
      if (!opp.responsibleId) continue;
      // When context is "me" for non-admin roles, only show own data
      if (context === "me" && !isBroadRole && opp.responsibleId !== userId) continue;

      if (!byUser[opp.responsibleId]) {
        const user = mockUsers.find((u) => u.id === opp.responsibleId);
        byUser[opp.responsibleId] = {
          name: user?.name ?? opp.responsibleName ?? "—",
          role: user?.role ?? "comercial",
          revenue: 0,
          won: 0,
          total: 0,
        };
      }
      byUser[opp.responsibleId].total += 1;
      if (opp.status === "won") {
        byUser[opp.responsibleId].revenue += opp.value || 0;
        byUser[opp.responsibleId].won += 1;
      }
    }

    return Object.entries(byUser)
      .map(([id, data]) => {
        const commission = calculateProjectedCommission(data.revenue);
        return {
          id,
          name: data.name,
          role: data.role,
          revenue: data.revenue,
          commission: commission.commissionValue,
          conversion:
            data.total > 0 ? Math.round((data.won / data.total) * 100) : 0,
          won: data.won,
          isMe: id === userId,
        };
      })
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 3);
  }, [filteredOpportunities, context, userId, isBroadRole]);

  return (
    <BentoCard className="premium-panel flex flex-col gap-4 border-zinc-200/80 bg-white/86 p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.45)] md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
          <Users className="h-4 w-4 text-blue-500" />
          {isBroadRole ? "Performance do time" : "Performance pessoal"}
        </h3>
        <button
          className="text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          onClick={() => router.push("/goals")}
        >
          Ver metas
        </button>
      </div>

      {teamData.length === 0 ? (
        <div className="py-6 text-center text-sm text-zinc-500">
          Sem dados de performance ainda.
        </div>
      ) : (
        <div className="space-y-3">
          {teamData.map((member, i) => (
            <div
              key={member.id}
              className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors hover:bg-zinc-50"
              onClick={() => router.push("/goals")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") router.push("/goals");
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold",
                    i === 0
                      ? "bg-amber-100 text-amber-700"
                      : i === 1
                        ? "bg-zinc-100 text-zinc-600"
                        : "bg-zinc-100 text-zinc-400"
                  )}
                >
                  {i + 1}
                </span>
                <Avatar className="h-8 w-8 border border-zinc-100">
                  <AvatarFallback className="bg-zinc-100 text-[10px]">
                    {member.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-bold text-zinc-900">{member.name}</p>
                  <p className="text-[10px] text-zinc-500">{member.role}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs font-bold text-zinc-900">
                  {member.isMe || isBroadRole
                    ? formatCurrencyBRL(member.revenue)
                    : `${member.won} ganhos`}
                </p>
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[10px] text-zinc-500">
                    {member.conversion}% conv.
                  </span>
                  {(member.isMe || isBroadRole) && member.commission > 0 && (
                    <span className="text-[10px] font-medium text-emerald-600">
                      +{formatCurrencyBRL(member.commission)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className="mt-auto flex w-full items-center justify-center gap-1 rounded-lg border border-zinc-100 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50"
        onClick={() => router.push("/finance")}
      >
        Ver relatório de comissão <ChevronRight className="h-3 w-3" />
      </button>
    </BentoCard>
  );
}
