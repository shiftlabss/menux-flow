import { PipelineStage } from "@/types";

// ===== Field Type System =====

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "integer"
  | "currency"
  | "percentage"
  | "url"
  | "email"
  | "phone"
  | "date"
  | "time"
  | "datetime"
  | "select"
  | "multiselect"
  | "boolean"
  | "user"
  | "contact"
  | "file";

export interface FieldValidationRules {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  decimalPlaces?: number;
  pattern?: string;
  minItems?: number;
  maxItems?: number;
}

export interface StageField {
  id: string;
  stageId: string;
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  order: number;
  description?: string;
  placeholder?: string;
  helperText?: string;
  options?: { label: string; value: string }[];
  validationRules?: FieldValidationRules;
  isActive: boolean;
}

export type StageFieldValue = string | number | boolean | string[] | null | undefined;

export interface FieldValue {
  opportunityId: string;
  stageId: string;
  fieldId: string;
  value: StageFieldValue;
  updatedAt: string;
  updatedBy: string;
}

export interface StageFieldsResponse {
  stage: { id: string; name: string };
  fields: StageField[];
  values: Record<string, StageFieldValue>;
  requiredProgress: { totalRequired: number; totalCompleted: number };
}

// ===== Field type labels for UI =====

export const fieldTypeLabels: Record<FieldType, string> = {
  text: "Texto curto",
  textarea: "Texto longo",
  number: "Número decimal",
  integer: "Número inteiro",
  currency: "Moeda (R$)",
  percentage: "Porcentagem (%)",
  url: "URL",
  email: "E-mail",
  phone: "Telefone",
  date: "Data",
  time: "Hora",
  datetime: "Data e hora",
  select: "Seleção única",
  multiselect: "Múltipla seleção",
  boolean: "Sim/Não",
  user: "Usuário",
  contact: "Contato",
  file: "Arquivo",
};

export const fieldTypeDescriptions: Record<FieldType, string> = {
  text: "Para nomes, títulos e textos curtos",
  textarea: "Para descrições e observações longas",
  number: "Valores numéricos com decimais",
  integer: "Valores numéricos inteiros exatos",
  currency: "Valores monetários formatados em R$",
  percentage: "Valores em porcentagem (%)",
  url: "Links e endereços de sites",
  email: "Endereços de e-mail válidos",
  phone: "Números de telefone ou WhatsApp",
  date: "Para selecionar uma data específica",
  time: "Para definir um horário",
  datetime: "Data e hora combinadas",
  select: "Escolher uma única opção",
  multiselect: "Escolher múltiplas opções",
  boolean: "Verdadeiro ou Falso (Sim/Não)",
  user: "Vincular a um usuário do sistema",
  contact: "Vincular a um contato salvo",
  file: "Anexar documentos ou imagens",
};

// ===== Backward-compatible config (flat per-stage) =====

