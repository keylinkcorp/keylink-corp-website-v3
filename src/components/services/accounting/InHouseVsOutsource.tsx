import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X, AlertTriangle, TrendingDown } from "lucide-react";

const comparisonRows = [
  {
    factor: "Monthly Cost",
    inHouse: "BHD 800-1,500+ salary",
    keylink: "BHD 200-800",
    inHouseBad: true
  },
  {
    factor: "Software Licenses",
    inHouse: "Additional BHD 50-150/month",
    keylink: "Included in package",
    inHouseBad: true
  },
  {
    factor: "Training & Updates",
    inHouse: "Your responsibility & cost",
    keylink: "We handle continuously",
    inHouseBad: true
  },
  {
    factor: "Leave Coverage",
    inHouse: "Gaps in service during leave",
    keylink: "Continuous team coverage",
    inHouseBad: true
  },
  {
    factor: "VAT Expertise",
    inHouse: "Variable — depends on hire",
    keylink: "NBR-registered specialists",
    inHouseBad: true
  },
  {
    factor: "Scalability",
    inHouse: "Hire more staff (slow, costly)",
    keylink: "Upgrade plan instantly",
    inHouseBad: true
  },
  {
    factor: "Audit Preparation",
    inHouse: "Extra workload, stress",
    keylink: "100% pass rate included",
    inHouseBad: true
  }
];

const hiddenCosts = [
  { label: "Recruitment costs", cost: "BHD 500-2,000 per hire" },
  { label: "Training time", cost: "2-3 months before productive" },
  { label: "Software licenses", cost: "BHD 600-1,800/year" },
  { label: "Penalty risk (mistakes)", cost: "BHD 500-5,000+" }
];

export function InHouseVsOutsource() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
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
            <span className="section-badge">The Smart Choice</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              In-House vs. Outsourced: The Real Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thinking about hiring an accountant? Here's what the numbers actually say.
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
              <div className="p-4 font-semibold text-destructive text-center">In-House Accountant</div>
              <div className="p-4 font-semibold text-accent text-center">Keylink Outsourced</div>
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
                  <span className="text-muted-foreground text-sm">{row.inHouse}</span>
                </div>
                <div className="p-4 text-center flex items-center justify-center gap-2 bg-accent/5">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-primary text-sm font-medium">{row.keylink}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Hidden In-House Costs */}
          <motion.div variants={staggerItem} className="mb-10">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Hidden Costs of Hiring In-House
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

          {/* Savings Calculator */}
          <motion.div
            variants={staggerItem}
            className="bg-accent/10 rounded-2xl p-8 border border-accent/20"
          >
            <div className="flex items-start gap-4">
              <TrendingDown className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">The Bottom Line</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Typical In-House Annual Cost</p>
                    <p className="text-2xl font-bold text-destructive">BHD 12,000 - 20,000+</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (Salary + software + training + overhead)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Keylink Annual Cost</p>
                    <p className="text-2xl font-bold text-accent">BHD 2,400 - 9,600</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (All-inclusive, no hidden costs)
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-accent/20">
                  <p className="text-lg font-medium text-primary">
                    Most clients save <span className="text-accent font-bold">40-60%</span> compared to 
                    hiring in-house — while getting access to a full finance team instead of one person.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
