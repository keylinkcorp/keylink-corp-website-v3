import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Quote, ChevronDown, ChevronUp } from "lucide-react";

// Wave pattern SVG for card backgrounds
const wavePattern = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="none">
    <path d="M0,40 Q50,30 100,40 T200,40" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,60 Q50,50 100,60 T200,60" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,80 Q50,70 100,80 T200,80" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,100 Q50,90 100,100 T200,100" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,120 Q50,110 100,120 T200,120" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,140 Q50,130 100,140 T200,140" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,160 Q50,150 100,160 T200,160" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
    <path d="M0,180 Q50,170 100,180 T200,180" stroke="#e5e5e5" stroke-width="0.8" fill="none" />
  </svg>
`);

// Real team data from Key Link Bahrain
const teamMembers = [
  {
    name: "Hussain Derazi",
    role: "Managing Director",
    image: "https://keylinkbh.com/wp-content/uploads/2024/07/Hussain-Derazi-Profile-scaled.jpg",
    bio: "Strategic business leader with 10+ years in consulting",
    featured: true,
    quote: "Every business deserves a chance to thrive. We make that happen.",
    stats: { clients: "500+", experience: "10+ Years", team: "10+" },
  },
  {
    name: "Mishal Atif",
    role: "HR & Accounting Manager",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Mishal-Profile-scaled.webp",
    bio: "HR strategies & financial operations expert",
  },
  {
    name: "Rayhan Chowdury",
    role: "Digital Marketing & Design",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Rayhan-Chowdury-Profile-scaled.webp",
    bio: "UI/UX, SEO & web development specialist",
  },
  {
    name: "Suhaira Sharif",
    role: "Customer Services",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Suhaira-scaled.jpg",
    bio: "LMRA registration & work permit guidance",
  },
  {
    name: "Sadia Khan",
    role: "Customer Services",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Sadia-Profile-scaled.webp",
    bio: "LMRA work permit documentation expert",
  },
  {
    name: "Mohammed Noufal",
    role: "Customer Services",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Noufal-Profile-scaled.webp",
    bio: "Sales & client relations specialist",
  },
  {
    name: "Maimoona Zahir",
    role: "Financial Consultant",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Maimuna-Profile-scaled.webp",
    bio: "Banking relations, KYC & AML compliance",
  },
  {
    name: "Muntaha Khan",
    role: "Business Development",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Montaha-Profile-scaled.webp",
    bio: "Company formation & MOIC compliance",
  },
  {
    name: "Mosammat Aisha",
    role: "Customer Services",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Aysha-Profile.jpg",
    bio: "LMRA verification & documentation",
  },
  {
    name: "Balach Abdul Qadir",
    role: "VAT Compliance Manager",
    image: "https://keylinkbh.com/wp-content/uploads/2025/09/Bilach-Profile-scaled.jpg",
    bio: "VAT compliance specialist, 150+ clients served",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? otherMembers : otherMembers.slice(0, 6);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Hex grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32v34.64L30 60 0 51.96V17.32L30 0z' fill='none' stroke='%23002C4D' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Meet Our Team</Badge>
          <h2 className="mb-4">The People Behind Your Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings decades of combined experience in 
            Bahrain business services.
          </p>
        </motion.div>

        {/* Featured Founder Card - Horizontal Layout */}
        {featuredMember && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-primary rounded-3xl overflow-hidden group">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--accent) / 0.1) 0%, transparent 50%, hsl(var(--accent) / 0.05) 100%)",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 pattern-dots opacity-5" />
              
              {/* Gold glow on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px hsl(var(--accent) / 0.15), 0 0 40px hsl(var(--accent) / 0.2)"
                }}
              />
              
              <div className="grid md:grid-cols-[350px_1fr] relative z-10">
                {/* Photo with mask */}
                <div className="relative h-80 md:h-auto">
                  <img
                    src={featuredMember.image}
                    alt={featuredMember.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary md:bg-gradient-to-r" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent md:hidden" />
                  
                  {/* Ring decoration */}
                  <motion.div
                    className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent/20 text-accent border-accent/30">
                    Managing Director
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {featuredMember.name}
                  </h3>
                  <p className="text-white/70 mb-6">{featuredMember.bio}</p>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(featuredMember.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 rounded-xl">
                        <p className="text-2xl font-bold text-accent">{value}</p>
                        <p className="text-xs text-white/50 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <Quote className="absolute top-3 left-3 w-5 h-5 text-accent/40" />
                    <p className="text-white/90 italic pl-6">
                      "{featuredMember.quote}"
                    </p>
                  </div>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors w-fit"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Modern Clean Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Image Container with Wave Pattern Background */}
              <div 
                className="relative aspect-[4/5] overflow-hidden"
                style={{
                  backgroundColor: 'hsl(var(--muted))',
                  backgroundImage: `url("data:image/svg+xml,${wavePattern}")`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle bottom gradient for image blending */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              {/* Content Below Image */}
              <div className="p-5">
                <h4 className="font-bold text-foreground text-lg mb-1">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}

          {/* View All Card */}
          {!showAll && otherMembers.length > 6 && (
            <motion.div
              variants={itemVariants}
            >
              <button
                onClick={() => setShowAll(true)}
                className="w-full h-full min-h-[380px] rounded-2xl bg-muted/50 border-2 border-dashed border-accent/30 flex flex-col items-center justify-center gap-4 hover:bg-accent/5 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-accent" />
                </div>
                <span className="text-foreground font-semibold text-lg">View All Team</span>
                <span className="text-muted-foreground text-sm">+{otherMembers.length - 6} more members</span>
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Collapse button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full text-foreground font-medium hover:bg-accent/10 transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
