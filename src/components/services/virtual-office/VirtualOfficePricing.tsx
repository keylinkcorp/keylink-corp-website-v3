import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    description: "Perfect for businesses that need a professional business address in Bahrain for CR registration without additional services.",
    price: "25",
    period: "month",
    popular: false,
    features: [
      "Sanabis business address",
      "CR registration use",
      "Mail reception & storage",
      "Mail notification alerts",
      "Building directory listing",
      "Monthly mail summary",
    ],
    cta: "Get Started",
  },
  {
    id: "business-plus",
    name: "Business Plus",
    description: "Ideal for professionals who need a complete virtual office in Bahrain with phone services and meeting room access.",
    price: "75",
    period: "month",
    popular: true,
    features: [
      "Everything in Essential",
      "Dedicated phone number",
      "Live call answering (50/month)",
      "Mail scanning & email delivery",
      "4 hours meeting room credits",
      "Call forwarding",
      "Voicemail to email",
      "Priority mail handling",
    ],
    cta: "Most Popular",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Premium virtual office solution for established businesses requiring unlimited call handling and dedicated support.",
    price: "150",
    period: "month",
    popular: false,
    features: [
      "Everything in Business Plus",
      "Unlimited call answering",
      "Priority mail handling",
      "10 hours meeting room",
      "Dedicated receptionist",
      "Premium directory listing",
      "International call forwarding",
      "Document storage",
    ],
    cta: "Go Premium",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export function VirtualOfficePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="relative py-20 md:py-28 overflow-hidden bg-[#F8F8F8]">
      {/* Large Grid Lines Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"
        />
      </div>
      {/* Gold accent from top */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 40% at 50% 0%, hsl(var(--gold) / 0.06) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Floating Savings Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="px-6 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-md shadow-accent/20 animate-float-subtle">
            💰 Save up to 80% vs physical office
          </div>
        </motion.div>

        {/* Header - SEO Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Virtual Office Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            How Much Does a Virtual Office Cost in Bahrain?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include our prestigious Sanabis address.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              whileHover={{ y: plan.popular ? -8 : -5 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-primary shadow-lg scale-105 z-10"
                  : "bg-background border border-border hover:border-accent/30 hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent via-accent to-accent text-accent-foreground px-4 py-2 text-sm font-bold flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name & Description */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>BHD</span>
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-accent' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}>/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-accent/20' : 'bg-accent/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/20"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 space-y-4"
        >
          <p className="text-muted-foreground">
            Need a custom package or have questions?{" "}
            <a href="#contact" className="text-accent hover:underline font-medium">
              Contact us for personalized solutions
            </a>
          </p>
          
          {/* Internal Link to Coworking */}
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/5 border border-border">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground">Need a physical workspace?</span>
            <Link 
              to="/services/coworking-space" 
              className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
            >
              Explore our Coworking Space
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
