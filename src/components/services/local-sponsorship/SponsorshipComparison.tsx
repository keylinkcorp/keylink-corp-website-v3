import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check } from "lucide-react";

const comparisonRows = [
  {
    factor: "Sponsor Quality",
    diy: "Unknown background",
    keylink: "5-point vetted network"
  },
  {
    factor: "Legal Protection",
    diy: "Basic or none",
    keylink: "Comprehensive framework"
  },
  {
    factor: "Documentation",
    diy: "Generic templates",
    keylink: "Custom legal drafting"
  },
  {
    factor: "Dispute Risk",
    diy: "High (no safeguards)",
    keylink: "Minimal (binding agreements)"
  },
  {
    factor: "Time to Arrange",
    diy: "2-6 months",
    keylink: "5-7 business days"
  },
  {
    factor: "Replacement if Issues",
    diy: "Start from scratch",
    keylink: "Free sponsor replacement"
  },
  {
    factor: "Cost Predictability",
    diy: "Hidden fees possible",
    keylink: "Fixed annual fee"
  }
];

export function SponsorshipComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Center ellipse fade */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)"
          }}
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
            <span className="section-badge">
              The Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Finding a Sponsor Yourself vs. Working With Keylink
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-semibold text-muted-foreground">Factor</div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-red-50 text-destructive rounded-lg font-semibold text-sm">
                  DIY Approach
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm">
                  With Keylink
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {comparisonRows.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-3 gap-4 px-6 py-5 ${
                    index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="font-medium text-foreground">{row.factor}</div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-destructive" />
                      <span className="text-muted-foreground text-sm">{row.diy}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-foreground text-sm font-medium">{row.keylink}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line Box */}
          <motion.div 
            variants={staggerItem}
            className="mt-10 max-w-3xl mx-auto"
          >
            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                The <span className="font-bold text-accent">BHD 600/year</span> investment in professional sponsorship arrangement costs less than a single hour of legal consultation if disputes arise later. More importantly, proper structuring prevents disputes from occurring in the first place.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
