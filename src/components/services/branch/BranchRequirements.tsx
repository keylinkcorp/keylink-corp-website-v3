import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle, Globe, Building, Plane } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

type JurisdictionType = "gcc" | "western" | "asia";

const jurisdictions = [
  { id: "gcc" as JurisdictionType, name: "GCC Countries", icon: Building, description: "Saudi, UAE, Qatar, Kuwait, Oman" },
  { id: "western" as JurisdictionType, name: "Western Countries", icon: Globe, description: "UK, EU, US, Canada, Australia" },
  { id: "asia" as JurisdictionType, name: "Asia-Pacific", icon: Plane, description: "India, China, Singapore, etc." },
];

const requirementsByJurisdiction = {
  gcc: {
    documents: [
      { name: "Certificate of Incorporation", required: true, note: "Attested by Chamber of Commerce" },
      { name: "Memorandum of Association", required: true, note: "Arabic translation required" },
      { name: "Board Resolution", required: true, note: "Authorizing branch establishment" },
      { name: "Good Standing Certificate", required: true, note: "Recent, within 3 months" },
      { name: "Financial Statements", required: true, note: "Last 2 years audited" },
      { name: "Parent Company CR Copy", required: true, note: "Trade license copy" },
      { name: "Shareholder Details", required: true, note: "Passport copies of directors" },
      { name: "Power of Attorney", required: true, note: "If applying remotely" },
    ],
    proTip: "GCC documents typically require only Chamber attestation without Apostille, streamlining the process.",
    timeline: "3-5 business days for document verification"
  },
  western: {
    documents: [
      { name: "Certificate of Incorporation", required: true, note: "Apostilled (Hague Convention)" },
      { name: "Memorandum & Articles", required: true, note: "Apostilled + Arabic translation" },
      { name: "Board Resolution", required: true, note: "Apostilled + notarized" },
      { name: "Good Standing Certificate", required: true, note: "Apostilled, within 3 months" },
      { name: "Audited Financial Statements", required: true, note: "2 years, apostilled" },
      { name: "Director Passport Copies", required: true, note: "Certified copies" },
      { name: "Company Structure Chart", required: true, note: "Showing ownership hierarchy" },
      { name: "Power of Attorney", required: true, note: "Apostilled for Keylink representation" },
    ],
    proTip: "All documents must be Apostilled under the Hague Convention. We coordinate with certified translators for Arabic versions.",
    timeline: "5-7 business days for document verification"
  },
  asia: {
    documents: [
      { name: "Certificate of Incorporation", required: true, note: "Embassy legalization required" },
      { name: "Memorandum of Association", required: true, note: "Embassy legalized + Arabic translation" },
      { name: "Board Resolution", required: true, note: "Notarized + embassy legalized" },
      { name: "Good Standing Certificate", required: true, note: "Recent, embassy legalized" },
      { name: "Audited Financial Statements", required: true, note: "2 years, legalized" },
      { name: "Director Details", required: true, note: "Passport copies + CVs" },
      { name: "Parent Company Profile", required: true, note: "Company brochure/capability statement" },
      { name: "Power of Attorney", required: true, note: "Embassy legalized" },
    ],
    proTip: "Non-Hague countries require legalization through Bahrain Embassy in the parent country. Allow extra time for this process.",
    timeline: "7-10 business days for document verification"
  }
};

export function BranchRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeJurisdiction, setActiveJurisdiction] = useState<JurisdictionType>("gcc");

  const currentRequirements = requirementsByJurisdiction[activeJurisdiction];

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
              <FileText className="w-4 h-4" />
              Documentation Requirements
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Branch Registration{" "}
              <span className="text-accent">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Required documents vary based on where your parent company is registered
            </p>
          </motion.div>

          {/* Jurisdiction Tabs */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-4 mb-12">
            {jurisdictions.map((jurisdiction) => (
              <button
                key={jurisdiction.id}
                onClick={() => setActiveJurisdiction(jurisdiction.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl transition-all",
                  activeJurisdiction === jurisdiction.id
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-white text-muted-foreground border border-border hover:border-accent"
                )}
              >
                <jurisdiction.icon className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-semibold">{jurisdiction.name}</p>
                  <p className="text-xs opacity-70">{jurisdiction.description}</p>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Requirements List */}
          <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-primary text-white">
                <h3 className="text-xl font-bold">Required Documents</h3>
                <p className="text-white/70 text-sm mt-1">{currentRequirements.timeline}</p>
              </div>

              {/* Documents List */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {currentRequirements.documents.map((doc, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-primary">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip */}
              <div className="p-6 border-t border-border bg-accent/10">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Pro Tip</p>
                    <p className="text-sm text-muted-foreground">{currentRequirements.proTip}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={staggerItem} className="mt-8 text-center">
            <p className="text-muted-foreground">
              Not sure what documents you need? <a href="/free-consultation" className="text-accent font-semibold hover:underline">Get a free document checklist →</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
