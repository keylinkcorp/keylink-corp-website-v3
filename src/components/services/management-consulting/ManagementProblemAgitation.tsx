import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    stat: "90 Days",
    label: "Average delay when self-navigating",
    description: "What looked like a 30-day setup stretches into months of frustration"
  },
  {
    icon: TrendingDown,
    stat: "BHD 15K+",
    label: "Typical cost of strategic missteps",
    description: "Mistakes in structure, licensing, or compliance compound quickly"
  },
  {
    icon: Users,
    stat: "5+",
    label: "Agencies to coordinate alone",
    description: "MOIC, LMRA, NBR, banks, and industry regulators — each with unique requirements"
  },
  {
    icon: AlertTriangle,
    stat: "73%",
    label: "First-time applications rejected",
    description: "Without expert guidance, most submissions require rework"
  },
];

export function ManagementProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">The Real Challenge</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Most Bahrain Expansion Plans Stall
            </h2>
          </motion.div>

          {/* Problem Narrative */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Foreign investors often arrive in Bahrain with solid business plans — only to discover that execution here follows different rules. Ministry approvals take unexpected turns. Banking relationships require patience. What looked like a 30-day setup stretches into 90 days of frustration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The real cost is not the delays. It is the <span className="font-semibold text-primary">opportunity cost</span> — competitors moving faster, market windows closing, and investor confidence eroding.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meanwhile, established businesses struggle with a different problem. They know something is wrong but cannot pinpoint it. Margins shrink. Teams resist change. "We've always done it this way" becomes the default defense.
              </p>
              <p className="text-lg font-medium text-primary">
                Both scenarios share a common root: operating without a strategic partner who understands both the big picture and the local details.
              </p>
            </div>
          </motion.div>

          {/* Pain Point Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{point.stat}</p>
                <p className="text-sm font-medium text-primary mb-2">{point.label}</p>
                <p className="text-xs text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
