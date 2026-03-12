export function ConsultancyModernFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-10 grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Keylink Corp. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Disclaimer: We do not issue Commercial Registration (CR). CR is issued by Bahrain government authorities only.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-end">
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/terms-of-service"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/cookie-policy"
            target="_blank"
            rel="noreferrer"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
