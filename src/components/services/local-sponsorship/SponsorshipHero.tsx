import { motion } from "framer-motion";
import { staggerContainer, staggerItem, heroHeadlineContainer, heroHeadlineLine } from "@/lib/animations";
import { Shield, Wallet, FileCheck, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import sponsorshipHeroImage from "@/assets/sponsorship-hero.jpg";
import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";

const features = [
  { icon: Shield, text: "Vetted Sponsors" },
  { icon: Wallet, text: "From BHD 600/year" },
  { icon: FileCheck, text: "Legal Protection Included" }
];

const trustStats = [
  { value: "100+", label: "Sponsors in Network" },
  { value: "100%", label: "Control Guaranteed" }
];

export function SponsorshipHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial Gradient Blur - Gold tint from top */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.15)_0,rgba(199,167,99,0)_50%,rgba(199,167,99,0)_100%)]" />
      
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_85%,transparent_100%)]" />

      <div className="container py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="section-badge">
                Bahrain Local Sponsor Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={heroHeadlineContainer}
              className="mb-6"
            >
              <motion.h1 
                variants={heroHeadlineLine}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                Local Sponsorship
              </motion.h1>
              <motion.h1 
                variants={heroHeadlineLine}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                in <span className="text-accent">Bahrain</span>
              </motion.h1>
              <motion.p 
                variants={heroHeadlineLine}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-2"
              >
                Your Business, Your Control
              </motion.p>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Access restricted business sectors in Bahrain while maintaining complete control of your company. Our vetted Bahraini sponsors and legally-binding protection agreements ensure your investment stays safe.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Stats */}
            <motion.div 
              variants={staggerItem}
              className="flex justify-center lg:justify-start gap-6 mb-8"
            >
              {trustStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <div>
                    <span className="font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-muted-foreground ml-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <a 
                  href="https://wa.me/97317000000?text=I'm%20interested%20in%20local%20sponsorship%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <a href="tel:+97317000000">
                  Call +973 1700 0000
                </a>
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex justify-center lg:justify-start">
              <HeroReviewStrip align="left" />
            </motion.div>

            {/* Trust Line */}
            <motion.p 
              variants={staggerItem}
              className="text-sm text-muted-foreground mt-6"
            >
              Registered with MOIC | Trusted by 100+ Foreign Investors
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={sponsorshipHeroImage}
                alt="Professional business partnership handshake in Bahrain office"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 bottom-8 bg-white rounded-xl shadow-lg p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Vetted Sponsors</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
