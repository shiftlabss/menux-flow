// ─── Proactive Command Handlers ─────────────────────────────────────────

import type { Message, SuggestedAction, SuggestedActionType } from "@/types/intelligence";
import type { ProactiveEngineInput } from "@/lib/proactive-engine";
import {
  generateMorningSummaryContent,
  computeSmartInsights,
  computeQuickWins,
  computeRiskAlerts,
  computeTodaysPriorities,
} from "@/lib/proactive-engine";
import { formatCurrencyBRL } from "@/lib/business-rules";
import { useOpportunityStore } from "@/stores/opportunity-store";
import { useActivityStore } from "@/stores/activity-store";
import { useClientStore } from "@/stores/client-store";
import { useGoalStore } from "@/stores/goal-store";
import { usePipelineStore } from "@/stores/pipeline-store";
import { useAuthStore } from "@/stores/auth-store";
import { uid, now } from "./helpers";

// ─── Engine Input ───────────────────────────────────────────────────────

export function getEngineInput(): ProactiveEngineInput {
  const user = useAuthStore.getState().user;
  return {
    opportunities: useOpportunityStore.getState().opportunities,
    activities: useActivityStore.getState().activities,
    clients: useClientStore.getState().clients,
    goals: useGoalStore.getState().goals,
    pipelines: usePipelineStore.getState().pipelines,
    userId: user?.id ?? "unknown",
    userRole: user?.role ?? "comercial",
  };
}

// ─── Morning Briefing — /resumo ──────────────────────────────────────────

export function generateMorningBriefing(): Message {
  const input = getEngineInput();
  const content = generateMorningSummaryContent(input);

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "morning-briefing",
    timestamp: now(),
    sourceCommand: "/resumo",
  };
}

// ─── Risk Report — /riscos ───────────────────────────────────────────────

export function generateRiskReport(): Message {
  const input = getEngineInput();
  const risks = computeRiskAlerts(input);

  if (risks.length === 0) {
    return {
      id: uid(),
      role: "assistant",
      content: "🚨 **Relatorio de Riscos**\n\n✅ Nenhum alerta de risco no momento. Seu pipeline esta saudavel!",
      contentType: "risk-report",
      timestamp: now(),
      sourceCommand: "/riscos",
    };
  }

  const sections: string[] = ["🚨 **Relatorio de Riscos**\n"];

  const critical = risks.filter((r) => r.severity === "critical");
  const warning = risks.filter((r) => r.severity === "warning");

  if (critical.length > 0) {
    sections.push(`**Criticos (${critical.length}):**`);
    for (const r of critical) {
      sections.push(`  🔴 **${r.title}** — ${r.description}`);
    }
    sections.push("");
  }

  if (warning.length > 0) {
    sections.push(`**Atencao (${warning.length}):**`);
    for (const r of warning) {
      sections.push(`  🟡 **${r.title}** — ${r.description}`);
    }
    sections.push("");
  }

  sections.push(`\n📊 Total: **${risks.length}** alertas. Resolva os criticos primeiro.`);

  return {
    id: uid(),
    role: "assistant",
    content: sections.join("\n"),
    contentType: "risk-report",
    timestamp: now(),
    sourceCommand: "/riscos",
  };
}

// ─── Goal Progress — /meta ───────────────────────────────────────────────

export function generateGoalProgress(): Message {
  const input = getEngineInput();
  const now_ = new Date();
  const activeGoals = input.goals.filter((g) => new Date(g.endDate) > now_);

  if (activeGoals.length === 0) {
    return {
      id: uid(),
      role: "assistant",
      content: "🎯 **Progresso das Metas**\n\nNenhuma meta ativa no momento. Configure suas metas em Configuracoes > Metas.",
      contentType: "goal-progress",
      timestamp: now(),
      sourceCommand: "/meta",
    };
  }

  const sections: string[] = ["🎯 **Progresso das Metas**\n"];

  for (const goal of activeGoals) {
    const progress = Math.round((goal.current / goal.target) * 100);
    const remaining = goal.target - goal.current;
    const daysLeft = Math.max(0, Math.floor((new Date(goal.endDate).getTime() - now_.getTime()) / (1000 * 60 * 60 * 24)));

    const remainingStr = goal.type === "revenue" ? formatCurrencyBRL(remaining) : `${remaining}`;
    const currentStr = goal.type === "revenue" ? formatCurrencyBRL(goal.current) : `${goal.current}`;
    const targetStr = goal.type === "revenue" ? formatCurrencyBRL(goal.target) : `${goal.target}`;

    const progressBar = generateProgressBar(progress);
    const statusIcon = progress >= 100 ? "✅" : progress >= 70 ? "🟢" : progress >= 40 ? "🟡" : "🔴";

    sections.push(`**${goal.title}** ${statusIcon}`);
    sections.push(`  ${progressBar} ${progress}%`);
    sections.push(`  Atual: **${currentStr}** / Meta: **${targetStr}**`);

    if (remaining > 0) {
      sections.push(`  Faltam: **${remainingStr}** em **${daysLeft}** dias`);

      // Daily target to hit goal
      if (daysLeft > 0 && goal.type === "revenue") {
        const dailyNeeded = remaining / daysLeft;
        sections.push(`  Ritmo necessario: **${formatCurrencyBRL(dailyNeeded)}/dia**`);
      }
    } else {
      sections.push(`  🏆 **Meta atingida!**`);
    }
    sections.push("");
  }

  return {
    id: uid(),
    role: "assistant",
    content: sections.join("\n"),
    contentType: "goal-progress",
    timestamp: now(),
    sourceCommand: "/meta",
  };
}

