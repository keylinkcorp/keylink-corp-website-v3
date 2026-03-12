import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Crown, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  MessageCircle
} from "lucide-react";
import goldenVisaHeroImage from "@/assets/golden-visa-hero.jpg";

const eligibilityCategories = [
  {
    icon: Building2,
    title: "Investors",
    requirement: "BHD 100,000+ in Bahrain property or assets"
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    requirement: "Business employing 10+ Bahraini nationals"
  },
  {
    icon: GraduationCap,
    title: "Executives",
    requirement: "Salary of BHD 2,000+/month"
  },
  {
    icon: Users,
    title: "Retirees",
    requirement: "Monthly pension of BHD 4,000+ or equivalent"
  }
];

const benefits = [
  "10-year renewable residency",
  "No sponsor required",
  "Work for any employer",
  "Include spouse and children",
  "Multiple entry privileges",
  "Path to citizenship"
];

export function GoldenVisaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Gold Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, hsl(var(--gold)) 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, hsl(var(--gold)) 0%, transparent 30%)
          `
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium">
                <Crown className="w-4 h-4" />
                Premium Residency
              </span>
            </motion.div>

            <motion.h2 
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Bahrain <span className="text-accent">Golden Visa</span>: 10-Year Residency for Investors & Professionals
            </motion.h2>

            <motion.p 
              variants={staggerItem}
              className="text-lg text-white/80 mb-6 leading-relaxed"
            >
              The Golden Visa program represents Bahrain's commitment to attracting talent and 
              investment. Unlike standard work visas that require employer sponsorship and renewal 
              every two years, the Golden Visa offers decade-long stability with full independence.
            </motion.p>

            <motion.p 
              variants={staggerItem}
              className="text-lg text-white/70 mb-8 leading-relaxed"
            >
              You choose where you work—or whether you work at all. Your family travels with you 
              under the same visa. And perhaps most importantly, you're building toward potential 
              citizenship eligibility.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="grid sm:grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button asChild className="btn-gold">
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Check Eligibility
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+97317000000">
                  Speak to Expert
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image + Eligibility Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Hero Image */}
            <motion.div 
              variants={staggerItem}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={goldenVisaHeroImage} 
                alt="Successful professional businessman overlooking Bahrain skyline - Golden Visa opportunity" 
                className="w-full h-auto object-cover aspect-video"
              />
            </motion.div>

            <motion.h3 
              variants={staggerItem}
              className="text-xl font-semibold text-white"
            >
              Who Qualifies?
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {eligibilityCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{category.title}</h4>
                      <p className="text-xs text-white/70">{category.requirement}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div 
              variants={staggerItem}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-2xl font-bold text-white">10</span>
                </div>
                <span className="text-xs text-white/60">Year Validity</span>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-2xl font-bold text-white">∞</span>
                </div>
                <span className="text-xs text-white/60">Family Included</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <span className="text-xs text-white/60">Success Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
