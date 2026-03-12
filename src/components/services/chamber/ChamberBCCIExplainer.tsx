import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Building2, FileCheck, Stamp, Info } from "lucide-react";

const keyFacts = [
  {
    icon: Building2,
    title: "Mandatory Membership",
    description: "All registered businesses in Bahrain must maintain active BCCI membership"
  },
  {
    icon: FileCheck,
    title: "Certificate of Origin",
    description: "Required for exports to verify goods manufactured/sourced in Bahrain"
  },
  {
    icon: Stamp,
    title: "Document Attestation",
    description: "Commercial documents need BCCI stamp for international validity"
  }
];

const membershipTiers = [
  { type: "Sole Proprietor", fee: "BHD 50", includes: "Basic membership + 1 CO/year" },
  { type: "SME (WLL/SPC)", fee: "BHD 100", includes: "Full membership + events" },
  { type: "Large Enterprise", fee: "BHD 200+", includes: "Premium services + priority" }
];

export function ChamberBCCIExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">BCCI Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Understanding the Bahrain Chamber of Commerce and Industry
            </h2>
          </motion.div>

          {/* Key Facts Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          >
            {keyFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <fact.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{fact.title}</h3>
                <p className="text-muted-foreground text-sm">{fact.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Membership Tiers Table */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm max-w-4xl mx-auto"
          >
            <div className="bg-primary/5 px-6 py-4 border-b border-border">
              <h3 className="font-bold text-lg">BCCI Membership Tiers</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left font-semibold text-sm">Business Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-sm">Annual Fee</th>
                    <th className="px-6 py-4 text-left font-semibold text-sm">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipTiers.map((tier, index) => (
                    <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium">{tier.type}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{tier.fee}</td>
                      <td className="px-6 py-4 text-muted-foreground">{tier.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="bg-accent/5 rounded-xl p-6 border border-accent/20 flex gap-4">
              <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not sure which tier applies?</strong> Our team reviews your Commercial Registration and recommends the optimal membership level — no overcharging, no surprises.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
