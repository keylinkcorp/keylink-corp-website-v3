import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Circle, CheckCircle } from "lucide-react";

const restrictedActivities = [
  "Real estate brokerage and property management",
  "Certain import/export trading activities",
  "Manpower supply and recruitment agencies",
  "Specific professional services",
  "Media and advertising activities"
];

export function OwnershipRequirement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern - Dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-10 max-w-2xl mx-auto">
            <span className="section-badge">
              Understanding Bahrain's Ownership Laws
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Why Do Some Business Activities Require a Local Sponsor?
            </h2>
            <p className="text-muted-foreground">
              Bahrain allows 100% foreign ownership in most sectors since 2017. However, certain "restricted" activities require 51% Bahraini ownership.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Left: Restricted Activities */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Restricted Activities
              </h3>
              <ul className="space-y-3">
                {restrictedActivities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Circle className="w-1.5 h-1.5 text-accent fill-accent flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: The Solution */}
            <div className="bg-accent/5 rounded-2xl border border-accent/20 p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                The Solution
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Proper legal structuring allows you to access restricted sectors while maintaining complete control.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Full operational control</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">100% profit entitlement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Legally protected investment</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
