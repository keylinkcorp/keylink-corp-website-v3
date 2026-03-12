import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Placeholder logos - replace with actual client logos
const logos = [
  { id: 1, name: "Tamkeen", alt: "Tamkeen Bahrain" },
  { id: 2, name: "Bapco", alt: "Bapco Oil" },
  { id: 3, name: "Gulf Air", alt: "Gulf Air" },
  { id: 4, name: "BTC", alt: "Bahrain Tourism Company" },
  { id: 5, name: "Alba", alt: "Aluminium Bahrain" },
  { id: 6, name: "NBB", alt: "National Bank of Bahrain" },
  { id: 7, name: "Investcorp", alt: "Investcorp" },
  { id: 8, name: "Zain", alt: "Zain Bahrain" },
];

export function CoworkingLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden bg-[#FAFAFA] border-y border-border/50">
      {/* Clean subtle background - Softer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 100% 80% at 50% 50%, hsl(var(--gold) / 0.02) 0%, transparent 60%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider"
        >
          Trusted by 500+ Businesses in Bahrain
        </motion.p>

        {/* Logo Ticker */}
        <div className="relative overflow-hidden">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
          
          {/* Scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-12 md:gap-16 animate-scroll"
          >
            {/* Duplicate logos for infinite scroll effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 px-4 group"
              >
                {/* Placeholder text logo - replace with actual <img> tags */}
                <span className="text-xl font-bold text-muted-foreground/40 group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
