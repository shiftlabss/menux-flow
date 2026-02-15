// ─── Sales Command Handlers ─────────────────────────────────────────────

import type { Message, CardContext, CopyableBlock, SuggestedAction } from "@/types/intelligence";
import { INTELLIGENCE_LIMITS } from "@/types/intelligence";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { uid, now, buildContextBadge, temperatureEmoji, temperatureLabel } from "./helpers";

// ─── Briefing — seção 4.2.1 ─────────────────────────────────────────────

export function generateBriefing(card: CardContext): Message {
  const overdueCount = card.overdueActivities.length;
  const contactList = card.contacts.length
    ? card.contacts
        .map(
          (c) =>
            `  - **${c.name}** ${c.role ? `(${c.role})` : ""} ${c.isDecisionMaker ? "👑 Decisor" : ""}`
        )
        .join("\n")
    : "  - Nenhum contato registrado";

  const riskItems: string[] = [];
  if (overdueCount > 0)
    riskItems.push(`⚠️ ${overdueCount} atividade(s) vencida(s)`);
  if (card.temperature === "cold")
    riskItems.push("❄️ Lead frio — pode estar esfriando");
  if (card.registeredObjections.length > 0)
    riskItems.push(
      `🛡️ ${card.registeredObjections.length} objeção(ões) registrada(s)`
    );

  const content = `📋 **Briefing: ${card.cardName}**

**Contexto rápido:**
  - Etapa: **${card.stageLabel}** · ${temperatureEmoji(card.temperature)} ${temperatureLabel(card.temperature)}
  ${card.cnpj ? `- CNPJ: ${card.cnpj}` : ""}
  ${card.tags.length ? `- Tags: ${card.tags.join(", ")}` : ""}

**Contatos:**
${contactList}

**Valor:**
  ${card.quotedPlan ? `- Plano cotado: **${card.quotedPlan}**` : "- Plano: não cotado ainda"}
  ${card.setupValue ? `- Setup: ${formatCurrencyBRL(card.setupValue)}` : ""}
  ${card.mrrValue ? `- MRR: ${formatCurrencyBRL(card.mrrValue)}` : ""}

${
  card.timelineNotes.length > 0
    ? `**Últimas interações:**\n${card.timelineNotes
        .slice(0, 5)
        .map((n, i) => `  ${i + 1}. ${n}`)
        .join("\n")}`
    : "**Histórico:** Sem notas registradas"
}

${
  riskItems.length > 0
    ? `**Riscos:**\n${riskItems.map((r) => `  ${r}`).join("\n")}`
    : "**Riscos:** ✅ Nenhum risco identificado"
}

**Próximo passo sugerido:** ${
    overdueCount > 0
      ? "Priorize as atividades vencidas antes de avançar."
      : card.temperature === "hot"
        ? "Lead quente! Agende uma reunião o mais rápido possível."
        : "Faça um follow-up personalizado para manter o engajamento."
  }`;

  const suggestedActions: SuggestedAction[] = [
    {
      id: uid(),
      type: "create-activity",
      label: "📅 Criar atividade",
      icon: "calendar",
      payload: {
        type: "follow-up",
        description: `Follow-up do briefing de ${card.cardName}`,
      },
    },
    {
      id: uid(),
      type: "save-note",
      label: "📝 Salvar na timeline",
      icon: "file-text",
    },
  ];

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "briefing",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    suggestedActions,
    sourceCommand: "/briefing",
  };
}

// ─── Objeção — seção 4.2.2 ──────────────────────────────────────────────

