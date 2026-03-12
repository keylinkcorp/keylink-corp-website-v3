import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partnerLogos = [
  { name: "MOIC", initial: "M" },
  { name: "LMRA", initial: "L" },
  { name: "Tamkeen", initial: "T" },
  { name: "Bahrain Chamber", initial: "BC" },
  { name: "EDB", initial: "E" },
  { name: "StartUp Bahrain", initial: "SB" },
];

export function VirtualOfficeLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden bg-background border-y border-border">
      {/* Subtle gold gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 50%, hsl(var(--gold) / 0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by businesses registered with leading Bahrain institutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-xl bg-secondary/50 border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                {logo.initial}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
