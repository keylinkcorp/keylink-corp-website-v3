import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Users, 
  CheckCircle2,
  Clock,
  Coins,
  ArrowRight,
  Shield,
  RefreshCw,
  Target,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company",
    description: "Perfect for solo entrepreneurs who want full control with minimal capital",
    recommended: true,
    highlights: {
      capital: "BHD 50",
      timeline: "3-14 Days"
    },
    features: [
      { icon: Users, label: "Shareholders", value: "1 only" },
      { icon: Shield, label: "Control", value: "Full owner control" },
      { icon: Target, label: "Best For", value: "Solo entrepreneurs" },
      { icon: RefreshCw, label: "Conversion", value: "Can upgrade to WLL" },
    ],
    cta: { text: "Start Your SPC", href: "/free-consultation", primary: true }
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL (Partnership)",
    description: "Ideal for businesses with multiple shareholders and larger operations",
    recommended: false,
    highlights: {
      capital: "BHD 20,000",
      timeline: "5-7 Days"
    },
    features: [
      { icon: Users, label: "Shareholders", value: "2-50" },
      { icon: Shield, label: "Control", value: "Shared decision-making" },
      { icon: Target, label: "Best For", value: "Partnerships" },
      { icon: RefreshCw, label: "Conversion", value: "N/A" },
    ],
    cta: { text: "Get WLL Quote", href: "/free-consultation", primary: false }
  }
];

export function SPCvsWLLComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <User className="w-4 h-4" />
              Compare Structures
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            SPC vs WLL: <span className="text-gold">Which is Right for You?</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the key differences helps you choose the right structure for your business goals
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={cn(
                  "relative bg-white rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl group",
                  card.recommended 
                    ? "border-gold shadow-lg shadow-gold/10 hover:border-gold" 
                    : "border-border hover:border-gold/50"
                )}
              >
                {/* Recommended Badge */}
                {card.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gold text-primary text-sm font-bold rounded-full shadow-md">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Subtle gradient overlay for recommended card */}
                {card.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent rounded-2xl pointer-events-none" />
                )}

                {/* Card Header */}
                <div className={cn("text-center mb-6", card.recommended && "mt-2")}>
                  <div className={cn(
                    "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4",
                    card.recommended ? "bg-gold/10" : "bg-secondary"
                  )}>
                    <card.icon className={cn(
                      "w-8 h-8",
                      card.recommended ? "text-gold" : "text-primary"
                    )} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">{card.name}</h3>
                  <p className="text-muted-foreground text-sm lg:text-base">{card.description}</p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className={cn(
                    "p-4 rounded-xl text-center",
                    card.recommended ? "bg-gold/10" : "bg-secondary/60"
                  )}>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Coins className={cn("w-4 h-4", card.recommended ? "text-gold" : "text-primary")} />
                      <span className="text-xs font-medium text-muted-foreground">Min Capital</span>
                    </div>
                    <div className={cn(
                      "text-lg lg:text-xl font-bold",
                      card.recommended ? "text-gold" : "text-primary"
                    )}>
                      {card.highlights.capital}
                    </div>
                  </div>
                  <div className={cn(
                    "p-4 rounded-xl text-center",
                    card.recommended ? "bg-gold/10" : "bg-secondary/60"
                  )}>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Clock className={cn("w-4 h-4", card.recommended ? "text-gold" : "text-primary")} />
                      <span className="text-xs font-medium text-muted-foreground">Processing</span>
                    </div>
                    <div className={cn(
                      "text-lg lg:text-xl font-bold",
                      card.recommended ? "text-gold" : "text-primary"
                    )}>
                      {card.highlights.timeline}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg",
                        featureIndex % 2 === 0 ? "bg-secondary/40" : "bg-transparent"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        card.recommended ? "bg-gold/10" : "bg-secondary"
                      )}>
                        <feature.icon className={cn(
                          "w-4 h-4",
                          card.recommended ? "text-gold" : "text-primary"
                        )} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-muted-foreground">{feature.label}</div>
                        <div className="font-semibold text-sm lg:text-base truncate">{feature.value}</div>
                      </div>
                      <CheckCircle2 className={cn(
                        "w-5 h-5 flex-shrink-0",
                        card.recommended ? "text-gold" : "text-green-500"
                      )} />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={card.cta.href}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all group/btn",
                    card.cta.primary
                      ? "bg-gold text-primary hover:bg-gold/90 shadow-lg shadow-gold/20"
                      : "bg-primary text-white border-2 border-primary hover:bg-primary/90"
                  )}
                >
                  {card.cta.text}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Not sure which structure is right for you?</p>
                <Link 
                  to="/free-consultation" 
                  className="text-gold font-bold hover:underline inline-flex items-center gap-1"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
