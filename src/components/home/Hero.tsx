import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";
import { heroHeadlineContainer, heroHeadlineLine, imageReveal } from "@/lib/animations";

const heroFeatures = ["100% Foreign Ownership", "3-7 Day Formation", "End-to-End Support"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.15)_0,rgba(199,167,99,0)_50%,rgba(199,167,99,0)_100%)]" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_85%,transparent_100%)]" />
      <div className="container py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-sm font-medium text-muted-foreground mb-8 tracking-wide">
              Trusted by 1,000+ businesses worldwide
            </motion.p>
            <motion.h1 variants={heroHeadlineContainer} initial="hidden" animate="visible" className="text-[48px] md:text-[56px] lg:text-[68px] xl:text-[80px] font-bold tracking-tight leading-[1.1] mb-8">
              <motion.span variants={heroHeadlineLine} className="block text-primary">Plan.</motion.span>
              <motion.span variants={heroHeadlineLine} className="block text-primary">Register.</motion.span>
              <motion.span variants={heroHeadlineLine} className="block text-primary relative">
                <span className="inline">Grow.</span>
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute -bottom-1 left-0 right-0 h-2 bg-gold/20 rounded-full origin-left" />
              </motion.span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-xl md:text-[22px] text-muted-foreground mb-10 leading-[1.7] max-w-md">
              Start your business in Bahrain with confidence. We handle the paperwork so you can focus on growth.
            </motion.p>
            <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-x-6 gap-y-3 mb-12">
              {heroFeatures.map((feature, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] h-14 px-8 rounded-xl font-semibold shadow-sm">
                  Start Your Business <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/cost-calculator">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary h-14 px-8 text-[17px] rounded-xl hover:bg-primary hover:text-primary-foreground font-semibold">
                  Calculate Costs
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="mt-10">
              <HeroReviewStrip align="left" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Registered with <span className="font-medium text-primary">MOIC</span> • <span className="font-medium text-primary">LMRA</span> • <span className="font-medium text-primary">Bahrain Chamber</span>
              </p>
            </motion.div>
          </div>
          <motion.div variants={imageReveal} initial="hidden" animate="visible" className="hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-sm relative bg-gradient-to-br from-gold/10 to-primary/5 h-[580px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-gold" />
                  </div>
                  <p className="text-primary font-semibold text-lg">Business Setup Made Simple</p>
                  <p className="text-muted-foreground mt-2">Bahrain's Trusted Partner</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-sm">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
