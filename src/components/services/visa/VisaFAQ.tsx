import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How long does it take to get a work visa in Bahrain?",
    answer: "Standard processing takes 5-10 business days once all documents are submitted. This includes LMRA approval, visa issuance, and CPR card processing. Express options are available for urgent cases requiring faster turnaround."
  },
  {
    question: "Can I sponsor my family on a work visa?",
    answer: "Yes, employees earning BHD 400+ monthly can sponsor their spouse and unmarried children under 25. Family visa processing adds 5-7 days after primary visa issuance. You'll need to provide marriage and birth certificates (attested) along with proof of salary."
  },
  {
    question: "What is the Bahrain Golden Visa?",
    answer: "The Golden Visa is a 10-year renewable residency permit for investors, entrepreneurs, talented professionals, and retirees. It offers independence from employer sponsorship, allowing you to work for any company or start your own business without needing a separate sponsor."
  },
  {
    question: "Who is eligible for the Golden Visa?",
    answer: "Eligibility includes investors with BHD 100,000+ in Bahrain assets, business owners employing 10+ Bahrainis, executives earning BHD 2,000+/month, and retirees with sufficient pension income. We assess your eligibility during the initial consultation."
  },
  {
    question: "What documents are required for a work visa?",
    answer: "Required documents include: passport (6+ months validity), passport-size photos, attested educational certificates, employment contract, company CR/license copies, and medical fitness certificate. Some nationalities require additional police clearance."
  },
  {
    question: "Can I change employers while on a work visa?",
    answer: "Yes, visa transfer between employers is possible after completing 1 year with your current employer. Immediate transfer is available with a No Objection Certificate (NOC) from your current employer. We handle the entire transfer process."
  },
  {
    question: "What is the Flexi Permit and how does it work?",
    answer: "The Flexi Permit is a self-sponsored work permit allowing you to work for multiple employers without a fixed sponsor. It's valid for 2 years and costs approximately BHD 500/year. Ideal for freelancers, consultants, or those between permanent positions."
  },
  {
    question: "How long can I stay on a visit visa?",
    answer: "Visit visas are valid for 14 days, extendable to 30 days. Multiple-entry visas are available for 3 months or 1 year. GCC residents can enter on e-visa for 2 weeks. Visit visas cannot be converted to work visas while in Bahrain."
  },
  {
    question: "What medical tests are required for visa?",
    answer: "All work visa applicants must complete a medical exam including blood tests (HIV, Hepatitis B/C), chest X-ray, and general physical examination at an approved health center in Bahrain. Results typically take 2-3 business days."
  },
  {
    question: "Can I apply for permanent residency in Bahrain?",
    answer: "Permanent residency is available after 15 years of continuous legal residence, or through the Golden Visa program for qualified investors and professionals. The Golden Visa pathway is significantly faster for those who meet the investment or income criteria."
  },
  {
    question: "What happens if my visa expires?",
    answer: "Overstaying results in fines of BHD 10/day and potential deportation. You may also face re-entry bans. Contact us immediately if your visa is about to expire – we offer emergency renewal services to prevent overstay penalties."
  },
  {
    question: "Do you handle visa renewals?",
    answer: "Yes, we provide full renewal services including medical re-examination, LMRA renewal, and CPR card updates. We recommend starting the renewal process 30 days before expiry to ensure continuous legal status."
  }
];

export function VisaFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqs.slice(0, 6);
  const rightColumn = faqs.slice(6);

  const FAQItem = ({ faq, index, globalIndex }: { faq: typeof faqs[0]; index: number; globalIndex: number }) => (
    <motion.div
      variants={staggerItem}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left hover:bg-secondary/30 px-4 -mx-4 rounded-lg transition-colors"
      >
        <span className="font-medium text-foreground leading-relaxed pr-4 text-sm">
          {faq.question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform mt-0.5 ${
            openIndex === globalIndex ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {openIndex === globalIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed px-4 -mx-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Dashed Top Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">FAQ</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-xl md:text-2xl font-bold mb-4">
            Frequently Asked Questions About Bahrain Visas
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about visa services in Bahrain
          </motion.p>
        </motion.div>

        {/* Two Column FAQ Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            {leftColumn.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} globalIndex={index} />
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            {rightColumn.map((faq, index) => (
              <FAQItem key={index + 6} faq={faq} index={index} globalIndex={index + 6} />
            ))}
          </div>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-foreground font-medium">Still have questions?</span>
            </div>
            <Button asChild className="btn-gold">
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
