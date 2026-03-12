import { cn } from "@/lib/utils";

type KeylinkLogoProps = {
  className?: string;
  alt?: string;
  onDark?: boolean;
};

export function KeylinkLogo({ className, alt = "Keylink Corp", onDark }: KeylinkLogoProps) {
  // Use text-based logo since the SVG asset may not be available yet
  const logo = (
    <span className={cn("block font-bold text-2xl tracking-tight", onDark ? "text-white" : "text-primary", className)}>
      Keylink<span className="text-gold">Corp</span>
    </span>
  );

  if (!onDark) return logo;

  return (
    <span className={cn("inline-flex items-center rounded-xl border border-border/60 bg-background/95 px-3 py-2 shadow-sm")}>
      {logo}
    </span>
  );
}
