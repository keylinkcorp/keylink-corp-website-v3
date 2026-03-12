import { Ship, Warehouse, Factory, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitSection } from "@/components/shared/SplitSection";

import guideImage from "@/assets/free-zone/free-zones-guide-portrait-option-1.jpg";

const zones = [
  {
    name: "BIW",
    fullName: "Bahrain Investment Wharf",
    icon: Ship,
    focus: "Logistics & Warehousing",
    price: "From BHD 2/sqm",
    href: "/free-zone-in-bahrain/biw",
  },
  {
    name: "BLZ",
    fullName: "Bahrain Logistics Zone",
    icon: Warehouse,
    focus: "E-commerce & Distribution",
    price: "From BHD 3/sqm",
    href: "/free-zone-in-bahrain/blz",
  },
  {
    name: "BIIP",
    fullName: "Bahrain International Investment Park",
    icon: Factory,
    focus: "Manufacturing & Tech",
    price: "From BHD 1.5/sqm",
    href: "/free-zone-in-bahrain/biip",
  },
  {
    name: "Sitra",
    fullName: "Sitra Industrial Area",
    icon: Building2,
    focus: "Heavy Industry",
    price: "From BHD 1/sqm",
    href: "/free-zone-in-bahrain/sitra",
  },
];

export function FreeZonesGuide() {
  return (
    <SplitSection
      badge="Strategic locations"
      title="Industrial zones & business parks"
      subtitle="Specialized industrial areas with excellent infrastructure and regional market access."
      imageSrc={guideImage}
      imageAlt="Industrial logistics facilities and port-adjacent warehouses"
      imagePosition="right"
      variant="default"
      backgroundVariant="grid-lines"
      overlayOpacity={0.5}
      hideImageCaption
    >
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {zones.map((zone) => (
          <Link
            key={zone.name}
            to={zone.href}
            className="group block card-elevated-hover rounded-2xl p-4 md:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                <zone.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-primary">
                    {zone.name}
                  </h3>
                  <span className="text-xs font-medium text-accent whitespace-nowrap">
                    {zone.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{zone.focus}</p>
                <p className="mt-2 text-xs text-muted-foreground">{zone.fullName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 card-elevated rounded-2xl p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Land from BHD 1/sqm/month
          </p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
          >
            Get location advice
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </SplitSection>
  );
}
