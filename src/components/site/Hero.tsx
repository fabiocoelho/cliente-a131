import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/Vistoria.jpeg";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

export function Hero() {
  const proofs = [
    { icon: Star, label: "Excelente avaliação" },
    { icon: MapPin, label: `Atendimento em ${SITE.cityState}` },
    { icon: Clock, label: "Atendimento rápido" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Despachante em {SITE.cityState}
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            Documentação do seu veículo, sem burocracia.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {SITE.name} cuida de transferências, licenciamento, CNH e mais em{" "}
            {SITE.cityState}. Atendimento rápido, transparente e sem você sair de casa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton
              size="lg"
              message={`Olá, ${SITE.name}! Vi o site e gostaria de tirar uma dúvida.`}
            >
              Falar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {proofs.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <p.icon className="h-4 w-4 text-brand" strokeWidth={2} />
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-soft/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={heroImage}
              alt={`${SITE.name} — despachante em ${SITE.cityState}`}
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-[16rem] rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-elegant)] sm:block">
            <div className="flex items-center gap-1 text-brand">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-2 text-sm text-foreground">
              "Resolveu tudo em tempo recorde. Super recomendo."
            </p>
            <p className="mt-1 text-xs text-muted-foreground">— Cliente Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
