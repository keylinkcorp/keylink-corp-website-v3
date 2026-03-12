import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Clock, Shield, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { icon: Building2, value: 95, suffix: "%", label: "Approval Rate" },
  { icon: Clock, value: 2, suffix: "-3 wks", label: "Average Timeline" },
  { icon: Shield, value: 500, suffix: "+", label: "Accounts Opened" },
  { icon: Users, value: 4, suffix: "", label: "Bank Partners" }
];

export function BankAccountTrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section 
      ref={ref}
      className="py-12 bg-secondary/50"
      aria-label="Bank account service statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gold/10">
                  <stat.icon className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} duration={2} />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
