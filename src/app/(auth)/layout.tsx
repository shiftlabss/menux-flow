import { AppShell } from "@/components/layout/app-shell";
import { GlobalDrawers } from "@/components/shared/global-drawers";
import { GlobalSearch } from "@/components/shared/global-search";
import { MobileBottomNav } from "@/components/shared/mobile-bottom-nav";
import { IntelligenceProvider } from "@/components/intelligence/intelligence-provider";
import { RouteTransition } from "@/components/layout/route-transition";
import { ErrorBoundary } from "@/components/shared/error-boundary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary name="auth-layout">
      <AppShell>
        <RouteTransition>
          <ErrorBoundary name="page-content">{children}</ErrorBoundary>
        </RouteTransition>
        <GlobalDrawers />
        <GlobalSearch />
        <MobileBottomNav />
        <ErrorBoundary name="intelligence-panel">
          <IntelligenceProvider />
        </ErrorBoundary>
      </AppShell>
    </ErrorBoundary>
  );
}
