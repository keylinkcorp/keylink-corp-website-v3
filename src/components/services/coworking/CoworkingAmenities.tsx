import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wifi,
  Coffee,
  Users,
  Printer,
  Mail,
  Calendar,
  Clock,
  Phone,
  Lock,
  PhoneCall,
  UtensilsCrossed,
  Car,
} from "lucide-react";

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Gigabit fiber internet for seamless connectivity" },
  { icon: Coffee, title: "Free Coffee & Tea", description: "Premium beverages available all day" },
  { icon: Users, title: "Meeting Rooms", description: "Book professional spaces for client meetings" },
  { icon: Printer, title: "Printing Services", description: "High-quality printing, scanning & copying" },
  { icon: Mail, title: "Mail Handling", description: "Professional mail and package reception" },
  { icon: Calendar, title: "Networking Events", description: "Regular community events and workshops" },
  { icon: Clock, title: "24/7 Access", description: "Work on your schedule with round-the-clock access" },
  { icon: Phone, title: "Reception Services", description: "Professional front desk support" },
  { icon: Lock, title: "Lockable Storage", description: "Secure personal storage lockers" },
  { icon: PhoneCall, title: "Phone Booths", description: "Private spaces for calls and video meetings" },
  { icon: UtensilsCrossed, title: "Kitchen Facilities", description: "Fully equipped kitchen and dining area" },
  { icon: Car, title: "Parking", description: "Convenient parking spaces available" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 } 
  },
};

export function CoworkingAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Enhanced Background - Softer */}
      <div className="absolute inset-0">
        {/* Warm gradient from top */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--gold) / 0.06) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle secondary gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/15 via-transparent to-transparent" />
        {/* Dot pattern with fade mask - Reduced opacity */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">All Included</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Premium Coworking Amenities & Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to work productively in our Bahrain coworking space
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-background rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
              >
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent relative z-10 transition-transform group-hover:scale-110 duration-300" />
                </div>

                <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
