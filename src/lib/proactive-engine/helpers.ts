// ============================================================================
// Proactive Engine — Helpers
// ============================================================================

import type { PipelineStageConfig } from "@/stores/pipeline-store";
import { SHOW_ALL_MOCK_DATA } from "@/lib/mock-scope";

export function daysBetween(dateA: string | Date, dateB: string | Date): number {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

export function hoursBetween(dateA: string | Date, dateB: string | Date): number {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return (b.getTime() - a.getTime()) / (1000 * 60 * 60);
}

export function isToday(date: string): boolean {
  const d = new Date(date);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
}

export function relativeTime(date: string): string {
  const days = daysBetween(date, new Date().toISOString());
  if (days === 0) return "hoje";
  if (days === 1) return "ontem";
  return `ha ${days} dias`;
}

export function getStageName(
  stageId: string,
  pipelines: { stages: PipelineStageConfig[] }[]
): string {
  for (const p of pipelines) {
    const found = p.stages.find((s) => s.id === stageId);
    if (found) return found.name;
  }
  return stageId;
}

export function filterByUser<T extends { responsibleId: string }>(
  items: T[],
  userId: string,
  userRole: string
): T[] {
  if (SHOW_ALL_MOCK_DATA) return items;
  if (userRole === "master" || userRole === "admin") return items;
  return items.filter((i) => i.responsibleId === userId);
}
