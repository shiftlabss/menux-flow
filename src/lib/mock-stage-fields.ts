import { PipelineStage } from "@/types";

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "currency"
  | "date"
  | "select"
  | "multiselect"
  | "boolean"
  | "file";

export interface StageField {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  options?: { label: string; value: string }[];
}

export const stageFieldsConfig: Record<PipelineStage, StageField[]> = {
  "lead-in": [
    {
      id: "origem_lead",
      label: "Origem do Lead",
      type: "select",
      required: true,
      options: [
        { label: "Google", value: "google" },
        { label: "Indicação", value: "indicacao" },
        { label: "Instagram", value: "instagram" },
        { label: "Outros", value: "outros" },
      ],
    },
    {
      id: "decisor",
      label: "Nome do Decisor",
      type: "text",
      placeholder: "Quem decide a compra?",
    },
  ],
  "contato-feito": [
    {
      id: "interesse",
      label: "Nível de Interesse",
      type: "select",
      options: [
        { label: "Alto", value: "alto" },
        { label: "Médio", value: "medio" },
        { label: "Baixo", value: "baixo" },
      ],
    },
    {
      id: "melhor_horario",
      label: "Melhor Horário para Contato",
      type: "text",
      placeholder: "Ex: Manhã, após as 14h...",
    },
    {
      id: "dores_cliente",
      label: "Principais Dores",
      type: "textarea",
      placeholder: "Descreva as dificuldades atuais do cliente...",
    },
  ],
  "reuniao-agendada": [
    {
      id: "data_reuniao",
      label: "Data da Reunião",
      type: "date",
      required: true,
    },
    {
      id: "pauta",
      label: "Pauta da Reunião",
      type: "textarea",
      placeholder: "O que será discutido?",
    },
    {
      id: "participantes",
      label: "Participantes Esperados",
      type: "text",
      helperText: "Separe por vírgulas",
    },
  ],
  "proposta-enviada": [
    {
      id: "valor_proposta",
      label: "Valor da Proposta (R$)",
      type: "currency",
      required: true,
    },
    {
      id: "link_proposta",
      label: "Link da Proposta",
      type: "text",
      placeholder: "URL do documento",
    },
    {
      id: "prazo_validade",
      label: "Validade da Proposta",
      type: "date",
    },
  ],
  "negociacao": [
    {
      id: "objecoes",
      label: "Objeções Levantadas",
      type: "textarea",
    },
    {
      id: "desconto_aprovado",
      label: "Desconto Aprovado (%)",
      type: "number",
    },
    {
      id: "concorrentes",
      label: "Concorrentes Envolvidos",
      type: "text",
    },
  ],
  "fechamento": [
    {
      id: "data_assinatura",
      label: "Data de Assinatura",
      type: "date",
      required: true,
    },
    {
      id: "contrato_anexado",
      label: "Contrato Assinado",
      type: "file",
      helperText: "PDF ou Imagem",
    },
    {
      id: "obs_finais",
      label: "Observações Finais",
      type: "textarea",
    },
  ],
};
