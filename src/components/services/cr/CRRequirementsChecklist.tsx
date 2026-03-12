import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Building2, 
  FileText,
  CheckCircle2,
  Download,
  Globe,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "individual", label: "Individual Applicants", icon: User, count: 6 },
  { id: "corporate", label: "Corporate Shareholders", icon: Building2, count: 6 },
  { id: "all", label: "All Applicants", icon: FileText, count: 5 }
];

const requirements = {
  individual: [
    {
      title: "Valid Passport Copy",
      description: "Clear copy of passport with minimum 6 months validity",
      required: true
    },
    {
      title: "Proof of Address",
      description: "Utility bill or bank statement from home country (not older than 3 months)",
      required: true
    },
    {
      title: "Professional CV",
      description: "Resume highlighting relevant experience (required for certain activities)",
      required: false
    },
    {
      title: "Passport-Size Photos",
      description: "2 recent photos with white background",
      required: true
    },
    {
      title: "Educational Certificates",
      description: "Degree certificates for professional services (if applicable)",
      required: false
    },
    {
      title: "No Objection Certificate",
      description: "From current employer if employed in Bahrain",
      required: false
    }
  ],
  corporate: [
    {
      title: "Certificate of Incorporation",
      description: "Certified copy of parent company's incorporation certificate",
      required: true
    },
    {
      title: "Memorandum of Association",
      description: "Certified MOA/Articles of Association of parent company",
      required: true
    },
    {
      title: "Board Resolution",
      description: "Resolution authorizing establishment in Bahrain and appointing representatives",
      required: true
    },
    {
      title: "Good Standing Certificate",
      description: "Certificate confirming company is active and compliant in home jurisdiction",
      required: true
    },
    {
      title: "Audited Financial Statements",
      description: "Last 2 years audited accounts (for branch offices)",
      required: false
    },
    {
      title: "Parent Company Profile",
      description: "Company brochure or profile describing business activities",
      required: false
    }
  ],
  all: [
    {
      title: "Office Lease Agreement",
      description: "Commercial address lease OR virtual office subscription",
      required: true
    },
    {
      title: "Power of Attorney",
      description: "Authorizing Keylink to act on your behalf (for remote registration)",
      required: false
    },
    {
      title: "Business Plan",
      description: "Required for certain regulated activities (financial services, etc.)",
      required: false
    },
    {
      title: "Bank Reference Letter",
      description: "May be required for certain business activities",
      required: false
    },
    {
      title: "Activity-Specific Permits",
      description: "Pre-approvals from relevant authorities for regulated sectors",
      required: false
    }
  ]
};

export function CRRequirementsChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10 mb-4">
              <FileText className="w-4 h-4" />
              Documentation
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What Documents Do You Need for{" "}
            <span className="text-accent">CR Registration</span>?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Required documents vary based on your applicant type and business activities
          </motion.p>
        </motion.div>

        {/* Tab Selector - Enhanced with count badges */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all font-semibold",
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-foreground border-border hover:border-accent hover:shadow-sm"
              )}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
              <span className={cn(
                "px-2.5 py-0.5 rounded-full text-sm font-bold",
                activeTab === tab.id
                  ? "bg-accent text-primary"
                  : "bg-secondary text-muted-foreground"
              )}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Requirements List - Enhanced */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b-2 border-border bg-secondary/40">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  {(() => {
                    const Icon = tabs.find(t => t.id === activeTab)!.icon;
                    return <Icon className="w-6 h-6 text-accent" />;
                  })()}
                </span>
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
            </div>
            
            <div className="divide-y-2 divide-border/50">
              {requirements[activeTab as keyof typeof requirements].map((req, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-start gap-5 p-6 transition-all hover:-translate-y-0.5 hover:shadow-sm",
                    req.required ? "bg-accent/5 hover:bg-accent/10" : "hover:bg-secondary/50"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                    req.required ? "bg-accent/20" : "bg-secondary border-2 border-dashed border-border"
                  )}>
                    {req.required ? (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h4 className="font-bold text-lg">{req.title}</h4>
                      {req.required ? (
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-lg">
                          Required
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-semibold rounded-lg border border-dashed border-border">
                          If Applicable
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Remote Registration Callout - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mt-10"
        >
          <div className="flex items-start gap-5 p-8 bg-accent/5 border-2 border-accent/20 rounded-2xl hover:border-accent/40 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Globe className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Remote Registration Available</h4>
              <p className="text-lg text-muted-foreground mb-4">
                Can't visit Bahrain? We can complete your entire CR registration remotely using 
                a Power of Attorney. Simply provide your documents, and we'll handle everything else.
              </p>
              <a 
                href="/contact"
                className="text-accent font-bold hover:underline inline-flex items-center gap-2 text-lg"
              >
                Learn about remote registration →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Download Checklist CTA - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Need a complete document checklist for your specific case?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Get Personalized Checklist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
