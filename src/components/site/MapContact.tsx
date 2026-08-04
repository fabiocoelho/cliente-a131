import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export function MapContact() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;

  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Contato
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Estamos em {SITE.cityState}.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-surface overflow-hidden rounded-2xl">
            <iframe
              title={`Mapa — ${SITE.name}`}
              src={mapsEmbed}
              loading="lazy"
              className="h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="card-surface flex flex-col justify-between rounded-2xl bg-card p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Endereço</div>
                  <div className="mt-0.5 text-foreground">{SITE.address}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-0.5 block text-foreground hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</div>
                  <a href={SITE.telHref} className="mt-0.5 block text-foreground hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Horário</div>
                  <div className="mt-0.5 text-foreground">{SITE.hours}</div>
                </div>
              </li>
            </ul>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
