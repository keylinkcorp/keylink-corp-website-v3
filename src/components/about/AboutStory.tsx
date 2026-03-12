import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import foundingImage from "@/assets/about/about-story-founding.jpg";

const timelineEvents = [
  {
    year: "2014",
    title: "Founded with a Vision",
    description: "Keylink Corp was established to simplify business formation in Bahrain, starting with just a small team of dedicated professionals who believed every entrepreneur deserves expert guidance.",
    highlight: "The Beginning",
  },
  {
    year: "2017",
    title: "Expanded Services",
    description: "We grew to offer comprehensive PRO services, visa processing, and accounting solutions, becoming a one-stop business hub for entrepreneurs from around the world.",
    highlight: "Growth Phase",
  },
  {
    year: "2020",
    title: "New Headquarters",
    description: "Moved to our modern offices in Sanabis Exhibition Tower, equipped with state-of-the-art facilities to serve the growing needs of our expanding client base.",
    highlight: "Major Milestone",
  },
  {
    year: "Today",
    title: "1,000+ Businesses Served",
    description: "We're proud to be Bahrain's leading business services partner, helping entrepreneurs from around the world succeed with our comprehensive suite of services.",
    highlight: "Current Era",
  },
];

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineEvents.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Enhanced Background with 3D Depth Effect */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 20% 20%, rgba(199, 167, 99, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 80% 80%, rgba(0, 44, 77, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* 3D Grid perspective */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 44, 77, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 44, 77, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-accent/20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-20 h-20 rounded-full bg-accent/10"
        animate={{ 
          y: [-10, 10, -10],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Our Story</Badge>
          <h2 className="mb-4">From Vision to Bahrain's Leading Business Partner</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What started as a small consultancy has grown into a comprehensive 
            business services powerhouse, trusted by entrepreneurs and corporations alike.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image with 3D Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <TiltCard className="perspective-1000" tiltAmount={8}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={foundingImage}
                  alt="Keylink Corp founding team"
                  className="w-full h-[450px] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-6 left-6 glass-card px-5 py-3"
                >
                  <span className="text-accent font-bold text-xl">Est. 2014</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute top-6 right-6 glass-card px-4 py-2"
                >
                  <span className="text-white font-semibold">10+ Years</span>
                </motion.div>
              </div>
            </TiltCard>

            {/* Decorative corner elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/15 rounded-2xl -z-10 blur-sm" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent/30 rounded-xl -z-10" />
          </motion.div>

          {/* Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Timeline Navigation Dots */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              
              <div className="flex-1 flex items-center justify-center gap-3">
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.year}
                    onClick={() => setActiveIndex(index)}
                    className="relative group"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-accent text-primary scale-110"
                          : "bg-muted text-muted-foreground hover:bg-accent/20"
                      }`}
                      style={{
                        boxShadow: index === activeIndex 
                          ? "0 0 20px rgba(199, 167, 99, 0.4)" 
                          : "none"
                      }}
                    >
                      <span className="text-xs font-bold">{event.year}</span>
                    </div>
                    {/* Connector line */}
                    {index < timelineEvents.length - 1 && (
                      <div 
                        className={`absolute top-1/2 left-full w-3 h-0.5 -translate-y-1/2 transition-colors ${
                          index < activeIndex ? "bg-accent" : "bg-border"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Timeline Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl border border-border/50 p-8 shadow-lg relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  {timelineEvents[activeIndex].highlight}
                </Badge>
                
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {timelineEvents[activeIndex].title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {timelineEvents[activeIndex].description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 flex gap-1">
                  {timelineEvents.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full flex-1 transition-colors duration-300 ${
                        idx <= activeIndex ? "bg-accent" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Full-Width Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 pattern-dots opacity-10" />
            <div 
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 10% 50%, rgba(199, 167, 99, 0.1) 0%, transparent 50%)"
              }}
            />
            
            {/* Animated quote marks */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-8"
            >
              <Quote className="w-16 h-16 text-accent/30" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-6 right-8 rotate-180"
            >
              <Quote className="w-16 h-16 text-accent/30" />
            </motion.div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
                "We built Keylink Corp on the belief that every entrepreneur deserves 
                expert guidance and unwavering support on their business journey. 
                A decade later, we're still driven by that same mission."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-0.5 bg-accent/50" />
                <p className="text-accent font-semibold">Founding Team, 2014</p>
                <div className="w-12 h-0.5 bg-accent/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
