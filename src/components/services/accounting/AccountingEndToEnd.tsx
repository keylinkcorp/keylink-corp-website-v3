import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Building2, Users, RefreshCw, Plane, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const integrationPoints = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Your accounting is set up correctly from day one — chart of accounts, opening balances, all ready to go.",
    link: "/services/company-formation"
  },
  {
    icon: Users,
    title: "PRO Services",
    description: "Your accountant knows when your CR is renewed, when visas are processed, and what government fees hit your books.",
    link: "/services/pro-services"
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "We track your renewal dates, prepare the financials needed for MOIC, and ensure continuity.",
    link: "/services/cr-renewal"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Visa costs, employee onboarding, and SIO contributions all flow seamlessly into your books.",
    link: "/services/visa-immigration"
  }
];

export function AccountingEndToEnd() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0%, transparent 30%)
          `
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
              <Link2 className="w-4 h-4" />
              End-to-End Integration
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Accountant Knows What Your PRO Filed
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Unlike standalone accounting firms, we integrate your financial management with all your 
              other business services. One partner, complete visibility, zero coordination headaches.
            </p>
          </motion.div>

          {/* Integration Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {integrationPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{point.description}</p>
                    <Link 
                      to={point.link}
                      className="text-accent text-sm font-medium hover:text-accent/80 inline-flex items-center gap-1"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            variants={staggerItem}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              The Keylink Difference: One Dashboard, One Partner
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Formation → Accounting → PRO → Visa — all managed under one roof. 
              Your accountant has full visibility into your government filings, and your PRO 
              knows your financial deadlines. That's the integration your business deserves.
            </p>
            <Button asChild className="btn-gold">
              <Link to="/contact">
                Get Integrated Accounting
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
