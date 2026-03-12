import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Scale, Wallet, HeadphonesIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Foreign Ownership",
    description: "Register your WLL, SPC, or branch office with complete foreign ownership. No local sponsor required for most business activities.",
  },
  {
    icon: Zap,
    title: "3-7 Day Company Registration",
    description: "Fastest company formation in Bahrain. From MOIC approval to commercial license in days, not weeks.",
  },
  {
    icon: Scale,
    title: "Full MOIC & LMRA Compliance",
    description: "100% compliant documentation and legal structuring. All government registrations handled seamlessly.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing from BHD 750",
    description: "No hidden fees. Complete business setup costs upfront including CR, trade license, and bank account support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Formation Support",
    description: "Personal account manager from initial consultation through visa processing and first employee hire.",
  },
];

export function ProblemValueProp() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Bahrain Business Setup Made Simple
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Starting a business in Bahrain should be exciting, not exhausting. Our expert team handles all MOIC paperwork, commercial registration, and LMRA compliance—so you can focus on growing your business.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-gold/30 transition-all duration-300 text-center"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <benefit.icon className="h-8 w-8 text-gold" />
              </motion.div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-[1.7] text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
