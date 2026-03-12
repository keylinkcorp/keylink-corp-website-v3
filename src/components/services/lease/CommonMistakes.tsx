import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  AlertTriangle,
  Languages,
  MapPin,
  FileX,
  CreditCard,
  Calculator,
  Clock
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const mistakes = [
  {
    icon: Languages,
    title: "English-Only Contracts",
    description: "Submitting leases in English without Arabic translation results in automatic rejection by RERA.",
  },
  {
    icon: MapPin,
    title: "Missing Property Details",
    description: "Incomplete property descriptions (missing plot number, building name) cause processing delays.",
  },
  {
    icon: FileX,
    title: "Unsigned Documents",
    description: "All parties must sign the lease before submission. Unsigned pages invalidate the registration.",
  },
  {
    icon: CreditCard,
    title: "Expired CPR/Passport",
    description: "Using expired identification documents results in application rejection.",
  },
  {
    icon: Calculator,
    title: "Incorrect Rent Format",
    description: "Rent amounts must match between contract and submission form exactly, including currency and period.",
  },
  {
    icon: Clock,
    title: "Late Registration",
    description: "Registering after lease commencement exposes both parties to penalty risk.",
  },
];

export function CommonMistakes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
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
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold border border-destructive/20 mb-4">
              <AlertTriangle className="w-4 h-4" />
              Avoid These Errors
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Common Lease Registration{" "}
              <span className="text-accent">Mistakes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't let these errors delay your registration
            </p>
          </motion.div>

          {/* Mistakes Grid */}
          <motion.div 
            variants={staggerItem} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {mistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-destructive/40 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                    <mistake.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{mistake.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mistake.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reassurance Callout */}
          <motion.div 
            variants={staggerItem}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <p className="text-center text-lg text-primary">
                <span className="font-bold">Our compliance team reviews every document before submission,</span> catching these errors before they cause delays or rejections.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
