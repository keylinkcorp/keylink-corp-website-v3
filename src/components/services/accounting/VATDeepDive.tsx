import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Receipt, Calendar, AlertTriangle, CheckCircle2, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const vatFacts = [
  {
    icon: Receipt,
    title: "10% Standard Rate",
    description: "Bahrain's VAT rate increased from 5% to 10% in January 2022. It applies to most goods and services."
  },
  {
    icon: Calendar,
    title: "Quarterly Filing",
    description: "VAT returns must be filed with the NBR by the last day of the month following each quarter."
  },
  {
    icon: AlertTriangle,
    title: "Penalties Start at BHD 500",
    description: "Late filing triggers automatic penalties. Repeat offenses can exceed BHD 5,000."
  }
];

const thresholds = [
  {
    range: "Under BHD 18,750",
    status: "Not required",
    recommendation: "Registration not required, but may benefit from voluntary registration for input tax recovery on purchases."
  },
  {
    range: "BHD 18,750 – 37,500",
    status: "Voluntary",
    recommendation: "Optional registration available. Recommended if you have significant business expenses to recover input VAT."
  },
  {
    range: "Over BHD 37,500",
    status: "Mandatory",
    recommendation: "Registration with the National Bureau for Revenue (NBR) is legally required. Non-registration carries penalties."
  }
];

interface VATDeepDiveProps {
  vatImage?: string;
}

export function VATDeepDive({ vatImage }: VATDeepDiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
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
            <span className="section-badge">VAT in Bahrain</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Understanding Bahrain's VAT Regime
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bahrain implemented VAT in 2019. Here's what every business owner needs to know 
              to stay compliant and avoid costly penalties.
            </p>
          </motion.div>

          {/* Full Width Image */}
          {vatImage && (
            <motion.div variants={staggerItem} className="mb-12">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={vatImage} 
                  alt="VAT registration documents in Bahrain"
                  className="w-full h-[20vh] object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Key Facts */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-primary mb-4">
                Key VAT Facts
              </motion.h3>
              {vatFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{fact.title}</h4>
                      <p className="text-muted-foreground text-sm">{fact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Registration Thresholds */}
            <motion.div variants={staggerContainer}>
              <motion.h3 variants={staggerItem} className="text-xl font-semibold text-primary mb-4">
                Registration Thresholds
              </motion.h3>
              <motion.div variants={staggerItem} className="space-y-4">
                {thresholds.map((threshold, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 border border-border shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-primary">{threshold.range}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        threshold.status === "Mandatory" 
                          ? "bg-destructive/10 text-destructive"
                          : threshold.status === "Voluntary"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary text-muted-foreground"
                      }`}>
                        {threshold.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{threshold.recommendation}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Common Penalties Warning */}
          <motion.div
            variants={staggerItem}
            className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 mb-10"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Common VAT Penalties to Avoid</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-semibold">•</span>
                    <span><strong>Late registration:</strong> Up to BHD 10,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-semibold">•</span>
                    <span><strong>Late filing:</strong> BHD 500 first offense, escalating thereafter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-semibold">•</span>
                    <span><strong>Incorrect returns:</strong> 5% of the difference + interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-semibold">•</span>
                    <span><strong>Non-payment:</strong> 5% per month on outstanding amounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            variants={staggerItem}
            className="bg-accent/10 rounded-2xl p-8 border border-accent/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-primary">We Handle Your NBR Registration End-to-End</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              From initial registration to quarterly returns, we manage your entire VAT lifecycle. 
              Our clients have zero penalties on record.
            </p>
            <Button asChild className="btn-gold">
              <Link to="/contact">
                Get VAT Compliant Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={staggerItem} className="mt-8 flex items-start gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              VAT regulations are subject to updates by the National Bureau for Revenue (NBR). 
              This information is current as of January 2025. Contact us for the latest requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
