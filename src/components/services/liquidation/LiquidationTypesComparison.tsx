import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileX, Clock, Gavel, CheckCircle2, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const liquidationTypes = [
  {
    id: "voluntary",
    name: "Voluntary Liquidation",
    icon: FileX,
    description: "Solvent companies choosing to close",
    bestFor: "Solvent companies, shareholders decide",
    timeline: "4-8 weeks",
    courtRequired: false,
    creditorNotice: "90 days",
    startingPrice: "BHD 950",
    features: [
      "Shareholder resolution required",
      "Liquidator appointed by company",
      "Asset distribution to shareholders",
      "Clean liability discharge"
    ],
    highlight: false
  },
  {
    id: "striking",
    name: "Striking Off",
    icon: X,
    description: "Deregistration for dormant companies",
    bestFor: "Dormant CRs with no debts",
    timeline: "2-4 weeks",
    courtRequired: false,
    creditorNotice: "Not required",
    startingPrice: "BHD 650",
    features: [
      "No trading for 12+ months",
      "No outstanding debts",
      "Simplified process",
      "Fastest closure option"
    ],
    highlight: true
  },
  {
    id: "compulsory",
    name: "Compulsory Liquidation",
    icon: Gavel,
    description: "Court-ordered closures",
    bestFor: "Court-ordered, creditor initiated",
    timeline: "3-6 months",
    courtRequired: true,
    creditorNotice: "Court supervised",
    startingPrice: "Quote Required",
    features: [
      "Court appoints liquidator",
      "Creditor protection priority",
      "Legal proceedings required",
      "Complex asset distribution"
    ],
    highlight: false
  }
];

export function LiquidationTypesComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileX className="w-4 h-4" />
              Closure Options
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Choose Your <span className="text-accent">Liquidation Type</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three paths to properly close your Bahrain company
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {liquidationTypes.map((type, index) => {
              const TypeIcon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  variants={staggerItem}
                  className={cn(
                    "relative rounded-3xl border-2 p-8 transition-all hover:shadow-md",
                    type.highlight 
                      ? "border-accent bg-accent/5" 
                      : "border-border bg-white hover:border-accent/40"
                  )}
                >
                  {type.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                    type.highlight ? "bg-accent" : "bg-primary/10"
                  )}>
                    <TypeIcon className={cn(
                      "w-7 h-7",
                      type.highlight ? "text-primary" : "text-primary"
                    )} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2">{type.name}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>

                  {/* Key details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Best for</span>
                      <span className="text-sm font-medium text-primary">{type.bestFor}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <span className="text-sm font-medium text-accent">{type.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Court Required</span>
                      <span className="text-sm font-medium text-primary">
                        {type.courtRequired ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Creditor Notice</span>
                      <span className="text-sm font-medium text-primary">{type.creditorNotice}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-2xl font-bold text-accent">{type.startingPrice}</span>
                    </div>
                    <a
                      href="#liquidation-calculator"
                      className={cn(
                        "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-colors",
                        type.highlight
                          ? "bg-accent text-primary hover:bg-accent/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      )}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <motion.div variants={staggerItem} className="text-center mt-12">
            <p className="text-muted-foreground">
              Not sure which option is right for you?{" "}
              <a href="/free-consultation" className="text-accent font-semibold hover:underline">
                Book a free consultation
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
