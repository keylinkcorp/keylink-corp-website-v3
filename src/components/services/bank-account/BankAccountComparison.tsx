import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const banks = [
  { 
    name: "National Bank of Bahrain", 
    timeline: "2–3 weeks", 
    deposit: "BHD 500", 
    bestFor: "Local SMEs", 
    successRate: "96%" 
  },
  { 
    name: "Bank of Bahrain & Kuwait", 
    timeline: "2–3 weeks", 
    deposit: "BHD 1,000", 
    bestFor: "Trading Companies", 
    successRate: "94%" 
  },
  { 
    name: "Ahli United Bank", 
    timeline: "2–4 weeks", 
    deposit: "BHD 2,000", 
    bestFor: "Regional Operations", 
    successRate: "93%" 
  },
  { 
    name: "Standard Chartered", 
    timeline: "3–4 weeks", 
    deposit: "USD 10,000", 
    bestFor: "International Business", 
    successRate: "95%" 
  }
];

export function BankAccountComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleConsultation = () => {
    const phone = "97317000000";
    const message = encodeURIComponent("Hi, I'd like help choosing the right bank for my business account in Bahrain.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section 
      ref={ref}
      aria-labelledby="bank-comparison-heading"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "4rem 3rem"
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex justify-center mb-4">
            <Landmark className="h-8 w-8 text-gold" />
          </div>
          <h2 
            id="bank-comparison-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            Top Banks for Business Accounts in Bahrain
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each bank has different strengths. We help you choose the right fit based on your business type, transaction needs, and growth plans.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl border border-border p-6 hover:shadow-md hover:border-gold/40 transition-all duration-300 border-l-4 border-l-gold"
            >
              <h3 className="font-semibold text-primary text-lg mb-4">
                {bank.name}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-medium text-primary">{bank.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Deposit</span>
                  <span className="font-medium text-primary">{bank.deposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best For</span>
                  <span className="font-medium text-gold">{bank.bestFor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Our Success Rate</span>
                  <span className="font-medium text-green-600">{bank.successRate}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which bank is right for you?
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            onClick={handleConsultation}
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
