import { CheckCircle2, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { FormationCalculatorSnapshot } from "@/components/services/formation/FormationCostCalculator";

type CompanyFormationEstimateSummaryProps = {
  estimate: FormationCalculatorSnapshot;
  onContinue: () => void;
};

export function CompanyFormationEstimateSummary({
  estimate,
  onContinue,
}: CompanyFormationEstimateSummaryProps) {
  return (
    <section aria-label="Summary" className="section-spacing-sm">
      <div className="container mx-auto px-4 md:px-6">
        <span className="section-badge">Summary</span>
        <h2>Your estimate (quick recap)</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Quote card */}
          <div className="card-elevated p-6 md:p-7 lg:col-span-7">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Company type</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {estimate.companyType.toUpperCase()}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    <span>Timeline: {estimate.timeline || "—"}</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-muted/20 px-5 py-4">
                  <p className="text-sm text-muted-foreground">Estimated total</p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                    BHD {estimate.total.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/60">
                <div className="px-5 py-4 border-b border-border/60">
                  <p className="text-sm font-semibold text-foreground">Cost breakdown</p>
                  <p className="text-sm text-muted-foreground">
                    A clear estimate based on your selections.
                  </p>
                </div>

                <div className="px-5 py-3">
                  <div className="divide-y divide-border/60">
                    {estimate.breakdown.map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-3 text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold text-foreground">
                          {item.amount < 0 ? "-" : ""}BHD {Math.abs(item.amount).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
                <p className="text-sm font-semibold text-foreground">What happens next</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {[
                    "We confirm eligibility for your activities (and any approvals).",
                    "You get a final cost + document checklist.",
                    "We align timeline and start the process.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <aside className="lg:col-span-5">
            <div className="card-elevated p-6 md:p-7 h-full">
              <p className="text-sm font-semibold text-foreground">Next step</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Book your free 30‑minute consultation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We’ll confirm approvals, final pricing, and timeline—no obligation.
              </p>

              <div className="mt-6 grid gap-3">
                <Button size="lg" onClick={onContinue}>
                  Continue to booking
                </Button>
                <p className="text-xs text-muted-foreground">
                  Free • Google Meet • No obligation
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
