import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Percent, Calendar, AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import taxVatImage from "@/assets/tax-vat-documents.jpg";

const keyFacts = [
  {
    icon: Percent,
    title: "10% Standard Rate",
    description: "Increased from 5% in January 2022. Applies to most goods and services."
  },
  {
    icon: Calendar,
    title: "Quarterly Filing",
    description: "Returns due to NBR by the last day of the month following each quarter."
  },
  {
    icon: AlertTriangle,
    title: "Penalties Start at BHD 500",
    description: "Late filing triggers automatic penalties. Repeat offenses exceed BHD 5,000."
  }
];

const thresholds = [
  {
    turnover: "Under BHD 18,750",
    status: "Not Required",
    recommendation: "May benefit from voluntary registration for input tax recovery",
    statusColor: "text-muted-foreground",
    icon: Info
  },
  {
    turnover: "BHD 18,750 – 37,500",
    status: "Voluntary",
    recommendation: "Recommended if significant business expenses exist",
    statusColor: "text-accent",
    icon: CheckCircle
  },
  {
    turnover: "Over BHD 37,500",
    status: "Mandatory",
    recommendation: "NBR registration legally required — non-registration carries penalties",
    statusColor: "text-destructive",
    icon: XCircle
  }
];

export function TaxVATExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Bahrain VAT Explained</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Understanding the 10% VAT Regime
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bahrain implemented VAT in 2019. Here is what every business owner needs to know to stay compliant.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Key Facts */}
            <motion.div variants={staggerItem}>
              <div className="grid gap-6">
                {keyFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <fact.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{fact.title}</h3>
                        <p className="text-muted-foreground">{fact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={taxVatImage} 
                  alt="VAT registration documents for Bahrain businesses"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Registration Thresholds */}
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <h3 className="font-semibold text-lg text-foreground">Registration Thresholds</h3>
                  <p className="text-sm text-muted-foreground">Based on annual taxable turnover</p>
                </div>
                
                <div className="divide-y divide-border">
                  {thresholds.map((threshold, index) => (
                    <div key={index} className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-foreground">{threshold.turnover}</span>
                        <span className={`flex items-center gap-1 font-medium ${threshold.statusColor}`}>
                          <threshold.icon className="w-4 h-4" />
                          {threshold.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{threshold.recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Not Sure Where You Stand?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our free consultation includes a complete threshold assessment. We analyze your revenue streams and advise on optimal registration timing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
