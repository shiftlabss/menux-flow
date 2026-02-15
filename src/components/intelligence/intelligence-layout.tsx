"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, Sparkles, Users, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { MenuxIntelligenceFullHeader } from "./menux-intelligence-full-header";
import { IntelligenceContextPanel } from "./intelligence-context-panel";
import { MenuxIntelligenceFullConsole } from "./menux-intelligence-full-console";
import { IntelligenceExecutionPanel } from "./intelligence-execution-panel";

type LayoutMode = "xl" | "lg" | "md" | "sm" | "xs";
type MobileTab = "client" | "console" | "insights";

const MODE_LABELS: Record<LayoutMode, string> = {
  xl: "XL · 3 colunas",
  lg: "LG · Insights colapsável",
  md: "MD · 2 colunas + drawer",
  sm: "SM · Console + drawers",
  xs: "XS · Tabs internas",
};

const MOBILE_TABS: { id: MobileTab; label: string; icon: React.ReactNode }[] = [
  { id: "client", label: "Cliente", icon: <Users className="h-3.5 w-3.5" /> },
  { id: "console", label: "Console", icon: <MessageSquareText className="h-3.5 w-3.5" /> },
  { id: "insights", label: "Insights", icon: <Sparkles className="h-3.5 w-3.5" /> },
];

function resolveLayoutMode(width: number): LayoutMode {
  if (width >= 1440) return "xl";
  if (width >= 1200) return "lg";
  if (width >= 900) return "md";
  if (width >= 600) return "sm";
  return "xs";
}

