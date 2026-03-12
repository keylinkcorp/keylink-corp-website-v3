import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  Building2, 
  Users,
  FileText,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  RefreshCw,
  Briefcase,
  GitBranch,
  Crown,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Clock,
  Zap,
  Globe,
  User,
  Edit,
  MapPin,
  DollarSign
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Registration types - MOVED TO STEP 1
const registrationTypes = [
  { id: "new", name: "New Registration", description: "First-time CR registration in Bahrain", icon: Building2, basePrice: 350 },
  { id: "amendment", name: "CR Amendment", description: "Modify existing CR details", icon: Edit, basePrice: 100 },
  { id: "renewal", name: "CR Renewal", description: "Annual renewal processing", icon: RefreshCw, basePrice: 150 },
];

// Entity types
const entityTypes = [
  { id: "SPC", name: "SPC", description: "Single Person Company", icon: Briefcase, govFee: 65 },
  { id: "WLL", name: "WLL", description: "Limited Liability", icon: Users, govFee: 65 },
  { id: "Branch", name: "Branch", description: "Branch Office", icon: GitBranch, govFee: 65 },
  { id: "Holding", name: "Holding", description: "Holding Company", icon: Crown, govFee: 65 },
];

// Activity count options
const activityOptions = [
  { id: "1-3", label: "1-3 Activities", price: 20, renewalPrice: 100 },
  { id: "4-6", label: "4-6 Activities", price: 50, renewalPrice: 150 },
  { id: "7-10", label: "7-10 Activities", price: 100, renewalPrice: 200 },
  { id: "10+", label: "10+ Activities", price: 200, renewalPrice: 300 },
];

// Amendment types (for CR Amendment flow)
const amendmentTypes = [
  { id: "activity", name: "Activity Change", description: "Add or remove commercial activities", icon: FileText, price: 100 },
  { id: "shareholder", name: "Shareholder Change", description: "Transfer or add shareholders", icon: Users, price: 150 },
  { id: "name", name: "Trade Name Change", description: "Change registered business name", icon: Edit, price: 75 },
  { id: "address", name: "Address Change", description: "Change registered address", icon: MapPin, price: 50 },
  { id: "capital", name: "Capital Change", description: "Increase or decrease capital", icon: DollarSign, price: 100 },
];

// Applicant types (for New Registration flow)
const applicantTypes = [
  { id: "bahraini", name: "Bahraini National", description: "Bahrain citizen", icon: User, fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", icon: Globe, fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Other nationalities - requires security clearance", icon: Globe, fee: 50 },
];

// Capital ranges (for New Registration flow)
const capitalRanges = [
  { id: "below-50k", name: "Below BHD 50,000", description: "Small business capital", notaryFee: 50 },
  { id: "50k-250k", name: "BHD 50,000 - 250,000", description: "Medium business capital", notaryFee: 100 },
  { id: "above-250k", name: "Above BHD 250,000", description: "Large business capital", notaryFee: 150 },
];

// Renewal status (for CR Renewal flow)
const renewalStatuses = [
  { id: "ontime", name: "On-Time", description: "Before or at expiry date", icon: Check, penalty: 0 },
  { id: "1-3months", name: "1-3 Months Late", description: "BHD 10/month penalty applies", icon: Clock, penalty: 30 },
  { id: "3-6months", name: "3-6 Months Late", description: "BHD 20/month penalty applies", icon: AlertCircle, penalty: 80 },
  { id: "6plus", name: "6+ Months Late", description: "Risk of CR deletion + high penalty", icon: AlertCircle, penalty: 150 },
];

// Urgency levels (for CR Amendment flow)
const urgencyLevels = [
  { id: "standard", name: "Standard Processing", description: "2-3 weeks processing time", icon: Clock, fee: 0 },
  { id: "express", name: "Express Processing", description: "1 week processing time", icon: Zap, fee: 100 },
];

