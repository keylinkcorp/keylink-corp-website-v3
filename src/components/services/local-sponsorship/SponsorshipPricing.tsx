import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sponsorshipImage from "@/assets/sponsorship-partnership.jpg";

const includedItems = [
  "Vetted sponsor from our network",
  "Side agreement drafting",
  "Power of Attorney documentation",
  "Notarization of all documents",
  "MOIC registration support",
  "Annual renewal management",
  "Free sponsor replacement if needed",
  "WhatsApp support"
];

export function SponsorshipPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern - Grid lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-10">
            <span className="section-badge">
              Pricing
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Simple, Transparent Pricing
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
          >
            {/* Left: Pricing Card */}
            <div className="bg-white rounded-2xl border-2 border-accent shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Local Sponsorship Package</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-accent">BHD 600</span>
                  <span className="text-white/70">/year</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Setup Fee: BHD 200 (one-time)</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-primary text-sm mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-xs text-muted-foreground mb-5 p-3 bg-muted/50 rounded-lg">
                  Annual fee covers sponsor compensation and ongoing compliance. No hidden charges, no percentage of profits.
                </p>

                {/* CTA */}
                <Button asChild className="w-full btn-gold py-5">
                  <a 
                    href="https://wa.me/97317000000?text=I'm%20interested%20in%20the%20local%20sponsorship%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <img 
                src={sponsorshipImage} 
                alt="Business partnership handshake representing trusted local sponsorship in Bahrain"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
