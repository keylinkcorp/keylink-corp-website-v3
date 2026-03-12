import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Building2, 
  Plane, 
  Stamp,
  Scale,
  CreditCard,
  Users,
  Car,
  MapPin,
  ScrollText,
  Landmark,
  FileCheck,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "MOIC Services",
    description: "Commercial registration, amendments, and company-related formalities",
    examples: ["CR registration", "CR renewal", "Activity amendments", "Capital changes"]
  },
  {
    icon: Users,
    title: "LMRA Services",
    description: "Labour market regulatory authority processes and work permits",
    examples: ["Work permits", "Visa transfers", "Labor cards", "Flexi permits"]
  },
  {
    icon: Plane,
    title: "Immigration",
    description: "Visa processing, renewals, and residence permit services",
    examples: ["Work visas", "Family visas", "Visit visas", "Exit permits"]
  },
  {
    icon: Stamp,
    title: "Attestation",
    description: "Document legalization for local and international use",
    examples: ["MoFA attestation", "Embassy attestation", "Notarization", "Apostille"]
  },
  {
    icon: Landmark,
    title: "Chamber of Commerce",
    description: "Business registration and trade documentation",
    examples: ["Membership", "Origin certificates", "Trade references", "Recommendations"]
  },
  {
    icon: MapPin,
    title: "Municipality",
    description: "Local authority permits and approvals",
    examples: ["Trade permits", "Signage approval", "Health permits", "Inspections"]
  },
  {
    icon: ScrollText,
    title: "Trade License",
    description: "License applications, renewals, and amendments",
    examples: ["New licenses", "Renewals", "Activity changes", "Branch licenses"]
  },
  {
    icon: Scale,
    title: "Legal Documents",
    description: "Court submissions and legal document processing",
    examples: ["Court filings", "Power of attorney", "Contracts", "Legal translations"]
  },
  {
    icon: FileCheck,
    title: "Clearances",
    description: "Official clearance certificates from various authorities",
    examples: ["Tax clearance", "LMRA clearance", "Police clearance", "Customs"]
  },
  {
    icon: CreditCard,
    title: "Banking Support",
    description: "Document preparation for banking and financial services",
    examples: ["Account opening", "Signatory updates", "Bank references", "Guarantees"]
  },
  {
    icon: Car,
    title: "Vehicle Registration",
    description: "Company vehicle registration and transfers",
    examples: ["New registration", "Transfers", "Renewals", "Export certificates"]
  },
  {
    icon: FileText,
    title: "General Documents",
    description: "Various government documents and certificates",
    examples: ["Good standing", "Statistics filings", "Trademark", "Custom docs"]
  }
];

export function PROServicesList() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Our Services</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Complete PRO Service Coverage
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From company registration to document attestation – we handle it all
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {service.examples.slice(0, 3).map((example, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-secondary px-2 py-1 rounded"
                  >
                    {example}
                  </span>
                ))}
                {service.examples.length > 3 && (
                  <span className="text-xs text-accent">+{service.examples.length - 3} more</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Need a service not listed? Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
