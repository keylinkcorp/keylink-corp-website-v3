import { Button } from "@/components/ui/button";
import { SplitSection } from "@/components/shared/SplitSection";

import pricingPortrait from "@/assets/company-formation/lp/pricing-portrait.jpg";

const COST_DRIVERS = [
  "Activity (some require extra approvals)",
  "Company type (WLL / SPC / Branch)",
  "Office type",
  "Visas required",
  "Shareholder profile & eligibility",
  "Add-ons (PRO, accounting, bank support)",
];

export function CompanyFormationPricingSection(props: {
  onScrollToCalculator: () => void;
  onScrollToBooking: () => void;
}) {
  const { onScrollToCalculator, onScrollToBooking } = props;

  return (
    <SplitSection
      badge="Pricing"
      title="What affects your company formation cost"
      subtitle="Costs vary mainly by activity, visas, office, and shareholder profile. Use the calculator for a fast estimate—then we’ll confirm exact fees on the free call."
      useLpHeadings
      imageSrc={pricingPortrait}
      imageAlt="Professional discussion about costs and business setup"
      imagePosition="left"
      imageSticky
      variant="subtle"
      backgroundVariant="ibelick-lines"
      overlayOpacity={0.8}
      overlayMasked
      contentColSpanLg={7}
      imageColSpanLg={5}
      imageRatio={4 / 5}
      imageOverlayStrength={0.45}
      imageImgClassName="object-[center_55%]"
    >
      <div className="grid gap-4">
        <div className="lp-card p-5 sm:p-6 md:p-7">
          <div className="text-sm font-semibold text-foreground">Key cost drivers</div>

          <div className="mt-4 flex flex-wrap gap-2">
            {COST_DRIVERS.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border/40 bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="w-full sm:w-auto" onClick={onScrollToCalculator}>
              Calculate estimate
            </Button>
            <Button className="w-full sm:w-auto" variant="outline" onClick={onScrollToBooking}>
              Book free call
            </Button>
          </div>
        </div>

        <div className="lp-card p-5 sm:p-6 md:p-7">
          <div className="text-sm font-semibold text-foreground">Typical ranges (guidance)</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Most setups fall within a range once you include office + visas. Exact totals depend on your activity,
            shareholder profile, and approvals.
          </p>
          <div className="mt-4 lp-card-flat bg-muted/20 p-5">
            <p className="text-sm text-foreground font-semibold">Best way to get an accurate number:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the calculator below for a quick estimate, then book the free call to confirm the exact fees and
              timeline.
            </p>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Note: Calculator estimates are directional—not a legal quote.
          </p>
        </div>
      </div>
    </SplitSection>
  );
}
