import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Building2, FileText, Send, Award } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery Call",
    duration: "15 minutes",
    description: "We assess your startup stage, industry focus, and goals to identify the best-fit programs for your profile."
  },
  {
    icon: Building2,
    step: "02",
    title: "Company Formation",
    duration: "5-10 days (if needed)",
    description: "If you don't have a Bahrain company, we handle Commercial Registration with the right structure for incubator eligibility."
  },
  {
    icon: FileText,
    step: "03",
    title: "Application Preparation",
    duration: "1-2 weeks",
    description: "We refine your pitch deck, business plan, and financial projections to meet each program's specific requirements."
  },
  {
    icon: Send,
    step: "04",
    title: "Program Submission",
    duration: "1-3 days",
    description: "Direct submission through our established program relationships — not the public inbox."
  },
  {
    icon: Award,
    step: "05",
    title: "Interview & Acceptance",
    duration: "2-4 weeks",
    description: "We prepare you for program interviews and negotiate terms. Post-acceptance, we provide 3 months of ongoing support."
  }
];

export function IncubatorProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Your Journey
              </span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              From Idea to <span className="text-accent">Incubator Acceptance</span> in 5 Steps
            </motion.h2>
            <motion.p variants={staggerItem} className="text-primary-foreground/70 max-w-2xl mx-auto">
              Our proven process gets you accepted faster with fewer rejections.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative pl-20 md:pl-32 pb-12 last:pb-0"
              >
                {/* Vertical line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[38px] md:left-[62px] top-16 bottom-0 w-0.5 bg-primary-foreground/20" />
                )}

                {/* Step number circle */}
                <div className="absolute left-0 md:left-6 top-0 w-[76px] flex items-center justify-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <span className="text-xs bg-primary-foreground/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Timeline */}
          <motion.div 
            variants={staggerItem}
            className="text-center mt-12 pt-8 border-t border-primary-foreground/20 max-w-4xl mx-auto"
          >
            <p className="text-primary-foreground/70 text-sm mb-2">Total Timeline</p>
            <p className="text-3xl font-bold text-accent">6-8 weeks</p>
            <p className="text-primary-foreground/60 text-sm mt-1">from start to acceptance</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
