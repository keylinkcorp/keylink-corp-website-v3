import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Briefcase, Headphones, Award, Building2, Globe, Rocket } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ParticleField } from "@/components/ui/ParticleField";

const stats = [
  { icon: Calendar, value: 10, suffix: "+", label: "Years in Business", color: "from-amber-500/20 to-amber-600/20" },
  { icon: Users, value: 1000, suffix: "+", label: "Clients Served", color: "from-blue-500/20 to-blue-600/20" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Services Offered", color: "from-purple-500/20 to-purple-600/20" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support Available", color: "from-green-500/20 to-green-600/20" },
];

const milestones = [
  { year: "2014", title: "Company Founded", icon: Building2, description: "Started with a vision to simplify business in Bahrain" },
  { year: "2016", title: "First 100 Clients", icon: Users, description: "Reached our first major client milestone" },
  { year: "2018", title: "Full-Service Expansion", icon: Briefcase, description: "Expanded to comprehensive business solutions" },
  { year: "2020", title: "New HQ in Sanabis", icon: Globe, description: "Moved to our modern headquarters" },
  { year: "2022", title: "1,000th Client", icon: Award, description: "Celebrated serving 1,000+ businesses" },
  { year: "2024", title: "10 Year Anniversary", icon: Rocket, description: "A decade of excellence and growth" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutAchievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-primary">
      {/* Particle Background */}
      <ParticleField count={60} color="gold" className="opacity-40" />
      
      {/* Additional overlays */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(199, 167, 99, 0.15) 0%, transparent 60%)"
        }}
      />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Our Achievements
          </Badge>
          <h2 className="text-white mb-4">A Decade of Excellence</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our numbers tell the story of trust, growth, and commitment to client success.
          </p>
        </motion.div>

        {/* 3D Tilt Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <TiltCard tiltAmount={12} className="h-full">
                <div 
                  className="glass-card p-6 md:p-8 text-center h-full relative overflow-hidden group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon with glow */}
                  <div 
                    className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:bg-accent/30 transition-colors"
                    style={{
                      boxShadow: "0 0 30px rgba(199, 167, 99, 0.2)"
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Counter with glow effect */}
                  <div 
                    className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10"
                    style={{
                      textShadow: "0 0 20px rgba(199, 167, 99, 0.3)"
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <p className="text-white/60 text-sm relative z-10">{stat.label}</p>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="shimmer" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Our Journey</h3>
          <p className="text-white/60">Key milestones that shaped who we are today</p>
        </motion.div>

        {/* Horizontal Scrollable Timeline */}
        <div 
          ref={timelineRef}
          className="relative overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-6 min-w-max"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="relative flex-shrink-0 w-64"
              >
                {/* Connector */}
                {index < milestones.length - 1 && (
                  <div 
                    className="absolute top-12 left-[calc(50%+8px)] w-[calc(100%+24px)] h-0.5"
                    style={{
                      background: "linear-gradient(90deg, rgba(199, 167, 99, 0.5), rgba(199, 167, 99, 0.2))"
                    }}
                  />
                )}
                
                {/* Year dot */}
                <div className="relative z-10 flex justify-center mb-4">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-accent"
                    whileHover={{ scale: 1.2 }}
                    style={{
                      boxShadow: "0 0 20px rgba(199, 167, 99, 0.6)"
                    }}
                  />
                </div>
                
                {/* Card */}
                <div className="glass-card p-6 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <milestone.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-accent font-bold text-2xl mb-2 text-center">{milestone.year}</p>
                  <p className="text-white font-semibold mb-2 text-center">{milestone.title}</p>
                  <p className="text-white/60 text-sm text-center">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-4 md:hidden"
        >
          <p className="text-white/40 text-sm">← Scroll to explore →</p>
        </motion.div>
      </div>
    </section>
  );
}
