import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Award, Quote } from "lucide-react";
import clientImage from "@/assets/about/about-value-client.jpg";
import integrityImage from "@/assets/about/about-value-integrity.jpg";
import excellenceImage from "@/assets/about/about-value-excellence.jpg";

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    tagline: "Your Success is Our Success",
    description:
      "We put our clients at the center of everything we do. From your first consultation to long-term partnership, we're committed to understanding your unique needs and delivering personalized solutions that drive real results.",
    image: clientImage,
    number: "01",
    testimonial: {
      quote: "They treated my business like their own.",
      author: "Sarah M., TechStart Bahrain"
    }
  },
  {
    icon: Shield,
    title: "Unwavering Integrity",
    tagline: "Transparent, Honest & Ethical",
    description:
      "Trust is the foundation of every relationship we build. We maintain complete transparency in our processes, provide honest advice even when it's not what you want to hear, and uphold the highest ethical standards in all our dealings.",
    image: integrityImage,
    number: "02",
    testimonial: {
      quote: "Their honesty saved us from costly mistakes.",
      author: "Ahmed H., Gulf Ventures"
    }
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    tagline: "Premium Service, Every Time",
    description:
      "We don't settle for good enough. Our team continuously strives to exceed expectations, staying updated with the latest regulations, best practices, and innovations to deliver exceptional service quality.",
    image: excellenceImage,
    number: "03",
    testimonial: {
      quote: "The attention to detail is unmatched.",
      author: "Maria S., Santos Trading"
    }
  },
];

const maskShapes = [
  "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)", // Angled corner
  "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)", // Top-left cut
  "ellipse(100% 100% at 0% 100%)", // Organic blob
];

export function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Enhanced Background with Depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 0% 0%, rgba(199, 167, 99, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 100% 100%, rgba(0, 44, 77, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>


      <div className="container px-4 relative z-10 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <Badge className="section-badge">Our Core Values</Badge>
          <h2 className="mb-4">The Principles That Define Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These values aren't just words on a wall—they're the foundation of 
            how we work, how we treat clients, and how we build lasting partnerships.
          </p>
        </motion.div>

        {/* Values with Scroll-Driven Layout */}
        <div className="space-y-32 lg:space-y-40">
          {values.map((value, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Large Number Watermark */}
                <div 
                  className={`absolute top-0 ${isReversed ? "right-0 lg:right-20" : "left-0 lg:left-20"} text-[200px] md:text-[280px] font-bold leading-none pointer-events-none select-none`}
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(199, 167, 99, 0.15)",
                  }}
                >
                  {value.number}
                </div>

                <div 
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isReversed ? "" : ""
                  }`}
                >
                  {/* Image with Custom Mask */}
                  <motion.div
                    className={`relative ${isReversed ? "lg:order-2" : ""}`}
                    whileInView={{ scale: [0.95, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div 
                      className="relative rounded-3xl overflow-hidden shadow-2xl group"
                      style={{
                        clipPath: maskShapes[index],
                      }}
                    >
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                    </div>
                    
                    {/* Floating icon with parallax */}
                    <motion.div
                      className={`absolute ${isReversed ? "-right-4 lg:-right-8" : "-left-4 lg:-left-8"} top-1/2 -translate-y-1/2`}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div 
                        className="w-20 h-20 rounded-2xl bg-accent/90 flex items-center justify-center shadow-lg"
                        style={{
                          boxShadow: "0 10px 40px rgba(199, 167, 99, 0.4)"
                        }}
                      >
                        <value.icon className="w-10 h-10 text-primary" />
                      </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div 
                      className={`absolute ${isReversed ? "left-10 bottom-10" : "right-10 bottom-10"} w-24 h-24 border-2 border-accent/30 rounded-full -z-10`}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                      {value.tagline}
                    </Badge>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                      {value.description}
                    </p>

                    {/* Mini Testimonial */}
                    <div className="bg-muted/50 rounded-2xl p-6 relative">
                      <Quote className="absolute top-4 left-4 w-6 h-6 text-accent/30" />
                      <p className="text-primary italic pl-6 mb-2">
                        "{value.testimonial.quote}"
                      </p>
                      <p className="text-muted-foreground text-sm pl-6">
                        — {value.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
