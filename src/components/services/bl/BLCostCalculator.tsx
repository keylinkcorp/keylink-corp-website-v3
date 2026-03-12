import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  ShoppingCart,
  Factory,
  Briefcase,
  Building2,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  User,
  Globe,
  Sparkles
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// License types
const licenseTypes = [
  { id: "commercial", name: "Commercial", description: "Trading, retail, import/export", icon: ShoppingCart, basePrice: 350 },
  { id: "industrial", name: "Industrial", description: "Manufacturing, production", icon: Factory, basePrice: 450 },
  { id: "professional", name: "Professional", description: "Consulting, services", icon: Briefcase, basePrice: 300 },
  { id: "services", name: "Services", description: "Hospitality, healthcare", icon: Building2, basePrice: 400 },
];

// Activity count options
const activityOptions = [
  { id: "1-3", label: "1-3 Activities", price: 60 },
  { id: "4-6", label: "4-6 Activities", price: 120 },
  { id: "7-10", label: "7-10 Activities", price: 200 },
  { id: "10+", label: "10+ Activities", price: 300 },
];

// Owner nationality options
const nationalityOptions = [
  { id: "bahraini", name: "Bahraini", description: "Bahrain citizen", icon: User, fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", icon: Globe, fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Other nationalities", icon: Globe, fee: 50 },
];

// Additional services
const additionalServices = [
  { id: "name", name: "Trade Name Reservation", price: 15 },
  { id: "virtual", name: "Virtual Office (1 Year)", price: 450 },
  { id: "pro", name: "PRO Support", price: 100 },
];

