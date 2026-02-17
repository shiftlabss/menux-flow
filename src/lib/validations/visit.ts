
import { z } from "zod";

export const visitSchema = z
    .object({
        type: z.enum(["presencial", "remoto", "outro"]),
        status: z.enum(["agendada", "realizada", "cancelada"]),
        date: z.string().min(1, "Data é obrigatória"),
        time: z.string().min(1, "Hora é obrigatória"),
        duration: z.string().min(1, "Duração é obrigatória"),

        // Presencial fields
        location: z.string().optional(),
        accessSearch: z.string().optional(),

        // Remote fields
        platform: z.enum(["google-meet", "zoom", "whatsapp", "outro"]).optional(),
        link: z.string().url("Link inválido").optional().or(z.literal("")),
        createLinkLater: z.boolean().optional(),

        // Other fields
        typeDescription: z.string().optional(),
        details: z.string().optional(),

        // Common fields
        responsibleId: z.string().min(1, "Responsável é obrigatório"),
        participants: z.array(z.string()).optional(),
        objective: z.string().optional(),
        alreadyHappened: z.boolean().optional(),
        result: z.string().optional(),
        cancellationReason: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        // 1. Status & Date Logic
        const now = new Date();
        const visitDateTime = new Date(`${data.date}T${data.time}`);

        if (data.status === "agendada" && visitDateTime < now) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Data não pode ser no passado para visitas agendadas",
                path: ["date"],
            });
        }

        if (data.status === "realizada" && visitDateTime > now) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Você marcou como realizada, confirme a data",
                path: ["date"],
            });
        }

        // 2. Cancellation Logic
        if (data.status === "cancelada" && !data.cancellationReason) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Motivo do cancelamento é obrigatório",
                path: ["cancellationReason"],
            });
        }

        // 3. Type-Specific Logic
        if (data.type === "presencial") {
            if (!data.location) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Local é obrigatório para visitas presenciais",
                    path: ["location"],
                });
            }
        }

        if (data.type === "remoto") {
            if (!data.createLinkLater && !data.link && data.platform !== "whatsapp") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Link da reunião é obrigatório",
                    path: ["link"],
                });
            }
        }

        if (data.type === "outro") {
            if (!data.typeDescription) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Descrição do tipo é obrigatória",
                    path: ["typeDescription"],
                });
            }
        }

        // 4. Result Logic
        if ((data.status === "realizada" || data.alreadyHappened) && !data.result) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Resultado é obrigatório para visitas realizadas",
                path: ["result"],
            });
        }
    });

export type VisitFormData = z.infer<typeof visitSchema>;
