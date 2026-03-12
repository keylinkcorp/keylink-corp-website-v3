import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "TechVentures MENA",
    role: "Founder & CEO",
    content: "Keylink Corp made our company formation process incredibly smooth. Within a week, we had our CR and were ready to operate.",
    rating: 5,
    image: testimonial1,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Trade Solutions",
    role: "Managing Director",
    content: "As a foreign investor, I was concerned about complexities. Keylink Corp's expertise made it seamless. Highly recommend!",
    rating: 5,
    image: testimonial2,
  },
  {
    id: 3,
    name: "James Wilson",
    company: "Al-Waha Consulting",
    role: "Business Owner",
    content: "The PRO services saved us countless hours. Their team handles all our government documentation efficiently.",
    rating: 5,
    image: testimonial3,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-gold/30 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="h-4 w-4 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary leading-[1.8] mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                    <BadgeCheck className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-gold font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Officially registered with
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Bahrain Chamber", "MOIC", "LMRA", "Tamkeen"].map((badge, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="text-sm font-medium text-primary px-4 py-2 bg-white rounded-full border border-border"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
