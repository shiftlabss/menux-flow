"use client";

import { motion } from "framer-motion";
import { MenuxIntelligenceFullHeader } from "./menux-intelligence-full-header";
import { IntelligenceContextPanel } from "./intelligence-context-panel";
import { MenuxIntelligenceFullConsole } from "./menux-intelligence-full-console";
import { IntelligenceExecutionPanel } from "./intelligence-execution-panel";
import { screenContainer } from "@/lib/motion";

export function IntelligenceLayout() {
  // Shared state for the layout could go here or in a store
  // For now, we engage the layout structure

  return (
    <motion.div
      variants={screenContainer}
      initial="hidden"
      animate="show"
      className="menux-intelligence-theme dark flex h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[22px] border border-white/12"
    >
       {/* Header is sticky at the top of the content area */}
      <MenuxIntelligenceFullHeader />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Column A: Context & Selection */}
        <aside className="menux-intelligence-surface hidden w-[360px] flex-col border-r border-white/10 md:flex">
          <IntelligenceContextPanel />
        </aside>

        {/* Column B: Console & Chat */}
        <main className="relative flex flex-1 flex-col bg-transparent">
          <MenuxIntelligenceFullConsole />
        </main>

        {/* Column C: Execution Panel */}
        <aside className="menux-intelligence-surface hidden w-[380px] flex-col border-l border-white/10 xl:flex">
          <IntelligenceExecutionPanel />
        </aside>
      </div>
    </motion.div>
  );
}
