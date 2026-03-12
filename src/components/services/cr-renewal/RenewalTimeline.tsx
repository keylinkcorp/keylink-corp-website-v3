import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, Send, CreditCard, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Document Collection",
    description: "Submit your current CR, trade license, and ID documents. We verify everything is ready for renewal.",
    duration: "Day 1"
  },
  {
    number: "02",
    icon: Send,
    title: "MOIC Submission",
    description: "We submit your renewal application to the Ministry of Industry and Commerce electronically.",
    duration: "Day 1"
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Payment Processing",
    description: "Renewal fees are processed. We handle all government payments on your behalf.",
    duration: "Day 1-2"
  },
  {
    number: "04",
    icon: Award,
    title: "Certificate Issuance",
    description: "Receive your renewed CR certificate. Digital delivery with original available for collection.",
    duration: "Day 2"
  }
];

export function RenewalTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Simple Process</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            How CR Renewal Works
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A straightforward 4-step process completed in as little as 24 hours
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-accent shadow-lg flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      {step.duration}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-24 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
