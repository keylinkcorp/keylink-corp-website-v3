import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { LucideIcon } from "lucide-react";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { cn } from "@/lib/utils";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  badge?: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export function ServiceBenefits({
  badge = "Benefits",
  title,
  subtitle,
  benefits
}: ServiceBenefitsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-secondary/40">
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.5} masked />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14 md:mb-16"
        >
          <motion.div variants={staggerItem}>
            <p className="text-sm font-medium text-accent tracking-wide uppercase">{badge}</p>
          </motion.div>
          <motion.h2 variants={staggerItem} className="mt-3 text-balance">
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={cn(
                "card-elevated-hover rounded-2xl p-6",
                // 5 cards: make a balanced 3 + 2 composition on large screens
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
              )}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
