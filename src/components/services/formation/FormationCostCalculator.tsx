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
  Building2, 
  Briefcase, 
  Users, 
  User,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Globe,
  Landmark,
  FileText,
  Clock,
  AlertCircle,
  Info
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// ===== COMPANY TYPES =====
const companyTypes = [
  { 
    id: "wll", 
    name: "WLL", 
    description: "Limited Liability Company",
    subtitle: "Most popular for businesses",
    basePrice: 850,
    govFees: 200,
    timeline: "5-7 days",
    icon: Building2
  },
  { 
    id: "spc", 
    name: "SPC", 
    description: "Single Person Company",
    subtitle: "Perfect for solo entrepreneurs",
    basePrice: 750,
    govFees: 150,
    timeline: "3-5 days",
    icon: User
  },
  { 
    id: "branch", 
    name: "Branch Office", 
    description: "Extension of foreign company",
    subtitle: "For international expansion",
    basePrice: 1200,
    govFees: 250,
    timeline: "7-10 days",
    icon: Globe
  },
  { 
    id: "holding", 
    name: "Holding Company", 
    description: "Asset & subsidiary management",
    subtitle: "For corporate structures",
    basePrice: 2000,
    govFees: 500,
    timeline: "10-15 days",
    icon: Landmark
  },
];

// ===== WLL-SPECIFIC OPTIONS =====
const ownershipStructures = [
  { id: "solo", name: "Solo Owner", description: "Single shareholder (1 person)", fee: 0 },
  { id: "partnership", name: "Partnership", description: "2-50 shareholders", fee: 150 },
];

const ownerNationalities = [
  { id: "bahraini", name: "Bahraini National", description: "Bahrain citizen", fee: 0 },
  { id: "gcc", name: "GCC National", description: "Saudi, UAE, Qatar, Kuwait, Oman", fee: 0 },
  { id: "foreign", name: "Foreign National", description: "Security approval required", fee: 50 },
];

const businessActivities = [
  { id: "consulting", name: "Consulting & Professional", regulated: false, fee: 0, icon: Briefcase },
  { id: "trading", name: "General Trading", regulated: false, fee: 0, icon: Building2 },
  { id: "tech", name: "Technology & IT", regulated: false, fee: 0, icon: Globe },
  { id: "manufacturing", name: "Manufacturing", regulated: false, fee: 0, icon: Building2 },
  { id: "retail", name: "Retail & E-commerce", regulated: true, fee: 100, note: "May require local partner", icon: Building2 },
  { id: "fnb", name: "Food & Beverage", regulated: true, fee: 150, note: "Municipality + health permits", icon: Building2 },
  { id: "healthcare", name: "Healthcare & Medical", regulated: true, fee: 300, note: "NHRA approval required", icon: Building2 },
  { id: "financial", name: "Financial Services", regulated: true, fee: 500, note: "CBB approval required", icon: Landmark },
];

const officeTypes = [
  { id: "virtual", name: "Virtual Office", description: "Address only, no physical space", price: 300, visaQuota: 0 },
  { id: "serviced", name: "Serviced Office", description: "Shared workspace with desk", price: 600, visaQuota: 2 },
  { id: "small", name: "Small Office", description: "Private office (1-3 desks)", price: 900, visaQuota: 4 },
  { id: "standard", name: "Standard Office", description: "Private office (4-10 desks)", price: 1200, visaQuota: 10 },
];

const visaPackages = [
  { id: "0", label: "No Visas Needed", count: 0, pricePerVisa: 0, total: 0 },
  { id: "1", label: "1 Investor Visa", count: 1, pricePerVisa: 350, total: 350 },
  { id: "2-3", label: "2-3 Work Visas", count: 3, pricePerVisa: 300, total: 900 },
  { id: "4-6", label: "4-6 Work Visas", count: 6, pricePerVisa: 280, total: 1680 },
  { id: "7-10", label: "7-10 Work Visas", count: 10, pricePerVisa: 250, total: 2500 },
];

// ===== BRANCH-SPECIFIC OPTIONS =====
const parentLocations = [
  { id: "gcc", name: "GCC Country", description: "Saudi, UAE, Qatar, Kuwait, Oman", processingFee: 100 },
  { id: "arab", name: "Other Arab Country", description: "Egypt, Jordan, Lebanon, etc.", processingFee: 150 },
  { id: "western", name: "US / EU / UK", description: "Western countries", processingFee: 200 },
  { id: "asia", name: "Asia / Other", description: "China, India, etc.", processingFee: 250 },
];

