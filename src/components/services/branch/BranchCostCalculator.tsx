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
  FileText,
  User,
  Stamp
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Parent company locations
const parentLocations = [
  { id: "gcc", name: "GCC Country", description: "Saudi, UAE, Qatar, Kuwait, Oman", fee: 0 },
  { id: "western", name: "Western Country", description: "UK, EU, US, Canada, Australia", fee: 200 },
  { id: "asia", name: "Asia-Pacific", description: "India, China, Singapore, etc.", fee: 150 },
  { id: "other", name: "Other", description: "Africa, South America, etc.", fee: 250 },
];

// Document status
const documentStatuses = [
  { id: "ready", name: "Documents Ready", description: "All documents apostilled and translated", fee: 0 },
  { id: "partial", name: "Partially Ready", description: "Some documents need legalization", fee: 150 },
  { id: "not-ready", name: "Not Started", description: "Need full document preparation", fee: 350 },
];

// Branch manager options
const managerOptions = [
  { id: "new-hire", name: "Hire New Manager", description: "We'll sponsor a new manager visa", price: 500 },
  { id: "existing", name: "Transfer Existing", description: "Transfer from parent company", price: 350 },
  { id: "have-manager", name: "Already Have Manager", description: "Manager already has Bahrain residency", price: 0 },
];

// Office types
const officeTypes = [
  { id: "virtual", name: "Virtual Office", description: "Address only, 0 visas", price: 400 },
  { id: "serviced", name: "Serviced Office", description: "Shared workspace, 2+ visas", price: 800 },
  { id: "private", name: "Private Office", description: "Dedicated space, 5+ visas", price: 1500 },
];

// Additional services
const additionalServices = [
  { id: "bank", name: "Bank Account Setup", price: 200 },
  { id: "pro", name: "PRO Services (1 Year)", price: 600 },
  { id: "accounting", name: "Accounting Setup", price: 350 },
  { id: "vat", name: "VAT Registration", price: 250 },
];

interface LineItem {
  label: string;
  amount: number;
}

