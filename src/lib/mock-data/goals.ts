import type { Goal } from "@/types";
import { d } from "./helpers";

// ===== Mock Goals =====

export const mockGoals: Goal[] = [
  // Current month goals
  { id: "goal-1", title: "Receita mensal de vendas - Fevereiro", type: "revenue", target: 600000, current: 630000, period: "monthly", startDate: d(2026,2,1), endDate: d(2026,2,28) },
  { id: "goal-2", title: "Oportunidades criadas - Q1 2026", type: "opportunities", target: 30, current: 18, period: "quarterly", startDate: d(2026,1,1), endDate: d(2026,3,31) },
  { id: "goal-3", title: "Taxa de conversão - Fevereiro", type: "conversion", target: 60, current: 61.5, period: "monthly", startDate: d(2026,2,1), endDate: d(2026,2,28) },
  { id: "goal-4", title: "Atividades realizadas - Fevereiro", type: "activities", target: 100, current: 52, period: "monthly", startDate: d(2026,2,1), endDate: d(2026,2,28), userId: "user-4", userName: "Juliana Costa" },
  // Past month goals (completed)
  { id: "goal-5", title: "Receita mensal - Janeiro", type: "revenue", target: 550000, current: 612600, period: "monthly", startDate: d(2026,1,1), endDate: d(2026,1,31) },
  { id: "goal-6", title: "Atividades realizadas - Janeiro", type: "activities", target: 90, current: 95, period: "monthly", startDate: d(2026,1,1), endDate: d(2026,1,31), userId: "user-3", userName: "Lucas Oliveira" },
  { id: "goal-7", title: "Receita mensal - Dezembro", type: "revenue", target: 500000, current: 624000, period: "monthly", startDate: d(2025,12,1), endDate: d(2025,12,31) },
  { id: "goal-8", title: "Receita mensal - Novembro", type: "revenue", target: 480000, current: 564000, period: "monthly", startDate: d(2025,11,1), endDate: d(2025,11,30) },
];
