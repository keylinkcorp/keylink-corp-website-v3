import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, FileText, Users, Clock, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: "step-1",
    number: 1,
    title: "Initial Consultation",
    timeline: "Day 1",
    icon: MessageSquare,
    content: [
      "Assess your business needs and banking requirements",
      "Recommend 1–2 banks based on your profile",
      "Outline required documents specific to your situation"
    ]
  },
  {
    id: "step-2",
    number: 2,
    title: "Documentation Prep",
    timeline: "Days 2–3",
    icon: FileText,
    content: [
      "Prepare complete KYC package",
      "Draft board resolution and authorization letters",
      "Compile source of funds documentation"
    ]
  },
  {
    id: "step-3",
    number: 3,
    title: "Bank Introduction",
    timeline: "Day 4",
    icon: Users,
    content: [
      "Submit application through our direct RM channel",
      "Your file is flagged as a referred client",
      "Initial review begins immediately"
    ]
  },
  {
    id: "step-4",
    number: 4,
    title: "Account Processing",
    timeline: "Days 5–14",
    icon: Clock,
    content: [
      "Bank conducts due diligence review",
      "We handle any additional document requests",
      "Weekly status updates provided"
    ]
  },
  {
    id: "step-5",
    number: 5,
    title: "Account Activation",
    timeline: "Day 15+",
    icon: CheckCircle2,
    content: [
      "Account approved and opened",
      "Deposit capital as required",
      "Bank confirmation letter issued for CR application"
    ]
  }
];

export function BankAccountProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      aria-labelledby="process-heading"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 60%, transparent 100%)"
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
          >
            From Application to Approved in 2–3 Weeks
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here's exactly what happens when you work with Keylink to open your corporate bank account.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30 hidden md:block" />

            <Accordion type="single" collapsible defaultValue="step-1" className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <AccordionItem 
                    value={step.id} 
                    className="border-0"
                  >
                    <div className="flex gap-4 md:gap-6">
                      {/* Step number circle */}
                      <div className="relative z-10 hidden md:flex">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {step.number}
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                        <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/30 transition-colors">
                          <div className="flex items-center gap-4 text-left">
                            <div className="md:hidden w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                              {step.number}
                            </div>
                            <step.icon className="h-5 w-5 text-gold hidden md:block" />
                            <div>
                              <h3 className="font-semibold text-primary text-lg">
                                {step.title}
                              </h3>
                              <span className="text-sm text-gold font-medium">
                                {step.timeline}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-0">
                          <ul className="space-y-2 ml-0 md:ml-9">
                            {step.content.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
