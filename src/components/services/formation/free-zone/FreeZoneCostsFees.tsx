import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { Banknote, Calculator, FileText, MapPin } from "lucide-react";

import costsImage from "@/assets/free-zone/free-zone-costs-option-3.jpg";

const cards = [
  {
    icon: FileText,
    title: "Registration + licensing",
    description:
      "Fees vary based on company type and activity approvals. Regulated activities often require additional steps and time.",
  },
  {
    icon: MapPin,
    title: "Address / lease",
    description:
      "Your industrial zone choice (BLZ, BIIP, BIW, Sitra) and facility type (office/warehouse/land) impacts monthly costs.",
  },
  {
    icon: Banknote,
    title: "Operating requirements",
    description:
      "Some activities need minimum space, specific facility standards, or staffing considerations—these affect total cost of setup.",
  },
];

const examples = [
  {
    title: "Example 1 — Small distribution (warehouse)",
    items: [
      "Zone: BLZ / BIW shortlist",
      "Space: ~100–200 sqm",
      "Primary cost drivers: address + approvals + warehouse readiness",
    ],
  },
  {
    title: "Example 2 — Light manufacturing (industrial plot/facility)",
    items: [
      "Zone: BIIP / Sitra shortlist",
      "Space: activity-dependent",
      "Primary cost drivers: facility standards + industrial approvals + utilities",
    ],
  },
  {
    title: "Example 3 — E‑commerce fulfillment hub",
    items: [
      "Zone: BLZ shortlist",
      "Space: scalable (start small, expand)",
      "Primary cost drivers: warehousing + logistics workflow + staffing",
    ],
  },
];

export function FreeZoneCostsFees() {
  return (
    <section className="section-spacing relative overflow-hidden bg-secondary/40">
      <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} className="opacity-60" />
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.45} masked />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: content */}
            <div className="lg:col-span-7 lg:order-1">
              <header className="mb-8 md:mb-10">
                <div className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Costs &amp; fees
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-primary">
                  Free zone in Bahrain cost (what actually drives the price)
                </h2>
                <p className="mt-3 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
                  If you’re comparing free zone in Bahrain cost or company formation cost in Bahrain, the biggest swings usually
                  come from activity approvals and address/facility requirements — not just government fees.
                </p>
              </header>

              <div className="grid gap-6">
                {/* Accordion */}
                <Card className="card-elevated">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible defaultValue="registration" className="px-6 py-2">
                      {cards.map((c) => (
                        <AccordionItem
                          key={c.title}
                          value={
                            c.title === "Registration + licensing"
                              ? "registration"
                              : c.title === "Address / lease"
                                ? "address"
                                : "operating"
                          }
                          className="border-border"
                        >
                          <AccordionTrigger className="py-5 hover:no-underline">
                            <span className="flex items-center gap-3 text-left">
                              <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                                <c.icon className="w-5 h-5 text-accent" />
                              </span>
                              <span className="text-base font-semibold text-primary tracking-tight">{c.title}</span>
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                            {c.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}

                      <AccordionItem value="examples" className="border-border">
                        <AccordionTrigger className="py-5 hover:no-underline">
                          <span className="flex items-center gap-3 text-left">
                            <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                              <Banknote className="w-5 h-5 text-accent" />
                            </span>
                            <span className="text-base font-semibold text-primary tracking-tight">
                              Realistic examples (for planning)
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {examples.map((ex) => (
                              <div key={ex.title} className="rounded-xl border border-border bg-background p-4">
                                <p className="text-sm font-semibold text-primary">{ex.title}</p>
                                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                  {ex.items.map((it) => (
                                    <li key={it} className="flex gap-2">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                                      <span>{it}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <p className="mt-4 text-xs text-muted-foreground">
                            Note: Exact fees and timelines depend on the registered activity, approvals, and the chosen facility.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Highlight */}
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Calculator className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-primary">Fast pricing method</p>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          We estimate total setup by confirming: (1) your activity, (2) ownership eligibility, (3) zone-fit, and (4)
                          space requirement (sqm). This prevents under-budgeting and avoids choosing a lease that doesn’t match
                          licensing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:col-span-5 lg:order-2">
              <figure className="card-elevated overflow-hidden">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={costsImage}
                    alt="Business documents and calculator used for formation cost planning"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
