import { 
  MessageSquare, 
  PenTool, 
  Stamp, 
  Building2, 
  FileText,
  Clock,
  CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    timeline: "Day 1",
    description: "We review your business structure and identify the right MOA format for your entity type.",
    details: [
      "Determine entity type (SPC, WLL, Branch, Holding)",
      "Identify required clauses for compliance",
      "Review shareholder and capital structure",
      "Confirm activity scope and ISIC codes",
      "Fixed quote with no hidden fees"
    ]
  },
  {
    number: "02",
    icon: PenTool,
    title: "MOA Drafting",
    timeline: "Day 1-2",
    description: "Our legal team drafts your MOA in Arabic with all mandatory clauses per Commercial Companies Law.",
    details: [
      "Draft all five mandatory clauses",
      "Include Article 15 requirements (WLL)",
      "Arabic legal terminology precision",
      "Internal compliance review",
      "Client review and approval"
    ]
  },
  {
    number: "03",
    icon: Stamp,
    title: "Notarization",
    timeline: "Day 2-3",
    description: "MOA is notarized by a licensed Bahrain notary public for legal authentication.",
    details: [
      "Schedule notary appointment",
      "Shareholder signature coordination",
      "Notary seal and attestation",
      "Digital and physical copies prepared",
      "48-hour guarantee available"
    ]
  },
  {
    number: "04",
    icon: Building2,
    title: "MOIC Submission",
    timeline: "Day 3-5",
    description: "Notarized MOA submitted through Sijilat 3.0 as part of your CR application.",
    details: [
      "Sijilat 3.0 portal upload",
      "CR application integration",
      "Government fee payment",
      "Real-time status monitoring",
      "Query response handling"
    ]
  }
];

export function MOAProcess() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <FileText className="w-4 h-4" />
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            MOA <span className="text-accent">Process</span> in Bahrain
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear 4-step workflow from consultation to MOIC submission
          </p>
        </div>

        {/* Timeline Indicator */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-accent">2-5 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline with Accordion */}
        <div className="max-w-4xl mx-auto relative">
          {/* Solid vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent hidden md:block" />
          
          {/* Accordion Steps */}
          <Accordion type="single" collapsible defaultValue="step-0" className="space-y-6">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <AccordionItem key={index} value={`step-${index}`} className="border-none">
                  <div className="flex gap-6">
                    {/* Node */}
                    <div className="relative z-10 hidden md:block">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm border-4 border-white shadow-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border overflow-hidden">
                      <AccordionTrigger className="w-full px-6 py-4 hover:no-underline hover:bg-muted/30 [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                        <div className="flex items-center gap-3 flex-1">
                          {/* Mobile Step Number */}
                          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs md:hidden">
                            {step.number}
                          </div>
                          <StepIcon className="w-5 h-5 text-accent hidden md:block" />
                          <h3 className="text-lg font-bold text-left">{step.title}</h3>
                          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded ml-auto mr-2">
                            {step.timeline}
                          </span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6 pt-4">
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        {/* Details Grid */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom Badge */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary">Most MOAs complete in 2-5 business days. Express 24-hour drafting available.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
