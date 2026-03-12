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
    question: "Is lease registration mandatory in Bahrain?",
    answer: "Yes. Under Property Rent Law No. 27 of 2014, all lease contracts (residential and commercial) must be registered with RERA through the bahrain.bh portal. Unregistered leases have no legal standing in disputes."
  },
  {
    question: "Who is responsible for registering the lease—landlord or tenant?",
    answer: "Either party can register, but traditionally the landlord initiates registration. Both parties are liable for non-registration fines, so it's in everyone's interest to ensure the lease is registered."
  },
  {
    question: "How much does lease registration cost?",
    answer: "Government fees range from BHD 1-10 depending on property type and rent amount. Professional service fees for full registration support start from BHD 50."
  },
  {
    question: "Can I register a lease in English?",
    answer: "No. RERA requires all lease contracts to be in Arabic or accompanied by a certified Arabic translation. We provide translation services as part of our registration package."
  },
  {
    question: "How long does lease registration take?",
    answer: "Standard processing takes 1-3 business days. Same-day registration is available for urgent requirements through our express service."
  },
  {
    question: "What happens if I don't register my lease?",
    answer: "Unregistered leases cannot be used as evidence in the Rent Disputes Committee. Both landlord and tenant face fines of BHD 500 or more, and tenants cannot use the lease for visa sponsorship."
  },
  {
    question: "Can I register a lease retroactively?",
    answer: "Yes, but registering after lease commencement may trigger penalty exposure. We recommend registering before or immediately upon signing the contract."
  },
  {
    question: "Is lease registration required for short-term rentals?",
    answer: "Leases under 3 months may have different requirements. However, any tenancy that will be used for visa purposes or legal protection should be registered regardless of duration."
  },
  {
    question: "Can a tenant register the lease without the landlord?",
    answer: "The tenant can submit registration, but landlord documents (ownership proof, CPR) are still required. We coordinate between both parties to obtain necessary documents."
  },
  {
    question: "How do I register a commercial lease?",
    answer: "Commercial lease registration follows the same bahrain.bh portal process but requires the tenant's Commercial Registration (CR) and additional business documentation."
  },
  {
    question: "Can I use a registered lease for family visa?",
    answer: "Yes. A registered residential lease is one of the mandatory documents for family visa sponsorship in Bahrain. The lease proves adequate accommodation for sponsored dependents."
  },
  {
    question: "What if my lease is rejected during registration?",
    answer: "Common rejection reasons include missing Arabic translation, incomplete property details, or document discrepancies. Our team reviews all documents before submission to prevent rejections."
  },
  {
    question: "Do I need to re-register when renewing a lease?",
    answer: "Yes. Lease renewals are treated as new registrations and must be submitted through the RERA portal. We handle renewal registrations with the same process and pricing."
  },
  {
    question: "Can real estate agents register leases on behalf of clients?",
    answer: "Yes. Agents can register leases with proper authorization from the landlord or tenant. We work with many Bahrain real estate agencies for bulk registration services."
  },
  {
    question: "What is the Rent Disputes Committee?",
    answer: "The Rent Disputes Committee is the official body that resolves landlord-tenant conflicts in Bahrain. Only parties with registered leases can file complaints or use the lease as evidence."
  },
  {
    question: "How do I verify if my lease is already registered?",
    answer: "Check your registration status through the bahrain.bh portal using your CPR or lease reference number. If unsure, we can verify your registration status as part of our consultation."
  }
];

export function LeaseFAQ() {
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
            Lease Registration <span className="text-accent">FAQ</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about lease contract registration in Bahrain
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
