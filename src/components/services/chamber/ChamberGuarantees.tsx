import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Shield, DollarSign, Clock, MessageCircle, Award } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "First-Submission Approval",
    description: "If your document is rejected due to our error, we resubmit at no additional cost"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Complete fee breakdown upfront — no surprise charges after the fact"
  },
  {
    icon: Clock,
    title: "Deadline Guarantee",
    description: "We meet agreed timelines or waive our service fee for that transaction"
  },
  {
    icon: MessageCircle,
    title: "Dedicated Support",
    description: "Direct WhatsApp line to your assigned coordinator — no call centers"
  }
];

export function ChamberGuarantees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Commitment to Your Success
            </h2>
          </motion.div>

          {/* Guarantee Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
          >
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <guarantee.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{guarantee.title}</h3>
                <p className="text-white/70 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            variants={staggerItem}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 rounded-full border border-white/20">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-white font-semibold">
                10+ years serving Bahrain businesses. We stake our reputation on every document.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
