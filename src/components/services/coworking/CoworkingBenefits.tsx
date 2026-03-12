import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, Coffee, X, Sparkles } from "lucide-react";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";

const benefits = [
  {
    icon: Zap,
    title: "Flexible Credit System",
    description: "Buy credits and use them whenever you need. No expiry, maximum flexibility for your coworking membership.",
    size: "small",
  },
  {
    icon: Users,
    title: "Instant Access",
    description: "Sign up today and start working tomorrow. Quick onboarding, no paperwork required.",
    size: "small",
  },
  {
    title: "Networking That Ignites Opportunities",
    description: "Connect with entrepreneurs, freelancers, and business leaders in Bahrain who can help grow your network.",
    image: hotDeskImg,
    size: "large",
  },
  {
    icon: Coffee,
    title: "Free Coffee & High-Speed WiFi",
    description: "Fuel your productivity with unlimited premium coffee and gigabit internet in our coworking space.",
    size: "small",
  },
  {
    icon: X,
    title: "Cancel Anytime",
    description: "No long-term commitments. Upgrade, downgrade, or cancel your membership with 30 days notice.",
    size: "small",
  },
  {
    title: "The Right Energy & Environment",
    description: "Designed spaces that boost creativity and productivity. Natural light, ergonomic furniture, and inspiring vibes.",
    image: loungeImg,
    size: "large",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export function CoworkingBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Dot Grid with Ellipse Fade - Softer */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />
      </div>
      {/* Gold accents - Softer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 40% 30% at 20% 30%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
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
          <span className="section-badge">Member Benefits</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Work Smarter, Not Harder
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our coworking membership in Bahrain removes friction so you can focus on what matters most
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                benefit.size === "large" ? "md:col-span-1" : ""
              } ${benefit.image ? "min-h-[300px]" : "bg-background border border-border p-8 hover:border-accent/30 hover:shadow-md"}`}
            >
              {benefit.image ? (
                <>
                  {/* Image Background */}
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-accent/20 backdrop-blur-sm p-1.5 inline-block rounded-lg mb-3">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon */}
                  {benefit.icon && (
                    <div className="relative w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-all duration-300">
                      <benefit.icon className="w-7 h-7 text-accent relative z-10 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
