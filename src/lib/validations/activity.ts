import * as z from "zod";

export const activitySchema = z
    .object({
        type: z.enum(["call", "email", "meeting", "visit", "task", "follow-up", "whatsapp"]),
        title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
        date: z.string().min(1, "Data é obrigatória"),
        time: z.string().optional(),
        description: z.string().optional(),
        responsible: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.type === "meeting" && !data.time) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Horário é obrigatório para reuniões",
                path: ["time"],
            });
        }
    });

export type ActivityFormData = z.infer<typeof activitySchema>;
