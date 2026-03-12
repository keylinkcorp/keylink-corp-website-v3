import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const content = {
  mission: { icon: Target, title: "Our Mission", text: "To empower entrepreneurs and businesses by providing seamless, efficient, and fully compliant company formation services in Bahrain." },
  vision: { icon: Eye, title: "Our Vision", text: "To be the most trusted and preferred partner for business formation in the Gulf region, recognized for our integrity, expertise, and commitment to client success." },
};

export function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-gold/10 rounded-2xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-gold/10 to-primary/5 aspect-[3/4] flex items-center justify-center">
              <div className="text-center p-8"><Award className="w-16 h-16 text-gold mx-auto mb-4" /><p className="text-2xl font-bold text-primary">10+</p><p className="text-sm text-muted-foreground">Years of Excellence</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
            <div>
              <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">Our Purpose</p>
              <h2 className="text-[36px] md:text-[44px] font-bold text-primary mb-4 tracking-tight leading-[1.15]">Building Tomorrow's Businesses, Today</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Guided by our core values, we're committed to helping entrepreneurs thrive in Bahrain's dynamic market.</p>
            </div>
            {[content.mission, content.vision].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }} className="group">
                <div className="bg-card rounded-xl p-6 border border-border/50 transition-all duration-300 hover:border-gold/50 hover:shadow-md">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-[1.7]">{item.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
