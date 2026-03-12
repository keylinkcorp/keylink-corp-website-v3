import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Quote, TrendingDown, Clock, CheckCircle, DollarSign, Shield } from "lucide-react";
import taxCaseStudyImage from "@/assets/tax-case-study-success.jpg";

const results = [
  { icon: TrendingDown, value: "80%", label: "Penalty Reduction", sublabel: "BHD 2,500 → BHD 500" },
  { icon: Clock, value: "14", label: "Days to Compliance", sublabel: "Full VAT remediation" },
  { icon: DollarSign, value: "BHD 4,200", label: "Input Tax Recovered", sublabel: "In first year" },
  { icon: Shield, value: "0", label: "Missed Deadlines", sublabel: "Since engagement" }
];

export function TaxCaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Client Success</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              From Penalty Notice to Perfect Compliance
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Image */}
              <div className="relative">
                <img 
                  src={taxCaseStudyImage} 
                  alt="TechFlow Solutions team celebrating successful VAT compliance"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-xl">TechFlow Solutions</p>
                  <p className="text-white/80 text-sm">European SaaS Startup</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 lg:p-10">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-2">The Challenge</h4>
                  <p className="text-muted-foreground">
                    TechFlow expanded to Bahrain from Dubai but had zero local tax knowledge. They missed their first VAT deadline within weeks of starting operations, triggering an immediate BHD 2,500 NBR penalty notice.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Solution</h4>
                  <ul className="space-y-2">
                    {[
                      "Registered their company with NBR",
                      "Filed the overdue return with proper documentation",
                      "Negotiated penalty reduction with NBR",
                      "Established ongoing quarterly filing calendar",
                      "Set up input tax recovery optimization"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-muted/30 rounded-xl p-4 border-l-4 border-accent">
                  <Quote className="w-6 h-6 text-accent mb-2" />
                  <p className="text-foreground italic text-sm">
                    "Keylink turned a stressful situation into a non-issue. We went from penalty panic to complete peace of mind in two weeks."
                  </p>
                  <p className="text-sm font-medium text-primary mt-2">— CFO, TechFlow Solutions</p>
                </div>
              </div>
            </div>

            {/* Results Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-primary/5 p-6 border-t border-border">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <result.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">{result.value}</p>
                  <p className="text-sm font-medium text-foreground">{result.label}</p>
                  <p className="text-xs text-muted-foreground">{result.sublabel}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
