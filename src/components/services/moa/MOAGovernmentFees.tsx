import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Coins, Info, Clock } from "lucide-react";

const feeData = [
  { type: "MOA Notarization", fee: "BHD 10-50", processing: "24-48 hours" },
  { type: "MOA Registration (with CR)", fee: "Included in CR fee", processing: "With CR processing" },
  { type: "MOA Amendment", fee: "BHD 20-30", processing: "2-5 days" },
  { type: "MOFA Attestation", fee: "BHD 10", processing: "1-2 days" },
  { type: "Embassy Legalization", fee: "Varies by country", processing: "3-7 days" }
];

const additionalFees = [
  { name: "Arabic translation", fee: "BHD 20-100" },
  { name: "Apostille (Hague countries)", fee: "BHD 25" },
  { name: "Courier services", fee: "BHD 15-50" }
];

export function MOAGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/40 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

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
              Official Fees
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            MOA <span className="text-accent">Government Fees</span> 2024
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent official fee breakdown for all MOA services
          </motion.p>
        </motion.div>

        {/* Fee Table */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left p-4 font-bold">Service</th>
                    <th className="text-left p-4 font-bold">Government Fee</th>
                    <th className="text-left p-4 font-bold">Processing</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 font-medium">{row.type}</td>
                      <td className="p-4 text-accent font-semibold">{row.fee}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {row.processing}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Fees */}
          <div className="mt-8 bg-white rounded-2xl border-2 border-border p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Additional Fees (If Applicable)</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {additionalFees.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-bold text-primary">{item.fee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-white rounded-2xl border-2 border-accent/30 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Fee Transparency Notice</h4>
                <p className="text-muted-foreground">
                  Government fees are set by MOIC, notary offices, and MOFA. Professional drafting 
                  and coordination fees are quoted separately. Keylink provides complete itemized 
                  quotes before starting any work—no hidden charges.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
