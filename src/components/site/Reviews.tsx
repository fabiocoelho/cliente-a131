import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcelo Antunes",
    text: "Atendimento rápido e sem complicação, tudo resolvido no prazo combinado.",
  },
  {
    name: "Juliana Prestes",
    text: "Comunicação clara em cada etapa e preço combinado desde o início.",
  },
  {
    name: "Rodrigo Menezes",
    text: "Enviei os documentos pelo celular e recebi tudo pronto, sem precisar sair de casa.",
  },
  {
    name: "Carla Becker",
    text: "Equipe atenciosa, explicou todas as dúvidas com paciência.",
  },
  {
    name: "Everton Silveira",
    text: "Resolveram uma pendência antiga que eu não conseguia resolver sozinho.",
  },
  {
    name: "Patrícia Nunes",
    text: "Processo simples, transparente e com retorno muito rápido.",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="border-y border-border bg-section-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-strong">
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
              className="card-surface flex flex-col rounded-2xl bg-background p-6"
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
