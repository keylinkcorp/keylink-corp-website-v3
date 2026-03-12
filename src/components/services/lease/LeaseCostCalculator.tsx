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
  Home,
  Building2,
  Clock,
  User,
  FileText
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Property types
const propertyTypes = [
  { id: "residential", name: "Residential", description: "Apartment, Villa, Townhouse", fee: 0, icon: Home },
  { id: "commercial", name: "Commercial", description: "Office, Retail, Warehouse", fee: 0, icon: Building2 },
  { id: "industrial", name: "Industrial", description: "Factory, Workshop", fee: 5, icon: Building2 },
];

// Lease durations
const leaseDurations = [
  { id: "short", name: "Short-term", description: "Under 1 year", fee: 0 },
  { id: "standard", name: "Standard", description: "1-3 years", fee: 0 },
  { id: "long", name: "Long-term", description: "3+ years", fee: 0 },
];

// Party types
const partyTypes = [
  { id: "landlord", name: "Landlord", description: "Property owner registering", fee: 0 },
  { id: "tenant", name: "Tenant", description: "Renter registering", fee: 0 },
  { id: "agent", name: "Agent", description: "On behalf of client", fee: 25 },
];

// Additional services
const additionalServices = [
  { id: "translation", name: "Arabic Translation", price: 30 },
  { id: "drafting", name: "Contract Drafting", price: 75 },
  { id: "express", name: "Express Same-Day", price: 50 },
  { id: "attestation", name: "Attestation for Visa", price: 40 },
];

interface LineItem {
  label: string;
  amount: number;
}

export function LeaseCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Calculator state
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [leaseDuration, setLeaseDuration] = useState<string | null>(null);
  const [partyType, setPartyType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    // Base service fee
    total += 50;
    breakdown.push({ label: "Lease Registration Service", amount: 50 });
    
    // Government fees
    const govFee = propertyType === "commercial" ? 8 : propertyType === "industrial" ? 10 : 3;
    total += govFee;
    breakdown.push({ label: "Government Fee (RERA)", amount: govFee });
    
    // Property type surcharge
    const property = propertyTypes.find(p => p.id === propertyType);
    if (property && property.fee > 0) {
      total += property.fee;
      breakdown.push({ label: `${property.name} Processing`, amount: property.fee });
    }
    
    // Party type surcharge
    const party = partyTypes.find(p => p.id === partyType);
    if (party && party.fee > 0) {
      total += party.fee;
      breakdown.push({ label: "Agent Coordination Fee", amount: party.fee });
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
      case 1: return propertyType !== null;
      case 2: return leaseDuration !== null;
      case 3: return partyType !== null;
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
      description: "Our lease registration team will contact you within 24 hours.",
    });
  };

  const handleReset = () => {
    setStep(1);
    setPropertyType(null);
    setLeaseDuration(null);
    setPartyType(null);
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
          <h3 className="text-2xl font-bold text-primary mb-2">Property Type</h3>
          <p className="text-muted-foreground mb-8">What type of property is the lease for?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propertyTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPropertyType(type.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  propertyType === type.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <type.icon className={cn(
                  "h-8 w-8 mb-3",
                  propertyType === type.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{type.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                <p className="text-accent font-semibold">
                  {type.fee > 0 ? `+BHD ${type.fee}` : "Standard fee"}
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
          <h3 className="text-2xl font-bold text-primary mb-2">Lease Duration</h3>
          <p className="text-muted-foreground mb-8">How long is the lease term?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leaseDurations.map((duration) => (
              <motion.div
                key={duration.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLeaseDuration(duration.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  leaseDuration === duration.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <Clock className={cn(
                  "h-8 w-8 mb-3",
                  leaseDuration === duration.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{duration.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{duration.description}</p>
                <p className="text-accent font-semibold">Standard fee</p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 3) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Who is Registering?</h3>
          <p className="text-muted-foreground mb-8">Are you the landlord, tenant, or agent?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partyTypes.map((party) => (
              <motion.div
                key={party.id}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPartyType(party.id)}
                className={cn(
                  "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                  partyType === party.id
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border hover:border-accent/40"
                )}
              >
                <User className={cn(
                  "h-8 w-8 mb-3",
                  partyType === party.id ? "text-accent" : "text-muted-foreground"
                )} />
                <h4 className="font-bold text-primary">{party.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{party.description}</p>
                <p className="text-accent font-bold">
                  {party.fee > 0 ? `+BHD ${party.fee}` : "No extra fee"}
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
                placeholder="john@email.com"
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
      id="lease-calculator"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Lease Registration{" "}
            <span className="text-accent">Cost Estimate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant quote for your lease registration in Bahrain
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
                    className="text-center"
                  >
                    {isSubmitted ? (
                      <div className="py-8">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Check className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Quote Sent!</h3>
                        <p className="text-muted-foreground mb-8">
                          We'll contact you within 24 hours with your detailed quote.
                        </p>
                        <Button onClick={handleReset} variant="outline" className="rounded-xl">
                          Start New Quote
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Your Estimated Cost</h3>
                        
                        {/* Breakdown */}
                        <div className="bg-secondary/50 rounded-xl p-6 mb-6 text-left">
                          {breakdown.map((item, index) => (
                            <div 
                              key={index}
                              className="flex justify-between py-2 border-b border-border last:border-0"
                            >
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className="font-semibold text-primary">BHD {item.amount}</span>
                            </div>
                          ))}
                        </div>

                        {/* Total */}
                        <div className="bg-primary rounded-xl p-6 mb-8">
                          <p className="text-white/70 text-sm mb-1">Estimated Total</p>
                          <p className="text-4xl font-bold text-white">BHD {total}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button 
                            onClick={handleLeadSubmit}
                            className="bg-accent hover:bg-accent/90 text-primary rounded-xl h-12 px-8"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Get Official Quote
                          </Button>
                          <Button 
                            onClick={handleReset}
                            variant="outline"
                            className="rounded-xl h-12 px-8"
                          >
                            Recalculate
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {!showResult && (
              <div className="px-8 pb-8 flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-accent hover:bg-accent/90 text-primary rounded-xl"
                >
                  {step === totalSteps ? "See Results" : "Next"}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
