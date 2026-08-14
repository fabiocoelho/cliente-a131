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
    phoneDisplay: "(51) 98313-1501",
    phoneRaw: "5551983131501",
    telHref: "tel:+5551983131501",
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
    number: "5551983131501",
    whatsappMessage: "Olá! Vi o site da RS Multas e gostaria de tirar uma dúvida.",
    whatsappServiceMessage: (servico: string) =>
      `Olá! Vi o site da RS Multas e gostaria de tirar uma dúvida sobre o serviço: ${servico}.`,
  },

  /* ------------------------------------------------------------------ */
  /* c) PALETA DE CORES DA MARCA                                         */
  /* ------------------------------------------------------------------ */
  colors: {
    primary: "#000000",
    primaryHover: "#1a1a1a",
    accent: "#33A13C",
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
