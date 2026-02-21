import type { OpportunityNote } from "@/types";
import { daysAgo } from "./helpers";

// ===== Mock Opportunity Notes (40 notes across opportunities) =====

export const mockNotes: OpportunityNote[] = [
  // opp-o01 — Carnes nobres - Restaurante Fazenda Velha
  { id: "note-1", opportunityId: "opp-o01", body: "Cliente solicitou nova proposta com desconto de 5% no setup para fechar ainda este mês.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(2), intent: "pedido_cliente", visibility: "team" },
  { id: "note-2", opportunityId: "opp-o01", body: "Reunião de alinhamento realizada. O cliente gostou bastante da demonstração dos cortes premium.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(5), intent: "decisao", visibility: "team" },
  { id: "note-3", opportunityId: "opp-o01", body: "Oportunidade movida para a etapa de Negociação.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(12), intent: "system", visibility: "team", isSystem: true },

  // opp-o02 — Hortifruti completo - Hotel Montanha Resort
  { id: "note-4", opportunityId: "opp-o02", body: "Hotel precisa de entrega diária. Verificar viabilidade logística com operações.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(18), intent: "general", visibility: "team" },
  { id: "note-5", opportunityId: "opp-o02", body: "Contraproposta recebida. Hotel não quer mínimo mensal. Precisamos avaliar se é viável.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(15), intent: "objecao", visibility: "team" },
  { id: "note-6", opportunityId: "opp-o02", body: "Oportunidade criada a partir de visita técnica.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(25), intent: "system", visibility: "team", isSystem: true },

  // opp-o03 — Açaí e polpas - Rede Açaí Beach
  { id: "note-7", opportunityId: "opp-o03", body: "Degustação de polpas realizada. Aprovaram 3 de 5 sabores. Enviar amostras de manga e goiaba.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(7), intent: "decisao", visibility: "team" },
  { id: "note-8", opportunityId: "opp-o03", body: "Bruno (proprietário) tem preferência por produtos sem conservantes. Destacar isso na proposta.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(9), intent: "general", visibility: "team" },

  // opp-o04 — Insumos cervejeiros - Cervejaria Artesanal Hop
  { id: "note-9", opportunityId: "opp-o04", body: "Ricardo quer catálogo completo de lúpulos importados. Pedir ao fornecedor lista atualizada.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(5), intent: "pedido_cliente", visibility: "team" },
  { id: "note-10", opportunityId: "opp-o04", body: "Cervejaria produz 5.000 litros/mês. Bom potencial de volume.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(7), intent: "general", visibility: "team" },

  // opp-o05 — Laticínios especiais - Rede Padarias Artesanais
  { id: "note-11", opportunityId: "opp-o05", body: "Ana prefere contrato semestral para testar parceria. Aceitar como estratégia de entrada.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(20), intent: "decisao", visibility: "team" },
  { id: "note-12", opportunityId: "opp-o05", body: "Amostras de queijo aprovadas. Manteiga precisa ajuste no mix (menos sal).", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(10), intent: "pedido_cliente", visibility: "team" },
  { id: "note-13", opportunityId: "opp-o05", body: "Proposta revisada enviada por email.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(18), intent: "system", visibility: "team", isSystem: true },

  // opp-o06 — Embalagens sustentáveis - Green Food Delivery
  { id: "note-14", opportunityId: "opp-o06", body: "Mapeamento completo: 8 SKUs de embalagens biodegradáveis necessárias.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(27), intent: "general", visibility: "team" },
  { id: "note-15", opportunityId: "opp-o06", body: "Ahmed quer testar embalagem de marmita por 30 dias antes de fechar contrato completo.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(22), intent: "objecao", visibility: "team" },
  { id: "note-16", opportunityId: "opp-o06", body: "Acordo verbal fechado via WhatsApp. Formalizar contrato até sexta.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(3), intent: "decisao", visibility: "team" },
  { id: "note-17", opportunityId: "opp-o06", body: "Oportunidade movida para Fechamento.", authorId: "system", authorName: "Sistema", createdAt: daysAgo(5), intent: "system", visibility: "team", isSystem: true },

  // opp-o07 — Insumos gerais - Hospital Regional Norte
  { id: "note-18", opportunityId: "opp-o07", body: "Hospital exige certificações sanitárias ANVISA. Verificar se todos os produtos atendem.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(4), intent: "objecao", visibility: "team" },
  { id: "note-19", opportunityId: "opp-o07", body: "Reunião com equipe de compras realizada. Documentação de licitação entregue.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(3), intent: "general", visibility: "team" },
  { id: "note-20", opportunityId: "opp-o07", body: "Volume estimado: R$ 40.000/mês. Maior oportunidade do trimestre.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(5), intent: "general", visibility: "private" },

  // opp-o08 — Proteínas - Steakhouse Premium
  { id: "note-21", opportunityId: "opp-o08", body: "Chef Victor aprovou wagyu e angus, mas descartou cordeiro do mix.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(10), intent: "decisao", visibility: "team" },
  { id: "note-22", opportunityId: "opp-o08", body: "Victor quer testar 3 fornecedores antes de fechar exclusividade. Precisamos diferenciar.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(8), intent: "objecao", visibility: "team" },

  // opp-o09 — Resort all-inclusive - Resort Praia Azul
  { id: "note-23", opportunityId: "opp-o09", body: "Resort tem 3 restaurantes internos. Demanda variada: japonês, italiano e brasileiro.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(4), intent: "general", visibility: "team" },
  { id: "note-24", opportunityId: "opp-o09", body: "Logística dedicada será necessária. Verificar custo de rota Guarujá diária.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(3), intent: "general", visibility: "private" },
  { id: "note-25", opportunityId: "opp-o09", body: "Marcela (diretora) muito interessada. Quer proposta até final da semana.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(2), intent: "pedido_cliente", visibility: "team" },

  // opp-o10 — Eventos - Casa de Shows Arena
  { id: "note-26", opportunityId: "opp-o10", body: "Modelo de fornecimento por evento. 4 tipos de cardápio mapeados.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(15), intent: "general", visibility: "team" },
  { id: "note-27", opportunityId: "opp-o10", body: "Rogério prefere pagamento pós-evento. Financeiro precisa aprovar esse modelo.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(13), intent: "objecao", visibility: "team" },
  { id: "note-28", opportunityId: "opp-o10", body: "Visita cancelada por evento de última hora. Remarcada para próxima semana.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(9), intent: "general", visibility: "team" },

  // Notas em oportunidades won (para timeline de clientes)
  { id: "note-29", opportunityId: "opp-w35", body: "Jean Pierre exigente com qualidade. Só aceita produtos de primeira linha.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(30), intent: "general", visibility: "team" },
  { id: "note-30", opportunityId: "opp-w35", body: "Contrato assinado. Início da operação em 15 dias.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(20), intent: "decisao", visibility: "team" },

  { id: "note-31", opportunityId: "opp-w01", body: "Cliente muito receptivo na primeira visita. Potencial de crescimento alto.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(155), intent: "general", visibility: "team" },
  { id: "note-32", opportunityId: "opp-w01", body: "Fechamento rápido. Cliente estava insatisfeito com fornecedor anterior.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(140), intent: "decisao", visibility: "team" },

  { id: "note-33", opportunityId: "opp-w02", body: "Hotel premium. Exige entrega diária e qualidade certificada.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(148), intent: "general", visibility: "team" },

  { id: "note-34", opportunityId: "opp-w07", body: "Chef Pedro aprovou todos os cortes na degustação.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(118), intent: "decisao", visibility: "team" },

  { id: "note-35", opportunityId: "opp-w10", body: "Conselho da rede de pousadas aprovou proposta por unanimidade.", authorId: "user-6", authorName: "Marcos Pereira", createdAt: daysAgo(98), intent: "decisao", visibility: "team" },

  // Extras para volume
  { id: "note-36", opportunityId: "opp-o01", body: "Joaquim mencionou que o concorrente oferece 10% mais barato. Precisamos justificar qualidade.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(8), intent: "objecao", visibility: "team" },
  { id: "note-37", opportunityId: "opp-o02", body: "Felipe (chef) é o influenciador técnico. Garantir que ele participe da próxima reunião.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(12), intent: "general", visibility: "team" },
  { id: "note-38", opportunityId: "opp-o08", body: "Amanda (gerente) cuida da parte operacional. Victor decide mas Amanda executa.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(6), intent: "general", visibility: "team" },
  { id: "note-39", opportunityId: "opp-o09", body: "Resort fecha em março para reforma. Contrato precisa começar antes.", authorId: "user-3", authorName: "Lucas Oliveira", createdAt: daysAgo(1), intent: "pedido_cliente", visibility: "team" },
  { id: "note-40", opportunityId: "opp-o05", body: "Bruna (operacional) reportou que o leite integral atual não atende padrão das receitas.", authorId: "user-4", authorName: "Juliana Costa", createdAt: daysAgo(7), intent: "pedido_cliente", visibility: "team" },
];
