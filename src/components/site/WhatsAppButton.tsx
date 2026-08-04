import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5551980573087?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3"
      aria-label="Fale comigo no WhatsApp"
    >
      {/* Balão de Texto (Hover) */}
      <span className="pointer-events-none rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100 border border-gray-100 hidden sm:inline-block">
        Fale Comigo!
      </span>

      {/* Círculo do WhatsApp com Anel Pulsante */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 group-hover:scale-110">
        {/* Anel de Pulso / Radar */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        
        {/* Ícone */}
        <MessageCircle className="relative h-7 w-7 text-white fill-current" />
      </span>
    </a>
  );
}

export default WhatsAppFloat;
