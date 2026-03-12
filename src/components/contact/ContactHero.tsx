import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Languages, Calendar } from "lucide-react";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const stats = [
  { icon: Clock, value: "<1 Hour", label: "Response Time" },
  { icon: Languages, value: "4", label: "Languages" },
  { icon: Calendar, value: "Sun-Thu", label: "Availability" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden flex items-center">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        
        {/* Dashed Top Fade Grid Pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            maskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 
            bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] 
            [background-size:16px_16px] 
            [mask-image:radial-gradient(ellipse_100%_50%_at_50%_0%,#000_30%,transparent_80%)]
            opacity-50"
        />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 floating-orb floating-orb-gold opacity-15 animate-float-slow" />
        <div className="absolute top-40 right-10 w-64 h-64 floating-orb floating-orb-navy opacity-10 animate-float" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 mb-6 px-4 py-1.5">
              Get in Touch
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
          >
            We're Here to Help You{" "}
            <span className="text-accent">Succeed</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're starting a new business, need government clearances, 
            or have questions about our services—we're ready to assist. 
            Reach out through your preferred channel.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-10 flex justify-center">
            <HeroReviewStrip align="center" />
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="glass-card p-4 md:p-5 text-center group hover:bg-primary/5 transition-all duration-300 border border-border/50"
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-xs md:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
