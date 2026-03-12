import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileCheck, Building2, Award, Clock } from "lucide-react";

const authorityCards = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Our clearance specialists have processed thousands of certificates across every agency. We know exactly what each ministry requires."
  },
  {
    icon: Building2,
    title: "Direct Agency Relationships",
    description: "Years of daily visits have built relationships that accelerate processing and resolve issues before they become problems."
  },
  {
    icon: Award,
    title: "98% First-Attempt Success",
    description: "Our documentation expertise means applications are complete and correct the first time — no rejections, no rework, no repeat visits."
  }
];

export function DocumentClearanceTeamAuthority() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Keylink
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Team Behind Your Clearances
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals who know every agency inside out.
            </p>
          </motion.div>

          {/* Authority Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {authorityCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm text-center">
              <div className="flex flex-wrap justify-center gap-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">2,500+</div>
                  <div className="text-sm text-muted-foreground">Clearances Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">7+</div>
                  <div className="text-sm text-muted-foreground">Agencies Covered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Monthly Certificates</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
