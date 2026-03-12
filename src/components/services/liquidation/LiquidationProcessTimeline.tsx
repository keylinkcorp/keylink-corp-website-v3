import { useState } from "react";
import { 
  FileText, 
  CheckCircle2,
  Clock,
  ArrowRight,
  Users,
  Wallet,
  Building2,
  Shield,
  CreditCard,
  Landmark
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
    id: "initiation",
    name: "Initiation",
    timeline: "Week 1",
    description: "Liquidator appointment and financial assessment",
    steps: [
      {
        number: "01",
        icon: FileText,
        title: "Liquidator Appointment",
        timeline: "Day 1-2",
        description: "Formal appointment of liquidator and notification to authorities.",
        details: [
          "Board resolution appointing liquidator",
          "Notification to MOIC via Sijilat",
          "Publication in official gazette",
          "Freeze on new transactions"
        ]
      },
      {
        number: "02",
        icon: Wallet,
        title: "Financial Assessment",
        timeline: "Day 2-5",
        description: "Complete inventory of assets, liabilities, and creditor identification.",
        details: [
          "Asset and liability inventory",
          "Outstanding debt compilation",
          "Employee entitlement calculation",
          "Creditor identification and notification"
        ]
      }
    ]
  },
  {
    id: "clearances",
    name: "Ministry Clearances",
    timeline: "Week 2-4",
    description: "Coordinating with all 7 government ministries",
    steps: [
      {
        number: "03",
        icon: Users,
        title: "LMRA Clearance",
        timeline: "Day 5-10",
        description: "Employee visa cancellations and work permit settlements.",
        details: [
          "Employee visa cancellations",
          "LMRA fee settlement",
          "Work permit surrenders",
          "Exit visa processing"
        ]
      },
      {
        number: "04",
        icon: Shield,
        title: "SIO & GOSI Clearance",
        timeline: "Day 10-15",
        description: "Social insurance and pension contribution settlements.",
        details: [
          "Social insurance contributions",
          "Employee end-of-service settlements",
          "Clearance certificate issuance",
          "Pension fund reconciliation"
        ]
      },
      {
        number: "05",
        icon: Landmark,
        title: "NBR & Tax Clearance",
        timeline: "Day 15-20",
        description: "VAT deregistration and tax clearance certificate.",
        details: [
          "VAT deregistration (if applicable)",
          "Tax clearance certificate",
          "Outstanding payment settlement",
          "Final tax returns filing"
        ]
      }
    ]
  },
  {
    id: "closure",
    name: "Final Closure",
    timeline: "Week 4-6",
    description: "Asset distribution and CR cancellation",
    steps: [
      {
        number: "06",
        icon: CreditCard,
        title: "Asset Distribution & Bank Closure",
        timeline: "Day 20-25",
        description: "Creditor payments, shareholder distributions, and bank account closure.",
        details: [
          "Creditor payments (priority order)",
          "Shareholder distributions",
          "Bank account closure certificate",
          "Final fund reconciliation"
        ]
      },
      {
        number: "07",
        icon: Building2,
        title: "CR Cancellation",
        timeline: "Day 25-30",
        description: "Final application and company legally dissolved.",
        details: [
          "Final application via Sijilat",
          "Commercial license surrender",
          "CR cancellation certificate issuance",
          "Company legally dissolved"
        ]
      }
    ]
  }
];

export function LiquidationProcessTimeline() {
  const [activePhase, setActivePhase] = useState("initiation");

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
            7-Ministry Clearance Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We <span className="text-accent">Close Your Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive 3-phase process covering all 7 government ministries
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
                  Total Timeline: <span className="text-accent">4-6 Weeks</span>
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
            <span className="font-semibold text-primary">Complete 7-Ministry Clearance in 4-6 Weeks</span>
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
