import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  User, 
  Building2, 
  GitBranch,
  CheckCircle2,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

const applicantTypes = [
  {
    id: "individual",
    icon: User,
    name: "Individual Applicant",
    requirements: [
      "Valid passport (6+ months validity)",
      "Passport-sized photographs (white background)",
      "Proof of residential address",
      "Professional CV (for licensed professions)",
      "Power of Attorney (for remote registration)",
      "Office lease agreement or virtual office subscription"
    ]
  },
  {
    id: "corporate",
    icon: Building2,
    name: "Corporate Shareholder",
    requirements: [
      "Certificate of Incorporation (apostilled)",
      "Memorandum & Articles of Association",
      "Board Resolution authorizing Bahrain entity",
      "Certificate of Good Standing (recent)",
      "Passport copies of authorized signatories",
      "Power of Attorney"
    ]
  },
  {
    id: "branch",
    icon: GitBranch,
    name: "Branch Office",
    requirements: [
      "Parent company incorporation documents (apostilled)",
      "Parent company financial statements (2 years)",
      "Board Resolution to establish Bahrain branch",
      "Appointment letter for Branch Manager",
      "Branch Manager passport and CV",
      "Registered office address in Bahrain"
    ]
  }
];

export function BLRequirementsChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("individual");

  const selectedType = applicantTypes.find(t => t.id === activeTab)!;

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileText className="w-4 h-4" />
              Documentation
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What Documents <span className="text-accent">Do You Need?</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Requirements vary by applicant type. We guide you through every item.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {applicantTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 transition-all font-semibold",
                activeTab === type.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-foreground border-border hover:border-accent hover:shadow-sm"
              )}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Requirements Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <selectedType.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">{selectedType.name} Requirements</h3>
            </div>

            <div className="space-y-4">
              {selectedType.requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pro Tip */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="flex gap-4 p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
              <p className="text-muted-foreground leading-relaxed">
                Don't have all documents ready? We can begin with what you have and guide you on 
                obtaining the rest. Many clients start with just a passport copy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
