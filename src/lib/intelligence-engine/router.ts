// ─── Main Engine — Process ──────────────────────────────────────────────

import type { Message, SlashCommand, CardContext, VendorContext, PipelineContext } from "@/types/intelligence";
import { generateBriefing, generateObjectionResponse, generateGhostwriting, generatePitch, generateFollowup } from "./sales-commands";
import { generateFunnelSummary, generateCardAnalysis, generateComparison, generatePlansInfo } from "./analysis";
import { generateMorningBriefing, generateRiskReport, generateGoalProgress, generateCoachingInsights, generateAgenda, generateHelp } from "./proactive-commands";
import { generateFreeResponse, generateErrorMessage } from "./freeform";

export interface ProcessMessageInput {
  text: string;
  command?: SlashCommand;
  card: CardContext | null;
  vendor: VendorContext;
  pipeline: PipelineContext | null;
}

/**
 * Processa a mensagem do vendedor e retorna a resposta da IA.
 * Simula processamento assíncrono com delay artificial para UX.
 */
export async function processMessage(
  input: ProcessMessageInput
): Promise<Message> {
  // Simular tempo de resposta (1-3s para simples, 2-5s para complexo)
  const isComplex = ["/briefing", "/analise", "/funil", "/pitch"].includes(
    input.command ?? ""
  );
  const delay = isComplex
    ? 1500 + Math.random() * 2000
    : 800 + Math.random() * 1200;

  await new Promise((resolve) => setTimeout(resolve, delay));

  // Se há um slash command, usar o handler correspondente
  if (input.command) {
    switch (input.command) {
      case "/briefing":
        if (!input.card)
          return generateErrorMessage("no-card");
        return generateBriefing(input.card);

      case "/objecao":
        return generateObjectionResponse(input.text, input.card);

      case "/mensagem":
        return generateGhostwriting(input.text, input.card);

      case "/pitch":
        if (!input.card)
          return generateErrorMessage("no-card");
        return generatePitch(input.card);

      case "/funil":
        return generateFunnelSummary(input.pipeline);

      case "/analise":
        if (!input.card)
          return generateErrorMessage("no-card");
        return generateCardAnalysis(input.card);

      case "/comparar":
        return generateComparison(input.text || "Concorrente");

      case "/planos":
        return generatePlansInfo();

      case "/followup":
        if (!input.card)
          return generateErrorMessage("no-card");
        return generateFollowup(input.card);

      case "/ajuda":
        return generateHelp();

      case "/resumo":
        return generateMorningBriefing();

      case "/riscos":
        return generateRiskReport();

      case "/meta":
        return generateGoalProgress();

      case "/coaching":
        return generateCoachingInsights();

      case "/agenda":
        return generateAgenda();

      default:
        return generateFreeResponse(input.text, input.card);
    }
  }

  // Sem comando → resposta livre
  return generateFreeResponse(input.text, input.card);
}
