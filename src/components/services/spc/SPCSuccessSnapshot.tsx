import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Target, 
  Lightbulb, 
  TrendingUp,
  Clock,
  User,
  Wallet,
  MapPin,
  Quote
} from "lucide-react";
import portraitImage from "@/assets/spc-success-portrait.jpg";

const caseStudy = {
  client: "UK-based Management Consultant",
  challenge: "Needed a simple, cost-effective business structure to serve GCC clients without the complexity of a partnership or high capital requirements.",
  solution: "SPC formation with virtual office address, investor visa processing, and corporate bank account setup.",
  result: "Fully operational in 10 days, secured first client within 2 weeks of registration."
};

const stats = [
  { icon: Clock, label: "Setup Time", value: "10 Days" },
  { icon: User, label: "Entity Type", value: "SPC" },
  { icon: Wallet, label: "Investment", value: "BHD 1,050" },
  { icon: MapPin, label: "Office", value: "Virtual" }
];

export function SPCSuccessSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Decorative blurs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold border border-gold/30 mb-4">
              <TrendingUp className="w-4 h-4" />
              Success Story
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            From Idea to <span className="text-gold">Operational in 10 Days</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-white/70 max-w-2xl mx-auto">
            See how a UK consultant launched their Bahrain business with a Single Person Company
          </motion.p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          <motion.div
            variants={staggerItem}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">The Challenge</h3>
            <p className="text-white/70 leading-relaxed">{caseStudy.challenge}</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Our Solution</h3>
            <p className="text-white/70 leading-relaxed">{caseStudy.solution}</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">The Result</h3>
            <p className="text-white/70 leading-relaxed">{caseStudy.result}</p>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Client Quote */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-6">
              <img 
                src={portraitImage}
                alt="Success story client"
                className="w-20 h-20 rounded-full object-cover border-2 border-gold hidden sm:block"
              />
              <div>
                <Quote className="w-8 h-8 text-gold/50 mb-3" />
                <p className="text-lg text-white/90 italic leading-relaxed mb-4">
                  "Keylink made what seemed like a daunting process incredibly simple. From my first inquiry 
                  to having a fully registered SPC with a bank account, it was just 10 days. The team handled 
                  everything remotely—I didn't even need to fly to Bahrain. Now I'm serving clients across 
                  the GCC from my Bahrain base."
                </p>
                <div>
                  <p className="font-bold text-white">{caseStudy.client}</p>
                  <p className="text-sm text-gold">Management Consulting SPC</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
