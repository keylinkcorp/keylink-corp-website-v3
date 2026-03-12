import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Target, RefreshCw, Eye, Quote, FileText } from "lucide-react";

const differentiators = [
  {
    icon: FileText,
    title: "Monthly Reports You'll Actually Understand",
    description: "Clear, jargon-free financial summaries delivered every month. Know exactly where your business stands."
  },
  {
    icon: Target,
    title: "Dedicated Accountant",
    description: "Your own named accountant who knows your business inside and out. No call centers."
  },
  {
    icon: RefreshCw,
    title: "Integration with Your PRO & Formation",
    description: "We handle your CR, visas, and accounts together. One partner, zero coordination gaps."
  },
  {
    icon: Eye,
    title: "Audit-Ready Books, Always",
    description: "We maintain your records to pass any audit, any time. Our clients have a 100% pass rate."
  }
];

interface AccountingSolutionProps {
  solutionImage?: string;
}

export function AccountingSolution({ solutionImage }: AccountingSolutionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-secondary/50">
              {solutionImage ? (
                <img
                  src={solutionImage}
                  alt="Keylink Corp accounting team collaboration"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              ) : (
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Target className="w-20 h-20 text-accent/30" />
                </div>
              )}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">The Solution</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              One Partner. Complete Financial Clarity.
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-8">
              Keylink's outsourced accounting gives you a full finance team at a fraction of the cost. 
              We don't just crunch numbers — we become your financial partner, proactively managing 
              VAT, payroll, and compliance so nothing falls through the cracks.
            </motion.p>

            {/* Differentiators */}
            <motion.div variants={staggerContainer} className="space-y-6 mb-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Callout */}
            <motion.div
              variants={staggerItem}
              className="bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary italic mb-2">
                    "Keylink took over our books in a mess. Within two months, we had clean records, 
                    passed our first audit, and I finally stopped worrying about VAT deadlines."
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    — Ahmed K., F&B Business Owner
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
