import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Quote, Clock, Receipt, Building2 } from "lucide-react";
import clientImage from "@/assets/pro-success-client.jpg";

const metrics = [
  {
    icon: Clock,
    value: "2 Days",
    label: "vs. 3 weeks DIY"
  },
  {
    icon: Receipt,
    value: "BHD 150",
    label: "Service cost"
  },
  {
    icon: Building2,
    value: "0",
    label: "Office visits"
  }
];

export function PROCaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Success Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From 3 Weeks of Frustration to 2-Day Resolution
            </h2>
          </motion.div>

          {/* Case Study Card */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Profile Section */}
                <div className="md:col-span-2 bg-secondary/50 p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                      <img
                        src={clientImage}
                        alt="James Mitchell - UK Tech Entrepreneur"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-3xl mb-2">🇬🇧</span>
                    <h3 className="text-xl font-bold mb-1">James M.</h3>
                    <p className="text-sm text-muted-foreground mb-4">UK Tech Entrepreneur</p>
                    
                    {/* Metrics */}
                    <div className="w-full space-y-3 mt-4 pt-4 border-t border-border">
                      {metrics.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <metric.icon className="w-4 h-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                          </div>
                          <span className="font-semibold text-primary">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Story Section */}
                <div className="md:col-span-3 p-8">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-2">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground">
                      "I wasted three weeks trying to renew my CR myself. Wrong forms, wrong office, 
                      endless queues. Every visit ended with 'come back tomorrow with different documents.' 
                      I was losing clients because I couldn't focus on my actual business."
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-muted-foreground">
                      A colleague recommended Keylink. I handed over my documents on a Sunday, 
                      and by Tuesday afternoon my renewed CR was delivered to my office. 
                      Two days. No visits. No stress.
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      The Result
                    </h4>
                    <p className="text-foreground font-medium">
                      "They've handled everything since — visas, LMRA, municipality permits. 
                      I haven't stepped into a single government office in 18 months. 
                      The monthly retainer pays for itself ten times over."
                    </p>
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
