import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Star, Quote } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialAhmed from "@/assets/testimonial-ahmed.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";

const testimonials = [
  {
    quote: "The multi-shareholder process seemed complex until Keylink broke it down. They managed three different shareholder nationalities and still delivered in 7 days. Highly recommended for any partnership structure.",
    author: "Managing Partner",
    company: "Tech Consulting WLL",
    rating: 5,
    image: testimonialJames
  },
  {
    quote: "We needed a WLL for a family business restructure. Keylink handled the sensitive ownership discussions professionally and ensured every document was perfect before submission. No delays, no surprises.",
    author: "Family Office Director",
    company: "Investment Holdings WLL",
    rating: 5,
    image: testimonialAhmed
  },
  {
    quote: "After comparing quotes from 5 agencies, Keylink offered the most transparent breakdown and the fastest timeline. Our WLL was registered in 5 days and the bank account was open before we expected. Outstanding service.",
    author: "Co-Founder",
    company: "E-commerce Ventures WLL",
    rating: 5,
    image: testimonialSarah
  }
];

export function WLLTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade dot grid */}
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
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <Star className="w-4 h-4" />
              Client Reviews
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What WLL Clients <span className="text-gold">Say About Keylink</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-gold/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-4">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
