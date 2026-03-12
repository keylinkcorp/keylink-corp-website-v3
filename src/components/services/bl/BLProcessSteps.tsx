import { 
  MessageSquare, 
  FileText, 
  Search, 
  Send, 
  Award,
  CreditCard,
  Clock,
  CheckCircle2,
  ArrowRight
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
    description: "We analyze your business model, recommend the right license type, and create a customized documentation checklist.",
    details: [
      "Review your business activities and goals",
      "Recommend optimal license type",
      "Outline timeline and requirements",
      "Provide transparent fee breakdown"
    ]
  },
  {
    number: "02",
    icon: Search,
    title: "Trade Name Reservation",
    timeline: "Days 1-2",
    description: "Reserve your unique business name through MOIC's SIJILAT portal. We ensure compliance with naming regulations.",
    details: [
      "Search name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid 60 days)",
      "Prepare alternative names if needed"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Preparation",
    timeline: "Days 2-4",
    description: "We prepare all required documents including MOA/AOA drafting, shareholder details, and activity mapping.",
    details: [
      "Collect and verify shareholder documents",
      "Draft Memorandum of Association",
      "Prepare company bylaws",
      "Arrange Power of Attorney if required"
    ]
  },
  {
    number: "04",
    icon: Send,
    title: "MOIC Submission & CR Issuance",
    timeline: "Days 4-6",
    description: "Submit application through SIJILAT, pay government fees, and receive your Commercial Registration certificate.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "Track application status",
      "Receive CR certificate"
    ]
  },
  {
    number: "05",
    icon: Award,
    title: "Trade License Activation",
    timeline: "Days 5-7",
    description: "Activate your trade license for approved commercial activities. Additional sector approvals obtained if required.",
    details: [
      "Activate trade license",
      "Obtain sector-specific permits",
      "Register with Chamber of Commerce",
      "Collect all license documents"
    ]
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Bank Account & Final Compliance",
    timeline: "Days 7-14",
    description: "Open your corporate bank account (mandatory since June 2024) and complete LMRA registration if hiring staff.",
    details: [
      "Coordinate bank account opening",
      "Complete LMRA registration",
      "Set up visa quota if needed",
      "Deliver complete package to client"
    ]
  }
];

export function BLProcessSteps() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <FileText className="w-4 h-4" />
            Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How to Get Your{" "}
            <span className="text-accent">Business License in Bahrain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 6-step process with transparent timelines
          </p>
        </div>

        {/* Timeline Indicator */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border border-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-accent">7-14 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Accordion */}
        <div className="max-w-4xl mx-auto relative">
          {/* Solid vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent hidden md:block" />
          
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

        {/* Total Timeline Note */}
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-center">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Most straightforward business licenses complete in 7-14 days.</strong> Complex cases with sector approvals may take 2-4 weeks.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your licensing journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
          >
            <MessageSquare className="w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
