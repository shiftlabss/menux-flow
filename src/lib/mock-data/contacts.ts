import type { Contact } from "@/types";

export const mockContacts: Contact[] = [
  // client-35: Restaurante Paris Bistro SA
  { id: "contact-1", clientId: "client-35", nome: "Jean Pierre", email: "jean@parisbistro.com.br", telefone: "(11) 3456-7835", cargo: "proprietario", personalidade: "Exigente com qualidade, prefere produtos importados.", isDecisionMaker: true },
  { id: "contact-2", clientId: "client-35", nome: "Marie Dupont", email: "marie@parisbistro.com.br", telefone: "(11) 3456-7836", cargo: "gerente-geral", isDecisionMaker: false },

  // client-new1: Spa Wellness Center Ltda
  { id: "contact-3", clientId: "client-new1", nome: "Marina Wellness", email: "marina@wellnesscenter.com.br", telefone: "(11) 3567-8936", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-4", clientId: "client-new1", nome: "Carla Spa", email: "carla@wellnesscenter.com.br", telefone: "(11) 3567-8937", cargo: "gerente", isDecisionMaker: false },

  // client-new2: Restaurante Nordestino Sertão ME
  { id: "contact-5", clientId: "client-new2", nome: "José Sertão", email: "jose@sertaorest.com.br", telefone: "(81) 3678-9037", cargo: "proprietario", isDecisionMaker: true },

  // client-new3: Pub Irlandês Dublin Ltda
  { id: "contact-6", clientId: "client-new3", nome: "Patrick Dublin", email: "patrick@dublinpub.com.br", telefone: "(11) 3789-0138", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-7", clientId: "client-new3", nome: "Sean Murphy", email: "sean@dublinpub.com.br", telefone: "(11) 3789-0139", cargo: "gerente-geral", isDecisionMaker: false },

  // client-new4: Dark Kitchen Central ME
  { id: "contact-8", clientId: "client-new4", nome: "Diego Central", email: "diego@darkkitchen.com.br", telefone: "(11) 3890-1239", cargo: "proprietario", isDecisionMaker: true },

  // client-28: Restaurante Fazenda Velha SA
  { id: "contact-9", clientId: "client-28", nome: "Joaquim Fazenda", email: "joaquim@fazendavelha.com.br", telefone: "(19) 3901-2328", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-10", clientId: "client-28", nome: "Rita Fazenda", email: "rita@fazendavelha.com.br", telefone: "(19) 3901-2329", cargo: "gerente", isDecisionMaker: false },

  // client-29: Hotel Montanha Resort SA
  { id: "contact-11", clientId: "client-29", nome: "Carlos Montanha", email: "carlos@montanharesort.com.br", telefone: "(24) 3012-3429", cargo: "diretor", isDecisionMaker: true },
  { id: "contact-12", clientId: "client-29", nome: "Lucia Resort", email: "lucia@montanharesort.com.br", telefone: "(24) 3012-3430", cargo: "gerente-geral", isDecisionMaker: false },
  { id: "contact-13", clientId: "client-29", nome: "Felipe Cozinha", email: "felipe@montanharesort.com.br", telefone: "(24) 3012-3431", cargo: "chef-de-cozinha", isDecisionMaker: false },

  // client-30: Rede Açaí Beach Ltda
  { id: "contact-14", clientId: "client-30", nome: "Bruno Açaí", email: "bruno@acaibeach.com.br", telefone: "(21) 3123-4530", cargo: "proprietario", isDecisionMaker: true },

  // client-31: Cervejaria Artesanal Hop ME
  { id: "contact-15", clientId: "client-31", nome: "Ricardo Hop", email: "ricardo@hopbeer.com.br", telefone: "(11) 3234-5631", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-16", clientId: "client-31", nome: "Bruna Lúpulo", email: "bruna@hopbeer.com.br", telefone: "(11) 3234-5632", cargo: "operacional", isDecisionMaker: false },

  // client-32: Cafeteria Grão Especial EIRELI
  { id: "contact-17", clientId: "client-32", nome: "Ana Grão", email: "ana@graoespecial.com.br", telefone: "(11) 3345-6732", cargo: "proprietario", isDecisionMaker: true },

  // client-33: Restaurante Árabe Habibi Ltda
  { id: "contact-18", clientId: "client-33", nome: "Ahmed Habibi", email: "ahmed@habibi.com.br", telefone: "(11) 3456-7833", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-19", clientId: "client-33", nome: "Fatima Habibi", email: "fatima@habibi.com.br", telefone: "(11) 3456-7834", cargo: "gerente", isDecisionMaker: false },

  // client-34: Rede Tapioca Express ME
  { id: "contact-20", clientId: "client-34", nome: "Fernanda Tapioca", email: "fernanda@tapiocaexpress.com.br", telefone: "(81) 3567-8934", cargo: "proprietario", isDecisionMaker: true },

  // client-new5: Padaria Artesanal Fermento EIRELI
  { id: "contact-21", clientId: "client-new5", nome: "Marcos Fermento", email: "marcos@padariafermento.com.br", telefone: "(11) 4012-3540", cargo: "proprietario", isDecisionMaker: true },

  // client-1: Restaurante Sabor da Terra Ltda
  { id: "contact-22", clientId: "client-1", nome: "Maria Terra", email: "maria@sabordaterra.com.br", telefone: "(11) 3123-4501", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-23", clientId: "client-1", nome: "João Terra", email: "joao@sabordaterra.com.br", telefone: "(11) 3123-4502", cargo: "gerente-geral", isDecisionMaker: false },

  // client-2: Hotel Beira Mar SA
  { id: "contact-24", clientId: "client-2", nome: "Roberto Mar", email: "roberto@beiramar.com.br", telefone: "(21) 3234-5602", cargo: "diretor", isDecisionMaker: true },
  { id: "contact-25", clientId: "client-2", nome: "Silvia Costa", email: "silvia@beiramar.com.br", telefone: "(21) 3234-5603", cargo: "gerente-geral", isDecisionMaker: false },

  // client-7: Churrascaria Fogo Alto SA
  { id: "contact-26", clientId: "client-7", nome: "Pedro Fogo", email: "pedro@fogoalto.com.br", telefone: "(11) 3890-1207", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-27", clientId: "client-7", nome: "Lucas Churrasco", email: "lucas@fogoalto.com.br", telefone: "(11) 3890-1208", cargo: "chef-de-cozinha", isDecisionMaker: false },

  // client-14: Restaurante Executivo Prime Ltda
  { id: "contact-28", clientId: "client-14", nome: "André Prime", email: "andre@executivoprime.com.br", telefone: "(11) 3567-8914", cargo: "diretor", isDecisionMaker: true },

  // client-15: Buffet Casamento Real SA
  { id: "contact-29", clientId: "client-15", nome: "Letícia Real", email: "leticia@casamentoreal.com.br", telefone: "(11) 3678-9015", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-30", clientId: "client-15", nome: "Fernando Eventos", email: "fernando@casamentoreal.com.br", telefone: "(11) 3678-9016", cargo: "gerente", isDecisionMaker: false },

  // client-16: Hospital Santa Cruz
  { id: "contact-31", clientId: "client-16", nome: "Dr. Paulo Cruz", email: "paulo@santacruz.org.br", telefone: "(11) 3789-0116", cargo: "diretor", isDecisionMaker: true },
  { id: "contact-32", clientId: "client-16", nome: "Enf. Mariana Santos", email: "mariana@santacruz.org.br", telefone: "(11) 3789-0117", cargo: "gerente", isDecisionMaker: false },

  // client-20: Steakhouse Premium SA
  { id: "contact-33", clientId: "client-20", nome: "Victor Premium", email: "victor@steakhousepremium.com.br", telefone: "(11) 4123-4520", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-34", clientId: "client-20", nome: "Amanda Premium", email: "amanda@steakhousepremium.com.br", telefone: "(11) 4123-4521", cargo: "gerente-geral", isDecisionMaker: false },

  // client-21: Resort Praia Azul SA
  { id: "contact-35", clientId: "client-21", nome: "Marcela Azul", email: "marcela@praiaazul.com.br", telefone: "(13) 4234-5621", cargo: "diretor", isDecisionMaker: true },

  // client-24: Casa de Shows Arena SA
  { id: "contact-36", clientId: "client-24", nome: "Rogério Arena", email: "rogerio@arenashows.com.br", telefone: "(11) 4567-8924", cargo: "proprietario", isDecisionMaker: true },

  // client-25: Catering Empresarial VIP
  { id: "contact-37", clientId: "client-25", nome: "Helena VIP", email: "helena@cateringvip.com.br", telefone: "(11) 4678-9025", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-38", clientId: "client-25", nome: "Rodrigo Catering", email: "rodrigo@cateringvip.com.br", telefone: "(11) 4678-9026", cargo: "operacional", isDecisionMaker: false },

  // client-27: Churrascaria Gaúcha Autêntica Ltda
  { id: "contact-39", clientId: "client-27", nome: "Beto Gaúcho", email: "beto@gauchaautentica.com.br", telefone: "(51) 4890-1227", cargo: "proprietario", isDecisionMaker: true },

  // client-22: Sushi Ya Ltda
  { id: "contact-40", clientId: "client-22", nome: "Takeshi Ya", email: "takeshi@sushiya.com.br", telefone: "(11) 4345-5622", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-41", clientId: "client-22", nome: "Yuki Tanaka", email: "yuki@sushiya.com.br", telefone: "(11) 4345-5623", cargo: "chef-de-cozinha", isDecisionMaker: false },

  // client-3: Delivery Gourmet ME
  { id: "contact-42", clientId: "client-3", nome: "Paula Gourmet", email: "paula@deliverygourmet.com.br", telefone: "(11) 3345-6703", cargo: "proprietario", isDecisionMaker: true },

  // client-5: Bar do Jorge Ltda
  { id: "contact-43", clientId: "client-5", nome: "Jorge Silva", email: "jorge@bardojorge.com.br", telefone: "(11) 3567-8905", cargo: "proprietario", isDecisionMaker: true },

  // client-8: Restaurante Verde Vida ME
  { id: "contact-44", clientId: "client-8", nome: "Gabriela Verde", email: "gabriela@verdevida.com.br", telefone: "(11) 3901-2308", cargo: "proprietario", isDecisionMaker: true },

  // client-10: Rede Pousadas Sul Ltda
  { id: "contact-45", clientId: "client-10", nome: "Fábio Sul", email: "fabio@pousadassul.com.br", telefone: "(48) 3123-4510", cargo: "diretor", isDecisionMaker: true },

  // client-17: Rede Fast Burger Ltda
  { id: "contact-46", clientId: "client-17", nome: "Felipe Burger", email: "felipe@fastburger.com.br", telefone: "(11) 3890-1217", cargo: "proprietario", isDecisionMaker: true },
  { id: "contact-47", clientId: "client-17", nome: "Renata Fast", email: "renata@fastburger.com.br", telefone: "(11) 3890-1218", cargo: "gerente", isDecisionMaker: false },

  // client-18: Clube Recreativo Central
  { id: "contact-48", clientId: "client-18", nome: "Sérgio Central", email: "sergio@clubecentral.com.br", telefone: "(11) 3901-2318", cargo: "diretor", isDecisionMaker: true },

  // client-4: Padaria Trigo Dourado EIRELI (churn)
  { id: "contact-49", clientId: "client-4", nome: "Antônio Trigo", email: "antonio@trigodourado.com.br", telefone: "(31) 3456-7804", cargo: "proprietario", isDecisionMaker: true },

  // client-6: Cantina Escolar ABC (churn)
  { id: "contact-50", clientId: "client-6", nome: "Cláudia ABC", email: "claudia@cantinabc.com.br", telefone: "(11) 3678-9006", cargo: "proprietario", isDecisionMaker: true },

  // client-11: Food Truck Urbano ME (churn)
  { id: "contact-51", clientId: "client-11", nome: "Diego Urbano", email: "diego@foodtruckurbano.com.br", telefone: "(11) 3234-5611", cargo: "proprietario", isDecisionMaker: true },

  // client-13: Confeitaria Doce Mel EIRELI (churn)
  { id: "contact-52", clientId: "client-13", nome: "Isabela Mel", email: "isabela@docemel.com.br", telefone: "(11) 3456-7813", cargo: "proprietario", isDecisionMaker: true },
];
