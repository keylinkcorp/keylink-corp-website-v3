import { KeylinkLogo } from "@/components/brand/KeylinkLogo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type ConsultancyModernHeaderProps = {
  onLogoClick?: () => void;
  onPrimaryClick: () => void;
  primaryLabel?: string;
};

export function ConsultancyModernHeader({
  onLogoClick,
  onPrimaryClick,
  primaryLabel = "Start calculator",
}: ConsultancyModernHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full relative border-b border-border/60 bg-background/80 backdrop-blur-xl">
      {/* Enhanced full-width divider (mirrors footer) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 border-b border-border/60" />

      <div className="container mx-auto flex h-18 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          onClick={onLogoClick}
          className="inline-flex items-center"
          aria-label="Scroll to top"
        >
          <KeylinkLogo className="h-10 w-auto md:h-12" />
        </button>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+97317008888">
              <Phone className="mr-2" />
              Call
            </a>
          </Button>
          <Button size="sm" onClick={onPrimaryClick}>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
