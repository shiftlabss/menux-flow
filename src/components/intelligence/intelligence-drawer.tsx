"use client";

import { useEffect, useRef } from "react";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { JarvisHeader } from "./jarvis-header";
import { ContextStrip } from "./context-strip";
import { JarvisConsole } from "./jarvis-console";
import { JarvisChat } from "./jarvis-chat";
import { ClientPickerModal } from "./client-picker-modal";

export function IntelligenceDrawer() {
  const { 
    isOpen, 
    close,
    sendMessage,
    executeSlashCommand,
    isClientPickerOpen
  } = useIntelligenceStore();
  
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isClientPickerOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, isClientPickerOpen, close]);

  const handleConsoleAction = (action: string) => {
    // If action starts with /, treat as command
    if (action.startsWith('/')) {
        // If it requires input, we might need a way to pipe it to chat input??
        // For now, let's assume direct execution or "pre-fill"
        // Simplification: execute directly or send as message
        executeSlashCommand(action as any);
    } else {
        sendMessage(action);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm dark:bg-black/40"
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "fixed right-0 top-0 z-50 flex h-screen w-[480px] max-w-full flex-col",
                "bg-slate-50 shadow-2xl dark:bg-slate-950",
                "border-l border-slate-200 dark:border-slate-800"
              )}
            >
              {/* ZONE 1: Header */}
              <JarvisHeader />

              {/* ZONE 2: Context Strip */}
              <ContextStrip />

              {/* ZONE 3: Console (Main Action Area) */}
              <JarvisConsole onAction={handleConsoleAction} />

              {/* ZONE 4: Chat & Composer */}
              <JarvisChat />

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modals that live "outside" the drawer but conceptually part of it */}
      <ClientPickerModal />
    </>
  );
}
