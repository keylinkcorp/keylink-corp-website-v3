import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const documents = [
  "CR Certificate (original or certified copy)",
  "Trade License",
  "Memorandum of Association",
  "Board Resolution authorizing account opening",
  "Shareholder/Owner Passports (certified copies)",
  "Proof of Business Address (lease agreement or Flexi Desk)",
  "Source of Funds Documentation"
];

export function BankAccountRequirements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="requirements-heading"
      className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 
              id="requirements-heading"
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
            >
              Required Documents for Corporate Bank Account
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proper documentation is the #1 factor in approval success. We help you prepare every item on this list.
            </p>
          </div>

          {/* Documents grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {documents.map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-primary">{doc}</span>
              </motion.div>
            ))}
          </div>

          {/* Support note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center"
          >
            <p className="text-primary">
              <strong>Not sure how to prepare source of funds documentation?</strong> We guide you through the specific requirements for your situation — whether you're transferring funds from abroad, using personal savings, or receiving investment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
