import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer: "We guarantee a response within 1 hour during business hours (Sunday-Thursday, 8 AM - 5 PM). For inquiries received outside business hours, we'll respond first thing the next business day. Urgent matters can reach us via WhatsApp for faster response."
  },
  {
    question: "What languages do you support?",
    answer: "Our team is fluent in English, Arabic, Hindi, and Urdu. We can provide consultations and documentation in any of these languages to ensure clear communication and understanding throughout your engagement with us."
  },
  {
    question: "Can I schedule an in-person consultation?",
    answer: "Absolutely! We welcome in-person meetings at our Sanabis Exhibition Tower office. You can book an appointment through our contact form, by phone, or via WhatsApp. Walk-ins are also welcome, though appointments are recommended to ensure a team member is available for your needs."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a complimentary initial consultation to understand your business needs and provide preliminary guidance. This can be conducted in person, via phone, or through video call—whichever is most convenient for you."
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "For an initial consultation, just bring your business idea or questions. If you're ready to proceed with services, we'll provide a detailed checklist of required documents (passport copies, business plan, etc.) based on your specific needs."
  },
  {
    question: "Is there support available after business hours?",
    answer: "While our office is staffed Sunday-Thursday from 8 AM to 5 PM, you can reach us via WhatsApp for urgent matters outside these hours. We also respond to emails on a best-effort basis during weekends and holidays."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ContactFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern - Dashed Top Fade Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </span>
            <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about contacting Keylink
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border-2 border-border px-6 data-[state=open]:border-accent/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-6 hover:no-underline">
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
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="https://wa.me/97317008888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-colors"
            >
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
