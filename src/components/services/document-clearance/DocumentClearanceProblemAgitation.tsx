import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Clock, Banknote, Building2, AlertTriangle, ArrowDown } from "lucide-react";

const painStats = [
  {
    icon: Clock,
    value: "5+",
    unit: "Hours",
    label: "Per agency visit",
    description: "Waiting in queues"
  },
  {
    icon: Banknote,
    value: "BHD 500+",
    unit: "",
    label: "In fines",
    description: "For missed deadlines"
  },
  {
    icon: Building2,
    value: "7+",
    unit: "Agencies",
    label: "To navigate",
    description: "Different processes each"
  },
  {
    icon: AlertTriangle,
    value: "4-6",
    unit: "Weeks",
    label: "Of delays",
    description: "From wrong submissions"
  }
];

export function DocumentClearanceProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask dot grid */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 80%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              The Hidden Cost of DIY Clearances
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Agency Visit Costs More Than You Think
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Between lost productivity and compliance risks, clearance delays hit your bottom line hard.
            </p>
          </motion.div>

          {/* Pain Stats Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {painStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="text-3xl font-bold text-destructive mb-1">
                  {stat.value}<span className="text-xl">{stat.unit}</span>
                </div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Empathy Quote */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <blockquote className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
              "If you've sent an employee to get 'one simple clearance' only to have them return 
              empty-handed after half a day... you know exactly what we're talking about."
            </blockquote>
          </motion.div>

          {/* Arrow Transition */}
          <motion.div 
            variants={staggerItem}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center text-accent">
              <span className="text-sm font-medium mb-2">There's a better way</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
