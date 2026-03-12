import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ExternalLink } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const taxStats = [
  { value: 0, suffix: "%", label: "Corporate Tax" },
  { value: 0, suffix: "%", label: "Personal Income Tax" },
  { value: 50, suffix: "+", label: "DTT Countries" },
  { value: 100, suffix: "%", label: "Profit Repatriation" },
];

export function TaxBenefitsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
              Tax Benefits
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Tax-Free Business Environment
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              One of the most competitive tax regimes in the Middle East.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"
          >
            {taxStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={staggerItem}
            className="border-t border-border my-8"
          />

          {/* VAT Note */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center"
          >
            <span className="text-muted-foreground">
              10% VAT applies above BHD 37,500 threshold
            </span>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <a 
              href="https://www.nbr.gov.bh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
            >
              NBR Info
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
