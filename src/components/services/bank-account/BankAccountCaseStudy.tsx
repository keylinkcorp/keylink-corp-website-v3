import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import successImage from "@/assets/bank-success-client.jpg";

const caseStudies = [
  {
    flag: "🇬🇧",
    title: "UK Tech Entrepreneur",
    challenge: "Rejected twice by DIY applications — unclear source of funds documentation",
    solution: "Keylink prepared comprehensive KYC package, introduced to NBB relationship manager",
    result: "Approved in 12 days",
    bank: "NBB"
  },
  {
    flag: "🇦🇪",
    title: "GCC Investment Firm",
    challenge: "Needed multi-currency account with international transfer capabilities",
    solution: "Matched with Standard Chartered, prepared corporate authorization documents",
    result: "Operational in 18 days",
    bank: "Standard Chartered"
  },
  {
    flag: "🇧🇭",
    title: "Local SME Expansion",
    challenge: "Opening second account for new venture, existing bank relationship complicated",
    solution: "Fast-tracked via Keylink's BBK relationship, clean documentation",
    result: "Account opened in 10 days",
    bank: "BBK"
  }
];

export function BankAccountCaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      aria-labelledby="case-study-heading"
      className="py-20 lg:py-28 bg-primary relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 
            id="case-study-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6"
          >
            From Rejected to Approved: Client Success Stories
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Real results from real clients who trusted Keylink with their bank account opening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6"
            >
              <div className="text-3xl mb-4">{study.flag}</div>
              <h3 className="font-semibold text-white text-lg mb-4">
                {study.title}
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-wide mb-1">Challenge</p>
                  <p className="text-white/80">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-wide mb-1">Solution</p>
                  <p className="text-white/80">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold" />
                    <span className="text-gold font-semibold">{study.result}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">via {study.bank}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
