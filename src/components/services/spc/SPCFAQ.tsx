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

const faqItems = [
  {
    question: "What is a Single Person Company in Bahrain?",
    answer: "A Single Person Company (SPC) in Bahrain is a limited liability company owned by one individual shareholder. Under Decree 28/2020, SPC has been merged into the WLL (Limited Liability Company) framework, allowing a single shareholder to form a WLL with the same benefits—100% foreign ownership, limited liability protection, and BHD 50 minimum capital."
  },
  {
    question: "Can foreigners own 100% of an SPC in Bahrain?",
    answer: "Yes. Foreign nationals can own 100% of a Single Person Company in Bahrain. There is no requirement for a local sponsor or Bahraini partner. This makes Bahrain one of the most attractive GCC countries for solo entrepreneurs and consultants seeking full ownership of their business."
  },
  {
    question: "What is the minimum capital required for SPC in Bahrain?",
    answer: "The minimum capital for a Single Person Company in Bahrain is BHD 50. However, we recommend BHD 2,150+ if you plan to sponsor work visas, as LMRA requires adequate capital for visa eligibility. The capital must be deposited in a Bahrain corporate bank account as of June 2024."
  },
  {
    question: "How long does SPC registration take in Bahrain?",
    answer: "SPC registration in Bahrain typically takes 3-14 business days with Keylink Corp. This includes security approval (1-3 days), name reservation, bank account opening, document notarization, CR issuance, and LMRA registration. Foreign nationals may require additional processing time for security clearance."
  },
  {
    question: "Do I need to be in Bahrain to register an SPC?",
    answer: "No physical presence is required. Keylink handles the entire SPC registration process remotely through Power of Attorney. All documents can be signed, notarized, and submitted without visiting Bahrain. Many solo entrepreneurs complete their business setup entirely online."
  },
  {
    question: "What is the difference between SPC and WLL in Bahrain?",
    answer: "Under Bahrain's 2020 Commercial Companies Law (Decree 28), SPC has been merged into the WLL framework. The key difference is shareholder count: SPC allows only 1 shareholder while WLL allows 2-50. Both offer limited liability, 100% foreign ownership, and similar registration processes. SPC has lower minimum capital (BHD 50 vs BHD 20,000 for traditional WLL)."
  },
  {
    question: "Can I convert my SPC to WLL later?",
    answer: "Yes. Converting an SPC to a multi-shareholder WLL is straightforward when you're ready to add partners. The process involves amending your Commercial Registration, updating the Memorandum of Association, and registering the new shareholders. Keylink handles the full conversion process."
  },
  {
    question: "What documents are required for SPC registration?",
    answer: "Individual SPC registration requires: valid passport copy, professional CV/resume, proof of residential address (utility bill or bank statement), passport-size photograph, and a brief business plan. Corporate shareholders need additional documents including certificate of incorporation, board resolution, and parent company financials."
  },
  {
    question: "What are the annual compliance requirements for SPC?",
    answer: "Annual SPC compliance includes: Commercial Registration renewal (BHD 50/year), commercial license renewal, Chamber of Commerce fees (BHD 50-100), and LMRA fees if you have employees (BHD 10/month per worker). Audit requirements are minimal for SPCs without employees."
  },
  {
    question: "Can I get a work visa through my SPC?",
    answer: "Yes. As the SPC owner, you can obtain an investor visa. Your visa quota for employees depends on your office size and business activities. Virtual offices typically allow 0 visas, while serviced offices allow 2+ visas. Keylink handles all LMRA visa processing including investor and work permits."
  },
  {
    question: "What business activities are allowed for SPC?",
    answer: "SPCs can register for most commercial activities in Bahrain including consulting, trading, technology, professional services, and e-commerce. Some regulated activities (healthcare, financial services, legal) may require additional approvals. Keylink advises on activity selection and any sector-specific requirements."
  },
  {
    question: "How much does SPC formation cost in Bahrain?",
    answer: "SPC formation with Keylink starts from BHD 750. This includes MOIC registration, commercial license, and basic compliance. Packages with investor visa, virtual office, and bank account support start at BHD 1,200. Government fees (CR registration, trade license, Chamber) are additional and transparently itemized."
  }
];

export function SPCFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split FAQ items into two columns
  const leftColumn = faqItems.slice(0, 6);
  const rightColumn = faqItems.slice(6);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dashed top-fade pattern */}
      <div
        className="absolute inset-0 -z-10"
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

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
            SPC <span className="text-gold">FAQ</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Single Person Company formation in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Left Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`left-${index}`}
                  className="bg-white rounded-xl border-2 border-border data-[state=open]:border-gold data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/40 font-semibold text-primary text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground border-t border-border/50">
                    <div className="pt-4 border-l-4 border-gold pl-4">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`right-${index}`}
                  className="bg-white rounded-xl border-2 border-border data-[state=open]:border-gold data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/40 font-semibold text-primary text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground border-t border-border/50">
                    <div className="pt-4 border-l-4 border-gold pl-4">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
