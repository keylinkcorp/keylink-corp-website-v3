import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

interface ServiceCTAProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
}

export function ServiceCTA({
  badge = "Get Started",
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  features
}: ServiceCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background Pattern - Simple Dotted (Light Mode) */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-accent text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={staggerItem}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Features List */}
          {features && features.length > 0 && (
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm"
                >
                  ✓ {feature}
                </span>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
              <Link to={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
              >
                <a href={secondaryCTA.href}>
                  <Phone className="w-5 h-5" />
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
