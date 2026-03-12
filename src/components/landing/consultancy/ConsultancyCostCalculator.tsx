import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  Home,
  Landmark,
  Sparkles,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type CompanyTypeId = "spc" | "wll" | "branch" | "not_sure";
type ActivityId = "professional" | "trading" | "tech" | "other";
type VisaId = "0" | "1" | "2plus";
type OfficeId = "virtual" | "serviced" | "private";

type LineItem = { label: string; amount: number };

type ConsultancyCostCalculatorProps = {
  onContinue: () => void;
};

const COMPANY_TYPES: Array<{
  id: CompanyTypeId;
  title: string;
  description: string;
  icon: LucideIcon;
  baseAdvisoryFee: number;
  govFeesPlaceholder: number;
}> = [
  {
    id: "spc",
    title: "SPC",
    description: "Single Person Company",
    icon: Users,
    baseAdvisoryFee: 750,
    govFeesPlaceholder: 150,
  },
  {
    id: "wll",
    title: "WLL",
    description: "Limited Liability Company",
    icon: Building2,
    baseAdvisoryFee: 850,
    govFeesPlaceholder: 200,
  },
  {
    id: "branch",
    title: "Branch",
    description: "Foreign company branch",
    icon: Globe,
    baseAdvisoryFee: 1200,
    govFeesPlaceholder: 250,
  },
  {
    id: "not_sure",
    title: "Not sure",
    description: "We’ll guide you in the call",
    icon: Landmark,
    baseAdvisoryFee: 850,
    govFeesPlaceholder: 200,
  },
];

const ACTIVITY_CATEGORIES: Array<{
  id: ActivityId;
  title: string;
  description: string;
  icon: LucideIcon;
  notes: string[];
}> = [
  {
    id: "professional",
    title: "Professional",
    description: "Consulting & services",
    icon: Briefcase,
    notes: ["Usually straightforward; exact activity wording matters."],
  },
  {
    id: "trading",
    title: "Trading",
    description: "Import/export & general trading",
    icon: Sparkles,
    notes: ["May require additional approvals depending on products."],
  },
  {
    id: "tech",
    title: "Tech / Online",
    description: "IT, software, e‑commerce",
    icon: Calculator,
    notes: ["Activity scope may affect licensing requirements."],
  },
  {
    id: "other",
    title: "Other",
    description: "We’ll clarify in consultation",
    icon: Landmark,
    notes: ["Some regulated activities require extra approvals."],
  },
];

const VISA_OPTIONS: Array<{ 
  id: VisaId;
  title: string;
  description: string;
  price: number;
  icon: LucideIcon;
}> = [
  { id: "0", title: "None", description: "No visas needed", price: 0, icon: Users },
  { id: "1", title: "1 visa", description: "Investor / owner visa", price: 350, icon: Users },
  { id: "2plus", title: "2+ visas", description: "Owner + staff", price: 900, icon: Users },
];

const OFFICE_TYPES: Array<{ 
  id: OfficeId;
  title: string;
  description: string;
  annual: number;
  icon: LucideIcon;
}> = [
  { id: "virtual", title: "Virtual", description: "Address only", annual: 300, icon: Home },
  { id: "serviced", title: "Serviced", description: "Shared workspace", annual: 600, icon: Home },
  { id: "private", title: "Private", description: "Dedicated office", annual: 1200, icon: Home },
];

const ADD_ONS = [
  { id: "pro", label: "PRO services (1 year)", price: 600 },
  { id: "bank", label: "Bank account support", price: 150 },
  { id: "accounting", label: "Accounting setup", price: 300 },
] as const;

type AddOnId = (typeof ADD_ONS)[number]["id"];

const STEPS = [
  "Company type",
  "Business activity",
  "Visa needs",
  "Office type",
  "Add-ons",
  "Summary",
] as const;

type StepIndex = 1 | 2 | 3 | 4 | 5 | 6;

function formatBhd(amount: number) {
  return new Intl.NumberFormat("en-BH", { maximumFractionDigits: 0 }).format(amount);
}

