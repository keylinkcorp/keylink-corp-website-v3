import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, CheckCircle2, ArrowRight, Globe, Wallet, FileText, Users, Shield } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const characteristics = [
  { icon: Globe, text: "Legal extension of parent company—not a separate entity" },
  { icon: Shield, text: "Parent company retains full liability for branch operations" },
  { icon: Wallet, text: "100% profit repatriation with zero withholding tax" },
  { icon: FileText, text: "Conducts same activities as the parent company" },
  { icon: Users, text: "Requires a resident branch manager in Bahrain" },
];

const bestFor = [
  "Multinational corporations testing the Bahrain/GCC market",
  "Companies needing a regional sales or support office",
  "Firms executing specific projects in Bahrain",
  "Businesses seeking tax-free profit repatriation",
];

export function WhatIsBranch() {
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
                <Building2 className="w-4 h-4" />
                Entity Overview
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              What is a Foreign Company{" "}
              <span className="text-accent">Branch in Bahrain?</span>
            </motion.h2>

            {/* Featured Snippet Definition */}
            <motion.div 
              variants={staggerItem} 
              className="bg-secondary/50 rounded-2xl p-8 border border-border mb-10"
            >
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                A <strong>foreign company branch</strong> in Bahrain is a <strong>legal extension</strong> of a parent company registered abroad. Unlike a subsidiary (WLL), a branch is <strong>not a separate legal entity</strong>—the parent company retains full ownership and liability. Branches can conduct the same commercial activities as the parent and benefit from Bahrain's <strong>0% corporate tax</strong> with <strong>100% profit repatriation</strong>.
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
                  <span className="text-muted-foreground">Legal Structure</span>
                  <span className="font-semibold text-primary">Extension of Parent</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Foreign Ownership</span>
                  <span className="font-semibold text-accent">100%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Minimum Capital</span>
                  <span className="font-semibold text-primary">No Requirement</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Corporate Tax</span>
                  <span className="font-semibold text-accent">0%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Setup Time</span>
                  <span className="font-semibold text-primary">7-10 Days</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Profit Repatriation</span>
                  <span className="font-semibold text-accent">100%</span>
                </div>
              </div>

              {/* Best For Callout */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-primary mb-4">Best For:</h4>
                <ul className="space-y-2">
                  {bestFor.map((item, index) => (
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
