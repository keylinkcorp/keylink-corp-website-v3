import { 
  FileText, 
  ShieldCheck, 
  FileSignature, 
  Wallet, 
  Stamp, 
  Building2, 
  CreditCard,
  Users,
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
    icon: Users,
    title: "Shareholder Agreement",
    timeline: "Day 1",
    description: "Define ownership percentages, capital contributions, and partner roles before formal registration.",
    details: [
      "Draft initial shareholder agreement",
      "Confirm capital contribution schedule",
      "Define profit/loss distribution ratios",
      "Establish management responsibilities",
      "Align on company objectives"
    ]
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Security Approval",
    timeline: "Day 1-2",
    description: "MOIC security clearance for foreign shareholders to conduct business in Bahrain.",
    details: [
      "Submit passport copies for all foreign shareholders",
      "MOIC security verification process",
      "Clearance typically within 1-2 business days",
      "GCC nationals may have expedited processing",
      "Keylink tracks status and handles queries"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Name Reservation",
    timeline: "Day 2-3",
    description: "Reserve your unique company name through the SIJILAT portal.",
    details: [
      "Search for name availability",
      "Check for trademark conflicts",
      "Reserve approved name (valid 60 days)",
      "Prepare alternative names if needed"
    ]
  },
  {
    number: "04",
    icon: Wallet,
    title: "Bank Account Opening",
    timeline: "Day 3-5",
    description: "Open corporate bank account and deposit BHD 20,000 minimum capital.",
    details: [
      "Select from major Bahraini banks",
      "Submit formation documents",
      "Deposit minimum capital",
      "Obtain bank letter confirming deposit",
      "Mandatory for CR issuance since June 2024"
    ]
  },
  {
    number: "05",
    icon: FileSignature,
    title: "MOA Drafting",
    timeline: "Day 4-5",
    description: "Prepare the Memorandum of Association with all mandatory clauses per Article 15.",
    details: [
      "Draft WLL-specific MOA clauses",
      "Include profit/loss distribution",
      "Define share transfer restrictions",
      "Establish partner meeting rules",
      "Arabic translation provided"
    ]
  },
  {
    number: "06",
    icon: Stamp,
    title: "Document Notarization",
    timeline: "Day 5-6",
    description: "Notarize MOA and company documents at the Notary Public.",
    details: [
      "All shareholders sign or provide POA",
      "Notarize at Bahrain Notary Public",
      "Legalize foreign documents if required",
      "Prepare board resolutions"
    ]
  },
  {
    number: "07",
    icon: Building2,
    title: "CR & License Issuance",
    timeline: "Day 6-7",
    description: "Commercial Registration and trade license issued by MOIC.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "MOIC review and approval",
      "CR certificate and trade license issued",
      "Register with Chamber of Commerce"
    ]
  },
  {
    number: "08",
    icon: CreditCard,
    title: "LMRA & Final Setup",
    timeline: "Day 7+",
    description: "Register with LMRA for visa quotas and complete operational setup.",
    details: [
      "LMRA registration for employment",
      "Shareholder/investor visa applications",
      "Signatory cards for authorized personnel",
      "Company fully operational"
    ]
  }
];

export function WLLProcessTimeline() {
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
            WLL Registration Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-accent">WLL Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive 8-step process that gets your partnership registered in 5-7 business days
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
                  Total Timeline: <span className="text-accent">5-7 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Accordion */}
        <div className="max-w-4xl mx-auto relative">
          {/* Solid vertical line - adjusted positioning */}
          <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold/20 hidden md:block" />
          
          <Accordion type="single" collapsible defaultValue="step-0" className="space-y-4 md:space-y-6">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <AccordionItem key={index} value={`step-${index}`} className="border-none">
                  <div className="flex gap-4 md:gap-6">
                    {/* Node - refined with gold accent */}
                    <div className="relative z-10 hidden md:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary font-bold text-sm border-4 border-white shadow-md ring-2 ring-gold/20">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <AccordionTrigger className="w-full px-4 md:px-6 py-4 hover:no-underline hover:bg-muted/30 [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-primary font-bold text-xs md:hidden shadow-sm">
                            {step.number}
                          </div>
                          <StepIcon className="w-5 h-5 text-gold hidden md:block" />
                          <h3 className="text-base md:text-lg font-bold text-left">{step.title}</h3>
                          <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded-full ml-auto mr-2 border border-gold/20">
                            {step.timeline}
                          </span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-4 md:px-6 pb-5 pt-4">
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">{step.description}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
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

        {/* Bottom Badge & CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary">Complete WLL Formation in 5-7 Business Days</span>
          </div>
          
          <div className="mt-8">
            <a
              href="/free-consultation"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
