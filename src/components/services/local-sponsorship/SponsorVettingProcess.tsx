import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { UserCheck, Banknote, History, MessageSquare, Eye, CheckCircle } from "lucide-react";

const vettingSteps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Background Verification",
    description: "Complete security and criminal background checks through official channels"
  },
  {
    icon: Banknote,
    number: "02",
    title: "Financial Stability Assessment",
    description: "Review of personal financial standing to ensure no outstanding obligations that could affect your business"
  },
  {
    icon: History,
    number: "03",
    title: "Track Record Review",
    description: "Minimum 3 years of successful sponsorship history with verified references"
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Character Assessment",
    description: "In-person interviews to assess reliability, communication, and professional conduct"
  },
  {
    icon: Eye,
    number: "05",
    title: "Ongoing Monitoring",
    description: "Annual reviews to maintain standards and ensure continued eligibility"
  }
];

export function SponsorVettingProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Large grid lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              Our Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Vet Every Sponsor in Our Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not all sponsors are equal. We maintain a carefully curated network of Bahraini nationals who meet our strict qualification criteria.
            </p>
          </motion.div>

          {/* 5-Point Vetting Process */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {vettingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Check Icon */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outcome Statement */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed">
                Only sponsors who pass all five criteria join our network. We currently maintain relationships with <span className="font-bold text-accent">100+ vetted sponsors</span> across various sectors, ensuring we can match your business with the right partner.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
