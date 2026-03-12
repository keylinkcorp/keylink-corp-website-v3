import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, ArrowRight, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Work Visa",
    price: "BHD 250",
    description: "Employment visa for company employees",
    popular: false,
    features: [
      "Work permit application",
      "LMRA registration",
      "Medical coordination",
      "CPR card processing",
      "Visa stamping assistance"
    ]
  },
  {
    name: "Family Visa",
    price: "BHD 350",
    description: "Dependent visas for spouse and children",
    popular: true,
    features: [
      "Spouse visa processing",
      "Children visa applications",
      "Family CPR cards",
      "School enrollment support",
      "Medical exam coordination",
      "Renewal management"
    ]
  },
  {
    name: "Golden Visa",
    price: "BHD 1,500",
    description: "10-year residency for investors",
    popular: false,
    features: [
      "Eligibility assessment",
      "Application preparation",
      "Investment documentation",
      "Family inclusion",
      "Premium processing",
      "Dedicated case manager"
    ]
  }
];

export function VisaPricingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Transparent Pricing</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Clear Pricing with No Hidden Fees
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe you deserve to know exactly what you're paying for. Every package 
            includes end-to-end support from application to CPR card.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className={`relative h-full flex flex-col overflow-hidden transition-all hover:shadow-xl ${
                tier.popular 
                  ? "border-2 border-accent shadow-lg scale-[1.02]" 
                  : "border border-border hover:border-accent/50"
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent text-primary text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${tier.popular ? "btn-gold" : ""}`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Government fees additional. Exact amounts provided during consultation.
        </motion.p>
      </div>
    </section>
  );
}
