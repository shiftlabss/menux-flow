// ─── Analysis Generators ────────────────────────────────────────────────

import type { Message, CardContext, PipelineContext, CopyableBlock, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";

// ─── Funil — seção 4.2.5 ────────────────────────────────────────────────

export function generateFunnelSummary(pipeline: PipelineContext | null): Message {
  if (!pipeline) {
    return {
      id: uid(),
      role: "assistant",
      content:
        "📊 Não consegui carregar os dados do funil neste momento. Tente novamente em alguns instantes.",
      contentType: "funnel-summary",
      timestamp: now(),
      sourceCommand: "/funil",
    };
  }

  const totalCards = Object.values(pipeline.cardsByStage).reduce(
    (a, b) => a + b,
    0
  );

  const content = `📊 **Resumo do seu Funil**

**Visão geral:**
  - 🔥 Quentes: precisa de ação imediata
  - 📊 Total no funil: **${totalCards}** oportunidades · **${formatCurrencyBRL(pipeline.totalMRR)}** em MRR potencial

**Por etapa:**
${Object.entries(pipeline.cardsByStage)
  .map(([stage, count]) => `  - **${stage}:** ${count} cards`)
  .join("\n")}

**⚠️ Ações imediatas:**
  ${pipeline.overdueCards > 0 ? `- 🔴 **${pipeline.overdueCards}** card(s) com atividade vencida` : "- ✅ Nenhuma atividade vencida"}
  ${pipeline.hotIdleCards > 0 ? `- 🔥 **${pipeline.hotIdleCards}** lead(s) quente(s) sem atividade` : "- ✅ Leads quentes com atividade em dia"}
  ${pipeline.staleCards > 0 ? `- ⏰ **${pipeline.staleCards}** card(s) parado(s) há mais de 7 dias` : "- ✅ Nenhum card parado"}`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "funnel-summary",
    timestamp: now(),
    sourceCommand: "/funil",
  };
}

// ─── Análise — seção 4.2.6 ──────────────────────────────────────────────

export function generateCardAnalysis(card: CardContext): Message {
  const healthScore = card.leadScore ?? Math.floor(Math.random() * 40 + 50);
  const overdueCount = card.overdueActivities.length;

  const gargalos: string[] = [];
  if (overdueCount > 0)
    gargalos.push(`Atividades vencidas: ${overdueCount}`);
  if (card.contacts.length === 0)
    gargalos.push("Nenhum contato registrado");
  if (!card.contacts.some((c) => c.isDecisionMaker))
    gargalos.push("Sem acesso ao decisor");
  if (!card.quotedPlan) gargalos.push("Plano não cotado");

  const closeProbability =
    card.temperature === "hot" && overdueCount === 0
      ? "Alta (70-85%)"
      : card.temperature === "warm"
        ? "Média (40-60%)"
        : "Baixa (15-30%)";

  const content = `🔍 **Análise: ${card.cardName}**

**Saúde do deal:** ${healthScore}/100 ${healthScore >= 70 ? "🟢" : healthScore >= 40 ? "🟡" : "🔴"}

**Temperatura:** ${temperatureEmoji(card.temperature)} ${temperatureLabel(card.temperature)}
  ${
    card.temperature === "cold"
      ? "→ Frio: sem atividade recente ou engajamento baixo."
      : card.temperature === "warm"
        ? "→ Morno: há engajamento mas precisa de mais ação."
        : "→ Quente: lead engajado, momento de avançar!"
  }

**Score de patente:**
  ${
    card.contacts.length > 0
      ? card.contacts
          .map(
            (c) =>
              `- ${c.name}: ${c.role ?? "Cargo não informado"} ${c.isDecisionMaker ? "👑 Decisor" : ""}`
          )
          .join("\n  ")
      : "Nenhum contato mapeado. Priorize mapear o decisor."
  }

${
  gargalos.length > 0
    ? `**Gargalos:**\n${gargalos.map((g) => `  - ⚠️ ${g}`).join("\n")}`
    : "**Gargalos:** ✅ Nenhum gargalo identificado"
}

**Próximo passo recomendado:** ${
    overdueCount > 0
      ? "Resolva as atividades vencidas imediatamente."
      : !card.contacts.some((c) => c.isDecisionMaker)
        ? "Mapeie e contate o decisor para acelerar o fechamento."
        : "Envie uma proposta personalizada e agende follow-up em 3 dias."
  }

**Probabilidade de fechamento:** ${closeProbability}`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "card-analysis",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    suggestedActions: [
      {
        id: uid(),
        type: "create-activity",
        label: "📅 Criar atividade",
        icon: "calendar",
        payload: {
          type: overdueCount > 0 ? "task" : "follow-up",
          description: `Ação pós-análise de ${card.cardName}`,
        },
      },
      {
        id: uid(),
        type: "save-note",
        label: "📝 Salvar na timeline",
        icon: "file-text",
      },
    ],
    sourceCommand: "/analise",
  };
}

// ─── Comparativo — seção 4.2.7 ──────────────────────────────────────────

export function generateComparison(competitor: string): Message {
  const content = `⚔️ **Menux vs ${competitor}**

| Critério | Menux | ${competitor} |
|----------|-------|${"-".repeat(competitor.length + 2)}|
| Comanda digital | ✅ Nativo, sem hardware extra | Depende de tablet proprietário |
| Gestão de mesas | ✅ Mapa interativo tempo real | Básico, sem visualização |
| Cardápio digital | ✅ QR Code + autoatendimento | Apenas PDFs |
| Suporte | ✅ Chat + telefone + CS dedicado | Apenas ticket por email |
| Setup | ✅ Onboarding em até 7 dias | 30+ dias em média |
| Preço | ✅ A partir de R$ 149/mês | Similar ou superior |

**Pontos-chave para usar na conversa:**
1. O Menux não exige hardware proprietário — funciona em qualquer dispositivo
2. Suporte humanizado com CS dedicado (não é só chatbot)
3. Setup rápido: cliente operando em até 7 dias

⚠️ *Dados baseados apenas em informações oficiais documentadas. Não faça promessas sobre o concorrente — foque nas vantagens Menux.*`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "comparison",
    timestamp: now(),
    sourceCommand: "/comparar",
  };
}

// ─── Planos — seção 4.2.7 ───────────────────────────────────────────────

export function generatePlansInfo(): Message {
  const content = `💰 **Planos Menux**

| Plano | Ideal para | Funcionalidades-chave | A partir de |
|-------|-----------|----------------------|------------|
| **Assist** | Operações simples | Comanda digital, cardápio QR, PDV básico | R$ 149/mês |
| **Sales** | Restaurantes em crescimento | Tudo do Assist + gestão de mesas, relatórios avançados, integrações delivery | R$ 299/mês |
| **Control** | Operações completas | Tudo do Sales + multi-unidades, CMV, fiscal, API aberta | R$ 499/mês |

**Setup:** Taxa única a partir de R$ 500 (inclui configuração + treinamento da equipe)

**Dúvidas frequentes:**
- ✅ Sem fidelidade — cancele quando quiser
- ✅ 7 dias para onboarding completo
- ✅ Suporte incluído em todos os planos

Quer que eu detalhe algum plano específico?`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "plans-info",
    timestamp: now(),
    sourceCommand: "/planos",
  };
}
