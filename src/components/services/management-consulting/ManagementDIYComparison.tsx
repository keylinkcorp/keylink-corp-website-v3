import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X, AlertTriangle } from "lucide-react";

const comparisonRows = [
  {
    factor: "Market Research",
    diy: "3-6 months of trial and error",
    keylink: "Proven frameworks, done in weeks"
  },
  {
    factor: "Regulatory Navigation",
    diy: "High risk of delays and penalties",
    keylink: "Pre-mapped pathways, zero surprises"
  },
  {
    factor: "Strategy Development",
    diy: "Generic templates, limited context",
    keylink: "Tailored to Bahrain market realities"
  },
  {
    factor: "Execution Support",
    diy: "None — you're on your own",
    keylink: "End-to-end implementation included"
  },
  {
    factor: "Ongoing Compliance",
    diy: "Constant worry and catch-up",
    keylink: "Proactive management, zero lapses"
  },
  {
    factor: "Time to Operations",
    diy: "4-6 months typical",
    keylink: "3-4 weeks with full support"
  },
  {
    factor: "Total Cost",
    diy: "Hidden costs add up fast",
    keylink: "Transparent, scope-based pricing"
  }
];

export function ManagementDIYComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Make the Right Choice</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Work With a Strategic Partner?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the true cost of going it alone versus partnering with experts.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-10"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
              <div className="p-4 font-semibold text-primary">Factor</div>
              <div className="p-4 font-semibold text-destructive text-center">DIY Approach</div>
              <div className="p-4 font-semibold text-accent text-center">With Keylink</div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                } hover:bg-secondary/20 transition-colors`}
              >
                <div className="p-4 font-medium text-primary">{row.factor}</div>
                <div className="p-4 text-center flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{row.diy}</span>
                </div>
                <div className="p-4 text-center flex items-center justify-center gap-2 bg-accent/5">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-primary text-sm font-medium">{row.keylink}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Keylink Advantage */}
          <motion.div
            variants={staggerItem}
            className="bg-accent/10 rounded-2xl p-8 border border-accent/20 text-center"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">The Bottom Line</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Our fee pays for itself in saved time, avoided mistakes, and faster market entry. 
              <span className="font-semibold text-primary"> Most clients recoup their investment within the first month of operations.</span>"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
