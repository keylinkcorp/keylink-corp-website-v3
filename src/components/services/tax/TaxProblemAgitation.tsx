import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AlertTriangle, XCircle, DollarSign, TrendingUp, Calendar } from "lucide-react";

const penalties = [
  { violation: "Late Registration", amount: "Up to BHD 10,000", icon: XCircle },
  { violation: "Late Filing (First)", amount: "BHD 500", icon: Calendar },
  { violation: "Late Filing (Repeat)", amount: "BHD 5,000+", icon: AlertTriangle },
  { violation: "Incorrect Returns", amount: "5% + Interest", icon: DollarSign },
  { violation: "Non-Payment", amount: "5% per Month", icon: TrendingUp }
];

export function TaxProblemAgitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold">
              <AlertTriangle className="w-4 h-4" />
              The Real Risk
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            NBR Penalties Are Not a Warning — They're Automatic
          </motion.h2>

          {/* Narrative */}
          <motion.div 
            variants={staggerItem}
            className="prose prose-lg max-w-none text-muted-foreground mb-12"
          >
            <p>
              Every quarter, businesses in Bahrain face the same critical deadline: file your VAT return or face automatic penalties from the National Bureau for Revenue (NBR).
            </p>
            <p>
              The problem is not intent. Most business owners want to comply. The problem is bandwidth. Between running operations, managing staff, and serving customers, VAT paperwork falls to the bottom of the list — until the penalty notice arrives.
            </p>
            <p>
              And penalties compound quickly. A missed deadline starts at BHD 500. Repeat offenses escalate to BHD 5,000. Incorrect filings trigger 5% corrections plus interest. Late registration can cost up to BHD 10,000.
            </p>
            <p>
              The cost of non-compliance is not just financial. It is the distraction, the stress, and the reputation risk with banking partners who monitor NBR standing.
            </p>
          </motion.div>

          {/* Penalty Grid */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden"
          >
            <div className="bg-destructive/5 px-6 py-4 border-b border-border">
              <h3 className="font-semibold text-lg text-foreground">NBR Penalty Schedule</h3>
            </div>
            <div className="divide-y divide-border">
              {penalties.map((penalty, index) => (
                <div key={index} className="flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <penalty.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="font-medium text-foreground">{penalty.violation}</span>
                  </div>
                  <span className="text-lg font-bold text-destructive">{penalty.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
