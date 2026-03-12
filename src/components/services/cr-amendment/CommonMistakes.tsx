import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertTriangle, 
  FileX, 
  Hash, 
  ShieldAlert, 
  Clock, 
  Users, 
  Building2,
  AlertCircle
} from "lucide-react";

const mistakes = [
  {
    icon: FileX,
    title: "Missing Document Attestation",
    description: "Foreign documents need proper attestation chain. Unattested certificates get rejected, adding weeks to your timeline."
  },
  {
    icon: Hash,
    title: "Incorrect ISIC4 Code Selection",
    description: "MOIC activity codes are specific. Choosing the wrong classification creates compliance gaps and may require re-amendment."
  },
  {
    icon: ShieldAlert,
    title: "Ignoring Sector-Specific Approvals",
    description: "Financial services, healthcare, and food businesses need pre-approvals from regulatory bodies before the MOIC accepts amendments."
  },
  {
    icon: Clock,
    title: "Delayed Filing After Changes",
    description: "Operating with outdated CR details triggers penalties. Banks and government agencies verify current registration status."
  },
  {
    icon: Users,
    title: "Incomplete Shareholder Verification",
    description: "Corporate shareholders need valid Good Standing Certificates. Expired documents delay the entire amendment."
  },
  {
    icon: Building2,
    title: "Skipping Bank Notification",
    description: "Your bank needs updated CR copies within 30 days of amendment. Missed notifications can freeze business accounts."
  }
];

export function CommonMistakes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold border border-destructive/20 mb-4">
              <AlertTriangle className="w-4 h-4" />
              Avoid These Errors
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Common CR Amendment <span className="text-destructive">Mistakes</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These errors cost Bahrain businesses time and money. Learn what to avoid.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {mistakes.map((mistake, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl border-2 border-border p-6 hover:border-destructive/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <mistake.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2">{mistake.title}</h3>
              <p className="text-muted-foreground text-sm">{mistake.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Urgency Statement */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="bg-destructive/5 rounded-2xl border-2 border-destructive/20 p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Every Week of Delay Adds Risk</h4>
              <p className="text-muted-foreground">
                MOIC penalties accumulate monthly. Operating with outdated CR details exposes your business 
                to fines, banking restrictions, and potential registration cancellation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