export function IntelligenceLayout() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>(() =>
    typeof window === "undefined" ? "xl" : resolveLayoutMode(window.innerWidth)
  );
  const [mobileTab, setMobileTab] = useState<MobileTab>("console");
  const [panelPrefs, setPanelPrefs] = useState<
    Record<LayoutMode, { left: boolean; right: boolean }>
  >({
    xl: { left: true, right: true },
    lg: { left: true, right: false },
    md: { left: true, right: false },
    sm: { left: false, right: false },
    xs: { left: false, right: false },
  });

  useEffect(() => {
    const handleResize = () => setLayoutMode(resolveLayoutMode(window.innerWidth));
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLeftPanelOpen = panelPrefs[layoutMode]?.left ?? false;
  const isRightPanelOpen = panelPrefs[layoutMode]?.right ?? false;

  const showXsTabs = layoutMode === "xs";
  const showInlineLeft =
    layoutMode === "xl" || layoutMode === "lg" || (layoutMode === "md" && isLeftPanelOpen);
  const showInlineRight = layoutMode === "xl" || (layoutMode === "lg" && isRightPanelOpen);
  const showLeftDrawer = layoutMode === "sm" && isLeftPanelOpen;
  const showRightDrawer = (layoutMode === "md" || layoutMode === "sm") && isRightPanelOpen;

  const gridTemplateColumns = useMemo(() => {
    const columns: string[] = [];
    if (showInlineLeft) columns.push("minmax(280px, 360px)");
    columns.push("minmax(0, 1fr)");
    if (showInlineRight) columns.push("minmax(300px, 380px)");
    return columns.join(" ");
  }, [showInlineLeft, showInlineRight]);

  const toggleLeftPanel = () => {
    setPanelPrefs((prev) => {
      const current = prev[layoutMode];
      const nextLeft = !current.left;
      return {
        ...prev,
        [layoutMode]: {
          left: nextLeft,
          right: layoutMode === "sm" && nextLeft ? false : current.right,
        },
      };
    });
  };

  const toggleRightPanel = () => {
    setPanelPrefs((prev) => {
      const current = prev[layoutMode];
      const nextRight = !current.right;
      return {
        ...prev,
        [layoutMode]: {
          left: layoutMode === "sm" && nextRight ? false : current.left,
          right: nextRight,
        },
      };
    });
  };

  return (
    <div className="menux-intelligence-theme menux-intelligence-theme-full dark flex h-full min-h-0 w-full flex-col overflow-hidden">
      <MenuxIntelligenceFullHeader />

      {!showXsTabs && layoutMode !== "xl" && (
        <div className="z-[95] flex shrink-0 items-center gap-2 border-b border-white/10 bg-slate-950/30 px-4 py-2 backdrop-blur-sm">
          {(layoutMode === "md" || layoutMode === "sm") && (
            <ResponsiveToggle
              active={isLeftPanelOpen}
              label="Clientes"
              icon={<Users className="h-3.5 w-3.5" />}
              onClick={toggleLeftPanel}
            />
          )}
          {(layoutMode === "lg" || layoutMode === "md" || layoutMode === "sm") && (
            <ResponsiveToggle
              active={isRightPanelOpen}
              label="Insights"
              icon={<Sparkles className="h-3.5 w-3.5" />}
              onClick={toggleRightPanel}
            />
          )}
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            {MODE_LABELS[layoutMode]}
          </span>
        </div>
      )}

      {showXsTabs ? (
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="z-[95] shrink-0 border-b border-white/10 bg-slate-950/28 p-3 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-1 rounded-full border border-white/12 bg-white/6 p-1">
              {MOBILE_TABS.map((tab) => {
                const isActive = tab.id === mobileTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setMobileTab(tab.id)}
                    className={cn(
                      "relative flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors",
                      isActive
                        ? "bg-white/12 text-slate-100"
                        : "text-slate-300 hover:bg-white/8 hover:text-slate-100"
                    )}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="h-full min-h-0 overflow-hidden"
              >
                {mobileTab === "client" && (
                  <section className="menux-intelligence-surface h-full min-h-0 overflow-hidden">
                    <IntelligenceContextPanel />
                  </section>
                )}
                {mobileTab === "console" && (
                  <section className="h-full min-h-0 overflow-hidden">
                    <MenuxIntelligenceFullConsole />
                  </section>
                )}
                {mobileTab === "insights" && (
                  <section className="menux-intelligence-surface h-full min-h-0 overflow-hidden">
                    <IntelligenceExecutionPanel />
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div className="grid h-full min-h-0 w-full overflow-hidden" style={{ gridTemplateColumns }}>
            {showInlineLeft && (
              <aside className="menux-intelligence-surface min-h-0 min-w-0 overflow-hidden border-r border-white/10">
                <IntelligenceContextPanel />
              </aside>
            )}

            <main className="relative min-h-0 min-w-0 overflow-hidden bg-transparent">
              <MenuxIntelligenceFullConsole />
            </main>

            {showInlineRight && (
              <aside className="menux-intelligence-surface min-h-0 min-w-0 overflow-hidden border-l border-white/10 xl:sticky xl:top-0">
                <IntelligenceExecutionPanel />
              </aside>
            )}
          </div>

          <PanelDrawer
            open={showLeftDrawer}
            side="left"
            title="Clientes"
            onClose={() =>
              setPanelPrefs((prev) => ({
                ...prev,
                [layoutMode]: { ...prev[layoutMode], left: false },
              }))
            }
          >
            <IntelligenceContextPanel />
          </PanelDrawer>

          <PanelDrawer
            open={showRightDrawer}
            side="right"
            title="Insights"
            onClose={() =>
              setPanelPrefs((prev) => ({
                ...prev,
                [layoutMode]: { ...prev[layoutMode], right: false },
              }))
            }
          >
            <IntelligenceExecutionPanel />
          </PanelDrawer>
        </div>
      )}
    </div>
  );
}

function ResponsiveToggle({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-cyan-300/26 bg-cyan-500/16 text-cyan-100"
          : "border-white/14 bg-white/7 text-slate-300 hover:bg-white/10 hover:text-slate-100"
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function PanelDrawer({
  open,
  side,
  title,
  onClose,
  children,
}: {
  open: boolean;
  side: "left" | "right";
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Fechar painel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 z-[190] bg-black/46 backdrop-blur-[2px]"
          />

          <motion.aside
            initial={{ x: side === "left" ? "-100%" : "100%" }}
            animate={{
              x: 0,
              transition: { duration: 0.22, ease: [0.22, 0.61, 0.36, 1] },
            }}
            exit={{
              x: side === "left" ? "-100%" : "100%",
              transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
            }}
            className={cn(
              "absolute inset-y-0 z-[200] w-[min(88vw,420px)] overflow-hidden",
              side === "left" ? "left-0 border-r border-white/10" : "right-0 border-l border-white/10"
            )}
          >
            <div className="menux-intelligence-surface flex h-full min-h-0 flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <p className="font-heading text-sm font-semibold text-slate-100">{title}</p>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
