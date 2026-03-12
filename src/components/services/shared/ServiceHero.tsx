import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { LucideIcon, ArrowRight, Phone } from "lucide-react";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

interface FeaturePill {
  icon: LucideIcon;
  text: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  titleEnd?: string;
  subtitle: string;
  features: FeaturePill[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  priceFrom?: string;
  priceLabel?: string;
}

export function ServiceHero({
  badge,
  title,
  highlight,
  titleEnd,
  subtitle,
  features,
  primaryCTA,
  secondaryCTA,
  priceFrom,
  priceLabel = "Starting from"
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--navy) / 0.05) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <span className="section-badge">{badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            {title}{" "}
            {highlight && <span className="text-accent">{highlight}</span>}
            {titleEnd && ` ${titleEnd}`}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={staggerItem}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm"
              >
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Price Badge */}
          {priceFrom && (
            <motion.div variants={staggerItem} className="mb-8">
              <div className="inline-flex items-baseline gap-2 px-6 py-3 bg-primary/5 rounded-2xl">
                <span className="text-sm text-muted-foreground">{priceLabel}</span>
                <span className="text-3xl font-bold text-primary">{priceFrom}</span>
              </div>
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
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <a href="tel:+97317000000">
                <Phone className="w-5 h-5" />
                {secondaryCTA.text}
              </a>
            </Button>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-10 flex justify-center">
            <HeroReviewStrip align="center" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
