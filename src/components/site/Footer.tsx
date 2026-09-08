import { SITE, SITE_INITIAL, whatsappUrl } from "@/lib/config";

export function Footer() {
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="relative overflow-hidden bg-primary">
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-foreground font-display text-lg leading-none">
                {SITE_INITIAL}
              </span>
              <span className="font-display text-lg text-primary-foreground">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/90">
              Despachante em {SITE.cityState}. Documentação de veículos, CNH e mais —
              com atendimento rápido e transparente.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/80">
              Contato
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-primary-foreground/90">{SITE.address}</li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-brand hover:underline">
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.telHref} className="text-primary-foreground hover:text-brand hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-primary-foreground hover:text-brand hover:underline break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/80">
              Links rápidos
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground hover:text-brand hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/80">
              Horário
            </div>
            <p className="mt-4 text-sm text-primary-foreground">{SITE.hours}</p>
            <p className="mt-1 text-sm text-primary-foreground/90">
              Respondemos WhatsApp em minutos.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/80 sm:flex-row sm:items-center">
          <p className="text-primary-foreground/90">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
