import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "Keylink made our company formation process incredibly smooth. Their team handled everything from CR registration to visa processing. Highly recommended!",
    author: "Sarah Mitchell",
    company: "TechStart Bahrain",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    quote: "Professional, efficient, and always available. The Keylink team went above and beyond to help us meet tight deadlines.",
    author: "Ahmed Hassan",
    company: "Gulf Ventures",
    role: "Managing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote: "Their PRO services saved us countless hours. They know the Bahrain regulatory system inside and out.",
    author: "Maria Santos",
    company: "Santos Trading Co.",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
  },
];

const trustMetrics = [
  { value: "4.9", label: "Average Rating" },
  { value: "100+", label: "Client Reviews" },
  { value: "98%", label: "Satisfaction Rate" },
];

export function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        
        {/* Mesh gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(199, 167, 99, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 44, 77, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="section-badge">Client Success Stories</Badge>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 pattern-dots opacity-10" />
              
              {/* Animated quote marks */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8"
              >
                <Quote className="w-20 h-20 text-accent" />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 justify-center mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star 
                          className="w-6 h-6 fill-accent text-accent"
                          style={{ filter: "drop-shadow(0 0 6px rgba(199, 167, 99, 0.5))" }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white/90 text-center leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{current.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    {/* Avatar with ring */}
                    <div className="relative mb-4">
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2 border-accent/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                      <img
                        src={current.image}
                        alt={current.author}
                        className="w-16 h-16 rounded-full object-cover border-3 border-accent"
                      />
                    </div>
                    <p className="text-white font-semibold text-lg">{current.author}</p>
                    <p className="text-accent">{current.role}</p>
                    <p className="text-white/60 text-sm">{current.company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-accent w-8" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {index === 0 && <Star className="w-5 h-5 fill-accent text-accent" />}
                    {index === 1 && <MessageSquare className="w-5 h-5 text-accent" />}
                    {index === 2 && <span className="text-2xl">🎯</span>}
                    <span className="text-2xl md:text-3xl font-bold text-primary">{metric.value}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{metric.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Review platforms */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
              <span className="text-muted-foreground text-sm">Verified reviews from</span>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-primary">Google</span>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-primary">LinkedIn</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
