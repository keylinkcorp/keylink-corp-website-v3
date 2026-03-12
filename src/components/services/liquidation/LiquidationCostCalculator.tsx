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
  FileX,
  Building2,
  Users,
  FileText,
  AlertTriangle
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Liquidation types
const liquidationTypes = [
  { id: "voluntary", name: "Voluntary Liquidation", description: "Solvent company, shareholders decide to close", baseFee: 950 },
  { id: "striking", name: "Striking Off", description: "Dormant CR, no trading 12+ months", baseFee: 650 },
  { id: "compulsory", name: "Compulsory Liquidation", description: "Court-ordered, creditor initiated", baseFee: 0, quoteRequired: true },
];

// Entity types
const entityTypes = [
  { id: "spc", name: "SPC (Single Person Company)", description: "Sole owner entity", surcharge: 0 },
  { id: "wll", name: "WLL (Limited Liability)", description: "Multiple shareholders", surcharge: 200 },
  { id: "branch", name: "Branch Office", description: "Foreign company branch", surcharge: 150 },
  { id: "holding", name: "Holding Company", description: "Subsidiary coordination required", surcharge: 350 },
];

// Current status options
const statusOptions = [
  { id: "active-employees", name: "Active with Employees", description: "Visa cancellation required", surcharge: 300 },
  { id: "active-no-employees", name: "Active without Employees", description: "No visa obligations", surcharge: 0 },
  { id: "dormant", name: "Dormant (12+ months)", description: "No trading activity", surcharge: -100 },
];

// Additional services
const additionalServices = [
  { id: "audit", name: "Final Audit Report", price: 400 },
  { id: "asset", name: "Asset Distribution", price: 250 },
  { id: "employee", name: "Employee Settlement Processing", price: 350 },
  { id: "archive", name: "Document Archiving (5 years)", price: 150 },
];

interface LineItem {
  label: string;
  amount: number;
}

export function LiquidationCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Liquidation-specific state
  const [liquidationType, setLiquidationType] = useState<string | null>(null);
  const [entityType, setEntityType] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const selectedLiquidation = liquidationTypes.find(l => l.id === liquidationType);
  const isQuoteRequired = selectedLiquidation?.quoteRequired;

  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    // Base liquidation fee
    const liqType = liquidationTypes.find(l => l.id === liquidationType);
    if (liqType && !liqType.quoteRequired) {
      total += liqType.baseFee;
      breakdown.push({ label: `${liqType.name} Service`, amount: liqType.baseFee });
    }
    
    // Government fees estimate
    if (!isQuoteRequired) {
      total += 200;
      breakdown.push({ label: "Government Fees (CR Cancellation, Gazette)", amount: 200 });
    }
    
    // Entity type surcharge
    const entity = entityTypes.find(e => e.id === entityType);
    if (entity && entity.surcharge !== 0) {
      total += entity.surcharge;
      breakdown.push({ label: `Entity Complexity (${entity.name})`, amount: entity.surcharge });
    }
    
    // Status surcharge
    const status = statusOptions.find(s => s.id === currentStatus);
    if (status && status.surcharge !== 0) {
      total += status.surcharge;
      const label = status.surcharge > 0 ? status.name : `Discount: ${status.name}`;
      breakdown.push({ label, amount: status.surcharge });
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
      case 1: return liquidationType !== null;
      case 2: return entityType !== null;
      case 3: return currentStatus !== null;
      case 4: return true; // Additional services optional
      case 5: return true;
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
      description: "Our liquidation team will contact you within 24 hours.",
    });
  };

  const handleReset = () => {
    setStep(1);
    setLiquidationType(null);
    setEntityType(null);
    setCurrentStatus(null);
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
          <h3 className="text-2xl font-bold text-primary mb-2">Liquidation Type</h3>
          <p className="text-muted-foreground mb-8">What type of company closure do you need?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {liquidationTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLiquidationType(type.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  liquidationType === type.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <FileX className={cn(
                  "h-8 w-8 mb-3",
                  liquidationType === type.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{type.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                <p className="text-accent font-bold">
                  {type.quoteRequired ? "Quote Required" : `BHD ${type.baseFee}`}
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
          <h3 className="text-2xl font-bold text-primary mb-2">Entity Type</h3>
          <p className="text-muted-foreground mb-8">What type of company are you closing?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entityTypes.map((entity) => (
              <motion.div
                key={entity.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEntityType(entity.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  entityType === entity.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Building2 className={cn(
                  "h-8 w-8 mb-3",
                  entityType === entity.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{entity.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{entity.description}</p>
                <p className="text-accent font-semibold">
                  {entity.surcharge > 0 ? `+BHD ${entity.surcharge}` : "No surcharge"}
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
          <h3 className="text-2xl font-bold text-primary mb-2">Current Status</h3>
          <p className="text-muted-foreground mb-8">What is your company's current operational status?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statusOptions.map((status) => (
              <motion.div
                key={status.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStatus(status.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  currentStatus === status.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Users className={cn(
                  "h-8 w-8 mb-3",
                  currentStatus === status.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{status.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{status.description}</p>
                <p className={cn(
                  "font-bold",
                  status.surcharge < 0 ? "text-green-600" : "text-accent"
                )}>
                  {status.surcharge > 0 ? `+BHD ${status.surcharge}` : status.surcharge < 0 ? `−BHD ${Math.abs(status.surcharge)}` : "—"}
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
    
    if (step === 5) {
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
      id="liquidation-calculator"
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
            Cost Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Calculate Your <span className="text-accent">Liquidation Costs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your company closure
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-sm border-2 border-border overflow-hidden"
          >
            {!showResult ? (
              <>
                {/* Progress bar */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Step {step} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-accent">
                      {Math.round(progress)}% Complete
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Step content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
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
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="p-6 border-t border-border flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="h-12 px-6 rounded-xl"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-primary font-semibold"
                  >
                    {step === totalSteps ? "See Your Quote" : "Continue"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              /* Results */
              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Your Estimated Quote</h3>
                      <p className="text-muted-foreground">Based on your selections</p>
                    </div>

                    {isQuoteRequired ? (
                      <div className="bg-accent/10 rounded-2xl p-6 mb-8 text-center">
                        <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-primary mb-2">Custom Quote Required</h4>
                        <p className="text-muted-foreground">
                          Compulsory liquidation requires a detailed assessment. Our team will provide a personalized quote.
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Breakdown */}
                        <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                          <h4 className="font-semibold text-primary mb-4">Cost Breakdown</h4>
                          <div className="space-y-3">
                            {breakdown.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className={cn(
                                  "font-medium",
                                  item.amount < 0 ? "text-green-600" : "text-primary"
                                )}>
                                  {item.amount < 0 ? "−" : ""}BHD {Math.abs(item.amount)}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-border mt-4 pt-4 flex justify-between">
                            <span className="font-bold text-primary">Estimated Total</span>
                            <span className="font-bold text-2xl text-accent">BHD {total}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-center mb-6">
                          * Government fees shown are estimates. Actual fees may vary based on outstanding obligations.
                        </p>
                      </>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleLeadSubmit}
                        className="flex-1 h-14 rounded-xl bg-accent hover:bg-accent/90 text-primary font-semibold"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Request Detailed Quote
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleReset}
                        className="h-14 px-8 rounded-xl"
                      >
                        Start Over
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Quote Request Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      Our liquidation specialists will contact you within 24 hours with a detailed quote.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="h-12 px-8 rounded-xl"
                    >
                      Calculate Another Quote
                    </Button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
