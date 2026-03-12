import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Building } from "lucide-react";

const audiences = [
  {
    icon: Globe,
    title: "Foreign Investors Forming New Companies",
    description: "You're establishing your first Bahrain entity and unfamiliar with local KYC requirements. Banks want extensive documentation you may not have prepared. We bridge the gap between international business standards and Bahraini banking expectations."
  },
  {
    icon: Building,
    title: "GCC & International SMEs Expanding to Bahrain",
    description: "You're bringing an established business to Bahrain and need a corporate account that supports multi-currency transactions and international transfers. We match you with banks equipped for your operational scale."
  }
];

export function BankAccountAudienceClarity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="audience-heading"
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
            id="audience-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            Bank Account Support for Foreign Entrepreneurs
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're forming your first company or expanding an existing business, we understand your unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl border border-border p-8 hover:shadow-md hover:border-gold/40 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gold/10 w-fit mb-6">
                <audience.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
