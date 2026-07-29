import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carla M.",
    text: "Atendimento impecável. Resolveu a transferência do meu carro em poucos dias, sem que eu precisasse ir a lugar nenhum.",
  },
  {
    name: "Rodrigo S.",
    text: "Sério, profissional e muito rápido. Recomendo de olhos fechados para qualquer serviço de despachante.",
  },
  {
    name: "Fernanda L.",
    text: "Explicou cada passo com clareza. Me passou tranquilidade do início ao fim. Voltarei a usar sempre.",
  },
  {
    name: "Bruno A.",
    text: "Consegui renovar minha CNH sem estresse. Preço justo e prazo cumprido à risca.",
  },
  {
    name: "Patrícia R.",
    text: "Excelente! Resolveu um problema antigo com débitos do meu veículo que ninguém conseguia resolver.",
  },
  {
    name: "Marcelo T.",
    text: "Comunicação por WhatsApp muito ágil. Enviei os documentos e recebi tudo pronto em casa.",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="border-y border-border bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Avaliações
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Quem contrata, indica.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-1 text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                  via Google
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
