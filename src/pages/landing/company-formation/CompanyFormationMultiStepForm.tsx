import { useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const SERVICE_OPTIONS = [
  "Company Formation",
  "Commercial Registration",
  "Visa & Immigration",
  "Accounting & Tax",
  "PRO Services",
  "Other",
] as const;

const ACTIVITY_OPTIONS = [
  "Trading",
  "Consultancy",
  "IT / Software",
  "E-commerce",
  "Professional services",
  "Other",
] as const;

const OFFICE_OPTIONS = [
  "Virtual / flexi",
  "Physical office",
  "Not sure",
] as const;

const TIMELINE_OPTIONS = [
  "ASAP",
  "This month",
  "1–3 months",
  "Just exploring",
] as const;

const formSchemaBase = z.object({
  services: z.array(z.string()).min(1, "Select at least one service"),
  activityCategory: z.string().min(1, "Choose an activity category"),
  activityOther: z.string().trim().max(80, "Too long").optional(),

  needVisas: z.enum(["yes", "no"]),
  visaCount: z.number().int().min(0).max(10),
  officePreference: z.string().min(1, "Choose an office preference"),
  timeline: z.string().min(1, "Choose a timeline"),

  shareholders: z.enum(["1", "2", "3+"] as const),
  bahrainiPartner: z.enum(["yes", "no", "not_sure"] as const),
  ownershipPreference: z.enum(["foreign_100", "open", "not_sure"] as const),

  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(30),
  company: z.string().trim().max(120).optional(),

  consent: z.boolean().refine((v) => v === true, "Consent is required"),
});

const formSchema = formSchemaBase.superRefine((data, ctx) => {
  if (data.activityCategory === "Other" && !data.activityOther?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["activityOther"],
      message: "Please specify your activity",
    });
  }
});

export type CompanyFormationLeadData = z.infer<typeof formSchema>;

type Props = {
  onComplete: (data: CompanyFormationLeadData) => void;
  className?: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 24 : -24,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 24 : -24,
    opacity: 0,
  }),
};

function StepPill({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={
          "h-8 w-8 rounded-full border flex items-center justify-center text-sm font-semibold transition-colors " +
          (done
            ? "bg-accent text-primary border-accent"
            : active
              ? "bg-background border-border text-foreground"
              : "bg-muted/40 border-border/60 text-muted-foreground")
        }
        aria-hidden
      >
        {done ? <CheckCircle2 className="h-4 w-4" /> : label}
      </div>
    </div>
  );
}

