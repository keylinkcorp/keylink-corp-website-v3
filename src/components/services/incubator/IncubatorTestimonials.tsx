import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const testimonials = [
  {
    name: "Ahmed Al-Khalifa",
    role: "Founder",
    company: "PayTech Solutions",
    program: "FinTech Bay",
    quote: "Keylink didn't just help with the application — they restructured our entire company to maximize our chances. We got accepted on the first try and secured BHD 8,000 in Tamkeen grants within 6 months.",
    avatar: "A"
  },
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "EduStart Bahrain",
    program: "Tamkeen",
    quote: "As a foreign founder with no local connections, I had no idea where to start. Keylink handled everything from my CR to program submission. I'm now running a profitable ed-tech startup from Bahrain.",
    avatar: "S"
  },
  {
    name: "James Mitchell",
    role: "CTO",
    company: "CloudGulf",
    program: "C5 Accelerate",
    quote: "The interview prep was invaluable. Keylink knew exactly what C5 looks for and helped us reframe our pitch. We closed our seed round 4 months after the program ended.",
    avatar: "J"
  }
];

export function IncubatorTestimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--accent) / 0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Success Stories</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Founders We've Helped <span className="text-accent">Get Accepted</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real founders who trusted us with their incubator journey.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-background border-2 border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/10" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
