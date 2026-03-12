import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Video, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import privateOfficeImg from "@/assets/coworking/private-office.jpg";
import meetingRoomImg from "@/assets/coworking/meeting-room.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";

interface Workspace {
  id: string;
  category: string;
  title: string;
  description: string;
  features?: string[];
  cta: string;
  icon: typeof Users;
  image: string;
  size: "featured" | "medium" | "small";
  linkTo?: string;
}

const workspaces: Workspace[] = [
  {
    id: "coworking",
    category: "FLEXIBLE WORKSPACES",
    title: "Coworking",
    description: "Work from our premium coworking space in Sanabis with a single membership. Perfect for freelancers, startups, and remote workers in Bahrain.",
    features: [
      "Daily, weekly or monthly plans",
      "WiFi, coffee, plugs & flexible seating",
      "Solo or team memberships"
    ],
    cta: "Explore memberships",
    icon: Users,
    image: hotDeskImg,
    size: "featured",
  },
  {
    id: "meeting-room",
    category: "ON-DEMAND",
    title: "Meeting Rooms",
    description: "Book private meeting rooms in Bahrain instantly for calls, workshops or team discussions.",
    cta: "Browse meeting rooms",
    icon: Video,
    image: meetingRoomImg,
    size: "medium",
  },
  {
    id: "private-office",
    category: "SERVICED OFFICES",
    title: "Private Offices",
    description: "Move your team into a ready-to-use, serviced private office in Bahrain.",
    cta: "Talk to advisor",
    icon: Building2,
    image: privateOfficeImg,
    size: "small",
  },
  {
    id: "virtual-office",
    category: "REMOTE SOLUTIONS",
    title: "Virtual Office",
    description: "Business address & mail handling for remote teams in Bahrain.",
    cta: "View packages",
    icon: Globe,
    image: loungeImg,
    size: "small",
    linkTo: "/services/virtual-office",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 } 
  },
};

export function WorkspaceTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredWorkspace = workspaces.find(w => w.size === "featured");
  const mediumWorkspace = workspaces.find(w => w.size === "medium");
  const smallWorkspaces = workspaces.filter(w => w.size === "small");

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFA]">
      {/* Radial Gradient Background - Softer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.04)_0,rgba(199,167,99,0)_50%)]"
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
          <span className="section-badge">Workspace Options</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            From Hot Desks to Private Offices
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A flexible workspace solution for every need in Bahrain
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {/* Featured Card - Spans 2 rows on desktop */}
          {featuredWorkspace && (
            <motion.div
              variants={staggerItem}
              className="group cursor-pointer md:row-span-2"
            >
              <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                {/* Image */}
                <div className="relative h-[55%] overflow-hidden">
                  <img
                    src={featuredWorkspace.image}
                    alt={`${featuredWorkspace.title} - Coworking space in Bahrain`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-md">
                    <featuredWorkspace.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {featuredWorkspace.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
                    {featuredWorkspace.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {featuredWorkspace.description}
                  </p>
                  
                  {/* Features */}
                  {featuredWorkspace.features && (
                    <ul className="space-y-2 mb-6">
                      {featuredWorkspace.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* CTA Button */}
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {featuredWorkspace.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Medium Card - Meeting Rooms */}
          {mediumWorkspace && (
            <motion.div
              variants={staggerItem}
              className="group cursor-pointer"
            >
              <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                {/* Image */}
                <div className="relative h-[50%] overflow-hidden">
                  <img
                    src={mediumWorkspace.image}
                    alt={`${mediumWorkspace.title} - Meeting room hire in Bahrain`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md">
                    <mediumWorkspace.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {mediumWorkspace.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mt-1 mb-2 group-hover:text-accent transition-colors">
                    {mediumWorkspace.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {mediumWorkspace.description}
                  </p>
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {mediumWorkspace.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Small Cards Row */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >
            {smallWorkspaces.map((workspace) => {
              const Icon = workspace.icon;
              
              const cardContent = (
                <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                  {/* Image */}
                  <div className="relative h-[45%] overflow-hidden">
                    <img
                      src={workspace.image}
                      alt={`${workspace.title} - ${workspace.category.toLowerCase()} in Bahrain`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    {/* Category */}
                    <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                      {workspace.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-primary mt-1 mb-2 group-hover:text-accent transition-colors">
                      {workspace.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {workspace.description}
                    </p>
                    
                    {/* CTA Button */}
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {workspace.cta}
                    </span>
                  </div>
                </div>
              );
              
              return workspace.linkTo ? (
                <Link
                  key={workspace.id}
                  to={workspace.linkTo}
                  className="group cursor-pointer block"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={workspace.id}
                  className="group cursor-pointer"
                >
                  {cardContent}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
