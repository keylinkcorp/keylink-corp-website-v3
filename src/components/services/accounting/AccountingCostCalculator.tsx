import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  TrendingUp, 
  Wrench, 
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

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Valid phone required"),
});

type BusinessType = "startup" | "sme" | "enterprise" | "foreign" | null;
type RevenueTier = "under-18750" | "18750-37500" | "37500-100k" | "over-100k" | null;
type CurrentSetup = "none" | "part-time" | "considering" | "switching" | null;
type PrimaryNeed = "bookkeeping" | "vat" | "audit" | "cfo" | null;

interface LeadForm {
  name: string;
  email: string;
  phone: string;
}

interface CalculatorResult {
  recommendedTier: string;
  tierPrice: string;
  timeline: string;
  services: string[];
  vatStatus: string;
}

export function AccountingCostCalculator() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessType, setBusinessType] = useState<BusinessType>(null);
  const [revenueTier, setRevenueTier] = useState<RevenueTier>(null);
  const [currentSetup, setCurrentSetup] = useState<CurrentSetup>(null);
  const [primaryNeed, setPrimaryNeed] = useState<PrimaryNeed>(null);
  const [leadForm, setLeadForm] = useState<LeadForm>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5;

  const steps = [
    { label: "Business Type", icon: Building2 },
    { label: "Revenue", icon: TrendingUp },
    { label: "Current Setup", icon: Wrench },
    { label: "Primary Need", icon: FileCheck },
    { label: "Your Details", icon: FileCheck },
  ];

  const calculateResult = (): CalculatorResult => {
    let recommendedTier = "";
    let tierPrice = "";
    let timeline = "";
    let services: string[] = [];
    let vatStatus = "";

    // Determine VAT status
    if (revenueTier === "under-18750") {
      vatStatus = "Below VAT threshold — registration optional";
    } else if (revenueTier === "18750-37500") {
      vatStatus = "Voluntary registration available — recommended for input tax recovery";
    } else {
      vatStatus = "Mandatory VAT registration required (>BHD 37,500)";
    }

    // Determine tier based on needs
    if (primaryNeed === "cfo" || businessType === "enterprise") {
      recommendedTier = "Enterprise Package";
      tierPrice = "BHD 800/month";
      timeline = "Full onboarding in 2-3 weeks";
      services = [
        "Full bookkeeping & reconciliation",
        "VAT registration & quarterly returns",
        "Payroll processing with SIO/WPS",
        "Audit preparation & support",
        "CFO advisory & forecasting",
        "Board-level financial reporting",
        "Dedicated senior accountant"
      ];
    } else if (primaryNeed === "vat" || primaryNeed === "audit" || revenueTier === "37500-100k" || revenueTier === "over-100k") {
      recommendedTier = "Growth Package";
      tierPrice = "BHD 400/month";
      timeline = "Full onboarding in 1-2 weeks";
      services = [
        "Full bookkeeping & reconciliation",
        "VAT registration & quarterly returns",
        "Payroll processing with SIO/WPS",
        "Monthly financial reports",
        "Dedicated accountant"
      ];
    } else {
      recommendedTier = "Essentials Package";
      tierPrice = "BHD 200/month";
      timeline = "Full onboarding in 1 week";
      services = [
        "Monthly bookkeeping",
        "Bank reconciliation",
        "Basic financial reports",
        "Email support",
        "Quarterly review calls"
      ];
    }

    return { recommendedTier, tierPrice, timeline, services, vatStatus };
  };

  const handleNext = () => {
    if (currentStep === totalSteps) {
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
      case 1: return businessType !== null;
      case 2: return revenueTier !== null;
      case 3: return currentSetup !== null;
      case 4: return primaryNeed !== null;
      case 5: return leadForm.name && leadForm.email && leadForm.phone;
      default: return false;
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What type of business are you?</h3>
          <div className="grid gap-3">
            {[
              { value: "startup", label: "Startup / New Business", desc: "Under 2 years, establishing operations" },
              { value: "sme", label: "SME", desc: "Established business, 2-50 employees" },
              { value: "enterprise", label: "Enterprise", desc: "50+ employees, complex operations" },
              { value: "foreign", label: "Foreign Investor", desc: "Entering Bahrain market" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setBusinessType(option.value as BusinessType)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  businessType === option.value
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

    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What's your annual revenue?</h3>
          <div className="grid gap-3">
            {[
              { value: "under-18750", label: "Under BHD 18,750", desc: "Below VAT threshold" },
              { value: "18750-37500", label: "BHD 18,750 - 37,500", desc: "Voluntary VAT registration available" },
              { value: "37500-100k", label: "BHD 37,500 - 100,000", desc: "Mandatory VAT registration" },
              { value: "over-100k", label: "Over BHD 100,000", desc: "Mandatory VAT registration" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setRevenueTier(option.value as RevenueTier)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  revenueTier === option.value
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

    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What's your current accounting setup?</h3>
          <div className="grid gap-3">
            {[
              { value: "none", label: "No Accountant", desc: "Handling it myself or not at all" },
              { value: "part-time", label: "Part-Time / Freelancer", desc: "Occasional support, not dedicated" },
              { value: "considering", label: "Considering Outsourcing", desc: "Want to set up properly from scratch" },
              { value: "switching", label: "Switching Providers", desc: "Currently outsourced, looking for better" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCurrentSetup(option.value as CurrentSetup)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  currentSetup === option.value
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

    if (currentStep === 4) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">What's your primary need right now?</h3>
          <div className="grid gap-3">
            {[
              { value: "bookkeeping", label: "Basic Bookkeeping", desc: "Keep my books clean and organized" },
              { value: "vat", label: "VAT Compliance", desc: "Registration and quarterly returns" },
              { value: "audit", label: "Audit Preparation", desc: "Getting ready for an audit" },
              { value: "cfo", label: "Full CFO Services", desc: "Strategic financial management" }
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

    if (currentStep === 5) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">Get your personalized recommendation</h3>
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
              Financial Health Calculator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Perfect Accounting Package
            </h2>
            <p className="text-lg text-white/70">
              Answer a few questions to get a personalized recommendation and pricing.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div variants={staggerItem}>
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-accent" />
                  {showResults ? "Your Personalized Recommendation" : `Step ${currentStep} of ${totalSteps}`}
                </CardTitle>
                {!showResults && (
                  <div className="flex gap-2 mt-4">
                    {steps.map((_, index) => (
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
                      {/* Recommended Tier */}
                      <div className="bg-accent/10 rounded-xl p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Recommended Package</p>
                        <h3 className="text-2xl font-bold text-primary mb-1">{result.recommendedTier}</h3>
                        <p className="text-xl font-semibold text-accent">{result.tierPrice}</p>
                      </div>

                      {/* VAT Status */}
                      <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                        <FileCheck className="w-8 h-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">VAT Status</p>
                          <p className="font-medium text-primary">{result.vatStatus}</p>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                        <Clock className="w-8 h-8 text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Onboarding Timeline</p>
                          <p className="font-semibold text-primary">{result.timeline}</p>
                        </div>
                      </div>

                      {/* Services Included */}
                      <div>
                        <p className="font-semibold text-primary mb-3">What's Included:</p>
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
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className="gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="btn-gold gap-2"
                    >
                      {currentStep === totalSteps ? "Get My Recommendation" : "Next"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                {showResults && (
                  <div className="mt-6 pt-4 border-t">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
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
