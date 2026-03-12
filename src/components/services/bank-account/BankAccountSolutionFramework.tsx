import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, FileText, Phone } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Bank Introduction",
    description: "Direct connection to relationship managers who know and trust our referrals",
    points: [
      "Direct RM access at NBB, BBK, AUB, Standard Chartered",
      "Your application is flagged as a referred client",
      "Banks prioritize applications from trusted partners"
    ]
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Complete KYC package preparation to bank specifications",
    points: [
      "Complete KYC package preparation",
      "Source of funds documentation guidance",
      "Board resolutions and authorization letters"
    ]
  },
  {
    icon: Phone,
    title: "Process Coordination",
    description: "Single point of contact throughout the entire process",
    points: [
      "Single point of contact for everything",
      "Weekly status updates — no chasing required",
      "We handle all bank queries and requests"
    ]
  }
];

export function BankAccountSolutionFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="solution-heading"
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
            id="solution-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            Direct Bank Introductions That Get You Approved
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The difference between a rejected application and a smooth approval often comes down to one thing: relationships. We don't just prepare your documents — we introduce you directly to relationship managers who know and trust our referrals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl border border-border p-8 hover:shadow-md hover:border-gold/40 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-gold/10 w-fit mb-6">
                <pillar.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
