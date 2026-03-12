import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, User, Building2, FileText, Lightbulb, MapPin, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RequirementItem {
  item: string;
  explanation: string;
  source: string;
  processingTip: string;
  required: boolean;
}

interface RequirementCategory {
  id: string;
  icon: typeof User;
  title: string;
  items: RequirementItem[];
}

const requirementCategories: RequirementCategory[] = [
  {
    id: "individual",
    icon: User,
    title: "For Individual Shareholders",
    items: [
      {
        item: "Valid passport (6+ months validity)",
        explanation: "Your passport must remain valid for at least 6 months beyond your application date. This ensures visa processing won't be affected during company setup.",
        source: "Your country's passport office or embassy",
        processingTip: "Request certified copies in advance - notarization takes 1-2 business days in Bahrain.",
        required: true
      },
      {
        item: "Passport-size photographs (white background)",
        explanation: "Recent photographs (taken within last 6 months) with white background are required for all government submissions and visa applications.",
        source: "Any professional photo studio in Bahrain",
        processingTip: "Most studios near MOIC can provide photos within 30 minutes. Cost: BHD 2-5.",
        required: true
      },
      {
        item: "Proof of residential address (utility bill or bank statement)",
        explanation: "Document must be dated within the last 3 months and clearly show your full name and address. Accepted: utility bills, bank statements, or tenancy agreements.",
        source: "Your bank or utility provider",
        processingTip: "Digital statements are accepted if they contain official letterhead and date.",
        required: true
      },
      {
        item: "Professional CV/resume",
        explanation: "Required for certain regulated activities (financial services, healthcare, education). Should highlight relevant experience and qualifications.",
        source: "Self-prepared or professional CV writing services",
        processingTip: "Focus on industry experience relevant to your planned business activity.",
        required: false
      },
      {
        item: "No objection letter (if currently employed)",
        explanation: "If employed in Bahrain, you need written permission from your employer to engage in business activities. This ensures no conflict with your visa status.",
        source: "Your current employer's HR department",
        processingTip: "Template available - request on company letterhead with authorized signatory.",
        required: false
      },
      {
        item: "Personal bank statement (last 3 months)",
        explanation: "Demonstrates financial capability to invest in and sustain the business. Required for activities with minimum capital requirements.",
        source: "Your personal bank (local or international)",
        processingTip: "Statement should show consistent balance covering your intended share capital.",
        required: true
      }
    ]
  },
  {
    id: "corporate",
    icon: Building2,
    title: "For Corporate Shareholders",
    items: [
      {
        item: "Certificate of incorporation",
        explanation: "Official document proving the parent company's legal existence. Must be issued by the relevant government authority in the country of incorporation.",
        source: "Companies registrar in your home country",
        processingTip: "Requires apostille or embassy legalization for non-Hague Convention countries.",
        required: true
      },
      {
        item: "Memorandum & Articles of Association",
        explanation: "Constitutional documents outlining the parent company's structure, objectives, and shareholder rights. Used to verify authority to invest abroad.",
        source: "Your company's registered office or companies registrar",
        processingTip: "If documents exceed 10 pages, provide certified extract of relevant sections.",
        required: true
      },
      {
        item: "Board resolution authorizing investment in Bahrain",
        explanation: "Formal decision by the parent company's board to establish or invest in a Bahrain entity. Must specify the authorized representative(s).",
        source: "Your company's board of directors",
        processingTip: "Template available - include specific investment amount and representative names.",
        required: true
      },
      {
        item: "Audited financial statements (last 2 years)",
        explanation: "Demonstrates financial health and capability of the parent company. Required for regulated activities and large capital investments.",
        source: "Your company's auditors",
        processingTip: "If startup/new company, management accounts with auditor's letter may be accepted.",
        required: true
      },
      {
        item: "Power of Attorney (for authorized representatives)",
        explanation: "Legal authorization for individuals to sign documents and make decisions on behalf of the corporate shareholder in Bahrain.",
        source: "Notarized by notary public in home country",
        processingTip: "Apostille required. Bahrain PoA format available for your lawyer to review.",
        required: true
      },
      {
        item: "Good standing certificate",
        explanation: "Confirms the parent company is in compliance with local laws and has no outstanding penalties or dissolution proceedings.",
        source: "Companies registrar or relevant authority in home country",
        processingTip: "Typically valid for 3-6 months. Request close to submission date.",
        required: true
      }
    ]
  },
  {
    id: "general",
    icon: FileText,
    title: "General Requirements",
    items: [
      {
        item: "Business plan (required for certain activities)",
        explanation: "Detailed plan required for regulated activities (financial services, education, healthcare) and large-scale investments. Should cover 3-5 years.",
        source: "Self-prepared or business consultancy",
        processingTip: "We provide business plan templates tailored to Bahrain regulatory requirements.",
        required: false
      },
      {
        item: "Initial share capital (varies by company type)",
        explanation: "SPC: No minimum. WLL: BHD 50 minimum (BHD 20,000 for commercial agencies). BSC: BHD 250,000 minimum. Capital must be deposited in Bahrain bank.",
        source: "Wire transfer from shareholders to company bank account",
        processingTip: "Capital can be deposited after CR is issued. No blocked capital requirements.",
        required: true
      },
      {
        item: "Registered business address (physical or virtual)",
        explanation: "Every Bahrain company needs a registered address for official correspondence. Can be physical office, virtual office, or flexi-desk.",
        source: "Commercial landlord or virtual office provider",
        processingTip: "Virtual office from BHD 50/month. Physical office from BHD 200/month in business districts.",
        required: true
      },
      {
        item: "Completed application forms",
        explanation: "Official MOIC forms including company application, shareholder declarations, and director appointments. Must be signed by all parties.",
        source: "Ministry of Industry & Commerce (MOIC) or via Keylink",
        processingTip: "We handle all form preparation - you just sign where indicated.",
        required: true
      },
      {
        item: "Activity description and trade name options",
        explanation: "Clear description of business activities (matched to MOIC's activity codes) and 3 trade name options in order of preference.",
        source: "Shareholders/directors - we help with activity code matching",
        processingTip: "Check name availability on SIJILAT portal. Arabic names required for some activities.",
        required: true
      }
    ]
  }
];

