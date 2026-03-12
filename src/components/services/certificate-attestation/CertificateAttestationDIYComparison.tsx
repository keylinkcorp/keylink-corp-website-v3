import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check, Clock, TrendingUp, Eye, Receipt, Building2, FileCheck, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonRows = [
  {
    icon: Clock,
    factor: "Time Investment",
    diy: "3-5 office visits",
    pro: "0 visits",
    diyBad: true
  },
  {
    icon: TrendingUp,
    factor: "Success Rate",
    diy: "~60% first attempt",
    pro: "99.5% first attempt",
    diyBad: true
  },
  {
    icon: Eye,
    factor: "Processing Time",
    diy: "2-4 weeks",
    pro: "3-5 days standard",
    diyBad: true
  },
  {
    icon: Receipt,
    factor: "Hidden Costs",
    diy: "Re-submissions, travel, time off",
    pro: "Fixed quote upfront",
    diyBad: true
  },
  {
    icon: Building2,
    factor: "Arabic Forms",
    diy: "Your responsibility",
    pro: "We handle everything",
    diyBad: true
  },
  {
    icon: FileCheck,
    factor: "Embassy Protocols",
    diy: "Learn each embassy's rules",
    pro: "8+ years expertise",
    diyBad: true
  },
  {
    icon: Shield,
    factor: "Document Safety",
    diy: "You carry originals",
    pro: "Secure handling & tracking",
    diyBad: true
  }
];

export function CertificateAttestationDIYComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Center ellipse fade */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)"
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
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
              The Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DIY vs. Keylink Attestation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what you gain when you let professionals handle your attestation.
            </p>
          </motion.div>

          {/* Comparison Table - Enhanced with column tinting */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-semibold text-muted-foreground">Factor</div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-lg font-semibold text-sm border border-destructive/20">
                  DIY Approach
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm border border-accent/20">
                  With Keylink
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {comparisonRows.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-3 gap-4 px-6 py-5 ${
                    index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                  } hover:bg-secondary/20 transition-colors`}
                >
                  {/* Factor */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <row.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm md:text-base">{row.factor}</span>
                  </div>
                  
                  {/* DIY - Red tinted */}
                  <div className="flex items-center justify-center gap-2 text-center bg-destructive/5 rounded-lg py-2 -my-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 hidden md:block" />
                    <span className="text-sm text-muted-foreground">{row.diy}</span>
                  </div>
                  
                  {/* PRO - Gold/Green tinted */}
                  <div className="flex items-center justify-center gap-2 text-center bg-accent/5 rounded-lg py-2 -my-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 hidden md:block" />
                    <span className="text-sm font-medium text-foreground">{row.pro}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line Summary - Enhanced */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto mt-10"
          >
            <div className="bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-xl">
              {/* Decorative pattern */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  The Bottom Line
                </h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  At BHD 75 for a complete attestation package, our service costs less than the 
                  productivity lost from multiple office visits. With our 
                  <span className="text-accent font-semibold"> 99.5% first-time approval rate</span>, 
                  you skip the re-submission nightmare entirely.
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-sm mb-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-accent">99.5%</span>
                    <span className="text-white/70 block mt-1">Approval rate</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-accent">0</span>
                    <span className="text-white/70 block mt-1">Office visits</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-accent">3-5</span>
                    <span className="text-white/70 block mt-1">Days processing</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
