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
    question: "What is a foreign company branch in Bahrain?",
    answer: "A foreign company branch in Bahrain is a legal extension of a parent company registered abroad. Unlike a subsidiary (WLL), it is not a separate legal entity—the parent company retains full liability. Branches can conduct the same activities as the parent and repatriate 100% of profits to headquarters without corporate tax."
  },
  {
    question: "Can a foreign company own 100% of a branch in Bahrain?",
    answer: "Yes. Foreign companies can establish a branch in Bahrain with 100% ownership. No local partner or sponsor is required. The parent company maintains complete control over the branch operations and all profits."
  },
  {
    question: "What is the minimum capital required for a branch office?",
    answer: "There is no statutory minimum capital requirement for branch offices in Bahrain. The branch operates under the parent company's capital structure. However, adequate operational funding should be demonstrated to MOIC."
  },
  {
    question: "How long does branch registration take in Bahrain?",
    answer: "Branch office registration in Bahrain typically takes 7-10 business days with Keylink Corp. This includes document verification, MOIC approval, commercial license issuance, and bank account opening. Timeline may vary based on parent company jurisdiction."
  },
  {
    question: "What documents are required from the parent company?",
    answer: "Parent company documents include: Certificate of Incorporation, Memorandum and Articles of Association, Board Resolution authorizing branch establishment, Good Standing Certificate, and audited financial statements (2 years)—all apostilled or legalized for use in Bahrain."
  },
  {
    question: "Does the branch need a resident manager?",
    answer: "Yes. Every branch office in Bahrain must appoint a resident branch manager who holds a valid Bahrain residence permit. The manager can be a foreign national with an investor or work visa and serves as the authorized signatory."
  },
  {
    question: "What is the difference between a branch and a WLL?",
    answer: "A branch is an extension of the parent company with no separate legal identity—parent company is fully liable. A WLL (Limited Liability Company) is a separate Bahraini legal entity with limited liability. Branches have simpler setup but no liability protection; WLLs offer liability shield but require local incorporation."
  },
  {
    question: "Can a branch employ staff in Bahrain?",
    answer: "Yes. Branch offices can sponsor work visas for employees through LMRA. Visa quotas depend on office size and registered activities. Keylink handles all LMRA registrations and visa processing for branch staff."
  },
  {
    question: "What are the annual compliance requirements?",
    answer: "Annual branch compliance includes: Commercial Registration renewal, commercial license renewal, Chamber of Commerce fees, LMRA fees for employees, and submission of parent company's annual audited accounts. No separate local audit is typically required."
  },
  {
    question: "Is there corporate tax on branch profits?",
    answer: "Bahrain has no corporate income tax for most business activities. Branch profits can be repatriated to the parent company at 100% without withholding tax. This makes Bahrain attractive for regional headquarters and trading operations."
  },
  {
    question: "Do parent company documents need apostille?",
    answer: "Yes. All parent company documents must be apostilled (Hague Convention countries) or legalized through the Bahrain Embassy (non-Hague countries). Documents should be recent (within 3-6 months) and translated to Arabic by a certified translator."
  },
  {
    question: "Can I open a branch remotely without visiting Bahrain?",
    answer: "Yes. Keylink handles the entire branch registration process remotely through Power of Attorney. All documents can be prepared, signed, and submitted without the parent company representatives visiting Bahrain."
  },
  {
    question: "What business activities can a branch conduct?",
    answer: "Branches can conduct the same activities as the parent company within Bahrain's permitted activity list. Common activities include trading, consulting, project management, marketing, technical services, and regional sales offices."
  },
  {
    question: "How much does branch registration cost?",
    answer: "Branch registration with Keylink starts from BHD 1,200 for professional services. Government fees (CR registration, commercial license, Chamber of Commerce) range from BHD 400-600. Total setup costs typically range BHD 1,800-2,500 depending on activities and visa requirements."
  },
  {
    question: "What is the role of a branch manager?",
    answer: "The branch manager is the authorized signatory and legal representative of the branch in Bahrain. They handle day-to-day operations, sign contracts, manage bank accounts, and liaise with government authorities. The manager must be a Bahrain resident."
  },
  {
    question: "Can I convert a branch to a WLL later?",
    answer: "Yes. A branch can be converted to a WLL (subsidiary) when the parent company wants to establish a separate legal entity. This involves closing the branch and incorporating a new WLL—Keylink handles the full transition process to ensure business continuity."
  }
];

export function BranchFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split FAQ items into two columns
  const leftColumn = faqItems.slice(0, 8);
  const rightColumn = faqItems.slice(8);

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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
            Branch Office <span className="text-accent">FAQ</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about foreign company branch registration in Bahrain
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
                  className="bg-white rounded-xl border-2 border-border data-[state=open]:border-accent data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/40 font-semibold text-primary text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground border-t border-border/50">
                    <div className="pt-4 border-l-4 border-accent pl-4">
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
                  className="bg-white rounded-xl border-2 border-border data-[state=open]:border-accent data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/40 font-semibold text-primary text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground border-t border-border/50">
                    <div className="pt-4 border-l-4 border-accent pl-4">
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
