import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Users, 
  Building2, 
  TrendingUp,
  FileCheck,
  Settings,
  ArrowUpRight,
  AlertCircle
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Multiple Shareholders",
    points: [
      "Accommodate 2-50 shareholders",
      "Ideal for family businesses and partnerships",
      "Flexible ownership percentages"
    ]
  },
  {
    icon: Building2,
    title: "Bank & Credit Access",
    points: [
      "Higher credit limits from local banks",
      "Preferred for trade finance",
      "Easier letter of credit issuance"
    ]
  },
  {
    icon: TrendingUp,
    title: "Investor Ready",
    points: [
      "Clear shareholder structure",
      "Easy equity transfers",
      "Professional governance framework"
    ]
  },
  {
    icon: FileCheck,
    title: "Government Contracts",
    points: [
      "Meets tender requirements",
      "Higher capital signals stability",
      "Required for many public projects"
    ]
  },
  {
    icon: Settings,
    title: "Flexible Management",
    points: [
      "Appoint professional managers",
      "Board of directors optional",
      "Partner voting rights defined"
    ]
  },
  {
    icon: ArrowUpRight,
    title: "Growth Path",
    points: [
      "Add shareholders without restructuring",
      "Merge or acquire easily",
      "Clear exit mechanisms for partners"
    ]
  }
];

export function WhyChooseWLL() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <TrendingUp className="w-4 h-4" />
              Partnership Advantages
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Why Growing Businesses <span className="text-gold">Choose WLL</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The WLL structure offers distinct advantages for businesses that require multiple stakeholders, investment flexibility, or enhanced market credibility.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gold/5 rounded-2xl border border-gold/20 p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-primary mb-1">Industry Insight</p>
              <p className="text-muted-foreground">
                WLL companies in Bahrain have 40% higher approval rates for bank credit facilities compared to SPCs, according to industry data from 2023.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
