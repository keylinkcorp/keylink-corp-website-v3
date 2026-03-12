import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitCompare, Home, Building2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

type LeaseType = "residential" | "commercial";

const leaseTypes = [
  { id: "residential" as LeaseType, name: "Residential Lease", icon: Home },
  { id: "commercial" as LeaseType, name: "Commercial Lease", icon: Building2 },
];

const comparisonData = [
  {
    attribute: "Property Types",
    residential: "Apartments, Villas, Townhouses",
    commercial: "Offices, Retail, Warehouses",
  },
  {
    attribute: "Registration Fee",
    residential: "BHD 1-5",
    commercial: "BHD 5-10",
  },
  {
    attribute: "Required Documents",
    residential: "CPR, Ownership, Lease",
    commercial: "CR, Ownership, Lease",
  },
  {
    attribute: "Arabic Translation",
    residential: "Required",
    commercial: "Required",
  },
  {
    attribute: "Processing Time",
    residential: "Same-day to 24 hrs",
    commercial: "24-48 hours",
  },
  {
    attribute: "Common Use Cases",
    residential: "Family housing, expat rentals",
    commercial: "Business premises, retail units",
  },
  {
    attribute: "Visa Eligibility",
    residential: "Family visa proof",
    commercial: "Business address proof",
  },
  {
    attribute: "Typical Duration",
    residential: "1-2 years",
    commercial: "2-5 years",
  },
];

export function LeaseTypesComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeType, setActiveType] = useState<LeaseType>("residential");

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <GitCompare className="w-4 h-4" />
              Lease Types
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Residential vs Commercial{" "}
              <span className="text-accent">Lease Registration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understand the differences in documentation and processing
            </p>
          </motion.div>

          {/* Type Tabs */}
          <motion.div variants={staggerItem} className="flex justify-center gap-4 mb-12">
            {leaseTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all",
                  activeType === type.id
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-white text-muted-foreground border border-border hover:border-accent"
                )}
              >
                <type.icon className="w-5 h-5" />
                {type.name}
              </button>
            ))}
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-primary text-white">
                <div className="p-4 font-semibold border-r border-white/10">Attribute</div>
                <div className={cn(
                  "p-4 font-semibold border-r border-white/10 text-center",
                  activeType === "residential" && "bg-accent text-primary"
                )}>
                  Residential
                </div>
                <div className={cn(
                  "p-4 font-semibold text-center",
                  activeType === "commercial" && "bg-accent text-primary"
                )}>
                  Commercial
                </div>
              </div>

              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "grid grid-cols-3",
                    index % 2 === 0 ? "bg-secondary/30" : "bg-white"
                  )}
                >
                  <div className="p-4 font-medium text-primary border-r border-border">
                    {row.attribute}
                  </div>
                  <div className={cn(
                    "p-4 text-center text-sm border-r border-border",
                    activeType === "residential" ? "bg-accent/10 font-semibold text-primary" : "text-muted-foreground"
                  )}>
                    {row.residential}
                  </div>
                  <div className={cn(
                    "p-4 text-center text-sm",
                    activeType === "commercial" ? "bg-accent/10 font-semibold text-primary" : "text-muted-foreground"
                  )}>
                    {row.commercial}
                  </div>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
              <p className="text-center text-muted-foreground">
                Both lease types follow the same RERA registration process through bahrain.bh. 
                The primary differences are in documentation requirements and fee structures.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
