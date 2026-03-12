import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertTriangle, 
  Banknote, 
  Plane, 
  UserX, 
  TrendingUp,
  Info
} from "lucide-react";

const consequences = [
  {
    icon: Banknote,
    title: "Frozen Bank Accounts",
    description: "Banks freeze accounts of non-compliant companies. Funds become inaccessible indefinitely.",
    severity: "high"
  },
  {
    icon: Plane,
    title: "LMRA Fines & Travel Bans",
    description: "Outstanding visa obligations can trigger travel restrictions and accumulating fines (BHD 100-500/month).",
    severity: "high"
  },
  {
    icon: UserX,
    title: "Personal Director Liability",
    description: "Directors can be held personally liable for company debts if proper liquidation procedures are not followed.",
    severity: "high"
  },
  {
    icon: TrendingUp,
    title: "Accumulating Government Fees",
    description: "Unpaid CR renewals, licenses, and SIO contributions compound annually—even for dormant companies.",
    severity: "medium"
  }
];

export function LiquidationConsequences() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background - Warning-appropriate subtle pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#FEF9F0]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold border border-destructive/20 mb-4">
              <AlertTriangle className="w-4 h-4" />
              Important Warning
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              What Happens If You{" "}
              <span className="text-destructive">Close Improperly?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Avoid these costly consequences by following proper liquidation procedures
            </p>
          </motion.div>

          {/* Consequences Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {consequences.map((consequence, index) => {
              const Icon = consequence.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white rounded-2xl border-2 border-destructive/20 p-6 hover:border-destructive/40 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{consequence.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {consequence.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Callout Box */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Did You Know?</h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    In 2023, MOIC reported that <span className="text-accent font-semibold">over 40% of CR cancellation applications were rejected</span> due to incomplete ministry clearances. Our 7-ministry coordination process ensures first-time approval.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
