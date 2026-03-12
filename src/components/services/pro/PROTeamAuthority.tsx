import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem, imageReveal } from "@/lib/animations";
import { FileCheck, Building2, Clock, Award } from "lucide-react";
import teamImage from "@/assets/pro-team-authority.jpg";

const stats = [
  {
    icon: FileCheck,
    value: "5,000+",
    label: "Documents Processed"
  },
  {
    icon: Building2,
    value: "15+",
    label: "Ministries Covered"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: Clock,
    value: "98%",
    label: "Same-Day Rate"
  }
];

export function PROTeamAuthority() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Stats */}
            <div>
              <motion.div variants={staggerItem}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Our Team
                </span>
              </motion.div>
              
              <motion.h2 
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Bahrain's Most Experienced PRO Team
              </motion.h2>
              
              <motion.p 
                variants={staggerItem}
                className="text-lg text-muted-foreground mb-10"
              >
                Our PRO officers aren't just document runners — they're seasoned government 
                relations specialists with established connections at every ministry. When you 
                work with Keylink, you're leveraging a decade of relationship-building.
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                variants={staggerItem}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 border border-border shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div variants={imageReveal}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="Keylink PRO team in Bahrain government office"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Quote Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 mx-6 relative z-10 border border-border">
                <blockquote className="text-muted-foreground italic mb-3">
                  "We know every ministry by name — literally. That's the difference between 
                  waiting 3 hours and being in and out in 20 minutes."
                </blockquote>
                <div className="text-sm font-medium text-primary">
                  — Ahmed, Senior PRO Officer
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