export const stageFieldsConfig: Record<PipelineStage, StageField[]> = {
  "lead-in": [
    {
      id: "sf-lead-in-1",
      stageId: "lead-in",
      key: "origem_lead",
      label: "Origem do Lead",
      type: "select",
      required: true,
      order: 0,
      isActive: true,
      options: [
        { label: "Google", value: "google" },
        { label: "Indicação", value: "indicacao" },
        { label: "Instagram", value: "instagram" },
        { label: "Outros", value: "outros" },
      ],
    },
    {
      id: "sf-lead-in-2",
      stageId: "lead-in",
      key: "decisor",
      label: "Nome do Decisor",
      type: "text",
      order: 1,
      isActive: true,
      placeholder: "Quem decide a compra?",
    },
  ],
  "contato-feito": [
    {
      id: "sf-contato-feito-1",
      stageId: "contato-feito",
      key: "interesse",
      label: "Nível de Interesse",
      type: "select",
      order: 0,
      isActive: true,
      options: [
        { label: "Alto", value: "alto" },
        { label: "Médio", value: "medio" },
        { label: "Baixo", value: "baixo" },
      ],
    },
    {
      id: "sf-contato-feito-2",
      stageId: "contato-feito",
      key: "melhor_horario",
      label: "Melhor Horário para Contato",
      type: "text",
      order: 1,
      isActive: true,
      placeholder: "Ex: Manhã, após as 14h...",
    },
    {
      id: "sf-contato-feito-3",
      stageId: "contato-feito",
      key: "dores_cliente",
      label: "Principais Dores",
      type: "textarea",
      order: 2,
      isActive: true,
      placeholder: "Descreva as dificuldades atuais do cliente...",
    },
  ],
  "reuniao-agendada": [
    {
      id: "sf-reuniao-1",
      stageId: "reuniao-agendada",
      key: "data_reuniao",
      label: "Data da Reunião",
      type: "date",
      required: true,
      order: 0,
      isActive: true,
    },
    {
      id: "sf-reuniao-2",
      stageId: "reuniao-agendada",
      key: "pauta",
      label: "Pauta da Reunião",
      type: "textarea",
      order: 1,
      isActive: true,
      placeholder: "O que será discutido?",
    },
    {
      id: "sf-reuniao-3",
      stageId: "reuniao-agendada",
      key: "participantes",
      label: "Participantes Esperados",
      type: "text",
      order: 2,
      isActive: true,
      helperText: "Separe por vírgulas",
    },
  ],
  "proposta-enviada": [
    {
      id: "sf-proposta-1",
      stageId: "proposta-enviada",
      key: "valor_proposta",
      label: "Valor da Proposta (R$)",
      type: "currency",
      required: true,
      order: 0,
      isActive: true,
    },
    {
      id: "sf-proposta-2",
      stageId: "proposta-enviada",
      key: "link_proposta",
      label: "Link da Proposta",
      type: "url",
      order: 1,
      isActive: true,
      placeholder: "URL do documento",
    },
    {
      id: "sf-proposta-3",
      stageId: "proposta-enviada",
      key: "prazo_validade",
      label: "Validade da Proposta",
      type: "date",
      order: 2,
      isActive: true,
    },
  ],
  "negociacao": [
    {
      id: "sf-negociacao-1",
      stageId: "negociacao",
      key: "objecoes",
      label: "Objeções Levantadas",
      type: "textarea",
      order: 0,
      isActive: true,
    },
    {
      id: "sf-negociacao-2",
      stageId: "negociacao",
      key: "desconto_aprovado",
      label: "Desconto Aprovado (%)",
      type: "percentage",
      order: 1,
      isActive: true,
      validationRules: { min: 0, max: 100 },
    },
    {
      id: "sf-negociacao-3",
      stageId: "negociacao",
      key: "concorrentes",
      label: "Concorrentes Envolvidos",
      type: "text",
      order: 2,
      isActive: true,
    },
  ],
  "fechamento": [
    {
      id: "sf-fechamento-1",
      stageId: "fechamento",
      key: "data_assinatura",
      label: "Data de Assinatura",
      type: "date",
      required: true,
      order: 0,
      isActive: true,
    },
    {
      id: "sf-fechamento-2",
      stageId: "fechamento",
      key: "contrato_anexado",
      label: "Contrato Assinado",
      type: "file",
      order: 1,
      isActive: true,
      helperText: "PDF ou Imagem",
    },
    {
      id: "sf-fechamento-3",
      stageId: "fechamento",
      key: "obs_finais",
      label: "Observações Finais",
      type: "textarea",
      order: 2,
      isActive: true,
    },
  ],
};

// ===== Mock field values per opportunity =====

export const mockFieldValues: Record<string, Record<string, Record<string, StageFieldValue>>> = {
  // opportunityId -> stageId -> fieldId -> value
};

// ===== Helper: check if a field value is empty =====

export function isFieldValueEmpty(value: StageFieldValue): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

// ===== Helper: validate a field value against its definition =====

export function validateFieldValue(
  field: StageField,
  value: StageFieldValue,
): string | null {
  if (field.required && isFieldValueEmpty(value)) {
    return "Preencha este campo para avançar etapa.";
  }

  if (isFieldValueEmpty(value)) return null;

  const rules = field.validationRules;
  if (!rules) return null;

  if (typeof value === "string") {
    if (rules.minLength && value.length < rules.minLength) {
      return `Mínimo ${rules.minLength} caracteres.`;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Máximo ${rules.maxLength} caracteres.`;
    }
  }

  if (typeof value === "number") {
    if (rules.min !== undefined && value < rules.min) {
      return `Valor mínimo: ${rules.min}.`;
    }
    if (rules.max !== undefined && value > rules.max) {
      return `Valor máximo: ${rules.max}.`;
    }
  }

  if (field.type === "url" && typeof value === "string") {
    try {
      new URL(value);
    } catch {
      return "URL inválida.";
    }
  }

  if (field.type === "email" && typeof value === "string") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "E-mail inválido.";
    }
  }

  if ((field.type === "select" || field.type === "multiselect") && field.options) {
    const validValues = field.options.map((o) => o.value);
    if (typeof value === "string" && !validValues.includes(value)) {
      return "Opção inválida.";
    }
    if (Array.isArray(value)) {
      const invalid = value.filter((v) => !validValues.includes(v));
      if (invalid.length > 0) return "Opção(ões) inválida(s).";
      if (rules?.minItems && value.length < rules.minItems) {
        return `Selecione no mínimo ${rules.minItems} item(ns).`;
      }
      if (rules?.maxItems && value.length > rules.maxItems) {
        return `Selecione no máximo ${rules.maxItems} item(ns).`;
      }
    }
  }

  return null;
}
