import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Globe,
  Building2,
  Users,
  User
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// WLL-specific options
const shareholderCounts = [
  { id: "2", name: "2 Shareholders", description: "Standard partnership", fee: 0 },
  { id: "3-5", name: "3-5 Shareholders", description: "Small partnership", fee: 0 },
  { id: "6-10", name: "6-10 Shareholders", description: "Medium partnership", fee: 100 },
  { id: "11-50", name: "11-50 Shareholders", description: "Large partnership", fee: 200 },
];

const shareholderTypes = [
  { id: "individual", name: "All Individual Shareholders", description: "Natural persons only", fee: 0 },
  { id: "corporate", name: "All Corporate Shareholders", description: "Companies", fee: 150 },
  { id: "mixed", name: "Mixed", description: "Individuals + Corporates", fee: 100 },
];

const nationalities = [
  { id: "bahraini", name: "Bahraini National", description: "No extra fee", fee: 0 },
  { id: "gcc", name: "GCC National", description: "No extra fee", fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Security approval required", fee: 50 },
];

const visaOptions = [
  { id: "none", name: "No Visas Needed", description: "Operating remotely", price: 0 },
  { id: "1-3", name: "1-3 Visas", description: "Small team", price: 350, perVisa: true },
  { id: "4-10", name: "4-10 Visas", description: "Growing team", price: 300, perVisa: true },
  { id: "10+", name: "10+ Visas", description: "Larger operations", price: 0, custom: true },
];

const officeTypes = [
  { id: "virtual", name: "Virtual Office", description: "Address only", price: 400 },
  { id: "serviced", name: "Serviced Office", description: "Shared workspace", price: 800 },
  { id: "private", name: "Private Office", description: "Dedicated space", price: 1500 },
];

const additionalServices = [
  { id: "bank", name: "Bank Account Support", price: 200 },
  { id: "pro", name: "PRO Services (1 Year)", price: 800 },
  { id: "accounting", name: "Accounting Setup", price: 400 },
  { id: "moa", name: "MOA Drafting", price: 300 },
];

interface LineItem {
  label: string;
  amount: number;
}

export function WLLCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // WLL-specific state
  const [shareholderCount, setShareholderCount] = useState<string | null>(null);
  const [shareholderType, setShareholderType] = useState<string | null>(null);
  const [nationality, setNationality] = useState<string | null>(null);
  const [visaOption, setVisaOption] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    // Base WLL service fee
    total += 1200;
    breakdown.push({ label: "WLL Formation Service", amount: 1200 });
    
    // Government fees
    total += 310;
    breakdown.push({ label: "Government Fees (CR, License, Chamber)", amount: 310 });
    
    // Shareholder count fee
    const countOption = shareholderCounts.find(s => s.id === shareholderCount);
    if (countOption && countOption.fee > 0) {
      total += countOption.fee;
      breakdown.push({ label: `${countOption.name} Fee`, amount: countOption.fee });
    }
    
    // Shareholder type fee
    const typeOption = shareholderTypes.find(s => s.id === shareholderType);
    if (typeOption && typeOption.fee > 0) {
      total += typeOption.fee;
      breakdown.push({ label: `${typeOption.name}`, amount: typeOption.fee });
    }
    
    // Foreign security approval
    if (nationality === "foreign") {
      total += 50;
      breakdown.push({ label: "Security Approval (Foreign)", amount: 50 });
    }
    
    // Visa
    const visa = visaOptions.find(v => v.id === visaOption);
    if (visa && visa.price > 0 && !visa.custom) {
      const visaCount = visaOption === "1-3" ? 2 : 7; // Average
      const visaTotal = visa.price * visaCount;
      total += visaTotal;
      breakdown.push({ label: `Visas (est. ${visaCount} @ BHD ${visa.price})`, amount: visaTotal });
    }
    
    // Office
    const office = officeTypes.find(o => o.id === officeType);
    if (office) {
      total += office.price;
      breakdown.push({ label: `${office.name} (1 Year)`, amount: office.price });
    }
    
    // Additional services
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        total += service.price;
        breakdown.push({ label: service.name, amount: service.price });
      }
    });
    
    return { total, breakdown };
  };

  const canProceed = () => {
    switch (step) {
      case 1: return shareholderCount !== null;
      case 2: return shareholderType !== null;
      case 3: return nationality !== null;
      case 4: return visaOption !== null;
      case 5: return officeType !== null;
      case 6: return true; // Additional services optional
      case 7: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleLeadSubmit = () => {
    const result = leadFormSchema.safeParse(leadForm);
    
    if (!result.success) {
      const errors: { name?: string; email?: string } = {};
      result.error.errors.forEach(err => {
        if (err.path[0] === "name") errors.name = err.message;
        if (err.path[0] === "email") errors.email = err.message;
      });
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setIsSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "Our team will contact you within 24 hours with a detailed proposal.",
    });
  };

  const handleReset = () => {
    setStep(1);
    setShareholderCount(null);
    setShareholderType(null);
    setNationality(null);
    setVisaOption(null);
    setOfficeType(null);
    setSelectedServices([]);
    setShowResult(false);
    setLeadForm({ name: "", email: "", phone: "" });
    setFormErrors({});
    setIsSubmitted(false);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Number of Shareholders</h3>
          <p className="text-muted-foreground mb-8">How many shareholders will your WLL have?</p>
          
          <div className="grid grid-cols-2 gap-4">
            {shareholderCounts.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShareholderCount(option.id)}
                className={cn(
                  "p-5 rounded-2xl border-2 cursor-pointer transition-all",
                  shareholderCount === option.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <Users className={cn(
                  "h-8 w-8 mb-3",
                  shareholderCount === option.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{option.name}</h4>
                <p className="text-sm text-muted-foreground">{option.description}</p>
                {option.fee > 0 && (
                  <p className="text-gold font-semibold mt-2">+BHD {option.fee}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 2) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Shareholder Type Mix</h3>
          <p className="text-muted-foreground mb-8">What type of shareholders will you have?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shareholderTypes.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShareholderType(option.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  shareholderType === option.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                {option.id === "individual" ? (
                  <User className={cn("h-8 w-8 mb-3", shareholderType === option.id ? "text-gold" : "text-muted-foreground")} />
                ) : option.id === "corporate" ? (
                  <Building2 className={cn("h-8 w-8 mb-3", shareholderType === option.id ? "text-gold" : "text-muted-foreground")} />
                ) : (
                  <Users className={cn("h-8 w-8 mb-3", shareholderType === option.id ? "text-gold" : "text-muted-foreground")} />
                )}
                <h4 className="font-bold text-primary">{option.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <p className="text-gold font-semibold">
                  {option.fee > 0 ? `+BHD ${option.fee}` : "No extra fee"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 3) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Nationality of Majority Shareholder</h3>
          <p className="text-muted-foreground mb-8">What is the nationality of the controlling shareholder?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nationalities.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setNationality(option.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  nationality === option.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <Globe className={cn(
                  "h-8 w-8 mb-3",
                  nationality === option.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{option.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <p className="text-gold font-semibold">
                  {option.fee > 0 ? `+BHD ${option.fee}` : "No extra fee"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 4) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Visa Requirements</h3>
          <p className="text-muted-foreground mb-8">How many employee visas do you need initially?</p>
          
          <div className="grid grid-cols-2 gap-4">
            {visaOptions.map((visa) => (
              <motion.div
                key={visa.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisaOption(visa.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  visaOption === visa.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <User className={cn(
                  "h-8 w-8 mb-3",
                  visaOption === visa.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{visa.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{visa.description}</p>
                <p className="text-gold font-semibold">
                  {visa.custom ? "Custom quote" : visa.price > 0 ? `BHD ${visa.price}/visa` : "—"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 5) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Office Type</h3>
          <p className="text-muted-foreground mb-8">Choose your office solution</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {officeTypes.map((office) => (
              <motion.div
                key={office.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOfficeType(office.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  officeType === office.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <Building2 className={cn(
                  "h-8 w-8 mb-3",
                  officeType === office.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{office.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{office.description}</p>
                <p className="text-gold font-bold">BHD {office.price}/yr</p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 6) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Additional Services</h3>
          <p className="text-muted-foreground mb-8">Select any additional services (optional)</p>
          
          <div className="space-y-4">
            {additionalServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -2 }}
                onClick={() => handleServiceToggle(service.id)}
                className={cn(
                  "p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between",
                  selectedServices.includes(service.id)
                    ? "border-gold bg-gold/5"
                    : "border-border hover:border-gold/40"
                )}
              >
                <div className="flex items-center gap-4">
                  <Checkbox 
                    checked={selectedServices.includes(service.id)}
                    className="h-5 w-5"
                  />
                  <span className="font-semibold text-primary">{service.name}</span>
                </div>
                <span className="text-gold font-bold">+BHD {service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 7) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Get Your Quote</h3>
          <p className="text-muted-foreground mb-8">Enter your details to receive your personalized quote</p>
          
          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="name" className="text-primary font-medium">Full Name *</Label>
              <Input
                id="name"
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                placeholder="John Smith"
                className={cn(
                  "mt-1.5 h-12 rounded-xl border-2",
                  formErrors.name ? "border-destructive" : "border-border focus:border-gold"
                )}
              />
              {formErrors.name && (
                <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-primary font-medium">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                placeholder="john@company.com"
                className={cn(
                  "mt-1.5 h-12 rounded-xl border-2",
                  formErrors.email ? "border-destructive" : "border-border focus:border-gold"
                )}
              />
              {formErrors.email && (
                <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-primary font-medium">Phone Number (Optional)</Label>
              <Input
                id="phone"
                value={leadForm.phone}
                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                placeholder="+973 1234 5678"
                className="mt-1.5 h-12 rounded-xl border-2 border-border focus:border-gold"
              />
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  const { total, breakdown } = calculateTotal();

  return (
    <section 
      ref={ref} 
      id="wll-calculator"
      className="py-24 md:py-32 relative overflow-hidden scroll-mt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_70%)]" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
            <Calculator className="w-4 h-4" />
            Instant Quote
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            WLL <span className="text-gold">Cost Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your Limited Liability Company formation
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            {/* Progress Bar with Step Indicators */}
            {!showResult && (
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-medium text-gold">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2 mb-4" />
                
                {/* Step indicators with checkmarks */}
                <div className="flex items-center justify-between gap-1">
                  {Array.from({ length: totalSteps }, (_, i) => {
                    const stepNum = i + 1;
                    const isCompleted = stepNum < step;
                    const isCurrent = stepNum === step;
                    
                    return (
                      <div
                        key={i}
                        className={cn(
                          "flex-1 h-1.5 rounded-full transition-all duration-300",
                          isCompleted ? "bg-gold" : isCurrent ? "bg-gold/50" : "bg-border"
                        )}
                      />
                    );
                  })}
                </div>
                
                {/* Completed steps indicator */}
                {step > 1 && (
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span>{step - 1} step{step > 2 ? 's' : ''} completed</span>
                  </div>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {showResult ? (
                  <motion.div
                    key="result"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Quote Request Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          We'll contact you within 24 hours with a detailed proposal.
                        </p>
                        <Button onClick={handleReset} variant="outline">
                          Start New Quote
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-primary mb-6">Your WLL Cost Estimate</h3>
                        
                        <div className="space-y-3 mb-6">
                          {breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between py-3 border-b border-border last:border-0">
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className="font-semibold">BHD {item.amount.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gold/10 rounded-2xl p-6 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary">Total Estimate</span>
                            <span className="text-3xl font-bold text-gold">BHD {total.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <Button onClick={handleLeadSubmit} className="flex-1 bg-gold hover:bg-gold/90 text-primary font-semibold h-12">
                            <Send className="w-4 h-4 mr-2" />
                            Request Detailed Quote
                          </Button>
                          <Button onClick={handleReset} variant="outline" className="h-12">
                            Start Over
                          </Button>
                        </div>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepContent()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {!showResult && (
              <div className="p-6 border-t border-border bg-secondary/30 flex justify-between">
                <Button 
                  onClick={handleBack} 
                  variant="outline" 
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
                <Button 
                  onClick={handleNext} 
                  disabled={!canProceed()}
                  className="bg-gold hover:bg-gold/90 text-primary gap-2"
                >
                  {step === totalSteps ? "See Results" : "Continue"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
