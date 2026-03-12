import type React from "react";
import { cn } from "@/lib/utils";

export type SectionOverlayVariant =
  | "none"
  | "grid-lines"
  | "dots"
  | "radial"
  | "ibelick-soft"
  | "ibelick-lines";

type SectionBackgroundOverlayProps = {
  variant?: SectionOverlayVariant;
  /** 0..1 (defaults depend on variant) */
  opacity?: number;
  /** Extra overlay classes (must stay decorative) */
  className?: string;
  /** If true, apply a soft radial mask so patterns fade near edges */
  masked?: boolean;
};

export function SectionBackgroundOverlay({
  variant = "none",
  opacity,
  className,
  masked = true,
}: SectionBackgroundOverlayProps) {
  if (variant === "none") return null;

  const style: React.CSSProperties = {};

  if (variant === "radial") {
    style.backgroundImage = `
      radial-gradient(circle at 15% 35%, hsl(var(--gold) / 0.12) 0%, transparent 55%),
      radial-gradient(circle at 85% 70%, hsl(var(--navy) / 0.10) 0%, transparent 55%)
    `;
  }

  if (variant === "dots") {
    style.backgroundImage = `radial-gradient(hsl(var(--foreground) / 0.07) 1px, transparent 1px)`;
    style.backgroundSize = "22px 22px";
    style.backgroundPosition = "0 0";
  }

  if (masked) {
    style.maskImage =
      "radial-gradient(circle at 50% 35%, black 0%, black 62%, transparent 92%)";
    (style as Record<string, unknown>).WebkitMaskImage = style.maskImage;
  }

  const defaultOpacity =
    opacity ??
    (variant === "grid-lines" ? 0.65 : variant === "dots" ? 0.6 : variant === "ibelick-lines" ? 0.75 : 1);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        variant === "grid-lines" ? "pattern-grid-lines-light" : "",
        variant === "ibelick-soft" ? "overlay-ibelick-soft" : "",
        variant === "ibelick-lines" ? "overlay-ibelick-lines" : "",
        className,
      )}
      style={{ ...style, opacity: defaultOpacity }}
    />
  );
}
