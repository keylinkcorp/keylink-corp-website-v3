import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  RefreshCw,
  Plane,
  Calculator,
  FileText,
  Compass,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const servicePillars = [
  {
    icon: Building2,
    title: "Company Formation & Structuring",
    description: "Start your Bahrain business with the right legal entity",
    features: [
      { name: "WLL Formation", href: "/services/wll-company" },
      { name: "SPC Registration", href: "/services/single-person-company" },
      { name: "Branch Office", href: "/services/company-formation" },
      { name: "Commercial Registration", href: "/services/commercial-registration" },
      { name: "Business License", href: "/services/company-formation" },
      { name: "MOA Drafting", href: "/services/company-formation" }
    ]
  },
  {
    icon: RefreshCw,
    title: "Registration & Compliance",
    description: "Keep your business compliant and up-to-date",
    features: [
      { name: "CR Renewal", href: "/services/cr-renewal" },
      { name: "CR Amendment", href: "/services/cr-amendment" },
      { name: "Lease Registration", href: "/services/lease-registration" },
      { name: "Chamber of Commerce", href: "/services/pro-services" },
      { name: "Trade License Updates", href: "/services/pro-services" }
    ]
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work permits, residency, and family visas",
    features: [
      { name: "Work Visas", href: "/services/visa-immigration" },
      { name: "Family Visas", href: "/services/visa-immigration" },
      { name: "Golden Visa (10-year)", href: "/services/visa-immigration" },
      { name: "Visa Renewals", href: "/services/visa-immigration" },
      { name: "Visa Cancellation", href: "/services/visa-immigration" }
    ]
  },
  {
    icon: Calculator,
    title: "Financial Services",
    description: "Accounting, tax, and banking support",
    features: [
      { name: "Accounting & Bookkeeping", href: "/services/accounting" },
      { name: "VAT Registration & Filing", href: "/services/accounting" },
      { name: "Tax Compliance (NBR)", href: "/services/accounting" },
      { name: "Bank Account Opening", href: "/services/company-formation" },
      { name: "Audit Support", href: "/services/accounting" }
    ]
  },
  {
    icon: FileText,
    title: "PRO & Government Liaison",
    description: "Navigate ministries and government processes",
    features: [
      { name: "PRO Services", href: "/services/pro-services" },
      { name: "Document Clearance", href: "/services/pro-services" },
      { name: "Certificate Attestation", href: "/services/pro-services" },
      { name: "Ministry Coordination", href: "/services/pro-services" },
      { name: "Municipality Approvals", href: "/services/pro-services" }
    ]
  },
  {
    icon: Compass,
    title: "Strategic & Legal Advisory",
    description: "Expert guidance for growth and compliance",
    features: [
      { name: "Management Consulting", href: "/services/management-consulting" },
      { name: "Legal Consulting", href: "/services/legal-consulting" },
      { name: "Feasibility Studies", href: "/services/management-consulting" },
      { name: "Market Entry Strategy", href: "/services/management-consulting" },
      { name: "Contract Drafting", href: "/services/legal-consulting" }
    ]
  }
];

export function ConsultingServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
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
            <span className="section-badge">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Full-Spectrum Business Consultancy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              25+ specialized services across 6 key areas. From market entry to daily operations, we've got you covered.
            </p>
          </motion.div>

          {/* Services Grid - 3 columns on desktop */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicePillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 h-full ${
                    expandedIndex === index
                      ? "border-accent shadow-lg"
                      : "border-border hover:border-accent/50 hover:shadow-md"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <pillar.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {pillar.description}
                    </p>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      {expandedIndex === index ? "Show Less" : "View Services"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Features with Links */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-border">
                          <ul className="space-y-2">
                            {pillar.features.map((feature, fIndex) => (
                              <li key={fIndex}>
                                <Link
                                  to={feature.href}
                                  className="flex items-center justify-between gap-2 text-sm py-2 px-3 rounded-lg hover:bg-accent/5 transition-colors group/link"
                                >
                                  <span className="text-muted-foreground group-hover/link:text-primary transition-colors">
                                    {feature.name}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
