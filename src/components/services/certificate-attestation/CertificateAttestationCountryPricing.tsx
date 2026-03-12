import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  { country: "UAE", mofa: "15", embassy: "25", fullPackage: "75" },
  { country: "Saudi Arabia", mofa: "15", embassy: "35", fullPackage: "85" },
  { country: "India", mofa: "15", embassy: "25", fullPackage: "75" },
  { country: "Pakistan", mofa: "15", embassy: "25", fullPackage: "75" },
  { country: "Other GCC", mofa: "15", embassy: "25", fullPackage: "75" }
];

export function CertificateAttestationCountryPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Grid lines */}
      <div className="absolute inset-0 -z-10 bg-secondary/30">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificate Attestation Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear, upfront pricing with all government fees included. No hidden charges.
            </p>
          </motion.div>

          {/* Pricing Table */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-primary text-white">
                <div className="font-semibold">Country</div>
                <div className="text-center font-semibold">MOFA Only</div>
                <div className="text-center font-semibold">Embassy Only</div>
                <div className="text-center font-semibold">
                  <span className="px-2 py-1 bg-accent text-primary rounded text-xs">Full Package</span>
                </div>
              </div>

              {/* Table Rows */}
              {pricingData.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-4 gap-4 px-6 py-5 ${
                    index !== pricingData.length - 1 ? "border-b border-border" : ""
                  } hover:bg-secondary/30 transition-colors`}
                >
                  <div className="font-medium">{row.country}</div>
                  <div className="text-center text-muted-foreground">
                    BHD <span className="font-semibold text-foreground">{row.mofa}</span>
                  </div>
                  <div className="text-center text-muted-foreground">
                    BHD <span className="font-semibold text-foreground">{row.embassy}</span>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-primary">BHD {row.fullPackage}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Notes */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span><strong className="text-foreground">Full Package</strong> includes MOFA + Embassy legalization + collection & delivery</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>All government fees included in pricing</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>Express same-day service available for additional fee</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>Volume discounts available for 5+ documents</span>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center mt-10">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Get a Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
