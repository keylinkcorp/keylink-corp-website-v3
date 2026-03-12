import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle, User, Home, Building2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RequirementType = "landlord" | "tenant" | "property";

const requirementTabs = [
  { id: "landlord" as RequirementType, name: "Landlord", icon: User, description: "Property owner documents" },
  { id: "tenant" as RequirementType, name: "Tenant", icon: User, description: "Renter documents" },
  { id: "property" as RequirementType, name: "Property", icon: Home, description: "Premises documents" },
];

const requirementsByType = {
  landlord: {
    documents: [
      { name: "Valid CPR (Bahraini) or Passport (Foreign)", required: true },
      { name: "Property ownership certificate (Tapu)", required: true },
      { name: "Municipality clearance (if applicable)", required: false },
      { name: "Authorization letter (if representative)", required: false },
      { name: "Previous lease contract (if renewal)", required: false },
      { name: "Bank account details (for rent collection)", required: false },
    ],
    proTip: "Ensure all ID documents are valid and unexpired. We verify ownership through official land registry records."
  },
  tenant: {
    documents: [
      { name: "Valid CPR (Bahraini) or Passport (Foreign)", required: true },
      { name: "Residence visa copy (for expats)", required: true },
      { name: "Employment letter or income proof", required: false },
      { name: "Previous landlord reference (optional)", required: false },
      { name: "Company CR copy (for commercial leases)", required: false },
      { name: "Authorized signatory letter (for companies)", required: false },
    ],
    proTip: "Commercial tenants must provide valid CR. For residential, employment verification helps with faster processing."
  },
  property: {
    documents: [
      { name: "Property address and description", required: true },
      { name: "Building permit or completion certificate", required: false },
      { name: "Floor plan or unit layout", required: false },
      { name: "Electricity account number", required: true },
      { name: "Water account number", required: true },
      { name: "Property photos (recommended)", required: false },
    ],
    proTip: "Accurate property description prevents registration delays. Include plot number, building name, and unit number."
  }
};

export function LeaseRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeType, setActiveType] = useState<RequirementType>("landlord");

  const currentRequirements = requirementsByType[activeType];

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
              Lease Registration{" "}
              <span className="text-accent">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Documents needed from landlord, tenant, and for the property
            </p>
          </motion.div>

          {/* Requirement Tabs */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-4 mb-12">
            {requirementTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl transition-all",
                  activeType === tab.id
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-white text-muted-foreground border border-border hover:border-accent"
                )}
              >
                <tab.icon className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-semibold">{tab.name}</p>
                  <p className="text-xs opacity-70">{tab.description}</p>
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
                <p className="text-white/70 text-sm mt-1">
                  {activeType === "landlord" ? "Documents required from property owner" :
                   activeType === "tenant" ? "Documents required from renter" :
                   "Documents related to the premises"}
                </p>
              </div>

              {/* Documents List */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {currentRequirements.documents.map((doc, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <CheckCircle2 className={cn(
                        "w-5 h-5 flex-shrink-0 mt-0.5",
                        doc.required ? "text-accent" : "text-muted-foreground"
                      )} />
                      <div>
                        <p className="font-semibold text-primary">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.required ? "Required" : "Optional"}
                        </p>
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
            <div className="bg-white rounded-xl p-6 border border-border max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">Important:</span> All documents must be in Arabic or accompanied by a certified Arabic translation. We handle translation as part of our service package.
              </p>
            </div>
            <p className="text-muted-foreground mt-6">
              Not sure what you need? <a href="/free-consultation" className="text-accent font-semibold hover:underline">Get a free document checklist →</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
