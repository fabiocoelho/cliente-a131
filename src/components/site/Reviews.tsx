import { Star } from "lucide-react";

/* TEMPLATE — depoimentos de exemplo. Substituir pelos depoimentos reais do cliente. */
const reviews = [
  {
    name: "Cliente 1",
    text: "Depoimento de exemplo: atendimento rápido e sem complicação, tudo resolvido no prazo combinado.",
  },
  {
    name: "Cliente 2",
    text: "Depoimento de exemplo: comunicação clara em cada etapa e preço combinado desde o início.",
  },
  {
    name: "Cliente 3",
    text: "Depoimento de exemplo: enviei os documentos pelo celular e recebi tudo pronto, sem precisar sair de casa.",
  },
  {
    name: "Cliente 4",
    text: "Depoimento de exemplo: equipe atenciosa, explicou todas as dúvidas com paciência.",
  },
  {
    name: "Cliente 5",
    text: "Depoimento de exemplo: resolveu uma pendência antiga que eu não conseguia resolver sozinho.",
  },
  {
    name: "Cliente 6",
    text: "Depoimento de exemplo: processo simples, transparente e com retorno muito rápido.",
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
