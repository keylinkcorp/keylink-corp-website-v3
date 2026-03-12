import {
  Building2,
  Clock,
  FileText,
  MessageSquareText,
  ReceiptText,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { SplitSection } from "@/components/shared/SplitSection";

import whatYouGetImage from "@/assets/company-formation/lp/what-you-get-portrait.jpg";

type BenefitItem = {
  title: string;
  detail: string;
  Icon: LucideIcon;
};

type TrustHighlight = {
  label: string;
  Icon: LucideIcon;
};

const TRUST_HIGHLIGHTS: TrustHighlight[] = [
  { label: "Free 30-minute call", Icon: Clock },
  { label: "Transparent pricing", Icon: ReceiptText },
  { label: "3–7 day typical timeline", Icon: ShieldCheck },
];

const BENEFITS: BenefitItem[] = [
  {
    title: "Business structure advice",
    detail: "Tailored to your goals",
    Icon: Building2,
  },
  {
    title: "Transparent cost breakdown",
    detail: "No hidden fees",
    Icon: ReceiptText,
  },
  {
    title: "Realistic timeline estimate",
    detail: "Based on your setup",
    Icon: Clock,
  },
  {
    title: "Document checklist",
    detail: "What to prepare to start",
    Icon: FileText,
  },
  {
    title: "Direct Q&A",
    detail: "Talk with our setup experts",
    Icon: MessageSquareText,
  },
  {
    title: "Next-step plan",
    detail: "Simple and actionable",
    Icon: Route,
  },
];

export function CompanyFormationCallSection() {
  return (
    <SplitSection
      badge="What you get"
      badgeClassName="inline-flex items-center rounded-full border border-border/25 bg-background px-3 py-1 text-xs font-semibold text-foreground/80"
      headerClassName="mb-5 md:mb-6"
      titleTopMarginClassName="mt-2"
      subtitleTopMarginClassName="mt-2"
      title="What happens on the call"
      subtitle="Practical guidance and a clean plan—so you move fast and avoid surprises."
      useLpHeadings
      leadClassName="text-sm sm:text-base text-foreground/75 max-w-xl"
      imageSrc={whatYouGetImage}
      imageAlt="Business consultation reviewing a checklist"
      imagePosition="left"
      contentColSpanLg={7}
      imageColSpanLg={5}
      imageSticky
      variant="default"
      backgroundVariant="ibelick-lines"
      overlayOpacity={0.35}
      overlayMasked
      imageRatio={4 / 3}
      imageTreatment="none"
      imageFrame="flat"
      imageOverlayStrength={0.35}
      imageImgClassName="object-[center_35%]"
    >
      <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
        {TRUST_HIGHLIGHTS.map(({ label, Icon }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-background px-3 py-1.5 text-xs sm:text-sm text-foreground/80"
          >
            <Icon className="h-4 w-4 text-accent" />
            <span className="whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:gap-5 mt-6 md:mt-7">
        {BENEFITS.map(({ title, detail, Icon }) => (
          <div
            key={title}
            className="h-full rounded-2xl border border-border/15 bg-background p-5 sm:p-6 flex gap-3.5 sm:gap-4 items-start"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/20 bg-muted/10">
              <Icon className="h-4.5 w-4.5 text-accent" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-foreground">
                {title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}

