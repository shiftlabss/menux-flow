import type { Activity } from "@/types";

// ═══════════════════════════════════════════════════════════════════
// Date primitives
// ═══════════════════════════════════════════════════════════════════

export const DAY_MS = 24 * 60 * 60 * 1000;

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function parseDateISO(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function startOfWeek(date: Date): Date {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = start.getDay();
  return addDays(start, -day);
}

export function endOfWeek(date: Date): Date {
  const end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = end.getDay();
  return addDays(end, 6 - day);
}

// ═══════════════════════════════════════════════════════════════════
// Formatting
// ═══════════════════════════════════════════════════════════════════

export function formatMonthTitle(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateBR(dateStr: string): string {
  return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

export function formatDateFull(dateStr: string): string {
  return parseDateISO(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

export function formatCompactDateLabel(date: Date): string {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).formatToParts(date);
  const weekday = (parts.find((part) => part.type === "weekday")?.value ?? "")
    .replaceAll(".", "")
    .trim();
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const month = (parts.find((part) => part.type === "month")?.value ?? "")
    .replaceAll(".", "")
    .trim();
  return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${day} ${month}`;
}

export function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// ═══════════════════════════════════════════════════════════════════
// Activity helpers
// ═══════════════════════════════════════════════════════════════════

export function getDelayText(daysOverdue: number): string {
  if (daysOverdue <= 0) return "";
  if (daysOverdue === 1) return "1 dia de atraso";
  if (daysOverdue < 7) return `${daysOverdue} dias de atraso`;
  if (daysOverdue < 30) {
    const weeks = Math.floor(daysOverdue / 7);
    return weeks === 1 ? "1 semana de atraso" : `${weeks} semanas de atraso`;
  }
  const months = Math.floor(daysOverdue / 30);
  return months === 1 ? "1 mês de atraso" : `${months} meses de atraso`;
}

export function isActivityOverdue(activity: Activity, now: Date): boolean {
  if (activity.status === "overdue") return true;
  if (activity.status === "completed" || activity.status === "cancelled") return false;
  return startOfDay(parseDateISO(activity.dueDate)).getTime() < startOfDay(now).getTime();
}

export function isSlaRisk(activity: Activity, now: Date): boolean {
  if (activity.status !== "pending") return false;
  const today = startOfDay(now);
  const tomorrow = addDays(today, 1);
  const due = startOfDay(parseDateISO(activity.dueDate));
  return due.getTime() >= today.getTime() && due.getTime() <= tomorrow.getTime();
}

export function getRelativeTimeLabel(activity: Activity, now: Date): string {
  const dueDate = startOfDay(parseDateISO(activity.dueDate));
  const today = startOfDay(now);
  const diffDays = Math.floor((dueDate.getTime() - today.getTime()) / DAY_MS);

  if (diffDays < 0 || activity.status === "overdue") {
    return getDelayText(Math.max(1, Math.abs(diffDays)));
  }

  if (diffDays === 0) {
    return activity.dueTime ? `Hoje · ${activity.dueTime}` : "Hoje";
  }

  if (diffDays === 1) return "Amanhã";
  if (diffDays <= 7) return `Em ${diffDays} dias`;
  return formatDateFull(activity.dueDate);
}

export function getStatusChip(activity: Activity, now: Date): {
  label: string;
  className: string;
} {
  if (isActivityOverdue(activity, now)) {
    return {
      label: "Atrasada",
      className: "bg-status-danger-light text-status-danger border-status-danger/20",
    };
  }

  const due = startOfDay(parseDateISO(activity.dueDate));
  const today = startOfDay(now);

  if (due.getTime() === today.getTime()) {
    return {
      label: "Hoje",
      className: "bg-status-warning-light text-status-warning border-status-warning/25",
    };
  }

  if (activity.status === "completed") {
    return {
      label: "Concluída",
      className: "bg-status-success-light text-status-success border-status-success/20",
    };
  }

  if (activity.status === "cancelled") {
    return {
      label: "Cancelada",
      className: "bg-zinc-100 text-zinc-500 border-zinc-200",
    };
  }

  return {
    label: "Pendente",
    className: "bg-status-info-light text-status-info border-status-info/20",
  };
}

export function getActivityChecklist(activity: Activity): string[] {
  const base = [
    "Contexto do cliente validado",
    "Objetivo da interação definido",
    "Próxima ação registrada",
  ];

  if (activity.type === "meeting") {
    return [
      "Participantes confirmados",
      "Pauta compartilhada",
      "Follow-up preparado",
    ];
  }

  if (activity.type === "call" || activity.type === "whatsapp") {
    return [
      "Script revisado",
      "Objeções mapeadas",
      "Próximo passo combinado",
    ];
  }

  return base;
}

export function getActivityInsight(activity: Activity, now: Date): {
  message: string;
  nextStep: string;
  risk: string;
} {
  const label = activity.clientName || activity.opportunityTitle || "o cliente";
  const overdue = isActivityOverdue(activity, now);
  const urgency = overdue ? "urgente" : "prioritária";

  return {
    message:
      activity.type === "email"
        ? `Olá! Revendo nossa agenda, gostaria de avançar o próximo passo com ${label}. Podemos alinhar ainda hoje?`
        : activity.type === "meeting"
          ? `Perfeito, vamos alinhar os pontos críticos de ${label} e sair com decisão clara no final da reunião.`
          : `Oi! Passando para mantermos ${label} em ritmo ${urgency}. Você consegue me confirmar o melhor horário para avançarmos?`,
    nextStep:
      activity.type === "task"
        ? "Feche esta tarefa e transforme em contato ativo com data definida."
        : "Registrar compromisso com data/horário e responsável antes de encerrar.",
    risk: overdue
      ? `Se ignorar, ${label} pode perder prioridade e aumentar risco de churn.`
      : `Se ignorar, ${label} perde cadência e pode esfriar o ciclo de decisão.`,
  };
}
