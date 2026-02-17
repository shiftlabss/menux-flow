import * as z from "zod";

export const activitySchema = z
    .object({
        type: z.enum(["call", "email", "meeting", "task", "whatsapp"]),
        title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
        date: z.string().min(1, "Data é obrigatória"),
        time: z.string().min(1, "Hora é obrigatória"),
        duration: z.string().min(1, "Duração é obrigatória"),
        description: z.string().optional(),
        priority: z.enum(["low", "medium", "high"]),
        responsible: z.string().optional(), // Mocked for now
    })
    .superRefine((data, ctx) => {
        // Exemplo de validação condicional futura (ex: link de reunião se for meeting online)
        // Por enquanto, validações básicas são suficientes
    });

export type ActivityFormData = z.infer<typeof activitySchema>;
