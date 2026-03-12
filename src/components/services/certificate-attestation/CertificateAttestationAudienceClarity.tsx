import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Users, Briefcase, GraduationCap, Heart, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Users,
    title: "HR Departments",
    description: "Need to process employee documents for overseas assignments quickly and correctly",
    needs: ["Bulk processing for multiple employees", "Fast turnaround for urgent transfers", "Compliance documentation"]
  },
  {
    icon: Briefcase,
    title: "Job Seekers",
    description: "Require degree attestation for UAE, Saudi, or GCC employment",
    needs: ["Educational certificate attestation", "Professional qualification verification", "Visa documentation support"]
  },
  {
    icon: Heart,
    title: "Families Relocating",
    description: "Need birth certificates, marriage certificates for family visa applications",
    needs: ["Personal document attestation", "Family visa document packages", "Child education documentation"]
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Commercial documents requiring legalization for international contracts",
    needs: ["Power of Attorney attestation", "Contract legalization", "Company document authentication"]
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Educational certificates for university admission abroad",
    needs: ["Transcript attestation", "Degree verification", "Scholarship documentation"]
  }
];

export function CertificateAttestationAudienceClarity() {
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
              Certificate Attestation for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're an HR manager, job seeker, or relocating family — we handle the 
              complex attestation process so you can focus on what matters.
            </p>
          </motion.div>

          {/* Audience Cards Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-border border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <audience.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{audience.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {audience.description}
                </p>
                
                <ul className="space-y-2">
                  {audience.needs.map((need, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Not sure which attestation you need? We'll guide you.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Get Free Document Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
