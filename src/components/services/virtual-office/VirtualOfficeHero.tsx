import { Building2, Award, Clock, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

// Import hero images
import businessAddressImg from "@/assets/virtual-office/business-address.jpg";
import mailHandlingImg from "@/assets/virtual-office/mail-handling.jpg";
import phoneAnsweringImg from "@/assets/virtual-office/phone-answering.jpg";
import meetingRoomImg from "@/assets/virtual-office/meeting-room.jpg";

const trustIndicators = [
  { icon: Building2, value: 1000, suffix: "+", label: "Registered Businesses" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 24, suffix: "hr", label: "Same-Day Setup" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Retention" },
];

const heroFeatures = [
  { title: "Business Address", desc: "CR-compliant Sanabis address", image: businessAddressImg },
  { title: "Mail Handling", desc: "Receive, scan & forward mail", image: mailHandlingImg },
  { title: "Phone Answering", desc: "Professional call reception", image: phoneAnsweringImg },
  { title: "Meeting Rooms", desc: "On-demand room booking", image: meetingRoomImg },
];

export function VirtualOfficeHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Aurora Mesh Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 10%, hsl(var(--gold) / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 10% 60%, hsl(var(--gold) / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 90% 80%, hsl(var(--navy) / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 50% 50%, hsl(var(--gold) / 0.04) 0%, transparent 40%)
          `,
        }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div>
              <span className="section-badge inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Professional Virtual Office in Bahrain
              </span>
            </div>

            {/* Headline - SEO Optimized */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Bahrain's Most Trusted{" "}
              <span className="text-accent">Virtual Office</span> for Business Registration
            </h1>

            {/* Subtitle - SEO Optimized with semantic keywords */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Get a prestigious Sanabis business address for CR registration, 
              professional mail handling & on-demand meeting rooms — starting 
              from just BHD 25/month.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md shadow-accent/15 transition-all hover:scale-[1.02]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
              >
                View Packages
              </Button>
            </div>

            <div className="mt-10">
              <HeroReviewStrip align="left" />
            </div>
          </div>

          {/* Right Side - Feature Cards Grid with Real Images */}
          <div className="grid grid-cols-2 gap-4">
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-md cursor-pointer hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={`${feature.title} - Virtual office service in Bahrain`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
                
                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/30 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-xl border border-border px-5 py-5 text-center group hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <AnimatedCounter 
                      value={indicator.value} 
                      suffix={indicator.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{indicator.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
