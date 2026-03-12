import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, CheckCircle, Clock } from "lucide-react";

const trustPills = [
  { icon: CheckCircle, text: "Free Initial Consultation" },
  { icon: Shield, text: "NBR-Registered Agents" },
  { icon: Clock, text: "Transparent Pricing" }
];

export function TaxCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, hsl(var(--gold) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--gold) / 0.1) 0%, transparent 40%)
          `
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Get Compliant Today
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Never Worry About NBR Deadlines Again
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={staggerItem}
            className="text-xl text-white/80 mb-8 leading-relaxed"
          >
            Book your free tax consultation today. Our NBR-certified team will assess your compliance status, identify risks, and outline a clear path forward — no obligation.
          </motion.p>

          {/* Trust Pills */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {trustPills.map((pill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
              >
                <pill.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white">{pill.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+97317000000">
                <Phone className="w-5 h-5 mr-2" />
                Call +973 1700 0000
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
