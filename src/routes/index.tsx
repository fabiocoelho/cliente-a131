import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Differentials } from "@/components/site/Differentials";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { MapContact } from "@/components/site/MapContact";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const TITLE = "Alessandro Despachante em Porto Alegre/RS — Atendimento rápido";
const DESCRIPTION =
  "Alessandro Despachante em Porto Alegre/RS: transferência de veículo, CNH, licenciamento e mais. Atendimento rápido pelo WhatsApp (51) 98405-7842.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alessandro Despachante",
  description: DESCRIPTION,
  telephone: "+55 51 98405-7842",
  areaServed: "Porto Alegre, RS",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Differentials />
        <Reviews />
        <About />
        <Faq />
        <MapContact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
