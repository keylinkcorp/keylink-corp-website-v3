import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, Star, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface ServicePricingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export function ServicePricing({
  badge = "Pricing",
  title,
  subtitle,
  tiers
}: ServicePricingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-secondary/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">{badge}</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`relative bg-white rounded-2xl p-8 border-2 shadow-sm ${
                tier.popular 
                  ? "border-accent" 
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-accent text-primary text-sm font-semibold rounded-full">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">/{tier.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                asChild 
                className={`w-full ${tier.popular ? "btn-gold" : ""}`}
                variant={tier.popular ? "default" : "outline"}
              >
                <Link to={tier.ctaHref || "/contact"}>
                  {tier.ctaText || "Get Started"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
