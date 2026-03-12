import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { XCircle, Clock, Banknote, RefreshCw } from "lucide-react";

const painStats = [
  { icon: XCircle, value: "40%+", label: "Rejection rate for DIY applications" },
  { icon: Clock, value: "6–8 weeks", label: "Average timeline if rejected and resubmitted" },
  { icon: Banknote, value: "BHD 500+", label: "Wasted fees per failed attempt" },
  { icon: RefreshCw, value: "3+ banks", label: "Tried before approval (average)" }
];

export function BankAccountProblemAgitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="problem-heading"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)"
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 
              id="problem-heading"
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
            >
              Why So Many Bank Applications Get Rejected
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Opening a business bank account in Bahrain should be straightforward — but for foreign entrepreneurs, it's often a frustrating cycle of rejection, resubmission, and delay. Banks have strict KYC requirements, and without prior relationships, your application goes to the bottom of the pile.
            </p>
          </div>

          {/* Pain Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {painStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-red-50 border border-red-100 rounded-xl p-5 text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-red-700/80 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Validation statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xl text-primary font-medium italic">
              "If you've faced rejection or endless document requests, it's not you — it's a system designed for established local businesses, not foreign entrepreneurs navigating Bahrain for the first time."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
