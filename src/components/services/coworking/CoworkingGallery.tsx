import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/coworking/hero-coworking.jpg";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import privateOfficeImg from "@/assets/coworking/private-office.jpg";
import meetingRoomImg from "@/assets/coworking/meeting-room.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";
import receptionImg from "@/assets/coworking/reception.jpg";

const filters = [
  { id: "all", label: "All" },
  { id: "workspaces", label: "Workspaces" },
  { id: "meeting", label: "Meeting Rooms" },
  { id: "facilities", label: "Facilities" },
];

const galleryImages = [
  { id: 1, src: heroImg, alt: "Open coworking area with natural light in Bahrain", category: "workspaces", title: "Open Workspace" },
  { id: 2, src: meetingRoomImg, alt: "Executive meeting room with presentation equipment", category: "meeting", title: "Executive Boardroom" },
  { id: 3, src: hotDeskImg, alt: "Hot desk area for flexible working in Sanabis", category: "workspaces", title: "Hot Desk Area" },
  { id: 4, src: privateOfficeImg, alt: "Private office suite for teams in Bahrain", category: "workspaces", title: "Private Office" },
  { id: 5, src: loungeImg, alt: "Member lounge and kitchen area", category: "facilities", title: "Member Lounge" },
  { id: 6, src: receptionImg, alt: "Professional reception area at Keylink coworking", category: "facilities", title: "Reception" },
];

export function CoworkingGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle radial gradient - Softer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(199,167,99,0.03)_0,rgba(199,167,99,0)_60%)]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Explore Our Coworking Spaces in Bahrain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our premium coworking facilities in Sanabis
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? "bg-accent text-accent-foreground shadow-md shadow-accent/15"
                  : "bg-background border border-border text-muted-foreground hover:text-primary hover:border-accent/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm hover:shadow-md transition-shadow ${
                  index === 0 ? 'md:row-span-2 md:aspect-auto md:h-full' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title Reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 inline-block">
                    <h3 className="font-semibold text-primary text-lg">{image.title}</h3>
                    <p className="text-muted-foreground text-sm">{image.alt}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Virtual Tour CTA Card */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 border-dashed border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center group hover:border-accent hover:bg-accent/15 transition-all duration-300"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Take a Virtual Tour</h3>
              <p className="text-sm text-muted-foreground">Explore our coworking spaces from anywhere</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
