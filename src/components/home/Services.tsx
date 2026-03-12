import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  FileText, 
  UserCheck, 
  Plane, 
  Briefcase, 
  MapPin,
  Users,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Establish your business presence in Bahrain with full legal compliance and 100% ownership options.",
    href: "/services/company-formation",
  },
  {
    icon: FileText,
    title: "Commercial Registration",
    description: "Obtain and manage your Commercial Registration (CR) with expert guidance through every step.",
    href: "/services/commercial-registration",
  },
  {
    icon: UserCheck,
    title: "PRO Services",
    description: "Leave government paperwork to our expert team. We handle all ministries and departments for you.",
    href: "/services/pro-services",
  },
  {
    icon: Plane,
    title: "Visa Services",
    description: "Comprehensive visa solutions for your workforce, from work permits to the Golden Visa program.",
    href: "/services/visa-services",
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description: "Expert consulting, accounting, and compliance services to keep your business running smoothly.",
    href: "/services/business-consulting",
  },
  {
    icon: MapPin,
    title: "Workspace Solutions",
    description: "Professional business addresses and flexible workspace options to suit your needs.",
    href: "/services/virtual-office",
  },
  {
    icon: Users,
    title: "Coworking Space",
    description: "Premium flexible workspaces in Manama with hot desks, private offices & meeting rooms. Join our thriving community.",
    href: "/services/coworking-space",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Subtle pattern - ellipse fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Everything You Need to Start and Grow
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            From company formation to ongoing business support, we provide comprehensive solutions for entrepreneurs in Bahrain.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link 
                to={service.href}
                className="group block bg-white rounded-2xl p-10 border border-border/50 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-md h-full"
              >
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <service.icon className="h-7 w-7 text-gold" />
                </motion.div>

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-primary mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-[1.8] mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6">
            Not sure which service you need?
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              to="/free-consultation" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