export function BranchCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Branch-specific state
  const [parentLocation, setParentLocation] = useState<string | null>(null);
  const [documentStatus, setDocumentStatus] = useState<string | null>(null);
  const [managerOption, setManagerOption] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    // Base branch service fee
    total += 1200;
    breakdown.push({ label: "Branch Registration Service", amount: 1200 });
    
    // Government fees
    total += 450;
    breakdown.push({ label: "Government Fees (CR, License, Chamber)", amount: 450 });
    
    // Parent location surcharge
    const location = parentLocations.find(l => l.id === parentLocation);
    if (location && location.fee > 0) {
      total += location.fee;
      breakdown.push({ label: `Document Coordination (${location.name})`, amount: location.fee });
    }
    
    // Document preparation
    const docStatus = documentStatuses.find(d => d.id === documentStatus);
    if (docStatus && docStatus.fee > 0) {
      total += docStatus.fee;
      breakdown.push({ label: "Document Preparation & Legalization", amount: docStatus.fee });
    }
    
    // Manager option
    const manager = managerOptions.find(m => m.id === managerOption);
    if (manager && manager.price > 0) {
      total += manager.price;
      breakdown.push({ label: manager.name, amount: manager.price });
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
      case 1: return parentLocation !== null;
      case 2: return documentStatus !== null;
      case 3: return managerOption !== null;
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
      description: "Our branch registration team will contact you within 24 hours.",
    });
  };

  const handleReset = () => {
    setStep(1);
    setParentLocation(null);
    setDocumentStatus(null);
    setManagerOption(null);
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
          <h3 className="text-2xl font-bold text-primary mb-2">Parent Company Location</h3>
          <p className="text-muted-foreground mb-8">Where is your parent company registered?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parentLocations.map((location) => (
              <motion.div
                key={location.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setParentLocation(location.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  parentLocation === location.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Globe className={cn(
                  "h-8 w-8 mb-3",
                  parentLocation === location.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{location.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{location.description}</p>
                <p className="text-accent font-semibold">
                  {location.fee > 0 ? `+BHD ${location.fee}` : "Standard processing"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 2) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Document Status</h3>
          <p className="text-muted-foreground mb-8">Are your parent company documents ready?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documentStatuses.map((status) => (
              <motion.div
                key={status.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setDocumentStatus(status.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  documentStatus === status.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Stamp className={cn(
                  "h-8 w-8 mb-3",
                  documentStatus === status.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{status.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{status.description}</p>
                <p className="text-accent font-semibold">
                  {status.fee > 0 ? `+BHD ${status.fee}` : "No extra fee"}
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
          <h3 className="text-2xl font-bold text-primary mb-2">Branch Manager</h3>
          <p className="text-muted-foreground mb-8">How will you appoint your branch manager?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {managerOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setManagerOption(option.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  managerOption === option.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <User className={cn(
                  "h-8 w-8 mb-3",
                  managerOption === option.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{option.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <p className="text-accent font-bold">
                  {option.price > 0 ? `BHD ${option.price}` : "—"}
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
          <p className="text-muted-foreground mb-8">Choose your branch office solution</p>
          
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
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Building2 className={cn(
                  "h-8 w-8 mb-3",
                  officeType === office.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{office.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{office.description}</p>
                <p className="text-accent font-bold">BHD {office.price}/yr</p>
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
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/40"
                )}
              >
                <div className="flex items-center gap-4">
                  <Checkbox 
                    checked={selectedServices.includes(service.id)}
                    className="h-5 w-5"
                  />
                  <span className="font-semibold text-primary">{service.name}</span>
                </div>
                <span className="text-accent font-bold">+BHD {service.price}</span>
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
                  formErrors.name ? "border-destructive" : "border-border focus:border-accent"
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
                  formErrors.email ? "border-destructive" : "border-border focus:border-accent"
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
                className="mt-1.5 h-12 rounded-xl border-2 border-border focus:border-accent"
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
      id="branch-calculator"
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <Calculator className="w-4 h-4" />
            Instant Quote
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Branch Office <span className="text-accent">Cost Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your foreign company branch registration
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
                  <span className="text-sm font-medium text-accent">
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
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <Calculator className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary">Your Estimated Cost</h3>
                            <p className="text-muted-foreground">Based on your selections</p>
                          </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
                          <div className="space-y-3">
                            {breakdown.map((item, index) => (
                              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className="font-semibold text-primary">BHD {item.amount}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-accent">
                            <span className="text-xl font-bold text-primary">Total Estimate</span>
                            <span className="text-3xl font-bold text-accent">BHD {total}</span>
                          </div>
                        </div>

                        {/* Lead Form */}
                        <div className="space-y-4 max-w-md">
                          <p className="text-muted-foreground">Enter your details to receive a detailed proposal:</p>
                          <div>
                            <Input
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="Full Name *"
                              className={cn(
                                "h-12 rounded-xl border-2",
                                formErrors.name ? "border-destructive" : "border-border"
                              )}
                            />
                            {formErrors.name && <p className="text-sm text-destructive mt-1">{formErrors.name}</p>}
                          </div>
                          <div>
                            <Input
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="Email Address *"
                              className={cn(
                                "h-12 rounded-xl border-2",
                                formErrors.email ? "border-destructive" : "border-border"
                              )}
                            />
                            {formErrors.email && <p className="text-sm text-destructive mt-1">{formErrors.email}</p>}
                          </div>
                          <Input
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            placeholder="Phone (Optional)"
                            className="h-12 rounded-xl border-2 border-border"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <Check className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Quote Request Sent!</h3>
                        <p className="text-muted-foreground mb-2">
                          Your estimated cost: <span className="font-bold text-accent">BHD {total}</span>
                        </p>
                        <p className="text-muted-foreground mb-8">
                          Our branch registration team will contact you within 24 hours with a detailed proposal.
                        </p>
                        <Button onClick={handleReset} variant="outline" className="rounded-xl">
                          Calculate Again
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {!isSubmitted && (
              <div className="p-6 border-t border-border bg-secondary/30">
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    onClick={showResult ? handleReset : handleBack}
                    disabled={step === 1 && !showResult}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {showResult ? "Start Over" : "Back"}
                  </Button>

                  {!showResult ? (
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="bg-accent hover:bg-accent/90 text-primary gap-2 rounded-xl px-8"
                    >
                      {step === totalSteps ? "See Estimate" : "Continue"}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleLeadSubmit}
                      className="bg-accent hover:bg-accent/90 text-primary gap-2 rounded-xl px-8"
                    >
                      Get Detailed Quote
                      <Send className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
