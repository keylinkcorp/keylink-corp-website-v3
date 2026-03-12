import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Coins, 
  Star,
  Info
} from "lucide-react";

const feeCategories = [
  {
    title: "Registration Fees",
    badge: "Most Common",
    items: [
      { name: "Name Reservation", fee: "BHD 15" },
      { name: "CR Registration", fee: "BHD 50/year" },
      { name: "Trade License", fee: "BHD 20-200" }
    ]
  },
  {
    title: "Post-Registration",
    badge: null,
    items: [
      { name: "LMRA Registration", fee: "BHD 50" },
      { name: "Chamber of Commerce", fee: "BHD 50-100/year" },
      { name: "Signatory Card", fee: "BHD 10" }
    ]
  },
  {
    title: "Optional Services",
    badge: null,
    items: [
      { name: "Virtual Office", fee: "BHD 300+/year" },
      { name: "Bank Account Support", fee: "Included" }
    ]
  }
];

export function SPCGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/40 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <Coins className="w-4 h-4" />
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            SPC <span className="text-gold">Government Fees</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Official MOIC fees for Single Person Company registration in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {feeCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl border-2 border-border shadow-sm p-6 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">{category.title}</h3>
                {category.badge && (
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {category.badge}
                  </span>
                )}
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-secondary/40 rounded-xl">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-bold text-primary">{item.fee}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer Box */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="bg-white rounded-2xl border-2 border-gold/30 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">2024 Fee Update Notice</h4>
                <p className="text-muted-foreground">
                  Government fees are subject to periodic updates by MOIC. The fees shown above are current as 
                  of 2024. Keylink provides a detailed, itemized quote before starting your SPC registration 
                  to ensure complete transparency—no hidden fees or surprises.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
