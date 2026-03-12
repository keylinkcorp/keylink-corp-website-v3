import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Receipt, Users, Shield, Heart, Package, MapPin, AlertTriangle } from "lucide-react";

const clearanceTypes = [
  { icon: Receipt, name: "Tax Clearance", description: "NBR-issued, confirms VAT/tax settlement" },
  { icon: Users, name: "LMRA Clearance", description: "Labour authority, work permit obligations" },
  { icon: Shield, name: "Police Clearance", description: "Criminal record check, embassy requirements" },
  { icon: Heart, name: "SIO/GOSI Clearance", description: "Social insurance settlement" },
  { icon: Package, name: "Customs Clearance", description: "Import/export obligations" },
  { icon: MapPin, name: "Municipality Clearance", description: "Local authority permits" }
];

const useCases = [
  "Employee visa cancellations and exits",
  "Company liquidation and closure",
  "Business transfers and ownership changes",
  "Immigration and residency applications",
  "Bank account closures"
];

export function DocumentClearanceWhatIs() {
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
              Understanding Clearances
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Is a Document Clearance Certificate?
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column - Explanation */}
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A clearance certificate is an official government document confirming 
                that an individual or company has no outstanding obligations with a 
                specific agency. They're required for:
              </p>

              <ul className="space-y-3 mb-8">
                {useCases.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Each agency (Tax, LMRA, Police, SIO, Customs, Municipality) issues its 
                own clearance. Getting them all requires navigating 7+ different 
                offices, each with unique processes, forms, and requirements.
              </p>
            </div>

            {/* Right Column - Key Facts Card */}
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Clearance Certificate Types</h3>
              
              <div className="space-y-4">
                {clearanceTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{type.name}</h4>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Callout Box */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Without a clearance 
                from even one agency, visa cancellations stall, liquidations freeze, and 
                exit permits get denied. Each missing clearance can delay your process by weeks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
