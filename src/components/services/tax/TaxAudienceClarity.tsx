import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Building2, Users, FileText, Globe, Calculator, CheckCircle, Briefcase, TrendingUp } from "lucide-react";

const foreignInvestorPoints = [
  { icon: FileText, text: "First-time VAT registration guidance" },
  { icon: Globe, text: "NBR portal navigation and setup" },
  { icon: Building2, text: "Bank account compliance verification" },
  { icon: Calculator, text: "Input tax recovery optimization" },
  { icon: CheckCircle, text: "Activity code classification" }
];

const smePoints = [
  { icon: FileText, text: "Quarterly return filing management" },
  { icon: CheckCircle, text: "Annual compliance reviews" },
  { icon: TrendingUp, text: "Corporate tax planning (2024+)" },
  { icon: Briefcase, text: "Audit preparation support" },
  { icon: Users, text: "Remediation for overdue filings" }
];

export function TaxAudienceClarity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Tax Support for Every Stage of Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're just entering Bahrain or scaling an established company, our tax experts have you covered.
            </p>
          </motion.div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Foreign Investors Column */}
            <motion.div 
              variants={staggerItem}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Foreign Investors</h3>
                  <p className="text-sm text-muted-foreground">& New Businesses</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {foreignInvestorPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <point.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{point.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SMEs Column */}
            <motion.div 
              variants={staggerItem}
              className="bg-white rounded-2xl shadow-lg border border-border p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Established SMEs</h3>
                  <p className="text-sm text-muted-foreground">& Growing Companies</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {smePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <point.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{point.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
