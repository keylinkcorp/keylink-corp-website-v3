import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a WLL company in Bahrain?",
    answer: "A WLL (With Limited Liability) company is a partnership structure allowing 2-50 shareholders to operate with limited personal liability. Governed by Articles 224-271 of the Commercial Companies Law, WLL is Bahrain's preferred structure for joint ventures, family businesses, and growing SMEs."
  },
  {
    question: "Can foreigners own 100% of a WLL in Bahrain?",
    answer: "Yes. Foreign nationals and corporations can own 100% of a WLL without requiring a local Bahraini partner. This makes Bahrain one of the most attractive GCC jurisdictions for international joint ventures."
  },
  {
    question: "What is the minimum capital for WLL in Bahrain?",
    answer: "The minimum capital for a WLL is BHD 20,000. This amount must be deposited in a Bahraini corporate bank account before Commercial Registration issuance, as mandated since June 2024."
  },
  {
    question: "How many shareholders can a WLL have?",
    answer: "A WLL can have between 2 and 50 shareholders. Shareholders can be individuals, corporations, or a mix of both. For more than 50 shareholders, a different company structure (BSC) is required."
  },
  {
    question: "What is the difference between WLL and SPC in Bahrain?",
    answer: "The key difference is shareholder count: SPC allows only 1 shareholder with BHD 50 minimum capital, while WLL allows 2-50 shareholders with BHD 20,000 minimum capital. WLLs typically have higher bank credibility and are preferred for partnerships and investor-backed businesses."
  },
  {
    question: "Can a single person form a WLL in Bahrain?",
    answer: "Under Decree 28/2020, a single shareholder can technically form a WLL (this is the SPC framework). However, for traditional multi-shareholder WLL benefits including partnership governance and higher credibility, you need at least 2 shareholders."
  },
  {
    question: "How long does WLL registration take?",
    answer: "WLL registration typically takes 5-7 business days with Keylink Corp. This includes security approval, name reservation, bank account opening, MOA notarization, CR issuance, and LMRA registration."
  },
  {
    question: "Do I need to be in Bahrain to register a WLL?",
    answer: "No physical presence is required. Keylink handles the entire process remotely through Power of Attorney. Documents can be signed, notarized, and submitted without visiting Bahrain."
  },
  {
    question: "What documents are required for WLL registration?",
    answer: "Individual shareholders need passport copies, CV, proof of address, and photographs. Corporate shareholders require incorporation certificates, board resolutions, and audited financials. Multi-shareholder partnerships also need a shareholder agreement and capital contribution schedule."
  },
  {
    question: "Can I add shareholders to an existing WLL?",
    answer: "Yes. Adding shareholders requires a CR Amendment and MOA update. The new shareholder must meet KYC/UBO requirements, and capital contributions are adjusted accordingly. Keylink handles the full amendment process."
  },
  {
    question: "What are the annual compliance requirements for WLL?",
    answer: "Annual WLL compliance includes CR renewal (BHD 50/year), commercial license renewal, Chamber of Commerce fees (BHD 100), and LMRA fees if you have employees. WLLs with employee visas may require annual audits depending on size."
  },
  {
    question: "Is WLL better than Branch Office for foreign companies?",
    answer: "It depends on your goals. WLL is a separate Bahraini legal entity offering limited liability and local credibility. Branch Offices are extensions of the parent company with unlimited liability to the parent. WLL is preferred for joint ventures and local partnerships; Branch is preferred for companies wanting direct control without local partners."
  },
  {
    question: "What business activities are allowed for WLL?",
    answer: "WLLs can register for most commercial activities including trading, consulting, technology, professional services, manufacturing, and e-commerce. Some regulated activities (healthcare, financial services) require additional approvals."
  },
  {
    question: "How much does WLL formation cost?",
    answer: "WLL formation with Keylink starts from BHD 1,200. Government fees are approximately BHD 310-540. Packages with visa processing, office setup, and bank account support range from BHD 1,800 to BHD 3,500 depending on shareholder count and service additions."
  }
];

export function WLLFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dashed Top Fade Grid */}
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
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
            WLL Company Formation <span className="text-gold">FAQ</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-white rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-right-${index}`}
                  className="bg-white rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
