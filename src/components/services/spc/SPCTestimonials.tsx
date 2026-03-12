import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Freelance Consultant",
    company: "Mitchell Consulting SPC",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "I was amazed how simple Keylink made the SPC registration. As a solo consultant, I didn't want the complexity of a partnership—the SPC was perfect. Fully operational in 8 days!",
    rating: 5
  },
  {
    name: "James Peterson",
    role: "IT Contractor",
    company: "Peterson Tech SPC",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The team guided me through every step remotely. I never had to visit Bahrain during the setup. My SPC is now serving clients across the GCC.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Marketing Specialist",
    company: "Santos Digital SPC",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Coming from the Philippines, I was worried about the foreign ownership rules. Keylink explained everything clearly—100% ownership with just BHD 50 capital. Incredible value!",
    rating: 5
  }
];

export function SPCTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Center-fading dot grid */}
      <div className="absolute inset-0 -z-10 bg-secondary/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_70%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <Quote className="w-4 h-4" />
              Client Success Stories
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Solo Entrepreneurs <span className="text-gold">Trust Keylink</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 350+ successful SPC owners who started their solo business journey with us
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl border-2 border-border shadow-sm p-6 hover:border-gold/50 hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{testimonial.name}</span>
                    <BadgeCheck className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">4.9 Google</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">4.8 Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
