import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Building2, Phone as PhoneIcon, Mail, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const packageOptions = [
  { id: "essential", label: "Essential", icon: MapPin, description: "Business address only" },
  { id: "business-plus", label: "Business Plus", icon: PhoneIcon, description: "Address + phone" },
  { id: "executive", label: "Executive", icon: Building2, description: "Full virtual office" },
  { id: "custom", label: "Custom Package", icon: Mail, description: "Tailored solution" },
];

export function VirtualOfficeContact() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedPackage, ...formData });
  };

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Modern Grid Lines Background */}
      <div className="absolute inset-0 bg-[#F8F8F8]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ebebeb_1px,transparent_1px),linear-gradient(to_bottom,#ebebeb_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)',
          }}
        />
      </div>
      {/* Gold accent */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 30% 20%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl border border-border p-8 md:p-10 shadow-lg"
          >
            <span className="section-badge">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request Your <span className="text-accent">Virtual Office</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with a professional virtual office in Bahrain. Fill out the form and 
              our team will contact you within 24 hours.
            </p>

            {/* Step Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-accent" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= 1 ? "bg-accent text-accent-foreground shadow-md shadow-accent/15" : "bg-secondary"
                }`}>
                  {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Choose Package</span>
              </div>
              <div className="flex-1 h-0.5 bg-border rounded-full overflow-hidden">
                <div className={`h-full bg-accent transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-accent" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= 2 ? "bg-accent text-accent-foreground shadow-md shadow-accent/15" : "bg-secondary"
                }`}>
                  2
                </div>
                <span className="text-sm font-medium hidden sm:inline">Your Details</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Package Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-muted-foreground mb-4">
                    Which virtual office package are you interested in?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {packageOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedPackage(option.id)}
                          className={`group p-5 rounded-xl border text-left transition-all duration-300 ${
                            selectedPackage === option.id
                              ? "border-accent bg-accent/10 shadow-md shadow-accent/10"
                              : "border-border bg-background hover:border-accent/50 hover:bg-secondary/50"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                            selectedPackage === option.id ? 'bg-accent/20' : 'bg-secondary group-hover:bg-accent/10'
                          }`}>
                            <Icon className={`w-5 h-5 transition-colors ${
                              selectedPackage === option.id ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                            }`} />
                          </div>
                          <h4 className="font-semibold text-primary mb-1">{option.label}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </button>
                      );
                    })}
                  </div>
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!selectedPackage}
                    className="w-full mt-6 bg-accent hover:bg-accent/90"
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+973 1234 5678"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your virtual office needs..."
                      rows={4}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-xl"
                      size="lg"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 bg-accent hover:bg-accent/90 rounded-xl shadow-md shadow-accent/15" 
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Contact Us</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-primary-foreground/70 mb-8">
                Prefer to reach out directly? Our team is available to answer your questions 
                about virtual office services in Bahrain.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-primary-foreground/70">+973 1700 0000</p>
                    <p className="text-primary-foreground/70">+973 3300 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-primary-foreground/70">virtualoffice@keylinkcorp.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Virtual Office Address</h4>
                    <p className="text-primary-foreground/70">
                      Sanabis Exhibition Tower<br />
                      Sanabis, Kingdom of Bahrain
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <div className="space-y-2 text-primary-foreground/70">
                  <p>Sunday - Thursday: 8:00 AM - 8:00 PM</p>
                  <p>Friday - Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-accent font-medium">Same-day setup available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
