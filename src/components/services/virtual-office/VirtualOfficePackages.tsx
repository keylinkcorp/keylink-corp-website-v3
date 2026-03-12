import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Building2, Users, Sparkles } from "lucide-react";
import essentialImg from "@/assets/virtual-office/essential-address.jpg";
import businessPlusImg from "@/assets/virtual-office/business-plus.jpg";
import executiveImg from "@/assets/virtual-office/executive-suite.jpg";
import meetingImg from "@/assets/virtual-office/meeting-add-on.jpg";

interface Package {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  icon: typeof MapPin;
  image: string;
  size: "featured" | "medium" | "small";
  featured?: boolean;
}

const packages: Package[] = [
  {
    id: "business-plus",
    category: "MOST POPULAR",
    title: "Business Plus",
    description: "Complete virtual office solution with dedicated phone line, live call answering, and meeting room access. Perfect for growing businesses in Bahrain.",
    features: [
      "Everything in Essential",
      "Dedicated business phone line",
      "Live call answering (50/month)",
      "Mail scanning & forwarding",
      "4 hours meeting room/month",
    ],
    cta: "Get Started",
    icon: Phone,
    image: businessPlusImg,
    size: "featured",
    featured: true,
  },
  {
    id: "executive",
    category: "PREMIUM",
    title: "Executive Suite",
    description: "Premium business presence with unlimited call answering and dedicated receptionist services.",
    cta: "Talk to Advisor",
    icon: Building2,
    image: executiveImg,
    size: "medium",
    features: [
      "Everything in Business Plus",
      "Unlimited call answering",
      "Priority mail handling",
      "10 hours meeting room/month",
      "Dedicated receptionist",
    ],
  },
  {
    id: "essential",
    category: "STARTER",
    title: "Essential Address",
    description: "Professional business address for CR registration in Bahrain.",
    cta: "View Package",
    icon: MapPin,
    image: essentialImg,
    size: "small",
    features: ["Sanabis business address", "CR registration use", "Mail handling & storage", "Building directory listing"],
  },
  {
    id: "meeting-room",
    category: "ADD-ON",
    title: "Meeting Room",
    description: "On-demand meeting space with video conferencing setup.",
    cta: "Book Now",
    icon: Users,
    image: meetingImg,
    size: "small",
    features: ["Hourly meeting room booking", "Video conferencing setup", "Catering options available"],
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

export function VirtualOfficePackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPackage = packages.find(p => p.size === "featured");
  const mediumPackage = packages.find(p => p.size === "medium");
  const smallPackages = packages.filter(p => p.size === "small");

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFA]">
      {/* Radial Gradient Background */}
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
          <span className="section-badge">Virtual Office Packages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Choose Your Virtual Office in Bahrain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed to meet every business need, from simple address services 
            to complete virtual office solutions.
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
          {featuredPackage && (
            <motion.div
              variants={staggerItem}
              className="group cursor-pointer md:row-span-2"
            >
              <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                {/* Image */}
                <div className="relative h-[55%] overflow-hidden">
                  <img
                    src={featuredPackage.image}
                    alt={`${featuredPackage.title} - Virtual office package in Bahrain`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-md">
                    <featuredPackage.icon className="w-6 h-6 text-accent-foreground" />
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {featuredPackage.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
                    {featuredPackage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {featuredPackage.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {featuredPackage.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {featuredPackage.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Medium Card - Executive Suite */}
          {mediumPackage && (
            <motion.div
              variants={staggerItem}
              className="group cursor-pointer"
            >
              <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                {/* Image */}
                <div className="relative h-[50%] overflow-hidden">
                  <img
                    src={mediumPackage.image}
                    alt={`${mediumPackage.title} - Premium virtual office in Bahrain`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md">
                    <mediumPackage.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {mediumPackage.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mt-1 mb-2 group-hover:text-accent transition-colors">
                    {mediumPackage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {mediumPackage.description}
                  </p>
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {mediumPackage.cta}
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
            {smallPackages.map((pkg) => {
              const Icon = pkg.icon;
              
              return (
                <div
                  key={pkg.id}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                    {/* Image */}
                    <div className="relative h-[45%] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={`${pkg.title} - ${pkg.category.toLowerCase()} virtual office in Bahrain`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
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
                        {pkg.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-primary mt-1 mb-2 group-hover:text-accent transition-colors">
                        {pkg.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {pkg.description}
                      </p>
                      
                      {/* CTA Button */}
                      <a
                        href="#pricing"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {pkg.cta}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
