import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertCircle, 
  CreditCard,
  CheckCircle2,
  Clock,
  Building2
} from "lucide-react";

export function BL2024Update() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold border border-amber-200 mb-4">
              <AlertCircle className="w-4 h-4" />
              Regulatory Update
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              2024 Licensing Changes <span className="text-accent">You Need to Know</span>
            </h2>
          </motion.div>

          {/* Alert Banner */}
          <motion.div
            variants={staggerItem}
            className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-bold text-amber-800">Effective June 2024: Bank Account Requirement</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={staggerItem} className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Ministry of Industry and Commerce now requires all new business license applicants to 
              open a corporate bank account before final CR issuance. This applies to all entity types 
              including WLL, SPC, and branch offices.
            </p>

            <h4 className="font-bold text-lg mb-5">What this means for you:</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-secondary/60 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold">Bank account opening is now part of the registration process</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/60 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold">Expect 5-10 additional days for banking procedures</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/60 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold">Minimum deposits vary by bank (BHD 500 - USD 10,000)</span>
                </div>
              </div>
            </div>

            {/* Keylink Advantage */}
            <div className="flex gap-4 p-6 bg-accent/5 border-2 border-accent/20 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-accent">Keylink Advantage</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our banking introduction service connects you with relationship managers at major Bahraini banks, 
                  streamlining the account opening process.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
