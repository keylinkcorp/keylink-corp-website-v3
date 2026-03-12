import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileX, Clock, XCircle, HelpCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

const painPoints = [
  {
    icon: FileX,
    title: "Document Errors",
    description: "Missing attestations or incorrect formats leading to automatic rejections"
  },
  {
    icon: Clock,
    title: "Processing Delays",
    description: "Weeks of waiting due to incomplete applications or missed requirements"
  },
  {
    icon: XCircle,
    title: "LMRA Rejections",
    description: "Applications denied without clear explanation of what went wrong"
  },
  {
    icon: HelpCircle,
    title: "Quota Confusion",
    description: "Navigating employer quota limits and nationality-specific requirements"
  }
];

export function VisaProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={staggerItem} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                Common Challenges
              </span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              The Hidden Challenges of Bahrain Immigration
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Many businesses lose weeks—sometimes months—attempting to navigate Bahrain's visa 
              system independently. LMRA rejections due to incomplete documentation. Employees 
              stranded abroad waiting for approval. Families separated because of missed requirements.
            </motion.p>
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution Transition */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                There's a Better Way
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                The complexity isn't the process itself. It's knowing exactly which documents need 
                attestation, understanding current LMRA quotas, and anticipating the questions 
                immigration officers will ask. After processing over 5,000 visas across 40+ nationalities, 
                we've mapped every potential roadblock. When you work with Keylink, you're not just 
                getting an application service—you're getting the accumulated knowledge of thousands 
                of successful cases.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
