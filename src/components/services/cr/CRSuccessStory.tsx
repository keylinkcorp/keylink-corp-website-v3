import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Quote,
  CheckCircle2,
  Clock,
  Users,
  Building2,
  Sparkles
} from "lucide-react";
import crSuccessImage from "@/assets/cr-success-david.jpg";

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }
};

export function CRSuccessStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-accent text-sm font-semibold border border-white/20 mb-4">
              <Sparkles className="w-4 h-4" />
              Client Success Story
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            From UK Startup to Bahrain Operations in{" "}
            <span className="text-accent">14 Days</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge - Enhanced with gradient */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/25 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-red-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-white/85 text-lg leading-relaxed">
                FinFlow, a UK-based fintech startup, wanted to establish a Bahrain presence 
                to access GCC markets. They faced regulatory complexity with CBB requirements 
                and had no local knowledge of the formation process.
              </p>
            </motion.div>

            {/* Solution - Enhanced with gradient */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/25 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-white/85 text-lg leading-relaxed">
                Keylink provided end-to-end support: entity type consultation, MOIC registration, 
                CBB regulatory guidance, bank account setup, and work visa processing for their 
                founding team—all managed remotely.
              </p>
            </motion.div>

            {/* Result - Enhanced with gradient */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/25 hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Result</h3>
              <p className="text-white/85 text-lg leading-relaxed">
                FinFlow became fully operational in Bahrain within 14 days. They now employ 
                12 local staff, have processed over BHD 5 million in transactions, and use 
                Bahrain as their GCC regional hub.
              </p>
            </motion.div>
          </div>

          {/* Stats Row - Enhanced with larger numbers and glassmorphism */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-1">14</div>
              <div className="text-sm text-white/70">Days to Operational</div>
            </div>
            <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-1">WLL</div>
              <div className="text-sm text-white/70">Entity Formed</div>
            </div>
            <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-1">12</div>
              <div className="text-sm text-white/70">Employees Hired</div>
            </div>
            <div className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/70">Remote Setup</div>
            </div>
          </motion.div>

          {/* Client Quote with Portrait - Enhanced */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-white/30"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Portrait - Enhanced */}
              <motion.div
                variants={imageReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-4 border-accent/50 shadow-sm">
                    <img
                      src={crSuccessImage}
                      alt="David Kumar, CEO of FinFlow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Accent Corner */}
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-sm">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>
              
              {/* Quote Content - Enhanced */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-12 h-12 text-accent/40 mb-6 hidden md:block" />
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                  "Keylink transformed what seemed like a daunting regulatory maze into a straightforward 
                  process. Their expertise in both MOIC and CBB requirements was invaluable. We couldn't 
                  have launched our Bahrain operations so quickly without them."
                </blockquote>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div>
                    <div className="font-bold text-xl">David Kumar</div>
                    <div className="text-white/70">Co-Founder & CEO, FinFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
