import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Scale, 
  Home, 
  Wallet, 
  AlertTriangle, 
  Plane, 
  Building2 
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const risks = [
  {
    icon: Scale,
    title: "No Legal Standing",
    description: "An unregistered lease cannot be used as evidence in Bahrain's Rent Disputes Committee. You have no legal protection.",
  },
  {
    icon: Home,
    title: "Eviction Vulnerability",
    description: "Tenants with unregistered leases are vulnerable to unlawful eviction with no recourse through official channels.",
  },
  {
    icon: Wallet,
    title: "Deposit Disputes",
    description: "Without registration, recovering security deposits becomes nearly impossible in cases of landlord-tenant conflict.",
  },
  {
    icon: AlertTriangle,
    title: "Penalty Exposure",
    description: "Both parties face fines of BHD 500 or more for failure to register within the required timeframe.",
  },
  {
    icon: Plane,
    title: "Visa Complications",
    description: "Tenants cannot use unregistered leases for family visa sponsorship or residency address proof.",
  },
  {
    icon: Building2,
    title: "CR Address Proof",
    description: "Businesses cannot use unregistered leases as proof of commercial address for CR registration or amendments.",
  },
];

export function WhyRegisterLease() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
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
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <AlertTriangle className="w-4 h-4" />
              Why Registration Matters
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Risks of an Unregistered Lease{" "}
              <span className="text-accent">in Bahrain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect yourself from legal and financial consequences
            </p>
          </motion.div>

          {/* Risks Grid */}
          <motion.div 
            variants={staggerItem} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {risks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-border shadow-sm hover:shadow-md hover:border-destructive/40 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                    <risk.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{risk.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
