import * as z from "zod";

export const activitySchema = z
  .object({
    type: z.enum([
      "call",
      "email",
      "meeting",
      "visit",
      "task",
      "follow-up",
      "whatsapp",
    ]),
    title: z
      .string()
      .min(6, "O título deve ter pelo menos 6 caracteres")
      .max(120, "O título deve ter no máximo 120 caracteres"),
    date: z.string().min(1, "Data é obrigatória"),
    time: z.string().optional(),
    description: z
      .string()
      .max(2000, "Descrição pode ter no máximo 2000 caracteres")
      .optional(),
    responsible: z.string().optional(),
    // Linking fields
    clientId: z.string().optional(),
    clientName: z.string().optional(),
    contactIds: z.array(z.string()).optional(),
    contactNames: z.array(z.string()).optional(),
    opportunityId: z.string().optional(),
    opportunityTitle: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Time required for call, meeting, whatsapp, email
    const timeRequiredTypes = ["call", "meeting", "whatsapp", "email"];
    if (timeRequiredTypes.includes(data.type) && !data.time) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Horário é obrigatório para este tipo de atividade",
        path: ["time"],
      });
    }

    // Contacts require client
    if (data.contactIds?.length && !data.clientId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Selecione um cliente antes de vincular contatos",
        path: ["contactIds"],
      });
    }

    // Opportunity requires client
    if (data.opportunityId && !data.clientId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Selecione um cliente antes de vincular uma oportunidade",
        path: ["opportunityId"],
      });
    }
  });

export type ActivityFormData = z.infer<typeof activitySchema>;

// Schema with required client (pipeline context)
export const activitySchemaWithRequiredClient = z
  .object({
    type: z.enum([
      "call",
      "email",
      "meeting",
      "visit",
      "task",
      "follow-up",
      "whatsapp",
    ]),
    title: z
      .string()
      .min(6, "O título deve ter pelo menos 6 caracteres")
      .max(120, "O título deve ter no máximo 120 caracteres"),
    date: z.string().min(1, "Data é obrigatória"),
    time: z.string().optional(),
    description: z
      .string()
      .max(2000, "Descrição pode ter no máximo 2000 caracteres")
      .optional(),
    responsible: z.string().optional(),
    clientId: z.string().min(1, "Cliente é obrigatório"),
    clientName: z.string().min(1),
    contactIds: z.array(z.string()).optional(),
    contactNames: z.array(z.string()).optional(),
    opportunityId: z.string().optional(),
    opportunityTitle: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const timeRequiredTypes = ["call", "meeting", "whatsapp", "email"];
    if (timeRequiredTypes.includes(data.type) && !data.time) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Horário é obrigatório para este tipo de atividade",
        path: ["time"],
      });
    }
  });
