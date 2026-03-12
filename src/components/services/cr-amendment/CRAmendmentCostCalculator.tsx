import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  FileText,
  Users,
  DollarSign,
  Edit,
  MapPin,
  UserCheck,
  RefreshCw,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Clock,
  Zap,
  Building2,
  GitBranch,
  Crown
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

const amendmentTypes = [
  { id: "activity", name: "Activity Change", description: "Add or remove commercial activities", icon: FileText, price: 100 },
  { id: "shareholder", name: "Shareholder Transfer", description: "Transfer or add shareholders", icon: Users, price: 150 },
  { id: "capital", name: "Capital Adjustment", description: "Increase or decrease capital", icon: DollarSign, price: 100 },
  { id: "name", name: "Trade Name Change", description: "Change business name", icon: Edit, price: 75 },
  { id: "address", name: "Address Change", description: "Change registered address", icon: MapPin, price: 50 },
  { id: "signatory", name: "Signatory Update", description: "Add or remove signatories", icon: UserCheck, price: 50 },
  { id: "conversion", name: "Entity Conversion", description: "SPC to WLL or vice versa", icon: RefreshCw, price: 200 },
  { id: "manager", name: "Manager/Director Change", description: "Update management", icon: Briefcase, price: 75 }
];

const entityTypes = [
  { id: "SPC", name: "SPC", description: "Single Person Company", icon: Briefcase },
  { id: "WLL", name: "WLL", description: "Limited Liability", icon: Users },
  { id: "Branch", name: "Branch", description: "Branch Office", icon: GitBranch },
  { id: "Holding", name: "Holding", description: "Holding Company", icon: Crown }
];

const urgencyLevels = [
  { id: "standard", name: "Standard Processing", description: "2-3 weeks processing time", icon: Clock, fee: 0 },
  { id: "express", name: "Express Processing", description: "1 week processing time", icon: Zap, fee: 100 }
];

const additionalServices = [
  { id: "notarization", name: "Document Notarization", price: 75 },
  { id: "translation", name: "Arabic Translation", price: 100 },
  { id: "pro", name: "Express PRO Support", price: 200 }
];

