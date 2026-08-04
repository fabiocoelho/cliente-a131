import { MessageCircle } from "lucide-react";
import { SITE_CONFIG, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(SITE_CONFIG.whatsapp.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3"
      aria-label="Fale comigo no WhatsApp"
    >
      <span className="pointer-events-none rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
        Fale Comigo
      </span>
      <span className="pulse-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-soft">
        <MessageCircle className="relative h-7 w-7 text-primary-foreground" />
      </span>
    </a>
  );
}
