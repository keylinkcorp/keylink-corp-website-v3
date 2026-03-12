import { KeylinkLogo } from "@/components/brand/KeylinkLogo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type ConsultancyV2HeaderProps = {
  onLogoClick?: () => void;
  onPrimaryClick: () => void;
  primaryLabel?: string;
};

export function ConsultancyV2Header({
  onLogoClick,
  onPrimaryClick,
  primaryLabel = "Start cost calculator",
}: ConsultancyV2HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
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
