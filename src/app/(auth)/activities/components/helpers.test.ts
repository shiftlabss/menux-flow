import { describe, expect, it } from "vitest";
import type { Activity } from "@/types";
import { getStatusChip } from "./helpers";

function makeActivity(overrides: Partial<Activity> = {}): Activity {
  return {
    id: "activity-1",
    title: "Ligação de follow-up",
    type: "call",
    status: "pending",
    dueDate: "2024-06-15",
    dueTime: "16:00",
    responsibleId: "user-1",
    responsibleName: "Consultor",
    createdAt: "2024-06-10T10:00:00.000Z",
    ...overrides,
  };
}

describe("getStatusChip", () => {
  const now = new Date(2024, 5, 15, 12, 0, 0, 0);

  it("prioriza status concluida mesmo com vencimento hoje", () => {
    const chip = getStatusChip(
      makeActivity({
        status: "completed",
        dueDate: "2024-06-15",
      }),
      now
    );

    expect(chip.label).toBe("Concluída");
  });

  it("prioriza status cancelada mesmo com vencimento hoje", () => {
    const chip = getStatusChip(
      makeActivity({
        status: "cancelled",
        dueDate: "2024-06-15",
      }),
      now
    );

    expect(chip.label).toBe("Cancelada");
  });

  it("retorna hoje para atividade pendente com vencimento hoje", () => {
    const chip = getStatusChip(
      makeActivity({
        status: "pending",
        dueDate: "2024-06-15",
      }),
      now
    );

    expect(chip.label).toBe("Hoje");
  });

  it("retorna atrasada para pendente com prazo passado", () => {
    const chip = getStatusChip(
      makeActivity({
        status: "pending",
        dueDate: "2024-06-14",
      }),
      now
    );

    expect(chip.label).toBe("Atrasada");
  });
});
