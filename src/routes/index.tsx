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
import { SITE } from "@/lib/site";
import heroAvif960 from "@/assets/hero-960.avif";
import heroAvif640 from "@/assets/hero-640.avif";

const TITLE = `${SITE.name} — Despachante em ${SITE.cityState}`;
const DESCRIPTION = `${SITE.name}, despachante em ${SITE.cityState}: transferência de veículo, CNH, licenciamento e mais. Atendimento rápido pelo WhatsApp ${SITE.phoneDisplay}.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: DESCRIPTION,
  telephone: `+${SITE.phoneRaw}`,
  areaServed: SITE.cityState,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
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
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        href: heroAvif960,
        imagesrcset: `${heroAvif640} 640w, ${heroAvif960} 960w`,
        imagesizes: "(min-width: 1024px) 45vw, 100vw",
        fetchpriority: "high",
      },
    ],
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
