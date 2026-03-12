import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Building2, ArrowRight, LinkIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const linkedServices = [
  {
    icon: Users,
    title: "Family Visa Requirement",
    description: "A registered lease is mandatory for family visa sponsorship in Bahrain. The tenancy contract proves you have adequate accommodation for sponsored family members. We coordinate lease registration with visa processing for seamless applications.",
    cta: "Explore Visa Services",
    link: "/services/visa-immigration"
  },
  {
    icon: Building2,
    title: "CR Address Proof",
    description: "Commercial lease registration serves as official business address proof for CR registration, amendments, and renewals. MOIC requires a registered lease to verify your company's physical presence in Bahrain.",
    cta: "Learn About CR Services",
    link: "/services/commercial-registration"
  }
];

export function VisaCRCrossLink() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <LinkIcon className="w-4 h-4" />
              Connected Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Lease Registration for{" "}
              <span className="text-accent">Visa & Business Needs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your registered lease is often the first step for other services
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {linkedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Already have a registered lease? Bring your certificate for faster visa and CR processing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
