
import { z } from "zod";

export const visitSchema = z
    .object({
        type: z.enum(["presencial", "remoto", "outro"]),
        status: z.enum(["agendada", "realizada", "cancelada"]),
        date: z.string().optional(),
        time: z.string().optional(),
        duration: z.string().optional(),

        // Presencial fields
        location: z.string().optional(),
        accessSearch: z.string().optional(),

        // Remote fields
        platform: z.enum(["google-meet", "zoom", "whatsapp", "outro"]).optional(),
        link: z.string().optional(),

        // Other fields
        typeDescription: z.string().optional(),
        details: z.string().optional(),

        // Common fields
        responsibleId: z.string().min(1, "Responsável é obrigatório"),
        participants: z.array(z.string()).optional(),
        objective: z.string().max(500, "Objetivo deve ter no máximo 500 caracteres").optional(),
        result: z.string().optional(),
        outcome: z.enum(["realizada", "no-show", "remarcada"]).optional(),
        cancellationReason: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        // 1) Scheduling logic
        const requiresSchedule = data.status === "agendada";
        if (requiresSchedule) {
            if (!data.date) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Data é obrigatória",
                    path: ["date"],
                });
            }

            if (!data.time) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Hora é obrigatória",
                    path: ["time"],
                });
            }

            if (!data.duration) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Duração é obrigatória",
                    path: ["duration"],
                });
            }
        }

        if (data.status === "agendada" && data.date && data.time) {
            const now = new Date();
            const visitDateTime = new Date(`${data.date}T${data.time}`);
            if (visitDateTime < now) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Data e hora não podem ficar no passado para visitas agendadas",
                    path: ["date"],
                });
            }
        }

        // 2) Cancellation logic
        if (data.status === "cancelada" && !data.cancellationReason?.trim()) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Motivo do cancelamento é obrigatório",
                path: ["cancellationReason"],
            });
        }

        // 3) Type-specific rules
        if (data.type === "presencial") {
            if (!data.location?.trim() || data.location.trim().length < 3) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Local é obrigatório e deve ter ao menos 3 caracteres",
                    path: ["location"],
                });
            }
        }

        if (data.type === "remoto") {
            if (!data.platform) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Plataforma é obrigatória para visita remota",
                    path: ["platform"],
                });
            }

            if (!data.link?.trim()) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Link da reunião é obrigatório",
                    path: ["link"],
                });
            } else {
                try {
                    new URL(data.link);
                } catch {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "Informe um link válido (https://...)",
                        path: ["link"],
                    });
                }
            }
        }

        if (data.type === "outro") {
            if (!data.typeDescription?.trim() || data.typeDescription.trim().length < 3) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Detalhe do tipo é obrigatório (mínimo 3 caracteres)",
                    path: ["typeDescription"],
                });
            }
        }

        // 4) Completed visit rules
        if (data.status === "realizada" && !data.outcome) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Selecione o resultado da visita",
                path: ["outcome"],
            });
        }

        if (data.status === "realizada" && (!data.result?.trim() || data.result.trim().length < 10)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Informe uma nota de resultado com pelo menos 10 caracteres",
                path: ["result"],
            });
        }

        // 5) Responsible is always required (already validated by schema).
    });

export type VisitFormData = z.infer<typeof visitSchema>;
