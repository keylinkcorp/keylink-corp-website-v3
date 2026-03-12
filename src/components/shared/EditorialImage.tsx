import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type EditorialImageProps = {
  src: string;
  alt: string;
  loading?: "eager" | "lazy";
  /** Optional aspect ratio (e.g. 16/10). If omitted, image fills container height. */
  ratio?: number;
  className?: string;
  imgClassName?: string;
  /** Strength of overlays: 0..1 (default 0.6) */
  overlayStrength?: number;
};

export function EditorialImage({
  src,
  alt,
  loading = "lazy",
  ratio,
  className,
  imgClassName,
  overlayStrength = 0.6,
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/60 bg-card",
        className,
      )}
    >
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <img
            src={src}
            alt={alt}
            loading={loading}
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        </AspectRatio>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}

      {/* Editorial treatments: subtle depth + cohesive toning (no heavy effects) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ opacity: Math.min(1, Math.max(0, overlayStrength)) }}
      >
        <div className="absolute inset-0 overlay-navy-vertical opacity-70" />
        <div className="absolute inset-0 overlay-gold-accent opacity-60" />
        <div className="absolute inset-0 noise-texture opacity-[0.25]" />
      </div>
    </div>
  );
}
