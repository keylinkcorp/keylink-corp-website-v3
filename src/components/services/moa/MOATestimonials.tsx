import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Quote, Star, Globe, Building2, Briefcase } from "lucide-react";

import testimonialAhmed from "@/assets/testimonial-ahmed.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";

const testimonials = [
  {
    quote: "Keylink drafted our WLL Memorandum perfectly the first time. The Article 15 clauses were exactly what our lawyer confirmed we needed. Notarized within 48 hours.",
    author: "Sarah M.",
    title: "Co-Founder, Tech Startup",
    image: testimonialSarah,
    icon: Briefcase,
    rating: 5
  },
  {
    quote: "We needed an MOA amendment to add new activities. Keylink handled everything through Sijilat and we had the updated MOA within a week. Professional and efficient.",
    author: "Ahmed K.",
    title: "Managing Director, Consulting Firm",
    image: testimonialAhmed,
    icon: Building2,
    rating: 5
  },
  {
    quote: "Required our MOA attested for a UAE bank account. Keylink coordinated the MOFA attestation and embassy legalization seamlessly. Saved us so much time.",
    author: "James L.",
    title: "Branch Manager, UK Company",
    image: testimonialJames,
    icon: Globe,
    rating: 5
  }
];

export function MOATestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Star className="w-4 h-4" />
              Client Success
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Trusted by Entrepreneurs{" "}
            <span className="text-accent">Worldwide</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of business owners who've trusted Keylink for their MOA services in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-t-4 hover:border-t-accent transition-all"
            >
              {/* Large decorative quote */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" />
              
              {/* Rating - Enhanced */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote - Enhanced */}
              <p className="text-lg text-foreground mb-8 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author - Enhanced */}
              <div className="flex items-center gap-4 pt-6 border-t-2 border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm border-2 border-border"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <testimonial.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
