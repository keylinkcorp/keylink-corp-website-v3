import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Phone, Shield, Clock, CheckCircle, Headphones } from "lucide-react";
import taxHeroImage from "@/assets/tax-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const features = [
  { icon: Shield, text: "NBR-Registered Agents" },
  { icon: CheckCircle, text: "100% Compliance Rate" },
  { icon: Clock, text: "Same-Day Response" },
  { icon: Headphones, text: "End-to-End Support" }
];

export function TaxHero() {
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
                <Shield className="w-4 h-4" />
                NBR-Registered Tax Experts
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Tax Services in Bahrain{" "}
              <span className="text-accent">You Can Trust</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={staggerItem}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              VAT registration, quarterly returns, and corporate tax advisory from NBR-certified professionals. End-to-end compliance — so you never face penalties.
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
                <span className="text-3xl font-bold text-primary">BHD 150</span>
                <span className="text-sm text-muted-foreground">/quarter</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <Link to="/contact">
                  Book Free Consultation
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
                src={taxHeroImage} 
                alt="Professional tax consultant reviewing financial documents in Bahrain office"
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
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Businesses Registered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
