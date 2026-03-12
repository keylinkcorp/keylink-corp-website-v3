import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, CheckCircle2, Info } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function SPCLegalUpdate() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bulletPoints = [
    "SPC merged into single-shareholder WLL framework",
    "Same benefits, enhanced legal recognition",
    "Keylink handles all technical requirements"
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dashed grid pattern with top fade */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {/* Alert Card */}
          <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
            {/* Gold accent border */}
            <div className="h-1 bg-gold" />
            
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-bold rounded-lg">
                      Decree 28/2020
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    2020 Legal Update: What Changed?
                  </h3>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Under Bahrain's amended Commercial Companies Law (Decree 28/2020), the Single Person Company (SPC) 
                has been formally merged into the WLL (Limited Liability Company) framework. This means a single 
                shareholder can now form a WLL—gaining enhanced legal recognition while keeping all the original 
                SPC benefits.
              </p>

              <div className="space-y-4 mb-8">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gold/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-medium text-primary">{point}</span>
                  </div>
                ))}
              </div>

              {/* Info note */}
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl border border-border">
                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">What this means for you:</span> When you register 
                  an SPC with Keylink, we handle the technical classification automatically. You still get the 
                  simple, single-owner structure you want—with the legal backing of Bahrain's established WLL framework.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
