import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Calendar, Award } from "lucide-react";
import consultationImage from "@/assets/bank-consultation-meeting.jpg";

const stats = [
  { icon: Building2, value: "500+", label: "Corporate Accounts Opened" },
  { icon: Users, value: "4", label: "Major Bank Partnerships" },
  { icon: Calendar, value: "10+", label: "Years in Bahrain" },
  { icon: Award, value: "95%", label: "First-Attempt Approval" }
];

const badges = [
  "NBB Trusted Referral Partner",
  "BBK Corporate Client Introducer",
  "AUB Business Account Specialist",
  "Bahrain Chamber Member"
];

export function BankAccountTeamAuthority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      aria-labelledby="authority-heading"
      className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 
              id="authority-heading"
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight mb-6"
            >
              Established Bank Relationships Built Over 10+ Years
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our relationships with Bahrain's major banks aren't transactional — they're built on a decade of successful referrals and trusted partnership. When we introduce you to a bank, you're not just another application — you're a referred client from a trusted business partner.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-white rounded-lg p-4 border border-border text-center"
                >
                  <stat.icon className="h-6 w-6 text-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Partner badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span 
                  key={badge}
                  className="px-3 py-1.5 bg-gold/10 text-gold border border-gold/20 rounded-full text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={consultationImage} 
                alt="Keylink team meeting with bank relationship managers to discuss corporate account opening"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