const documentStatuses = [
  { id: "ready", name: "Already Apostilled", description: "Documents ready for submission", fee: 0 },
  { id: "need", name: "Need Apostille Service", description: "We'll handle document legalization", fee: 200 },
];

const branchActivities = [
  { id: "same", name: "Same as Parent", description: "Identical activities as parent company", fee: 0 },
  { id: "different", name: "Different Activities", description: "New activities for Bahrain branch", fee: 150 },
];

const staffOptions = [
  { id: "manager", name: "Manager Only", description: "1 branch manager", visaCost: 350, count: 1 },
  { id: "1-3", name: "1-3 Staff", description: "Small team", visaCost: 900, count: 3 },
  { id: "4-10", name: "4-10 Staff", description: "Medium team", visaCost: 2400, count: 8 },
  { id: "10+", name: "10+ Staff", description: "Large team", visaCost: 4500, count: 15 },
];

// ===== HOLDING-SPECIFIC OPTIONS =====
const capitalRanges = [
  { id: "min", name: "Minimum (BHD 250,000)", description: "Standard holding structure", capital: 250000, notaryFee: 300 },
  { id: "mid", name: "Mid-Range (BHD 500,000)", description: "Multiple subsidiaries", capital: 500000, notaryFee: 500 },
  { id: "large", name: "Large (BHD 1M+)", description: "Complex structure", capital: 1000000, notaryFee: 800 },
];

const shareholderCounts = [
  { id: "2-5", name: "2-5 Shareholders", description: "Standard partnership", agreementFee: 200 },
  { id: "6-10", name: "6-10 Shareholders", description: "Complex agreement", agreementFee: 350 },
  { id: "11-50", name: "11-50 Shareholders", description: "Extensive agreement", agreementFee: 500 },
];

const subsidiaryPlans = [
  { id: "hold-only", name: "Holding Only", description: "No immediate subsidiaries", discount: 0 },
  { id: "1-2-subs", name: "With 1-2 Subsidiaries", description: "Formation of operating companies", discount: 10 },
  { id: "3-plus", name: "With 3+ Subsidiaries", description: "Large corporate group", discount: 15 },
];

// ===== ADDITIONAL SERVICES BY TYPE =====
const additionalServicesByType: Record<string, { id: string; name: string; price: number }[]> = {
  wll: [
    { id: "bank", name: "Bank Account Support", price: 150 },
    { id: "pro", name: "PRO Services (1 Year)", price: 600 },
    { id: "accounting", name: "Accounting Setup", price: 300 },
    { id: "lmra", name: "LMRA Registration", price: 100 },
  ],
  spc: [
    { id: "bank", name: "Bank Account Support", price: 150 },
    { id: "pro", name: "PRO Services (1 Year)", price: 500 },
    { id: "accounting", name: "Accounting Setup", price: 250 },
    { id: "investor-visa", name: "Investor Visa Processing", price: 350 },
  ],
  branch: [
    { id: "bank", name: "Bank Account Support", price: 150 },
    { id: "pro", name: "PRO Services (1 Year)", price: 600 },
    { id: "liaison", name: "Parent Company Liaison", price: 250 },
    { id: "translation", name: "Document Translation", price: 150 },
  ],
  holding: [
    { id: "structuring", name: "Corporate Structuring Advisory", price: 500 },
    { id: "tax", name: "Tax Planning Consultation", price: 400 },
    { id: "compliance", name: "Annual Compliance Package", price: 750 },
    { id: "bank", name: "Bank Account Support", price: 150 },
  ],
};

interface LineItem {
  label: string;
  amount: number;
}

export type FormationCalculatorSnapshot = {
  companyType: string;
  timeline?: string;
  total: number;
  breakdown: LineItem[];
};

type FormationCostCalculatorProps = {
  /** When true, removes the outer section padding/background so it can be embedded into a landing page canvas. */
  embedded?: boolean;
  /** When false, hides the calculator header block (title/description). */
  showHeader?: boolean;
  /** Called when the user reaches the Results screen (e.g., presses "See Results"). */
  onSeeResults?: (snapshot: FormationCalculatorSnapshot) => void;
};

