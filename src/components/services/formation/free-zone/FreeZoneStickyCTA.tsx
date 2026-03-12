import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

type FreeZoneStickyCTAProps = {
  showAfterPx?: number;
  className?: string;
};

export function FreeZoneStickyCTA({
  showAfterPx = 520,
  className,
}: FreeZoneStickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfterPx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 p-3 md:p-0 md:inset-auto md:bottom-6 md:right-6",
        visible ? "pointer-events-auto" : "pointer-events-none",
        className,
      )}
      aria-hidden={!visible}
    >
      <div
        className={cn(
          "relative overflow-hidden card-elevated",
          "mx-auto max-w-md md:max-w-none",
          "transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 md:translate-y-2",
        )}
      >
        <SectionBackgroundOverlay variant="grid-lines" opacity={0.45} masked />
        <div className="relative z-10 flex items-center justify-between gap-3 p-3 md:p-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-primary truncate">
              Need a fast compliant recommendation?
            </div>
            <div className="text-xs text-muted-foreground truncate">
              Free consult • Share activity + sqm
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button asChild size="sm" className="btn-gold">
              <Link to="/free-consultation">Free consultation</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="bg-background">
              <a href="tel:+97317000000" aria-label="Call Keylink Corp">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
