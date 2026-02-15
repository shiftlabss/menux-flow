"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";
import { KpiSection } from "@/components/dashboard/kpi-section";
import { FunnelXRay } from "@/components/dashboard/funnel-x-ray";
import { CriticalAlerts, TodayActivities } from "@/components/dashboard/execution-section";
import { PipelineHealth, TeamPerformance } from "@/components/dashboard/performance-section";
import { screenContainer, sectionEnter } from "@/lib/motion";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setIsLoading(false), 800); return () => clearTimeout(t); }, []);

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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Skeleton className="h-48 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Skeleton className="h-48 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={screenContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[1600px] space-y-6"
    >
      {/* Header */}
      <motion.div variants={sectionEnter}>
        <DashboardHeader />
      </motion.div>

      {/* Faixa B: KPIs */}
      <motion.section id="dashboard-kpis" variants={sectionEnter} className="scroll-mt-44">
        <KpiSection />
      </motion.section>

      {/* Faixa C: Funnel X-Ray */}
      <motion.section id="dashboard-funnel" variants={sectionEnter} className="scroll-mt-44">
        <FunnelXRay />
      </motion.section>

      {/* Faixa D: Execução */}
      <motion.section
        id="dashboard-execution"
        variants={sectionEnter}
        className="grid grid-cols-1 gap-6 scroll-mt-44 lg:grid-cols-12"
      >
         {/* Left Column: Alerts & Activities (8 cols) */}
         <div className="lg:col-span-8 flex flex-col gap-6">
            <CriticalAlerts />
            <TodayActivities />
         </div>
         
         {/* Right Column: Health & Team (4 cols) */}
         <div className="lg:col-span-4 flex flex-col gap-6">
            <PipelineHealth />
            <TeamPerformance />
         </div>
      </motion.section>
    </motion.div>
  );
}
