import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Briefcase, ArrowRight, Phone, Shield, Building2, FileCheck, Globe, Clock, Coins } from "lucide-react";
import heroImage from "@/assets/bl-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const heroFeatures = [
  { icon: Globe, text: "100% Foreign Ownership" },
  { icon: Coins, text: "From BHD 350" },
  { icon: Clock, text: "3-7 Days Processing" }
];

const trustLogos = [
  { icon: Shield, text: "MOIC Registered" },
  { icon: Building2, text: "LMRA Approved" },
  { icon: FileCheck, text: "Chamber Partner" }
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

export function BLHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background Pattern */}
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
            {/* Badge */}
            <motion.div variants={heroHeadlineLine}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 shadow-sm mb-6">
                <Briefcase className="w-4 h-4" />
                Business Licensing Services
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={heroHeadlineLine}
              className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Get Your Business License in Bahrain{" "}
              <span className="relative inline-block text-accent">
                — Fast, Simple, Guaranteed
                <motion.span 
                  variants={underlineAnimation}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute -bottom-1 left-0 w-full h-3 bg-accent/20 rounded-full origin-left -z-10"
                />
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              variants={heroHeadlineLine}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              From application to approval in 3-7 days. 100% foreign ownership. Complete MOIC and trade licensing support.
            </motion.p>
            
            {/* Feature Pills */}
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
            
            {/* CTAs */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all">
                <a href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white shadow-md">
                <a href="#calculator">
                  Calculate Your Costs
                </a>
              </Button>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div 
              variants={heroHeadlineLine}
              className=""
            >
              <HeroReviewStrip align="left" />
            </motion.div>

            {/* Trust Line */}
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
            {/* Main Image */}
            <motion.div
              variants={imageReveal}
              className="relative rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src={heroImage}
                alt="Professional business consultant helping client with licensing"
                className="w-full h-auto object-cover aspect-square"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Badge - Success Rate */}
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
            
            {/* Floating Badge - Licenses Issued */}
            <motion.div
              variants={floatingBadge}
              className="absolute -left-4 bottom-8 lg:bottom-12 bg-white backdrop-blur-md rounded-2xl p-5 shadow-sm border-2 border-border hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2,500+</div>
                  <div className="text-sm font-medium text-muted-foreground">Licenses Issued</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Blur */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-accent/25 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
