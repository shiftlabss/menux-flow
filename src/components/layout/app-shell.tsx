"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useSidebarStore } from "@/stores/sidebar-store";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebarStore();
  const mainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isIntelligenceRoute =
    pathname === "/intelligence" || pathname.startsWith("/intelligence/");

  return (
    <div className="flex h-screen w-full overflow-hidden premium-mesh">
      {/* Sidebar - Fixed Left, Full Height */}
      <Sidebar />

      {/* Main Column - Flex Vertical */}
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col h-full relative transition-[margin-left] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          "ml-0 md:ml-0" // Sidebar handles its own spacing via width interaction if needed, or we adapt layout
        )}
        style={{
          // If sidebar is 'fixed' inside, we might need margin. 
          // But simpler: Sidebar is a flex child? 
          // The current Sidebar component is 'fixed'. We need to align with that or change Sidebar code.
          // Let's assume we will refactor Sidebar to NOT be fixed-to-viewport but simply a block.
          // For now, let's keep Sidebar fixed logic in mind, so we add margin-left.
          marginLeft: isExpanded ? "15rem" : "4rem" // 60 (15rem) or 16 (4rem)
        }}
      >
        {/* Content Scroll Area */}
        <main
          ref={mainRef}
          className={cn(
            "flex-1 overflow-x-hidden",
            isIntelligenceRoute
              ? "overflow-hidden p-0"
              : "overflow-y-auto px-6 pb-24 pt-4 md:pb-8"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
