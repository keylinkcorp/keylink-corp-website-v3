import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

const createFadeVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay
    }
  }
});

export function SectionWrapper({ 
  children, 
  className = "",
  delay = 0,
  stagger = false
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.1
  });

  const variants: Variants = stagger ? staggerContainer : createFadeVariants(delay);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Wrapper for individual items in staggered animations
export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
