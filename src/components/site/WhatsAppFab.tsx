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
        "fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2",
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-md",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        )}
        aria-hidden="true"
      >
        Fale Comigo!
      </span>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-75 animate-ping"
          aria-hidden="true"
        />
        <MessageCircle className="h-7 w-7 fill-current" strokeWidth={2} />
      </a>
    </div>
  );
}
