import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, X, Sparkles, Building2, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "CR Address", traditional: true, coworking: true, wfh: false },
  { name: "No Long-term Lease", traditional: false, coworking: true, wfh: true },
  { name: "Meeting Rooms", traditional: true, coworking: true, wfh: false },
  { name: "Networking", traditional: false, coworking: true, wfh: false },
  { name: "Business WiFi", traditional: true, coworking: true, wfh: false },
  { name: "24/7 Access", traditional: true, coworking: true, wfh: true },
  { name: "Reception", traditional: true, coworking: true, wfh: false },
  { name: "Flexible Scaling", traditional: false, coworking: true, wfh: false },
  { name: "All-Inclusive", traditional: false, coworking: true, wfh: true },
];

function FeatureCheck({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="font-semibold text-primary">{value}</span>;
  }
  return value ? (
    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
      <Check className="w-3 h-3 text-green-600" />
    </div>
  ) : (
    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
      <X className="w-3 h-3 text-red-400" />
    </div>
  );
}

export function CoworkingComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with Pattern Overlay - Softer */}
      <div className="absolute inset-0 -z-10 bg-[#F8F8F8]">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 60%, transparent 100%)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header - SEO Enhanced */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="section-badge">Smart Workspace Choice</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Coworking vs Traditional Office Space in Bahrain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why hundreds of Bahrain startups and remote teams are switching from 
            expensive office leases to flexible coworking memberships.
          </p>
        </div>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          
          {/* Traditional Office Card */}
          <div
            className={`p-6 lg:p-8 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Building2 className="w-7 h-7 text-muted-foreground" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-primary">Traditional Office</h3>
              <p className="text-sm text-muted-foreground">Conventional workspace rental</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-border/50">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">800+</span>
                <span className="text-lg text-muted-foreground">BD/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">+ utilities, maintenance, setup</p>
            </div>
            
            {/* Feature List with Dividers */}
            <div className="divide-y divide-border/50">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  <FeatureCheck value={feature.traditional} />
                </div>
              ))}
            </div>
          </div>

          {/* Coworking Space Card - Highlighted */}
          <div
            className={`relative p-6 lg:p-8 rounded-xl bg-white border-2 border-accent/30 shadow-lg md:-mt-4 md:mb-4 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Subtle gold glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
            
            {/* Best Value Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-md">
                <Sparkles className="w-4 h-4" />
                Best Value
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-5 mt-2 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6 relative z-10">
              <h3 className="font-bold text-xl text-primary">Coworking Space</h3>
              <p className="text-sm text-muted-foreground">Flexible professional workspace</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-accent/20 relative z-10">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-accent">60</span>
                <span className="text-lg text-muted-foreground">BD/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">All-inclusive, no hidden fees</p>
            </div>
            
            {/* Feature List with Dividers */}
            <div className="divide-y divide-accent/10 relative z-10">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span className="text-sm text-primary font-medium">{feature.name}</span>
                  <FeatureCheck value={feature.coworking} />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold relative z-10">
              Get Started Today
            </Button>
          </div>

          {/* Work From Home Card */}
          <div
            className={`p-6 lg:p-8 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Home className="w-7 h-7 text-muted-foreground" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-primary">Work From Home</h3>
              <p className="text-sm text-muted-foreground">Remote home office</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-border/50">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">Free</span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">But limited professionalism</p>
            </div>
            
            {/* Feature List with Dividers */}
            <div className="divide-y divide-border/50">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  <FeatureCheck value={feature.wfh} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
