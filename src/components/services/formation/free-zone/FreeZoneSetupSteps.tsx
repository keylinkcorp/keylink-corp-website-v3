import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, ShieldCheck, Stamp } from "lucide-react";
import { SplitSection } from "@/components/shared/SplitSection";

import stepsImage from "@/assets/free-zone/free-zone-steps.jpg";

const steps = [
  {
    title: "Confirm activity + ownership",
    description:
      "We confirm your business activity, ownership eligibility, and whether you need special approvals before you submit anything.",
    icon: ShieldCheck,
  },
  {
    title: "Choose zone + address",
    description:
      "Pick the zone that matches your operations (logistics, manufacturing, warehousing) and secure an address/lease suitable for licensing.",
    icon: MapPin,
  },
  {
    title: "Prepare documents",
    description:
      "We prepare the paperwork set (shareholders, company details, and any corporate documents) so your submission is complete.",
    icon: FileText,
  },
  {
    title: "Submit + issue license",
    description:
      "We submit, follow up, and keep you updated until registration and licensing are completed.",
    icon: Stamp,
  },
];

export function FreeZoneSetupSteps() {
  return (
    <SplitSection
      badge="Process"
      title="Setup steps (simple and predictable)"
      subtitle="A clear path from “what should we register?” to “ready to operate”, with fewer delays."
      imageSrc={stepsImage}
      imageAlt="Consultation meeting planning a setup process"
      variant="default"
      backgroundVariant="radial"
      overlayOpacity={1}
      layout="stacked"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <Card key={step.title} className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Step {index + 1}</p>
                  <h3 className="mt-1 text-lg md:text-xl font-semibold text-primary tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SplitSection>
  );
}
