import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

type Variant = "brand" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface Props {
  message?: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showIcon?: boolean;
}

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  brand:
    "bg-brand-strong text-brand-foreground hover:bg-brand-strong/90 shadow-[var(--shadow-soft)]",
  dark: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

export function WhatsAppButton({
  message,
  children = "Falar pelo WhatsApp",
  variant = "brand",
  size = "md",
  className,
  showIcon = true,
}: Props) {
  return (
    <Button
      asChild
      className={cn(
        "rounded-full font-medium transition-all",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
      >
        {showIcon && <MessageCircle className="mr-2 h-4 w-4" strokeWidth={2} />}
        {children}
      </a>
    </Button>
  );
}
