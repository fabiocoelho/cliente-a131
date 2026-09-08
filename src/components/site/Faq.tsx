import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/config";

const faqs = [
  {
    q: "Como funciona o atendimento?",
    a: "Você entra em contato pelo WhatsApp, nos conta o que precisa, envia os documentos digitalmente e cuidamos de todo o resto — com atualizações a cada etapa.",
  },
  {
    q: "Quanto tempo demora cada serviço?",
    a: "Os prazos variam conforme o serviço e a demanda dos órgãos públicos. Após a análise do seu caso, informamos um prazo claro e realista, sem surpresas.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Depende do serviço. Após o primeiro contato, enviamos uma lista completa e simples do que você vai precisar, junto com orientação para cada item.",
  },
  {
    q: "Preciso ir até o escritório?",
    a: `Na maioria dos casos, não. Atendemos toda a região de ${SITE.cityState} de forma remota, com envio de documentos pelo WhatsApp. Se preferir presencial, é só combinar.`,
  },
  {
    q: "Como entro em contato?",
    a: `Pelo WhatsApp ${SITE.phoneDisplay}. Também respondemos com agilidade por telefone durante o horário comercial.`,
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos Pix, transferência, cartão de crédito e débito. Combinamos tudo antes de iniciar o serviço, com valor fechado.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-section-alt py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-brand-strong">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não achou sua resposta? Fale com a gente pelo WhatsApp.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-surface rounded-2xl border-b-0 bg-background px-5"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
