import { useState } from "react";
import { 
  FileText, 
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  Wallet,
  Stamp,
  CreditCard,
  Users,
  ShieldCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const phases = [
  {
    id: "preparation",
    name: "Document Preparation",
    timeline: "1-5 Days",
    description: "Preparing and legalizing parent company documents",
    steps: [
      {
        number: "01",
        icon: FileText,
        title: "Document Collection",
        timeline: "Day 1-2",
        description: "Gather all required parent company documents including Certificate of Incorporation, MOA, and board resolutions.",
        details: [
          "Certificate of Incorporation (apostilled)",
          "Memorandum & Articles of Association",
          "Board Resolution authorizing branch",
          "Good Standing Certificate",
          "Audited financial statements (2 years)"
        ]
      },
      {
        number: "02",
        icon: Stamp,
        title: "Apostille & Legalization",
        timeline: "Day 2-5",
        description: "Documents must be apostilled (Hague countries) or legalized through Bahrain Embassy.",
        details: [
          "Apostille from parent country (Hague Convention)",
          "Embassy attestation (non-Hague countries)",
          "Arabic translation by certified translator",
          "Notarization of translated documents",
          "Keylink coordinates with local translators"
        ]
      }
    ]
  },
  {
    id: "registration",
    name: "MOIC Registration",
    timeline: "3-7 Days",
    description: "Official branch registration with MOIC and Sijilat",
    steps: [
      {
        number: "03",
        icon: ShieldCheck,
        title: "Name Reservation & Approval",
        timeline: "Day 1-2",
        description: "Reserve branch name and submit for MOIC approval via Sijilat portal.",
        details: [
          "Branch name availability search",
          "Name must include parent company name",
          "MOIC initial application submission",
          "Activity selection and approval",
          "Name reserved for 60 days"
        ]
      },
      {
        number: "04",
        icon: Wallet,
        title: "Bank Account Opening",
        timeline: "Day 2-5",
        description: "Open corporate bank account for the branch (mandatory since June 2024).",
        details: [
          "Select from major Bahraini banks",
          "Submit branch formation documents",
          "Initial capital deposit (no minimum)",
          "Bank letter confirming account opening",
          "Required for final CR issuance"
        ]
      },
      {
        number: "05",
        icon: Building2,
        title: "CR & License Issuance",
        timeline: "Day 5-7",
        description: "Commercial Registration and trade license issued by MOIC.",
        details: [
          "Final application review by MOIC",
          "Government fee payment",
          "CR certificate issued via Sijilat",
          "Commercial license for activities",
          "Chamber of Commerce registration"
        ]
      }
    ]
  },
  {
    id: "operations",
    name: "Operational Setup",
    timeline: "3-5 Days",
    description: "Setting up branch operations and staff",
    steps: [
      {
        number: "06",
        icon: Users,
        title: "Branch Manager Registration",
        timeline: "Day 1-3",
        description: "Register branch manager and obtain required signatory cards.",
        details: [
          "Branch manager visa processing",
          "Signatory card application",
          "Authorization to operate account",
          "Corporate ID registration",
          "Manager can be foreign national"
        ]
      },
      {
        number: "07",
        icon: CreditCard,
        title: "LMRA & Final Setup",
        timeline: "Day 3-5",
        description: "Register with LMRA for employee sponsorship and complete setup.",
        details: [
          "LMRA employer registration",
          "Visa quota allocation",
          "Staff visa processing (if needed)",
          "Social insurance registration",
          "Branch fully operational"
        ]
      }
    ]
  }
];

export function BranchProcessTimeline() {
  const [activePhase, setActivePhase] = useState("preparation");

  const currentPhase = phases.find(p => p.id === activePhase) || phases[0];

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
            Branch Registration Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-accent">Branch Office</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A 3-phase process that gets your branch registered in 7-10 business days
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all",
                activePhase === phase.id
                  ? "bg-accent text-primary shadow-sm"
                  : "bg-white text-muted-foreground border border-border hover:border-accent"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                activePhase === phase.id
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground"
              )}>
                {index + 1}
              </div>
              <div className="text-left">
                <p className="font-semibold">{phase.name}</p>
                <p className="text-xs opacity-70">{phase.timeline}</p>
              </div>
            </button>
          ))}
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
                  Total Timeline: <span className="text-accent">7-10 Business Days</span>
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
            {currentPhase.steps.map((step, index) => {
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
            <span className="font-semibold text-primary">Complete Branch Registration in 7-10 Business Days</span>
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
