import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Building2, Package, Users, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Building2,
    title: "Real Estate Brokerage",
    description: "One of the most lucrative restricted sectors. Real estate brokers and property managers must have majority Bahraini ownership. Our sponsors have experience supporting real estate businesses across residential and commercial markets."
  },
  {
    icon: Package,
    title: "Trading & Import/Export",
    description: "Certain trading activities, particularly those involving specific goods categories, require local partnership. We match you with sponsors experienced in trading sector requirements."
  },
  {
    icon: Users,
    title: "Manpower & Recruitment",
    description: "Operating a recruitment agency or manpower supply business requires local sponsorship. These businesses benefit from Bahrain's position as a regional employment hub."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Some professional services that are regulated or licensed at the individual level may require local partnership structures."
  }
];

export function RestrictedActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              Target Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Activities That Require Local Sponsorship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The following sectors offer significant profit potential in Bahrain but require a 51% local ownership structure:
            </p>
          </motion.div>

          {/* Sector Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border shadow-sm p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <sector.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{sector.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA within section */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-foreground mb-6">
                Not sure if your business activity requires a local sponsor? Our team reviews your planned activities and advises on the optimal structure - whether that's 100% foreign ownership or a properly-protected sponsorship arrangement.
              </p>
              <Button asChild className="btn-gold">
                <a 
                  href="https://wa.me/97317000000?text=I'd%20like%20to%20check%20if%20my%20business%20activity%20requires%20a%20local%20sponsor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Activity Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
