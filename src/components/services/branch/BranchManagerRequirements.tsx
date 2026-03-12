import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, CheckCircle2, AlertCircle, Briefcase, CreditCard } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const managerRequirements = [
  { text: "Must be at least 21 years old", icon: CheckCircle2 },
  { text: "Hold valid Bahrain residence permit", icon: CheckCircle2 },
  { text: "University degree or equivalent experience", icon: CheckCircle2 },
  { text: "Clean criminal record (background check)", icon: CheckCircle2 },
  { text: "Authorized signatory in parent company", icon: CheckCircle2 },
  { text: "Available for local government meetings", icon: CheckCircle2 },
];

const visaOptions = [
  {
    type: "Investor Visa",
    icon: Briefcase,
    description: "For the branch owner/shareholder from parent company",
    benefits: [
      "2-year validity, renewable",
      "Multiple entry privileges",
      "Can sponsor family members",
      "No local sponsor required",
    ],
    cost: "BHD 350",
    timeline: "7-10 business days"
  },
  {
    type: "Work Visa",
    icon: CreditCard,
    description: "For hired branch manager or transferred employees",
    benefits: [
      "2-year validity, renewable",
      "Sponsored by branch company",
      "Can be promoted to manager role",
      "Standard employment rights",
    ],
    cost: "BHD 300",
    timeline: "5-7 business days"
  },
];

export function BranchManagerRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <User className="w-4 h-4" />
              Branch Manager
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Manager & Visa{" "}
              <span className="text-accent">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every branch office must appoint a resident manager in Bahrain
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Manager Requirements */}
            <motion.div variants={staggerItem}>
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold text-primary mb-6">Manager Eligibility</h3>
                
                <div className="space-y-4 mb-8">
                  {managerRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <req.icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{req.text}</span>
                    </div>
                  ))}
                </div>

                {/* 2024 Update Callout */}
                <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm">2024 Regulatory Update</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Branch managers must now complete LMRA employer registration within 30 days of CR issuance. Keylink handles this automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visa Options */}
            <motion.div variants={staggerItem} className="space-y-6">
              {visaOptions.map((visa, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border-2 border-border shadow-sm p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <visa.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{visa.type}</h4>
                      <p className="text-sm text-muted-foreground">{visa.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {visa.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Processing Fee</p>
                      <p className="font-bold text-accent">{visa.cost}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-primary">{visa.timeline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
