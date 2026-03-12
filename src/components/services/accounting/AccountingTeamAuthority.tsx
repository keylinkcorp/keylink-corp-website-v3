import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Shield, 
  Award, 
  Users, 
  Globe,
  BadgeCheck,
  GraduationCap
} from "lucide-react";

const credentials = [
  { label: "CPA Certified", icon: GraduationCap },
  { label: "ACCA Qualified", icon: Award },
  { label: "NBR Registered", icon: Shield },
  { label: "CMA Certified", icon: BadgeCheck }
];

const teamHighlights = [
  { value: "15+", label: "Qualified Accountants" },
  { value: "8 yrs", label: "Average Experience" },
  { value: "4", label: "Languages Supported" }
];

interface AccountingTeamAuthorityProps {
  teamImage?: string;
}

export function AccountingTeamAuthority({ teamImage }: AccountingTeamAuthorityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
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
              Certified Professionals. NBR-Registered. Locally Expert.
            </motion.h2>

            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-8">
              Your books are handled by qualified accountants with real-world experience in 
              Bahrain's regulatory environment. Not juniors, not bots — certified professionals 
              who understand your business.
            </motion.p>

            {/* Credentials Badges */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {credentials.map((credential, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-sm font-medium text-primary"
                >
                  <credential.icon className="w-4 h-4 text-accent" />
                  {credential.label}
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

            {/* Experience Statement */}
            <motion.div
              variants={staggerItem}
              className="bg-secondary/30 rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Our team has processed over <span className="font-semibold text-primary">BHD 75M+ in managed assets</span>, 
                  filed <span className="font-semibold text-primary">1,000+ VAT returns</span>, and maintained 
                  a <span className="font-semibold text-primary">100% audit pass rate</span> for our clients."
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-secondary/50">
              {teamImage ? (
                <img
                  src={teamImage}
                  alt="Keylink Corp professional accounting team"
                  className="w-full h-auto object-cover aspect-[3/2]"
                />
              ) : (
                <div className="w-full aspect-[3/2] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Users className="w-24 h-24 text-accent/30" />
                </div>
              )}
              
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
                    <p className="text-2xl font-bold text-accent">300+</p>
                    <p className="text-xs text-muted-foreground">Clients Served</p>
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
