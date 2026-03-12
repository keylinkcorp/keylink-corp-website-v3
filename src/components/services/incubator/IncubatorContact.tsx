import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const programOptions = [
  { value: "tamkeen", label: "Tamkeen Startup Support" },
  { value: "fintechbay", label: "FinTech Bay Accelerator" },
  { value: "c5", label: "C5 Accelerate" },
  { value: "unsure", label: "Not Sure (Recommend Me)" }
];

const stageOptions = [
  { value: "idea", label: "Idea Stage" },
  { value: "mvp", label: "MVP / Prototype" },
  { value: "revenue", label: "Generating Revenue" }
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+973 1700 0000", href: "tel:+97317000000" },
  { icon: Mail, label: "Email", value: "incubators@keylinkcorp.com", href: "mailto:incubators@keylinkcorp.com" },
  { icon: MapPin, label: "Location", value: "Sanabis Exhibition Tower, Bahrain", href: null },
  { icon: Clock, label: "Hours", value: "Sun-Thu 8AM-6PM", href: null }
];

export function IncubatorContact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
    setStep(2);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Get Started</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Start Your <span className="text-accent">Incubator Journey</span> Today
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Tell us about your startup and we'll recommend the best path forward.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div 
              variants={staggerItem}
              className="bg-background rounded-2xl border-2 border-border p-8"
            >
              {/* Step Indicator */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center gap-2 ${step >= 1 ? "text-accent" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= 1 ? "bg-accent text-accent-foreground" : "bg-muted"
                  }`}>
                    {step > 1 ? <Check className="w-4 h-4" /> : "1"}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">Select Program</span>
                </div>
                <div className="flex-1 h-0.5 bg-muted">
                  <div className={`h-full bg-accent transition-all ${step >= 2 ? "w-full" : "w-0"}`} />
                </div>
                <div className={`flex items-center gap-2 ${step >= 2 ? "text-accent" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= 2 ? "bg-accent text-accent-foreground" : "bg-muted"
                  }`}>
                    2
                  </div>
                  <span className="text-sm font-medium hidden sm:block">Your Details</span>
                </div>
              </div>

              {step === 1 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Which program interests you?</h3>
                  <div className="grid gap-3">
                    {programOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleProgramSelect(option.value)}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all text-left group"
                      >
                        <span className="font-medium">{option.label}</span>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <form className="space-y-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-muted-foreground hover:text-accent flex items-center gap-1 mb-4"
                  >
                    ← Change program selection
                  </button>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (WhatsApp preferred)</Label>
                    <Input id="phone" placeholder="+973 XXXX XXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label>Current Stage</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {stageOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelectedStage(option.value)}
                          className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            selectedStage === option.value
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your startup (optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Brief description of your business idea..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Panel */}
            <motion.div variants={staggerItem}>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold mb-6">Prefer to Talk?</h3>
                <p className="text-primary-foreground/80 mb-8">
                  Schedule a free 15-minute call to discuss your startup and the best program fit.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-primary-foreground/60 uppercase tracking-wide">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <Button asChild variant="secondary" className="w-full">
                    <a href="https://wa.me/97317000000">
                      Start WhatsApp Chat
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
