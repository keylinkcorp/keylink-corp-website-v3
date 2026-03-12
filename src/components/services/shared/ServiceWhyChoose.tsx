import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { LucideIcon } from "lucide-react";

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceWhyChooseProps {
  badge?: string;
  title: string;
  subtitle?: string;
  differentiators: Differentiator[];
  imageSrc?: string;
  imageAlt?: string;
  floatingStatValue?: string;
  floatingStatLabel?: string;
}

export function ServiceWhyChoose({
  badge = "Why Keylink",
  title,
  subtitle,
  differentiators,
  imageSrc,
  imageAlt = "Why choose Keylink",
  floatingStatValue,
  floatingStatLabel
}: ServiceWhyChooseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">{badge}</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-10">
                {subtitle}
              </motion.p>
            )}

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Stats Card */}
                {floatingStatValue && floatingStatLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-sm border border-border"
                  >
                    <div className="text-2xl font-bold text-primary">{floatingStatValue}</div>
                    <div className="text-sm text-muted-foreground">{floatingStatLabel}</div>
                  </motion.div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/10 rounded-2xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
