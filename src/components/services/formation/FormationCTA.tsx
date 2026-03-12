import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";

const features = ["Free Consultation", "No Obligations", "Expert Guidance"];

export function FormationCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Dashed pattern - center fade */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">Ready to Start?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[44px] md:text-[56px] lg:text-[64px] font-bold text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Ready to Start Your Business in Bahrain?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-[1.7]"
          >
            Join 500+ successful businesses. Get your company registered in as little as 3-7 days with expert guidance every step of the way.
          </motion.p>

          {/* Feature pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary"
              >
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {feature}
              </span>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/free-consultation" 
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold hover:bg-gold/90 text-primary font-semibold text-lg rounded-xl transition-all duration-200 shadow-sm"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="tel:+97317000000"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-primary text-primary font-semibold text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call +973 1700 0000
              </a>
            </motion.div>
          </motion.div>

          {/* Trust line */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-muted-foreground"
          >
            Trusted by <span className="font-semibold text-gold">500+ businesses</span> across 40+ countries
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
