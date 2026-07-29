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
    <a
      href={whatsappUrl("Olá! Cheguei pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105",
        visible ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2",
      )}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
