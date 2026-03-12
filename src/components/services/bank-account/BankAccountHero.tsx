import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/bank-account-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const featurePills = [
  "95% Approval Rate",
  "2–3 Week Timeline",
  "Direct RM Access",
  "All Major Banks"
];

export function BankAccountHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleConsultation = () => {
    const phone = "97317000000";
    const message = encodeURIComponent("Hi, I'm interested in your Bank Account Opening service for my Bahrain company.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Base white */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Gold radial glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(199, 167, 99, 0.12) 0%, transparent 60%)"
          }}
        />
        
        {/* Dot grid with fade */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <Badge className="bg-gold/10 text-gold border-gold/20 hover:bg-gold/15 mb-6">
              Business Bank Account Bahrain
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-primary leading-[1.1] tracking-tight mb-6">
              Open Your Business Bank Account in Bahrain — Faster
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl lg:max-w-none">
              Since June 2024, a corporate bank account is mandatory before your Commercial Registration can be issued. We connect you directly with relationship managers at Bahrain's top banks, cutting weeks off the typical timeline.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {featurePills.map((pill) => (
                <div 
                  key={pill}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-primary">{pill}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-8 text-base"
                onClick={handleConsultation}
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 gap-2 h-14 px-8 text-base"
                asChild
              >
                <a href="tel:+97317000000">
                  <Phone className="h-5 w-5" />
                  Call +973 1700 0000
                </a>
              </Button>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <HeroReviewStrip align="left" />
            </div>
          </motion.div>

          {/* Image - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional bank relationship manager meeting with entrepreneur in modern Bahrain banking institution"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-border"
            >
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">First-Attempt Approval</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
