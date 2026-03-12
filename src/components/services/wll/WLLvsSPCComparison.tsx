import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Check, 
  X, 
  ArrowRight,
  Users,
  Wallet,
  Building2,
  TrendingUp,
  Clock,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const comparisonData = [
  { attribute: "Shareholders", wll: "2-50", spc: "1 only", icon: Users },
  { attribute: "Minimum Capital", wll: "BHD 20,000", spc: "BHD 50", icon: Wallet },
  { attribute: "Best For", wll: "Partnerships, joint ventures", spc: "Solo entrepreneurs", icon: Building2 },
  { attribute: "Bank Credibility", wll: "Higher (larger capital)", spc: "Standard", icon: TrendingUp },
  { attribute: "Investor Appeal", wll: "Strong", spc: "Limited", icon: TrendingUp },
  { attribute: "Processing Time", wll: "5-7 days", spc: "3-14 days", icon: Clock },
  { attribute: "Conversion", wll: "Can add more shareholders", spc: "Must convert to WLL", icon: RefreshCw },
];

export function WLLvsSPCComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/40 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <Building2 className="w-4 h-4" />
              Compare Structures
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            WLL vs SPC: <span className="text-gold">Which Is Right for Your Business?</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choosing between WLL and SPC depends on your business goals, partnership needs, and growth trajectory.
          </motion.p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 hidden md:block"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-5 font-semibold">Attribute</div>
              <div className="p-5 font-semibold text-center border-x border-primary-foreground/20">WLL</div>
              <div className="p-5 font-semibold text-center">SPC</div>
            </div>
            
            {/* Rows */}
            {comparisonData.map((row, index) => {
              const IconComponent = row.icon;
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-white'}`}
                >
                  <div className="p-5 flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-medium">{row.attribute}</span>
                  </div>
                  <div className="p-5 text-center border-x border-border font-medium text-primary">
                    {row.wll}
                  </div>
                  <div className="p-5 text-center text-muted-foreground">
                    {row.spc}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden space-y-4 mb-12"
        >
          {comparisonData.map((row, index) => {
            const IconComponent = row.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border-2 border-border shadow-sm p-4"
              >
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                  <IconComponent className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-semibold text-primary">{row.attribute}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gold/5 rounded-xl p-3 border border-gold/20">
                    <p className="text-xs text-muted-foreground mb-1">WLL</p>
                    <p className="font-semibold text-primary text-sm">{row.wll}</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground mb-1">SPC</p>
                    <p className="text-muted-foreground text-sm">{row.spc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Key Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl border-2 border-gold/30 p-6 text-center shadow-sm">
            <Wallet className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">WLL Minimum Capital</p>
            <p className="text-3xl font-bold text-primary">BHD 20,000</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-gold/30 p-6 text-center shadow-sm">
            <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">WLL Processing Time</p>
            <p className="text-3xl font-bold text-primary">5-7 Days</p>
          </div>
        </motion.div>

        {/* Decision Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl border-2 border-border p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-center">Decision Guide</h3>
            <p className="text-muted-foreground text-center mb-6">
              Choose WLL if you have multiple shareholders, plan to attract external investors, need higher credit facilities from banks, or want to bid on government contracts. The higher capital requirement is an investment in credibility.
            </p>
            
            {/* CTA Panel */}
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <p className="font-semibold text-primary mb-2">Ready to start your WLL?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-gold" /> Free structure consultation</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-gold" /> 100% success rate guarantee</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-gold" /> Remote registration available</span>
              </div>
              <Link to="/free-consultation">
                <Button className="bg-gold hover:bg-gold/90 text-primary font-semibold">
                  Start Your WLL Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
