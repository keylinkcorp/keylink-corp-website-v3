import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCw, Plane, FileCheck, Calculator, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface ServiceInfo {
  icon: typeof RefreshCw;
  title: string;
  description: string;
  link: string;
  benefits: string[];
  timeline: string;
  startingPrice: string;
}

const services: ServiceInfo[] = [
  {
    icon: RefreshCw,
    title: "Commercial Registration Renewal",
    description: "Annual CR renewal and ongoing compliance services to keep your business in good standing with MOIC and all regulatory bodies.",
    link: "/services/cr-renewal",
    benefits: [
      "Never miss a deadline with automated reminders",
      "Full MOIC & LMRA compliance audit included",
      "Penalty-free renewal guaranteed"
    ],
    timeline: "1-2 business days",
    startingPrice: "From BHD 150"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and the prestigious Golden Visa program for qualified investors and skilled professionals.",
    link: "/services/visa-immigration",
    benefits: [
      "All visa types: work, family, investor, visitor",
      "Golden Visa application assistance",
      "LMRA and NPRA coordination included"
    ],
    timeline: "5-14 business days",
    startingPrice: "From BHD 75/visa"
  },
  {
    icon: FileCheck,
    title: "PRO Services",
    description: "Government liaison and document processing to handle all your administrative needs with ministries and government entities.",
    link: "/services/pro-services",
    benefits: [
      "Document attestation & legalization",
      "Ministry applications & follow-ups",
      "License modifications & amendments"
    ],
    timeline: "Same-day to 3 days",
    startingPrice: "From BHD 25/task"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Professional bookkeeping, VAT registration, and comprehensive audit support to keep your finances compliant and optimized.",
    link: "/services/accounting",
    benefits: [
      "Monthly bookkeeping from BHD 100/month",
      "VAT registration and quarterly filings",
      "Annual audit preparation and support"
    ],
    timeline: "Ongoing monthly service",
    startingPrice: "From BHD 100/month"
  },
];

export function RelatedServices() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Complete Business Support
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Related Services
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Beyond company formation, we provide comprehensive business support services to help your company thrive in Bahrain.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link
                to={service.link}
                className="block h-full bg-white rounded-2xl p-6 border border-border/50 hover:border-gold/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-[1.7] mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Timeline & Price badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs border-border">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.timeline}
                  </Badge>
                  <Badge className="bg-gold/10 text-gold border-0 text-xs">
                    {service.startingPrice}
                  </Badge>
                </div>

                <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom package combining multiple services?
          </p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
          >
            Get a Custom Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
