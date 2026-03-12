import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Landmark,
  UserCheck,
  FileCheck2,
  Languages,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast turnaround",
    description:
      "Most company formations are completed in 3–7 business days once the required documents are ready (timelines can vary by activity and approvals).",
  },
  {
    icon: Landmark,
    title: "Local expertise",
    description:
      "Hands-on knowledge of Bahrain regulations and processes, so you get the right guidance from day one.",
  },
  {
    icon: UserCheck,
    title: "Dedicated case manager",
    description:
      "A single point of contact to coordinate your steps, keep you updated, and move things forward.",
  },
  {
    icon: FileCheck2,
    title: "100% paperwork handled",
    description:
      "We prepare the checklists, collect requirements, and handle the paperwork flow so you don’t get stuck.",
  },
  {
    icon: Languages,
    title: "English + Arabic support",
    description:
      "Clear communication in English and Arabic for you, your partners, and stakeholders.",
  },
];

export function AboutWhyChooseUs() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <motion.div
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="section-badge">Why Choose Us</Badge>
          <h2 className="mb-4">Practical support. Clear timelines. No guesswork.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We keep the process simple and transparent—so you always know what’s
            next, what it costs, and what to prepare.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + idx * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center transition-colors group-hover:bg-accent/15">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
