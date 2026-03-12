import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Clock, ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    price: "750",
    timeline: "5-7 Business Days",
    description: "Perfect for solo entrepreneurs starting with SPC",
    popular: false,
    features: [
      "SPC Registration",
      "Commercial Registration",
      "Security Approval",
      "Name Registration",
      "Document Notarization",
      "Basic Support"
    ],
    cta: "Get Started"
  },
  {
    name: "Business",
    price: "1,200",
    timeline: "3-5 Business Days",
    description: "Ideal for partnerships and growing SMEs",
    popular: true,
    features: [
      "Everything in Starter",
      "WLL Registration",
      "Bank Account Assistance",
      "Virtual Office (3 months)",
      "LMRA Registration",
      "1 Work Visa Processing",
      "Priority Support"
    ],
    cta: "Most Popular"
  },
  {
    name: "Premium",
    price: "1,800",
    timeline: "2-3 Business Days",
    description: "Full-service package for established businesses",
    popular: false,
    features: [
      "Everything in Business",
      "Priority Processing",
      "Physical Office Setup",
      "3 Work Visas Included",
      "PRO Services (6 months)",
      "Dedicated Account Manager",
      "24/7 Priority Support"
    ],
    cta: "Contact Us"
  }
];

const governmentFees = [
  { item: "CR Registration", amount: "BHD 60-100", note: "Varies by activity type" },
  { item: "MOIC License Fee", amount: "BHD 50", note: "Annual license" },
  { item: "Chamber of Commerce", amount: "BHD 50", note: "Membership registration" },
  { item: "Security Approval", amount: "BHD 30", note: "Background check" },
  { item: "Document Notarization", amount: "BHD 20-40", note: "Per document" },
  { item: "Municipality Fee", amount: "BHD 50", note: "Business location approval" },
];

const pricingFaqs = [
  {
    question: "What if my application is rejected?",
    answer: "We have a 100% success rate for eligible applications. However, in the rare event of a rejection due to factors beyond our control, we offer a full refund of our service fees (government fees are non-refundable). We also provide free resubmission after addressing any issues."
  },
  {
    question: "Are there any hidden fees?",
    answer: "Absolutely not. Our pricing is all-inclusive with no surprises. The quoted price includes all standard government fees, document preparation, notarization, and processing. Any additional services (like extra visas or premium office locations) are quoted separately upfront."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes! You can upgrade from Starter to Business or Premium at any time by paying the difference. We'll apply a 10% loyalty discount on the upgrade fee. All packages can also be customized to add specific services."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards (Visa/MasterCard), and cash payments. For packages above BHD 1,000, we offer flexible payment plans: 50% upfront and 50% upon CR issuance."
  }
];

export function PricingPackages() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Transparent Pricing — No Hidden Fees
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Choose the package that fits your business needs. All prices are fixed with no surprises.
            Government fees included in all packages.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                pkg.popular
                  ? "bg-primary text-white shadow-sm scale-105"
                  : "bg-white border-2 border-border hover:border-gold/40 hover:shadow-md"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-2 bg-gold text-primary text-sm font-semibold rounded-full">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  pkg.popular ? "text-white" : "text-primary"
                )}>
                  {pkg.name}
                </h3>
                <p className={cn(
                  "text-sm mb-4",
                  pkg.popular ? "text-white/80" : "text-muted-foreground"
                )}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={cn(
                    "text-sm",
                    pkg.popular ? "text-white/80" : "text-muted-foreground"
                  )}>
                    BHD
                  </span>
                  <span className={cn(
                    "text-5xl font-bold",
                    pkg.popular ? "text-white" : "text-gold"
                  )}>
                    {pkg.price}
                  </span>
                </div>
                <div className={cn(
                  "flex items-center justify-center gap-1 mt-2 text-sm",
                  pkg.popular ? "text-white/80" : "text-muted-foreground"
                )}>
                  <Clock className="h-4 w-4" />
                  {pkg.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={cn(
                      "flex items-start gap-3 text-sm",
                      pkg.popular ? "text-white/90" : "text-muted-foreground"
                    )}
                  >
                    <Check className={cn(
                      "h-5 w-5 flex-shrink-0 mt-0.5",
                      pkg.popular ? "text-gold" : "text-gold"
                    )} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/free-consultation" className="block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2",
                    pkg.popular
                      ? "bg-gold text-primary hover:bg-gold/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  )}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Government Fees Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-muted/30 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">
              Government Fees Included (Transparent Breakdown)
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              All packages include these standard government fees. No hidden charges.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {governmentFees.map((fee, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-primary text-sm">{fee.item}</span>
                    <span className="text-gold font-semibold text-sm">{fee.amount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{fee.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-primary">Our Service Fee Covers:</strong>{" "}
                Consultation, document preparation, application submission, government follow-ups, and delivery of final documents.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-primary mb-6 text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-gold" />
            Common Pricing Questions
          </h3>

          <div className="space-y-3">
            {pricingFaqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl border transition-all duration-300",
                  expandedFaq === index ? "border-gold/40 shadow-sm" : "border-border"
                )}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-primary">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      expandedFaq === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm text-muted-foreground leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom package note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Need a custom solution?{" "}
          <Link to="/free-consultation" className="text-gold font-medium hover:underline">
            Contact us for a tailored quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
