import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Plane, Calculator, RefreshCw } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const relatedServices = [
  {
    icon: FileText,
    title: "PRO Services",
    description: "Ongoing government liaison and document processing for your branch operations.",
    href: "/services/pro-services",
    badge: "Most Popular",
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, investor visas, and family sponsorship for your branch staff.",
    href: "/services/visa-immigration",
    badge: null,
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "VAT registration, bookkeeping, and financial reporting for your branch.",
    href: "/services/accounting",
    badge: null,
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "Annual Commercial Registration and license renewal services.",
    href: "/services/cr-renewal",
    badge: null,
  },
];

export function BranchRelatedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Related{" "}
              <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complement your branch setup with our comprehensive business support services
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all h-full flex flex-col relative">
                    {service.badge && (
                      <span className="absolute -top-3 right-4 px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                    
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
