import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  Briefcase, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Calculator,
  Clock,
  FileCheck,
  Phone
} from "lucide-react";
import { z } from "zod";
import { Link } from "react-router-dom";

// Validation schema
const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
});

type BusinessStatus = "new" | "existing" | "expansion" | null;
type PrimaryNeed = "formation" | "advisory" | "compliance" | "full-service" | null;
type CompanyType = "spc" | "wll" | "branch" | "holding" | null;

interface LeadForm {
  name: string;
  email: string;
  phone: string;
}

interface CalculatorResult {
  engagementType: string;
  timeline: string;
  services: string[];
}

export function ConsultingCostCalculator() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessStatus, setBusinessStatus] = useState<BusinessStatus>(null);
  const [primaryNeed, setPrimaryNeed] = useState<PrimaryNeed>(null);
  const [companyType, setCompanyType] = useState<CompanyType>(null);
  const [teamSize, setTeamSize] = useState<string>("1-5");
  const [leadForm, setLeadForm] = useState<LeadForm>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const getTotalSteps = () => {
    if (primaryNeed === "formation") return 5;
    return 4;
  };

  const getSteps = () => {
    const baseSteps = [
      { label: "Business Status", icon: Building2 },
      { label: "Primary Need", icon: Briefcase },
    ];
    
    if (primaryNeed === "formation") {
      baseSteps.push({ label: "Company Type", icon: Building2 });
    }
    
    baseSteps.push({ label: "Team Size", icon: Users });
    baseSteps.push({ label: "Your Details", icon: FileCheck });
    
    return baseSteps;
  };

  const calculateResult = (): CalculatorResult => {
    let engagementType = "";
    let timeline = "";
    let services: string[] = [];

    if (primaryNeed === "full-service") {
      engagementType = "Comprehensive Business Partner Package";
      timeline = "3-4 weeks to full operational readiness";
      services = [
        "Company Formation & CR",
        "Business Licensing",
        "Bank Account Opening",
        "Visa Processing",
        "PRO Services",
        "Ongoing Compliance Support"
      ];
    } else if (primaryNeed === "formation") {
      engagementType = "Company Formation Package";
      timeline = "3-7 business days for formation";
      services = [
        "Company Formation",
        "Commercial Registration",
        "Business License",
        "Bank Account Assistance"
      ];
    } else if (primaryNeed === "advisory") {
      engagementType = "Strategic Advisory Engagement";
      timeline = "Initial strategy within 1-2 weeks";
      services = [
        "Market Entry Strategy",
        "Business Structure Optimization",
        "Regulatory Navigation",
        "Growth Planning"
      ];
    } else {
      engagementType = "Compliance & Recovery Package";
      timeline = "Assessment within 5 business days";
      services = [
        "Compliance Audit",
        "Remediation Planning",
        "Penalty Resolution",
        "Ongoing PRO Services"
      ];
    }

    return { engagementType, timeline, services };
  };

  const handleNext = () => {
    if (currentStep === getTotalSteps()) {
      // Validate lead form
      const result = leadSchema.safeParse(leadForm);
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
      setErrors({});
      setShowResults(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return businessStatus !== null;
      case 2: return primaryNeed !== null;
      case 3: 
        if (primaryNeed === "formation") return companyType !== null;
        return teamSize !== "";
      case 4:
        if (primaryNeed === "formation") return teamSize !== "";
        return leadForm.name && leadForm.email && leadForm.phone;
      case 5: return leadForm.name && leadForm.email && leadForm.phone;
      default: return false;
    }
  };

  const renderStepContent = () => {
    const steps = getSteps();
    const totalSteps = getTotalSteps();
    
    // Step 1: Business Status
    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What describes your situation?</h3>
          <div className="grid gap-3">
            {[
              { value: "new", label: "New Market Entrant", desc: "First time starting a business in Bahrain" },
              { value: "existing", label: "Existing Business", desc: "Already operating in Bahrain" },
              { value: "expansion", label: "Regional Expansion", desc: "Expanding from another country" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setBusinessStatus(option.value as BusinessStatus)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  businessStatus === option.value
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <p className="font-medium text-primary">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 2: Primary Need
    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What's your primary need?</h3>
          <div className="grid gap-3">
            {[
              { value: "formation", label: "Company Formation", desc: "Set up a new company entity" },
              { value: "advisory", label: "Strategic Advisory", desc: "Market entry strategy & planning" },
              { value: "compliance", label: "Compliance Support", desc: "Fix issues or ongoing compliance" },
              { value: "full-service", label: "Full-Service Partnership", desc: "End-to-end business support" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setPrimaryNeed(option.value as PrimaryNeed)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  primaryNeed === option.value
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <p className="font-medium text-primary">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Step 3: Company Type (only if formation selected)
    if (currentStep === 3 && primaryNeed === "formation") {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What type of company?</h3>
          <div className="grid gap-3">
            {[
              { value: "spc", label: "Single Person Company (SPC)", desc: "Solo ownership, 100% foreign allowed" },
              { value: "wll", label: "WLL Company", desc: "Partnership structure, 2-50 shareholders" },
              { value: "branch", label: "Branch Office", desc: "Extension of existing foreign company" },
              { value: "holding", label: "Holding Company", desc: "Investment & subsidiary management" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCompanyType(option.value as CompanyType)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  companyType === option.value
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <p className="font-medium text-primary">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Team Size Step
    const teamSizeStep = primaryNeed === "formation" ? 4 : 3;
    if (currentStep === teamSizeStep) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">Expected team size in Bahrain?</h3>
          <div className="grid grid-cols-2 gap-3">
            {["1-5", "6-15", "16-50", "50+"].map((size) => (
              <button
                key={size}
                onClick={() => setTeamSize(size)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  teamSize === size
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <p className="font-semibold text-primary">{size}</p>
                <p className="text-sm text-muted-foreground">employees</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Lead Capture Step
    if (currentStep === totalSteps) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">Get your personalized scope</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                placeholder="Your full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                placeholder="your@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={leadForm.phone}
                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                placeholder="+973 XXXX XXXX"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const result = calculateResult();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0%, transparent 30%)
          `
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Engagement Scope Calculator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Personalized Business Roadmap
            </h2>
            <p className="text-lg text-white/70">
              Answer a few questions to receive a customized scope and timeline for your Bahrain business.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div variants={staggerItem}>
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-accent" />
                  {showResults ? "Your Engagement Scope" : `Step ${currentStep} of ${getTotalSteps()}`}
                </CardTitle>
                {!showResults && (
                  <div className="flex gap-2 mt-4">
                    {getSteps().map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          index + 1 <= currentStep ? "bg-accent" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-6">
                <AnimatePresence mode="wait">
                  {showResults ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {/* Engagement Type */}
                      <div className="bg-accent/10 rounded-xl p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Recommended Engagement</p>
                        <h3 className="text-2xl font-bold text-primary">{result.engagementType}</h3>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                        <Clock className="w-8 h-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Timeline</p>
                          <p className="font-semibold text-primary">{result.timeline}</p>
                        </div>
                      </div>

                      {/* Services Included */}
                      <div>
                        <p className="font-semibold text-primary mb-3">Services Included:</p>
                        <div className="grid gap-2">
                          {result.services.map((service, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-accent" />
                              <span className="text-muted-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild className="btn-gold flex-1">
                          <Link to="/contact">
                            Book Free Consultation
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="tel:+97317000000">
                            <Phone className="w-4 h-4" />
                            Call Now
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {renderStepContent()}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                {!showResults && (
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="bg-accent text-primary hover:bg-accent/90"
                    >
                      {currentStep === getTotalSteps() ? "View Results" : "Next"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                {showResults && (
                  <div className="mt-4">
                    <Button variant="ghost" onClick={handleBack} className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Start Over
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
