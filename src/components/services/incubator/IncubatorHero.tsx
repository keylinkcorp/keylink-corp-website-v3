import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Rocket, Target, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

import incubatorHero1 from "@/assets/incubator-hero-1.jpg";
import incubatorHero2 from "@/assets/incubator-hero-2.jpg";
import incubatorHero3 from "@/assets/incubator-hero-3.jpg";
import incubatorHero4 from "@/assets/incubator-hero-4.jpg";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const trustStats = [
  { icon: Rocket, value: 50, suffix: "+", label: "Startups Placed" },
  { icon: Target, value: 85, suffix: "%", label: "Acceptance Rate" },
  { icon: Users, value: 3, suffix: "", label: "Partner Programs" },
  { icon: Building2, value: 8, suffix: "+", label: "Years Experience" }
];

export function IncubatorHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center py-20 md:py-28 overflow-hidden"
    >
      {/* Aurora Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Startup Growth Partner</span>
            </motion.div>

            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Launch Your Startup in Bahrain's Thriving{" "}
              <span className="text-accent">Incubator & Accelerator</span> Ecosystem
            </motion.h1>

            <motion.p 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              From business registration to program acceptance. We guide foreign entrepreneurs 
              and first-time founders through Tamkeen, FinTech Bay, and C5 Accelerate — so you 
              can focus on building, not paperwork.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/free-consultation">
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:+97317000000">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="pt-2">
              <HeroReviewStrip align="left" />
            </motion.div>

            {/* Trust Stats */}
            <motion.div 
              variants={staggerItem}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
            >
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image Grid */}
          <motion.div 
            variants={staggerItem}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5]"
                >
                  <img 
                    src={incubatorHero1} 
                    alt="Diverse startup founders collaborating in Bahrain coworking space"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg aspect-square"
                >
                  <img 
                    src={incubatorHero3} 
                    alt="Bahrain Financial Harbour business district skyline"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg aspect-square"
                >
                  <img 
                    src={incubatorHero2} 
                    alt="Startup pitch presentation to investors in Bahrain"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5]"
                >
                  <img 
                    src={incubatorHero4} 
                    alt="Business mentorship session for startup founders"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Price Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg"
            >
              <p className="text-xs uppercase tracking-wide opacity-80">Starting From</p>
              <p className="text-2xl font-bold">BHD 150</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
