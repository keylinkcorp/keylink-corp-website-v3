import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check, Clock, TrendingUp, Eye, Receipt, Bell, Building2, Heart } from "lucide-react";

const comparisonRows = [
  {
    icon: Clock,
    factor: "Time Investment",
    diy: "5+ hours per visit",
    pro: "0 hours (we go)",
    diyBad: true
  },
  {
    icon: TrendingUp,
    factor: "Success Rate",
    diy: "Variable (trial & error)",
    pro: "98% first-attempt",
    diyBad: true
  },
  {
    icon: Eye,
    factor: "Status Visibility",
    diy: "None (you chase)",
    pro: "WhatsApp updates",
    diyBad: true
  },
  {
    icon: Receipt,
    factor: "Hidden Costs",
    diy: "Fines, rework, delays",
    pro: "Fixed quote upfront",
    diyBad: true
  },
  {
    icon: Bell,
    factor: "Renewal Tracking",
    diy: "Your responsibility",
    pro: "Automated reminders",
    diyBad: true
  },
  {
    icon: Building2,
    factor: "Ministry Access",
    diy: "Cold walk-in",
    pro: "Established contacts",
    diyBad: true
  },
  {
    icon: Heart,
    factor: "Stress Level",
    diy: "High",
    pro: "Zero",
    diyBad: true
  }
];

export function PRODIYComparison() {
  const ref = useRef<HTMLDivElement>(null);
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              The Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DIY vs. Keylink PRO Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what you're trading when you try to handle government paperwork yourself.
            </p>
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
                  With Keylink PRO
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
                  {/* Factor */}
                  <div className="flex items-center gap-3">
                    <row.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{row.factor}</span>
                  </div>
                  
                  {/* DIY */}
                  <div className="flex items-center justify-center gap-2 text-center">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 hidden md:block" />
                    <span className="text-sm text-muted-foreground">{row.diy}</span>
                  </div>
                  
                  {/* PRO */}
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 hidden md:block" />
                    <span className="text-sm font-medium text-foreground">{row.pro}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line Summary */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto mt-10"
          >
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                The Bottom Line
              </h3>
              <p className="text-white/80 mb-4">
                At BHD 300/month, our PRO service costs less than a single day of your time stuck in queues. 
                Most business owners value their hours at BHD 50+ — which means DIY costs you 
                <span className="text-accent font-semibold"> BHD 1,000+ monthly</span> in lost productivity.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div>
                  <span className="text-2xl font-bold text-accent">20+</span>
                  <span className="text-white/70 ml-2">Hours saved/month</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-accent">BHD 0</span>
                  <span className="text-white/70 ml-2">Fines from missed deadlines</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
