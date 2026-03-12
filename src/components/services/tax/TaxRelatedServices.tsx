import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Calculator, FileText, Users } from "lucide-react";

const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "WLL, SPC, or Branch Office registration",
    href: "/services/company-formation"
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Monthly bookkeeping and financial reporting",
    href: "/services/accounting-services"
  },
  {
    icon: FileText,
    title: "PRO Services",
    description: "Ministry liaison and government coordination",
    href: "/services/pro-services"
  },
  {
    icon: Users,
    title: "Visa & Immigration",
    description: "Work permits and residence visas",
    href: "/services/visa-immigration"
  }
];

export function TaxRelatedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">End-to-End Support</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Tax Is Just One Piece — We Handle the Full Picture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most clients start with tax compliance and discover we can simplify their entire back-office.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Link 
                  to={service.href}
                  className="block bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground italic">
              "One partner, one relationship, one point of contact for all your business needs in Bahrain."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
