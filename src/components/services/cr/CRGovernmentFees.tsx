import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Receipt, 
  Info,
  CheckCircle2,
  Calculator,
  Star,
  ArrowRight
} from "lucide-react";

const fees = [
  {
    name: "Name Reservation",
    amount: "BHD 15",
    notes: "Valid for 60 days",
    category: "Registration"
  },
  {
    name: "CR Registration Fee",
    amount: "BHD 50",
    notes: "Annual fee (per year)",
    category: "Registration"
  },
  {
    name: "Trade License",
    amount: "BHD 20 - 200",
    notes: "Varies by number of activities",
    category: "Registration"
  },
  {
    name: "LMRA Registration",
    amount: "BHD 50",
    notes: "One-time fee for labor market access",
    category: "Post-Registration"
  },
  {
    name: "Chamber of Commerce",
    amount: "BHD 50 - 100",
    notes: "Annual membership fee",
    category: "Post-Registration"
  },
  {
    name: "Signatory Card",
    amount: "BHD 10",
    notes: "Per authorized signatory",
    category: "Registration"
  },
  {
    name: "Lease Attestation",
    amount: "BHD 20",
    notes: "If attestation required",
    category: "Optional"
  },
  {
    name: "Commercial Address Fee",
    amount: "BHD 100+",
    notes: "Virtual office or physical lease",
    category: "Optional"
  }
];

const registrationFees = fees.filter(f => f.category === "Registration");
const postRegistrationFees = fees.filter(f => f.category === "Post-Registration");
const optionalFees = fees.filter(f => f.category === "Optional");

export function CRGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-60" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Receipt className="w-4 h-4" />
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Government Fees for{" "}
            <span className="text-accent">Commercial Registration</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Official MOIC government fees for CR registration in Bahrain
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Registration Fees - Enhanced with "Most Common" badge */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-3xl border-2 border-border overflow-hidden shadow-sm hover:shadow-md hover:border-accent/50 transition-all"
            >
              <div className="p-6 border-b-2 border-border bg-gradient-to-r from-primary to-primary/90 text-white relative">
                <span className="absolute top-3 right-3 px-2 py-1 bg-accent text-primary text-xs font-bold rounded-lg flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Common
                </span>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <Receipt className="w-6 h-6 text-accent" />
                  Registration Fees
                </h3>
              </div>
              <div className="divide-y-2 divide-border/50">
                {registrationFees.map((fee, index) => (
                  <div key={index} className="p-5 hover:bg-secondary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">{fee.name}</span>
                      <span className="font-bold text-xl text-accent">{fee.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Post-Registration Fees - Enhanced */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-3xl border-2 border-border overflow-hidden shadow-sm hover:shadow-md hover:border-accent/50 transition-all"
            >
              <div className="p-6 border-b-2 border-border bg-accent/10">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Post-Registration
                </h3>
              </div>
              <div className="divide-y-2 divide-border/50">
                {postRegistrationFees.map((fee, index) => (
                  <div key={index} className="p-5 hover:bg-secondary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">{fee.name}</span>
                      <span className="font-bold text-xl text-accent">{fee.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Optional Fees - Enhanced */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-3xl border-2 border-border overflow-hidden shadow-sm hover:shadow-md hover:border-accent/50 transition-all"
            >
              <div className="p-6 border-b-2 border-border bg-secondary/60">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-muted-foreground" />
                  Optional / Variable
                </h3>
              </div>
              <div className="divide-y-2 divide-border/50">
                {optionalFees.map((fee, index) => (
                  <div key={index} className="p-5 hover:bg-secondary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">{fee.name}</span>
                      <span className="font-bold text-xl text-primary">{fee.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Disclaimer - Enhanced */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 p-8 bg-accent/5 border-2 border-accent/20 rounded-2xl"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4">Important Notes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Government fees shown are official MOIC rates as of 2024 and may change.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Professional service fees for CR processing are quoted separately during consultation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Additional fees may apply for regulated activities requiring special permits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">WLL companies require BHD 20,000 minimum capital deposit at a Bahraini bank.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA - Enhanced */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Want a detailed cost breakdown for your specific business?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              <Calculator className="w-5 h-5" />
              Get Free Cost Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
