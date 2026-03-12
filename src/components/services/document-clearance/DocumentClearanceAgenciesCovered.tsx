import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check } from "lucide-react";

const agencies = [
  { name: "National Bureau for Revenue (NBR)", category: "Tax" },
  { name: "Labour Market Regulatory Authority (LMRA)", category: "Labour" },
  { name: "General Directorate of Criminal Investigation", category: "Police" },
  { name: "Social Insurance Organization (SIO/GOSI)", category: "Insurance" },
  { name: "Customs Affairs", category: "Trade" },
  { name: "Municipality Offices (All 4)", category: "Local" },
  { name: "Ministry of Interior (Immigration)", category: "Visa" }
];

export function DocumentClearanceAgenciesCovered() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Full Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Go to Every Agency So You Don't Have To
            </h2>
          </motion.div>

          {/* Agencies Grid */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agencies.map((agency, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-secondary/50 rounded-xl px-5 py-4 border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{agency.name}</p>
                    <p className="text-xs text-muted-foreground">{agency.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Comprehensive coverage across all government agencies issuing clearance certificates in Bahrain.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
