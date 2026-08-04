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
    name: "GetSite",
    city: "Porto Alegre",
    state: "RS",
    cityState: "Porto Alegre/RS",
    phoneDisplay: "(51) 98057-3087",
    phoneRaw: "5551980573087",
    telHref: "tel:+5551980573087",
    email: "contato@getsite.com.br",
    address: "Rua Barão do Amazonas, 353 — Petrópolis, Porto Alegre/RS",
    hours: "Segunda a Sexta, 9h às 18h",
    mapsQuery: "Rua Barão do Amazonas, 353 - Petrópolis, Porto Alegre - RS",

    /** Chave de integração do formulário (Web3Forms). */
    web3formsKey: "SUA-CHAVE-WEB3FORMS-AQUI",
  },

  /* ------------------------------------------------------------------ */
  /* b) MENSAGENS DE WHATSAPP                                            */
  /* ------------------------------------------------------------------ */
  whatsapp: {
    number: "5551980573087",
    whatsappMessage: "Oi Fábio! Vi o site e gostaria de tirar uma dúvida.",
    whatsappServiceMessage: (servico: string) =>
      `Oi Fábio! Vi o site e gostaria de tirar uma dúvida sobre o serviço: ${servico}.`,
  },

  /* ------------------------------------------------------------------ */
  /* c) PALETA DE CORES DA MARCA                                         */
  /* ------------------------------------------------------------------ */
  colors: {
    primary: "#000000",
    primaryHover: "#1a1a1a",
    accent: "#25D366",
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
