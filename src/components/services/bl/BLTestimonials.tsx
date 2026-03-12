import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Quote, 
  Star
} from "lucide-react";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialAhmed from "@/assets/testimonial-ahmed.jpg";

const testimonials = [
  {
    quote: "Keylink made getting our business license incredibly easy. We're based in the UK and they handled everything remotely — we had our license within 10 days.",
    author: "James Mitchell",
    role: "Tech Startup Founder",
    image: testimonialJames,
    rating: 5
  },
  {
    quote: "As a first-time entrepreneur, I was overwhelmed by Bahrain's requirements. Keylink's team explained every step and delivered exactly as promised. Highly recommend.",
    author: "Sarah Al-Rashid",
    role: "E-commerce Business Owner",
    image: testimonialSarah,
    rating: 5
  },
  {
    quote: "We needed to set up a branch office quickly. Keylink expedited our application and we were operational in under 3 weeks. Professional service throughout.",
    author: "Ahmed Hassan",
    role: "Regional Director, Manufacturing",
    image: testimonialAhmed,
    rating: 5
  }
];

export function BLTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Quote className="w-4 h-4" />
              Client Success
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="text-accent">Clients Say</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
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
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:border-accent hover:shadow-md transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
          className="flex flex-wrap justify-center gap-8 mt-14"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-border shadow-sm">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold">4.9 on Google</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-border shadow-sm">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <span className="font-bold">4.8 on Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
