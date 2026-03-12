import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Clock, Award, Users, ArrowRight, Phone, MessageCircle } from "lucide-react";
import visaHeroImage from "@/assets/visa-hero.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const features = [
  { icon: Clock, text: "5-Day Processing" },
  { icon: Award, text: "100% Approval Rate" },
  { icon: Users, text: "Family Sponsorship" }
];

export function VisaServicesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern - Radial gradient blur with gold tint */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(100% 50% at 50% 0%, hsl(var(--gold) / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--navy) / 0.05) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="section-badge">Visa & Immigration Services</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={staggerItem}
              className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-bold tracking-tight leading-[1.15] mb-6"
            >
              Professional <span className="text-accent">Visa Services</span> in Bahrain
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-3">
                From Work Permits to Golden Residency
              </span>
            </motion.h1>

            {/* Subtitle - SEO-optimized content */}
            <motion.p 
              variants={staggerItem}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Navigate Bahrain's immigration system with confidence. Our dedicated visa specialists 
              handle every step—from initial eligibility assessment through to your CPR card collection. 
              Whether you're an employer bringing in talent, an expat relocating your family, or an 
              investor seeking long-term residency, we deliver results in days, not weeks.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Price Badge */}
            <motion.div variants={staggerItem} className="mb-8">
              <div className="inline-flex items-baseline gap-2 px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10">
                <span className="text-sm text-muted-foreground">Work visas from</span>
                <span className="text-3xl font-bold text-primary">BHD 250</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <a href="tel:+97317000000">
                  <Phone className="w-5 h-5" />
                  Call +973 1700 0000
                </a>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10">
              <HeroReviewStrip align="left" />
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={visaHeroImage} 
                alt="Professional visa consultation team in Bahrain helping business clients with immigration services" 
                className="w-full h-auto object-cover aspect-video"
              />
              
              {/* Floating Stats Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Visas Processed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-primary text-white rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Approval Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
