import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileCheck, Users, Stamp, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingCards = [
  {
    icon: FileCheck,
    title: "Certificate of Origin",
    price: "35",
    unit: "/certificate",
    features: [
      "Includes preparation + submission",
      "Digital and physical copies",
      "Same-day rush: +BHD 20"
    ],
    popular: true
  },
  {
    icon: Users,
    title: "BCCI Membership",
    price: "75",
    unit: "service fee",
    features: [
      "Excludes BCCI membership fee",
      "Includes all paperwork",
      "Card collection included"
    ],
    popular: false
  },
  {
    icon: Stamp,
    title: "Document Attestation",
    price: "25",
    unit: "/document",
    features: [
      "Commercial invoices, packing lists",
      "Contracts and agreements",
      "Bulk discounts available"
    ],
    popular: false
  },
  {
    icon: Calendar,
    title: "Monthly Retainer",
    price: "150",
    unit: "/month",
    features: [
      "For regular exporters",
      "Up to 10 COs/month included",
      "Priority processing"
    ],
    popular: false
  }
];

export function ChamberPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing — No Hidden Fees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear pricing for every service. Know exactly what you pay before you commit.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
          >
            {pricingCards.map((card, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all ${
                  card.popular ? 'border-accent border-2' : 'border-border'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">From </span>
                  <span className="text-3xl font-bold text-primary">BHD {card.price}</span>
                  <span className="text-sm text-muted-foreground"> {card.unit}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant={card.popular ? "default" : "outline"} className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-muted/50 rounded-xl p-6 border border-border flex gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Note:</strong> Government fees (BCCI membership, CO stamps) are separate and payable directly to authorities. We provide a complete fee breakdown before you commit.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
