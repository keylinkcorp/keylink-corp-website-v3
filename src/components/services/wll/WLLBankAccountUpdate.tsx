import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertCircle,
  Building2,
  Wallet,
  FileText,
  CheckCircle2,
  Info
} from "lucide-react";

const requirements = [
  "Open a corporate bank account during formation (Day 3-5)",
  "Deposit BHD 20,000 minimum capital",
  "Obtain official bank letter confirming deposit",
  "Submit bank letter to MOIC for CR issuance"
];

export function WLLBankAccountUpdate() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-4">
              <AlertCircle className="w-4 h-4" />
              2024 Regulatory Update
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Mandatory <span className="text-gold">Bank Account Requirement</span> for WLL
            </h2>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left: Main Content */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 shadow-sm">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As of June 2024, all new WLL registrations in Bahrain must deposit the minimum capital (BHD 20,000) into a corporate bank account before the Commercial Registration can be finalized. This requirement was introduced to verify capital adequacy and strengthen the credibility of new business entities.
              </p>
              
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold" />
                What This Means:
              </h3>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Keylink Support + Info */}
            <div className="space-y-6">
              <div className="bg-gold/5 rounded-2xl border border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Keylink Support</h3>
                    <p className="text-sm text-muted-foreground">
                      We facilitate introductions to all major Bahraini banks (NBB, BBK, AUB, Ahli United) and guide you through KYC requirements to ensure smooth account opening.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Key Advantage</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlike SPCs (BHD 50 capital), the WLL's higher capital requirement often results in faster bank account approvals and better credit terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Required Capital</p>
                    <p className="text-2xl font-bold text-primary">BHD 20,000</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
