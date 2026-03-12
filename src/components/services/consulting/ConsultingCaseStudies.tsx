import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TrendingUp, Building2, Shield, CheckCircle2 } from "lucide-react";
import caseStudy1 from "@/assets/consulting-case-study-1.jpg";
import caseStudy2 from "@/assets/consulting-case-study-2.jpg";
import caseStudy3 from "@/assets/consulting-case-study-3.jpg";

const caseStudies = [
  {
    image: caseStudy1,
    icon: TrendingUp,
    badge: "Tech Startup",
    title: "Tech Startup Market Entry",
    client: "European SaaS Company",
    challenge: "First GCC market entry, no local knowledge",
    solution: "Full-service package (formation + visas + office)",
    results: [
      "WLL formed in 5 days",
      "3 work visas processed in 2 weeks",
      "First client signed within 30 days",
      "Zero compliance issues in Year 1"
    ]
  },
  {
    image: caseStudy2,
    icon: Building2,
    badge: "Regional Expansion",
    title: "Regional Expansion",
    client: "Saudi Trading Company",
    challenge: "Establish Bahrain branch for GCC distribution",
    solution: "Branch office formation + warehouse lease + logistics advisory",
    results: [
      "Branch operational in 10 days",
      "40% cost reduction vs. Saudi HQ operations",
      "Regional distribution network established"
    ]
  },
  {
    image: caseStudy3,
    icon: Shield,
    badge: "Compliance Recovery",
    title: "Compliance Recovery",
    client: "Existing Bahrain Business",
    challenge: "Multiple compliance violations, pending penalties",
    solution: "Full compliance audit + remediation + ongoing PRO",
    results: [
      "All violations resolved in 45 days",
      "BHD 8,000 in potential penalties avoided",
      "Ongoing compliance maintained"
    ]
  }
];

export function ConsultingCaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Success Stories</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses like yours succeed in Bahrain.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                {/* Client Image & Badge */}
                <div className="relative p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {study.badge}
                    </span>
                  </div>
                  <div className="flex justify-center pt-4">
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <study.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{study.title}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{study.client}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Challenge</p>
                      <p className="text-sm text-primary">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Solution</p>
                      <p className="text-sm text-primary">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
