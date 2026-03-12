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
  PenTool,
  Stamp,
  Globe,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Briefcase,
  GitBranch,
  Crown,
  User
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

const serviceTypes = [
  { id: "drafting", name: "MOA Drafting", description: "New memorandum creation", icon: PenTool, price: 200 },
  { id: "amendment", name: "MOA Amendment", description: "Modify existing MOA", icon: FileText, price: 150 },
  { id: "notarization", name: "MOA Notarization", description: "Authenticate existing MOA", icon: Stamp, price: 75 },
  { id: "attestation", name: "MOA Attestation", description: "For foreign use", icon: Globe, price: 100 }
];

const entityTypes = [
  { id: "SPC", name: "SPC", description: "Single Person Company", icon: User },
  { id: "WLL", name: "WLL", description: "Limited Liability", icon: Users },
  { id: "Branch", name: "Branch", description: "Branch Office", icon: GitBranch },
  { id: "Holding", name: "Holding", description: "Holding Company", icon: Crown }
];

const complexityLevels = [
  { id: "standard", name: "Standard", description: "2-3 activities, single shareholder", fee: 0 },
  { id: "complex", name: "Complex", description: "5+ activities, multiple shareholders, special clauses", fee: 100 }
];

const additionalServices = [
  { id: "translation", name: "Arabic Translation", price: 50 },
  { id: "express", name: "Express 24hr Processing", price: 100 },
  { id: "courier", name: "Document Courier", price: 25 }
];

export function MOACostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [entityType, setEntityType] = useState<string | null>(null);
  const [complexityLevel, setComplexityLevel] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = () => {
    let total = 0;
    
    // Base service fee
    const service = serviceTypes.find(s => s.id === selectedService);
    if (service) total += service.price;
    
    // Complexity fee
    if (complexityLevel === "complex") total += 100;
    
    // Additional services
    selectedAddons.forEach(addonId => {
      total += additionalServices.find(a => a.id === addonId)?.price || 0;
    });
    
    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== null;
      case 2: return entityType !== null;
      case 3: return complexityLevel !== null;
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

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
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
    setSelectedService(null);
    setEntityType(null);
    setComplexityLevel(null);
    setSelectedAddons([]);
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
            MOA Cost Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Get Your <span className="text-accent">MOA Quote</span>
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
                    {/* Step 1: Service Type */}
                    {step === 1 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          What MOA Service Do You Need?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Select the service you require
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {serviceTypes.map((type) => (
                            <motion.div
                              key={type.id}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedService(type.id)}
                              className={cn(
                                "p-5 rounded-xl border-2 cursor-pointer transition-all text-center",
                                selectedService === type.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center",
                                selectedService === type.id 
                                  ? "bg-accent" 
                                  : "bg-secondary"
                              )}>
                                <type.icon className={cn(
                                  "h-5 w-5",
                                  selectedService === type.id ? "text-primary" : "text-muted-foreground"
                                )} />
                              </div>
                              <h4 className="font-bold text-sm mb-1">{type.name}</h4>
                              <p className="text-xs text-muted-foreground mb-2">{type.description}</p>
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
                          Entity Type
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          What type of company is this for?
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

                    {/* Step 3: Complexity */}
                    {step === 3 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Complexity Level
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          How complex is your MOA structure?
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                          {complexityLevels.map((level) => (
                            <motion.div
                              key={level.id}
                              whileHover={{ y: -4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setComplexityLevel(level.id)}
                              className={cn(
                                "p-6 rounded-xl border-2 cursor-pointer transition-all",
                                complexityLevel === level.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <div>
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
                              onClick={() => handleAddonToggle(service.id)}
                              className={cn(
                                "p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between",
                                selectedAddons.includes(service.id)
                                  ? "border-accent bg-accent/5"
                                  : "border-border hover:border-accent/50"
                              )}
                            >
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-6 h-6 rounded-lg flex items-center justify-center border-2",
                                  selectedAddons.includes(service.id)
                                    ? "bg-accent border-accent"
                                    : "border-border"
                                )}>
                                  {selectedAddons.includes(service.id) && (
                                    <Check className="w-4 h-4 text-primary" />
                                  )}
                                </div>
                                <span className="font-medium">{service.name}</span>
                              </div>
                              <span className="font-bold text-accent">+BHD {service.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Lead Form */}
                    {step === 5 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          Get Your Quote
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Enter your details to receive your personalized quote
                        </p>
                        
                        <div className="space-y-6 max-w-md mx-auto">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="Enter your name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              className={cn(formErrors.name && "border-destructive")}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              className={cn(formErrors.email && "border-destructive")}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input
                              id="phone"
                              placeholder="Enter your phone number"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    {isSubmitted ? (
                      <div className="py-12">
                        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Check className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                        <p className="text-muted-foreground mb-8">
                          We've received your quote request. Our team will contact you within 24 hours.
                        </p>
                        <Button onClick={handleReset} variant="outline">
                          Start New Quote
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Your Estimated Cost</h3>
                        
                        <div className="bg-secondary/50 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Service: {serviceTypes.find(s => s.id === selectedService)?.name}</span>
                              <span className="font-semibold">BHD {serviceTypes.find(s => s.id === selectedService)?.price}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                              <span>Entity: {entityType}</span>
                            </div>
                            {complexityLevel === "complex" && (
                              <div className="flex justify-between">
                                <span>Complex Structure</span>
                                <span className="font-semibold">BHD 100</span>
                              </div>
                            )}
                            {selectedAddons.map(addonId => {
                              const addon = additionalServices.find(a => a.id === addonId);
                              return addon ? (
                                <div key={addonId} className="flex justify-between">
                                  <span>{addon.name}</span>
                                  <span className="font-semibold">BHD {addon.price}</span>
                                </div>
                              ) : null;
                            })}
                            <div className="border-t pt-3 mt-3">
                              <div className="flex justify-between text-xl font-bold">
                                <span>Total Estimate</span>
                                <span className="text-accent">BHD {calculateTotal()}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button onClick={handleLeadSubmit} size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                          <Send className="w-4 h-4 mr-2" />
                          Request Detailed Quote
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
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={step === 5 ? () => setShowResult(true) : handleNext}
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
