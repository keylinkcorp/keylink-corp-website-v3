import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Scale, Building2, Users, Receipt, CheckCircle2 } from "lucide-react";
import documentsImage from "@/assets/legal-documents-stack.jpg";

const keyFacts = [
  { icon: Scale, label: "Governing Law", value: "Civil Law System" },
  { icon: Building2, label: "Business Law", value: "Commercial Companies Law (2001)" },
  { icon: Users, label: "Labour", value: "Labour Law (2012)" },
  { icon: Receipt, label: "Tax Authority", value: "NBR (VAT since 2019)" },
];

export function LegalFrameworkExplainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Understanding Bahrain Law</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Commercial Law in Bahrain: What Every Business Must Know
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={staggerItem}>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Bahrain operates under a civil law system influenced by Egyptian 
                  and French legal traditions. The Commercial Companies Law (2001) 
                  governs business structures, while the Labour Law (2012) sets 
                  employment standards. For foreign investors, the Foreign Investment 
                  Law provides specific protections and requirements.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Understanding these frameworks is not optional — it is the 
                  foundation for every contract, every hiring decision, and every 
                  regulatory filing your business makes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Key regulatory bodies include the Ministry of Industry and Commerce 
                  (MOIC), the Labour Market Regulatory Authority (LMRA), and the 
                  National Bureau for Revenue (NBR). Each has distinct requirements 
                  that affect how you structure agreements and maintain compliance.
                </p>
              </div>

              {/* Our Approach Callout */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-primary mb-2">Our Approach</p>
                    <p className="text-muted-foreground text-sm">
                      Our legal consultants translate this complexity into clear, 
                      actionable guidance. We ensure your business operates within 
                      the law while maximizing the flexibility Bahrain's business-friendly 
                      environment provides.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image + Key Facts */}
            <motion.div variants={staggerItem}>
              <div className="rounded-2xl overflow-hidden shadow-md mb-8">
                <img
                  src={documentsImage}
                  alt="Legal documents and contracts in Bahrain"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-border shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <fact.icon className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground">{fact.label}</span>
                    </div>
                    <p className="text-sm font-medium text-primary">{fact.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
