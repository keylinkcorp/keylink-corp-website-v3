import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Wallet, 
  GraduationCap, 
  Rocket, 
  Globe, 
  Building2, 
  Award,
  ArrowRight,
  Check,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const supportPrograms = [
  {
    icon: Wallet,
    name: "Wage Subsidy Program",
    provider: "Tamkeen",
    description: "Up to 50% salary support for Bahraini employees for 3 years. Reduce labor costs significantly.",
    benefits: [
      "50% wage support for new hires",
      "Up to 3 years duration",
      "All sectors eligible",
      "Easy online application"
    ],
    eligibility: "Registered Bahrain company with Bahraini staff",
    link: "https://www.tamkeen.bh",
    highlight: true,
  },
  {
    icon: GraduationCap,
    name: "Training Support",
    provider: "Tamkeen",
    description: "Up to 80% coverage on employee training and professional development programs.",
    benefits: [
      "80% training cost coverage",
      "Local & international courses",
      "Professional certifications",
      "Leadership programs"
    ],
    eligibility: "Bahraini employees in registered companies",
    link: "https://www.tamkeen.bh",
    highlight: false,
  },
  {
    icon: Rocket,
    name: "Startup Bahrain",
    provider: "EDB Bahrain",
    description: "Comprehensive startup support including incubation, mentorship, and funding connections.",
    benefits: [
      "Incubation programs",
      "Mentor network access",
      "Investor introductions",
      "Co-working spaces"
    ],
    eligibility: "Tech startups & innovative businesses",
    link: "https://www.bahrainedb.com",
    highlight: false,
  },
  {
    icon: Globe,
    name: "Export Bahrain",
    provider: "EDB Bahrain",
    description: "Support for expanding into international markets including GCC and beyond.",
    benefits: [
      "Market access support",
      "Trade show participation",
      "Export documentation",
      "Market research"
    ],
    eligibility: "Export-ready Bahrain companies",
    link: "https://www.bahrainedb.com",
    highlight: false,
  },
  {
    icon: Building2,
    name: "SME Development Fund",
    provider: "Tamkeen",
    description: "Financial support and business development services for small and medium enterprises.",
    benefits: [
      "Business expansion loans",
      "Equipment financing",
      "Working capital support",
      "Business advisory"
    ],
    eligibility: "Registered SMEs in Bahrain",
    link: "https://www.tamkeen.bh",
    highlight: false,
  },
  {
    icon: Award,
    name: "Golden Visa Program",
    provider: "NPRA",
    description: "10-year residency for investors, business owners, and exceptional talent.",
    benefits: [
      "10-year renewable visa",
      "Family sponsorship",
      "No sponsor required",
      "Full work rights"
    ],
    eligibility: "BHD 200,000+ real estate or qualifying business investment",
    link: "https://www.npra.gov.bh",
    highlight: true,
  },
];

export function TamkeenSupportSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-primary/[0.02] relative overflow-hidden">
      {/* Background Pattern (radial dots) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-accent/10 text-accent border-accent/30 px-4 py-1.5 text-sm font-medium">
              Save Up to 50% on Costs
            </Badge>
          </motion.div>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Government Support Programs
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Bahrain offers generous support programs for new businesses. Access wage subsidies, 
            training grants, and investor visas to maximize your business potential.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {supportPrograms.map((program, index) => (
            <motion.div
              key={program.name}
              variants={staggerItem}
              className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                program.highlight ? 'border-accent shadow-md' : 'border-border hover:border-accent/40'
              }`}
            >
              {/* Header */}
              <div className={`p-6 ${program.highlight ? 'bg-accent/5' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    program.highlight ? 'bg-accent/20' : 'bg-primary/10'
                  }`}>
                    <program.icon className={`w-6 h-6 ${program.highlight ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  {program.highlight && (
                    <Badge className="bg-accent text-primary text-xs">Popular</Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{program.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{program.provider}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
              </div>

              {/* Benefits */}
              <div className="px-6 py-4 bg-muted/30">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Key Benefits</p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="font-medium text-primary">Eligibility:</span> {program.eligibility}
                </p>
                <a 
                  href={program.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline"
                >
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Potential Savings Calculator Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Calculate Your Potential Savings
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our experts can help you identify eligible government programs and calculate 
              potential savings for your specific business plan.
            </p>
            <Link to="/free-consultation">
              <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-base font-semibold rounded-xl">
                Get Free Eligibility Check
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
