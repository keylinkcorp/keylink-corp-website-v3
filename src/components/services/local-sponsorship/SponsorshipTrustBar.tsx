import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Users, Clock, Shield, Wallet } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Vetted Sponsors" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Client Satisfaction" },
  { icon: Wallet, value: "BHD 600/yr", label: "Starting Price" }
];

export function SponsorshipTrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-white/80 mt-8 text-lg"
        >
          Bahrain's Trusted Local Sponsorship Partner - Your Success, Our Priority
        </motion.p>
      </div>
    </section>
  );
}
