import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl">
              Pronto para resolver seu problema?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">
              Fale agora com o {SITE.name} pelo WhatsApp e receba um atendimento
              rápido, humano e sem burocracia.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton size="lg">
                Falar pelo WhatsApp
              </WhatsAppButton>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              {SITE.phoneDisplay} · Atendimento em {SITE.cityState}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
