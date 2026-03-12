import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, Wallet, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const differentiators = [
  {
    icon: Globe,
    title: "Multi-Jurisdiction Expertise",
    description: "Experience with parent companies from 40+ countries. We understand document requirements for GCC, Western, and Asia-Pacific jurisdictions.",
  },
  {
    icon: Users,
    title: "Remote Setup Capability",
    description: "Complete your branch registration without visiting Bahrain. We handle everything through Power of Attorney and digital coordination.",
  },
  {
    icon: Wallet,
    title: "Fixed-Fee Pricing",
    description: "No hourly billing or surprise charges. Our transparent packages include all professional services with government fees itemized separately.",
  },
  {
    icon: Award,
    title: "Dedicated Account Manager",
    description: "Single point of contact from consultation to final setup. Your manager coordinates with all government departments on your behalf.",
  },
];

export function WhyChooseKeylink() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Award className="w-4 h-4" />
              Why Keylink
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Choose Keylink for Your{" "}
              <span className="text-accent">Branch Registration?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              10+ years of experience helping international companies establish their Bahrain presence
            </p>
          </motion.div>

          {/* Differentiators Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={staggerItem}
            className="mt-16 bg-primary rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="text-white/60 text-sm">Branches Registered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">40+</p>
                <p className="text-white/60 text-sm">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-white/60 text-sm">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">9 Days</p>
                <p className="text-white/60 text-sm">Avg. Setup Time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
