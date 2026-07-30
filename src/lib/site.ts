/**
 * TEMPLATE — dados de demonstração.
 * Este é o ÚNICO arquivo a editar para publicar com os dados oficiais do cliente.
 * Substitua os placeholders abaixo (nome, cidade, telefone, e-mail, endereço).
 */
export const SITE = {
  name: "Nome da Empresa",
  city: "Cidade",
  state: "UF",
  cityState: "Cidade/UF",
  phoneDisplay: "(00) 00000-0000",
  phoneRaw: "5500000000000",
  telHref: "tel:+5500000000000",
  email: "contato@empresa.com.br",
  address: "Rua Exemplo, 000 — Bairro, Cidade/UF",
  hours: "Segunda a Sexta, 9h às 18h",
  mapsQuery: "Porto Alegre, RS",
};

/** Inicial usada no logotipo (derivada do nome). */
export const SITE_INITIAL = SITE.name.trim().charAt(0).toUpperCase();

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
