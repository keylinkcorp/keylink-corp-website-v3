import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  Check, 
  X, 
  Star,
  User,
  Users,
  Landmark,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const companyTypes = [
  {
    id: "spc",
    name: "SPC",
    fullName: "Single Person Company",
    icon: User,
    recommended: false,
    minShareholders: "1",
    minCapital: "BHD 50",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "3-5 days",
    annualAudit: false,
    bestFor: "Solo entrepreneurs",
    startingPrice: "BHD 750",
  },
  {
    id: "wll",
    name: "WLL",
    fullName: "Limited Liability Company",
    icon: Users,
    recommended: true,
    minShareholders: "2-50",
    minCapital: "BHD 20,000",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "5-7 days",
    annualAudit: true,
    bestFor: "SMEs & partnerships",
    startingPrice: "BHD 1,200",
  },
  {
    id: "branch",
    name: "Branch",
    fullName: "Branch of Foreign Company",
    icon: Building2,
    recommended: false,
    minShareholders: "N/A",
    minCapital: "Parent company",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "7-10 days",
    annualAudit: true,
    bestFor: "International expansion",
    startingPrice: "BHD 1,500",
  },
  {
    id: "holding",
    name: "Holding",
    fullName: "Bahrain Holding Company",
    icon: Landmark,
    recommended: false,
    minShareholders: "1+",
    minCapital: "BHD 250,000",
    foreignOwnership: "100%",
    canHireStaff: false,
    visaQuota: "Limited",
    tradingAllowed: false,
    timeline: "7-10 days",
    annualAudit: true,
    bestFor: "Investment vehicles",
    startingPrice: "BHD 2,500",
  },
  {
    id: "rep",
    name: "Rep Office",
    fullName: "Representative Office",
    icon: Building,
    recommended: false,
    minShareholders: "N/A",
    minCapital: "None",
    foreignOwnership: "100%",
    canHireStaff: false,
    visaQuota: "2 max",
    tradingAllowed: false,
    timeline: "5-7 days",
    annualAudit: false,
    bestFor: "Market research",
    startingPrice: "BHD 800",
  },
];

function FeatureItem({ enabled, label }: { enabled: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {enabled ? (
        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
      ) : (
        <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
      )}
      <span className={`text-sm ${enabled ? 'text-foreground' : 'text-muted-foreground/60'}`}>
        {label}
      </span>
    </div>
  );
}

export function CompanyTypesTable() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern - Dot Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p 
            variants={staggerItem}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-4"
          >
            Company Types Comparison
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Choose Your Business Structure
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Compare all company types available in Bahrain. All structures allow 100% foreign ownership 
            and can be formed in under 10 business days.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {companyTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={staggerItem}
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg relative ${
                type.recommended 
                  ? 'border-2 border-accent/50 shadow-md hover:shadow-xl' 
                  : 'border-border/50 hover:border-accent/30'
              }`}
            >
              {/* Popular Badge Accent */}
              {type.recommended && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-t-2xl" />
              )}

              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  type.recommended ? 'bg-accent/15' : 'bg-primary/8'
                }`}>
                  <type.icon className={`w-6 h-6 ${type.recommended ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-lg text-primary">{type.name}</h3>
                    {type.recommended && (
                      <Badge className="bg-accent/15 text-accent border-0 text-[11px] px-2 py-0.5">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{type.fullName}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="mb-5 pb-5 border-b border-border/50">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Best for</p>
                <p className="text-sm font-medium text-primary">{type.bestFor}</p>
              </div>

              {/* Specifications */}
              <div className="space-y-3 mb-5 pb-5 border-b border-border/50">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Min. Capital</span>
                  <span className="font-medium text-primary">{type.minCapital}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Shareholders</span>
                  <span className="font-medium text-primary">{type.minShareholders}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-medium text-primary">{type.timeline}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Visa Quota</span>
                  <span className="font-medium text-primary">{type.visaQuota}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Foreign Ownership</span>
                  <span className="font-medium text-accent">{type.foreignOwnership}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                <FeatureItem enabled={type.tradingAllowed} label="Trading Allowed" />
                <FeatureItem enabled={type.canHireStaff} label="Can Hire Staff" />
                <FeatureItem enabled={type.annualAudit} label="Annual Audit Required" />
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">From</span>
                  <span className="text-2xl font-bold text-accent">{type.startingPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which structure is right for you?
          </p>
          <Link to="/free-consultation">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl">
              Get Free Expert Advice
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
