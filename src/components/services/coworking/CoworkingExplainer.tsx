import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Globe, TrendingUp, Clock, Sparkles } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Instant access to professional workspaces" },
  { icon: Shield, text: "All-inclusive pricing with no hidden fees" },
  { icon: Globe, text: "Professional business address in Sanabis" },
  { icon: TrendingUp, text: "Networking opportunities with entrepreneurs" },
  { icon: Clock, text: "Flexible hours including 24/7 access options" },
];

const facts = [
  { label: "Starting From", value: "BHD 15/day" },
  { label: "Contract Length", value: "No commitment" },
  { label: "Location", value: "Sanabis Tower" },
  { label: "Amenities", value: "12+ included" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoworkingExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Clean Dot Grid Background - Lighter color */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
          }}
        />
      </div>
      {/* Subtle gold accent */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 50% 40% at 80% 20%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Column - SEO Enhanced */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">What is Coworking?</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Flexible Office Solutions in Bahrain
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong>coworking space in Bahrain</strong> provides shared office facilities where 
                freelancers, remote workers, startups, and established businesses work alongside each 
                other in a collaborative environment. Unlike traditional office leases that require 
                long-term commitments, coworking spaces offer <strong>flexible workspace solutions</strong> that 
                scale with your business needs.
              </p>
              <p>
                At Keylink Corp's premium <strong>coworking spaces in Sanabis</strong>, you'll find everything 
                from <strong>hot desks</strong> for daily use to <strong>dedicated desks</strong> for regular 
                professionals and fully-serviced <strong>private offices</strong> for growing teams. Our 
                <strong> shared office space</strong> includes high-speed gigabit internet, professional 
                meeting room access, mail handling services, and a prestigious <strong>business address</strong> for 
                your CR registration—all with flexible membership terms and no long-term contracts.
              </p>
              <p>
                Whether you're a freelancer seeking a productive work environment away from home, a 
                startup founder looking to minimize overhead costs while maximizing professionalism, 
                or an established company needing satellite <strong>office space in Bahrain's</strong> commercial 
                hub, our flexible workspace solutions in Sanabis adapt to your evolving requirements.
              </p>
            </motion.div>
          </motion.div>

          {/* Benefits Panel (Navy for contrast) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Key Benefits</span>
              </div>

              <h3 className="text-xl font-semibold mb-6">
                Why Choose a Shared Office Space in Bahrain?
              </h3>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-primary-foreground/80 pt-2">{benefit.text}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary-foreground/10 rounded-xl p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xs text-primary-foreground/50 mb-1">{fact.label}</div>
                    <div className="text-lg font-bold text-accent">{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
