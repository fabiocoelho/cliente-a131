import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import logoRsMultas from "@/assets/logo-rs-multas.png";
import logoRsMultasWebp from "@/assets/logo-rs-multas.webp";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2"
          aria-label={SITE.name}
        >
          <picture>
            <source type="image/webp" srcSet={logoRsMultasWebp} />
            <img
              src={logoRsMultas}
              alt={`Logo ${SITE.name}`}
              className="h-9 w-9 shrink-0 object-contain"
              width={36}
              height={36}
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <span className="truncate font-display text-lg tracking-tight text-foreground">
            {SITE.name}
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block">
            <WhatsAppButton size="sm">
              WhatsApp
            </WhatsAppButton>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
                <nav className="mt-6 flex flex-col gap-1">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-6">
                  <WhatsAppButton size="lg" className="w-full">
                    Falar pelo WhatsApp
                  </WhatsAppButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
