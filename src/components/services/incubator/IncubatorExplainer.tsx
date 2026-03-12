import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Clock, MapPin, Users } from "lucide-react";

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

const benefits = [
  "Non-dilutive grants up to BHD 10,000",
  "Access to regulatory sandbox (fintech)",
  "Investor network connections",
  "Mentorship from successful founders",
  "Shared workspace and resources",
  "Government-backed credibility"
];

const quickFacts = [
  { icon: Clock, label: "Timeline", value: "6-8 weeks to acceptance" },
  { icon: MapPin, label: "Location", value: "Manama, Bahrain" },
  { icon: Users, label: "Eligibility", value: "Open to foreign entrepreneurs" }
];

export function IncubatorExplainer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Dot Pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={staggerItem}>
              <span className="section-badge">What is a Business Incubator?</span>
            </motion.div>

            <motion.h2 
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold"
            >
              Understanding Startup <span className="text-accent">Incubators & Accelerators</span> in Bahrain
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">business incubator in Bahrain</strong> provides 
                early-stage startups with the resources, mentorship, and funding needed to transform 
                innovative ideas into sustainable businesses. Unlike traditional business services, 
                <strong className="text-foreground"> startup incubators</strong> offer structured programs 
                that combine workspace, training, and access to investor networks — all designed to 
                accelerate your path to market.
              </p>

              <p>
                <strong className="text-foreground">Accelerators</strong> like FinTech Bay and C5 Accelerate 
                run intensive 12-week programs focused on rapid growth and investor readiness. They're best 
                suited for startups with existing traction seeking to scale quickly. 
                <strong className="text-foreground"> Incubators</strong> like Tamkeen's startup support 
                programs offer longer-term nurturing (6-12 months) with non-dilutive grants for founders 
                still developing their minimum viable product.
              </p>

              <p>
                Bahrain has emerged as one of the <strong className="text-foreground">most startup-friendly 
                ecosystems in the Gulf</strong>. With zero corporate tax, 100% foreign ownership permitted, 
                and direct government backing through Tamkeen grants, 
                <strong className="text-foreground"> foreign entrepreneurs</strong> can establish and grow 
                businesses with significantly lower barriers than neighboring markets. The kingdom's 
                <strong className="text-foreground"> startup accelerator programs</strong> have launched 
                hundreds of successful ventures, from fintech unicorns to regional e-commerce leaders.
              </p>
            </motion.div>
          </div>

          {/* Side Panel */}
          <motion.div variants={staggerItem} className="space-y-6">
            {/* Benefits Card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-muted rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                      <p className="text-sm font-medium">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting From</p>
                <p className="text-2xl font-bold text-accent">BHD 150</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
