import {
  Car,
  FileCheck2,
  IdCard,
  RefreshCw,
  FileText,
  ClipboardCheck,
  ArrowUpRight,
  Search,
  ArrowRight,
} from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

const services = [
  {
    icon: Car,
    title: "Transferência de veículo",
    description: "Compra, venda e mudança de titularidade sem dor de cabeça.",
  },
  {
    icon: FileCheck2,
    title: "Licenciamento anual",
    description: "Regularize seu veículo com rapidez e sem filas.",
  },
  {
    icon: IdCard,
    title: "1ª habilitação (CNH)",
    description: "Todo o processo acompanhado do início ao fim.",
  },
  {
    icon: RefreshCw,
    title: "Renovação de CNH",
    description: "Renove sua carteira sem se perder na burocracia.",
  },
  {
    icon: FileText,
    title: "2ª via de documentos",
    description: "CRLV, CRV e demais documentos com agilidade.",
  },
  {
    icon: ClipboardCheck,
    title: "Vistoria veicular",
    description: "Agendamos e conduzimos toda a vistoria por você.",
  },
  {
    icon: ArrowUpRight,
    title: "Mudança de categoria",
    description: "Alteração de categoria da CNH com suporte completo.",
  },
  {
    icon: Search,
    title: "Consulta de débitos",
    description: "Levantamento completo de multas, IPVA e pendências.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-5xl">
            Cuidamos de toda a sua documentação.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções completas de despachante em {SITE.cityState}, com atendimento
            personalizado e prazos claros.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-surface group flex flex-col rounded-2xl bg-card p-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="flex-1" />
              <a
                href={whatsappUrl(SITE.whatsappServiceMessage(s.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground transition-colors group-hover:text-brand"
              >
                Solicitar atendimento
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
