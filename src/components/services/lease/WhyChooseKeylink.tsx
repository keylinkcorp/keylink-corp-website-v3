import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, FileText, Languages, ShieldCheck, Award } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import teamImage from "@/assets/lease-consultation-team.jpg";

const differentiators = [
  {
    icon: Zap,
    title: "Same-Day Processing",
    description: "Submit your lease in the morning, receive registration confirmation by evening. Express service for urgent requirements.",
  },
  {
    icon: FileText,
    title: "Full Document Handling",
    description: "Contract review, Arabic translation, portal submission—we handle every step so you don't touch the bureaucracy.",
  },
  {
    icon: Languages,
    title: "Bilingual Support",
    description: "English and Arabic speaking team assists landlords, tenants, and agents throughout the registration process.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guarantee",
    description: "100% RERA approval rate. We catch errors before submission, ensuring first-time acceptance every time.",
  },
];

export function WhyChooseKeylink() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Award className="w-4 h-4" />
              Why Keylink
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Bahrain's Trusted Lease{" "}
              <span className="text-accent">Registration Partner</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert service that makes lease registration hassle-free
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Differentiators */}
            <motion.div variants={staggerItem} className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Panel */}
            <motion.div 
              variants={staggerItem}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={teamImage} 
                  alt="Keylink lease registration team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-primary rounded-xl px-6 py-4 shadow-md"
              >
                <p className="text-3xl font-bold text-white">5,000+</p>
                <p className="text-sm text-white/80">Leases Registered</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
