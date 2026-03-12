import { Button } from "@/components/ui/button";
import {
  Clock,
  FileCheck2,
  Landmark,
  Languages,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { EditorialImage } from "@/components/shared/EditorialImage";

type AboutConsultancySectionProps = {
  imageSrc: string;
  onBackToCalculator: () => void;
  /** Optional id anchor if you want to deep-link to this section later. */
  id?: string;
};

type Reason = {
  icon: typeof Clock;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Clock,
    title: "Fast turnaround",
    description:
      "Often 3–7 business days once documents are ready (timelines vary by activity and approvals).",
  },
  {
    icon: Landmark,
    title: "Local expertise",
    description:
      "Bahrain regulations and process know-how—so your steps are clear from day one.",
  },
  {
    icon: UserCheck,
    title: "Dedicated case manager",
    description:
      "One point of contact to coordinate your checklist, updates, and next actions.",
  },
  {
    icon: FileCheck2,
    title: "100% paperwork handled",
    description:
      "Checklists + requirements + submission flow coordination, so you don’t get stuck.",
  },
  {
    icon: Languages,
    title: "English + Arabic support",
    description: "Clear bilingual communication throughout the process.",
  },
];

export function AboutConsultancySection({
  imageSrc,
  onBackToCalculator,
  id,
}: AboutConsultancySectionProps) {
  return (
    <section id={id} className="section-spacing-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="section-badge">About</span>
            <h2 className="lp-h2">About Our Business Setup Consultancy</h2>

            <div className="mt-6 lp-card p-6 sm:p-7 md:p-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We’re an independent business consultancy focused on helping founders make confident setup decisions.
                Our work is checklist-driven: you get clarity on options, cost drivers, timelines, and what to prepare next.
              </p>

              {/* Trust / transparency callout */}
              <div className="mt-5 rounded-2xl border border-border/40 bg-muted/20 p-4 sm:p-5 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-accent mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are not affiliated with any government authority and we do not issue Commercial Registration (CR).
                </p>
              </div>

              {/* Why choose us */}
              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-sm font-semibold text-foreground">Why Choose Us</h3>
                  <p className="text-xs text-muted-foreground">Designed for clarity, not guesswork.</p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {REASONS.map((item, idx) => {
                    const Icon = item.icon;
                    const shouldSpan = idx === REASONS.length - 1;
                    return (
                      <div
                        key={item.title}
                        className={
                          "lp-card-flat bg-muted/20 p-4 sm:p-5 " + (shouldSpan ? "sm:col-span-2" : "")
                        }
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="outline" className="lp-cta-outline" onClick={onBackToCalculator}>
                Back to calculator
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lp-card p-3 sm:p-4 md:p-5 relative overflow-hidden">
            <EditorialImage
              src={imageSrc}
              alt="Young consulting team reviewing a setup checklist"
              ratio={4 / 3}
              overlayStrength={0.35}
            />

            {/* subtle overlay chips */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4 rounded-full border border-border/40 bg-background/80 px-3 py-1 text-[11px] text-foreground backdrop-blur">
                English + Arabic
              </div>
              <div className="absolute right-4 bottom-4 rounded-full border border-border/40 bg-background/80 px-3 py-1 text-[11px] text-foreground backdrop-blur">
                Checklist-driven
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
