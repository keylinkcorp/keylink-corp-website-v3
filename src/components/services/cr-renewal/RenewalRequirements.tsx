import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Building2, 
  User, 
  MapPin, 
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const documentCategories = [
  {
    icon: FileText,
    title: "Current Registration Documents",
    documents: [
      "Current Commercial Registration (CR) certificate",
      "Valid Trade License",
      "Previous year's CR renewal receipt"
    ]
  },
  {
    icon: Building2,
    title: "Business Premises",
    documents: [
      "Valid lease agreement for registered address",
      "Property ownership deed (if owned)",
      "Municipality approval (if applicable)"
    ]
  },
  {
    icon: User,
    title: "Owner/Shareholder Documents",
    documents: [
      "Valid CPR or passport copies of owners",
      "Shareholder resolution for renewal (WLL only)",
      "Power of Attorney (if using representative)"
    ]
  },
  {
    icon: MapPin,
    title: "Additional Requirements",
    documents: [
      "LMRA clearance certificate",
      "Chamber of Commerce membership (if applicable)",
      "Any pending amendment documents"
    ]
  }
];

const penaltyStructure = [
  { period: "1st Month Late", penalty: "BHD 20" },
  { period: "2nd Month Late", penalty: "BHD 40" },
  { period: "3rd Month Late", penalty: "BHD 60" },
  { period: "4th Month Late", penalty: "BHD 80" },
  { period: "5th Month Late", penalty: "BHD 100" },
  { period: "6+ Months Late", penalty: "CR Cancellation Risk" }
];

export function RenewalRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPenalties, setShowPenalties] = useState(false);

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Requirements</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            What You Need for CR Renewal
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gather these documents to ensure a smooth and quick renewal process
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Document Checklist */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {documentCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Penalty Warning Section */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-red-50 border border-red-200 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Avoid Late Renewal Penalties
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  Late CR renewal attracts penalties starting from BHD 20 and increasing monthly. 
                  Extended delays may result in CR cancellation requiring full re-registration.
                </p>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPenalties(!showPenalties)}
                  className="text-red-700 hover:text-red-900 hover:bg-red-100 p-0"
                >
                  {showPenalties ? "Hide" : "View"} Penalty Structure
                  {showPenalties ? (
                    <ChevronUp className="w-4 h-4 ml-1" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Button>

                {showPenalties && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {penaltyStructure.map((item, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg text-center ${
                            index === penaltyStructure.length - 1
                              ? "bg-red-200 col-span-2 md:col-span-1"
                              : "bg-red-100"
                          }`}
                        >
                          <div className="text-xs text-red-700 mb-1">{item.period}</div>
                          <div className={`font-bold ${
                            index === penaltyStructure.length - 1 ? "text-red-700" : "text-red-900"
                          }`}>
                            {item.penalty}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
