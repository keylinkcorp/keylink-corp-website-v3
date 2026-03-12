import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check, Clock, AlertTriangle, Globe, User, Zap, DollarSign } from "lucide-react";

const comparisonData = [
  {
    factor: "Processing Time",
    icon: Clock,
    diy: "3-5 days (multiple visits)",
    keylink: "24-48 hours"
  },
  {
    factor: "Rejection Risk",
    icon: AlertTriangle,
    diy: "High — unclear requirements",
    keylink: "Near-zero — we know the criteria"
  },
  {
    factor: "Language",
    icon: Globe,
    diy: "Arabic forms only",
    keylink: "Full Arabic & English support"
  },
  {
    factor: "Your Time",
    icon: User,
    diy: "4+ hours per request",
    keylink: "10-minute handoff"
  },
  {
    factor: "Rush Handling",
    icon: Zap,
    diy: "Not available",
    keylink: "Same-day processing"
  },
  {
    factor: "Hidden Costs",
    icon: DollarSign,
    diy: "Travel + parking + lost time",
    keylink: "Transparent fixed pricing"
  }
];

export function ChamberDIYComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Compare Your Options</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With BCCI-Certified Specialists?
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg max-w-4xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-white">
              <div className="px-6 py-4 font-semibold">Factor</div>
              <div className="px-6 py-4 font-semibold text-center border-l border-white/20">DIY Approach</div>
              <div className="px-6 py-4 font-semibold text-center border-l border-white/20 bg-accent/20">With Keylink</div>
            </div>
            
            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
              >
                <div className="px-6 py-4 flex items-center gap-3 font-medium">
                  <row.icon className="w-5 h-5 text-primary" />
                  {row.factor}
                </div>
                <div className="px-6 py-4 flex items-center gap-2 border-l border-border text-muted-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm">{row.diy}</span>
                </div>
                <div className="px-6 py-4 flex items-center gap-2 border-l border-border bg-accent/5">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{row.keylink}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Bottom Line:</strong> Our service fee is typically less than the cost of a single rejection and resubmission. Clients pay for certainty — and recoup the investment in avoided delays.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
