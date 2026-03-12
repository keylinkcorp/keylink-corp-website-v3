import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Shield, RefreshCw, Zap, CheckCircle2 } from "lucide-react";

const guarantees = [
  {
    icon: RefreshCw,
    text: "Resubmit at no additional fee"
  },
  {
    icon: Shield,
    text: "Cover any government resubmission costs"
  },
  {
    icon: Zap,
    text: "Fast-track the revised application"
  }
];

export function VisaApprovalGuarantee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            {/* Shield Icon */}
            <motion.div 
              variants={staggerItem}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="w-10 h-10 text-accent" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Risk-Free Guarantee
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Our 100% Approval Rate Guarantee
            </motion.h2>

            {/* Content */}
            <motion.p 
              variants={staggerItem}
              className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              We don't submit applications that aren't ready to succeed. Our pre-screening 
              process catches issues before they become rejections. But if any application 
              we've approved for submission is declined, we:
            </motion.p>

            {/* Guarantee Points */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <guarantee.icon className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">{guarantee.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Statement */}
            <motion.div
              variants={staggerItem}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <p className="text-xl text-white/90 italic leading-relaxed">
                "In 10+ years and 5,000+ visas, we've maintained a perfect approval record. 
                When we say your visa is ready, it's ready."
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">100%</span>
                </div>
                <span className="text-white/70 text-sm">Approval Success Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
