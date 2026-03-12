import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Clock, Users, Award } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import heroImage from "@/assets/consulting-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const featurePills = [
  { icon: Shield, text: "25+ Business Services" },
  { icon: Clock, text: "10+ Years in Bahrain" },
  { icon: Users, text: "500+ Businesses Served" },
  { icon: Award, text: "MOIC & LMRA Authorized" },
];

export function ConsultingHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern - Gold Radial Glow */}
      <div
        className="absolute top-0 z-[-1] h-full w-full bg-white"
        style={{
          background: `
            radial-gradient(100% 50% at 50% 0%, rgba(199,167,99,0.12) 0, rgba(199,167,99,0) 50%),
            white
          `
        }}
      />
      
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="section-badge">Business Consultancy in Bahrain</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-[1.1]"
            >
              Your Complete Business Partner in Bahrain
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Stop juggling multiple agencies. One trusted partner for company formation, 
              strategic advisory, government liaison, and ongoing support — from day one to year ten.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {featurePills.map((pill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border text-sm font-medium text-primary shadow-sm"
                >
                  <pill.icon className="w-4 h-4 text-accent" />
                  {pill.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-primary"
              >
                <a href="tel:+97317000000">
                  <Phone className="w-5 h-5" />
                  Call +973 1700 0000
                </a>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex justify-center lg:justify-start">
              <HeroReviewStrip align="left" />
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional business consultant in modern Bahrain office"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:bottom-6 md:left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
