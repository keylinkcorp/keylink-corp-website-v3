import { cn } from "@/lib/utils";
import logoSrc from "@/assets/brand/keylink-logo-v4.svg";

type KeylinkLogoProps = {
  className?: string;
  alt?: string;
  /** Use when placed on dark backgrounds (adds a subtle badge for legibility). */
  onDark?: boolean;
};

export function KeylinkLogo({ className, alt = "Keylink Corp", onDark }: KeylinkLogoProps) {
  const img = (
    <img
      src={logoSrc}
      alt={alt}
      loading="eager"
      className={cn("block h-8 w-auto", className)}
    />
  );

  if (!onDark) return img;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border border-border/60 bg-background/95 px-3 py-2 shadow-sm",
      )}
    >
      {img}
    </span>
  );
}
