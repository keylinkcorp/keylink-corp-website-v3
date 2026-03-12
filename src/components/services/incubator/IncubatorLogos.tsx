import { motion } from "framer-motion";

const partners = [
  { name: "Tamkeen", logo: "TAMKEEN" },
  { name: "FinTech Bay", logo: "FINTECH BAY" },
  { name: "C5 Accelerate", logo: "C5 ACCELERATE" },
  { name: "Economic Development Board", logo: "EDB BAHRAIN" },
  { name: "Startup Bahrain", logo: "STARTUP BAHRAIN" },
  { name: "Bahrain Development Bank", logo: "BDB" },
];

export function IncubatorLogos() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted Partner Programs We Work With
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-16"
            >
              <span className="text-lg font-bold text-muted-foreground/60 tracking-wider whitespace-nowrap">
                {partner.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
