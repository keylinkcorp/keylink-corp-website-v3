import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  IdCard, 
  Users, 
  RefreshCw,
  ArrowRight
} from "lucide-react";

const relatedServices = [
  {
    icon: FileCheck,
    title: "Business License",
    description: "Obtain activity-specific licenses and municipal permits",
    link: "/services/business-license"
  },
  {
    icon: IdCard,
    title: "Visa & Immigration",
    description: "Investor visas, work permits, and residency processing",
    link: "/services/visa-immigration"
  },
  {
    icon: Users,
    title: "PRO Services",
    description: "Government liaison and document processing support",
    link: "/services/pro-services"
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "Annual commercial registration renewal and compliance",
    link: "/services/cr-renewal"
  }
];

export function SPCRelatedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              Complete Your Setup
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Related <span className="text-gold">Services</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Additional services to help your SPC succeed in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {relatedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Link
                to={service.link}
                className="block bg-white rounded-2xl border-2 border-border p-6 hover:border-gold hover:shadow-md transition-all group h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="flex items-center gap-2 text-gold font-semibold">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
