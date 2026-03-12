import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Clock,
  Building2,
  Wallet,
  TrendingUp,
  Quote,
  CheckCircle2
} from "lucide-react";
import successImage from "@/assets/wll-success-partners.jpg";

const caseStudy = {
  challenge: "Two partners—one British, one Bahraini—wanted to establish a trading company for construction materials import. They needed a structure that allowed equal ownership while maintaining limited liability and access to trade finance.",
  solution: "WLL formation with 50/50 ownership split, physical office registration for visa eligibility, and bank account setup with trade finance facility introductions.",
  result: "Fully operational in 6 days with a BHD 50,000 credit line approved within 30 days of registration. First import shipment cleared 45 days after initial inquiry.",
  stats: [
    { label: "Setup Time", value: "6 Days" },
    { label: "Entity Type", value: "WLL" },
    { label: "Investment", value: "BHD 22,500" },
    { label: "Credit Facility", value: "BHD 50,000" },
  ],
  quote: "We compared agents across the GCC and Keylink was the only team that understood our joint venture requirements from day one. They handled the shareholder agreement nuances, got us the bank introductions we needed, and delivered faster than promised. Our WLL gave us the credibility to secure trade finance that would have been impossible with a simpler structure.",
  author: "UK-Bahrain Trading Partnership",
  company: "Construction Materials Import WLL"
};

export function WLLSuccessSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/40 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Success Story
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            From Partnership Agreement to <span className="text-gold">Trading in 6 Days</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how a UK-Bahraini joint venture launched their import business with Keylink
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: Content */}
              <div className="p-8 lg:p-10">
                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">→</span>
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>

                {/* Result */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span>
                    The Result
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.result}</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="font-bold text-primary">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Quote + Image */}
              <div className="bg-primary p-8 lg:p-10 flex flex-col justify-between relative">
                {/* Decorative quote marks */}
                <div className="absolute top-4 left-6 text-gold/20 text-8xl font-serif leading-none select-none">"</div>
                <div className="absolute bottom-4 right-6 text-gold/20 text-8xl font-serif leading-none select-none rotate-180">"</div>
                
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  <blockquote className="text-white/95 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
                    {caseStudy.quote}
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <img 
                    src={successImage} 
                    alt="WLL success story partners" 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-gold shadow-lg"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm md:text-base">{caseStudy.author}</p>
                    <p className="text-gold/80 text-xs md:text-sm">{caseStudy.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
