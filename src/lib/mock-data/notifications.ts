import type { Notification, DashboardMetrics } from "@/types";

// ===== Mock Notifications =====

export const mockNotifications: Notification[] = [
  { id: "notif-1", type: "sla-warning", title: "SLA próximo do limite", message: "A oportunidade 'Bebidas importadas - Wine Bar Sommelier' está há 48h no estágio 'Proposta Enviada'.", isRead: false, createdAt: "2026-02-08T08:30:00", link: "/pipes?card=opp-o04" },
  { id: "notif-2", type: "activity-due", title: "Atividade atrasada", message: "A ligação para Delivery Gourmet está atrasada desde 05/02.", isRead: false, createdAt: "2026-02-08T07:00:00", link: "/activities?id=act-7" },
  { id: "notif-3", type: "opportunity-won", title: "Oportunidade ganha!", message: "Parabéns! A oportunidade 'Carnes premium - Restaurante Paris Bistro' foi marcada como ganha.", isRead: true, createdAt: "2026-02-07T16:45:00", link: "/pipes" },
  { id: "notif-4", type: "client-health-drop", title: "Saúde do cliente em alerta", message: "O Restaurante Verde Vida caiu para saúde 'crítico'. Última interação há 42 dias.", isRead: false, createdAt: "2026-02-07T10:00:00", link: "/clients?id=client-8" },
  { id: "notif-5", type: "goal-achieved", title: "Meta atingida!", message: "A equipe atingiu 100% da meta de receita em janeiro/2026.", isRead: true, createdAt: "2026-02-05T17:30:00", link: "/dashboard" },
  { id: "notif-6", type: "mention", title: "Você foi mencionado", message: "Camila Ferreira mencionou você em um comentário na oportunidade 'Bebidas - Beach Club Maré Alta'.", isRead: false, createdAt: "2026-02-07T14:20:00", link: "/pipes?card=opp-o10" },
  { id: "notif-7", type: "system", title: "Novo cliente em onboarding", message: "5 novos clientes entraram em onboarding esta semana.", isRead: false, createdAt: "2026-02-08T06:00:00", link: "/clients" },
  { id: "notif-8", type: "sla-breach", title: "SLA estourado", message: "A oportunidade 'Embalagens sustentáveis - Green Food Delivery' ultrapassou o SLA do estágio 'Fechamento'.", isRead: true, createdAt: "2026-02-06T09:15:00", link: "/pipes?card=opp-o06" },
  { id: "notif-9", type: "activity-due", title: "Atividade atrasada", message: "Follow-up pós-venda com Restaurante Verde Vida está atrasado desde 28/01.", isRead: false, createdAt: "2026-02-06T07:00:00", link: "/activities?id=act-11" },
  { id: "notif-10", type: "opportunity-won", title: "Oportunidade ganha!", message: "A oportunidade 'Embalagens - Dark Kitchen Central' foi convertida!", isRead: true, createdAt: "2026-02-08T10:00:00", link: "/pipes" },
];

// ===== Mock Dashboard Metrics =====

export const mockDashboardMetrics: DashboardMetrics = {
  totalOpportunities: 65,
  totalValue: 5448000,
  conversionRate: 61.5,
  averageTicket: 136200,
  activitiesDue: 10,
  slaBreaches: 2,
  newLeadsThisMonth: 10,
  wonThisMonth: 6,
};
