import { Button } from "@/components/ui/button";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function FreeZoneMidCTA() {
  return (
    <section className="section-spacing relative overflow-hidden bg-background">
      <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} className="opacity-70" />
      <SectionBackgroundOverlay variant="dots" opacity={0.45} />
      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">

          <div className="card-elevated overflow-hidden">
            <div
              className="relative p-8 md:p-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 12% 20%, hsl(var(--gold) / 0.10) 0%, transparent 55%),
                  radial-gradient(circle at 88% 60%, hsl(var(--navy) / 0.10) 0%, transparent 55%)
                `,
              }}
            >
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-accent tracking-wide uppercase">
                  Shortlist → confirm → register
                </p>
                <h2 className="mt-3 text-balance">
                  Get a compliant zone recommendation in one call
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Share your activity and space requirement (sqm). We’ll confirm approvals, zone-fit, and the fastest clean
                  setup path.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                    <Link to="/free-consultation">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <a href="tel:+97317000000">
                      <Phone className="w-5 h-5" />
                      Call +973 1700 0000
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
