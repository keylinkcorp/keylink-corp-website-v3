import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Quote } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const directApplicationItems = [
  { factor: "Company Formation", value: "Handle separately" },
  { factor: "Application Review", value: "One attempt" },
  { factor: "Program Access", value: "Public inbox" },
  { factor: "Interview Prep", value: "Figure it out" },
  { factor: "Timeline", value: "3-4 months typical" },
  { factor: "Acceptance Rate", value: "~53% first attempt" },
  { factor: "Post-Acceptance", value: "On your own" },
  { factor: "Cost", value: "Free (+ time)" }
];

const keylinkItems = [
  { factor: "Company Formation", value: "Included & optimized" },
  { factor: "Application Review", value: "Unlimited revisions" },
  { factor: "Program Access", value: "Direct relationships" },
  { factor: "Interview Prep", value: "Structured coaching" },
  { factor: "Timeline", value: "6-8 weeks average" },
  { factor: "Acceptance Rate", value: "85% first attempt" },
  { factor: "Post-Acceptance", value: "3 months support" },
  { factor: "Cost", value: "BHD 150-1,200" }
];

export function IncubatorComparison() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">The Keylink Advantage</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Why Use Keylink vs. <span className="text-accent">Applying Directly?</span>
            </motion.h2>
          </div>

          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Direct Application Card */}
            <motion.div variants={staggerItem}>
              <Card className="h-full bg-muted/50 border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Direct Application</h3>
                      <p className="text-sm text-muted-foreground">Going it alone</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {directApplicationItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-destructive/60 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{item.factor}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* With Keylink Card */}
            <motion.div variants={staggerItem}>
              <Card className="h-full bg-accent/10 border-accent shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">With Keylink</h3>
                      <p className="text-sm text-accent">Expert guidance</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {keylinkItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{item.factor}</p>
                        <p className="text-sm text-foreground/80">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quote Box */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto mt-12 bg-primary text-primary-foreground rounded-2xl p-8 relative"
          >
            <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/30" />
            <p className="text-lg md:text-xl leading-relaxed text-center relative z-10">
              "Most founders who apply directly get rejected not because their idea is bad, 
              but because their documentation doesn't match what programs are actually looking for. 
              We've reviewed 200+ applications — <span className="text-accent font-semibold">we know exactly what works.</span>"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
