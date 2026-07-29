export const SITE = {
  name: "Alessandro Despachante",
  city: "Porto Alegre",
  state: "RS",
  cityState: "Porto Alegre/RS",
  phoneDisplay: "(51) 98405-7842",
  phoneRaw: "5551984057842",
  telHref: "tel:+5551984057842",
  email: "contato@alessandrodespachante.com.br",
  address: "Porto Alegre, RS",
  hours: "Segunda a Sexta, 9h às 18h",
  mapsQuery: "Alessandro Despachante, Porto Alegre RS",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
