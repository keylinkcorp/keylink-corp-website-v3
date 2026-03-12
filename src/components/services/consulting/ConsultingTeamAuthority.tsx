import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Shield, 
  Award, 
  Users, 
  Globe,
  BadgeCheck,
  Quote
} from "lucide-react";
import teamPhoto from "@/assets/consulting-team-photo.jpg";

const authorityBadges = [
  { label: "MOIC Registered", icon: Shield },
  { label: "LMRA Authorized", icon: BadgeCheck },
  { label: "Chamber of Commerce Member", icon: Award },
  { label: "ISO 9001 Certified", icon: Shield }
];

const teamHighlights = [
  { value: "25+", label: "Full-time Consultants" },
  { value: "8 yrs", label: "Average Experience" },
  { value: "4", label: "Languages Supported" }
];

export function ConsultingTeamAuthority() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "6rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">Our Expertise</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Government-Authorized. Locally Expert. Internationally Minded.
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-8">
              Keylink Corp is registered with the Ministry of Industry & Commerce (MOIC), 
              Labour Market Regulatory Authority (LMRA), and the Bahrain Chamber of Commerce. 
              Our team combines deep local expertise with international business standards.
            </motion.p>

            {/* Authority Badges */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {authorityBadges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-sm font-medium text-primary"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* Team Highlights */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {teamHighlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-secondary/50 rounded-xl">
                  <p className="text-2xl font-bold text-accent">{highlight.value}</p>
                  <p className="text-sm text-muted-foreground">{highlight.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Credentials */}
            <motion.div
              variants={staggerItem}
              className="bg-secondary/30 rounded-xl p-6 border border-border mb-6"
            >
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Our senior consultants have processed over <span className="font-semibold text-primary">2,000 company formations</span>, 
                  <span className="font-semibold text-primary"> 5,000+ visa applications</span>, and maintained relationships 
                  with key ministry officials for over a decade."
                </p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-3"
            >
              <Quote className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <p className="text-primary italic">
                  "When you work with Keylink, you're not just hiring a service provider — 
                  you're gaining a strategic partner with genuine influence and expertise in the 
                  Bahrain business ecosystem."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamPhoto}
                alt="Keylink Corp professional team"
                className="w-full h-auto object-cover aspect-[3/2]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">Multilingual Support</p>
                      <p className="text-xs text-muted-foreground">Arabic, English, Hindi, Urdu</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">24/7</p>
                    <p className="text-xs text-muted-foreground">Availability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
