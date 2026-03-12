import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, LucideIcon } from "lucide-react";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

interface RelatedService {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  price?: string;
}

interface RelatedServicesGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  services: RelatedService[];
  currentService?: string; // To exclude from the list
}

export function RelatedServicesGrid({
  badge = "Related Services",
  title,
  subtitle,
  services,
  currentService
}: RelatedServicesGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter out current service
  const filteredServices = currentService 
    ? services.filter(s => s.href !== currentService)
    : services;

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-secondary/40">
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.5} masked />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-14"
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Link
                to={service.href}
                className="group block card-elevated-hover rounded-2xl p-6 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-sm font-medium text-accent mb-3">
                    From {service.price}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
