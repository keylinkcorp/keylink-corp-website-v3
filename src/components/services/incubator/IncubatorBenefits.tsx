import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wallet, Users, Building2, TrendingUp, GraduationCap, Megaphone } from "lucide-react";

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

const benefits = [
  {
    icon: Wallet,
    title: "Non-Dilutive Funding",
    description: "Access grants up to BHD 10,000 through Tamkeen programs without giving up equity. Keep full ownership while accelerating growth."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "One-on-one guidance from founders who've built successful companies in the Gulf. Learn from their mistakes, not your own."
  },
  {
    icon: Building2,
    title: "Premium Workspace",
    description: "Hot desks, private offices, and meeting rooms in Bahrain's premier startup hubs. Work alongside ambitious founders."
  },
  {
    icon: TrendingUp,
    title: "Investor Network",
    description: "Direct introductions to angel investors, VCs, and family offices actively investing in GCC startups."
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Structured curriculum covering pitch development, financial modeling, legal compliance, and go-to-market strategy."
  },
  {
    icon: Megaphone,
    title: "Media Visibility",
    description: "Featured in demo days, press releases, and industry events. Build credibility with customers and partners."
  }
];

export function IncubatorBenefits() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Member Benefits</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              What You Get From Bahrain <span className="text-accent">Incubator Programs</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Beyond funding, incubator programs provide the ecosystem support that transforms promising ideas into successful businesses.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group bg-background border-2 border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
