import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Coins, 
  CheckCircle2,
  Info
} from "lucide-react";

const fees = [
  { type: "Trade Name Reservation", amount: "BHD 15", frequency: "One-time" },
  { type: "Commercial Registration", amount: "BHD 50-200", frequency: "Annual" },
  { type: "Trade License (per activity)", amount: "BHD 20-300", frequency: "Annual" },
  { type: "Chamber of Commerce", amount: "BHD 50-100", frequency: "Annual" },
  { type: "LMRA Registration", amount: "BHD 50-100", frequency: "One-time" },
  { type: "Security Approval (Foreign)", amount: "BHD 50", frequency: "One-time" }
];

export function BLGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Coins className="w-4 h-4" />
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Official Government Fees for{" "}
            <span className="text-accent">Business Licensing</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are MOIC-mandated fees. Our service fees are quoted separately.
          </motion.p>
        </motion.div>

        {/* Fees Table */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-5 px-6 font-bold">Fee Type</th>
                  <th className="text-left py-5 px-6 font-bold">Amount</th>
                  <th className="text-left py-5 px-6 font-bold">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className={`border-b border-border/50 last:border-0 ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-white'}`}
                  >
                    <td className="py-5 px-6 font-medium">{fee.type}</td>
                    <td className="py-5 px-6 font-bold text-accent">{fee.amount}</td>
                    <td className="py-5 px-6">
                      <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium">
                        {fee.frequency}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Total Range Callout */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="bg-accent/5 border-2 border-accent rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-2">
              Typical government fees for a standard business license:
            </p>
            <p className="text-4xl font-bold text-accent">BHD 250-600/year</p>
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-8 space-y-4"
        >
          <div className="flex gap-4 p-5 bg-secondary/60 rounded-xl border border-border">
            <Info className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-muted-foreground">
              Fees vary based on license type, number of activities, and entity structure. 
              Industrial licenses and regulated activities may have additional sector-specific fees. 
              We provide exact fee breakdowns during consultation.
            </p>
          </div>

          <div className="flex gap-4 p-5 bg-accent/5 rounded-xl border-2 border-accent/20">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-bold mb-1">No Hidden Costs</p>
              <p className="text-muted-foreground">
                What we quote is what you pay. Government fees are clearly separated from our professional service fees.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
