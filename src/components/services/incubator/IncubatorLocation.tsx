import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function IncubatorLocation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Our Office</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Visit Us in <span className="text-accent">Manama, Bahrain</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerItem}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Map Placeholder */}
              <div className="md:col-span-2 bg-muted rounded-2xl overflow-hidden h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Sanabis Exhibition Tower</p>
                    <p className="text-muted-foreground mb-4">Manama, Kingdom of Bahrain</p>
                    <Button asChild variant="outline">
                      <a 
                        href="https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-1">Address</p>
                      <p className="font-medium text-sm">Sanabis Exhibition Tower</p>
                      <p className="text-sm text-primary-foreground/80">Manama, Bahrain</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-1">Phone</p>
                      <a href="tel:+97317000000" className="font-medium text-sm hover:text-accent transition-colors">
                        +973 1700 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-1">Hours</p>
                      <p className="font-medium text-sm">Sunday - Thursday</p>
                      <p className="text-sm text-primary-foreground/80">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
