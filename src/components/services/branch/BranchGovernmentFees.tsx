import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wallet, Info, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const governmentFees = [
  { 
    item: "Commercial Registration (CR)", 
    amount: "BHD 100-200", 
    frequency: "One-time",
    notes: "Based on activities"
  },
  { 
    item: "Commercial License", 
    amount: "BHD 100-300", 
    frequency: "Annual",
    notes: "Per activity category"
  },
  { 
    item: "Chamber of Commerce", 
    amount: "BHD 75-150", 
    frequency: "Annual",
    notes: "Mandatory membership"
  },
  { 
    item: "LMRA Registration", 
    amount: "BHD 50", 
    frequency: "One-time",
    notes: "Employer registration"
  },
  { 
    item: "Municipality License", 
    amount: "BHD 50-100", 
    frequency: "Annual",
    notes: "For physical office"
  },
  { 
    item: "Signatory Card", 
    amount: "BHD 10", 
    frequency: "One-time",
    notes: "Per authorized signatory"
  },
];

const estimatedTotals = [
  { label: "Basic Branch Setup", amount: "BHD 400-600", description: "Government fees only" },
  { label: "Branch + Manager Visa", amount: "BHD 750-1,000", description: "Including visa processing" },
  { label: "Full Setup + Staff", amount: "BHD 1,200-1,800", description: "Including 2-3 employee visas" },
];

export function BranchGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Wallet className="w-4 h-4" />
              Fee Transparency
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Government Fees{" "}
              <span className="text-accent">Breakdown</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Official MOIC rates for branch registration—no hidden charges
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Fee Table */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-4 bg-primary text-white p-4 font-semibold text-sm">
                  <div className="col-span-2">Fee Item</div>
                  <div className="text-center">Amount</div>
                  <div className="text-center">Frequency</div>
                </div>

                {/* Table Body */}
                {governmentFees.map((fee, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-4 p-4 items-center ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-white'}`}
                  >
                    <div className="col-span-2">
                      <p className="font-medium text-primary">{fee.item}</p>
                      <p className="text-xs text-muted-foreground">{fee.notes}</p>
                    </div>
                    <div className="text-center font-semibold text-accent">{fee.amount}</div>
                    <div className="text-center text-sm text-muted-foreground">{fee.frequency}</div>
                  </div>
                ))}

                {/* Transparency Note */}
                <div className="p-4 bg-accent/10 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">No markup on government fees.</span> These are official MOIC rates. Keylink charges separately for professional services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Estimated Totals */}
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Estimated Totals
                </h3>

                <div className="space-y-4">
                  {estimatedTotals.map((estimate, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-primary">{estimate.label}</p>
                        <p className="font-bold text-accent">{estimate.amount}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{estimate.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need a detailed quote?
                  </p>
                  <a
                    href="#branch-calculator"
                    className="block w-full py-3 bg-accent text-primary text-center rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Use Cost Calculator
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
