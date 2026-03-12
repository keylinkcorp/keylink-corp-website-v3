import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { LucideIcon, Info, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface KeyFact {
  icon: LucideIcon;
  label: string;
  text: string;
}

interface SimpleFact {
  icon: LucideIcon;
  text: string;
}

interface Benefit {
  icon: LucideIcon;
  text: string;
}

interface Callout {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface ServiceExplainerProps {
  // Header
  badge: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  
  // Content
  paragraphs: React.ReactNode[];
  keyFacts?: KeyFact[];
  simpleFacts?: SimpleFact[];
  callout?: Callout;
  
  // Benefits Panel (right side)
  panelTitle: string;
  panelSubtitle: string;
  benefits: Benefit[];
  panelFooter?: {
    icon: LucideIcon;
    text: string;
  };
  
  // Styling
  className?: string;
}

export function ServiceExplainer({
  badge,
  badgeIcon: BadgeIcon = Info,
  title,
  paragraphs,
  keyFacts,
  simpleFacts,
  callout,
  panelTitle,
  panelSubtitle,
  benefits,
  panelFooter,
  className
}: ServiceExplainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={cn("py-24 md:py-32 relative overflow-hidden", className)}>
      {/* Background Pattern - Ellipse mask fade dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10 mb-4">
                <BadgeIcon className="w-4 h-4" />
                {badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              {title}
            </motion.h2>
            
            {/* Paragraphs */}
            <motion.div variants={staggerItem} className="prose prose-lg text-muted-foreground mb-10">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Key Facts Grid (with labels) */}
            {keyFacts && keyFacts.length > 0 && (
              <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 mb-10">
                {keyFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col gap-2 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <fact.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{fact.label}</span>
                    </div>
                    <span className="text-sm font-bold">{fact.text}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Simple Facts Grid (without labels) */}
            {simpleFacts && simpleFacts.length > 0 && (
              <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 mb-10">
                {simpleFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{fact.text}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Callout Box */}
            {callout && (
              <motion.div 
                variants={staggerItem}
                className="flex gap-4 p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <callout.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{callout.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {callout.text}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {panelTitle}
                </h3>
                <p className="text-white/70 mb-8 text-lg relative z-10">
                  {panelSubtitle}
                </p>
                
                <div className="space-y-4 relative z-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                {panelFooter && (
                  <div className="mt-10 pt-6 border-t border-white/20 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <panelFooter.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-bold text-lg">{panelFooter.text}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
