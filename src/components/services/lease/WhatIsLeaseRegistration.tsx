import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, CheckCircle2, ArrowRight, Scale, Shield, Home, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const characteristics = [
  { icon: Scale, text: "Mandatory for all rental agreements (residential and commercial)" },
  { icon: Shield, text: "Processed through RERA via bahrain.bh eGovernment portal" },
  { icon: Home, text: "Required for legal protection in tenancy disputes" },
  { icon: Users, text: "Prerequisite for family visa sponsorship (for tenants)" },
  { icon: FileText, text: "Must include Arabic text or certified Arabic translation" },
];

const whoNeeds = [
  "Landlords renting out properties in Bahrain",
  "Tenants entering new rental agreements",
  "Real estate agents managing client properties",
  "Foreign investors leasing commercial premises",
];

export function WhatIsLeaseRegistration() {
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
          className="grid lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-6">
                <Scale className="w-4 h-4" />
                RERA Compliance
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              What is Lease Contract{" "}
              <span className="text-accent">Registration in Bahrain?</span>
            </motion.h2>

            {/* Featured Snippet Definition */}
            <motion.div 
              variants={staggerItem} 
              className="bg-secondary/50 rounded-2xl p-8 border border-border mb-10"
            >
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                <strong>Lease contract registration</strong> in Bahrain is the <strong>mandatory process</strong> of officially recording rental agreements with the <strong>Real Estate Regulatory Authority (RERA)</strong> through the bahrain.bh portal. Under <strong>Property Rent Law No. 27 of 2014</strong>, all residential and commercial lease contracts must be registered to gain legal validity. An unregistered lease cannot be used as evidence in rental disputes, and both landlords and tenants risk penalties for non-compliance.
              </p>
            </motion.div>

            {/* Key Characteristics */}
            <motion.h3 variants={staggerItem} className="text-xl font-bold text-primary mb-6">
              Key Characteristics
            </motion.h3>
            
            <motion.div variants={staggerItem} className="space-y-4">
              {characteristics.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg pt-2">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar - 2 columns */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            {/* Key Facts Card */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Quick Facts
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Legal Authority</span>
                  <span className="font-semibold text-primary">RERA / Law No. 27/2014</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Registration Fee</span>
                  <span className="font-semibold text-accent">BHD 1-10</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Processing Time</span>
                  <span className="font-semibold text-primary">Same-day to 48 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-semibold text-primary">Arabic required</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Validity</span>
                  <span className="font-semibold text-primary">Duration of lease</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Penalty Risk</span>
                  <span className="font-semibold text-accent">BHD 500+</span>
                </div>
              </div>

              {/* Who Needs This Callout */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-primary mb-4">Who Needs to Register:</h4>
                <ul className="space-y-2">
                  {whoNeeds.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
