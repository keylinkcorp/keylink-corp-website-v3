import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FileText, Clock, Award, CheckCircle } from "lucide-react";

const stats = [
  { icon: FileText, value: 5000, suffix: "+", label: "Leases Registered" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 100, suffix: "%", label: "Compliance Rate" },
  { icon: CheckCircle, value: 24, suffix: "-48 Hrs", label: "Processing Time" },
];

export function LeaseTrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} duration={2} />
                  ) : (
                    0
                  )}
                </span>
                <span className="text-xl text-accent font-semibold">{stat.suffix}</span>
              </div>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-white/60 text-sm mt-8"
        >
          Bahrain's Trusted Lease Registration Partner
        </motion.p>
      </div>
    </section>
  );
}
