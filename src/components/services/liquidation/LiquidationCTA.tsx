import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Shield, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Shield, text: "100% Compliance" },
  { icon: Building2, text: "7-Ministry Clearance" },
  { icon: CheckCircle2, text: "Free Consultation" },
];

export function LiquidationCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Dashed Center Fade Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-primary">
        <div 
          className="absolute inset-0"
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
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8"
          >
            <span className="text-sm font-medium text-accent">Close With Confidence</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Close Your Bahrain Company{" "}
            <span className="text-accent">the Right Way?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Avoid penalties, protect your assets, and ensure complete legal compliance with our 7-ministry liquidation process.
          </p>

          {/* Feature list */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12"
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white font-medium">{feature.text}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/free-consultation">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary text-lg h-16 px-10 rounded-xl font-bold shadow-sm"
                >
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+97317000000">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white text-white h-16 px-10 text-lg rounded-xl hover:bg-white hover:text-primary font-bold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/50 text-sm mt-10"
          >
            350+ companies successfully closed • 100% compliance rate • 4-6 week average timeline
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
