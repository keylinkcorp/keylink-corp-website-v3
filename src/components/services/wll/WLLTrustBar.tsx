import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { value: 400, suffix: "+", label: "WLL Companies Formed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 7, prefix: "5-", suffix: "", label: "Days Average" },
];

export function WLLTrustBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-white border-y border-border/50 overflow-hidden">
      <div className="container py-6 md:py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
        >
          {/* Trust statement */}
          <p className="text-muted-foreground text-center lg:text-left text-sm md:text-base">
            <span className="font-semibold text-primary">Bahrain's Trusted WLL Formation Partner</span>
            <span className="hidden sm:inline"> — Partnerships trust Keylink</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-6 lg:gap-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
