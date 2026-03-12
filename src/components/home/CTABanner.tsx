import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-gold" /><span className="text-sm font-medium text-gold">Start Today</span>
          </motion.div>
          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold text-primary mb-6 tracking-tight leading-[1.1]">Ready to Start Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-[1.7]">Let's make it official. Get expert guidance from Bahrain's most trusted business setup partner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-consultation" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold hover:bg-gold/90 text-primary font-semibold text-lg rounded-xl transition-all duration-200 shadow-sm">Get Started Now <ArrowRight className="h-5 w-5" /></Link>
            <a href="tel:+97317000000" className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-primary text-primary font-semibold text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"><Phone className="h-5 w-5" /> Call Us Now</a>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 text-muted-foreground">
            Trusted by <span className="font-semibold text-gold">1,000+ businesses</span> across 40+ countries
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
