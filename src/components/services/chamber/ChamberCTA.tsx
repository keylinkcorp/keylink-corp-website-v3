import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, CheckCircle, Clock, Shield } from "lucide-react";

const trustPills = [
  { icon: CheckCircle, text: "Free Quote" },
  { icon: Shield, text: "No Commitment" },
  { icon: Clock, text: "Same-Day Response" }
];

export function ChamberCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-primary relative overflow-hidden">
      {/* Dashed Center Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Stop Waiting in BCCI Queues — Let Us Handle It
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={staggerItem}
            className="text-xl text-white/80 mb-8 leading-relaxed"
          >
            Get your Certificate of Origin, membership registration, or document attestation processed within 24-48 hours. Book a free consultation today and receive a complete quote within 2 hours.
          </motion.p>

          {/* Trust Pills */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {trustPills.map((pill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20"
              >
                <pill.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white">{pill.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
