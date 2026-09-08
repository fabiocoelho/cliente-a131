/**
 * ESTE É O ÚNICO ARQUIVO A SER EDITADO PARA ALTERAR DADOS DO CLIENTE,
 * MENSAGENS, CORES E FONTES.
 *
 * Textos das seções, FAQ, depoimentos, cards e imagens continuam nos
 * componentes e devem ser editados diretamente lá.
 */

export const SITE_CONFIG = {
  /* ------------------------------------------------------------------ */
  /* a) DADOS DO CLIENTE                                                 */
  /* ------------------------------------------------------------------ */
  client: {
    name: "RS Multas",
    city: "Gravataí",
    state: "RS",
    cityState: "Gravataí/RS",
    phoneDisplay: "(51) 98057-3087",
    phoneRaw: "5551980573087",
    telHref: "tel:+5551980573087",
    email: "contato@rsmultas.com",
    address:
      "Av. Dorival Cândido Luz de Oliveira, 1848 — Jansen, Gravataí/RS, 94030-000",
    hours: "Segunda a Sexta, 8h às 16h",
    mapsQuery:
      "Av. Dorival Cândido Luz de Oliveira, 1848 - Jansen, Gravataí - RS, 94030-000",

    /** Chave de integração do formulário (Web3Forms). */
    web3formsKey: "SUA-CHAVE-WEB3FORMS-AQUI",
  },

  /* ------------------------------------------------------------------ */
  /* b) MENSAGENS DE WHATSAPP                                            */
  /* ------------------------------------------------------------------ */
  whatsapp: {
    number: "5551980573087",
    whatsappMessage: "Olá! Vi o site da RS Multas e gostaria de tirar uma dúvida.",
    whatsappServiceMessage: (servico: string) =>
      `Olá! Vi o site da RS Multas e gostaria de tirar uma dúvida sobre o serviço: ${servico}.`,
    },
  
  /* ------------------------------------------------------------------ */
  /* c) PALETA DE CORES DA MARCA                                         */
  /* Estes valores ALIMENTAM de fato a interface: são injetados como     */
  /* variáveis CSS no <head> e sobrescrevem os tokens de src/styles.css. */
  /* Basta trocar o HEX aqui para o site inteiro mudar de cor.           */
  /* ------------------------------------------------------------------ */
  colors: {
    /** Cor principal da marca (botões, destaques, foco). */
    primary: "#33A13C",
    /** Tom escuro da marca: hover e textos pequenos (contraste AA). */
    primaryHover: "#1F6424",
    /** Cor de acento (usada em detalhes e gráficos). */
    accent: "#33A13C",
    /** Fundo das seções alternadas (efeito zebra). */
    sectionAlt: "#CCDDD8",
    /** Cor da borda dos cards e itens de FAQ. */
    cardBorder: "#9E9E9E",
  },

  /* ------------------------------------------------------------------ */
  /* d) TIPOGRAFIA E FONTES                                              */
  /* ------------------------------------------------------------------ */
  fonts: {
    sans: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
};

/** Inicial usada no logotipo (derivada do nome). */
export const SITE_INITIAL = SITE_CONFIG.client.name.trim().charAt(0).toUpperCase();

/** Alias para manter compatibilidade retroativa com componentes que ainda buscam SITE */
export const SITE = {
  ...SITE_CONFIG.client,
  whatsappMessage: SITE_CONFIG.whatsapp.whatsappMessage,
  whatsappServiceMessage: SITE_CONFIG.whatsapp.whatsappServiceMessage,
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE_CONFIG.whatsapp.number}`;
  const text = message ?? SITE_CONFIG.whatsapp.whatsappMessage;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function whatsappLink(message?: string) {
  return whatsappUrl(message);
}

/**
 * CSS gerado a partir de SITE_CONFIG.colors.
 * Injetado no <head> (ver src/routes/__root.tsx) para sobrescrever os tokens
 * padrão de src/styles.css — é isto que torna o config a fonte da verdade.
 */
export function themeCss() {
  const c = SITE_CONFIG.colors;
  return `:root{
  --brand:${c.primary};
  --brand-strong:${c.primaryHover};
  --brand-soft:color-mix(in srgb, ${c.primary} 14%, white);
  --accent-brand:${c.accent};
  --ring:${c.primary};
  --chart-1:${c.primary};
  --section-alt:${c.sectionAlt};
  --card-border:${c.cardBorder};
  --sidebar-ring:${c.primary};
}`;
}
