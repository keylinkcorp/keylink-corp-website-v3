import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Users, Building2, Clock, FileCheck, AlertTriangle, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Users,
    title: "HR Managers & Teams",
    subtitle: "Managing employee exits and compliance",
    concerns: [
      { icon: FileCheck, text: "Managing employee visa cancellations and exits" },
      { icon: Clock, text: "Tracking clearance deadlines across departments" },
      { icon: Building2, text: "Juggling multiple agency requirements" },
      { icon: AlertTriangle, text: "No time for ministry visits during work hours" }
    ]
  },
  {
    icon: Building2,
    title: "Companies Undergoing Liquidation",
    subtitle: "Facing complex multi-agency clearances",
    concerns: [
      { icon: Scale, text: "Simultaneous clearances from 7+ agencies required" },
      { icon: Clock, text: "Strict timeline pressure from regulators" },
      { icon: FileCheck, text: "Complex documentation for each ministry" },
      { icon: AlertTriangle, text: "Risk of delays blocking final closure" }
    ]
  }
];

export function DocumentClearanceAudienceClarity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Is This For You?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Document Clearance Services for HR Teams & Compliance Officers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Managing employee exits, visa cancellations, or company compliance? 
              We handle every clearance so your team stays focused.
            </p>
          </motion.div>

          {/* Two Audience Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-border border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <audience.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {audience.concerns.map((concern, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <concern.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{concern.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Sound familiar? Let us take the clearance burden off your plate.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Talk to a Clearance Specialist
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
