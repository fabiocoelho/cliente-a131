import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { WhatsAppButton } from "./WhatsAppButton";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onOpenChange, links }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[85vw] max-w-sm">
        <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
        <nav className="mt-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => onOpenChange(false)}
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
  );
}
