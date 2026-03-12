import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Briefcase, ArrowRight, Phone, Shield, Building2, FileCheck } from "lucide-react";
import crHeroImage from "@/assets/cr-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const heroFeatures = [
  { icon: CheckCircle2, text: "100% Success Rate" },
  { icon: Award, text: "MOIC Expert" },
  { icon: Briefcase, text: "Full-Service" }
];

const trustLogos = [
  { icon: Shield, text: "MOIC Certified" },
  { icon: Building2, text: "Chamber Partner" },
  { icon: FileCheck, text: "LMRA Approved" }
];

const heroHeadlineContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const heroHeadlineLine: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const floatingBadge: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }
};

const underlineAnimation: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export function CRHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 z-20 h-full w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.18)_0,rgba(199,167,99,0)_50%)]" />
        <div className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side - 60% */}
          <motion.div
            variants={heroHeadlineContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            {/* Badge - Enhanced */}
            <motion.div variants={heroHeadlineLine}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 shadow-sm mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Registration Services
              </span>
            </motion.div>
            
            {/* Headline - Larger with animated underline */}
            <motion.h1 
              variants={heroHeadlineLine}
              className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6 tracking-tight"
            >
              Commercial Registration in Bahrain{" "}
              <span className="relative inline-block text-accent">
                Made Simple
                <motion.span 
                  variants={underlineAnimation}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 rounded-full origin-left -z-10"
                />
              </span>
            </motion.h1>
            
            {/* Subtitle - Enhanced */}
            <motion.p 
              variants={heroHeadlineLine}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              New Registration. Amendments. Renewals. Your Complete CR Solution.
            </motion.p>
            
            {/* Feature Pills - Enhanced with stronger styling */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-wrap gap-3 mb-8"
            >
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white backdrop-blur-sm rounded-full border-2 border-border shadow-md hover:shadow-lg hover:border-accent/50 transition-all"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTAs - Enhanced with gold accent button */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all">
                <a href="/contact">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white shadow-md">
                <a href="tel:+97317000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
            
            {/* Social Proof - Enhanced with real avatars */}
            <motion.div 
              variants={heroHeadlineLine}
              className=""
            >
              <HeroReviewStrip align="left" />
            </motion.div>

            {/* Trust Line - New */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border"
            >
              {trustLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <logo.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{logo.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image Side - 40% */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image - Enhanced shadow */}
            <motion.div
              variants={imageReveal}
              className="relative rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src={crHeroImage}
                alt="Professional business consultant shaking hands with client"
                className="w-full h-auto object-cover aspect-square"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Badge - Success Rate - Enhanced */}
            <motion.div
              variants={floatingBadge}
              className="absolute -right-4 top-8 lg:top-12 bg-white backdrop-blur-md rounded-2xl p-5 shadow-sm border-2 border-border hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm font-medium text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Badge - CRs Processed - Enhanced */}
            <motion.div
              variants={floatingBadge}
              className="absolute -left-4 bottom-8 lg:bottom-12 bg-white backdrop-blur-md rounded-2xl p-5 shadow-sm border-2 border-border hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <div className="text-sm font-medium text-muted-foreground">CRs Processed</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Blur - Enhanced */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-accent/25 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
