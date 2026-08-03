import aboutImage from "@/assets/about-office.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={aboutImage}
              alt={`Escritório do ${SITE.name} em ${SITE.cityState}`}
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Sobre
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Um despachante que fala a sua língua.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              O {SITE.name} nasceu para simplificar a vida de quem precisa resolver
              questões burocráticas em {SITE.cityState}. Combinamos experiência,
              tecnologia e um atendimento humano — do primeiro contato até a entrega
              final.
            </p>
            <p>
              Nosso compromisso é claro: prazos que cumprimos, preço transparente e
              comunicação sem enrolação. Cada cliente é atendido de forma
              personalizada, seja para transferir um veículo, renovar a CNH ou
              regularizar documentos.
            </p>
          </div>

          <div className="mt-8">
            <WhatsAppButton variant="dark" size="md">
              Fale com a gente
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
