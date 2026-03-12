import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Shield, Mail, Phone, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Advantage {
  icon: typeof MapPin;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}
const advantages: Advantage[] = [
  {
    icon: Shield,
    title: "CR-Compliant Address",
    description: "Our Sanabis Exhibition Tower address is fully approved for Commercial Registration with MOIC. Establish your legal business presence in Bahrain instantly.",
  },
  {
    icon: MapPin,
    title: "Prime Sanabis Location",
    description: "Prestigious address near Seef Mall, City Centre Bahrain, and Bahrain Exhibition Centre. Impress clients with a recognized business district address.",
  },
  {
    icon: Mail,
    title: "Professional Mail Services",
    description: "Never miss important documents. We receive, store, scan, and forward your business mail. Get instant email notifications when mail arrives.",
  },
  {
    icon: Phone,
    title: "Live Call Answering",
    description: "Professional receptionists answer calls in your company name. No more missed opportunities or unprofessional voicemail greetings.",
  },
  {
    icon: Users,
    title: "On-Demand Meeting Rooms",
    description: "Book fully-equipped meeting rooms when you need to meet clients in person. Video conferencing, presentation equipment, and catering available.",
  },
  {
    icon: TrendingUp,
    title: "Flexible & Scalable",
    description: "Start with a basic address package and add services as you grow. Upgrade to coworking or private office anytime. No long-term contracts.",
    linkText: "Explore Coworking",
    linkHref: "/services/coworking-space",
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

export function VirtualOfficeWhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Ellipse Mask Dot Grid Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 25%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 25%, transparent 100%)',
          }}
        />
      </div>
      {/* Gold accent */}
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
            The Keylink Virtual Office Advantage
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 10 years of experience providing professional virtual office solutions in Bahrain
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
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {advantage.description}
                </p>
                
                {/* Internal Link */}
                {advantage.linkHref && (
                  <Link 
                    to={advantage.linkHref} 
                    className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline"
                  >
                    {advantage.linkText}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}

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
