import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Scale, 
  Building2, 
  Clock, 
  Shield,
  CheckCircle2,
  MessageSquare,
  Bell,
  Wallet
} from "lucide-react";

const keyFacts = [
  {
    icon: Scale,
    title: "Legal Definition",
    description: "A licensed government liaison authorized to represent companies before ministries"
  },
  {
    icon: Building2,
    title: "Scope",
    description: "Covers all 15+ ministries from MOIC to Immigration to Municipality"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Eliminates 20+ hours monthly of queue time and office visits"
  },
  {
    icon: Shield,
    title: "Authority",
    description: "Carries power of attorney to submit, collect, and sign on your behalf"
  }
];

const benefits = [
  { icon: Building2, text: "All 15+ ministries covered" },
  { icon: Clock, text: "Same-day document collection" },
  { icon: MessageSquare, text: "Status updates via WhatsApp" },
  { icon: Wallet, text: "Government fee advances" },
  { icon: Bell, text: "Renewal reminders" }
];

export function PROWhatIs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Educational Content */}
            <div>
              <motion.div variants={staggerItem}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  What Is a PRO?
                </span>
              </motion.div>
              
              <motion.h2 
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Your Government Liaison Specialist
              </motion.h2>
              
              <motion.div variants={staggerItem} className="space-y-4 text-muted-foreground mb-8">
                <p>
                  A PRO (Public Relations Officer) is your authorized representative for all 
                  government interactions in Bahrain. Think of them as your dedicated navigator 
                  through the kingdom's bureaucratic landscape — someone who speaks the language, 
                  knows the shortcuts, and has established relationships at every ministry.
                </p>
                <p>
                  Unlike a one-time service, a PRO becomes an extension of your business. They 
                  track your renewals, anticipate requirements, and ensure you never miss a 
                  deadline or face an avoidable fine. It's proactive protection, not reactive firefighting.
                </p>
              </motion.div>

              {/* Key Facts Grid */}
              <motion.div 
                variants={staggerItem}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                {keyFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors"
                  >
                    <fact.icon className="w-5 h-5 text-accent mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{fact.title}</h4>
                    <p className="text-xs text-muted-foreground">{fact.description}</p>
                  </div>
                ))}
              </motion.div>

              {/* Callout Box */}
              <motion.div 
                variants={staggerItem}
                className="bg-accent/10 border border-accent/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">No Office Visits Required</h4>
                    <p className="text-sm text-muted-foreground">
                      You provide documents. We handle every ministry visit, queue, and 
                      submission. Most clients haven't stepped into a government office in years.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Benefits Panel */}
            <motion.div variants={staggerItem}>
              <div className="bg-primary rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">What Our PROs Handle</h3>
                
                <ul className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg">{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Authority Stats */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-accent">98%</div>
                      <div className="text-sm text-white/70">First-attempt success rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent">24hr</div>
                      <div className="text-sm text-white/70">Average turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
