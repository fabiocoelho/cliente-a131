import { SITE } from "@/lib/config";

const stats = [
  { value: "20", label: "anos de mercado" },
  { value: "+50.000", label: "soluções executadas" },
  { value: "+15.000", label: "clientes atendidos" },
  { value: SITE.state, label: "atendemos todo o estado" },
];

export function TrustBar() {
  return (
    <section aria-label="Provas de confiança" className="border-y border-border bg-section-alt">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-surface rounded-2xl bg-background p-6 text-center md:text-left"
          >
            <div className="font-display text-3xl text-foreground sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
