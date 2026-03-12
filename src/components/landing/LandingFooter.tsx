import { cn } from "@/lib/utils";

type LandingFooterProps = {
  frameMaxWidthClassName?: string;
};

export function LandingFooter({ frameMaxWidthClassName }: LandingFooterProps) {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      {/* Enhanced full-width divider (matches framed LP borders) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 border-t border-border/60" />

      {/* Optional framed inner wrapper so footer can mirror framed headers/sections */}
      <div className={cn("mx-auto bg-background md:border-x md:border-border/60", frameMaxWidthClassName)}>
        <div className="container mx-auto flex flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Keylink Corp. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">
              Disclaimer: We do not issue Commercial Registration (CR). CR is issued by Bahrain government authorities only.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="/terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="/cookie-policy"
              target="_blank"
              rel="noreferrer"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


