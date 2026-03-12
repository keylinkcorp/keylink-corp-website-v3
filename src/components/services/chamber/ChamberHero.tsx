import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Phone, Building2, Clock, CheckCircle, Globe } from "lucide-react";
import chamberHeroImage from "@/assets/chamber-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const features = [
  { icon: Building2, text: "BCCI-Certified Partners" },
  { icon: Clock, text: "Same-Day Certificate Processing" },
  { icon: Globe, text: "Arabic & English Support" },
  { icon: CheckCircle, text: "1,200+ Documents Processed" }
];

export function ChamberHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--navy) / 0.05) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                BCCI-Certified Trade Specialists
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Chamber of Commerce Services in Bahrain{" "}
              <span className="text-accent">— Hassle-Free BCCI Registration</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={staggerItem}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Complete membership registration, certificate of origin attestation, and trade documentation services. We handle every step with the Bahrain Chamber of Commerce and Industry so you can focus on growing your business.
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
              <div className="inline-flex items-baseline gap-2 px-6 py-3 bg-primary/5 rounded-2xl">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="text-3xl font-bold text-primary">BHD 35</span>
                <span className="text-sm text-muted-foreground">/certificate</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <a href="tel:+97317000000">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +973 1700 0000
                </a>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10">
              <HeroReviewStrip align="left" />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={chamberHeroImage} 
                alt="Professional BCCI consultant reviewing chamber of commerce documents in Bahrain office"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">First-Submission Approval</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
