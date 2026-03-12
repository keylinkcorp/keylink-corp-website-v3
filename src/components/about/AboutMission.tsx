import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Shield, Award, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import missionImage from "@/assets/about/about-value-client.jpg";
import collabImage from "@/assets/about/about-value-excellence.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent and honest in every interaction we have with our clients",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Premium service delivery that exceeds expectations, every single time",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern solutions designed for the challenges of modern businesses",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-muted/30">
      {/* Dashed Top Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 40%, transparent 90%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 40%, transparent 90%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient-gold opacity-40" />
      
      {/* Enhanced Floating Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 floating-orb floating-orb-gold animate-float opacity-25" />
      <div className="absolute bottom-20 right-10 w-96 h-96 floating-orb floating-orb-navy animate-float-slow opacity-15" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 floating-orb floating-orb-gold animate-float opacity-10" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={itemVariants}>
            <Badge className="section-badge">Mission & Values</Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4">
            What Drives Us Forward
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission and values guide every decision we make and every service we provide.
          </motion.p>
        </motion.div>

        {/* Asymmetric Bento Grid - 5 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5 mb-8"
        >
          {/* Mission Card - Tall, spans 2 rows */}
          <motion.div
            variants={itemVariants}
            className="md:row-span-2 relative rounded-2xl overflow-hidden min-h-[420px] group"
          >
            <img
              src={missionImage}
              alt="Our mission in action"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                To empower entrepreneurs and businesses with seamless, end-to-end 
                solutions that transform complex regulatory processes into straightforward 
                journeys toward success.
              </p>
            </div>
          </motion.div>

          {/* Vision Card - Navy with gold accents */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden bg-primary p-7 min-h-[200px] group border-2 border-transparent hover:border-accent/50 transition-all duration-300"
          >
            <div className="absolute inset-0 pattern-dots opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To be the most trusted and preferred business partner in Bahrain, 
                recognized for excellence, integrity, and unwavering client success.
              </p>
            </div>
          </motion.div>

          {/* Stats Card - Glass morphism with animated counters */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden glass-card-light p-6 min-h-[200px] group"
          >
            <div className="absolute inset-0 pattern-dots opacity-5" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h4 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">
                  By The Numbers
                </h4>
              </div>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                    <span className="text-xl font-bold text-accent">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Collab Image Card - Enhanced with shimmer */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden min-h-[200px] group"
          >
            <img
              src={collabImage}
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <Badge className="bg-white/90 text-primary font-semibold backdrop-blur-sm">
                Client-First Approach
              </Badge>
            </div>
          </motion.div>

          {/* Years Badge Card - Accent with pulse */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-accent/80 p-6 min-h-[200px] group flex flex-col justify-center items-center text-center"
          >
            <div className="absolute inset-0 pattern-dots opacity-10" />
            {/* Animated ring */}
            <div className="absolute inset-4 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:inset-2 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <div className="text-primary/80 font-medium text-sm uppercase tracking-wider">
                Years of Excellence
              </div>
              <div className="mt-3 text-primary/60 text-xs">
                Serving Bahrain since 2014
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Values Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="glass-card-light p-8 text-center group relative overflow-hidden rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent" />
              
              {/* Hexagon-style icon container */}
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div className="absolute inset-0 bg-accent/10 rounded-xl rotate-45 group-hover:rotate-[55deg] group-hover:bg-accent/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
