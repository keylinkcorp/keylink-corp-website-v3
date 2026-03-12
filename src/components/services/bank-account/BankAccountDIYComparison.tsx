import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

const comparisonData = [
  { factor: "Approval Rate", diy: "~60%", keylink: "95%+" },
  { factor: "Timeline", diy: "6–8 weeks", keylink: "2–3 weeks" },
  { factor: "Bank Access", diy: "Cold application", keylink: "Direct RM introduction" },
  { factor: "Documentation", diy: "Trial and error", keylink: "Right first time" },
  { factor: "Rejection Recovery", diy: "Start over", keylink: "We handle appeals" },
  { factor: "Status Updates", diy: "None (you chase)", keylink: "Weekly reports" },
  { factor: "Stress Level", diy: "High", keylink: "Managed" }
];

export function BankAccountDIYComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      aria-labelledby="diy-heading"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 
            id="diy-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            Why DIY Applications Often Fail
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You can apply directly to banks, but here's what the numbers show about the difference professional support makes.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50 text-sm font-semibold text-primary">
              <div className="p-4 border-b border-border">Factor</div>
              <div className="p-4 border-b border-border text-center">DIY Approach</div>
              <div className="p-4 border-b border-border text-center">With Keylink</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.factor}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-3 text-sm border-b border-border last:border-b-0"
              >
                <div className="p-4 font-medium text-primary">{row.factor}</div>
                <div className="p-4 text-center flex items-center justify-center gap-2 text-red-600">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{row.diy}</span>
                </div>
                <div className="p-4 text-center flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{row.keylink}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 flex gap-4 items-start">
            <Lightbulb className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-primary font-medium">
              <strong>Consider this:</strong> One rejection costs you 3–4 weeks of delay plus wasted effort. Our entire service fee is often less than the cost of a single failed attempt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
