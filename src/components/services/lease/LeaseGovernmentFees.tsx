import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wallet, Info, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const governmentFees = [
  { 
    item: "Residential Lease Registration", 
    amount: "BHD 1-3", 
    frequency: "Per registration",
    notes: "Based on rent amount"
  },
  { 
    item: "Commercial Lease Registration", 
    amount: "BHD 5-10", 
    frequency: "Per registration",
    notes: "Based on rent amount"
  },
  { 
    item: "Lease Renewal Registration", 
    amount: "BHD 1-5", 
    frequency: "Per renewal",
    notes: "Same as new registration"
  },
  { 
    item: "Arabic Translation (Certified)", 
    amount: "BHD 20-40", 
    frequency: "One-time",
    notes: "Per document"
  },
  { 
    item: "Attestation (MOFA)", 
    amount: "BHD 10", 
    frequency: "One-time",
    notes: "If required for visa"
  },
  { 
    item: "Express Processing", 
    amount: "BHD 0", 
    frequency: "N/A",
    notes: "No government express fee"
  },
];

const estimatedTotals = [
  { label: "Basic Registration", amount: "BHD 50-80", description: "Service + Gov fees" },
  { label: "With Translation", amount: "BHD 80-120", description: "Including Arabic translation" },
  { label: "Full Service + Attestation", amount: "BHD 120-180", description: "All-inclusive package" },
];

export function LeaseGovernmentFees() {
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
              Official RERA rates for lease registration—no hidden charges
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
                      <span className="font-semibold text-primary">No markup on government fees.</span> These are official RERA rates accessible through bahrain.bh. Keylink charges separately for professional coordination services.
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
                    href="#lease-calculator"
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
