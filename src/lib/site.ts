/**
 * TEMPLATE — dados de demonstração.
 * Este é o ÚNICO arquivo a editar para publicar com os dados oficiais do cliente.
 * Substitua os placeholders abaixo (nome, cidade, telefone, e-mail, endereço).
 */
export const SITE = {
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
  /** Mensagem padrão usada em TODOS os botões de WhatsApp do site. */
  whatsappMessage: "Oi Fábio! Vi o site e gostaria de tirar uma dúvida.",
  /** Mensagem usada nos cards de serviço. */
  whatsappServiceMessage: (servico: string) =>
    `Oi Fábio! Vi o site e gostaria de tirar uma dúvida sobre o serviço: ${servico}.`,
};

/** Inicial usada no logotipo (derivada do nome). */
export const SITE_INITIAL = SITE.name.trim().charAt(0).toUpperCase();

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
  const text = message ?? SITE.whatsappMessage;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
