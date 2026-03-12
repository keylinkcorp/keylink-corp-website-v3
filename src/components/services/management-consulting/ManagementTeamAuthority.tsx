import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Users, Award, Globe, Briefcase, Building2, Shield, BadgeCheck } from "lucide-react";
import teamImage from "@/assets/management-consulting/management-team-authority-hero.jpg";

const authorityBadges = [
  { icon: Building2, text: "MOIC Registered" },
  { icon: Shield, text: "LMRA Authorized" },
  { icon: Award, text: "Chamber of Commerce Member" },
  { icon: BadgeCheck, text: "ISO 9001 Certified" },
];

const teamStats = [
  { value: "15+", label: "Senior Consultants" },
  { value: "12", label: "Years Avg. Experience" },
  { value: "4", label: "Languages Supported" },
  { value: "200+", label: "Projects Delivered" },
];

export function ManagementTeamAuthority() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
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
            radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 80%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Advisors Who Have Done This Before
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keylink's management consulting team combines international training with deep Bahrain market experience. Our senior consultants average 12+ years in GCC business advisory.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Image */}
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={teamImage}
                  alt="Keylink management consulting team"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerItem}>
              {/* Authority Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {authorityBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border shadow-sm"
                  >
                    <badge.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-primary">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="font-medium text-primary">Languages Supported</span>
                </div>
                <p className="text-muted-foreground">
                  Arabic, English, Hindi, and Urdu — ensuring clear communication with diverse clients and government officials.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
