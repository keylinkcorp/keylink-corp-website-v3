import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const faqs = [
  {
    question: "What is the difference between liquidation and striking off?",
    answer: "Liquidation is a formal winding up process for active companies with assets and liabilities, requiring creditor notification, asset distribution, and a 90-day notice period. Striking off (deregistration) is a simpler process for dormant companies with no trading activity for 12+ months and no outstanding debts—it can be completed in 2-4 weeks without the formal liquidation procedures."
  },
  {
    question: "How long does company liquidation take in Bahrain?",
    answer: "Voluntary liquidation typically takes 4-8 weeks, including the 90-day creditor notice period (which can run concurrently with other processes). Striking off for dormant CRs can be completed in 2-4 weeks. Compulsory liquidation through court proceedings can take 3-6 months depending on the complexity."
  },
  {
    question: "Can I liquidate a company with outstanding debts?",
    answer: "Yes, but debts must be settled during the liquidation process. The liquidator prioritizes creditor payments before any shareholder distributions, following a legal priority order. If liabilities exceed assets, this may require compulsory liquidation proceedings or negotiation with creditors."
  },
  {
    question: "Do I need a liquidator for voluntary liquidation?",
    answer: "Yes, Bahrain's Commercial Companies Law requires appointing a liquidator for voluntary liquidation. This can be an internal party (shareholder or director) or an external professional. The liquidator is responsible for settling debts, distributing assets, and completing the CR cancellation process."
  },
  {
    question: "What happens to employees during liquidation?",
    answer: "Employees must be formally terminated with all end-of-service benefits paid as per Bahrain Labor Law. Work visas must be cancelled through LMRA, and SIO/GOSI contributions settled. We handle the entire employee settlement process, including visa cancellations and benefit calculations."
  },
  {
    question: "Can I liquidate a company remotely without visiting Bahrain?",
    answer: "Yes, with a valid Power of Attorney, Keylink can handle the entire liquidation process on your behalf. You can authorize a representative to sign documents, attend ministry meetings, and complete all clearances without visiting Bahrain. Most of our clients complete the process remotely."
  },
  {
    question: "What are the consequences of not closing my company properly?",
    answer: "Improper closure can result in frozen bank accounts, accumulating LMRA fines (BHD 100-500/month), travel bans for directors, personal liability for company debts, and difficulty obtaining clearances for future business ventures in Bahrain. Over 40% of CR cancellation applications are rejected due to incomplete clearances."
  },
  {
    question: "How much does company liquidation cost?",
    answer: "Striking off starts from BHD 650 (service fee), voluntary liquidation from BHD 950. Additional costs include government fees (BHD 100-300), final audit if required (BHD 400), and employee settlement processing if applicable. Use our cost calculator for a personalized estimate based on your situation."
  },
  {
    question: "Do I need a final audit for liquidation?",
    answer: "WLLs (Limited Liability Companies) typically require a final audit before liquidation to provide an accurate picture of assets and liabilities. SPCs may not require a formal audit unless specifically requested by stakeholders. The liquidator will advise based on your company structure and situation."
  },
  {
    question: "Can I reactivate a dormant CR instead of liquidating?",
    answer: "Yes, if your CR has been dormant but not cancelled, it can be reactivated by paying outstanding renewal fees and applicable late penalties. This is often more cost-effective than starting a new company if you plan to resume business. Contact us to assess your options and compare costs."
  },
  {
    question: "What happens to company assets during liquidation?",
    answer: "The liquidator inventories all assets (cash, equipment, property, receivables), sells or transfers them as appropriate, settles creditor claims in legal priority order, and distributes remaining funds to shareholders. Asset distribution requires proper documentation, tax clearance, and sometimes court approval."
  },
  {
    question: "How long should I keep company records after closure?",
    answer: "Bahrain law requires retaining company records for at least 5 years after liquidation completion. This includes financial statements, tax records, employee files, corporate resolutions, and liquidation documents. Keylink offers secure document archiving services to ensure compliance and easy access if needed."
  }
];

export function LiquidationFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Dashed Top Fade Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
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
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </span>
            <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about closing a company in Bahrain
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={staggerItem} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-2 border-border px-6 data-[state=open]:border-accent/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={staggerItem} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="/free-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-colors"
            >
              Book a Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
