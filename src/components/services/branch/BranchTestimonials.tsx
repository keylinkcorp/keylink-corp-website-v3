import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Al-Mansour",
    role: "Regional Director",
    company: "Gulf Energy Solutions",
    location: "Saudi Arabia → Bahrain",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "Keylink made our Bahrain branch setup seamless. As a Saudi company, we needed quick GCC market access. They handled everything from documentation to bank account—all in 8 days.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Managing Partner",
    company: "Mitchell & Associates",
    location: "London, UK → Bahrain",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "Our law firm needed a Middle East presence. Keylink coordinated our UK apostille, Arabic translations, and MOIC registration in parallel. Professional service throughout.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "TechVentures India",
    location: "Mumbai, India → Bahrain",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Coming from India, we faced complex embassy legalization requirements. Keylink guided us through every step. Our branch was operational in 12 days—faster than we expected.",
    rating: 5,
  },
];

export function BranchTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
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
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Star className="w-4 h-4" />
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              What Our Branch Clients{" "}
              <span className="text-accent">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 120+ international companies who trusted Keylink for their Bahrain branch
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    <p className="text-xs text-accent">{testimonial.location}</p>
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
