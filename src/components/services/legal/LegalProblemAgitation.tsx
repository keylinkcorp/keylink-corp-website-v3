import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AlertTriangle, Clock, DollarSign, FileX } from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    stat: "BHD 5,000+",
    label: "Average dispute cost",
    description: "Legal fees for contract disputes in Bahrain courts"
  },
  {
    icon: FileX,
    stat: "45%",
    label: "Applications rejected",
    description: "Due to documentation errors and incomplete filings"
  },
  {
    icon: Clock,
    stat: "3-6 Months",
    label: "Resolution timeline",
    description: "For compliance violations and regulatory issues"
  },
  {
    icon: AlertTriangle,
    stat: "73%",
    label: "Contracts flawed",
    description: "When drafted without local legal expertise"
  },
];

export function LegalProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">The Real Risk</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Happens When Legal Details Are Overlooked
            </h2>
          </motion.div>

          {/* Problem Narrative */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Many businesses enter Bahrain with solid plans — only to discover 
                that a poorly drafted contract or missed regulatory requirement can 
                unravel months of work. A supplier disputes payment terms because 
                the agreement was ambiguous. A ministry rejects an application 
                because documentation was incomplete. An employee files a claim 
                because the contract violated labour law provisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                These are not hypothetical scenarios. They happen every month to 
                businesses operating without proper legal guidance. The cost is 
                not just financial — it is delays, lost partnerships, and damaged 
                reputation in a market where <span className="font-semibold text-primary">relationships matter</span>.
              </p>
              <p className="text-lg font-medium text-primary">
                The challenge is that Bahraini commercial law operates differently 
                than what many foreign investors expect. What works in Dubai or 
                London may not hold up in Manama. Local nuance matters.
              </p>
            </div>
          </motion.div>

          {/* Pain Point Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{point.stat}</p>
                <p className="text-sm font-medium text-primary mb-2">{point.label}</p>
                <p className="text-xs text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
