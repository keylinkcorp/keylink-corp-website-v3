import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Layers, Building2, CheckCircle2, Handshake } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Integrated Delivery Model",
    description: "Strategy, formation, and operations under one roof. No handoffs, no coordination gaps."
  },
  {
    icon: Building2,
    title: "Local Regulatory Mastery",
    description: "Deep relationships with MOIC, LMRA, and NBR. We know the shortcuts and the pitfalls."
  },
  {
    icon: CheckCircle2,
    title: "Accountability Through Execution",
    description: "We measure success by your outcomes, not our deliverables. Results, not reports."
  },
  {
    icon: Handshake,
    title: "Continuous Partnership",
    description: "From Day 1 to Year 10 and beyond. We're your operational partner, not a one-time vendor."
  },
];

export function ManagementSolutionFramework() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Strategy That Actually Gets Executed
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Most consultants deliver reports. We deliver results. Keylink's management consulting model is built on one principle: <span className="font-semibold text-primary">strategy without execution is just expensive advice.</span>
            </p>
          </motion.div>

          {/* The Keylink Difference Block */}
          <motion.div
            variants={staggerItem}
            className="bg-accent/10 rounded-2xl p-8 md:p-10 border border-accent/20 mb-12"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">The Keylink Difference</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When we develop your market entry strategy, we also handle company formation. When we optimize your operations, we also manage compliance. When we plan your expansion, we also process your visas and open your bank accounts.
            </p>
            <p className="text-lg font-medium text-primary mt-4">
              No handoffs. No coordination gaps. No finger-pointing between agencies.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
