import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { ParticleField } from "@/components/ui/ParticleField";

export function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#001a35]" />
      
      {/* Particle Field */}
      <ParticleField count={80} color="gold" className="opacity-50" />
      
      {/* Additional gradient overlays */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(199, 167, 99, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(199, 167, 99, 0.1) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Animated gradient sweep */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(199, 167, 99, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(199, 167, 99, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(199, 167, 99, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full border border-accent/20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-accent/10"
        animate={{ 
          rotate: -360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/30"
        animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 px-4 py-1.5">
            Let's Work Together
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="relative">
              <span className="text-accent">Business Journey?</span>
              {/* Underline decoration */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0 4 Q50 0 100 4 T200 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Whether you're forming a new company, expanding operations, or need 
            ongoing business support, our team is ready to help you succeed in Bahrain.
          </p>

          {/* CTA Buttons with Glow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="btn-gold group relative overflow-hidden min-w-[200px]" 
                size="lg" 
                asChild
              >
                <a href="https://wa.me/97317008888" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  {/* Animated glow */}
                  <motion.span 
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(199, 167, 99, 0.3)",
                        "0 0 40px rgba(199, 167, 99, 0.5)",
                        "0 0 20px rgba(199, 167, 99, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary relative overflow-hidden min-w-[200px]"
                asChild
              >
                <a href="tel:+97317008888">
                  <span className="relative z-10 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +973 1700 8888
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Available Now
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span>Response within 1 hour</span>
            <div className="w-px h-4 bg-white/20" />
            <span>Free consultation</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
