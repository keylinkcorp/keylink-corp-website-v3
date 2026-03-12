import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ContactLocation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const googleMapsUrl = "https://www.google.com/maps/place/Sanabis+Exhibition+Tower/@26.2161,50.5458,17z";
  const googleMapsDirections = "https://www.google.com/maps/dir//Sanabis+Exhibition+Tower,+Bahrain";

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-badge">Visit Our Office</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="text-accent">Location</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in the heart of Bahrain's business district
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Info Card */}
            <div className="relative bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 pattern-grid-lines opacity-30" />
              
              {/* Floating Orb */}
              <div className="absolute -top-20 -right-20 w-64 h-64 floating-orb floating-orb-gold opacity-20 animate-float-slow" />
              
              <div className="relative z-10">
                {/* Animated Pin Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">Keylink Corp Head Office</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-accent font-semibold mb-1">Building</p>
                    <p className="text-primary-foreground/90">Sanabis Exhibition Tower</p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold mb-1">Floor & Office</p>
                    <p className="text-primary-foreground/90">6th Floor, Office 601</p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold mb-1">Area</p>
                    <p className="text-primary-foreground/90">Sanabis, Manama</p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold mb-1">Country</p>
                    <p className="text-primary-foreground/90">Kingdom of Bahrain</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-primary-foreground/70 mb-4">
                    <strong className="text-accent">Landmark:</strong> Near Exhibition Road, 
                    opposite Bahrain International Exhibition Centre
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-primary"
                    >
                      <a href={googleMapsDirections} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] lg:h-auto min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8907051960146!2d50.54580!3d26.21610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanabis%20Exhibition%20Tower!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Keylink Corp Office Location"
              />
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-accent font-bold text-lg mb-1">Free Parking</p>
              <p className="text-muted-foreground text-sm">Available in building basement</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-accent font-bold text-lg mb-1">Wheelchair Accessible</p>
              <p className="text-muted-foreground text-sm">Elevator access to all floors</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-accent font-bold text-lg mb-1">Walk-ins Welcome</p>
              <p className="text-muted-foreground text-sm">Appointments recommended</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
