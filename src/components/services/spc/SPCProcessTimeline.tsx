import { 
  ShieldCheck, 
  FileText, 
  Wallet, 
  Stamp, 
  Building2, 
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
    icon: ShieldCheck,
    title: "Security Approval",
    timeline: "Day 1-3",
    description: "MOIC security clearance for foreign nationals to conduct business in Bahrain.",
    details: [
      "Submit passport copy and background details",
      "MOIC security verification process",
      "Clearance typically within 1-3 business days",
      "Bahraini/GCC nationals may have expedited processing",
      "Keylink tracks status and handles any queries"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Name Reservation",
    timeline: "Day 2-3",
    description: "Reserve your unique company name through the SIJILAT portal.",
    details: [
      "Search for name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid for 60 days)",
      "Prepare alternative names if needed",
      "Confirm name approval with client"
    ]
  },
  {
    number: "03",
    icon: Wallet,
    title: "Bank Account Opening",
    timeline: "Day 3-7",
    description: "Open your corporate bank account and deposit minimum capital (mandatory since June 2024).",
    details: [
      "Select from major Bahraini banks (NBB, BBK, AUB)",
      "Submit company formation documents",
      "Deposit minimum capital (BHD 50 for SPC)",
      "Obtain bank letter confirming capital deposit",
      "Required for final CR issuance"
    ]
  },
  {
    number: "04",
    icon: Stamp,
    title: "Document Notarization",
    timeline: "Day 5-8",
    description: "Notarize Memorandum of Association and company documents at the Notary Public.",
    details: [
      "Prepare Memorandum of Association (MOA)",
      "Draft company bylaws and resolutions",
      "Notarize documents at Bahrain Notary Public",
      "Power of Attorney if owner not present",
      "All documents in Arabic (translation provided)"
    ]
  },
  {
    number: "05",
    icon: Building2,
    title: "CR Issuance",
    timeline: "Day 7-12",
    description: "Commercial Registration certificate issued by MOIC along with your trade license.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "MOIC review and approval",
      "CR certificate and trade license issued",
      "Register with Chamber of Commerce"
    ]
  },
  {
    number: "06",
    icon: CreditCard,
    title: "LMRA & ID Processing",
    timeline: "Day 10-14",
    description: "Register with LMRA for visa quotas and obtain business ID cards.",
    details: [
      "LMRA registration for employment",
      "Investor visa application if needed",
      "Signatory card for authorized personnel",
      "National ID registration",
      "Company fully operational"
    ]
  }
];

export function SPCProcessTimeline() {
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
            SPC Registration Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-accent">Single Person Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined 6-step process that gets your SPC registered in 3-14 business days
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
                  Total Timeline: <span className="text-accent">3-14 Business Days</span>
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

        {/* Bottom Badge & CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary">Complete SPC Formation in 3-14 Business Days</span>
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
