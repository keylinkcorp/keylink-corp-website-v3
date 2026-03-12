import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowRight } from "lucide-react";

export function BankAccountMandateUpdate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="mandate-heading"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.5
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100 mb-4">
              2024 Regulatory Update
            </Badge>
            <h2 
              id="mandate-heading"
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight"
            >
              Bank Account Now Required Before CR Issuance
            </h2>
          </div>

          {/* Alert Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 md:p-8 mb-8"
          >
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-800 text-lg mb-2">
                  Important Regulatory Change
                </p>
                <p className="text-amber-700 leading-relaxed">
                  As of June 2024, <strong>MOIC Resolution No. 43</strong> requires all new companies to open a corporate bank account and deposit their capital <em>before</em> final Commercial Registration issuance. This applies to WLLs, SPCs, and Branch Offices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Explanation paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              This regulatory change has added a critical step to the company formation process. Without an approved bank account, your CR application cannot be finalized — potentially delaying your business launch by weeks.
            </p>
            <p>
              Many entrepreneurs discover this requirement too late, after already completing their MOA and initial CR application. Banks can take 4–6 weeks to approve accounts for applicants they don't know, creating a bottleneck that stalls the entire formation process.
            </p>
          </motion.div>

          {/* Keylink callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
              <p className="text-primary font-medium">
                Keylink's established bank relationships allow us to fast-track this mandatory step, keeping your formation timeline on track and avoiding costly delays.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
