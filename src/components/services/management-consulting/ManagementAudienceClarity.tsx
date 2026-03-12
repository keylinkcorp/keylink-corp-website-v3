import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Globe, Building2, AlertCircle, TrendingUp, Settings, Target, DollarSign, ShieldCheck } from "lucide-react";
import audienceImage from "@/assets/management-audience-split.jpg";

const foreignInvestorConcerns = [
  { icon: AlertCircle, text: "Regulatory uncertainty and licensing complexity" },
  { icon: Target, text: "Market sizing and competitive analysis gaps" },
  { icon: Settings, text: "Operational setup without local presence" },
  { icon: TrendingUp, text: "Risk of costly missteps delaying launch" },
];

const smeConcerns = [
  { icon: Settings, text: "Process bottlenecks slowing growth" },
  { icon: Target, text: "Unclear strategic priorities" },
  { icon: DollarSign, text: "Rising costs without proportional returns" },
  { icon: ShieldCheck, text: "Compliance and governance gaps" },
];

export function ManagementAudienceClarity() {
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
            <span className="section-badge">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for Businesses Ready to Grow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're entering Bahrain for the first time or optimizing existing operations, we deliver the strategic clarity and execution support you need.
            </p>
          </motion.div>

          {/* Split Image */}
          <motion.div variants={staggerItem} className="mb-14">
            <div className="rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto">
              <img
                src={audienceImage}
                alt="Foreign investor and SME business owner in Bahrain"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Two-Column Audience Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Foreign Investors Column */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Foreign Investors & Market Entrants
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                You have ambition and capital but need local expertise. Bahrain's regulatory landscape, cultural nuances, and market dynamics require more than desktop research. You need a partner who has navigated this terrain hundreds of times.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-medium text-primary">Key concerns we address:</p>
                <ul className="space-y-3">
                  {foreignInvestorConcerns.map((concern, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <concern.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{concern.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* SMEs Column */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  SMEs Seeking Operational Excellence
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Your business is running but not optimizing. Inefficiencies drain margins, processes lack standardization, and growth feels harder than it should. You need strategic clarity and operational discipline — not another generic audit.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-medium text-primary">Key concerns we address:</p>
                <ul className="space-y-3">
                  {smeConcerns.map((concern, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <concern.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{concern.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
