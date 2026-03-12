import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is local sponsorship in Bahrain?",
    answer: "Local sponsorship is an arrangement where a Bahraini national holds the required 51% share in a company for activities classified as 'restricted' under Bahrain commercial law. With proper legal structuring, you maintain full operational control while the sponsor fulfills the legal ownership requirement."
  },
  {
    question: "Is local sponsorship safe for foreign investors?",
    answer: "Yes, when structured correctly. Our comprehensive protection framework including side agreements, Power of Attorney, and undated transfer documents ensures your investment and control remain protected. We've successfully safeguarded 100+ investments without disputes."
  },
  {
    question: "What business activities require a local sponsor in Bahrain?",
    answer: "Restricted activities include real estate brokerage, certain trading/import-export activities, manpower supply agencies, and some professional services. Most commercial activities allow 100% foreign ownership. We assess your specific situation during consultation."
  },
  {
    question: "How much does local sponsorship cost?",
    answer: "Our local sponsorship service costs BHD 600 per year with a one-time setup fee of BHD 200. This includes sponsor compensation, legal documentation, and ongoing support. No percentage of profits is taken."
  },
  {
    question: "How long does it take to arrange a local sponsor?",
    answer: "The complete process takes 5-7 business days from initial consultation to MOIC registration completion."
  },
  {
    question: "Can I keep 100% of my business profits?",
    answer: "Yes. Our agreements specify that you receive all profits. The sponsor receives only the fixed annual fee with no profit-sharing arrangements."
  },
  {
    question: "What happens if my sponsor becomes problematic?",
    answer: "We provide free sponsor replacement. Our team handles all documentation updates and ensures business continuity at no additional cost."
  },
  {
    question: "Do I need to be in Bahrain to arrange sponsorship?",
    answer: "No. The entire process can be completed remotely via Power of Attorney. Many clients complete arrangements without visiting Bahrain."
  },
  {
    question: "Can I change sponsors later?",
    answer: "Yes. With our documentation structure, sponsor changes are straightforward. We assist with the transition process."
  },
  {
    question: "What legal protections are included?",
    answer: "Protection includes side agreements, irrevocable Power of Attorney, undated share transfer documents, and profit distribution agreements - all notarized and legally binding."
  },
  {
    question: "How do you vet your sponsors?",
    answer: "Our 5-point vetting includes background checks, financial assessment, track record review, character assessment, and ongoing monitoring."
  },
  {
    question: "Can I use my own sponsor instead?",
    answer: "Yes, but we strongly recommend allowing us to vet any sponsor you've identified. We can also draft the protection framework for sponsors you bring."
  }
];

export function SponsorshipFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Dashed top fade grid */}
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
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              FAQs
            </span>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Frequently Asked Questions About Local Sponsorship
            </h2>
          </motion.div>

          {/* Two Column FAQ Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {leftFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`left-${index}`}
                  className="bg-white rounded-xl border border-border shadow-sm px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {rightFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`right-${index}`}
                  className="bg-white rounded-xl border border-border shadow-sm px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
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
