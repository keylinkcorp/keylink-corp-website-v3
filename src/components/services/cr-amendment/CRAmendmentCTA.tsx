import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Clock, Shield } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  { icon: CheckCircle2, text: "100% First-Time Approval" },
  { icon: Clock, text: "2-5 Day Processing" },
  { icon: Shield, text: "Fixed Transparent Pricing" }
];

export function CRAmendmentCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-semibold border border-accent/20 mb-6">
              Take Action Now
            </span>
          </motion.div>
          
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Update Your{" "}
            <span className="text-accent">Commercial Registration?</span>
          </motion.h2>
          
          <motion.p variants={staggerItem} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Delays create compliance risks. Get your CR amendment filed correctly 
            the first time with expert guidance.
          </motion.p>
          
          {/* Feature Pills */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-white">{feature.text}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-accent/25 hover:shadow-xl transition-all"
            >
              <a href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <a href="tel:+97317000000">
                <Phone className="mr-2 h-4 w-4" />
                Call +973 1700 0000
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
