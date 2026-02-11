import {
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  RotateCcw,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";
import type { ActivityType, ActivityStatus } from "@/types";

// ═══════════════════════════════════════════════════════════════════
// Type Config
// ═══════════════════════════════════════════════════════════════════

export const typeIconComponents: Record<ActivityType, typeof Phone> = {
  call: Phone,
  email: Mail,
  meeting: Calendar,
  visit: MapPin,
  task: CheckSquare,
  "follow-up": RotateCcw,
  whatsapp: MessageCircle,
};

export const typeLabels: Record<ActivityType, string> = {
  call: "Ligacao",
  email: "E-mail",
  meeting: "Reuniao",
  visit: "Visita",
  task: "Tarefa",
  "follow-up": "Follow-up",
  whatsapp: "WhatsApp",
};

export const typeLabelsPt: Record<ActivityType, string> = {
  call: "Ligacoes",
  email: "E-mails",
  meeting: "Reunioes",
  visit: "Visitas",
  task: "Tarefas",
  "follow-up": "Follow-ups",
  whatsapp: "WhatsApp",
};

export const typeColors: Record<ActivityType, { bg: string; text: string }> = {
  call: { bg: "bg-blue-100", text: "text-blue-600" },
  email: { bg: "bg-amber-100", text: "text-amber-600" },
  meeting: { bg: "bg-purple-100", text: "text-purple-600" },
  visit: { bg: "bg-indigo-100", text: "text-indigo-600" },
  task: { bg: "bg-emerald-100", text: "text-emerald-600" },
  "follow-up": { bg: "bg-orange-100", text: "text-orange-600" },
  whatsapp: { bg: "bg-green-100", text: "text-green-600" },
};

export const typeDotColors: Record<ActivityType, string> = {
  call: "bg-blue-500",
  email: "bg-amber-500",
  meeting: "bg-purple-500",
  visit: "bg-indigo-500",
  task: "bg-emerald-500",
  "follow-up": "bg-orange-500",
  whatsapp: "bg-green-500",
};

export const allActivityTypes: ActivityType[] = [
  "call",
  "email",
  "meeting",
  "visit",
  "task",
  "follow-up",
  "whatsapp",
];

// ═══════════════════════════════════════════════════════════════════
// Status Config
// ═══════════════════════════════════════════════════════════════════

export const statusIconComponents: Record<ActivityStatus, typeof Clock> = {
  pending: Clock,
  completed: CheckCircle2,
  overdue: AlertCircle,
  cancelled: XCircle,
};

export const statusLabels: Record<ActivityStatus, string> = {
  pending: "Pendente",
  completed: "Concluida",
  overdue: "Atrasada",
  cancelled: "Cancelada",
};

export const statusColors: Record<
  ActivityStatus,
  { color: string; dotColor: string; bgColor: string }
> = {
  pending: {
    color: "text-status-info",
    dotColor: "bg-status-info",
    bgColor: "bg-status-info-light",
  },
  completed: {
    color: "text-status-success",
    dotColor: "bg-status-success",
    bgColor: "bg-status-success-light",
  },
  overdue: {
    color: "text-status-danger",
    dotColor: "bg-status-danger",
    bgColor: "bg-status-danger-light",
  },
  cancelled: {
    color: "text-zinc-400",
    dotColor: "bg-zinc-400",
    bgColor: "bg-zinc-100",
  },
};
