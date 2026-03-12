import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Wallet,
  Info,
  FileText
} from "lucide-react";

const fees = [
  { type: "CR Registration", amount: "BHD 65", notes: "One-time" },
  { type: "Commercial License", amount: "BHD 50", notes: "Annual" },
  { type: "Chamber of Commerce", amount: "BHD 100", notes: "Annual" },
  { type: "Name Reservation", amount: "BHD 10", notes: "One-time" },
  { type: "MOA Notarization", amount: "BHD 30-50", notes: "Per document" },
  { type: "Security Approval", amount: "BHD 50", notes: "Foreign only" },
  { type: "LMRA Registration", amount: "BHD 20", notes: "One-time" },
];

export function WLLGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/40 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <Wallet className="w-4 h-4" />
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            WLL <span className="text-gold">Government Fees Breakdown</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Official MOIC, SIJILAT, and LMRA fees for WLL registration
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-5 font-semibold">Fee Type</div>
              <div className="p-5 font-semibold text-center">Amount</div>
              <div className="p-5 font-semibold text-right">Notes</div>
            </div>
            
            {/* Table Rows */}
            {fees.map((fee, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-white'}`}
              >
                <div className="p-5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-medium">{fee.type}</span>
                </div>
                <div className="p-5 text-center font-semibold text-gold">{fee.amount}</div>
                <div className="p-5 text-right text-muted-foreground text-sm">{fee.notes}</div>
              </div>
            ))}
            
            {/* Total Row */}
            <div className="grid grid-cols-3 bg-gold/10 border-t-2 border-gold/30">
              <div className="p-5 font-bold text-primary">Total Government Fees</div>
              <div className="p-5 text-center font-bold text-gold text-lg">BHD 310-540</div>
              <div className="p-5 text-right text-sm text-muted-foreground">Depending on nationality</div>
            </div>
          </div>
          
          {/* Notes */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
              <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                WLL companies require <span className="font-semibold text-primary">BHD 20,000 minimum capital</span> deposit at a Bahraini bank
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
              <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Additional fees may apply for regulated activities requiring special permits
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border">
              <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                All fees subject to MOIC updates; current as of January 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
