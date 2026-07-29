import { Zap, Eye, Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

const items = [
  { icon: Zap, title: "Atendimento rápido", text: "Retorno em minutos e prazos que cumprimos." },
  { icon: Eye, title: "Total transparência", text: "Você acompanha cada etapa do processo." },
  { icon: Award, title: "Experiência comprovada", text: "Anos de atuação e milhares de clientes atendidos." },
  { icon: ShieldCheck, title: "Segurança e sigilo", text: "Seus dados e documentos tratados com cuidado." },
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Cada caso tratado com atenção individual." },
  { icon: Sparkles, title: "Processo simplificado", text: "Você envia e nós cuidamos do resto." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Por que escolher a gente.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft">
                <i.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl text-foreground">{i.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
