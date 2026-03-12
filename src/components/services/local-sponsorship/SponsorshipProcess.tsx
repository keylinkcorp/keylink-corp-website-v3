import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MessageSquare, Users, FileText, CheckCircle, Clock } from "lucide-react";

const processSteps = [
  {
    number: "1",
    day: "Day 1",
    title: "Free Consultation",
    icon: MessageSquare,
    items: [
      "Review your business activities",
      "Confirm sponsorship requirement",
      "Explain protection framework",
      "Answer your questions"
    ]
  },
  {
    number: "2",
    day: "Days 2-3",
    title: "Sponsor Matching",
    icon: Users,
    items: [
      "Match you with suitable vetted sponsor",
      "Introduce via video call if desired",
      "Review and customize agreements",
      "Finalize documentation"
    ]
  },
  {
    number: "3",
    day: "Days 4-7",
    title: "Legal Registration",
    icon: FileText,
    items: [
      "Notarize all agreements",
      "Register with MOIC",
      "Obtain Commercial Registration",
      "Hand over complete documentation"
    ]
  }
];

export function SponsorshipProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
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
            <span className="section-badge">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Local Sponsor in 3 Simple Steps
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative"
                >
                  {/* Connector Line (hidden on mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-accent/30" />
                  )}

                  <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    {/* Step Number */}
                    <div className="flex justify-center mb-4">
                      <div className="step-number-filled">
                        {step.number}
                      </div>
                    </div>

                    {/* Day Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4">
                      <Clock className="w-4 h-4" />
                      {step.day}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>

                    {/* Items */}
                    <ul className="space-y-2 text-left">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Badge */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-white font-semibold">Complete Sponsorship Arrangement in 5-7 Business Days</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
