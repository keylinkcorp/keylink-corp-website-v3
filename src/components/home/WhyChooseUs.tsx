import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ShieldCheck, Users, HeadphonesIcon, Award, Zap } from "lucide-react";
import teamImage from "@/assets/team-office.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Company registration in as little as 3-7 business days.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    description: "All documentation meets Bahrain's legal requirements.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Personal account manager for your business journey.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our team is always available to answer questions.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted by over 1,000 businesses worldwide.",
  },
  {
    icon: Zap,
    title: "One-Stop Solution",
    description: "From formation to ongoing compliance, all under one roof.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Why Keylink Corp
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            The Smart Choice for Business Setup
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            We combine local expertise with international standards to deliver exceptional service and results.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={teamImage} 
                  alt="Keylink Corp Team" 
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating stat */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-sm p-5 border border-border"
              >
                <p className="text-3xl font-bold text-gold">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Benefits grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <benefit.icon className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-[1.7]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
