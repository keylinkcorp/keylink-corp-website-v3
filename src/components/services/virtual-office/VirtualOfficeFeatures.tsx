import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Mail,
  Send,
  Package,
  Phone,
  PhoneIncoming,
  PhoneForwarded,
  Voicemail,
  Users,
  UserCheck,
  ListChecks,
  Archive,
} from "lucide-react";
import mailServiceImage from "@/assets/virtual-office/mail-service-detail.jpg";

const features = [
  {
    icon: MapPin,
    title: "Business Address",
    description: "Prestigious Sanabis address for CR registration",
  },
  {
    icon: Mail,
    title: "Mail Reception",
    description: "Receive all mail and packages on your behalf",
  },
  {
    icon: Send,
    title: "Mail Forwarding",
    description: "Forward mail to any address worldwide",
  },
  {
    icon: Package,
    title: "Package Handling",
    description: "Secure handling of all business packages",
  },
  { icon: Phone, title: "Business Phone Line", description: "Dedicated Bahrain phone number" },
  {
    icon: PhoneIncoming,
    title: "Call Answering",
    description: "Professional live call reception",
  },
  {
    icon: PhoneForwarded,
    title: "Call Forwarding",
    description: "Route calls to your mobile or office",
  },
  {
    icon: Voicemail,
    title: "Voicemail to Email",
    description: "Receive voicemails in your inbox",
  },
  {
    icon: Users,
    title: "Meeting Room Access",
    description: "Book fully-equipped meeting rooms",
  },
  {
    icon: UserCheck,
    title: "Receptionist Services",
    description: "Professional greeting for your clients",
  },
  {
    icon: ListChecks,
    title: "Directory Listing",
    description: "Your company on building directory",
  },
  {
    icon: Archive,
    title: "Document Storage",
    description: "Secure storage for important documents",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function VirtualOfficeFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const uniqueFeatures = useMemo(() => {
    const map = new Map<string, (typeof features)[number]>();
    features.forEach((feature) => {
      if (!map.has(feature.title)) map.set(feature.title, feature);
    });
    return Array.from(map.values());
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Gold radial from top */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 40% at 50% 0%, hsl(var(--gold) / 0.06) 0%, transparent 50%)`,
        }}
      />
      
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
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
          <span className="section-badge">All-Inclusive Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            What's Included in Your Virtual Office
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business services to help you maintain a professional presence in Bahrain
          </p>
        </motion.div>

        {/* Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-14 max-w-6xl mx-auto group"
        >
          <img 
            src={mailServiceImage} 
            alt="Professional mail handling service at virtual office in Bahrain"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <div className="text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Everything You Need</h3>
              <p className="text-primary-foreground/80 max-w-md">Professional mail, phone, and reception services included with your virtual office</p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {uniqueFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group p-5 md:p-6 rounded-xl bg-background border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