export function CRAmendmentCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [selectedAmendment, setSelectedAmendment] = useState<string | null>(null);
  const [entityType, setEntityType] = useState<string | null>(null);
  const [urgencyLevel, setUrgencyLevel] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = () => {
    let total = 0;
    
    // Base amendment fee
    const amendment = amendmentTypes.find(a => a.id === selectedAmendment);
    if (amendment) total += amendment.price;
    
    // Express processing
    if (urgencyLevel === "express") total += 100;
    
    // Additional services
    selectedServices.forEach(serviceId => {
      total += additionalServices.find(s => s.id === serviceId)?.price || 0;
    });
    
    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedAmendment !== null;
      case 2: return entityType !== null;
      case 3: return urgencyLevel !== null;
      case 4: return true;
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
    setSelectedAmendment(null);
    setEntityType(null);
    setUrgencyLevel(null);
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

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <Calculator className="w-4 h-4" />
            Amendment Cost Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Get Your <span className="text-accent">Amendment Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Answer a few questions to receive an instant cost estimate
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-secondary">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Step Indicator */}
              {!showResult && (
                <div className="flex items-center justify-between mb-10">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <div className="flex gap-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-colors",
                          i + 1 <= step ? "bg-accent" : "bg-secondary"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}

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
                    {/* Step 1: Amendment Type */}
                    {step === 1 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          What Type of Amendment?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Select the amendment you need
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {amendmentTypes.map((type) => (
                            <motion.div
                              key={type.id}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedAmendment(type.id)}
                              className={cn(
                                "p-5 rounded-xl border-2 cursor-pointer transition-all text-center",
                                selectedAmendment === type.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center",
                                selectedAmendment === type.id 
                                  ? "bg-accent" 
                                  : "bg-secondary"
                              )}>
                                <type.icon className={cn(
                                  "h-5 w-5",
                                  selectedAmendment === type.id ? "text-primary" : "text-muted-foreground"
                                )} />
                              </div>
                              <h4 className="font-bold text-sm mb-1">{type.name}</h4>
                              <p className="text-accent font-semibold text-sm">BHD {type.price}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Entity Type */}
                    {step === 2 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Current Entity Type
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          What type of CR do you have?
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                          {entityTypes.map((type) => (
                            <motion.div
                              key={type.id}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setEntityType(type.id)}
                              className={cn(
                                "p-6 rounded-xl border-2 cursor-pointer transition-all text-center",
                                entityType === type.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className={cn(
                                "w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center",
                                entityType === type.id 
                                  ? "bg-accent" 
                                  : "bg-secondary"
                              )}>
                                <type.icon className={cn(
                                  "h-6 w-6",
                                  entityType === type.id ? "text-primary" : "text-muted-foreground"
                                )} />
                              </div>
                              <h4 className="font-bold text-lg mb-1">{type.name}</h4>
                              <p className="text-sm text-muted-foreground">{type.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Urgency */}
                    {step === 3 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Processing Speed
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          How quickly do you need this processed?
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                          {urgencyLevels.map((level) => (
                            <motion.div
                              key={level.id}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setUrgencyLevel(level.id)}
                              className={cn(
                                "p-6 rounded-xl border-2 cursor-pointer transition-all",
                                urgencyLevel === level.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-14 h-14 rounded-xl flex items-center justify-center",
                                  urgencyLevel === level.id 
                                    ? "bg-accent" 
                                    : "bg-secondary"
                                )}>
                                  <level.icon className={cn(
                                    "h-7 w-7",
                                    urgencyLevel === level.id ? "text-primary" : "text-muted-foreground"
                                  )} />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg">{level.name}</h4>
                                  <p className="text-muted-foreground">{level.description}</p>
                                </div>
                                <div className="text-right">
                                  <span className="text-accent font-bold text-lg">
                                    {level.fee > 0 ? `+BHD ${level.fee}` : "Included"}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Additional Services */}
                    {step === 4 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Additional Services
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Select any additional services you need (optional)
                        </p>
                        
                        <div className="space-y-4">
                          {additionalServices.map((service) => (
                            <motion.div
                              key={service.id}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => handleServiceToggle(service.id)}
                              className={cn(
                                "p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between",
                                selectedServices.includes(service.id)
                                  ? "border-accent bg-accent/5"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-6 h-6 rounded-lg flex items-center justify-center border-2",
                                  selectedServices.includes(service.id)
                                    ? "bg-accent border-accent"
                                    : "border-border"
                                )}>
                                  {selectedServices.includes(service.id) && (
                                    <Check className="w-4 h-4 text-primary" />
                                  )}
                                </div>
                                <span className="font-medium text-lg">{service.name}</span>
                              </div>
                              <span className="text-accent font-bold">+BHD {service.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Lead Capture */}
                    {step === 5 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Get Your Detailed Quote
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Enter your details to receive your personalized amendment quote
                        </p>
                        
                        <div className="space-y-5 max-w-md mx-auto">
                          <div>
                            <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Your full name"
                              className={cn("mt-2 h-12", formErrors.name && "border-destructive")}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="your@email.com"
                              className={cn("mt-2 h-12", formErrors.email && "border-destructive")}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="text-base font-medium">Phone Number (Optional)</Label>
                            <Input
                              id="phone"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="+973 XXXX XXXX"
                              className="mt-2 h-12"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                  >
                    {!isSubmitted ? (
                      <>
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <Calculator className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Your Estimated Cost</h3>
                        <p className="text-6xl font-bold text-accent mb-6">BHD {calculateTotal()}</p>
                        
                        {/* Cost Breakdown */}
                        <div className="bg-secondary/50 rounded-xl p-6 text-left max-w-md mx-auto mb-8">
                          <h4 className="font-bold mb-4">Cost Breakdown</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                {amendmentTypes.find(a => a.id === selectedAmendment)?.name}
                              </span>
                              <span className="font-semibold">
                                BHD {amendmentTypes.find(a => a.id === selectedAmendment)?.price}
                              </span>
                            </div>
                            {urgencyLevel === "express" && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Express Processing</span>
                                <span className="font-semibold">BHD 100</span>
                              </div>
                            )}
                            {selectedServices.map(serviceId => {
                              const service = additionalServices.find(s => s.id === serviceId);
                              return (
                                <div key={serviceId} className="flex justify-between">
                                  <span className="text-muted-foreground">{service?.name}</span>
                                  <span className="font-semibold">BHD {service?.price}</span>
                                </div>
                              );
                            })}
                            <div className="border-t pt-3 flex justify-between font-bold">
                              <span>Total Estimate</span>
                              <span className="text-accent">BHD {calculateTotal()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary" onClick={handleLeadSubmit}>
                            <Send className="mr-2 h-4 w-4" />
                            Request Detailed Quote
                          </Button>
                          <Button variant="outline" size="lg" onClick={handleReset}>
                            Start Over
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="py-8">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Quote Request Submitted!</h3>
                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                          Our team will review your requirements and contact you within 24 hours 
                          with a detailed proposal.
                        </p>
                        <Button variant="outline" size="lg" onClick={handleReset}>
                          Calculate Another Quote
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {!showResult && (
                <div className="flex justify-between mt-10 pt-6 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={step === 5 ? handleLeadSubmit : handleNext}
                    disabled={!canProceed()}
                    className="gap-2 bg-accent hover:bg-accent/90 text-primary"
                  >
                    {step === 5 ? "Get Quote" : "Continue"}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
