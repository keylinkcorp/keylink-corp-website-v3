import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ctaFeatures = [
  "100% Foreign Ownership",
  "7-10 Day Registration",
  "No Minimum Capital",
  "Full Profit Repatriation",
];

export function BranchCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dashed center-fade pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
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

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Open Your Bahrain Branch{" "}
            <span className="text-accent">in 7-10 Days</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 120+ international companies who trusted Keylink for their GCC market entry. 
            Start with a free consultation—no obligation.
          </p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {ctaFeatures.map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border text-sm font-medium text-primary"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/free-consultation">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary text-lg h-14 px-10 rounded-xl font-semibold shadow-sm group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+97312345678">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary text-lg h-14 px-10 rounded-xl hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +973 1234 5678
              </Button>
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            <span className="font-semibold text-primary">120+</span> Branches Registered • 
            <span className="font-semibold text-primary ml-1">40+</span> Countries Served • 
            <span className="font-semibold text-primary ml-1">100%</span> Success Rate
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
