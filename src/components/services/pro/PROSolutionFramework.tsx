import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Zap, Building2, Receipt, Check } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "Same-Day Service",
    description: "Most documents processed and delivered within 24 hours. Express options available for urgent needs.",
    includes: [
      "Document collection",
      "Same-day delivery",
      "Express processing option",
      "Priority queue access"
    ]
  },
  {
    icon: Building2,
    title: "Coverage",
    subtitle: "All Ministries",
    description: "One point of contact for every government agency. No more figuring out which office handles what.",
    includes: [
      "MOIC / Sijilat",
      "LMRA & Immigration",
      "Municipality permits",
      "Chamber of Commerce"
    ]
  },
  {
    icon: Receipt,
    title: "Transparency",
    subtitle: "Fixed Pricing",
    description: "Know exactly what you'll pay before we start. No hidden fees, no surprises on your invoice.",
    includes: [
      "Upfront quotes",
      "Government fees included",
      "No hidden charges",
      "Itemized invoices"
    ]
  }
];

export function PROSolutionFramework() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              The Keylink Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why PRO Services in Bahrain Pay for Themselves
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three pillars that turn government paperwork from a liability into a non-issue.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-accent shadow-sm hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors">
                  <pillar.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {pillar.title}
                  </span>
                  <h3 className="text-2xl font-bold mt-1">{pillar.subtitle}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {pillar.description}
                </p>

                {/* Includes List */}
                <div className="border-t border-border pt-6">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 block">
                    Includes
                  </span>
                  <ul className="space-y-2">
                    {pillar.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