export function BLCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [licenseType, setLicenseType] = useState<string | null>(null);
  const [activityCount, setActivityCount] = useState<string | null>(null);
  const [nationality, setNationality] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Calculate costs
  const calculateTotal = () => {
    let serviceFee = licenseTypes.find(t => t.id === licenseType)?.basePrice || 0;
    let govFees = 0;
    
    // Activity fees
    govFees += activityOptions.find(a => a.id === activityCount)?.price || 0;
    
    // CR Registration
    govFees += 65;
    
    // Chamber of Commerce
    govFees += 50;
    
    // Foreign nationality fee
    if (nationality === "foreign") govFees += 50;
    
    // Additional services
    selectedServices.forEach(serviceId => {
      govFees += additionalServices.find(s => s.id === serviceId)?.price || 0;
    });
    
    return { serviceFee, govFees, total: serviceFee + govFees };
  };

  const canProceed = () => {
    switch (step) {
      case 1: return licenseType !== null;
      case 2: return activityCount !== null;
      case 3: return nationality !== null;
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
    if (step > 1) setStep(step - 1);
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
    setLicenseType(null);
    setActivityCount(null);
    setNationality(null);
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
    <section id="calculator" ref={ref} className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            <Calculator className="w-4 h-4" />
            Instant Quote
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Calculate Your <span className="text-accent">Business License Cost</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an accurate estimate in 60 seconds. No obligation, no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-secondary">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-8 md:p-12">
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
                    {/* Step 1: License Type */}
                    {step === 1 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Select License Type</h3>
                        <p className="text-lg text-muted-foreground mb-10">What type of business license do you need?</p>
                        
                        <div className="grid grid-cols-2 gap-5">
                          {licenseTypes.map((type) => (
                            <motion.div
                              key={type.id}
                              whileHover={{ y: -6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setLicenseType(type.id)}
                              className={cn(
                                "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                                licenseType === type.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50 hover:shadow-sm"
                              )}
                            >
                              <div className={cn(
                                "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                                licenseType === type.id 
                                  ? "bg-gradient-to-br from-accent to-accent/80" 
                                  : "bg-secondary"
                              )}>
                                <type.icon className={cn(
                                  "h-7 w-7",
                                  licenseType === type.id ? "text-primary" : "text-muted-foreground"
                                )} />
                              </div>
                              <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                              <p className="text-accent font-bold text-xl">From BHD {type.basePrice}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Activity Count */}
                    {step === 2 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Number of Activities</h3>
                        <p className="text-lg text-muted-foreground mb-10">How many activities will be listed on your license?</p>
                        
                        <div className="grid grid-cols-2 gap-5">
                          {activityOptions.map((option) => (
                            <motion.div
                              key={option.id}
                              whileHover={{ y: -6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setActivityCount(option.id)}
                              className={cn(
                                "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                                activityCount === option.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50 hover:shadow-sm"
                              )}
                            >
                              <h4 className="font-bold text-primary text-xl mb-2">{option.label}</h4>
                              <p className="text-accent font-bold text-xl">+BHD {option.price}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Nationality */}
                    {step === 3 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Owner Nationality</h3>
                        <p className="text-lg text-muted-foreground mb-10">What is the nationality of the business owner(s)?</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          {nationalityOptions.map((option) => (
                            <motion.div
                              key={option.id}
                              whileHover={{ y: -6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setNationality(option.id)}
                              className={cn(
                                "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                                nationality === option.id
                                  ? "border-accent bg-accent/5 shadow-sm"
                                  : "border-border hover:border-accent/50 hover:shadow-sm"
                              )}
                            >
                              <div className={cn(
                                "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                                nationality === option.id 
                                  ? "bg-gradient-to-br from-accent to-accent/80" 
                                  : "bg-secondary"
                              )}>
                                <option.icon className={cn(
                                  "h-7 w-7",
                                  nationality === option.id ? "text-primary" : "text-muted-foreground"
                                )} />
                              </div>
                              <h4 className="font-bold text-primary text-xl mb-1">{option.name}</h4>
                              <p className="text-sm text-muted-foreground">{option.description}</p>
                              {option.fee > 0 && (
                                <p className="text-accent font-bold mt-2">+BHD {option.fee}</p>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Additional Services */}
                    {step === 4 && (
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Add-On Services</h3>
                        <p className="text-lg text-muted-foreground mb-10">Select any additional services you need (optional)</p>
                        
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
                                  "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
                                  selectedServices.includes(service.id)
                                    ? "bg-accent border-accent"
                                    : "border-border"
                                )}>
                                  {selectedServices.includes(service.id) && (
                                    <Check className="w-4 h-4 text-primary" />
                                  )}
                                </div>
                                <span className="font-semibold">{service.name}</span>
                              </div>
                              <span className="text-accent font-bold">+BHD {service.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between mt-10">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={step === 1}
                        className="border-2"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className="bg-accent hover:bg-accent/90 text-primary"
                      >
                        {step === totalSteps ? "View Quote" : "Continue"}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {!isSubmitted ? (
                      <div>
                        <div className="text-center mb-10">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-accent" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-2">Your Estimated Cost</h3>
                          <p className="text-muted-foreground">Enter your details to see the full breakdown</p>
                        </div>

                        {/* Lead Form */}
                        <div className="space-y-4 mb-8">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="Enter your name"
                              className={formErrors.name ? "border-red-500" : ""}
                            />
                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="Enter your email"
                              className={formErrors.email ? "border-red-500" : ""}
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input
                              id="phone"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              placeholder="Enter your phone"
                            />
                          </div>
                        </div>

                        <Button
                          onClick={handleLeadSubmit}
                          className="w-full bg-accent hover:bg-accent/90 text-primary py-6 text-lg"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          View My Quote
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="text-center mb-10">
                          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-2">Your Quote Summary</h3>
                          <p className="text-muted-foreground">We'll contact you within 24 hours</p>
                        </div>

                        {/* Results */}
                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between p-4 bg-secondary/60 rounded-xl">
                            <span className="font-medium">Service Fee</span>
                            <span className="font-bold">BHD {calculateTotal().serviceFee}</span>
                          </div>
                          <div className="flex justify-between p-4 bg-secondary/60 rounded-xl">
                            <span className="font-medium">Government Fees</span>
                            <span className="font-bold">BHD {calculateTotal().govFees}</span>
                          </div>
                          <div className="flex justify-between p-5 bg-accent/10 rounded-xl border-2 border-accent">
                            <span className="font-bold text-lg">Total Estimate</span>
                            <span className="font-bold text-2xl text-accent">BHD {calculateTotal().total}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-center mb-6">
                          This is an estimate. Final costs confirmed during consultation.
                        </p>

                        <Button
                          onClick={handleReset}
                          variant="outline"
                          className="w-full border-2"
                        >
                          Start New Quote
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
