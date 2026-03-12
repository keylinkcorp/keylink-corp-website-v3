import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Wallet, 
  Globe, 
  Shield, 
  Clock, 
  TrendingUp, 
  MapPin 
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  {
    icon: Wallet,
    title: "0% Corporate Tax",
    description: "No corporate income tax for most business activities. Keep 100% of your profits.",
  },
  {
    icon: Globe,
    title: "GCC Gateway",
    description: "Strategic access to Saudi Arabia, UAE, Qatar, Kuwait, and Oman markets.",
  },
  {
    icon: Shield,
    title: "100% Foreign Ownership",
    description: "No local partner or sponsor required. Full control of your branch operations.",
  },
  {
    icon: Clock,
    title: "Fast Setup (7-10 Days)",
    description: "Streamlined digital registration through Sijilat. Fastest in the GCC.",
  },
  {
    icon: TrendingUp,
    title: "100% Profit Repatriation",
    description: "Transfer all profits to headquarters without withholding tax or restrictions.",
  },
  {
    icon: MapPin,
    title: "Strategic Time Zone",
    description: "Overlap with Europe, Middle East, and Asia for global business coordination.",
  },
];

export function WhyBahrain() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Globe className="w-4 h-4" />
              Strategic Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Open a Branch in{" "}
              <span className="text-accent">Bahrain?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bahrain offers unmatched advantages for international companies seeking GCC market access
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            variants={staggerItem} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            variants={staggerItem}
            className="mt-16 bg-primary rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-white">1.5M+</p>
                <p className="text-white/60 text-sm">Population</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">$44B</p>
                <p className="text-white/60 text-sm">GDP</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm">Trade Agreements</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">#1</p>
                <p className="text-white/60 text-sm">Economic Freedom (MENA)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
