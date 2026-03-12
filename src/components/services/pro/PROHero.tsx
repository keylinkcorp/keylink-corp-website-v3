import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem, imageReveal } from "@/lib/animations";
import { Building2, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pro-services-hero-professional.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const featurePills = [
  { icon: Clock, text: "Same-Day Collection" },
  { icon: Building2, text: "All Ministries" },
  { icon: Shield, text: "Fixed Pricing" }
];

export function PROHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern - Gold radial + dot grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(100%_50%_at_0%_0%,rgba(199,167,99,0.12)_0,rgba(199,167,99,0)_60%)]"
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)"
          }}
        />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                PRO Services in Bahrain
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={staggerItem}
              className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6"
            >
              Skip the Queues.{" "}
              <span className="text-accent">We Handle Every Government Office.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Same-day document processing across 15+ ministries. No visits. No confusion. Just results.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {featurePills.map((pill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
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
                <span className="text-2xl font-bold text-primary">BHD 50</span>
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
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              >
                <Link to="/contact">
                  Get PRO Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="#services">
                  View All Services
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10">
              <HeroReviewStrip align="left" />
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Image container with decorative border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional PRO officer holding government documents in Bahrain office"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-6 py-4 border border-border">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Ministries Covered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
