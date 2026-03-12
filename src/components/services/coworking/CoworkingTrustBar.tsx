import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Building, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Active Members" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Building, value: 50, suffix: "+", label: "Workspace Options" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export function CoworkingTrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-background border-y border-border/50">
      {/* Subtle Gradient Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 20% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 80% 50%, hsl(var(--gold) / 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background rounded-xl border border-border p-6 md:p-8 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
                  {/* Icon with accent background */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <Icon className="w-8 h-8 text-accent relative z-10 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
