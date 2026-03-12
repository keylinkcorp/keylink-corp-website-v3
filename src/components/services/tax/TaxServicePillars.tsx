import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, Calculator, TrendingUp, Shield, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "VAT Registration",
    description: "Complete NBR portal registration with TRN issuance",
    features: [
      "NBR portal registration",
      "TRN (Tax Registration Number) issuance",
      "Activity code classification",
      "Bank account verification",
      "Voluntary vs mandatory assessment"
    ]
  },
  {
    icon: Calculator,
    title: "VAT Return Filing",
    description: "Quarterly return preparation and deadline management",
    features: [
      "Quarterly return preparation",
      "Input/output tax reconciliation",
      "Deadline management",
      "Amendment submissions",
      "Audit trail documentation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Corporate Tax Advisory",
    description: "Future-ready planning for 2024+ tax requirements",
    features: [
      "2024+ tax regime preparation",
      "Profit optimization strategies",
      "Cross-border tax planning",
      "Transfer pricing guidance",
      "Industry-specific exemptions"
    ]
  },
  {
    icon: Shield,
    title: "Tax Compliance Audits",
    description: "Annual reviews and NBR audit preparation",
    features: [
      "Annual compliance reviews",
      "NBR audit preparation",
      "Record-keeping assessments",
      "Risk identification",
      "Remediation support"
    ]
  }
];

export function TaxServicePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, hsl(var(--gold) / 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, hsl(var(--navy) / 0.04) 0%, transparent 40%)
          `
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Our Tax Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Comprehensive Tax Support for Bahrain Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars of expertise to keep your business compliant and optimized.
            </p>
          </motion.div>

          {/* Service Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{pillar.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
