import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, Scale, Shield, Search, ChevronDown, ChevronUp } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "Contract Drafting",
    description: "Legally sound agreements that protect your interests",
    services: [
      "Commercial contracts (sales, supply, distribution)",
      "Employment contracts and HR policies",
      "Partnership and shareholder agreements",
      "Service level agreements (SLAs)",
      "Confidentiality and non-compete clauses"
    ]
  },
  {
    icon: Scale,
    title: "Commercial Law Advisory",
    description: "Strategic guidance on business transactions",
    services: [
      "Corporate structuring advice",
      "Commercial dispute prevention",
      "Intellectual property protection",
      "Licensing and permit requirements",
      "Cross-border transaction support"
    ]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay compliant with evolving Bahraini regulations",
    services: [
      "MOIC compliance reviews",
      "LMRA labour law compliance",
      "NBR tax and VAT alignment",
      "Industry-specific regulatory mapping",
      "Compliance audit and remediation"
    ]
  },
  {
    icon: Search,
    title: "Legal Due Diligence",
    description: "Informed decisions before major commitments",
    services: [
      "Corporate due diligence for acquisitions",
      "Partner and supplier background checks",
      "Real estate and lease reviews",
      "Contract risk assessment",
      "Regulatory status verification"
    ]
  }
];

export function LegalServicePillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Our Legal Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Legal Consulting for Every Business Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars of legal expertise to protect and empower your business in Bahrain.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>

                {/* Services List */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors w-full justify-between"
                  >
                    <span>View services</span>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? "auto" : 0,
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2">
                      {pillar.services.map((service, sIndex) => (
                        <li key={sIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
