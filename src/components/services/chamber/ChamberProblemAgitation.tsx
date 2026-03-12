import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AlertTriangle, Ship, FileX, Calculator, FileWarning } from "lucide-react";

const consequences = [
  { issue: "Rejected CO", impact: "Shipment delays + storage fees", icon: Ship },
  { issue: "Lapsed Membership", impact: "License renewal blocked", icon: FileX },
  { issue: "Wrong Classification", impact: "Duty miscalculation", icon: Calculator },
  { issue: "Missing Attestation", impact: "Contract disputes", icon: FileWarning }
];

const painPoints = [
  "Multiple visits to BCCI offices in Manama",
  "Arabic paperwork you cannot read",
  "Unclear rejection reasons with no guidance",
  "Lost hours waiting in queues"
];

export function ChamberProblemAgitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
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
              The Hidden Cost of Going It Alone
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Missing a Certificate of Origin Deadline Can Cost You the Entire Shipment
          </motion.h2>

          {/* Narrative */}
          <motion.div variants={staggerItem} className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-center text-lg leading-relaxed">
              For exporters, timing is everything. A single rejected document at the Bahrain Chamber of Commerce and Industry can delay your shipment, frustrate your buyer, and damage your reputation.
            </p>
          </motion.div>

          {/* Pain Points */}
          <motion.div variants={staggerItem} className="bg-white rounded-2xl border border-border p-8 mb-12 shadow-sm">
            <h3 className="font-semibold text-lg mb-6 text-center">The typical DIY experience includes:</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">✕</span>
                  </div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground text-center">
              Every day your Certificate of Origin is delayed, your goods sit at port. Storage fees accumulate. Buyers lose patience. Contracts fall through.
            </p>
          </motion.div>

          {/* Consequences Grid */}
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold text-lg mb-6 text-center">Real Business Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {consequences.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{item.issue}</p>
                  <p className="text-sm text-muted-foreground">{item.impact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Callout */}
          <motion.p 
            variants={staggerItem}
            className="mt-12 text-center text-muted-foreground italic"
          >
            For new businesses, the mandatory BCCI membership registration feels like an afterthought — until the Ministry of Industry rejects your license renewal because your membership lapsed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