export function generateObjectionResponse(
  objection: string,
  card: CardContext | null
): Message {
  // Classificar a objeção automaticamente
  const objLower = objection.toLowerCase();
  let category = "Geral";
  if (objLower.includes("preço") || objLower.includes("caro") || objLower.includes("custo"))
    category = "Preço";
  else if (objLower.includes("concorrent") || objLower.includes("outro sistema"))
    category = "Concorrente";
  else if (objLower.includes("momento") || objLower.includes("agora não") || objLower.includes("depois"))
    category = "Timing";
  else if (objLower.includes("preciso") || objLower.includes("necessidade"))
    category = "Falta de necessidade";
  else if (objLower.includes("confia") || objLower.includes("garantia"))
    category = "Desconfiança";
  else if (objLower.includes("técnic") || objLower.includes("integra"))
    category = "Técnica";

  const cardContext = card
    ? `\n\n💡 *Contexto de ${card.cardName}: ${card.stageLabel} · ${temperatureEmoji(card.temperature)}*`
    : "";

  const whatsappResponse =
    category === "Preço"
      ? `Entendo a preocupação com investimento! O legal é que o retorno vem rápido: clientes como você geralmente recuperam o valor em 2-3 meses. Posso te mostrar como?`
      : category === "Timing"
        ? `Faz total sentido! Só pra te ajudar a planejar: quando seria o melhor momento pra gente retomar? Assim garanto que você não perde as condições atuais.`
        : `Ótimo ponto! Muitos clientes tinham a mesma dúvida. Posso te mostrar como resolvemos isso na prática?`;

  const content = `🛡️ **Análise da objeção**

**Categoria:** ${category}
**Objeção recebida:** "${objection}"${cardContext}

**Contra-argumento:**
${
  category === "Preço"
    ? "Foque no ROI, não no custo. O Menux se paga em 2-3 meses com ganho de eficiência operacional. Destaque o impacto financeiro de NÃO ter o sistema."
    : category === "Timing"
      ? "Respeite o momento, mas crie urgência suave. Pergunte o que acontece se continuarem sem solução até lá. Plante a semente de que resolver antes gera vantagem."
      : category === "Concorrente"
        ? "Não fale mal do concorrente. Foque nas diferenças de entrega, suporte e resultados comprovados do Menux. Peça para compararem funcionalidades lado a lado."
        : "Valide a preocupação e redirecione com uma pergunta que traga o lead de volta ao valor."
}

**Pergunta de avanço:**
"${
    category === "Preço"
      ? "Se eu te mostrasse que o investimento se paga em 3 meses, faria sentido avançarmos?"
      : "O que precisaria acontecer para você se sentir seguro(a) pra avançar?"
  }"`;

  const copyableBlocks: CopyableBlock[] = [
    {
      id: uid(),
      content: whatsappResponse,
      channel: "whatsapp",
      charLimit: INTELLIGENCE_LIMITS.WHATSAPP_CHAR_LIMIT,
      label: "Mensagem WhatsApp",
    },
  ];

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "objection-response",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    copyableBlocks,
    sourceCommand: "/objecao",
  };
}

// ─── Ghostwriting — seção 4.2.3 ─────────────────────────────────────────

export function generateGhostwriting(
  input: string,
  card: CardContext | null
): Message {
  const inputLower = input.toLowerCase();
  let channel: "whatsapp" | "email" | "call" = "whatsapp";
  if (inputLower.includes("email")) channel = "email";
  else if (inputLower.includes("ligação") || inputLower.includes("call"))
    channel = "call";

  const clientName = card?.cardName ?? "cliente";
  const contactName = card?.contacts?.[0]?.name ?? "";

  const copyableBlocks: CopyableBlock[] = [];

  if (channel === "whatsapp") {
    const msg = contactName
      ? `Oi ${contactName}! Tudo bem? Aqui é da Menux. Vi que você demonstrou interesse no nosso sistema. Teria uns minutinhos pra gente bater um papo sobre como otimizar a operação aí? 😊`
      : `Olá! Aqui é da Menux. Gostaria de conversar sobre como podemos ajudar a otimizar a operação do seu restaurante. Teria uns minutinhos? 😊`;
    copyableBlocks.push({
      id: uid(),
      content: msg,
      channel: "whatsapp",
      charLimit: INTELLIGENCE_LIMITS.WHATSAPP_CHAR_LIMIT,
      label: "Mensagem WhatsApp",
    });
  } else if (channel === "email") {
    copyableBlocks.push(
      {
        id: uid(),
        content: `Otimize a operação do ${clientName} com a Menux`,
        channel: "email",
        label: "Assunto",
      },
      {
        id: uid(),
        content: `${contactName ? `Olá ${contactName},` : "Olá,"}\n\nEspero que esteja tudo bem! Sou da Menux e gostaria de mostrar como nosso sistema pode transformar a gestão do seu restaurante.\n\nPodemos agendar uma conversa rápida de 15 minutos esta semana?\n\nAbraço!`,
        channel: "email",
        charLimit: INTELLIGENCE_LIMITS.EMAIL_BODY_CHAR_LIMIT,
        label: "Corpo do email",
      }
    );
  } else {
    copyableBlocks.push({
      id: uid(),
      content: `• Abertura: Apresentar-se e confirmar se é bom momento\n• Contexto: Mencionar como conhecemos o restaurante\n• Dor: Perguntar sobre principais desafios da operação\n• Valor: Conectar dores com soluções Menux\n• Próximo passo: Propor demonstração ou reunião`,
      channel: "call",
      label: "Roteiro de ligação",
    });
  }

  const content = `💬 **Mensagem gerada para ${channel === "whatsapp" ? "WhatsApp" : channel === "email" ? "Email" : "Ligação"}**${card ? `\n\n📋 *Baseado em: ${card.cardName}*` : ""}`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "ghostwriting",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    copyableBlocks,
    sourceCommand: "/mensagem",
  };
}

