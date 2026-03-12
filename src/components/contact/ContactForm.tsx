import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const services = [
  "Company Formation",
  "PRO Services",
  "Visa & Immigration",
  "Commercial Registration",
  "Accounting & Tax",
  "Business Consulting",
  "Document Clearance",
  "Other",
];

const contactFormSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email too long"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number too long"),
  company: z.string().max(100, "Company name too long").optional(),
  message: z.string().max(1000, "Message too long").optional(),
  contactMethod: z.enum(["phone", "email", "whatsapp"], {
    required_error: "Please select a contact method",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const businessHours = [
  { day: "Sunday - Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday - Saturday", hours: "Closed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      services: [],
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      contactMethod: undefined,
    },
  });

  const selectedServices = watch("services") || [];
  const selectedContactMethod = watch("contactMethod");

  const toggleService = (service: string) => {
    const current = selectedServices;
    if (current.includes(service)) {
      setValue("services", current.filter((s) => s !== service));
    } else {
      setValue("services", [...current, service]);
    }
  };

  const nextStep = () => {
    if (step === 1 && selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast.success("Thank you! We'll contact you within 1 hour.", {
      description: `We received your inquiry about: ${data.services.join(", ")}`,
    });
    
    // Reset form
    setValue("services", []);
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("company", "");
    setValue("message", "");
    setValue("contactMethod", undefined as unknown as "phone" | "email" | "whatsapp");
    setStep(1);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative bg-muted/30">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 -z-10 
          bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] 
          [background-size:16px_16px] 
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-badge">Send an Inquiry</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Tell Us About Your <span className="text-accent">Project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete this quick form and we'll get back to you within 1 hour
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                          step >= s
                            ? "bg-accent text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 rounded transition-all ${
                            step > s ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2">What services are you interested in?</h3>
                        <p className="text-muted-foreground mb-6">Select all that apply</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`p-4 rounded-xl border-2 text-left transition-all ${
                                selectedServices.includes(service)
                                  ? "border-accent bg-accent/10 text-foreground"
                                  : "border-border hover:border-accent/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                    selectedServices.includes(service)
                                      ? "border-accent bg-accent"
                                      : "border-muted-foreground"
                                  }`}
                                >
                                  {selectedServices.includes(service) && (
                                    <CheckCircle2 className="w-3 h-3 text-primary" />
                                  )}
                                </div>
                                <span className="font-medium text-sm">{service}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                        {errors.services && (
                          <p className="text-destructive text-sm mb-4">{errors.services.message}</p>
                        )}
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2">Your Contact Details</h3>
                        <p className="text-muted-foreground mb-6">How can we reach you?</p>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              {...register("name")}
                              placeholder="John Doe"
                              className="mt-1"
                            />
                            {errors.name && (
                              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              {...register("email")}
                              placeholder="john@company.com"
                              className="mt-1"
                            />
                            {errors.email && (
                              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              {...register("phone")}
                              placeholder="+973 XXXX XXXX"
                              className="mt-1"
                            />
                            {errors.phone && (
                              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="company">Company Name (Optional)</Label>
                            <Input
                              id="company"
                              {...register("company")}
                              placeholder="Your Company Ltd."
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2">Any Additional Details?</h3>
                        <p className="text-muted-foreground mb-6">Tell us more about your requirements</p>
                        
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="message">Message (Optional)</Label>
                            <textarea
                              id="message"
                              {...register("message")}
                              rows={4}
                              placeholder="Tell us about your project, timeline, or any specific requirements..."
                              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                          </div>
                          
                          <div>
                            <Label className="mb-3 block">Preferred Contact Method *</Label>
                            <div className="flex flex-wrap gap-3">
                              {(["phone", "email", "whatsapp"] as const).map((method) => (
                                <button
                                  key={method}
                                  type="button"
                                  onClick={() => setValue("contactMethod", method)}
                                  className={`px-5 py-3 rounded-xl border-2 font-medium capitalize transition-all ${
                                    selectedContactMethod === method
                                      ? "border-accent bg-accent/10 text-foreground"
                                      : "border-border hover:border-accent/50"
                                  }`}
                                >
                                  {method}
                                </button>
                              ))}
                            </div>
                            {errors.contactMethod && (
                              <p className="text-destructive text-sm mt-2">{errors.contactMethod.message}</p>
                            )}
                          </div>
                          
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                            <Checkbox id="consent" defaultChecked />
                            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                              I agree to receive communications from Keylink Corp regarding my inquiry. 
                              We respect your privacy and will never share your information.
                            </Label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-border">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90 text-primary">
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-1">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+97317008888" className="text-primary-foreground/80 hover:text-accent transition-colors">
                        +973 1700 8888
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@keylinkcorp.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                        info@keylinkcorp.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Office</p>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        Sanabis Exhibition Tower<br />
                        Office 601, 6th Floor<br />
                        Manama, Kingdom of Bahrain
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Business Hours</p>
                      {businessHours.map((item) => (
                        <div key={item.day} className="flex justify-between text-sm text-primary-foreground/80 mb-1">
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 rounded-xl bg-accent/20 border border-accent/30">
                  <p className="text-sm font-medium text-accent mb-1">Quick Response Guarantee</p>
                  <p className="text-xs text-primary-foreground/70">
                    We respond to all inquiries within 1 hour during business hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
