import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Wallet, 
  Shield, 
  Zap, 
  Globe, 
  FileCheck 
} from "lucide-react";
import consultantImage from "@/assets/spc-solo-consultant.jpg";

const benefits = [
  {
    icon: User,
    title: "Total Control",
    description: "100% ownership, no partners needed. You make all decisions."
  },
  {
    icon: Wallet,
    title: "Lowest Entry Cost",
    description: "BHD 50 minimum capital requirement—the lowest in Bahrain."
  },
  {
    icon: Shield,
    title: "Limited Liability",
    description: "Your personal assets are protected from business debts."
  },
  {
    icon: Zap,
    title: "Fast Registration",
    description: "Complete setup in 3-14 days with our streamlined process."
  },
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "No local sponsor or Bahraini partner required."
  },
  {
    icon: FileCheck,
    title: "Simple Compliance",
    description: "Minimal annual requirements compared to larger entities."
  }
];

export function WhyChooseSPC() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={consultantImage} 
                alt="Solo consultant working with Single Person Company in Bahrain" 
                className="w-full h-[480px] object-cover"
              />
              
              {/* Floating stat badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-primary/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm"
              >
                <p className="text-2xl font-bold text-white">350+</p>
                <p className="text-xs text-white/80">SPCs Formed</p>
              </motion.div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
                <User className="w-4 h-4" />
                Why Single Person Company?
              </span>
            </motion.div>
            
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Perfect for <span className="text-gold">Solo Entrepreneurs</span>
            </motion.h2>
            
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-10 max-w-lg">
              The Single Person Company is Bahrain's simplest business structure—designed for consultants, freelancers, and solo business owners who want full control with minimal complexity.
            </motion.p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="p-5 bg-secondary/50 rounded-xl border border-border hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
