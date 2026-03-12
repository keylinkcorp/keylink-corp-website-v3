import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Globe, Shield } from "lucide-react";
import { SplitSection } from "@/components/shared/SplitSection";
import { cn } from "@/lib/utils";

import quickAnswerImage from "@/assets/free-zone/free-zone-steps-portrait.jpg";

const highlights = [
  {
    icon: Clock,
    title: "Typical setup timeline",
    value: "3–7 working days",
    note: "Depends on activity & approvals",
  },
  {
    icon: Globe,
    title: "Foreign ownership",
    value: "Up to 100%",
    note: "Most sectors (activity-dependent)",
  },
  {
    icon: Shield,
    title: "Compliance-first",
    value: "Avoid costly rework",
    note: "Right activity + right location",
  },
];

function HighlightCard({
  icon: Icon,
  title,
  value,
  note,
}: {
  icon: typeof Clock;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <Card className="card-elevated-hover h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-0.5 w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-accent" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {title}
            </p>
            <p className="mt-1 text-2xl md:text-[28px] font-semibold text-foreground tracking-tight leading-none">
              {value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">
              {note}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function FreeZoneQuickAnswer() {
  return (
    <SplitSection
      badge="Quick answer"
      title="Is there a free zone in Bahrain?"
      subtitle="Bahrain is often described as “free-zone-like” because many activities allow 100% foreign ownership and have a competitive tax environment. For industrial operations, dedicated zones and business parks (BLZ, BIIP, BIW and others) can provide clearer zoning, infrastructure, and logistics advantages."
      imageSrc={quickAnswerImage}
      imageAlt="Consultant and founder planning a company setup process"
      imageRatio={3 / 4}
      variant="default"
      backgroundVariant="radial"
      overlayOpacity={1}
      imagePosition="right"
    >
      <div className={cn("grid gap-4 sm:gap-6", "md:grid-cols-2", "items-stretch")}>
        {highlights.map((item, idx) => {
          const shouldSpan = idx === highlights.length - 1;
          return (
            <div key={item.title} className={cn(shouldSpan ? "md:col-span-2" : "")}
            >
              <HighlightCard
                icon={item.icon}
                title={item.title}
                value={item.value}
                note={item.note}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you need logistics, warehousing, light manufacturing, or an industrial address, selecting the right zone
            matters. We match <span className="font-medium text-primary">activity</span>,
            <span className="font-medium text-primary"> approvals</span>, and <span className="font-medium text-primary">location</span>
            so you can register once and operate smoothly.
          </p>
        </div>
      </div>
    </SplitSection>
  );
}
