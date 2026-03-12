import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building, FileCheck, Users2, Award, CheckCircle2, ExternalLink } from "lucide-react";

const credentials = [
  {
    icon: Building,
    title: "MOIC Registered",
    shortTitle: "MOIC",
    description: "Officially registered with the Ministry of Industry and Commerce",
    fullDescription: "Our MOIC registration ensures we operate with full government authorization, giving you peace of mind that all services are legally compliant.",
    color: "#3B82F6",
  },
  {
    icon: FileCheck,
    title: "LMRA Approved",
    shortTitle: "LMRA",
    description: "Authorized to handle labor and immigration services",
    fullDescription: "LMRA approval allows us to process work permits, visas, and all labor-related documentation on behalf of our clients.",
    color: "#10B981",
  },
  {
    icon: Users2,
    title: "Chamber Member",
    shortTitle: "BCCI",
    description: "Active member of the Bahrain Chamber of Commerce",
    fullDescription: "Our chamber membership connects us to Bahrain's business community and keeps us updated on the latest commercial developments.",
    color: "#8B5CF6",
  },
  {
    icon: Award,
    title: "Tamkeen Partner",
    shortTitle: "Tamkeen",
    description: "Official partner in supporting local business development",
    fullDescription: "As a Tamkeen partner, we help businesses access government support programs and funding opportunities for growth.",
    color: "#C7A763",
  },
];

const partners = [
  "Ministry of Industry & Commerce",
  "Labour Market Regulatory Authority",
  "Bahrain Chamber of Commerce",
  "Tamkeen",
  "Central Bank of Bahrain",
  "EDB Bahrain",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.6, type: "spring" as const },
  },
};

export function AboutCredentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-muted/30">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        
        {/* Radial accents */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(199, 167, 99, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(0, 44, 77, 0.06) 0%, transparent 40%)
            `
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
          <Badge className="section-badge">Credentials & Partnerships</Badge>
          <h2 className="mb-4">Officially Recognized & Trusted</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain all required licenses and certifications to serve you legally and professionally.
          </p>
        </motion.div>

        {/* Circular Credential Badges with Flip Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              variants={itemVariants}
              className="relative group"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className="relative w-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front - Circular Badge */}
                <div 
                  className="relative"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Animated ring */}
                    <motion.div
                      className="absolute w-32 h-32 rounded-full border-2"
                      style={{ borderColor: `${credential.color}40` }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Badge circle */}
                    <div 
                      className="w-28 h-28 rounded-full flex items-center justify-center relative z-10"
                      style={{ 
                        background: `linear-gradient(135deg, ${credential.color}20 0%, ${credential.color}05 100%)`,
                        border: `2px solid ${credential.color}30`
                      }}
                    >
                      <credential.icon className="w-12 h-12" style={{ color: credential.color }} />
                    </div>
                    
                    {/* Title below */}
                    <h4 className="mt-4 font-semibold text-primary text-center">{credential.title}</h4>
                    <p className="text-muted-foreground text-sm text-center mt-1">{credential.description}</p>
                    
                    {/* Verified checkmark */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center z-20"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Back - Full Description */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div 
                    className="w-full p-6 rounded-2xl text-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${credential.color}20 0%, ${credential.color}05 100%)`,
                      border: `2px solid ${credential.color}30`
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${credential.color}20` }}
                    >
                      <credential.icon className="w-6 h-6" style={{ color: credential.color }} />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{credential.shortTitle}</h4>
                    <p className="text-muted-foreground text-sm">{credential.fullDescription}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted Partnerships & Affiliations
          </p>
          
          {/* Static grid instead of scrolling ticker */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-accent/10 transition-all duration-300 h-full">
                  {/* Logo placeholder - grayscale to color on hover */}
                  <div 
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-accent/20"
                  >
                    <CheckCircle2 className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-primary font-medium text-sm text-center">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Learn more link */}
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View all certifications
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
