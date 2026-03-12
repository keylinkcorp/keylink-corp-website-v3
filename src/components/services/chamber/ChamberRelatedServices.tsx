import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Settings, FileText, Building, Briefcase, ArrowRight } from "lucide-react";

const relatedServices = [
  {
    icon: Settings,
    title: "PRO Services",
    description: "Ministry liaison and government coordination for all your administrative needs",
    href: "/services/pro-services"
  },
  {
    icon: FileText,
    title: "Document Clearance",
    description: "Embassy legalization and authentication for international document validity",
    href: "/services/document-clearance"
  },
  {
    icon: Building,
    title: "Commercial Registration",
    description: "CR issuance and amendments to keep your business legally compliant",
    href: "/services/commercial-registration"
  },
  {
    icon: Briefcase,
    title: "Company Formation",
    description: "WLL, SPC, and Branch Office setup for new business ventures in Bahrain",
    href: "/services/company-formation"
  }
];

export function ChamberRelatedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Your Business Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clients who use our Chamber of Commerce services often benefit from these complementary offerings.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {relatedServices.map((service, index) => (
              <Link 
                key={index}
                to={service.href}
                className="group bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
