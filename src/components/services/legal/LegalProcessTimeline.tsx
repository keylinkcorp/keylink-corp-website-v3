import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, FileSearch, FileText, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    id: "step-1",
    icon: MessageSquare,
    title: "Initial Consultation",
    timeline: "Day 1",
    description: "Free 30-minute assessment of your legal needs",
    details: [
      "Confidential discussion of your business situation",
      "Identify priority areas and potential risks",
      "Preliminary recommendations and next steps",
      "No obligation, no pressure"
    ]
  },
  {
    id: "step-2",
    icon: FileSearch,
    title: "Scope Definition",
    timeline: "Day 2-3",
    description: "Clear engagement terms with transparent pricing",
    details: [
      "Define engagement scope and deliverables",
      "Transparent fee proposal with fixed pricing",
      "Agreement on timeline and milestones",
      "Formal engagement letter for your records"
    ]
  },
  {
    id: "step-3",
    icon: FileText,
    title: "Legal Work Execution",
    timeline: "Week 1-2",
    description: "Expert legal work tailored to your needs",
    details: [
      "Contract drafting or compliance review",
      "Regulatory research and documentation",
      "Client review and revision cycles",
      "Regular progress updates"
    ]
  },
  {
    id: "step-4",
    icon: CheckCircle2,
    title: "Final Delivery & Support",
    timeline: "Week 2-3",
    description: "Complete handover with ongoing support options",
    details: [
      "Final documents and implementation guidance",
      "Regulatory filing support if required",
      "Walkthrough of key legal provisions",
      "Ongoing advisory relationship established"
    ]
  }
];

export function LegalProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How We Protect Your Business Interests
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, structured approach to legal consulting — from initial consultation to ongoing support.
            </p>
          </motion.div>

          {/* Timeline Accordion */}
          <motion.div variants={staggerItem} className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent hidden md:block" />

            <Accordion type="single" collapsible defaultValue="step-1" className="space-y-4">
              {processSteps.map((step, index) => (
                <AccordionItem
                  key={step.id}
                  value={step.id}
                  className="bg-white rounded-xl border border-border shadow-sm overflow-hidden md:ml-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent border-4 border-white shadow-sm">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>

                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/20">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 md:hidden">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="hidden md:flex w-10 h-10 rounded-lg bg-accent/10 items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-3 pt-2 md:ml-14">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
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
