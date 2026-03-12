import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X, AlertTriangle } from "lucide-react";

const comparisonRows = [
  {
    factor: "Timeline",
    diy: "8-16 weeks average",
    keylink: "3-7 days (formation)",
    diyBad: true
  },
  {
    factor: "Hidden Costs",
    diy: "Mistakes, rework, penalties",
    keylink: "Transparent, fixed scope",
    diyBad: true
  },
  {
    factor: "Coordination",
    diy: "You manage 5+ agencies",
    keylink: "Single point of contact",
    diyBad: true
  },
  {
    factor: "Expertise",
    diy: "Learn as you go",
    keylink: "10+ years experience",
    diyBad: true
  },
  {
    factor: "Risk",
    diy: "High (regulatory errors)",
    keylink: "Minimized (100% success rate)",
    diyBad: true
  },
  {
    factor: "Ongoing Support",
    diy: "None",
    keylink: "Continuous partnership",
    diyBad: true
  }
];

const hiddenCosts = [
  { label: "Rejected applications", cost: "BHD 50-200 per resubmission" },
  { label: "Visa delays", cost: "Lost productivity: BHD 500+/week" },
  { label: "Compliance penalties", cost: "BHD 500-5,000+" },
  { label: "Your time", cost: "Priceless" }
];

export function ConsultantVsDIY() {
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
              Consultant vs. DIY: The Real Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the true cost of going it alone.
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
              <div className="p-4 font-semibold text-accent text-center">With Keylink Corp</div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                }`}
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

          {/* Hidden DIY Costs */}
          <motion.div variants={staggerItem} className="mb-10">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              The Hidden DIY Costs
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hiddenCosts.map((item, index) => (
                <div
                  key={index}
                  className="bg-destructive/5 rounded-xl p-4 border border-destructive/10"
                >
                  <p className="font-medium text-primary mb-1">{item.label}</p>
                  <p className="text-sm text-destructive font-semibold">{item.cost}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Keylink Advantage */}
          <motion.div
            variants={staggerItem}
            className="bg-accent/10 rounded-2xl p-8 border border-accent/20 text-center"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">The Keylink Advantage</h3>
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
