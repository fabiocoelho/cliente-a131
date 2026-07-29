import { SITE, SITE_INITIAL, whatsappUrl } from "@/lib/site";

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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-foreground font-display text-lg leading-none">
                {SITE_INITIAL}
              </span>
              <span className="font-display text-lg text-foreground">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Despachante em {SITE.cityState}. Documentação de veículos, CNH e mais —
              com atendimento rápido e transparente.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Contato
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">{SITE.address}</li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.telHref} className="text-foreground hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-foreground hover:underline break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Links rápidos
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Horário
            </div>
            <p className="mt-4 text-sm text-foreground">{SITE.hours}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Respondemos WhatsApp em minutos.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <a href="#" className="hover:text-foreground">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