export function RequirementsChecklist() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["individual"]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Dashed pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
              Requirements
            </p>
            <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              What You'll Need
            </h2>
            <p className="text-lg text-muted-foreground leading-[1.8] mb-8">
              Prepare these documents to streamline your company formation process. Click on any item below for detailed information about where to get it and helpful tips.
            </p>

            {/* Pro tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Pro Tip</p>
                <p className="text-muted-foreground text-sm leading-[1.7]">
                  Don't have all documents ready? No problem! Our team can advise on alternatives and help you prepare everything needed for a successful application. We also offer document collection services for corporate shareholders.
                </p>
              </div>
            </motion.div>

            {/* Document stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl border border-border">
                <p className="text-2xl font-bold text-gold">17</p>
                <p className="text-xs text-muted-foreground">Total Documents</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-border">
                <p className="text-2xl font-bold text-gold">3-5</p>
                <p className="text-xs text-muted-foreground">Days to Prepare</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-border">
                <p className="text-2xl font-bold text-gold">Free</p>
                <p className="text-xs text-muted-foreground">Document Review</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Checklists */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {requirementCategories.map((category, index) => {
              const isExpanded = expandedCategories.includes(category.id);
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "bg-white rounded-2xl border overflow-hidden transition-all duration-300",
                    isExpanded
                      ? "border-gold/40 shadow-md"
                      : "border-border hover:border-gold/20"
                  )}
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left"
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                      isExpanded ? "bg-gold text-primary" : "bg-gold/10 text-gold"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.items.length} documents
                      </p>
                    </div>

                    <ChevronDown className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 ml-0 md:ml-16 space-y-3">
                          {category.items.map((reqItem, itemIndex) => {
                            const itemId = `${category.id}-${itemIndex}`;
                            const isItemExpanded = expandedItems.includes(itemId);

                            return (
                              <div
                                key={itemIndex}
                                className={cn(
                                  "rounded-xl border transition-all duration-300",
                                  isItemExpanded
                                    ? "border-gold/30 bg-gold/5"
                                    : "border-border/50 bg-white"
                                )}
                              >
                                <button
                                  onClick={() => toggleItem(itemId)}
                                  className="w-full p-4 flex items-start gap-3 text-left"
                                >
                                  <CheckCircle2 className={cn(
                                    "h-5 w-5 flex-shrink-0 mt-0.5",
                                    reqItem.required ? "text-gold" : "text-muted-foreground"
                                  )} />
                                  <div className="flex-1">
                                    <span className="text-muted-foreground text-sm">
                                      {reqItem.item}
                                    </span>
                                    {!reqItem.required && (
                                      <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                        Optional
                                      </span>
                                    )}
                                  </div>
                                  <ChevronDown className={cn(
                                    "h-4 w-4 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                                    isItemExpanded && "rotate-180"
                                  )} />
                                </button>

                                <AnimatePresence>
                                  {isItemExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 pb-4 pt-0 ml-8 space-y-3">
                                        {/* Explanation */}
                                        <div className="flex gap-2">
                                          <AlertCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                          <p className="text-sm text-muted-foreground leading-[1.6]">
                                            {reqItem.explanation}
                                          </p>
                                        </div>

                                        {/* Source */}
                                        <div className="flex gap-2">
                                          <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                          <div>
                                            <span className="text-xs font-semibold text-primary">Where to get it: </span>
                                            <span className="text-sm text-muted-foreground">{reqItem.source}</span>
                                          </div>
                                        </div>

                                        {/* Pro tip */}
                                        <div className="flex gap-2 bg-gold/10 rounded-lg p-3">
                                          <Clock className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                                          <div>
                                            <span className="text-xs font-semibold text-gold">Pro Tip: </span>
                                            <span className="text-sm text-muted-foreground">{reqItem.processingTip}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
