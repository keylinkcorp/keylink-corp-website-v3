import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Clock, CheckCircle2, Building2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import clientImage from "@/assets/branch-success-client.jpg";

export function BranchSuccessSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Building2 className="w-4 h-4" />
              Client Success
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              UK Firm Opens Bahrain Branch{" "}
              <span className="text-accent">in 9 Days</span>
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                {/* Client Info */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-border bg-secondary/30">
                  <div className="text-center">
                    <img 
                      src={clientImage} 
                      alt="Marcus Chen, CEO" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-primary text-lg">Marcus Chen</h3>
                    <p className="text-sm text-muted-foreground">CEO, TechBridge Solutions</p>
                    <p className="text-xs text-muted-foreground mt-1">London, United Kingdom</p>
                    
                    <div className="mt-6 flex justify-center items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">9 Days Setup</span>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="md:col-span-2 p-8">
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">
                      TechBridge needed a GCC presence to serve Saudi and UAE clients. They had 30 days to establish 
                      operations before a major contract deadline, with all documents still in the UK.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">
                      We coordinated same-week apostille in London, parallel Arabic translation, and initiated 
                      MOIC registration while documents were in transit. The CEO never left London.
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">The Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-secondary/50 rounded-xl">
                        <p className="text-2xl font-bold text-accent">9</p>
                        <p className="text-xs text-muted-foreground">Days to CR</p>
                      </div>
                      <div className="text-center p-3 bg-secondary/50 rounded-xl">
                        <p className="text-2xl font-bold text-accent">0</p>
                        <p className="text-xs text-muted-foreground">Trips to Bahrain</p>
                      </div>
                      <div className="text-center p-3 bg-secondary/50 rounded-xl">
                        <p className="text-2xl font-bold text-accent">$2M</p>
                        <p className="text-xs text-muted-foreground">Contract Secured</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                    <Quote className="w-6 h-6 text-accent mb-2" />
                    <p className="text-primary italic">
                      "Keylink turned what I thought would be a 2-month process into a 9-day sprint. 
                      We signed our first GCC client before our competitors even finished their paperwork."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">— Marcus Chen, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