export function generateProgressBar(pct: number): string {
  const filled = Math.round(pct / 10);
  const empty = 10 - filled;
  return `[${"█".repeat(Math.min(filled, 10))}${"░".repeat(Math.max(empty, 0))}]`;
}

// ─── Coaching — /coaching ────────────────────────────────────────────────

export function generateCoachingInsights(): Message {
  const input = getEngineInput();
  const insights = computeSmartInsights(input);
  const quickWins = computeQuickWins(input);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const sections: string[] = ["📈 **Coaching de Vendas**\n"];

  // Conversion insight
  const conversion = insights.find((i) => i.id === "insight-conversion");
  if (conversion?.metric) {
    sections.push(`**Taxa de conversao:** ${conversion.metric.value} ${conversion.metric.trend === "up" ? "📈 Acima da media!" : conversion.metric.trend === "down" ? "📉 Abaixo da media." : "➡️ Na media."}`);
    sections.push("");
  }

  // Velocity insight
  const velocity = insights.find((i) => i.id === "insight-velocity");
  if (velocity?.metric) {
    sections.push(`**Velocidade de fechamento:** ${velocity.metric.value} por deal`);
    sections.push("");
  }

  // Activity analysis
  const userActs = input.activities.filter(
    (a) => a.responsibleId === input.userId && new Date(a.dueDate) > thirtyDaysAgo
  );
  const completed = userActs.filter((a) => a.status === "completed");
  const completionRate = userActs.length > 0 ? Math.round((completed.length / userActs.length) * 100) : 0;

  sections.push(`**Atividades (30 dias):** ${completed.length} concluidas de ${userActs.length} (${completionRate}% de conclusao)`);

  // Activity mix
  const activityTypes = completed.reduce((acc, a) => {
    acc[a.type] = (acc[a.type] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topTypes = Object.entries(activityTypes).sort(([, a], [, b]) => b - a).slice(0, 3);
  if (topTypes.length > 0) {
    sections.push(`  Canais mais usados: ${topTypes.map(([t, c]) => `${t} (${c}x)`).join(", ")}`);
  }
  sections.push("");

  // Loss analysis
  const recentLosses = input.opportunities.filter(
    (o) => o.status === "lost" && o.responsibleId === input.userId && new Date(o.updatedAt) > thirtyDaysAgo
  );
  if (recentLosses.length > 0) {
    const reasons = recentLosses.reduce((acc, o) => {
      const reason = o.lossReason ?? "outro";
      acc[reason] = (acc[reason] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    sections.push(`**Analise de perdas (${recentLosses.length} perdidos):**`);
    for (const [reason, count] of Object.entries(reasons).sort(([, a], [, b]) => b - a)) {
      sections.push(`  - ${reason}: ${count}x`);
    }
    sections.push("");
  }

  // Tips
  sections.push("**Dicas personalizadas:**");

  if (completionRate < 80) {
    sections.push("  💡 Sua taxa de conclusao de atividades esta abaixo de 80%. Priorize fechar as pendentes antes de criar novas.");
  }

  if (conversion?.metric?.trend === "down") {
    sections.push("  💡 Sua conversao caiu. Revise a qualidade dos leads na entrada do funil e use `/objecao` para preparar contra-argumentos.");
  }

  if (quickWins.length > 0) {
    sections.push(`  💡 Voce tem ${quickWins.length} ganhos rapidos (deals com alta probabilidade). Foque neles primeiro!`);
  }

  const hasCallActivity = topTypes.some(([t]) => t === "call" || t === "meeting");
  if (!hasCallActivity) {
    sections.push("  💡 Pouca atividade de ligacao/reuniao. Contato direto aumenta a taxa de conversao em media 30%.");
  }

  return {
    id: uid(),
    role: "assistant",
    content: sections.join("\n"),
    contentType: "coaching",
    timestamp: now(),
    sourceCommand: "/coaching",
  };
}

// ─── Agenda — /agenda ────────────────────────────────────────────────────

export function generateAgenda(): Message {
  const input = getEngineInput();
  const priorities = computeTodaysPriorities(input);
  const now_ = new Date();
  const todayStr = now_.toISOString().split("T")[0];

  const todayActivities = input.activities
    .filter(
      (a) =>
        a.responsibleId === input.userId &&
        a.dueDate === todayStr &&
        a.status !== "cancelled" &&
        a.status !== "completed"
    )
    .sort((a, b) => {
      if (a.dueTime && b.dueTime) return a.dueTime.localeCompare(b.dueTime);
      if (a.dueTime) return -1;
      if (b.dueTime) return 1;
      return 0;
    });

  const overdueActivities = input.activities.filter(
    (a) =>
      a.responsibleId === input.userId &&
      a.status !== "completed" &&
      a.status !== "cancelled" &&
      new Date(a.dueDate) < now_ &&
      a.dueDate !== todayStr
  );

  const sections: string[] = ["📅 **Agenda do Dia**\n"];

  // Overdue first
  if (overdueActivities.length > 0) {
    sections.push(`**🔴 Atrasadas (${overdueActivities.length}):**`);
    for (const act of overdueActivities.slice(0, 5)) {
      sections.push(`  - **${act.title}** — vencida em ${act.dueDate}${act.clientName ? ` · ${act.clientName}` : ""}`);
    }
    sections.push("");
  }

  // Today's activities
  if (todayActivities.length > 0) {
    sections.push(`**📋 Hoje (${todayActivities.length}):**`);
    for (const act of todayActivities) {
      const timeStr = act.dueTime ? `${act.dueTime} — ` : "";
      const typeIcon = act.type === "call" ? "📞" : act.type === "email" ? "📧" : act.type === "meeting" ? "🤝" : act.type === "whatsapp" ? "💬" : act.type === "visit" ? "🏢" : "📌";
      sections.push(`  ${typeIcon} ${timeStr}**${act.title}**${act.clientName ? ` · ${act.clientName}` : ""}`);
    }
    sections.push("");
  } else if (overdueActivities.length === 0) {
    sections.push("Nenhuma atividade agendada para hoje.\n");
  }

  // Suggested priority order
  if (priorities.length > 0) {
    sections.push("**Sugestao de prioridade:**");
    for (let i = 0; i < Math.min(priorities.length, 5); i++) {
      const p = priorities[i];
      sections.push(`  ${i === 0 ? "1️⃣" : i === 1 ? "2️⃣" : i === 2 ? "3️⃣" : i === 3 ? "4️⃣" : "5️⃣"} **${p.title}** — ${p.subtitle}`);
    }
    sections.push("");
  }

  sections.push(`\nTotal: **${overdueActivities.length}** atrasadas + **${todayActivities.length}** para hoje.`);

  return {
    id: uid(),
    role: "assistant",
    content: sections.join("\n"),
    contentType: "agenda",
    timestamp: now(),
    sourceCommand: "/agenda",
  };
}

// ─── Ajuda — seção 3.1 ──────────────────────────────────────────────────

export function generateHelp(): Message {
  const content = `❓ **O que posso fazer por você?**

Sou a Menux Intelligence — seu braço direito comercial. Aqui está o que sei fazer:

| Comando | O que faz |
|---------|----------|
| \`/briefing\` | 📋 Resumo completo do lead antes de uma ligação ou reunião |
| \`/objecao\` | 🛡️ Contra-argumentos para objeções + mensagem pronta |
| \`/mensagem\` | 💬 Escrevo mensagens para WhatsApp, email ou ligação |
| \`/pitch\` | 🎯 Argumentos de venda personalizados pro perfil do lead |
| \`/funil\` | 📊 Visão geral do seu pipeline com ações prioritárias |
| \`/analise\` | 🔍 Diagnóstico completo de um card com probabilidade de fechamento |
| \`/comparar\` | ⚔️ Comparativo Menux vs concorrente |
| \`/planos\` | 💰 Info sobre planos, preços e funcionalidades |
| \`/followup\` | 🔄 Gero follow-up baseado na última interação |
| \`/resumo\` | 🌅 Briefing matinal com prioridades, ganhos rapidos e alertas |
| \`/riscos\` | 🚨 Todos os alertas de risco do seu pipeline |
| \`/meta\` | 🎯 Progresso das metas com projecoes |
| \`/coaching\` | 📈 Coaching de vendas com dicas personalizadas |
| \`/agenda\` | 📅 Atividades do dia + sugestao de prioridade |

💡 **Dicas:**
- Abra o card de um lead e me pergunte — uso todo o contexto automaticamente
- Use os botões de ação para criar atividades e salvar notas direto no CRM
- Copie mensagens prontas com 1 clique

Quer experimentar algum comando?`;

  return {
    id: uid(),
    role: "assistant",
    content,
    contentType: "help",
    timestamp: now(),
    sourceCommand: "/ajuda",
  };
}
