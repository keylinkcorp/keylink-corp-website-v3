import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Car, ExternalLink } from "lucide-react";
import sanabisTower from "@/assets/virtual-office/sanabis-tower-exterior.jpg";

const nearbyLandmarks = [
  { name: "Seef Mall", distance: "5 min drive" },
  { name: "City Centre Bahrain", distance: "7 min drive" },
  { name: "Bahrain Exhibition Centre", distance: "3 min walk" },
  { name: "Bahrain International Airport", distance: "20 min drive" },
];

export function VirtualOfficeLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#F8F8F8]">
      {/* Grid lines pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
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
          <span className="section-badge">Location</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Virtual Office Location in Sanabis, Bahrain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our premium virtual office address is situated in Sanabis Exhibition Tower, 
            offering a prestigious business location in Bahrain's commercial hub.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Building Exterior Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-border shadow-md h-[400px] group"
          >
            <img 
              src={sanabisTower} 
              alt="Sanabis Exhibition Tower - Virtual Office in Bahrain"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
            
            {/* View on Maps Button Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <a 
                href="https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-background/95 backdrop-blur-sm rounded-xl text-primary font-medium shadow-lg hover:bg-background transition-colors"
              >
                <MapPin className="w-5 h-5 text-accent" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Your Virtual Office Address</h3>
                  <p className="text-muted-foreground">
                    Sanabis Exhibition Tower<br />
                    Sanabis, Kingdom of Bahrain
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-medium text-primary mb-4">Nearby Landmarks</h4>
                <div className="grid grid-cols-2 gap-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{landmark.name}</span>
                      <span className="text-accent font-medium ml-auto">{landmark.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Getting Here */}
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Getting Here</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our virtual office in Sanabis is easily accessible by car with complimentary 
                    parking available for meeting room users. Located near Seef Mall and City Centre 
                    Bahrain, we're well-connected to major highways and just 20 minutes from Bahrain 
                    International Airport.
                  </p>
                </div>
              </div>
            </div>

            {/* Meeting Room Access */}
            <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Meeting Room Access</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    All virtual office clients can book our fully-equipped meeting rooms for client 
                    meetings. Rooms feature video conferencing, presentation equipment, and catering 
                    options. Book hourly or use your included meeting room credits.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
