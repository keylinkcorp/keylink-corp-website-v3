import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight } from "lucide-react";

const requirements = [
  {
    type: "Single Person Company (SPC)",
    capital: "BHD 50",
    timing: "Before final CR",
    note: "Lowest barrier for solo entrepreneurs",
    link: "/services/single-person-company"
  },
  {
    type: "WLL (Limited Liability)",
    capital: "BHD 20,000",
    timing: "Before final CR",
    note: "Required for multi-shareholder structures",
    link: "/services/wll-company"
  },
  {
    type: "Branch Office",
    capital: "No fixed minimum",
    timing: "Parent company letter",
    note: "Depends on parent company financial standing",
    link: "/services/branch-office"
  }
];

export function BankAccountCapitalRequirements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="capital-heading"
      className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 
            id="capital-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            Capital Deposit Requirements by Company Type
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The capital you must deposit before CR issuance depends on your company structure. Understanding these requirements upfront prevents delays.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {requirements.map((req, index) => (
            <motion.div
              key={req.type}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl border border-border p-6 hover:shadow-md hover:border-gold/40 transition-all duration-300 text-center"
            >
              <h3 className="font-semibold text-primary text-lg mb-4">
                {req.type}
              </h3>
              <div className="text-3xl font-bold text-gold mb-2">
                {req.capital}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {req.timing}
              </p>
              <p className="text-sm text-muted-foreground mb-5 italic">
                {req.note}
              </p>
              <Link 
                to={req.link}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Important callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800">
              <strong>Important:</strong> These amounts must be deposited into your new corporate bank account <em>before</em> MOIC will issue your final Commercial Registration. Starting the bank account process early is critical to avoiding delays.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
