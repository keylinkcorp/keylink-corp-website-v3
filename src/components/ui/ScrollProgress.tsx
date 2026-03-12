import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressProps {
  sections: { id: string; label: string }[];
  className?: string;
}

export function ScrollProgress({ sections, className = "" }: ScrollProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Progress track */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/30">
        <motion.div
          className="w-full bg-accent origin-top"
          style={{ height: progressHeight }}
        />
      </div>

      {/* Section indicators */}
      <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-between py-4">
        {sections.map((section, index) => {
          const sectionProgress = index / (sections.length - 1);
          
          return (
            <motion.div
              key={section.id}
              className="relative -ml-1.5"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
            >
              <motion.div
                className="w-3.5 h-3.5 rounded-full border-2 border-accent bg-background transition-all duration-300"
                style={{
                  boxShadow: "0 0 10px rgba(199, 167, 99, 0.3)",
                }}
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
                {section.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
