import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Building2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/liquidation-hero-professional.jpg";
import { heroHeadlineContainer, heroHeadlineLine, imageReveal } from "@/lib/animations";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const heroFeatures = [
  { icon: Shield, text: "7-Ministry Clearance" },
  { icon: Clock, text: "4-6 Week Timeline" },
  { icon: Building2, text: "100% Compliance Rate" },
];

export function LiquidationHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial Gradient Blur - Gold tint from top */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.15)_0,rgba(199,167,99,0)_50%,rgba(199,167,99,0)_100%)]" />
      
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_85%,transparent_100%)]" />

      <div className="container py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8"
            >
              <span className="text-sm font-medium text-accent">Protect Your Business Legacy</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              variants={heroHeadlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-bold tracking-tight leading-[1.15] mb-6"
            >
              <motion.span variants={heroHeadlineLine} className="block text-primary">
                Close Your Bahrain Company
              </motion.span>
              <motion.span variants={heroHeadlineLine} className="block text-primary">
                The Right Way—
              </motion.span>
              <motion.span variants={heroHeadlineLine} className="block text-accent relative">
                <span className="inline">Avoid BHD 5,000+ in Penalties</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-accent/20 rounded-full origin-left" 
                />
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-[22px] text-muted-foreground mb-10 leading-[1.7] max-w-md"
            >
              Improper company closure leaves you exposed to frozen bank accounts, LMRA fines, travel bans, and personal liability. Our 7-ministry clearance process ensures complete legal protection.
            </motion.p>

            {/* Feature list */}
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-12"
            >
              {heroFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <feature.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary font-medium">{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/free-consultation">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary text-[17px] h-14 px-8 rounded-xl font-semibold shadow-sm"
                  >
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <a href="#liquidation-calculator">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-primary text-primary h-14 px-8 text-[17px] rounded-xl hover:bg-primary hover:text-primary-foreground font-semibold"
                  >
                    Calculate Liquidation Costs
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10"
            >
              <HeroReviewStrip align="left" />
            </motion.div>

            {/* Trust line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                Registered with <span className="font-medium text-primary">MOIC</span> • <span className="font-medium text-primary">LMRA</span> • <span className="font-medium text-primary">SIO</span> • <span className="font-medium text-primary">GOSI</span> • <span className="font-medium text-primary">NBR</span> • <span className="font-medium text-primary">Municipal Affairs</span>
              </p>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
              />
              
              <div className="rounded-2xl overflow-hidden shadow-sm relative">
                <img 
                  src={heroImage} 
                  alt="Professional consultant handling company liquidation in Bahrain" 
                  className="w-full h-[580px] object-cover"
                />
                
                {/* Floating price badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm"
                >
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold text-accent">BHD 650</p>
                </motion.div>

                {/* Floating warning badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute top-6 right-6 bg-primary/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-white mb-1">
                    <AlertTriangle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold">Avoid Penalties</span>
                  </div>
                  <p className="text-2xl font-bold text-white">350+</p>
                  <p className="text-xs text-white/80">Successful Closures</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
