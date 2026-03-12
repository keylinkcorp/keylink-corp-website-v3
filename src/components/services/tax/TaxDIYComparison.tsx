import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const comparisonRows = [
  {
    factor: "Registration Speed",
    diy: "Weeks of trial and error",
    keylink: "3-5 business days"
  },
  {
    factor: "Penalty Risk",
    diy: "High — missed deadlines common",
    keylink: "Zero — proactive management"
  },
  {
    factor: "Input Tax Recovery",
    diy: "Often missed or underclaimed",
    keylink: "Maximized every quarter"
  },
  {
    factor: "Corporate Tax Prep",
    diy: "No guidance for 2024+ changes",
    keylink: "Future-ready planning"
  },
  {
    factor: "Audit Preparation",
    diy: "Scrambling for documents",
    keylink: "Always audit-ready"
  },
  {
    factor: "Time Investment",
    diy: "8+ hours per quarter",
    keylink: "30-minute review call"
  },
  {
    factor: "Total Cost",
    diy: "Hidden penalties add up",
    keylink: "Transparent, fixed pricing"
  }
];

export function TaxDIYComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Make the Right Choice</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Why Work With NBR-Registered Experts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the true cost of managing tax compliance alone.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 bg-muted/50 px-6 py-4 border-b border-border">
              <div className="font-semibold text-foreground">Factor</div>
              <div className="font-semibold text-destructive flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                DIY Approach
              </div>
              <div className="font-semibold text-accent flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                With Keylink
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonRows.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-muted/20 transition-colors"
                >
                  <div className="font-medium text-foreground">{row.factor}</div>
                  <div className="text-muted-foreground text-sm">{row.diy}</div>
                  <div className="text-foreground text-sm font-medium">{row.keylink}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">The Bottom Line</h4>
                <p className="text-muted-foreground">
                  Our quarterly fee is typically less than a single late-filing penalty. Clients pay for peace of mind — and recoup the investment in avoided mistakes.
                </p>
              </div>
              <Button asChild className="btn-gold whitespace-nowrap">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
