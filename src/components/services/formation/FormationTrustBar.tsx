import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Companies Formed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 7, prefix: "3-", suffix: "", label: "Days Average" },
];

export function FormationTrustBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-white border-y border-border/50 overflow-hidden">
      <div className="container py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Trust statement */}
          <p className="text-muted-foreground text-center md:text-left">
            <span className="font-semibold text-primary">Bahrain's Trusted Company Formation Partner</span>
            <span className="hidden sm:inline"> — Your success is our priority</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