export function ConsultancyCostCalculator({ onContinue }: ConsultancyCostCalculatorProps) {
  const [step, setStep] = useState<StepIndex>(1);

  const [companyType, setCompanyType] = useState<CompanyTypeId | null>(null);
  const [activity, setActivity] = useState<ActivityId | null>(null);
  const [visa, setVisa] = useState<VisaId | null>(null);
  const [office, setOffice] = useState<OfficeId | null>(null);
  const [addOns, setAddOns] = useState<AddOnId[]>([]);

  const progress = useMemo(() => Math.round((step / STEPS.length) * 100), [step]);

  const { total, breakdown, notes } = useMemo(() => {
    const items: LineItem[] = [];
    const noteLines: string[] = [];

    const company = COMPANY_TYPES.find((c) => c.id === companyType);
    if (company) {
      items.push({ label: "Advisory & coordination", amount: company.baseAdvisoryFee });
      items.push({ label: "Government fees (estimate)", amount: company.govFeesPlaceholder });
    }

    const visaOption = VISA_OPTIONS.find((v) => v.id === visa);
    if (visaOption && visaOption.price > 0) items.push({ label: `Visa package: ${visaOption.title}`, amount: visaOption.price });

    const officeOption = OFFICE_TYPES.find((o) => o.id === office);
    if (officeOption) items.push({ label: `${officeOption.title} office (1 year)`, amount: officeOption.annual });

    for (const id of addOns) {
      const addOn = ADD_ONS.find((a) => a.id === id);
      if (addOn) items.push({ label: addOn.label, amount: addOn.price });
    }

    const category = ACTIVITY_CATEGORIES.find((a) => a.id === activity);
    if (category) noteLines.push(...category.notes);

    noteLines.push(
      "Government fees are paid to authorities; this is an estimate.",
      "Final costs depend on activity approvals, shareholders, and documents."
    );

    const t = items.reduce((sum, i) => sum + i.amount, 0);
    return { total: t, breakdown: items, notes: noteLines };
  }, [activity, addOns, companyType, office, visa]);

  const canProceed = useMemo(() => {
    switch (step) {
      case 1:
        return companyType !== null;
      case 2:
        return activity !== null;
      case 3:
        return visa !== null;
      case 4:
        return office !== null;
      case 5:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  }, [activity, companyType, office, step, visa]);

  const stepVariants = {
    hidden: { opacity: 0, x: 14 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -14 },
  };

  const toggleAddOn = (id: AddOnId) => {
    setAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const reset = () => {
    setStep(1);
    setCompanyType(null);
    setActivity(null);
    setVisa(null);
    setOffice(null);
    setAddOns([]);
  };

  return (
    <div className="lp-card p-5 sm:p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-xs text-muted-foreground">Step {step} of {STEPS.length}</p>
          <p className="text-sm font-semibold text-foreground">{STEPS[step - 1]}</p>
        </div>
        <div className="flex items-center gap-2">
          {STEPS.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                idx + 1 <= step ? "bg-accent" : "bg-muted"
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <div className="mt-5 h-2 w-full rounded-full bg-muted" aria-hidden>
        <motion.div
          className="h-2 rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22 }}
          >
            {step === 1 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Choose your company type</h3>
                <p className="mt-1 text-sm text-muted-foreground">This sets the baseline estimate.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {COMPANY_TYPES.map((opt) => {
                    const selected = companyType === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCompanyType(opt.id)}
                        className={cn(
                          "group text-left rounded-xl border p-4 transition-all",
                          "bg-background hover:bg-muted/30",
                          selected ? "border-accent" : "border-border"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
                          </div>
                          <span className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-lg border",
                            selected ? "border-accent bg-accent/10" : "border-border bg-muted/30"
                          )}>
                            <Icon className={cn("h-4 w-4", selected ? "text-accent" : "text-muted-foreground")} />
                          </span>
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground">Base from BHD {formatBhd(opt.baseAdvisoryFee)}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Business activity category</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  This helps us share guidance (even when pricing stays similar).
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACTIVITY_CATEGORIES.map((opt) => {
                    const selected = activity === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setActivity(opt.id)}
                        className={cn(
                          "text-left rounded-xl border p-4 transition-all",
                          "bg-background hover:bg-muted/30",
                          selected ? "border-accent" : "border-border"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <span className={cn(
                            "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border",
                            selected ? "border-accent bg-accent/10" : "border-border bg-muted/30"
                          )}>
                            <Icon className={cn("h-4 w-4", selected ? "text-accent" : "text-muted-foreground")} />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
                            {opt.notes?.[0] && (
                              <p className="mt-2 text-xs text-muted-foreground">{opt.notes[0]}</p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Visa needs</h3>
                <p className="mt-1 text-sm text-muted-foreground">Select an estimate for visa processing.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VISA_OPTIONS.map((opt) => {
                    const selected = visa === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setVisa(opt.id)}
                        className={cn(
                          "text-left rounded-xl border p-4 transition-all",
                          "bg-background hover:bg-muted/30",
                          selected ? "border-accent" : "border-border"
                        )}
                      >
                        <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
                        <p className="mt-4 text-xs text-muted-foreground">
                          {opt.price > 0 ? `+ BHD ${formatBhd(opt.price)}` : "No additional cost"}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Office type</h3>
                <p className="mt-1 text-sm text-muted-foreground">Office choices can change annual costs.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {OFFICE_TYPES.map((opt) => {
                    const selected = office === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setOffice(opt.id)}
                        className={cn(
                          "text-left rounded-xl border p-4 transition-all",
                          "bg-background hover:bg-muted/30",
                          selected ? "border-accent" : "border-border"
                        )}
                      >
                        <p className="text-sm font-semibold text-foreground">{opt.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{opt.description}</p>
                        <p className="mt-4 text-xs text-muted-foreground">BHD {formatBhd(opt.annual)} / year</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Add-ons (optional)</h3>
                <p className="mt-1 text-sm text-muted-foreground">Select services you may want included.</p>

                <div className="mt-6 space-y-3">
                  {ADD_ONS.map((opt) => {
                    const checked = addOns.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleAddOn(opt.id)}
                        className={cn(
                          "w-full rounded-xl border p-4 text-left transition-all",
                          "bg-background hover:bg-muted/30",
                          checked ? "border-accent" : "border-border"
                        )}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Checkbox checked={checked} className="pointer-events-none" />
                            <div>
                              <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                              <p className="mt-1 text-xs text-muted-foreground">+ BHD {formatBhd(opt.price)}</p>
                            </div>
                          </div>
                          {checked && <Check className="h-4 w-4 text-accent" aria-hidden />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Your estimate</h3>
                <p className="mt-1 text-sm text-muted-foreground">A simple breakdown you can confirm in a free consultation.</p>

                <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Estimated total</p>
                      <p className="mt-1 text-2xl font-semibold text-foreground">BHD {formatBhd(total)}</p>
                      <p className="mt-2 text-xs text-muted-foreground">Approx. range: BHD {formatBhd(Math.round(total * 0.9))} – {formatBhd(Math.round(total * 1.1))}</p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                      <Calculator className="h-5 w-5 text-accent" />
                    </span>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <ul className="space-y-2">
                      {breakdown.map((i) => (
                        <li key={i.label} className="flex items-center justify-between gap-4 text-sm">
                          <span className="text-muted-foreground">{i.label}</span>
                          <span className="font-medium text-foreground">BHD {formatBhd(i.amount)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-2">
                  {notes.map((n) => (
                    <p key={n} className="text-xs text-muted-foreground">• {n}</p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer controls */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => (step === 1 ? reset() : setStep((s) => Math.max(1, (s - 1) as StepIndex) as StepIndex))}
          className="w-full sm:w-auto"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex w-full sm:w-auto gap-3">
          {step === 6 ? (
            <>
              <Button type="button" variant="outline" onClick={reset} className="flex-1 sm:flex-none">
                Start over
              </Button>
              <Button type="button" onClick={onContinue} className="flex-1 sm:flex-none">
                Continue to Free Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button
              type="button"
              onClick={() => setStep((s) => Math.min(6, (s + 1) as StepIndex) as StepIndex)}
              disabled={!canProceed}
              className="flex-1 sm:flex-none"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
