import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FolderOpen, Zap, Users, Shield } from "lucide-react";

const platforms = [
  { name: "QuickBooks", category: "Global Leader" },
  { name: "Xero", category: "Cloud Native" },
  { name: "Zoho Books", category: "SME Favorite" },
  { name: "Tally", category: "GCC Standard" },
  { name: "Odoo", category: "All-in-One" },
  { name: "Sage", category: "Enterprise" }
];

const benefits = [
  {
    icon: FolderOpen,
    title: "Organized Records",
    description: "Every receipt, invoice, and document systematically filed and easy to retrieve."
  },
  {
    icon: Zap,
    title: "Automated Bank Feeds",
    description: "Bank transactions sync automatically. No manual data entry."
  },
  {
    icon: Users,
    title: "Multi-User Collaboration",
    description: "Your team and ours work on the same live data."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "256-bit encryption and regular backups protect your data."
  }
];

interface AccountingTechStackProps {
  techImage?: string;
}

export function AccountingTechStack({ techImage }: AccountingTechStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Modern Technology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Accounting Software We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with your preferred platform — or help you choose the right one for your business.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Platforms */}
            <motion.div variants={staggerContainer}>
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-primary mb-6">
                Supported Platforms
              </motion.h3>
              <motion.div variants={staggerItem} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-xl p-4 text-center border border-border hover:border-accent/50 transition-colors"
                  >
                    <p className="font-semibold text-primary">{platform.name}</p>
                    <p className="text-xs text-muted-foreground">{platform.category}</p>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={staggerItem} className="text-muted-foreground">
                Already using a platform? We'll integrate seamlessly. Starting fresh? We'll recommend 
                the best fit based on your business size, industry, and budget.
              </motion.p>

              {/* Image placeholder */}
              {techImage && (
                <motion.div variants={staggerItem} className="mt-6">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={techImage} 
                      alt="Cloud accounting dashboard interface"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-primary mb-4">
                Why Professional Accounting Software?
              </motion.h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
