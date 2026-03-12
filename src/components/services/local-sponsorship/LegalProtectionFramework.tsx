import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ShieldCheck, Stamp, FileCheck, Wallet, CheckCircle, Shield } from "lucide-react";

const protectionElements: { icon: typeof ShieldCheck; title: string; description: string; benefits?: string[] }[] = [
  {
    icon: ShieldCheck,
    title: "Side Agreement (Power of Attorney)",
    description: "Every arrangement includes a legally-binding side agreement that supersedes the nominal ownership structure. This document explicitly grants you:",
    benefits: [
      "Full management and decision-making authority",
      "Complete control over business operations",
      "Exclusive access to company bank accounts",
      "Authority to sign contracts and agreements",
      "Right to all profits after sponsor fees"
    ]
  },
  {
    icon: Stamp,
    title: "Irrevocable Power of Attorney",
    description: "Your sponsor signs a Power of Attorney that cannot be revoked, authorizing you to act on behalf of the company in all matters. This document is notarized and registered with relevant Bahrain authorities."
  },
  {
    icon: FileCheck,
    title: "Undated Transfer Documents",
    description: "We prepare and hold undated share transfer documents, allowing you to transfer the sponsor's shares if needed. This provides an exit mechanism should circumstances change."
  },
  {
    icon: Wallet,
    title: "Profit Distribution Agreement",
    description: "Clear contractual terms define that:",
    benefits: [
      "You receive 100% of business profits",
      "Sponsor receives only the agreed annual fee",
      "No profit-sharing beyond the fixed fee",
      "Automatic renewal terms with locked pricing"
    ]
  }
];

export function LegalProtectionFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      {/* Background Pattern - Ellipse fade */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              Your Protection Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Protect Your Investment and Control
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our local sponsorship service goes beyond simply finding a Bahraini partner. We've developed a comprehensive protection framework that has successfully safeguarded over 100 foreign investments in Bahrain. Here's exactly how we ensure your business remains yours.
            </p>
          </motion.div>

          {/* Protection Elements Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {protectionElements.map((element, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <element.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{element.title}</h3>
                    <p className="text-muted-foreground mb-4">{element.description}</p>
                    {element.benefits && (
                      <ul className="space-y-2">
                        {element.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reassurance Statement */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-primary rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">
                These aren't theoretical protections. Every document is drafted by experienced Bahrain-licensed lawyers, notarized by certified notaries, and where applicable, registered with government authorities. This legal framework has protected <span className="font-bold text-accent">100+ foreign investments</span> without a single dispute reaching litigation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
