import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Zap, Target, Wallet, Shield, Users, Award, ChevronDown } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";
import consultantImage from "@/assets/formation-consultant.webp";

const differentiators = [
  {
    icon: Zap,
    title: "Fastest in Bahrain",
    description: "3-7 day average turnaround vs. industry standard 2-6 weeks.",
    expandedContent: {
      proof: "Our dedicated relationship managers at MOIC reduce processing bottlenecks significantly.",
      stat: "We've completed 47 formations in under 72 hours when clients had all documents ready.",
      detail: "Direct submission access to SIJILAT portal means no waiting in queues or intermediary delays."
    }
  },
  {
    icon: Target,
    title: "100% Success Rate",
    description: "Every eligible application approved. No failed formations in 10+ years.",
    expandedContent: {
      proof: "Pre-submission document audits catch 99% of issues before they cause delays.",
      stat: "Our legal team reviews every application before filing, ensuring compliance from day one.",
      detail: "We've handled 500+ formations without a single rejection for eligible applications."
    }
  },
  {
    icon: Wallet,
    title: "Lowest Transparent Pricing",
    description: "From BHD 750 with no hidden fees. Price match guarantee.",
    expandedContent: {
      proof: "We publish all government fees upfront. What you see is what you pay.",
      stat: "If you find a lower documented price for identical services, we'll match it and add 10% discount.",
      detail: "Our pricing includes all standard government fees, document notarization, and processing charges."
    }
  },
  {
    icon: Shield,
    title: "Government Authorized",
    description: "Registered with MOIC, LMRA, and Bahrain Chamber of Commerce.",
    expandedContent: {
      proof: "Licensed business consultancy with direct portal access to all government systems.",
      stat: "Direct submission to SIJILAT, LMRA, and NPRA systems eliminates middleman delays.",
      detail: "Regular training and updates ensure our team stays current with all regulatory changes."
    }
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description: "From initial consultation to your first employee hire.",
    expandedContent: {
      proof: "Your dedicated formation consultant handles everything under one roof.",
      stat: "Services include: CR, visas, bank accounts, office setup, PRO services, and ongoing compliance.",
      detail: "Single point of contact means faster communication and coordinated execution across all requirements."
    }
  },
  {
    icon: Award,
    title: "500+ Companies Formed",
    description: "Trusted by startups, SMEs, and multinationals worldwide.",
    expandedContent: {
      proof: "Including regional HQs for Fortune 500 companies, fintech startups, and family-owned businesses.",
      stat: "Clients from 40+ countries across 6 continents have chosen Keylink for their Bahrain operations.",
      detail: "Diverse industry experience: Technology, Trading, Manufacturing, Consulting, F&B, and more."
    }
  }
];

export function WhyChooseKeylink() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Why Keylink Corp
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Why 500+ Businesses Choose Keylink
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            We combine local expertise with international standards to deliver exceptional service and results.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={consultantImage}
                  alt="Keylink Corp Formation Consultant"
                  className="w-full h-[480px] object-contain"
                />
              </div>
              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-sm p-5 border border-border"
              >
                <p className="text-3xl font-bold text-gold">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Benefits grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "group bg-white rounded-xl border transition-all duration-300",
                  expandedIndex === index
                    ? "border-gold/40 shadow-md"
                    : "border-border hover:border-gold/20"
                )}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="h-6 w-6 text-gold" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-[1.7] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand button */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-4 flex items-center gap-1 text-sm text-gold font-medium hover:text-gold/80 transition-colors"
                  >
                    {expandedIndex === index ? "Show less" : "Learn more"}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        expandedIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-border/50">
                        <div className="pt-4 space-y-3">
                          <div className="flex gap-2">
                            <span className="text-gold text-sm font-semibold">✓</span>
                            <p className="text-sm text-muted-foreground leading-[1.7]">
                              {item.expandedContent.proof}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-gold text-sm font-semibold">✓</span>
                            <p className="text-sm text-muted-foreground leading-[1.7]">
                              {item.expandedContent.stat}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-gold text-sm font-semibold">✓</span>
                            <p className="text-sm text-muted-foreground leading-[1.7]">
                              {item.expandedContent.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
