import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Target, RefreshCw, Eye, Quote } from "lucide-react";
import teamImage from "@/assets/consulting-team-collaboration.jpg";

const differentiators = [
  {
    icon: Target,
    title: "Single Accountability",
    description: "One team, one timeline, one invoice. No coordination gaps."
  },
  {
    icon: RefreshCw,
    title: "Integrated Systems",
    description: "Our legal, formation, visa, and accounting teams share real-time updates."
  },
  {
    icon: Eye,
    title: "Proactive Management",
    description: "We anticipate issues before they become problems."
  }
];

export function ConsultingSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Keylink Corp team collaboration"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">The Solution</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              One Partner. Complete Business Journey.
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-8">
              Keylink Corp's end-to-end consultancy model eliminates fragmentation by design. 
              You get a single point of contact who coordinates every aspect of your Bahrain 
              business — from initial market entry strategy to ongoing compliance and growth support.
            </motion.p>

            {/* Differentiators */}
            <motion.div variants={staggerContainer} className="space-y-6 mb-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Callout */}
            <motion.div
              variants={staggerItem}
              className="bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary italic mb-2">
                    "Working with Keylink felt like having an in-house business operations team from day one."
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    — Sarah Mitchell, Global Trade Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
