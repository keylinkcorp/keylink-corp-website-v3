import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import exteriorImage from "@/assets/about/about-office-exterior.jpg";
import interiorImage from "@/assets/about/about-office-interior.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Sanabis Exhibition Tower, Office 601\nManama, Kingdom of Bahrain",
    action: "Get Directions",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+973 1700 8888",
    action: "Call Now",
    href: "tel:+97317008888",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@keylinkcorp.com",
    action: "Send Email",
    href: "mailto:info@keylinkcorp.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun-Thu: 8:00 AM - 5:00 PM",
  },
];

const galleryImages = [
  { src: exteriorImage, alt: "Keylink Corp office building", label: "Building Exterior" },
  { src: interiorImage, alt: "Keylink Corp reception", label: "Reception Area" },
  { src: interiorImage, alt: "Meeting room", label: "Meeting Room" },
  { src: exteriorImage, alt: "Lobby", label: "Lobby" },
];

export function AboutOffice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState(0);

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-Width Hero Image with Overlay */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <img
          src={exteriorImage}
          alt="Keylink Corp headquarters"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Animated map pin */}
        <motion.div
          className="absolute left-1/4 top-1/3 hidden md:block"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div 
              className="absolute -inset-4 rounded-full animate-ping"
              style={{ backgroundColor: "rgba(199, 167, 99, 0.3)" }}
            />
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
          </div>
        </motion.div>
        
        {/* Contact Card Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-full max-w-sm"
        >
          <div className="glass-card-light p-6 md:p-8 shadow-2xl">
            <Badge className="section-badge mb-4">Visit Our Office</Badge>
            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="text-primary font-medium text-sm whitespace-pre-line">{info.value}</p>
                    {info.action && (
                      <a
                        href={info.href}
                        target={info.href?.startsWith("http") ? "_blank" : undefined}
                        rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-accent text-xs font-medium hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        {info.action}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-gold w-full mt-6" asChild>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Header text on left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 max-w-md"
        >
          <h2 className="text-white mb-4">Our Location</h2>
          <p className="text-white/80 text-lg">
            Located in the heart of Bahrain's business district, our modern offices 
            are equipped to serve all your business needs.
          </p>
          
          {/* Virtual tour button */}
          <button className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Play className="w-5 h-5 text-primary ml-0.5" />
            </div>
            Take a Virtual Tour
          </button>
        </motion.div>
      </div>

      {/* Office Gallery */}
      <div className="bg-muted/30 py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-primary">Office Gallery</h3>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevImage}
                  className="p-2 rounded-full bg-white shadow hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="p-2 rounded-full bg-white shadow hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
            
            {/* Horizontal scrollable gallery */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 relative rounded-xl overflow-hidden group ${
                    index === activeImage ? "ring-2 ring-accent" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-48 h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white text-sm font-medium">
                    {image.label}
                  </span>
                  
                  {/* Active indicator */}
                  {index === activeImage && (
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-accent" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
