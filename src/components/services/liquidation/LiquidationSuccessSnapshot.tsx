import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, CheckCircle2, Clock, Wallet, Building2 } from "lucide-react";
import liquidationSuccessClient from "@/assets/liquidation-success-client.jpg";

export function LiquidationSuccessSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-primary" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-semibold border border-white/20 mb-4">
              <Building2 className="w-4 h-4" />
              Success Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Case Study
            </h2>
          </div>

          {/* Case Study Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Details */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Regional Trading Company (WLL)
                </h3>
                <p className="text-muted-foreground mb-8">
                  Dormant company with accumulated obligations
                </p>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Challenge
                  </h4>
                  <p className="text-muted-foreground pl-4">
                    5 employees, 3 years dormant, accumulated LMRA fines, multiple ministry clearances required
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Our Solution
                  </h4>
                  <p className="text-muted-foreground pl-4">
                    Visa cancellations, negotiated fee reductions with LMRA, coordinated 7-ministry clearance process
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Clock className="w-6 h-6 text-accent mb-2" />
                    <p className="text-2xl font-bold text-primary">5 Weeks</p>
                    <p className="text-sm text-muted-foreground">Complete closure</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Wallet className="w-6 h-6 text-accent mb-2" />
                    <p className="text-2xl font-bold text-primary">BHD 2,800</p>
                    <p className="text-sm text-muted-foreground">Penalty savings</p>
                  </div>
                </div>
              </div>

              {/* Right - Quote with Image */}
              <div className="flex flex-col justify-center">
                {/* Client Image */}
                <div className="mb-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                    <img 
                      src={liquidationSuccessClient} 
                      alt="Regional Trading Company Managing Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-12 h-12 text-accent/30 absolute -top-4 -left-2" />
                  <blockquote className="text-xl md:text-2xl font-medium text-primary leading-relaxed pl-8 relative z-10">
                    "Keylink handled everything—we didn't have to visit a single ministry office. They negotiated our LMRA fines down and closed everything in 5 weeks."
                  </blockquote>
                </div>

                <div className="mt-8 pl-8">
                  <p className="font-semibold text-primary">Managing Director</p>
                  <p className="text-muted-foreground">Regional Trading Company WLL</p>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-8 border-t border-border pl-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">7-Ministry Clearance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">Zero Liability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">Remote Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
