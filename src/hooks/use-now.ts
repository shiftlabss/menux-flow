"use client";

import { useState, useEffect } from "react";

/**
 * Hook that returns a reactive `Date` instance.
 * Updates automatically at the given interval (default: 60 seconds).
 * Ensures date-dependent logic (overdue, today, SLA risk) stays fresh
 * even if the user keeps the tab open across midnight.
 */
export function useNow(intervalMs = 60_000): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
}
