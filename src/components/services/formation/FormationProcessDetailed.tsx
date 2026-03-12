import { useState } from "react";
import { 
  ShieldCheck, Building2, Landmark, Users, MapPin, FileCheck, 
  Stamp, Wallet, ClipboardList, HeartPulse, IdCard, CreditCard,
  Clock, CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  requirements?: string[];
  timeframe: string;
}

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const phases: Phase[] = [
  {
    id: "phase-1",
    title: "Phase 1",
    subtitle: "Initial Registration and Documentation",
    steps: [
      {
        icon: ShieldCheck,
        title: "Security Approval Application",
        description: "The company formation process begins with security approval from Bahrain's Ministry of Interior, verifying backgrounds of shareholders and directors. Our team handles document preparation and submission, ensuring 100% approval success for eligible applicants.",
        requirements: [
          "Passport copies of shareholders/directors",
          "Security clearance application form",
          "Professional CV for each shareholder",
          "Proof of address"
        ],
        timeframe: "3-5 working days"
      },
      {
        icon: Building2,
        title: "Company Name Registration",
        description: "Submit up to four commercial names for approval by the Ministry of Industry and Commerce (MOIC). Names must comply with local regulations and reflect your business activities.",
        timeframe: "1-2 days"
      },
      {
        icon: Landmark,
        title: "Capital Requirements",
        description: "Determine the minimum share capital based on your company type and business plan. For limited liability companies (WLL), capital is based on operational needs. Once deposited, your bank issues a capital deposit certificate required for registration.",
        timeframe: "Same day"
      },
      {
        icon: Users,
        title: "Partner & Director Setup",
        description: "Select partners based on skills and resources. Appoint a director to manage daily operations and ensure legal compliance. Designate an authorized signatory (typically the director) to sign official documents on behalf of the company.",
        timeframe: "Same day"
      }
    ]
  },
  {
    id: "phase-2",
    title: "Phase 2",
    subtitle: "Location Setup and Government Approvals",
    steps: [
      {
        icon: MapPin,
        title: "Business Address Registration",
        description: "Register your company with a valid business address. Choose between a physical office location or a virtual office address. Virtual offices offer cost savings while meeting legal requirements and providing a professional business presence.",
        timeframe: "1-2 days"
      },
      {
        icon: FileCheck,
        title: "Sector-Specific Approvals",
        description: "Certain business activities require additional approvals from regulatory bodies. Industries like finance, healthcare, and energy need specialized licenses. Our team identifies all required permits for your specific business type.",
        timeframe: "Varies by sector"
      },
      {
        icon: Stamp,
        title: "Document Notarization",
        description: "Key company documents, including the Memorandum of Association and Deed of Association, must be notarized by a certified notary office in Bahrain. This step validates your company's legal structure and is mandatory for registration.",
        timeframe: "Same day"
      },
      {
        icon: Wallet,
        title: "Corporate Bank Account",
        description: "Open a corporate bank account to deposit share capital and manage business finances. We assist with account opening at all major Bahrain banks.",
        requirements: [
          "Business plan",
          "Capital deposit certificate",
          "Shareholder identification",
          "Company registration papers"
        ],
        timeframe: "2-3 days"
      }
    ]
  },
  {
    id: "phase-3",
    title: "Phase 3",
    subtitle: "Final Registrations and Compliance",
    steps: [
      {
        icon: ClipboardList,
        title: "LMRA Registration",
        description: "Register with the Labour Market Regulatory Authority (LMRA) to hire employees. This registration is mandatory for obtaining work visas and residence permits for foreign staff.",
        timeframe: "1-2 days"
      },
      {
        icon: HeartPulse,
        title: "Medical Examination",
        description: "Required for certain roles, particularly in healthcare and food services. Employees must complete medical examinations at approved health facilities.",
        timeframe: "1-2 days"
      },
      {
        icon: IdCard,
        title: "Residence Permit",
        description: "Foreign nationals living or working in Bahrain require a valid Residence Permit. Requirements include company registration documents, proof of employment, and a valid business address.",
        timeframe: "3-5 days"
      },
      {
        icon: CreditCard,
        title: "Bahrain ID Card (CPR)",
        description: "All employees must obtain a Bahrain ID Card (CPR - Central Population Registry). This applies to both Bahraini nationals and foreign workers and is required for legal employment.",
        timeframe: "2-3 days"
      }
    ]
  }
];

export function FormationProcessDetailed() {
  const [activePhase, setActivePhase] = useState("phase-1");
  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
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
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            Step-by-Step Process
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Your Complete Formation Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Our comprehensive 3-phase process ensures a smooth and compliant company formation experience.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`relative px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activePhase === phase.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-muted-foreground hover:bg-primary/5 border border-border"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activePhase === phase.id
                    ? "bg-accent text-primary"
                    : "bg-primary/10 text-primary"
                }`}>
                  {index + 1}
                </span>
                <span className="hidden sm:block">
                  <span className="block text-left font-semibold">{phase.title}</span>
                  <span className={`block text-xs ${
                    activePhase === phase.id ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {phase.subtitle}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Steps Accordion */}
        {activePhaseData && (
          <div className="max-w-4xl mx-auto relative">
            {/* Solid vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-accent hidden md:block" />
            
            <Accordion 
              type="single" 
              collapsible 
              defaultValue={`${activePhase}-step-0`}
              key={activePhase}
              className="space-y-6"
            >
              {activePhaseData.steps.map((step, stepIndex) => {
                const StepIcon = step.icon;
                const stepValue = `${activePhase}-step-${stepIndex}`;

                return (
                  <AccordionItem 
                    key={stepValue} 
                    value={stepValue} 
                    className="border-none"
                  >
                    <div className="flex gap-6">
                      {/* Node */}
                      <div className="relative z-10 hidden md:block">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm border-4 border-white shadow-sm">
                          {String(stepIndex + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="flex-1 bg-white rounded-xl border border-border overflow-hidden">
                        <AccordionTrigger className="w-full px-6 py-4 hover:no-underline hover:bg-muted/30 [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs md:hidden">
                              {String(stepIndex + 1).padStart(2, '0')}
                            </div>
                            <StepIcon className="w-5 h-5 text-accent hidden md:block" />
                            <h3 className="text-lg font-bold text-left">{step.title}</h3>
                            <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded ml-auto mr-2">
                              {step.timeframe}
                            </span>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="px-6 pb-6 pt-4">
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          {step.requirements && step.requirements.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-2">
                              {step.requirements.map((req, reqIndex) => (
                                <div key={reqIndex} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{req}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        )}

        {/* Timeline badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full text-white">
            <Clock className="h-5 w-5 text-accent" />
            <span className="font-medium">Complete Formation in 3-7 Business Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
