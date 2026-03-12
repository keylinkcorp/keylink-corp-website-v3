import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Upload, Settings, FileCheck, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Share Your Documents",
    description: "Send us your CR, trade license, and export documents via email or WhatsApp"
  },
  {
    number: "02",
    icon: Settings,
    title: "We Handle Everything",
    description: "Our team prepares applications, coordinates with BCCI, and manages all submissions"
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive Your Certificates",
    description: "Get your attested documents delivered to your office or collect from our Manama location"
  }
];

export function ChamberProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works — 3 Simple Steps
            </h2>
          </motion.div>

          {/* Steps */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
          >
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
                )}
                
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Timeline Badge */}
          <motion.div variants={staggerItem} className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold text-accent">Most requests completed within 24-48 hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
