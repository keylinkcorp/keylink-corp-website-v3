import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MessageSquare, FileText, Building2, Package } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Request",
    subtitle: "Tell us what you need",
    timeline: "Instant",
    content: {
      description: "Contact us via WhatsApp with the clearance type needed. We'll confirm requirements and quote within the hour.",
      details: [
        "WhatsApp for quick requests",
        "Clear quote within 1 hour",
        "No commitment required",
        "Checklist of documents needed"
      ]
    }
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Collection",
    subtitle: "We gather what's needed",
    timeline: "Same day",
    content: {
      description: "You provide required documents (passports, company papers). We can pick them up from your office if convenient.",
      details: [
        "Simple document checklist",
        "Office pickup available",
        "Secure handling",
        "Missing document alerts"
      ]
    }
  },
  {
    number: "03",
    icon: Building2,
    title: "Processing",
    subtitle: "Our team handles everything",
    timeline: "1-3 days",
    content: {
      description: "We visit the relevant agency, submit your application, pay fees, and follow up until the clearance is issued.",
      details: [
        "Direct agency liaison",
        "All fees advanced",
        "Real-time WhatsApp updates",
        "Issue resolution included"
      ]
    }
  },
  {
    number: "04",
    icon: Package,
    title: "Delivery",
    subtitle: "Certificate in your hands",
    timeline: "Same day",
    content: {
      description: "Once issued, we deliver the clearance certificate to your office with itemized invoice and receipts.",
      details: [
        "Office delivery included",
        "Itemized invoice",
        "Digital copies provided",
        "Receipt confirmation"
      ]
    }
  }
];

export function DocumentClearanceProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Grid lines */}
      <div 
        className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Clearance Process: 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From request to delivery, we handle every detail.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block" />

            <Accordion type="single" collapsible defaultValue="step-1" className="space-y-6">
              {steps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`step-${index + 1}`}
                  className="border-0"
                >
                  <div className="flex gap-4 md:gap-6">
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center border-4 border-white shadow-md">
                        <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/30 transition-colors [&[data-state=open]]:bg-secondary/30">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left w-full pr-4">
                          <span className="text-xs font-bold text-accent uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                          </div>
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium whitespace-nowrap">
                            {step.timeline}
                          </span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-muted-foreground mb-4">
                          {step.content.description}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.content.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
