import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TrendingUp, Building2, Truck, CheckCircle2 } from "lucide-react";
import caseStudy1 from "@/assets/management-case-study-tech.jpg";
import caseStudy2 from "@/assets/management-case-study-manufacturing.jpg";
import caseStudy3 from "@/assets/management-case-study-logistics.jpg";

const caseStudies = [
  {
    image: caseStudy1,
    icon: TrendingUp,
    badge: "Tech Startup",
    title: "Tech Startup Market Entry",
    client: "European SaaS Company",
    challenge: "First GCC expansion, zero local presence",
    solution: "Full market entry package (strategy + formation + visas)",
    results: [
      "Operational in 21 days",
      "First client signed in 45 days",
      "200% revenue growth Year 1"
    ]
  },
  {
    image: caseStudy2,
    icon: Building2,
    badge: "Operational Turnaround",
    title: "Operational Turnaround",
    client: "Bahrain Manufacturing SME",
    challenge: "18% margin erosion over 2 years, process inefficiencies",
    solution: "Operational audit + process redesign + technology integration",
    results: [
      "23% cost reduction in 6 months",
      "Margins restored to target levels",
      "Zero operational disruption"
    ]
  },
  {
    image: caseStudy3,
    icon: Truck,
    badge: "Regional Expansion",
    title: "Regional Expansion",
    client: "Saudi Trading Company",
    challenge: "Establish Bahrain distribution hub for GCC markets",
    solution: "Branch office formation + warehouse lease + logistics advisory",
    results: [
      "Operational in 14 days",
      "40% logistics cost reduction",
      "Regional distribution network live"
    ]
  }
];

export function ManagementCaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
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
            <span className="section-badge">Client Success</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real Strategy, Real Results
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
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-primary text-xs font-medium rounded-full">
                      {study.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <study.icon className="w-5 h-5 text-accent" />
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
