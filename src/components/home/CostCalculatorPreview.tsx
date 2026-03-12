import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Check } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const calculatorBenefits = [
  "Instant cost estimates for company formation",
  "Compare different business structures",
  "Include visa and PRO service costs",
  "No signup required—100% free",
];

export function CostCalculatorPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
              Free Tool
            </p>
            <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              Know Your Costs Upfront
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-[1.8]">
              Use our free cost calculator to get an instant estimate for starting 
              your business in Bahrain. No surprises, just transparent pricing.
            </p>

            <ul className="space-y-4 mb-10">
              {calculatorBenefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-primary">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/cost-calculator" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold/90 text-primary font-semibold rounded-xl transition-all duration-200 shadow-sm"
              >
                <Calculator className="h-5 w-5" />
                Try Cost Calculator
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Calculator Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-10 border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Calculator className="h-7 w-7 text-gold" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Quick Estimate</h3>
                  <p className="text-muted-foreground">Based on your selections</p>
                </div>
              </div>

              {/* Sample calculator preview */}
              <div className="space-y-4 mb-8">
                <div className="p-5 bg-secondary/50 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-muted-foreground">Company Type</span>
                    <span className="font-medium text-primary">WLL Company</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-muted-foreground">Business Activity</span>
                    <span className="font-medium text-primary">Consulting</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Work Visas</span>
                    <span className="font-medium text-primary">2 Employees</span>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-5 bg-gold/5 rounded-xl border border-gold/20"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">Estimated Total</span>
                    <span className="text-3xl font-bold text-gold">
                      BHD <AnimatedCounter value={2450} duration={1.5} />
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Includes formation, CR, and visa processing
                  </p>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/cost-calculator" 
                  className="block w-full text-center py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
                >
                  Get Your Custom Estimate
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
