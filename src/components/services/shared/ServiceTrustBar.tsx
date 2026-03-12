import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LucideIcon } from "lucide-react";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

interface ServiceTrustBarProps {
  stats: Stat[];
}

export function ServiceTrustBar({ stats }: ServiceTrustBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing-sm relative overflow-hidden bg-background">
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.55} masked />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="card-elevated p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-4 md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-muted">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl md:text-3xl font-bold text-primary">
                          {isInView ? (
                            <AnimatedCounter value={stat.value} duration={2} />
                          ) : (
                            0
                          )}
                        </span>
                        {stat.suffix ? (
                          <span className="text-sm md:text-base text-muted-foreground font-semibold">
                            {stat.suffix}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
