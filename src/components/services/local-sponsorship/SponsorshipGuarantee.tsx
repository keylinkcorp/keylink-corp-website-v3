import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { RefreshCw, Shield, Clock, FileCheck } from "lucide-react";

const guaranteeElements = [
  { icon: RefreshCw, text: "Free replacement with another vetted sponsor" },
  { icon: Shield, text: "No additional fees for transition" },
  { icon: FileCheck, text: "All documentation updated at no charge" },
  { icon: Clock, text: "Continuity of your business operations" }
];

export function SponsorshipGuarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
              Our Guarantee
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sponsor Replacement Guarantee
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your satisfaction and business continuity matter. If at any point your assigned sponsor becomes unresponsive, unreliable, or otherwise problematic, we provide:
            </p>
          </motion.div>

          {/* Guarantee Elements */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {guaranteeElements.map((element, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <element.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-white/90 font-medium">{element.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Trust Statement */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-white/80 text-lg">
              In <span className="font-bold text-white">10+ years</span>, we've had fewer than 5 sponsor replacement requests. Our vetting process works. But if issues arise, you're protected.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
