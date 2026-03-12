import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Briefcase, 
  Stamp, 
  Users,
  ArrowRight
} from "lucide-react";

const relatedServices = [
  {
    icon: FileText,
    title: "Commercial Registration",
    description: "CR registration and renewal for all entity types.",
    link: "/services/commercial-registration"
  },
  {
    icon: Stamp,
    title: "MOA Amendment",
    description: "Update shareholders, capital, or activities in your WLL.",
    link: "/services/moa"
  },
  {
    icon: Users,
    title: "Visa & Immigration",
    description: "Work visas for your WLL employees and investors.",
    link: "/services/visa-immigration"
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    description: "Government liaison for all ministry transactions.",
    link: "/services/pro-services"
  }
];

export function WLLRelatedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Related <span className="text-gold">Services</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {relatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <Link 
                  to={service.link}
                  className="block bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-gold/30 transition-all group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
