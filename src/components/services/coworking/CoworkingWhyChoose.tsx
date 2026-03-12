import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Briefcase, Network, TrendingUp, CalendarCheck } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Prime Sanabis Location",
    description: "Strategically located in Sanabis Exhibition Tower with easy access to Seef Mall, City Centre Bahrain, and major business hubs. Just 20 minutes from Bahrain International Airport—ideal for meeting international clients.",
  },
  {
    icon: Users,
    title: "Thriving Bahrain Business Community",
    description: "Join a diverse community of over 500 professionals, entrepreneurs, freelancers, and established businesses. Our coworking space in Bahrain connects you with potential partners, clients, and collaborators from across the GCC.",
  },
  {
    icon: Briefcase,
    title: "Professional Business Amenities",
    description: "From high-speed fiber internet to fully-equipped meeting rooms for client presentations, every amenity you need to impress clients and work productively is included in your coworking membership.",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    description: "Regular community events, workshops, and social gatherings help you connect with potential partners, clients, and collaborators in Bahrain's growing business ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Workspace Options",
    description: "Start with a hot desk and grow into a private office as your team expands. Our flexible workspace solutions in Bahrain adapt to your changing business needs.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Memberships",
    description: "No long-term contracts required. Choose daily, weekly, or monthly plans that match your work style and budget. Cancel anytime with just 30 days notice.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6 } 
  },
};

export function CoworkingWhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Ellipse Mask Dot Grid Pattern - Softer */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 25%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 25%, transparent 100%)',
          }}
        />
      </div>
      {/* Gold accent - Softer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 50% 40% at 70% 30%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
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
          <span className="section-badge">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            The Keylink Advantage
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 10 years of experience providing premium coworking spaces in Bahrain
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-transparent" />
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent flex items-center justify-center group-hover:from-accent/30 group-hover:via-accent/15 transition-all duration-300 rotate-3 group-hover:rotate-0">
                    <Icon className="w-8 h-8 text-accent transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent/30 group-hover:bg-accent/50 transition-colors group-hover:scale-125 duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
