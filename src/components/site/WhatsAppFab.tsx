import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "group fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300",
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <span
        role="tooltip"
        className="pointer-events-none hidden translate-x-2 rounded-full border border-[#9E9E9E] bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-[var(--shadow-elegant)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
      >
        Fale comigo!
      </span>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </a>
    </div>
  );
}
