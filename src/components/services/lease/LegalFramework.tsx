import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Shield, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const lawProvisions = [
  "Article 3: All lease contracts must be in writing and registered with RERA",
  "Article 5: Landlords cannot increase rent during contract period without tenant consent",
  "Article 8: Security deposits limited to 2 months' rent for residential properties",
  "Article 12: Eviction requires valid cause and proper legal procedure",
  "Article 15: Both parties liable for fines if lease remains unregistered",
];

const reraRole = [
  "Lease contract registration and database maintenance",
  "Rent Disputes Committee for conflict resolution",
  "Enforcement of tenancy law provisions",
  "Property market regulation and transparency",
  "Protection of landlord and tenant rights",
];

export function LegalFramework() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Scale className="w-4 h-4" />
              Legal Authority
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Bahrain Tenancy Law{" "}
              <span className="text-accent">Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding Property Rent Law No. 27 of 2014
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Law No. 27 of 2014 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Law No. 27 of 2014</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                The Property Rent Law No. 27 of 2014 governs all landlord-tenant relationships in Bahrain. Key provisions affecting lease registration:
              </p>

              <div className="space-y-3">
                {lawProvisions.map((provision, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{provision}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RERA's Role */}
            <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">RERA's Role</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                The Real Estate Regulatory Authority (RERA) oversees:
              </p>

              <div className="space-y-3">
                {reraRole.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-primary rounded-2xl p-8 text-center">
              <p className="text-white text-lg">
                <span className="font-bold">Keylink maintains direct relationships with RERA and the Rent Disputes Committee,</span> ensuring your registration meets all current legal requirements.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
