import { Star, MapPin, Clock, ArrowRight, Zap, ShieldCheck } from "lucide-react";
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
          <div
            className="hero-in inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft/50 px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <Zap className="h-3.5 w-3.5 text-brand" strokeWidth={2.2} />
            Resposta em minutos pelo WhatsApp
          </div>

          <h1
            className="hero-in mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Documentação do seu veículo, sem burocracia.
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {SITE.name} cuida de transferências, licenciamento, CNH e mais em{" "}
            {SITE.cityState}. Atendimento rápido, transparente e sem você sair de casa.
          </p>

          <div
            className="hero-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <WhatsAppButton
              size="lg"
              message={`Olá, ${SITE.name}! Vi o site e gostaria de tirar uma dúvida.`}
            >
              Falar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#servicos"
              className="group inline-flex h-14 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul
            className="hero-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "320ms" }}
          >
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

        <div
          className="hero-in group relative"
          style={{ animationDelay: "400ms" }}
        >
          <div className="absolute -inset-6 -z-10 hidden rounded-[2rem] bg-brand-soft/60 blur-2xl transition-opacity duration-700 group-hover:opacity-100 sm:block sm:opacity-70" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-soft)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-elegant)]">
            <img
              src={heroImage}
              alt={`${SITE.name} — despachante em ${SITE.cityState}`}
              width={1200}
              height={1400}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
              fetchPriority="high"
            />
          </div>

          <div className="hero-float absolute -top-5 -right-3 hidden items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-[var(--shadow-elegant)] will-change-transform lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft">
              <ShieldCheck className="h-4 w-4 text-brand" strokeWidth={2} />
            </span>
            <div>
              <div className="font-display text-lg leading-none text-foreground">+0.000</div>
              <div className="mt-1 text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                atendimentos
              </div>
            </div>
          </div>

          <div className="hero-float-reverse absolute -bottom-6 -left-6 hidden max-w-[16rem] rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-elegant)] will-change-transform sm:block">
            <div className="flex items-center gap-1 text-brand">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
              <span className="ml-1 text-xs font-medium text-muted-foreground">0.0</span>
            </div>
            <p className="mt-2 text-sm text-foreground">
              "Depoimento de exemplo: resolveu tudo em tempo recorde."
            </p>
            <p className="mt-1 text-xs text-muted-foreground">— Cliente de exemplo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
