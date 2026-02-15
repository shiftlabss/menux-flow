import { NegotiationRound } from "@/types";

// ===== Negotiation Mock Data =====

export const mockNegotiationRounds: NegotiationRound[] = [
  {
    id: "round-1",
    type: "proposal",
    authorId: "user-1",
    authorName: "Rafael Mendes",
    createdAt: "2024-02-10T14:30:00",
    monthlyValue: 1500,
    totalValue: 18000,
    setupValue: 2000,
    termMonths: 12,
    conditions: ["Contrato padrão", "Pagamento mensal"],
    status: "active",
  },
  {
    id: "round-2",
    type: "counter",
    authorId: "client-1",
    authorName: "Cliente",
    createdAt: "2024-02-11T10:00:00",
    monthlyValue: 1200,
    totalValue: 14400,
    setupValue: 0,
    termMonths: 12,
    conditions: ["Isenção de setup", "Desconto na mensalidade"],
    details: "Cliente solicitou remoção da taxa de setup e desconto de 20% na mensalidade.",
    status: "active",
  },
  {
    id: "round-3",
    type: "internal",
    authorId: "user-2",
    authorName: "Camila Ferreira",
    createdAt: "2024-02-11T16:45:00",
    monthlyValue: 1350,
    totalValue: 16200,
    setupValue: 1000,
    termMonths: 12,
    conditions: ["Setup com 50% de desconto", "Mensalidade com 10%"],
    details: "Proposta de meio termo para fechar.",
    status: "active",
  },
];
