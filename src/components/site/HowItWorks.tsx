const steps = [
  {
    n: "01",
    title: "Entre em contato",
    text: "Fale pelo WhatsApp e nos diga o que você precisa.",
  },
  {
    n: "02",
    title: "Envie as informações",
    text: "Você envia os documentos necessários pelo celular.",
  },
  {
    n: "03",
    title: "Cuidamos de tudo",
    text: "Nossa equipe executa cada etapa com transparência.",
  },
  {
    n: "04",
    title: "Serviço concluído",
    text: "Você recebe tudo pronto, sem sair de casa.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Simples do começo ao fim.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <div className="font-display text-4xl text-brand">{s.n}</div>
              <h3 className="mt-4 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