export function CompanyFormationMultiStepForm({ onComplete, className }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [direction, setDirection] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormationLeadData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      activityCategory: "",
      activityOther: "",
      needVisas: "no",
      visaCount: 0,
      officePreference: "",
      timeline: "",
      shareholders: "1",
      bahrainiPartner: "not_sure",
      ownershipPreference: "not_sure",
      name: "",
      email: "",
      phone: "",
      company: "",
      consent: false,
    },
    mode: "onTouched",
  });

  const selectedServices = watch("services") ?? [];
  const needVisas = watch("needVisas");
  const activityCategory = watch("activityCategory");

  const progressValue = useMemo(() => {
    if (step === 1) return 33;
    if (step === 2) return 66;
    return 100;
  }, [step]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue(
        "services",
        selectedServices.filter((s) => s !== service),
        { shouldValidate: true },
      );
    } else {
      setValue("services", [...selectedServices, service], { shouldValidate: true });
    }
  };

  const next = async () => {
    setDirection(1);

    const fieldsByStep: Record<number, (keyof CompanyFormationLeadData)[]> = {
      1: ["services", "activityCategory", "needVisas", "visaCount", "officePreference", "timeline"],
      2: ["shareholders", "bahrainiPartner", "ownershipPreference"],
      3: ["name", "email", "phone", "consent"],
    };

    const ok = await trigger(fieldsByStep[step]);
    if (!ok) return;

    setStep((s) => (s === 1 ? 2 : 3));
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => (s === 3 ? 2 : 1));
  };

  const submit = (data: CompanyFormationLeadData) => {
    onComplete(data);
  };

  return (
    <div className={className}>
      <div className="card-elevated p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Takes ~60 seconds</p>
            <h3 className="mt-1 text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Quick Company Formation Calculator
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Answer a few questions so we can confirm the right structure, realistic timeline, and a clear cost breakdown
              on your free call.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <StepPill active={step === 1} done={step > 1} label="1" />
            <div className="h-px w-10 bg-border/60" aria-hidden />
            <StepPill active={step === 2} done={step > 2} label="2" />
            <div className="h-px w-10 bg-border/60" aria-hidden />
            <StepPill active={step === 3} done={false} label="3" />
          </div>
        </div>

        <div className="mt-6 md:mt-7">
          <div className="md:hidden">
            <Progress value={progressValue} />
            <p className="mt-2 text-xs text-muted-foreground">Step {step} of 3</p>
          </div>
        </div>

        <form className="mt-6" onSubmit={handleSubmit(submit)}>
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22 }}
                className="space-y-7"
              >
                <div>
                  <Label className="text-sm">Services you need *</Label>
                  <p className="text-xs text-muted-foreground mt-1">Select all that apply</p>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map((s) => {
                      const active = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={
                            "rounded-xl border p-4 text-left transition-all " +
                            (active ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/50")
                          }
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-semibold text-foreground">{s}</span>
                            <span
                              className={
                                "h-5 w-5 rounded-full border flex items-center justify-center " +
                                (active ? "border-accent bg-accent text-primary" : "border-border text-muted-foreground")
                              }
                              aria-hidden
                            >
                              {active ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && <p className="mt-2 text-sm text-destructive">{errors.services.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="activityCategory">Activity category *</Label>
                    <select
                      id="activityCategory"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("activityCategory")}
                    >
                      <option value="">Select one…</option>
                      {ACTIVITY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.activityCategory && (
                      <p className="mt-2 text-sm text-destructive">{errors.activityCategory.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="timeline">Timeline *</Label>
                    <select
                      id="timeline"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("timeline")}
                    >
                      <option value="">Select one…</option>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && <p className="mt-2 text-sm text-destructive">{errors.timeline.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="officePreference">Office preference *</Label>
                    <select
                      id="officePreference"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("officePreference")}
                    >
                      <option value="">Select one…</option>
                      {OFFICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.officePreference && (
                      <p className="mt-2 text-sm text-destructive">{errors.officePreference.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm">Visas needed? *</Label>
                    <div className="mt-2 flex gap-2">
                      {([
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" },
                      ] as const).map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setValue("needVisas", opt.value, { shouldValidate: true });
                            if (opt.value === "no") {
                              setValue("visaCount", 0, { shouldValidate: true });
                            }
                          }}
                          className={
                            "h-10 flex-1 rounded-md border text-sm font-medium transition-colors " +
                            (needVisas === opt.value
                              ? "border-accent bg-accent/10 text-foreground"
                              : "border-border/60 text-muted-foreground hover:border-accent/50")
                          }
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="visaCount">How many?</Label>
                      <Input
                        id="visaCount"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={10}
                        disabled={needVisas !== "yes"}
                        className="mt-1"
                        value={needVisas === "yes" ? String(watch("visaCount") ?? 0) : "0"}
                        onChange={(e) => setValue("visaCount", Number(e.target.value || 0), { shouldValidate: true })}
                      />
                      {errors.visaCount && <p className="mt-2 text-sm text-destructive">{errors.visaCount.message}</p>}
                    </div>
                  </div>
                </div>

                {activityCategory === "Other" && (
                  <div>
                    <Label htmlFor="activityOther">Specify activity</Label>
                    <Input id="activityOther" className="mt-1" placeholder="Briefly describe" {...register("activityOther")} />
                    {errors.activityOther && (
                      <p className="mt-2 text-sm text-destructive">{errors.activityOther.message}</p>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="shareholders">Shareholders *</Label>
                    <select
                      id="shareholders"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("shareholders")}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="bahrainiPartner">Bahraini partner *</Label>
                    <select
                      id="bahrainiPartner"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("bahrainiPartner")}
                    >
                      <option value="not_sure">Not sure</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="ownershipPreference">Ownership preference *</Label>
                    <select
                      id="ownershipPreference"
                      className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      {...register("ownershipPreference")}
                    >
                      <option value="not_sure">Not sure</option>
                      <option value="foreign_100">100% foreign (if possible)</option>
                      <option value="open">Open / flexible</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">
                    We’ll confirm eligibility for 100% foreign ownership based on activity + approvals.
                  </p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" className="mt-1" placeholder="Your name" {...register("name")} />
                    {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input id="company" className="mt-1" placeholder="Company name" {...register("company")} />
                    {errors.company && <p className="mt-2 text-sm text-destructive">{errors.company.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" className="mt-1" placeholder="name@domain.com" {...register("email")} />
                    {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" className="mt-1" placeholder="+973 …" {...register("phone")} />
                    {errors.phone && <p className="mt-2 text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={watch("consent")}
                      onCheckedChange={(v) => setValue("consent", Boolean(v), { shouldValidate: true })}
                    />
                    <div>
                      <Label htmlFor="consent" className="text-sm">
                        I agree to be contacted about my inquiry *
                      </Label>
                      <p className="mt-1 text-xs text-muted-foreground">
                        We’ll only use your info to respond about company formation.
                      </p>
                      {errors.consent && <p className="mt-2 text-sm text-destructive">{errors.consent.message}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border/60 pt-6">
            <div>
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={back}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : null}
            </div>

            {step < 3 ? (
              <Button type="button" onClick={next}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting…" : "Show summary & booking"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
