import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const pricingTiers = [
  {
    name: "Application Review",
    price: "BHD 150",
    description: "For founders who already have a company registered",
    features: [
      "Program eligibility assessment",
      "Application documentation review",
      "One round of feedback",
      "Email support"
    ],
    ctaText: "Get Started",
    popular: false
  },
  {
    name: "Complete Package",
    price: "BHD 750",
    description: "Company formation through incubator acceptance",
    features: [
      "Company registration included",
      "Full application preparation",
      "Direct program submission",
      "Interview coaching",
      "Resubmission if needed",
      "3 months post-acceptance support"
    ],
    ctaText: "Most Popular",
    popular: true
  },
  {
    name: "Multi-Program Strategy",
    price: "BHD 1,200",
    description: "Apply to 2-3 programs strategically",
    features: [
      "Everything in Complete Package",
      "Sequential program applications",
      "Investor pitch preparation",
      "6 months ongoing support",
      "Priority WhatsApp access"
    ],
    ctaText: "Go Premium",
    popular: false
  }
];

export function IncubatorPricing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--accent) / 0.1) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Transparent Pricing</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Investment That Pays Back Through <span className="text-accent">Acceptance</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Choose the package that matches your current stage and goals.
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-300 ${
                  tier.popular 
                    ? "border-accent bg-accent/5 shadow-lg scale-105" 
                    : "border-border bg-background hover:border-accent/50 hover:shadow-md"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${tier.popular ? "" : "variant-outline"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  <Link to="/free-consultation">
                    {tier.ctaText}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
