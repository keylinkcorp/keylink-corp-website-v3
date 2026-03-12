import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem, imageReveal } from "@/lib/animations";
import { Clock, Building2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/certificate-attestation-hero.png";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const featurePills = [
  { icon: Clock, text: "Same-Day Available" },
  { icon: Building2, text: "15+ Embassies" },
  { icon: Award, text: "99.5% Approval" }
];

export function CertificateAttestationHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern - Enhanced with blur elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(100%_50%_at_0%_0%,rgba(199,167,99,0.15)_0,rgba(199,167,99,0)_60%)]"
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)"
          }}
        />
        {/* Decorative blur elements */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
                Certificate Attestation in Bahrain
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6"
            >
              One Submission. 99.5% First-Time Approval.{" "}
              <span className="text-accent">Zero Confusion.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              MOFA, Embassy, and Apostille attestation for educational, commercial, and personal documents. 15+ embassies covered. From BHD 15.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {featurePills.map((pill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <pill.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{pill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Price Anchor */}
            <motion.div variants={staggerItem} className="mb-8">
              <p className="text-sm text-muted-foreground">
                Services from{" "}
                <span className="text-2xl font-bold text-primary">BHD 15</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
              >
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="#pricing">
                  View Pricing
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10">
              <HeroReviewStrip align="left" />
            </motion.div>
          </motion.div>

          {/* Visual - Right Side with Professional Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Professional Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={heroImage} 
                  alt="Professional document attestation services in Bahrain" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Gradient overlay for better badge visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                
                {/* Floating stat badge - bottom left */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-white/50"
                >
                  <p className="text-2xl font-bold text-primary">99.5%</p>
                  <p className="text-xs text-muted-foreground">First-Time Approval</p>
                </motion.div>
                
                {/* Floating stat badge - top right */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-white/50"
                >
                  <p className="text-2xl font-bold text-accent">15+</p>
                  <p className="text-xs text-muted-foreground">Embassies</p>
                </motion.div>
              </div>
              
              {/* Floating experience badge - bottom right outside */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute -bottom-6 -right-6 bg-primary rounded-xl shadow-xl px-6 py-4 border-4 border-white"
              >
                <div className="text-3xl font-bold text-accent">8+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </motion.div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
