import { create } from 'zustand'

export type Period = 'today' | '7d' | '30d' | 'quarter'
export type Context = 'me' | 'team'

interface DashboardState {
  period: Period
  context: Context
  /** Incremented on every filter change to key transition animations */
  filterVersion: number
  setPeriod: (period: Period) => void
  setContext: (context: Context) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  period: 'today',
  context: 'me',
  filterVersion: 0,
  setPeriod: (period) => set((s) => ({ period, filterVersion: s.filterVersion + 1 })),
  setContext: (context) => set((s) => ({ context, filterVersion: s.filterVersion + 1 })),
}))

// ─── Pure utility: convert Period into a date range ────────────────────────

export function getPeriodDateRange(
  period: Period,
  now: Date
): { start: Date; end: Date } {
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23, 59, 59, 999,
  );

  let start: Date;

  switch (period) {
    case "today":
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case "7d":
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      break;
    case "30d":
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
      break;
    case "quarter": {
      const quarterMonth = Math.floor(now.getMonth() / 3) * 3;
      start = new Date(now.getFullYear(), quarterMonth, 1);
      break;
    }
  }

  return { start, end };
}
