import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Globe, 
  Percent, 
  MapPin, 
  TrendingUp, 
  DollarSign,
  Info
} from "lucide-react";

const comparisonPoints = [
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Available across most sectors"
  },
  {
    icon: Percent,
    title: "No Corporate Tax",
    description: "0% on most business activities"
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "1-hour flight to Saudi, UAE, Qatar"
  },
  {
    icon: TrendingUp,
    title: "Vision 2030",
    description: "Active government support for foreign investment"
  },
  {
    icon: DollarSign,
    title: "Cost Advantage",
    description: "30-40% lower operating costs than Dubai"
  }
];

export function WhyBahrainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Market Context</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Bahrain? Your Gateway to the Gulf
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bahrain offers a unique combination of business-friendly policies, strategic location, 
              and established infrastructure that make it the ideal GCC entry point.
            </p>
          </motion.div>

          {/* Comparison Points */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10"
          >
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-5 border border-border text-center hover:border-accent hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <point.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1 text-sm">{point.title}</h3>
                <p className="text-xs text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Regional Positioning Quote */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm mb-8"
          >
            <p className="text-lg text-primary leading-relaxed">
              "Many of our clients use Bahrain as their <span className="font-semibold text-accent">regional headquarters</span> while 
              serving the entire GCC market. The combination of low costs, full ownership rights, and 
              excellent infrastructure makes it the smart choice for market entry."
            </p>
          </motion.div>

          {/* Callout */}
          <motion.div
            variants={staggerItem}
            className="flex items-start gap-4 bg-accent/10 rounded-xl p-6 border border-accent/20"
          >
            <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-primary mb-1">
                Bahrain Economic Development Board (EDB)
              </p>
              <p className="text-muted-foreground">
                Actively supports foreign investment with dedicated fast-track services and 
                investor-friendly policies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
