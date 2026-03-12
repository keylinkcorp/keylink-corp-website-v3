import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroReviewStripProps = {
  align?: "left" | "center";
  className?: string;
};

export function HeroReviewStrip({ align = "left", className }: HeroReviewStripProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-start sm:items-center gap-6",
        isCenter ? "justify-center" : "justify-start",
        className,
      )}
      aria-label="Customer reviews summary"
    >
      {/* Google Reviews */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="h-9 w-9 rounded-full bg-gold/20 border-2 border-background ring-1 ring-border/50 shadow-sm flex items-center justify-center text-xs font-semibold text-gold"
            >
              {String.fromCharCode(64 + idx)}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-[22px] w-[22px] fill-gold text-gold" aria-hidden="true" />
            ))}
            <span className="text-sm font-semibold text-primary ml-1.5">4.9</span>
          </div>
          <span className="text-xs text-muted-foreground">Google Reviews</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-10 w-px bg-border" aria-hidden="true" />

      {/* Trustpilot */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="h-9 w-9 rounded-full bg-trustpilot/20 border-2 border-background ring-1 ring-border/50 shadow-sm flex items-center justify-center text-xs font-semibold text-trustpilot"
            >
              {String.fromCharCode(67 + idx)}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-[22px] w-[22px] fill-trustpilot text-trustpilot" aria-hidden="true" />
            ))}
            <span className="text-sm font-semibold text-primary ml-1.5">4.8</span>
          </div>
          <span className="text-xs text-muted-foreground">Trustpilot</span>
        </div>
      </div>
    </div>
  );
}
