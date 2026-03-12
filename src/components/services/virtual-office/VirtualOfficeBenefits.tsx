import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PiggyBank, Zap, Award, Home, Users, TrendingUp } from "lucide-react";
import virtualMeetingImage from "@/assets/virtual-office/virtual-meeting.jpg";

const benefits = [
  {
    icon: PiggyBank,
    title: "Save up to 80%",
    description: "Compared to traditional office space, save thousands on rent, utilities, and maintenance costs.",
  },
  {
    icon: Zap,
    title: "Start in 24 Hours",
    description: "Get your professional business address and start using it for CR registration the same day.",
  },
  {
    icon: Award,
    title: "Professional Image",
    description: "Present a prestigious Sanabis business address to clients and partners from day one.",
  },
  {
    icon: Home,
    title: "Separate Addresses",
    description: "Keep your personal home address private with a dedicated business address.",
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description: "Access fully-equipped meeting rooms whenever you need to meet clients in person.",
  },
  {
    icon: TrendingUp,
    title: "Scale as You Grow",
    description: "Upgrade to coworking or private office anytime as your business expands.",
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export function VirtualOfficeBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Dot grid with fade */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)',
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
          <span className="section-badge">Key Benefits</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Why Choose a Virtual Office in Bahrain?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of establishing your business presence with our virtual office solutions
          </p>
        </motion.div>

        {/* Benefits Bento Grid with Image */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* First 4 benefit cards */}
          {benefits.slice(0, 4).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}

          {/* Lifestyle Image Card */}
          <motion.div
            variants={staggerItem}
            className="relative rounded-2xl overflow-hidden group lg:row-span-1"
          >
            <img 
              src={virtualMeetingImage} 
              alt="Remote entrepreneur using virtual office in Bahrain"
              className="w-full h-full min-h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-primary-foreground mb-1">Work From Anywhere</h3>
              <p className="text-primary-foreground/80 text-sm">Your professional Bahrain presence, wherever you are</p>
            </div>
          </motion.div>

          {/* Last 2 benefit cards */}
          {benefits.slice(4).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index + 4}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
