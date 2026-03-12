import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TrendingUp, CheckCircle2, Quote } from "lucide-react";

interface AccountingCaseStudyProps {
  caseImage?: string;
}

export function AccountingCaseStudy({ caseImage }: AccountingCaseStudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudy = {
    badge: "Success Story",
    title: "UAE Tech Startup Expansion",
    client: "TechFlow Solutions",
    industry: "SaaS Technology",
    challenge: "TechFlow, a Dubai-based SaaS company, expanded to Bahrain but had zero local accounting knowledge. They missed their first VAT deadline within weeks of starting operations, triggering an immediate NBR penalty notice.",
    solution: "We took over immediately with emergency VAT remediation. Registered their company with NBR, filed the overdue return with supporting documentation, and negotiated penalty reduction. Then established full ongoing accounting with QuickBooks integration.",
    results: [
      "BHD 2,500 penalty reduced to BHD 500 through proper documentation",
      "VAT fully compliant within 2 weeks",
      "First audit passed with zero findings",
      "Monthly books closed by the 5th of each month",
      "Monthly financial reports delivered to Dubai HQ on schedule"
    ],
    quote: "Keylink turned a stressful situation into a smooth operation. We went from panic mode to having better financial visibility in Bahrain than we do in Dubai.",
    quotee: "Sarah M., CFO, TechFlow Solutions"
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Client Success</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              From VAT Penalty to Full Compliance in 2 Weeks
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            {/* Header with image */}
            <div className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Client Image */}
                <div className="relative">
                  {caseImage ? (
                    <img
                      src={caseImage}
                      alt={caseStudy.client}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center border-4 border-white shadow-md">
                      <TrendingUp className="w-10 h-10 text-accent" />
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Client Info */}
                <div className="text-center md:text-left">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {caseStudy.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mt-2">{caseStudy.title}</h3>
                  <p className="text-accent font-medium">{caseStudy.client}</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Challenge */}
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium">
                  The Challenge
                </p>
                <p className="text-primary">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2 font-medium">
                  Our Solution
                </p>
                <p className="text-primary">{caseStudy.solution}</p>
              </div>

              {/* Results */}
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3 font-medium">
                  The Results
                </p>
                <div className="grid gap-3">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary italic mb-3">{caseStudy.quote}</p>
                    <p className="text-sm text-muted-foreground font-medium">— {caseStudy.quotee}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
