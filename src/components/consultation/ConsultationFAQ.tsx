import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes, absolutely! Our initial 30-minute consultation is completely free with no obligations. We believe in building trust first. During this session, we'll discuss your business goals, answer your questions, and provide initial guidance on the best path forward for your company setup in Bahrain.",
  },
  {
    question: "How long is the consultation session?",
    answer:
      "Each consultation is scheduled for 30 minutes. This gives us enough time to understand your business needs, discuss available options, and answer your questions. If more time is needed, we can always schedule a follow-up call.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "To make the most of our consultation, it helps to have a general idea of your business type, your target market, and any specific questions you have about company formation in Bahrain. Don't worry if you're not sure about everything – that's what we're here to help you figure out!",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Of course! Life happens, and we understand. You can reschedule your appointment directly through the confirmation email you'll receive, or simply contact us via WhatsApp or phone. We just ask for at least 24 hours notice when possible.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "After our call, you'll receive a personalized summary via email that includes our recommendations, an estimated timeline, and a clear cost breakdown for your specific situation. There's no pressure to proceed immediately – take your time to review everything and reach out when you're ready.",
  },
  {
    question: "Will the consultation be conducted in English?",
    answer:
      "Yes, our consultations are primarily conducted in English. However, we also have team members fluent in Arabic, Hindi, and Urdu. Let us know your preference when booking, and we'll arrange accordingly.",
  },
];

export function ConsultationFAQ() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Dashed Center Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our free consultation
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-5 hover:no-underline text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
