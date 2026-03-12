import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clientHandshake from "@/assets/virtual-office/client-handshake.jpg";

const testimonials = [
  {
    id: 1,
    name: "Fatima Al-Mahmood",
    role: "CEO",
    company: "Gulf Trade Solutions",
    rating: 5,
    quote: "The best virtual office in Bahrain. We registered our CR using their Sanabis address and the mail handling service is impeccable. Our clients are impressed with our professional presence.",
    avatar: "F",
  },
  {
    id: 2,
    name: "James Mitchell",
    role: "Regional Director",
    company: "UK Exports Ltd",
    rating: 5,
    quote: "As a foreign company entering the Bahrain market, Keylink's virtual office was perfect. We established our presence without the overhead of a physical office. Highly recommended!",
    avatar: "J",
  },
  {
    id: 3,
    name: "Hassan Al-Dosari",
    role: "Consultant",
    company: "Independent",
    rating: 5,
    quote: "Excellent value for a virtual business address in Bahrain. The call answering service is professional, and I love that I can use meeting rooms when I need to meet clients.",
    avatar: "H",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function VirtualOfficeTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Center Fade Dot Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 70%)',
          }}
        />
      </div>
      {/* Gold accent from bottom */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            What Our Virtual Office Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join over 1,000 businesses who trust Keylink for their virtual office needs in Bahrain
          </p>
        </motion.div>

        {/* Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto group"
        >
          <img 
            src={clientHandshake} 
            alt="Business professionals meeting at Keylink virtual office Bahrain"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Trusted by 1,000+ Businesses</h3>
              <p className="text-primary-foreground/80">From startups to global enterprises across Bahrain</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="group relative"
            >
              <div className="relative h-full bg-background rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:border-accent/30">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
