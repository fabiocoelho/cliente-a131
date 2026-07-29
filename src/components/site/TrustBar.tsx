const stats = [
  { value: "+15", label: "anos de experiência" },
  { value: "+8.000", label: "atendimentos realizados" },
  { value: "5.0", label: "nota no Google" },
  { value: "RS", label: "atendemos todo o estado" },
];

export function TrustBar() {
  return (
    <section aria-label="Provas de confiança" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
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