export function FormationCostCalculator({
  embedded = false,
  showHeader = true,
  onSeeResults,
}: FormationCostCalculatorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Core state
  const [step, setStep] = useState(1);
  const [companyType, setCompanyType] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // WLL-specific state
  const [ownershipStructure, setOwnershipStructure] = useState<string | null>(null);
  const [ownerNationality, setOwnerNationality] = useState<string | null>(null);
  const [businessActivity, setBusinessActivity] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [visaPackage, setVisaPackage] = useState<string | null>(null);
  
  // Branch-specific state
  const [parentLocation, setParentLocation] = useState<string | null>(null);
  const [documentStatus, setDocumentStatus] = useState<string | null>(null);
  const [branchActivity, setBranchActivity] = useState<string | null>(null);
  const [staffCount, setStaffCount] = useState<string | null>(null);
  
  // Holding-specific state
  const [capitalRange, setCapitalRange] = useState<string | null>(null);
  const [shareholderCount, setShareholderCount] = useState<string | null>(null);
  const [subsidiaryPlan, setSubsidiaryPlan] = useState<string | null>(null);
  
  // Common state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Dynamic step logic
  const getSteps = () => {
    switch (companyType) {
      case "wll":
        return [
          "Company Type",
          "Ownership Structure", 
          "Owner Nationality",
          "Business Activity",
          "Visa Requirements",
          "Office Type",
          "Additional Services"
        ];
      case "spc":
        return [
          "Company Type",
          "Owner Nationality",
          "Business Activity",
          "Office Type",
          "Additional Services"
        ];
      case "branch":
        return [
          "Company Type",
          "Parent Location",
          "Document Status",
          "Business Activity",
          "Staff Requirements",
          "Additional Services"
        ];
      case "holding":
        return [
          "Company Type",
          "Capital Structure",
          "Shareholders",
          "Subsidiary Planning",
          "Additional Services"
        ];
      default:
        return ["Company Type"];
    }
  };

  const totalSteps = getSteps().length;
  const progress = (step / totalSteps) * 100;

  // Calculate costs with detailed breakdown
  const calculateTotal = (): { total: number; breakdown: LineItem[] } => {
    let total = 0;
    const breakdown: LineItem[] = [];
    
    if (companyType === "wll") {
      // Base service fee
      total += 850;
      breakdown.push({ label: "WLL Formation Service", amount: 850 });
      
      // Government fees
      total += 200;
      breakdown.push({ label: "Government Fees (CR, License)", amount: 200 });
      
      // Partnership agreement
      if (ownershipStructure === "partnership") {
        total += 150;
        breakdown.push({ label: "Partnership Agreement", amount: 150 });
      }
      
      // Foreign security approval
      if (ownerNationality === "foreign") {
        total += 50;
        breakdown.push({ label: "Security Approval (Foreign)", amount: 50 });
      }
      
      // Regulated activity fees
      const activity = businessActivities.find(a => a.id === businessActivity);
      if (activity?.regulated) {
        total += activity.fee;
        breakdown.push({ label: `${activity.name} License`, amount: activity.fee });
      }
      
      // Office
      const office = officeTypes.find(o => o.id === officeType);
      if (office) {
        total += office.price;
        breakdown.push({ label: `${office.name} (1 Year)`, amount: office.price });
      }
      
      // Visas
      const visa = visaPackages.find(v => v.id === visaPackage);
      if (visa && visa.total > 0) {
        total += visa.total;
        breakdown.push({ label: visa.label, amount: visa.total });
      }
    }
    
    else if (companyType === "spc") {
      // Base service fee
      total += 750;
      breakdown.push({ label: "SPC Formation Service", amount: 750 });
      
      // Government fees
      total += 150;
      breakdown.push({ label: "Government Fees (CR, License)", amount: 150 });
      
      // Foreign security approval
      if (ownerNationality === "foreign") {
        total += 50;
        breakdown.push({ label: "Security Approval (Foreign)", amount: 50 });
      }
      
      // Regulated activity fees
      const activity = businessActivities.find(a => a.id === businessActivity);
      if (activity?.regulated) {
        total += activity.fee;
        breakdown.push({ label: `${activity.name} License`, amount: activity.fee });
      }
      
      // Office
      const office = officeTypes.find(o => o.id === officeType);
      if (office) {
        total += office.price;
        breakdown.push({ label: `${office.name} (1 Year)`, amount: office.price });
      }
    }
    
    else if (companyType === "branch") {
      // Base service fee
      total += 1200;
      breakdown.push({ label: "Branch Office Formation", amount: 1200 });
      
      // Government fees
      total += 250;
      breakdown.push({ label: "Government Fees", amount: 250 });
      
      // Document processing by location
      const location = parentLocations.find(l => l.id === parentLocation);
      if (location) {
        total += location.processingFee;
        breakdown.push({ label: `Document Processing (${location.name})`, amount: location.processingFee });
      }
      
      // Apostille service
      const docStatus = documentStatuses.find(d => d.id === documentStatus);
      if (docStatus && docStatus.fee > 0) {
        total += docStatus.fee;
        breakdown.push({ label: "Apostille Service", amount: docStatus.fee });
      }
      
      // Different activities
      const activityOption = branchActivities.find(a => a.id === branchActivity);
      if (activityOption && activityOption.fee > 0) {
        total += activityOption.fee;
        breakdown.push({ label: "Additional Activity License", amount: activityOption.fee });
      }
      
      // Staff visas
      const staff = staffOptions.find(s => s.id === staffCount);
      if (staff) {
        total += staff.visaCost;
        breakdown.push({ label: `Staff Visas (${staff.name})`, amount: staff.visaCost });
      }
    }
    
    else if (companyType === "holding") {
      // Base service fee
      total += 2000;
      breakdown.push({ label: "Holding Company Formation", amount: 2000 });
      
      // Government fees
      total += 500;
      breakdown.push({ label: "Government Fees", amount: 500 });
      
      // Capital-based notary fees
      const capital = capitalRanges.find(c => c.id === capitalRange);
      if (capital) {
        total += capital.notaryFee;
        breakdown.push({ label: `Notarization (${capital.name})`, amount: capital.notaryFee });
      }
      
      // Shareholder agreement complexity
      const shareholders = shareholderCounts.find(s => s.id === shareholderCount);
      if (shareholders) {
        total += shareholders.agreementFee;
        breakdown.push({ label: `Shareholders Agreement (${shareholders.name})`, amount: shareholders.agreementFee });
      }
      
      // Subsidiary discount
      const plan = subsidiaryPlans.find(p => p.id === subsidiaryPlan);
      if (plan && plan.discount > 0) {
        const discount = Math.round(total * (plan.discount / 100));
        total -= discount;
        breakdown.push({ label: `Package Discount (${plan.discount}%)`, amount: -discount });
      }
    }
    
    // Add selected additional services
    if (companyType) {
      selectedServices.forEach(serviceId => {
        const service = additionalServicesByType[companyType]?.find(s => s.id === serviceId);
        if (service) {
          total += service.price;
          breakdown.push({ label: service.name, amount: service.price });
        }
      });
    }
    
    return { total, breakdown };
  };

  const canProceed = () => {
    if (step === 1) return companyType !== null;
    
    if (companyType === "wll") {
      switch (step) {
        case 2: return ownershipStructure !== null;
        case 3: return ownerNationality !== null;
        case 4: return businessActivity !== null;
        case 5: return visaPackage !== null;
        case 6: return officeType !== null;
        case 7: return true; // Additional services optional
        default: return false;
      }
    }
    
    if (companyType === "spc") {
      switch (step) {
        case 2: return ownerNationality !== null;
        case 3: return businessActivity !== null;
        case 4: return officeType !== null;
        case 5: return true; // Additional services optional
        default: return false;
      }
    }
    
    if (companyType === "branch") {
      switch (step) {
        case 2: return parentLocation !== null;
        case 3: return documentStatus !== null;
        case 4: return branchActivity !== null;
        case 5: return staffCount !== null;
        case 6: return true;
        default: return false;
      }
    }
    
    if (companyType === "holding") {
      switch (step) {
        case 2: return capitalRange !== null;
        case 3: return shareholderCount !== null;
        case 4: return subsidiaryPlan !== null;
        case 5: return true;
        default: return false;
      }
    }
    
    return false;
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }

    const { total, breakdown } = calculateTotal();
    const selectedTypeData = companyTypes.find((t) => t.id === companyType);

    if (companyType) {
      onSeeResults?.({
        companyType,
        timeline: selectedTypeData?.timeline,
        total,
        breakdown,
      });
    }

    setShowResult(true);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCompanyTypeSelect = (typeId: string) => {
    if (typeId !== companyType) {
      // Reset all type-specific states
      setOwnershipStructure(null);
      setOwnerNationality(null);
      setBusinessActivity(null);
      setOfficeType(null);
      setVisaPackage(null);
      setParentLocation(null);
      setDocumentStatus(null);
      setBranchActivity(null);
      setStaffCount(null);
      setCapitalRange(null);
      setShareholderCount(null);
      setSubsidiaryPlan(null);
      setSelectedServices([]);
    }
    setCompanyType(typeId);
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
    setCompanyType(null);
    setOwnershipStructure(null);
    setOwnerNationality(null);
    setBusinessActivity(null);
    setOfficeType(null);
    setVisaPackage(null);
    setParentLocation(null);
    setDocumentStatus(null);
    setBranchActivity(null);
    setStaffCount(null);
    setCapitalRange(null);
    setShareholderCount(null);
    setSubsidiaryPlan(null);
    setSelectedServices([]);
    setShowResult(false);
    setLeadForm({ name: "", email: "", phone: "" });
    setFormErrors({});
    setIsSubmitted(false);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const tileBase =
    "group rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm cursor-pointer transition-all";
  const tileUnselected = "hover:border-accent/40 hover:shadow-sm";
  const tileSelected = "ring-1 ring-accent/40 border-accent/30 bg-accent/5 shadow-sm";
  const tilePad = "p-5 md:p-6";
  const iconClass = (selected: boolean) =>
    cn("h-8 w-8 mb-3 transition-colors", selected ? "text-accent" : "text-muted-foreground");

  // Render step content based on company type and step
  const renderStepContent = () => {
    // Step 1: Company Type (same for all)
    if (step === 1) {
      return (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Choose Company Type</h3>
          <p className="text-muted-foreground mb-8">
            Select the type of company you want to register in Bahrain
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {companyTypes.map((type) => {
              const selected = companyType === type.id;
              return (
                <motion.div
                  key={type.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCompanyTypeSelect(type.id)}
                  className={cn(tileBase, tilePad, selected ? tileSelected : tileUnselected)}
                >
                  <type.icon className={cn("h-10 w-10 mb-4", selected ? "text-accent" : "text-muted-foreground")} />
                  <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{type.description}</p>
                  <p className="text-xs text-muted-foreground mb-3">{type.subtitle}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <span className="text-accent font-bold">
                      from BHD {type.basePrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {type.timeline}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    // WLL Flow
    if (companyType === "wll") {
      if (step === 2) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Ownership Structure
            </h3>
            <p className="text-muted-foreground mb-8">
              How many shareholders will the company have?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ownershipStructures.map((structure) => (
                <motion.div
                  key={structure.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOwnershipStructure(structure.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    ownershipStructure === structure.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Users className={cn(
                    "h-8 w-8 mb-3",
                    ownershipStructure === structure.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary text-lg">{structure.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{structure.description}</p>
                  <p className="text-gold font-semibold">
                    {structure.fee > 0 ? `+BHD ${structure.fee}` : "Included"}
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
            <h3 className="text-2xl font-bold text-primary mb-2">
              Owner Nationality
            </h3>
            <p className="text-muted-foreground mb-8">
              What is the nationality of the primary shareholder?
            </p>
            
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
      
      if (step === 4) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Business Activity
            </h3>
            <p className="text-muted-foreground mb-8">
              What will be your primary business activity?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setBusinessActivity(activity.id)}
                  className={cn(
                    "p-5 rounded-2xl border border-border/60 bg-background/70 cursor-pointer transition-all relative",
                    businessActivity === activity.id
                      ? "ring-1 ring-accent/40 border-accent/30 bg-accent/5 shadow-sm"
                      : "hover:border-accent/40 hover:shadow-sm"
                  )}
                >
                  {activity.regulated && (
                    <span className="absolute top-2 right-2 text-xs rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-muted-foreground">
                      Regulated
                    </span>
                  )}
                  <activity.icon
                    className={cn(
                      "h-6 w-6 mb-2",
                      businessActivity === activity.id ? "text-accent" : "text-muted-foreground"
                    )}
                  />
                  <h4 className="font-semibold text-primary text-sm">{activity.name}</h4>
                  {activity.fee > 0 && (
                    <p className="text-accent font-semibold text-sm mt-1">+BHD {activity.fee}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {businessActivity && businessActivities.find((a) => a.id === businessActivity)?.note && (
              <div className="mt-4 p-4 bg-muted/30 rounded-xl border border-border/60 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {businessActivities.find((a) => a.id === businessActivity)?.note}
                </p>
              </div>
            )}
          </div>
        );
      }
      
      if (step === 5) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Visa Requirements
            </h3>
            <p className="text-muted-foreground mb-8">
              How many work visas do you need for your team?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {visaPackages.map((visa) => (
                <motion.div
                  key={visa.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setVisaPackage(visa.id)}
                  className={cn(
                    "p-5 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    visaPackage === visa.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Users className={cn(
                    "h-6 w-6 mx-auto mb-2",
                    visaPackage === visa.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-semibold text-primary text-sm">{visa.label}</h4>
                  <p className="text-gold font-semibold text-sm mt-1">
                    {visa.total > 0 ? `BHD ${visa.total}` : "—"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
      
      if (step === 6) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Office Type
            </h3>
            <p className="text-muted-foreground mb-8">
              Choose your office solution in Bahrain
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <h4 className="font-bold text-primary text-lg">{office.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{office.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold">BHD {office.price}/yr</span>
                    <span className="text-xs text-muted-foreground">
                      Visa quota: {office.visaQuota}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
    }

    // SPC Flow (Streamlined 5-step flow for solo entrepreneurs)
    if (companyType === "spc") {
      if (step === 2) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Owner Nationality
            </h3>
            <p className="text-muted-foreground mb-8">
              What is your nationality as the sole owner?
            </p>
            
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
            <h3 className="text-2xl font-bold text-primary mb-2">
              Business Activity
            </h3>
            <p className="text-muted-foreground mb-8">
              What will be your primary business activity?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setBusinessActivity(activity.id)}
                  className={cn(
                    "p-5 rounded-2xl border-2 cursor-pointer transition-all relative",
                    businessActivity === activity.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  {activity.regulated && (
                    <span className="absolute top-2 right-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                      Regulated
                    </span>
                  )}
                  <activity.icon className={cn(
                    "h-6 w-6 mb-2",
                    businessActivity === activity.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-semibold text-primary text-sm">{activity.name}</h4>
                  {activity.fee > 0 && (
                    <p className="text-gold font-semibold text-sm mt-1">+BHD {activity.fee}</p>
                  )}
                </motion.div>
              ))}
            </div>
            
            {businessActivity && businessActivities.find(a => a.id === businessActivity)?.note && (
              <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                <p className="text-sm text-amber-800">
                  {businessActivities.find(a => a.id === businessActivity)?.note}
                </p>
              </div>
            )}
          </div>
        );
      }
      
      if (step === 4) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Office Type
            </h3>
            <p className="text-muted-foreground mb-8">
              Choose your office solution in Bahrain
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <h4 className="font-bold text-primary text-lg">{office.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{office.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold">BHD {office.price}/yr</span>
                    <span className="text-xs text-muted-foreground">
                      Visa quota: {office.visaQuota}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* SPC-specific visa quota info */}
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-800">
                <strong>SPC Visa Quota:</strong> As a Single Person Company, you can sponsor up to 1 investor visa for yourself. 
                Additional work visas depend on your office type selection.
              </p>
            </div>
          </div>
        );
      }
    }

    // Branch Office Flow
    if (companyType === "branch") {
      if (step === 2) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Parent Company Location
            </h3>
            <p className="text-muted-foreground mb-8">
              Where is your parent company registered?
            </p>
            
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
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Globe className={cn(
                    "h-8 w-8 mb-3",
                    parentLocation === location.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{location.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{location.description}</p>
                  <p className="text-gold font-semibold">+BHD {location.processingFee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
      
      if (step === 3) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Document Status
            </h3>
            <p className="text-muted-foreground mb-8">
              Are your parent company documents apostilled?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentStatuses.map((status) => (
                <motion.div
                  key={status.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDocumentStatus(status.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    documentStatus === status.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <FileText className={cn(
                    "h-8 w-8 mb-3",
                    documentStatus === status.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{status.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{status.description}</p>
                  <p className="text-gold font-semibold">
                    {status.fee > 0 ? `+BHD ${status.fee}` : "No extra fee"}
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
            <h3 className="text-2xl font-bold text-primary mb-2">
              Business Activity
            </h3>
            <p className="text-muted-foreground mb-8">
              Will the branch have the same activities as the parent company?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branchActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setBranchActivity(activity.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    branchActivity === activity.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Briefcase className={cn(
                    "h-8 w-8 mb-3",
                    branchActivity === activity.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{activity.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                  <p className="text-gold font-semibold">
                    {activity.fee > 0 ? `+BHD ${activity.fee}` : "Included"}
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
            <h3 className="text-2xl font-bold text-primary mb-2">
              Staff Requirements
            </h3>
            <p className="text-muted-foreground mb-8">
              How many staff will work at the branch?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {staffOptions.map((staff) => (
                <motion.div
                  key={staff.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStaffCount(staff.id)}
                  className={cn(
                    "p-5 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    staffCount === staff.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Users className={cn(
                    "h-6 w-6 mx-auto mb-2",
                    staffCount === staff.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-semibold text-primary text-sm">{staff.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{staff.description}</p>
                  <p className="text-gold font-semibold text-sm">BHD {staff.visaCost}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
    }

    // Holding Company Flow
    if (companyType === "holding") {
      if (step === 2) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Capital Structure
            </h3>
            <p className="text-muted-foreground mb-8">
              What is your planned capital amount? (Minimum BHD 250,000)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {capitalRanges.map((capital) => (
                <motion.div
                  key={capital.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCapitalRange(capital.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    capitalRange === capital.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Landmark className={cn(
                    "h-8 w-8 mb-3",
                    capitalRange === capital.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{capital.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{capital.description}</p>
                  <p className="text-gold font-semibold">Notary: BHD {capital.notaryFee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
      
      if (step === 3) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Number of Shareholders
            </h3>
            <p className="text-muted-foreground mb-8">
              How many shareholders will the holding company have?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shareholderCounts.map((count) => (
                <motion.div
                  key={count.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShareholderCount(count.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    shareholderCount === count.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Users className={cn(
                    "h-8 w-8 mb-3",
                    shareholderCount === count.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{count.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{count.description}</p>
                  <p className="text-gold font-semibold">+BHD {count.agreementFee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
      
      if (step === 4) {
        return (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Subsidiary Planning
            </h3>
            <p className="text-muted-foreground mb-8">
              Will you be forming subsidiaries through this holding company?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subsidiaryPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSubsidiaryPlan(plan.id)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    subsidiaryPlan === plan.id
                      ? "border-gold bg-gold/5 shadow-lg"
                      : "border-border hover:border-gold/40"
                  )}
                >
                  <Building2 className={cn(
                    "h-8 w-8 mb-3",
                    subsidiaryPlan === plan.id ? "text-gold" : "text-muted-foreground"
                  )} />
                  <h4 className="font-bold text-primary">{plan.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
                  {plan.discount > 0 && (
                    <p className="text-green-600 font-semibold">{plan.discount}% package discount</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );
      }
    }

    // Additional Services (last step before results for all types)
    const services = companyType ? additionalServicesByType[companyType] : [];
    return (
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Additional Services
        </h3>
        <p className="text-muted-foreground mb-8">
          Select any additional services you need (optional)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => {
            const selected = selectedServices.includes(service.id);
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -2 }}
                onClick={() => handleServiceToggle(service.id)}
                className={cn(
                  "p-5 rounded-2xl border border-border/60 bg-background/70 cursor-pointer transition-all flex items-center gap-4",
                  selected
                    ? "ring-1 ring-accent/40 border-accent/30 bg-accent/5"
                    : "hover:border-accent/40 hover:shadow-sm"
                )}
              >
                <Checkbox checked={selected} className="h-5 w-5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-primary">{service.name}</h4>
                </div>
                <span className="text-accent font-bold">+BHD {service.price}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render results breakdown
  const renderResultsBreakdown = () => {
    const { total, breakdown } = calculateTotal();
    const selectedTypeData = companyTypes.find(t => t.id === companyType);
    
    return (
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-accent" />
          Your Estimate
        </h3>

        <div className="mb-6 rounded-2xl border border-border/60 bg-muted/20 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Company Type</span>
            <span className="text-sm font-semibold text-primary">{selectedTypeData?.name}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Estimated Timeline</span>
            <span className="text-sm font-semibold text-primary flex items-center gap-1">
              <Clock className="h-4 w-4" /> {selectedTypeData?.timeline}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/60">
          <div className="px-5 py-4 border-b border-border/60">
            <p className="text-sm font-semibold text-primary">Breakdown</p>
            <p className="text-sm text-muted-foreground">A quick receipt-style recap.</p>
          </div>

          <div className="px-5 py-3">
            <div className="divide-y divide-border/60">
              {breakdown.map((item) => (
                <div key={item.label} className="flex justify-between py-3 text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-primary">
                    {item.amount < 0 ? "-" : ""}BHD {Math.abs(item.amount).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 py-4 border-t border-border/60 bg-muted/20 rounded-b-2xl">
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-primary">Estimated Total</span>
              <span className="text-3xl font-bold text-accent">
                BHD {total.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Final quote may vary based on approvals and specific requirements.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        embedded ? "" : "py-28 lg:py-36 bg-background"
      )}
    >
      {/* Background */}
      {!embedded && (
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 mesh-gradient-gold opacity-60" />
          <div className="absolute inset-0 pattern-grid-lines-light opacity-50" />
        </div>
      )}

      <div className={cn(embedded ? "" : "container relative")}>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              Interactive Tool
            </p>
            <h2 className="text-[40px] md:text-[48px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              Calculate Your Company Formation Costs
            </h2>
            <p className="text-lg text-muted-foreground leading-[1.8]">
              Get an instant estimate for your Bahrain company formation. Answer a few questions and receive a detailed
              cost breakdown.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={cn(
              embedded
                ? "rounded-3xl border border-border/60 bg-background/60 backdrop-blur-sm shadow-sm p-6 md:p-8"
                : "bg-background rounded-3xl border border-border/60 shadow-sm p-8 md:p-12"
            )}
          >
            {/* Progress Bar */}
            {!showResult && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
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

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={`${companyType}-${step}`}
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
                    embedded ? (
                      <div className="grid gap-6">
                        {renderResultsBreakdown()}

                        <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
                          <p className="text-sm font-semibold text-primary">Next step</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Book your free 30‑minute consultation to confirm eligibility, approvals, and the final quote.
                          </p>

                          <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                              <a href="#book">Book free consultation</a>
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto" onClick={handleReset}>
                              Start over
                            </Button>
                          </div>

                          <p className="mt-3 text-xs text-muted-foreground">
                            Free • Google Meet • No obligation
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-10">
                        {/* Cost Breakdown */}
                        {renderResultsBreakdown()}

                        {/* Lead Capture Form */}
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            Get Your Detailed Quote
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Enter your details and we'll send a comprehensive proposal within 24 hours.
                          </p>

                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={leadForm.name}
                                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                placeholder="John Smith"
                                className={formErrors.name ? "border-destructive" : ""}
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
                                value={leadForm.email}
                                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                                placeholder="john@company.com"
                                className={formErrors.email ? "border-destructive" : ""}
                              />
                              {formErrors.email && (
                                <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="phone">Phone (Optional)</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={leadForm.phone}
                                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                                placeholder="+973 1234 5678"
                              />
                            </div>

                            <Button onClick={handleLeadSubmit} className="w-full h-12 text-base">
                              <Send className="h-4 w-4 mr-2" />
                              Get Detailed Quote
                            </Button>

                            <button
                              onClick={handleReset}
                              className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              Start Over
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    /* Success State */
                    <div className="text-center py-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="h-10 w-10 text-accent" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Thank you for your interest. Our team will review your requirements and send you a detailed
                        proposal within 24 hours.
                      </p>
                      <Button onClick={handleReset} variant="outline">
                        Calculate Another Quote
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {!showResult && (
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  {step === totalSteps ? "See Results" : "Next"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
