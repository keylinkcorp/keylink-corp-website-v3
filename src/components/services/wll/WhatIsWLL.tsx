import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Users, 
  Wallet, 
  Shield, 
  Globe,
  Building2,
  FileText,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import partnershipImage from "@/assets/wll-partnership-meeting.jpg";

const keyCharacteristics = [
  { icon: Users, text: "2-50 shareholders (individuals or corporations)" },
  { icon: Wallet, text: "BHD 20,000 minimum capital requirement" },
  { icon: Shield, text: "Limited liability protection for all shareholders" },
  { icon: Globe, text: "100% foreign ownership permitted" },
  { icon: Building2, text: "Enhanced credibility with banks and large clients" },
  { icon: FileText, text: "Flexible profit-sharing and management structures" },
];

export function WhatIsWLL() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-6">
                <FileText className="w-4 h-4" />
                Understanding WLL
              </span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              What Is a <span className="text-gold">WLL Company</span> in Bahrain?
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                A WLL (With Limited Liability) company is Bahrain's most versatile business structure for partnerships and growing enterprises. Governed by Articles 224-271 of the Commercial Companies Law, the WLL allows 2-50 shareholders to operate with limited personal liability while maintaining full control over their business operations.
              </p>
              <p>
                Unlike traditional partnership models where partners carry unlimited liability, WLL shareholders are only responsible for debts up to their capital contribution. This protection, combined with 100% foreign ownership rights, makes the WLL the preferred choice for joint ventures between local and international investors.
              </p>
            </motion.div>

            {/* Key Characteristics */}
            <motion.div variants={staggerItem} className="grid sm:grid-cols-2 gap-3 mb-8">
              {keyCharacteristics.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-secondary/40 rounded-xl">
                  <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* 2024 Regulatory Note */}
            <motion.div variants={staggerItem} className="p-5 bg-primary/5 rounded-2xl border border-primary/10 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary mb-1">2024 Regulatory Note</p>
                  <p className="text-sm text-muted-foreground">
                    As of June 2024, all WLL companies must deposit minimum capital in a Bahraini bank account before CR issuance. This requirement strengthens the credibility of WLL entities and is mandatory for final registration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pro Tip */}
            <motion.div variants={staggerItem} className="p-5 bg-gold/5 rounded-2xl border border-gold/20">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary mb-1">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">
                    Planning to attract investors or apply for government contracts? The WLL's higher capital base and formal structure signals stability that SPCs cannot match.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                src={partnershipImage} 
                alt="Business partners in WLL company meeting" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">2-50</p>
                  <p className="text-sm text-muted-foreground">Shareholders Allowed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
