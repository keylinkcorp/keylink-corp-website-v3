import { 
  MessageSquare, 
  FileText, 
  Search, 
  Send, 
  Award,
  HeartHandshake,
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
    title: "Consultation & Planning",
    timeline: "Day 1",
    description: "We start with a comprehensive consultation to understand your business goals and recommend the optimal company structure.",
    details: [
      "Review your business activities and requirements",
      "Recommend the best entity type (SPC, WLL, Branch, etc.)",
      "Explain capital requirements and ownership options",
      "Outline timeline and documentation needed",
      "Provide transparent fee structure"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Preparation",
    timeline: "Day 1-2",
    description: "Our team prepares and verifies all required documentation to ensure first-time approval from MOIC.",
    details: [
      "Collect and verify shareholder documents",
      "Prepare Memorandum of Association (MOA)",
      "Draft company bylaws and resolutions",
      "Arrange Power of Attorney if required",
      "Coordinate document attestation if needed"
    ]
  },
  {
    number: "03",
    icon: Search,
    title: "Name Reservation",
    timeline: "Day 2",
    description: "We conduct a thorough name search and reserve your company name through the SIJILAT portal.",
    details: [
      "Search for name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid for 60 days)",
      "Prepare alternative names if needed",
      "Confirm name approval with client"
    ]
  },
  {
    number: "04",
    icon: Send,
    title: "MOIC Submission",
    timeline: "Day 2-3",
    description: "Complete CR application is submitted to the Ministry of Industry and Commerce for processing.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "Upload all supporting documents",
      "Track application status",
      "Address any MOIC queries promptly"
    ]
  },
  {
    number: "05",
    icon: Award,
    title: "CR Issuance",
    timeline: "Day 3-5",
    description: "Upon approval, we collect your Commercial Registration certificate and trade license on your behalf.",
    details: [
      "Receive CR approval notification",
      "Collect physical CR certificate",
      "Obtain trade license for activities",
      "Register with Chamber of Commerce",
      "Deliver documents to client"
    ]
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Post-Registration Support",
    timeline: "Ongoing",
    description: "Our support continues beyond CR issuance to help you become fully operational.",
    details: [
      "Assist with corporate bank account opening",
      "Guide LMRA registration for hiring",
      "Support visa applications for staff",
      "Set up virtual office if needed",
      "Provide ongoing compliance reminders"
    ]
  }
];

export function CRProcessSteps() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Ellipse mask fade dot grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <FileText className="w-4 h-4" />
            Registration Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-accent">Commercial Registration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined 6-step process that gets your business registered in 3-7 business days
          </p>
        </div>

        {/* Timeline Indicator */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border-2 border-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-accent">3-7 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Accordion Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Solid vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent hidden md:block" />
          
          <Accordion type="single" collapsible defaultValue="step-0" className="space-y-6">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <AccordionItem key={index} value={`step-${index}`} className="border-none">
                  <div className="flex gap-6">
                    {/* Timeline Node */}
                    <div className="relative z-10 hidden md:block">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm border-4 border-white shadow-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border overflow-hidden shadow-sm">
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

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your registration journey?
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
