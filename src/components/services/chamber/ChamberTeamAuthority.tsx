import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Award, Clock, FileCheck, Globe, Building2, Settings } from "lucide-react";
import chamberTeamImage from "@/assets/chamber-team-authority.jpg";

const credentials = [
  { icon: Award, text: "BCCI-Certified Representatives" },
  { icon: Clock, text: "10+ Years Bahrain Experience" },
  { icon: FileCheck, text: "1,200+ Documents Processed" },
  { icon: Globe, text: "Arabic & English Fluency" },
  { icon: Building2, text: "Direct BCCI Relationships" },
  { icon: Settings, text: "Ministry Coordination Experience" }
];

export function ChamberTeamAuthority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BCCI-Certified Specialists With Local Market Knowledge
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div 
              variants={staggerItem}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={chamberTeamImage} 
                  alt="Keylink BCCI specialists team reviewing documents in meeting room"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">BCCI Certified</p>
                    <p className="text-sm text-muted-foreground">Official Partners</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerItem}>
              {/* Credentials Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {credentials.map((credential, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <credential.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm">{credential.text}</span>
                  </div>
                ))}
              </div>

              {/* Authority Statement */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-muted-foreground leading-relaxed">
                  Our team includes former BCCI liaison officers who understand the internal processes, common rejection reasons, and fastest paths to approval. We do not just submit forms — <strong className="text-foreground">we advocate for your documents</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
