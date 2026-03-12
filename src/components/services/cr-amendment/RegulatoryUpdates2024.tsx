import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Scale, Building2, Key, Info, CheckCircle2 } from "lucide-react";

const updates = [
  {
    icon: Building2,
    badge: "June 2024",
    title: "Bank Account Mandate",
    description: "As of June 2024, all CR amendments affecting capital or ownership require verification of your corporate bank account. The bank must confirm the capital deposit before MOIC processes the amendment. This adds 2-3 days to affected amendments."
  },
  {
    icon: Scale,
    badge: "2024 Rule",
    title: "UBO Registry Requirements",
    description: "Bahrain now requires Ultimate Beneficial Owner (UBO) disclosure for all shareholder amendments. Any individual owning 10% or more must be registered in the UBO database. Non-compliance blocks CR amendment approvals."
  },
  {
    icon: Key,
    badge: "Sijilat 3.0",
    title: "eKey Authentication Levels",
    description: "The new Sijilat 3.0 portal distinguishes between Basic and Advanced eKeys. Some amendments—particularly entity conversions and capital changes—require Advanced eKey authentication."
  }
];

export function RegulatoryUpdates2024() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dashed grid pattern with top fade */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Scale className="w-4 h-4" />
              2024 Updates
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Recent CR Amendment <span className="text-accent">Regulations</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay compliant with the latest MOIC regulatory changes
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="h-1 bg-accent" />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <update.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-lg">
                        {update.badge}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                      {update.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {update.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Expert Note */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl border-2 border-accent/30 p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Keylink Stays Current</h4>
                <p className="text-muted-foreground">
                  We monitor MOIC regulatory changes continuously. When new rules take effect, 
                  we adjust our processes immediately so your amendment follows current requirements 
                  without delays or rejections.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
