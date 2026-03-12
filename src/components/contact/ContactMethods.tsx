import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team for immediate assistance",
    action: "tel:+97317008888",
    actionLabel: "+973 1700 8888",
    buttonLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat for fast responses and document sharing",
    action: "https://wa.me/97317008888",
    actionLabel: "Chat on WhatsApp",
    buttonLabel: "Start Chat",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send detailed inquiries and receive comprehensive responses",
    action: "mailto:info@keylinkcorp.com",
    actionLabel: "info@keylinkcorp.com",
    buttonLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Schedule an in-person consultation at our office",
    action: "https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain",
    actionLabel: "Sanabis Exhibition Tower",
    buttonLabel: "Get Directions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ContactMethods() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-badge">Multiple Channels</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Choose Your Preferred <span className="text-accent">Contact Method</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're available through multiple channels to serve you better
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl border-2 border-border p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <method.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  {/* Action Label */}
                  <p className="text-accent font-semibold text-sm mb-4">
                    {method.actionLabel}
                  </p>
                  
                  {/* Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <a 
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.buttonLabel}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
