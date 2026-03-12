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
  Briefcase, 
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Globe,
  Building2,
  Clock,
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

// SPC-specific options
const businessActivities = [
  { id: "consulting", name: "Consulting & Professional", fee: 0, icon: Briefcase },
  { id: "trading", name: "General Trading", fee: 0, icon: Building2 },
  { id: "tech", name: "Technology & IT", fee: 0, icon: Globe },
  { id: "services", name: "Other Services", fee: 0, icon: User },
];

const ownerNationalities = [
  { id: "bahraini", name: "Bahraini National", description: "Bahrain citizen", fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Security approval required", fee: 50 },
];

const visaOptions = [
  { id: "none", name: "No Visa Needed", description: "Operating remotely", price: 0 },
  { id: "investor", name: "1 Investor Visa", description: "For the business owner", price: 350 },
];

const officeTypes = [
  { id: "virtual", name: "Virtual Office", description: "Address only", price: 300 },
  { id: "serviced", name: "Serviced Office", description: "Shared workspace", price: 600 },
  { id: "small", name: "Small Private Office", description: "1-3 desks", price: 900 },
];

const additionalServices = [
  { id: "bank", name: "Bank Account Support", price: 150 },
  { id: "pro", name: "PRO Services (1 Year)", price: 600 },
  { id: "accounting", name: "Accounting Setup", price: 300 },
];

interface LineItem {
  label: string;
  amount: number;
}

export function SPCCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // SPC-specific state
  const [businessActivity, setBusinessActivity] = useState<string | null>(null);
  const [ownerNationality, setOwnerNationality] = useState<string | null>(null);
  const [visaOption, setVisaOption] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    // Base SPC service fee
    total += 750;
    breakdown.push({ label: "SPC Formation Service", amount: 750 });
    
    // Government fees
    total += 150;
    breakdown.push({ label: "Government Fees (CR, License, Chamber)", amount: 150 });
    
    // Foreign security approval
    if (ownerNationality === "foreign") {
      total += 50;
      breakdown.push({ label: "Security Approval (Foreign)", amount: 50 });
    }
    
    // Visa
    const visa = visaOptions.find(v => v.id === visaOption);
    if (visa && visa.price > 0) {
      total += visa.price;
      breakdown.push({ label: visa.name, amount: visa.price });
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
      case 1: return businessActivity !== null;
      case 2: return ownerNationality !== null;
      case 3: return visaOption !== null;
      case 4: return officeType !== null;
      case 5: return true; // Additional services optional
      case 6: return true;
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
    setBusinessActivity(null);
    setOwnerNationality(null);
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
          <h3 className="text-2xl font-bold text-primary mb-2">Business Activity</h3>
          <p className="text-muted-foreground mb-8">What will your SPC do?</p>
          
          <div className="grid grid-cols-2 gap-4">
            {businessActivities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setBusinessActivity(activity.id)}
                className={cn(
                  "p-5 rounded-2xl border-2 cursor-pointer transition-all",
                  businessActivity === activity.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <activity.icon className={cn(
                  "h-8 w-8 mb-3",
                  businessActivity === activity.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{activity.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 2) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Owner Nationality</h3>
          <p className="text-muted-foreground mb-8">What is your nationality?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ownerNationalities.map((nationality) => (
              <motion.div
                key={nationality.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOwnerNationality(nationality.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  ownerNationality === nationality.id
                    ? "border-gold bg-gold/5 shadow-lg"
                    : "border-border hover:border-gold/40"
                )}
              >
                <Globe className={cn(
                  "h-8 w-8 mb-3",
                  ownerNationality === nationality.id ? "text-gold" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{nationality.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{nationality.description}</p>
                <p className="text-gold font-semibold">
                  {nationality.fee > 0 ? `+BHD ${nationality.fee}` : "No extra fee"}
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
          <h3 className="text-2xl font-bold text-primary mb-2">Visa Requirements</h3>
          <p className="text-muted-foreground mb-8">Do you need a visa for yourself?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  {visa.price > 0 ? `BHD ${visa.price}` : "—"}
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
    
    if (step === 5) {
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
    
    if (step === 6) {
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
      id="spc-calculator"
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
            SPC <span className="text-gold">Cost Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your Single Person Company formation
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
            {/* Progress Bar */}
            {!showResult && (
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-semibold text-gold">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {!showResult ? (
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
                ) : (
                  <motion.div
                    key="result"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                  >
                    {!isSubmitted ? (
                      <div>
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                            <Calculator className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary">Your SPC Estimate</h3>
                            <p className="text-muted-foreground">Based on your selections</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-8">
                          {breakdown.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className="font-semibold text-primary">BHD {item.amount}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary to-primary/90 rounded-2xl text-white mb-8">
                          <span className="text-xl font-bold">Total Estimate</span>
                          <span className="text-3xl font-bold">BHD {total.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-6 p-4 bg-gold/5 rounded-xl border border-gold/20">
                          <Clock className="w-5 h-5 text-gold" />
                          <span className="text-sm text-muted-foreground">
                            Timeline: <span className="font-semibold text-primary">3-14 business days</span>
                          </span>
                        </div>
                        
                        <Button
                          onClick={handleLeadSubmit}
                          className="w-full h-14 bg-gold hover:bg-gold/90 text-primary text-lg font-semibold rounded-xl"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Request Detailed Quote
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Quote Request Received!</h3>
                        <p className="text-muted-foreground mb-8">
                          Our team will contact you within 24 hours with a detailed proposal.
                        </p>
                        <Button
                          onClick={handleReset}
                          variant="outline"
                          className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
                        >
                          Calculate Another Quote
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {!showResult && (
              <div className="p-6 border-t border-border flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="text-muted-foreground"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 rounded-xl"
                >
                  {step === totalSteps ? "See My Quote" : "Continue"}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
