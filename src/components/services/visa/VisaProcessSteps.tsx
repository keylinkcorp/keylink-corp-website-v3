import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  ClipboardCheck, 
  FileText, 
  Building2, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const phases = [
  {
    id: "eligibility",
    title: "Eligibility & Documents",
    icon: ClipboardCheck,
    steps: [
      {
        title: "Eligibility Assessment",
        description: "We evaluate your visa requirements based on employment type, nationality, and purpose of stay."
      },
      {
        title: "Document Collection",
        description: "Gather passport, photos, educational certificates, employment contract, and company documents."
      },
      {
        title: "Document Verification",
        description: "All documents are verified and attested as required by Bahrain immigration authorities."
      },
      {
        title: "Application Preparation",
        description: "Complete application forms and compile the full document package for submission."
      }
    ]
  },
  {
    id: "submission",
    title: "Application & LMRA",
    icon: FileText,
    steps: [
      {
        title: "LMRA Work Permit",
        description: "Submit work permit application to the Labour Market Regulatory Authority for approval."
      },
      {
        title: "Visa Application",
        description: "Upon LMRA approval, submit visa application to the immigration department."
      },
      {
        title: "Fee Payment",
        description: "Process all government fees including visa fees, work permit fees, and processing charges."
      },
      {
        title: "Application Tracking",
        description: "Monitor application status and address any queries from authorities promptly."
      }
    ]
  },
  {
    id: "approval",
    title: "Approval & ID Card",
    icon: CheckCircle2,
    steps: [
      {
        title: "Visa Issuance",
        description: "Receive visa approval and arrange visa stamping in passport (if applicant is outside Bahrain)."
      },
      {
        title: "Medical Examination",
        description: "Complete mandatory medical tests at an approved health center in Bahrain."
      },
      {
        title: "Fingerprinting",
        description: "Biometric registration at the immigration office for ID card processing."
      },
      {
        title: "CPR Card Delivery",
        description: "Receive your Central Population Registry (CPR) card - your Bahrain residency ID."
      }
    ]
  }
];

export function VisaProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState("eligibility");

  const currentPhase = phases.find(p => p.id === activePhase) || phases[0];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Process</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            How Visa Processing Works
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear 3-phase process from application to your CPR card
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Phase Tabs */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                activePhase === phase.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white border border-border hover:border-accent"
              }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activePhase === phase.id ? "bg-white/20" : "bg-accent/10"
                }`}>
                  <phase.icon className={`w-5 h-5 ${
                    activePhase === phase.id ? "text-white" : "text-accent"
                  }`} />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Phase {index + 1}</div>
                  <div className="font-semibold">{phase.title}</div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Phase Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {currentPhase.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Timeline Indicator */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 flex justify-center items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="font-medium text-primary">Total Processing Time:</span>
            <span>5-10 Business Days (Standard)</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent font-medium">Express Available</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
