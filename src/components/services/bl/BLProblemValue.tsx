import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertTriangle, 
  Clock, 
  FileX, 
  Globe,
  CheckCircle2,
  Zap,
  Users,
  Shield,
  ArrowDown,
  ArrowRight
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Confusing Requirements",
    description: "Multiple government portals, unclear documentation lists, and constantly changing regulations."
  },
  {
    icon: Clock,
    title: "Hidden Costs & Delays",
    description: "Unexpected fees, rejected applications, and months of waiting without clear timelines."
  },
  {
    icon: Globe,
    title: "Language & Bureaucracy Barriers",
    description: "Arabic-only systems, complex legal terminology, and no single point of contact."
  }
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Zero Effort Registration",
    description: "We handle everything from document preparation to final license collection."
  },
  {
    icon: Zap,
    title: "Fast-Track Processing",
    description: "Expert knowledge means first-time approval with no delays or rejections."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Your personal point of contact throughout the entire licensing process."
  },
  {
    icon: Shield,
    title: "Full Compliance Guarantee",
    description: "We ensure all MOIC requirements are met before submission."
  }
];

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }
};

export function BLProblemValue() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold border border-red-100 mb-4">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Navigating Bahrain's Business Licensing{" "}
            <span className="text-accent">Can Be Overwhelming</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Without expert guidance, entrepreneurs face unnecessary hurdles and delays
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border-l-4 border-l-red-400 border-t border-r border-b border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-bold text-lg mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Divider */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-8 mb-20"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <ArrowDown className="w-7 h-7 text-accent animate-bounce" />
            </div>
            <span className="text-base font-semibold text-muted-foreground">There's a better way</span>
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <CheckCircle2 className="w-4 h-4" />
              The Solution
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Over 2,500 Entrepreneurs Trust Keylink
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle every step — from MOIC submission to trade license approval — so you focus on your business, not paperwork.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border-2 border-border shadow-sm hover:border-accent hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors">
                <solution.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-accent transition-colors">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
          >
            Let Us Handle It For You
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
