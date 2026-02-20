"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";
import { KpiSection } from "@/components/dashboard/kpi-section";
import { FunnelXRay } from "@/components/dashboard/funnel-x-ray";
import { CriticalAlerts, TodayActivities } from "@/components/dashboard/execution-section";
import { PipelineHealth, TeamPerformance } from "@/components/dashboard/performance-section";
import { useProactiveEngine } from "@/hooks/use-proactive-engine";
import { useDashboardStore } from "@/stores/dashboard-store";
import { screenContainer, sectionEnter } from "@/lib/motion";

export default function Dashboard() {
  // Activate proactive engine in background — feeds alerts & suggestions
  useProactiveEngine();
  const filterVersion = useDashboardStore((s) => s.filterVersion);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Show skeleton for a single frame to prevent layout shift, then render
    const id = requestAnimationFrame(() => setIsLoading(false));
    return () => cancelAnimationFrame(id);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-9 w-36 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-xl" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Skeleton className="h-48 rounded-xl" />
          <Skeleton className="h-48 rounded-xl" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Skeleton className="h-48 rounded-xl" />
          <Skeleton className="h-48 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={screenContainer}
      initial="hidden"
      animate="show"
      className="w-full max-w-full space-y-6"
    >
      {/* Header */}
      <motion.div variants={sectionEnter}>
        <DashboardHeader />
      </motion.div>

      {/* Animated content — fades on filter change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filterVersion}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.4 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Faixa B: KPIs */}
          <motion.section id="dashboard-kpis" variants={sectionEnter} className="scroll-mt-44">
            <KpiSection />
          </motion.section>

          {/* Faixa C: Funnel X-Ray */}
          <motion.section id="dashboard-funnel" variants={sectionEnter} className="scroll-mt-44">
            <FunnelXRay />
          </motion.section>

          {/* Faixa D: Performance — promoted to full-width row */}
          <motion.section
            id="dashboard-performance"
            variants={sectionEnter}
            className="grid grid-cols-1 gap-6 scroll-mt-44 md:grid-cols-2"
          >
            <PipelineHealth />
            <TeamPerformance />
          </motion.section>

          {/* Faixa E: Execução */}
          <motion.section
            id="dashboard-execution"
            variants={sectionEnter}
            className="grid grid-cols-1 gap-6 scroll-mt-44 lg:grid-cols-2"
          >
            <CriticalAlerts />
            <TodayActivities />
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
