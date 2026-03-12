import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Briefcase, 
  Users, 
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const visaCategories = [
  {
    id: "work",
    icon: Briefcase,
    title: "Work Visa",
    documents: [
      "Valid passport (6+ months validity)",
      "Passport-size photos (white background)",
      "Employment contract",
      "Educational certificates (attested)",
      "Company CR and trade license copies",
      "Employer authorization letter",
      "Medical fitness certificate",
      "Police clearance (some nationalities)"
    ]
  },
  {
    id: "family",
    icon: Users,
    title: "Family Visa",
    documents: [
      "Sponsor's valid CPR card copy",
      "Sponsor's passport copy",
      "Dependent's passport (6+ months validity)",
      "Marriage certificate (attested)",
      "Children's birth certificates (attested)",
      "Salary certificate (BHD 400+ minimum)",
      "Tenancy agreement or housing proof",
      "Passport-size photos of dependents"
    ]
  },
  {
    id: "golden",
    icon: GraduationCap,
    title: "Golden Visa",
    documents: [
      "Valid passport (6+ months validity)",
      "Passport-size photos",
      "Proof of investment (property deed, bank statements)",
      "Business ownership documents (if applicable)",
      "Employment contract showing salary",
      "Educational certificates (for professionals)",
      "Pension statements (for retirees)",
      "Family documents (if including dependents)"
    ]
  }
];

const medicalRequirements = [
  "Blood test (HIV, Hepatitis B/C, syphilis)",
  "Chest X-ray (tuberculosis screening)",
  "General physical examination",
  "BMI and vital signs check",
  "Test conducted at approved health centers only"
];

export function VisaRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("work");
  const [showMedical, setShowMedical] = useState(false);

  const currentCategory = visaCategories.find(c => c.id === activeCategory) || visaCategories[0];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Requirements</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Document Requirements
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prepare these documents for a smooth visa application process
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {visaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white border border-border hover:border-accent"
                }`}
              >
                <category.icon className={`w-5 h-5 ${
                  activeCategory === category.id ? "text-accent" : "text-primary"
                }`} />
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Documents List */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <currentCategory.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{currentCategory.title} Documents</h3>
                <p className="text-sm text-muted-foreground">Required for application</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {currentCategory.documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Medical Requirements */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Medical Examination Required
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    All work visa applicants must complete a medical fitness test at an approved health center in Bahrain.
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMedical(!showMedical)}
                    className="text-blue-700 hover:text-blue-900 hover:bg-blue-100 p-0"
                  >
                    {showMedical ? "Hide" : "View"} Medical Tests
                    {showMedical ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Button>

                  {showMedical && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-4 space-y-2"
                    >
                      {medicalRequirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-blue-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          {req}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
