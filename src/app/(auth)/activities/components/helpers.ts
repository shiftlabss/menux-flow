// ═══════════════════════════════════════════════════════════════════
// Date & Format Utilities
// ═══════════════════════════════════════════════════════════════════

export function today() {
  return new Date();
}

export function dateOnly(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function parseDate(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDateBR(s: string) {
  const d = parseDate(s);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export function formatDateFullBR(s: string) {
  const d = parseDate(s);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
  });
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function startOfWeek(d: Date) {
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.getFullYear(), d.getMonth(), diff);
}

export function addDays(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function daysBetween(a: string, b: string): number {
  const dateA = parseDate(a);
  const dateB = parseDate(b);
  const diffMs = dateB.getTime() - dateA.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getDelayText(dueDate: string): string {
  const now = dateOnly(today());
  const due = parseDate(dueDate);
  const diffMs = now.getTime() - due.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days <= 0) return "";
  if (days === 1) return "1 dia de atraso";
  if (days < 7) return `${days} dias de atraso`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return "1 semana de atraso";
  if (days < 30) return `${weeks} semanas de atraso`;
  const months = Math.floor(days / 30);
  if (months === 1) return "1 mes de atraso";
  return `${months} meses de atraso`;
}

export function formatTimeBR(time?: string): string {
  if (!time) return "Sem horario definido";
  return time;
}

export function formatDateISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function isToday(dateStr: string): boolean {
  return isSameDay(parseDate(dateStr), dateOnly(today()));
}

// ═══════════════════════════════════════════════════════════════════
// Grouping
// ═══════════════════════════════════════════════════════════════════

import type { Activity } from "@/types";

export interface GroupedActivities {
  overdue: Activity[];
  today: Activity[];
  next7: Activity[];
  future: Activity[];
}

export function groupActivities(activities: Activity[]): GroupedActivities {
  const now = dateOnly(today());
  const in7 = addDays(now, 7);

  const groups: GroupedActivities = {
    overdue: [],
    today: [],
    next7: [],
    future: [],
  };

  for (const a of activities) {
    if (a.status === "completed" || a.status === "cancelled") continue;
    const d = parseDate(a.dueDate);
    if (d < now) {
      groups.overdue.push(a);
    } else if (isSameDay(d, now)) {
      groups.today.push(a);
    } else if (d < in7) {
      groups.next7.push(a);
    } else {
      groups.future.push(a);
    }
  }

  // Sort within groups
  groups.overdue.sort(
    (a, b) => parseDate(a.dueDate).getTime() - parseDate(b.dueDate).getTime()
  );
  groups.today.sort((a, b) => {
    if (!a.dueTime && !b.dueTime) return 0;
    if (!a.dueTime) return 1;
    if (!b.dueTime) return -1;
    return a.dueTime.localeCompare(b.dueTime);
  });
  groups.next7.sort((a, b) => {
    const dateCmp =
      parseDate(a.dueDate).getTime() - parseDate(b.dueDate).getTime();
    if (dateCmp !== 0) return dateCmp;
    if (!a.dueTime && !b.dueTime) return 0;
    if (!a.dueTime) return 1;
    if (!b.dueTime) return -1;
    return a.dueTime.localeCompare(b.dueTime);
  });
  groups.future.sort(
    (a, b) => parseDate(a.dueDate).getTime() - parseDate(b.dueDate).getTime()
  );

  return groups;
}
