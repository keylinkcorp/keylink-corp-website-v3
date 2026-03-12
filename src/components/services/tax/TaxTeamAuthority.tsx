import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Award, Users, Clock, Languages, Building2, Shield } from "lucide-react";
import taxTeamImage from "@/assets/tax-team-authority.jpg";

const credentials = [
  { icon: Shield, label: "NBR-Registered Tax Agents" },
  { icon: Clock, label: "10+ Years Bahrain Experience" },
  { icon: Users, label: "500+ Businesses Registered" },
  { icon: Award, label: "Big 4 Trained Professionals" },
  { icon: Languages, label: "Arabic & English Fluency" },
  { icon: Building2, label: "100% Compliance Track Record" }
];

export function TaxTeamAuthority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Your Tax Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              NBR-Registered Experts With Local Market Knowledge
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Image */}
            <motion.div 
              variants={staggerItem}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={taxTeamImage} 
                  alt="NBR-certified tax professional at Keylink Corp"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">NBR Certified</p>
                    <p className="text-sm text-muted-foreground">Tax Agents</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Credentials */}
            <motion.div variants={staggerItem}>
              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map((cred, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cred.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{cred.label}</span>
                  </div>
                ))}
              </div>

              {/* Authority Statement */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-foreground leading-relaxed">
                  Our tax team includes former Big 4 auditors and NBR-certified agents who understand both the letter of the law and the practical realities of doing business in Bahrain. We do not just file returns — we protect your reputation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