// ─── Pitch — seção 4.2.4 ────────────────────────────────────────────────

export function generatePitch(card: CardContext): Message {
  const content = `🎯 **Pitch Personalizado: ${card.cardName}**

**Perfil:** ${card.stageLabel} · ${temperatureEmoji(card.temperature)} ${temperatureLabel(card.temperature)}${card.tags.length ? ` · ${card.tags.join(", ")}` : ""}

**Ponto de valor 1 — Eficiência operacional:**
  - 🔴 Dor: Perda de tempo com processos manuais no salão
  - ✅ Menux: Automação completa de comanda digital e gestão de mesas
  - 📊 Case: Restaurantes similares reduziram 40% do tempo de atendimento

**Ponto de valor 2 — Controle financeiro:**
  - 🔴 Dor: Falta de visibilidade sobre custos e margem por prato
  - ✅ Menux: Dashboard em tempo real com CMV, ticket médio e faturamento
  - 📊 Case: Aumento de 25% na margem após 3 meses de uso

**Ponto de valor 3 — Experiência do cliente:**
  - 🔴 Dor: Filas, erros de pedido, demora no atendimento
  - ✅ Menux: Cardápio digital + autoatendimento + integração com delivery

**Pergunta de abertura:** "Qual o maior gargalo da operação hoje — atendimento, controle financeiro ou gestão do cardápio?"

**Frase de fechamento:** "Com base no que conversamos, faz sentido agendarmos uma demonstração personalizada para a semana que vem?"`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "pitch",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    suggestedActions: [
      {
        id: uid(),
        type: "create-activity",
        label: "📅 Agendar demonstração",
        icon: "calendar",
        payload: { type: "meeting", description: `Demo ${card.cardName}` },
      },
    ],
    sourceCommand: "/pitch",
  };
}

// ─── Follow-up — seção 4.2 ──────────────────────────────────────────────

export function generateFollowup(card: CardContext): Message {
  const contactName = card.contacts?.[0]?.name ?? "";
  const lastNote =
    card.timelineNotes.length > 0
      ? card.timelineNotes[0]
      : "sem interação recente";

  const whatsappMsg = contactName
    ? `Oi ${contactName}! Tudo bem? Estou passando pra retomar nossa conversa sobre o Menux. Vi que ficou de analisar internamente — teve alguma novidade? Fico à disposição! 😊`
    : `Olá! Passando pra retomar nossa conversa sobre o Menux. Conseguiu avaliar as informações que enviamos? Estou à disposição pra qualquer dúvida!`;

  const content = `🔄 **Follow-up: ${card.cardName}**

📋 *Última interação: ${lastNote}*

**Estratégia:** Retomada gentil com abertura para atualização do lead.`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "followup",
    timestamp: now(),
    contextBadge: buildContextBadge(card),
    copyableBlocks: [
      {
        id: uid(),
        content: whatsappMsg,
        channel: "whatsapp",
        charLimit: INTELLIGENCE_LIMITS.WHATSAPP_CHAR_LIMIT,
        label: "Mensagem WhatsApp",
      },
    ],
    suggestedActions: [
      {
        id: uid(),
        type: "schedule-followup",
        label: "🔄 Agendar follow-up",
        icon: "refresh-cw",
        payload: {
          type: "follow-up",
          description: `Follow-up ${card.cardName}`,
        },
      },
    ],
    sourceCommand: "/followup",
  };
}
