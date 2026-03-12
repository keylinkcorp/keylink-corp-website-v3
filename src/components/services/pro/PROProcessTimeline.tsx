import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MessageSquare, FileText, Building2, Package, ChevronDown } from "lucide-react";
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
      description: "Reach out via WhatsApp, email, or our contact form. Tell us what document or service you need, and we'll respond within the hour with a clear quote and timeline.",
      details: [
        "WhatsApp for quick requests",
        "Detailed quote within 1 hour",
        "No commitment required",
        "Clear pricing upfront"
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
      description: "We provide you with a simple checklist of required documents. You can drop them at our office, or we'll pick them up — whatever's convenient for you.",
      details: [
        "Clear document checklist",
        "Pick-up service available",
        "Secure document handling",
        "Missing document alerts"
      ]
    }
  },
  {
    number: "03",
    icon: Building2,
    title: "Processing",
    subtitle: "Our PRO handles everything",
    timeline: "1-3 days",
    content: {
      description: "Our experienced PRO visits the relevant ministry, submits your application, pays any fees, and follows up until completion. You'll receive WhatsApp updates at each stage.",
      details: [
        "Direct ministry liaison",
        "All fees advanced",
        "Real-time status updates",
        "Issue resolution included"
      ]
    }
  },
  {
    number: "04",
    icon: Package,
    title: "Delivery",
    subtitle: "Documents in your hands",
    timeline: "Same day",
    content: {
      description: "Once your documents are ready, we deliver them directly to your office or preferred location. You receive a detailed invoice with all fees itemized.",
      details: [
        "Office delivery available",
        "Itemized invoice",
        "Digital copies provided",
        "Receipt confirmation"
      ]
    }
  }
];

export function PROProcessTimeline() {
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
              Our PRO Process: 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From request to delivery, we handle every detail so you don't have to.
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