// Additional services by registration type
const additionalServicesByType = {
  new: [
    { id: "name", name: "Name Reservation", price: 50 },
    { id: "virtual", name: "Virtual Office (1 Year)", price: 450 },
    { id: "lmra", name: "LMRA Registration", price: 100 },
    { id: "bank", name: "Bank Account Support", price: 150 },
    { id: "pro", name: "PRO Retainer (1 Year)", price: 600 },
  ],
  amendment: [
    { id: "notarization", name: "Document Notarization", price: 75 },
    { id: "translation", name: "Arabic Translation", price: 100 },
    { id: "pro", name: "Express PRO Support", price: 200 },
  ],
  renewal: [
    { id: "pro", name: "PRO Support", price: 150 },
    { id: "documents", name: "Document Collection", price: 75 },
    { id: "address", name: "Address Verification", price: 50 },
  ],
};

export function CRCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  
  // Step 1: Registration Type (determines flow)
  const [registrationType, setRegistrationType] = useState<string | null>(null);
  
  // Common state
  const [entityType, setEntityType] = useState<string | null>(null);
  const [activityCount, setActivityCount] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // New Registration specific state
  const [applicantType, setApplicantType] = useState<string | null>(null);
  const [capitalRange, setCapitalRange] = useState<string | null>(null);
  
  // Amendment specific state
  const [selectedAmendments, setSelectedAmendments] = useState<string[]>([]);
  const [urgencyLevel, setUrgencyLevel] = useState<string | null>(null);
  
  // Renewal specific state
  const [renewalStatus, setRenewalStatus] = useState<string | null>(null);
  
  // UI state
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic steps based on registration type
  const getSteps = () => {
    switch (registrationType) {
      case "new":
        return ["Registration Type", "Entity Type", "Activities", "Applicant Type", "Capital Range", "Additional Services"];
      case "amendment":
        return ["Registration Type", "Amendment Types", "Entity Type", "Urgency", "Additional Services"];
      case "renewal":
        return ["Registration Type", "Entity Type", "Renewal Status", "Activities", "Additional Services"];
      default:
        return ["Registration Type"];
    }
  };

  const totalSteps = getSteps().length;
  const progress = registrationType ? (step / totalSteps) * 100 : (step / 1) * 100;

  // Get current additional services based on registration type
  const getCurrentAdditionalServices = () => {
    return additionalServicesByType[registrationType as keyof typeof additionalServicesByType] || [];
  };

  // Calculate costs
  const calculateTotal = () => {
    let total = 0;
    
    if (registrationType === "new") {
      // Base service fee
      total += 350;
      // Entity government fee
      const selectedEntity = entityTypes.find(e => e.id === entityType);
      if (selectedEntity) total += selectedEntity.govFee;
      // Chamber of Commerce
      total += 50;
      // Activity fees
      total += activityOptions.find(a => a.id === activityCount)?.price || 0;
      // Foreign applicant security check
      if (applicantType === "foreign") total += 50;
      // Capital-based notary fees
      total += capitalRanges.find(c => c.id === capitalRange)?.notaryFee || 0;
    }
    
    else if (registrationType === "amendment") {
      // Base service fee
      total += 100;
      // Sum of selected amendment types
      selectedAmendments.forEach(id => {
        total += amendmentTypes.find(a => a.id === id)?.price || 0;
      });
      // Express processing
      if (urgencyLevel === "express") total += 100;
    }
    
    else if (registrationType === "renewal") {
      // Base service fee
      total += 150;
      // Entity renewal fee
      total += 50;
      // Chamber renewal
      total += 16;
      // Activity renewal
      total += activityOptions.find(a => a.id === activityCount)?.renewalPrice || 100;
      // Late penalties
      total += renewalStatuses.find(s => s.id === renewalStatus)?.penalty || 0;
    }
    
    // Add selected additional services
    const services = getCurrentAdditionalServices();
    selectedServices.forEach(serviceId => {
      total += services.find(s => s.id === serviceId)?.price || 0;
    });
    
    return total;
  };

  const canProceed = () => {
    if (!registrationType && step === 1) return registrationType !== null;
    
    const steps = getSteps();
    const currentStepName = steps[step - 1];
    
    switch (currentStepName) {
      case "Registration Type": return registrationType !== null;
      case "Entity Type": return entityType !== null;
      case "Activities": return activityCount !== null;
      case "Applicant Type": return applicantType !== null;
      case "Capital Range": return capitalRange !== null;
      case "Amendment Types": return selectedAmendments.length > 0;
      case "Urgency": return urgencyLevel !== null;
      case "Renewal Status": return renewalStatus !== null;
      case "Additional Services": return true;
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

  const handleRegistrationTypeSelect = (typeId: string) => {
    setRegistrationType(typeId);
    // Reset type-specific states when changing registration type
    setEntityType(null);
    setActivityCount(null);
    setApplicantType(null);
    setCapitalRange(null);
    setSelectedAmendments([]);
    setUrgencyLevel(null);
    setRenewalStatus(null);
    setSelectedServices([]);
  };

  const handleAmendmentToggle = (amendmentId: string) => {
    setSelectedAmendments(prev => 
      prev.includes(amendmentId) 
        ? prev.filter(id => id !== amendmentId)
        : [...prev, amendmentId]
    );
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
    setRegistrationType(null);
    setEntityType(null);
    setActivityCount(null);
    setApplicantType(null);
    setCapitalRange(null);
    setSelectedAmendments([]);
    setUrgencyLevel(null);
    setRenewalStatus(null);
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

  // Render current step content based on registration type
  const renderStepContent = () => {
    const steps = getSteps();
    const currentStepName = steps[step - 1];

    switch (currentStepName) {
      case "Registration Type":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              What Do You Need?
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Select the type of CR service you require
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {registrationTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleRegistrationTypeSelect(type.id)}
                  className={cn(
                    "p-8 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    registrationType === type.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    registrationType === type.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <type.icon className={cn(
                      "h-7 w-7",
                      registrationType === type.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-accent font-bold text-xl">From BHD {type.basePrice}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Entity Type":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {registrationType === "new" ? "Choose Entity Type" : "Current Entity Type"}
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              {registrationType === "new" 
                ? "Select the type of commercial registration you need"
                : "What type of CR do you currently have?"
              }
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {entityTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEntityType(type.id)}
                  className={cn(
                    "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    entityType === type.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    entityType === type.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <type.icon className={cn(
                      "h-7 w-7",
                      entityType === type.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-accent font-bold">Gov. Fee: BHD {type.govFee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Activities":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Number of Commercial Activities
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              {registrationType === "new" 
                ? "How many activities will be listed on your CR?"
                : "How many activities are on your current CR?"
              }
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    activityCount === option.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <FileText className={cn(
                      "h-7 w-7",
                      activityCount === option.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-lg">{option.label}</h4>
                  <p className="text-accent font-bold text-xl mt-2">
                    BHD {registrationType === "renewal" ? option.renewalPrice : option.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Applicant Type":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Applicant Nationality
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              This affects security clearance requirements and processing time
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {applicantTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setApplicantType(type.id)}
                  className={cn(
                    "p-8 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    applicantType === type.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    applicantType === type.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <type.icon className={cn(
                      "h-7 w-7",
                      applicantType === type.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  {type.fee > 0 && (
                    <p className="text-accent font-bold">+BHD {type.fee} Security Fee</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Capital Range":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Registered Capital
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Your company's registered capital affects notarization fees
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {capitalRanges.map((range) => (
                <motion.div
                  key={range.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCapitalRange(range.id)}
                  className={cn(
                    "p-8 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    capitalRange === range.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    capitalRange === range.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <DollarSign className={cn(
                      "h-7 w-7",
                      capitalRange === range.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-1">{range.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{range.description}</p>
                  <p className="text-accent font-bold">Notary: BHD {range.notaryFee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Amendment Types":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              What Changes Do You Need?
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Select all amendment types that apply to your CR
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {amendmentTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -4 }}
                  onClick={() => handleAmendmentToggle(type.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-5",
                    selectedAmendments.includes(type.id)
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0",
                    selectedAmendments.includes(type.id)
                      ? "bg-accent border-accent"
                      : "border-border"
                  )}>
                    {selectedAmendments.includes(type.id) && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                    selectedAmendments.includes(type.id)
                      ? "bg-gradient-to-br from-accent to-accent/80"
                      : "bg-secondary"
                  )}>
                    <type.icon className={cn(
                      "h-6 w-6",
                      selectedAmendments.includes(type.id) ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary text-lg">{type.name}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <span className="text-accent font-bold text-lg shrink-0">BHD {type.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Urgency":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Processing Speed
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              How quickly do you need your amendment processed?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {urgencyLevels.map((level) => (
                <motion.div
                  key={level.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setUrgencyLevel(level.id)}
                  className={cn(
                    "p-8 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    urgencyLevel === level.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                    urgencyLevel === level.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <level.icon className={cn(
                      "h-7 w-7",
                      urgencyLevel === level.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-1">{level.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                  {level.fee > 0 ? (
                    <p className="text-accent font-bold text-xl">+BHD {level.fee}</p>
                  ) : (
                    <p className="text-muted-foreground font-medium">Included</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Renewal Status":
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Renewal Status
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              When did your CR expire? Late renewals incur penalties
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {renewalStatuses.map((status) => (
                <motion.div
                  key={status.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setRenewalStatus(status.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    renewalStatus === status.id
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all",
                    renewalStatus === status.id 
                      ? "bg-gradient-to-br from-accent to-accent/80" 
                      : "bg-secondary"
                  )}>
                    <status.icon className={cn(
                      "h-6 w-6",
                      renewalStatus === status.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-1">{status.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{status.description}</p>
                  {status.penalty > 0 ? (
                    <p className="text-destructive font-bold">+BHD {status.penalty} Penalty</p>
                  ) : (
                    <p className="text-green-600 font-bold">No Penalty</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "Additional Services":
        const services = getCurrentAdditionalServices();
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Additional Services
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              Select any additional services you need (optional)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -4 }}
                  onClick={() => handleServiceToggle(service.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-5",
                    selectedServices.includes(service.id)
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/50 hover:shadow-sm"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                    selectedServices.includes(service.id)
                      ? "bg-accent border-accent"
                      : "border-border"
                  )}>
                    {selectedServices.includes(service.id) && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary text-lg">{service.name}</h4>
                  </div>
                  <span className="text-accent font-bold text-lg">+BHD {service.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render results breakdown based on registration type
  const renderResultsBreakdown = () => {
    const services = getCurrentAdditionalServices();
    
    return (
      <div className="space-y-4 mb-8">
        {registrationType === "new" && (
          <>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Service Fee (New Registration)</span>
              <span className="font-bold text-xl text-primary">BHD 350</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Entity Type ({entityType})</span>
              <span className="font-bold text-xl text-primary">
                BHD {entityTypes.find(e => e.id === entityType)?.govFee}
              </span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Chamber of Commerce</span>
              <span className="font-bold text-xl text-primary">BHD 50</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Trade License ({activityCount} activities)</span>
              <span className="font-bold text-xl text-primary">
                BHD {activityOptions.find(a => a.id === activityCount)?.price}
              </span>
            </div>
            {applicantType === "foreign" && (
              <div className="flex justify-between py-4 border-b-2 border-border">
                <span className="text-muted-foreground font-medium">Security Clearance Fee</span>
                <span className="font-bold text-xl text-primary">BHD 50</span>
              </div>
            )}
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Notary Fee ({capitalRanges.find(c => c.id === capitalRange)?.name})</span>
              <span className="font-bold text-xl text-primary">
                BHD {capitalRanges.find(c => c.id === capitalRange)?.notaryFee}
              </span>
            </div>
          </>
        )}

        {registrationType === "amendment" && (
          <>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Service Fee (CR Amendment)</span>
              <span className="font-bold text-xl text-primary">BHD 100</span>
            </div>
            {selectedAmendments.map(id => {
              const amendment = amendmentTypes.find(a => a.id === id);
              return amendment ? (
                <div key={id} className="flex justify-between py-4 border-b-2 border-border">
                  <span className="text-muted-foreground font-medium">{amendment.name}</span>
                  <span className="font-bold text-xl text-primary">BHD {amendment.price}</span>
                </div>
              ) : null;
            })}
            {urgencyLevel === "express" && (
              <div className="flex justify-between py-4 border-b-2 border-border">
                <span className="text-muted-foreground font-medium">Express Processing</span>
                <span className="font-bold text-xl text-primary">BHD 100</span>
              </div>
            )}
          </>
        )}

        {registrationType === "renewal" && (
          <>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Service Fee (CR Renewal)</span>
              <span className="font-bold text-xl text-primary">BHD 150</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Entity Renewal Fee</span>
              <span className="font-bold text-xl text-primary">BHD 50</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Chamber of Commerce</span>
              <span className="font-bold text-xl text-primary">BHD 16</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">Activity Renewal ({activityCount})</span>
              <span className="font-bold text-xl text-primary">
                BHD {activityOptions.find(a => a.id === activityCount)?.renewalPrice}
              </span>
            </div>
            {renewalStatus && renewalStatuses.find(s => s.id === renewalStatus)?.penalty > 0 && (
              <div className="flex justify-between py-4 border-b-2 border-destructive/30 bg-destructive/5 -mx-2 px-2 rounded">
                <span className="text-destructive font-medium">Late Penalty ({renewalStatuses.find(s => s.id === renewalStatus)?.name})</span>
                <span className="font-bold text-xl text-destructive">
                  BHD {renewalStatuses.find(s => s.id === renewalStatus)?.penalty}
                </span>
              </div>
            )}
          </>
        )}

        {selectedServices.map(serviceId => {
          const service = services.find(s => s.id === serviceId);
          return service ? (
            <div key={serviceId} className="flex justify-between py-4 border-b-2 border-border">
              <span className="text-muted-foreground font-medium">{service.name}</span>
              <span className="font-bold text-xl text-primary">BHD {service.price}</span>
            </div>
          ) : null;
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Calculate Your CR Registration Costs
          </h2>
          <p className="text-xl text-muted-foreground leading-[1.8]">
            Get an instant estimate for your commercial registration. 
            Answer a few questions and receive a detailed cost breakdown.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm p-8 md:p-12 hover:border-accent/30 transition-colors">
            {/* Progress Bar */}
            {!showResult && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-bold text-accent">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-80, 400] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
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
                  {renderStepContent()}
                </motion.div>
              ) : (
                /* Results & Lead Capture */
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  {!isSubmitted ? (
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Cost Breakdown */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-accent" />
                          </div>
                          Your Estimate
                        </h3>
                        
                        {renderResultsBreakdown()}
                        
                        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary">Estimated Total</span>
                            <span className="text-4xl font-bold text-accent">
                              BHD {calculateTotal().toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3">
                            Government fees included. Final quote based on specific requirements.
                          </p>
                        </div>
                      </div>
                      
                      {/* Lead Capture Form */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Send className="h-5 w-5 text-primary" />
                          </div>
                          Get Your Detailed Quote
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Enter your details and we'll send you a comprehensive proposal.
                        </p>
                        
                        <div className="space-y-5">
                          <div>
                            <Label htmlFor="name" className="text-primary font-semibold">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="John Smith"
                              className={cn(
                                "mt-2 h-12 text-lg border-2",
                                formErrors.name ? "border-destructive" : "border-border focus:border-accent"
                              )}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email" className="text-primary font-semibold">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="john@company.com"
                              className={cn(
                                "mt-2 h-12 text-lg border-2",
                                formErrors.email ? "border-destructive" : "border-border focus:border-accent"
                              )}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="text-primary font-semibold">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              placeholder="+973 1700 0000"
                              className="mt-2 h-12 text-lg border-2 border-border focus:border-accent"
                            />
                          </div>
                          
                          <Button
                            onClick={handleLeadSubmit}
                            className="w-full bg-accent hover:bg-accent/90 text-primary h-14 text-lg font-bold mt-4 shadow-lg hover:shadow-xl transition-all group"
                          >
                            Get Detailed Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          
                          <button
                            onClick={handleReset}
                            className="w-full text-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mt-2"
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Success State */
                    <div className="text-center py-16">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                      >
                        <Check className="h-12 w-12 text-green-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-primary mb-4">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
                        Thank you for your interest. Our team will review your requirements 
                        and contact you within 24 hours with a detailed proposal.
                      </p>
                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-8 font-bold"
                      >
                        Calculate Another Quote
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {!showResult && (
              <div className="flex justify-between mt-12 pt-8 border-t-2 border-border">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="border-2 border-border text-muted-foreground hover:text-primary hover:border-primary h-12 px-6 font-semibold"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  {step === totalSteps ? "Calculate" : "Continue"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
