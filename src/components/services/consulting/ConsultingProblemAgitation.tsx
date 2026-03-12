import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AlertTriangle, Link2Off, Clock, UserX, ArrowDown } from "lucide-react";

const painPoints = [
  {
    icon: Link2Off,
    title: "Disconnected Agencies",
    description: "Formation Agency A doesn't talk to Visa Agency B"
  },
  {
    icon: UserX,
    title: "No Information Sharing",
    description: "Your accountant doesn't know what your PRO filed"
  },
  {
    icon: Clock,
    title: "Compounding Delays",
    description: "One missed deadline affects everything"
  },
  {
    icon: AlertTriangle,
    title: "You Become the Manager",
    description: "You become the unpaid project manager of your own business"
  }
];

export function ConsultingProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">The Challenge</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Hidden Cost of Fragmented Business Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Launching or expanding a business in Bahrain shouldn't mean managing five different 
              agencies, tracking ten separate timelines, and hoping nothing falls through the cracks.
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            variants={staggerItem}
            className="text-center text-lg text-muted-foreground mb-10"
          >
            Yet that's exactly what most entrepreneurs face:
          </motion.p>

          {/* Pain Points Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-destructive/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{point.title}</h3>
                    <p className="text-muted-foreground">"{point.description}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Agitation Box */}
          <motion.div
            variants={staggerItem}
            className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center mb-8"
          >
            <p className="text-lg text-primary font-medium mb-4">
              The result? <span className="text-destructive font-semibold">Months of delays</span>, 
              unexpected costs, and countless hours spent coordinating instead of growing your business.
            </p>
            <p className="text-muted-foreground">
              Foreign investors lose an average of <span className="font-semibold text-primary">4-8 weeks</span> to 
              coordination gaps alone.
            </p>
          </motion.div>

          {/* Transition */}
          <motion.div
            variants={staggerItem}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center gap-2">
              <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
              <p className="text-xl font-semibold text-accent">There's a better way.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
