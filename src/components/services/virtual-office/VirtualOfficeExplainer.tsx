import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Globe, TrendingUp, Clock, Sparkles } from "lucide-react";
import professionalReception from "@/assets/virtual-office/professional-reception.jpg";

const benefits = [
  { icon: Zap, text: "Instant professional business presence" },
  { icon: Shield, text: "CR-compliant business address" },
  { icon: Globe, text: "No long-term lease required" },
  { icon: TrendingUp, text: "Save up to 80% vs physical office" },
  { icon: Clock, text: "Start working immediately" },
];

const facts = [
  { label: "Starting From", value: "BHD 25/mo" },
  { label: "Contract Length", value: "Monthly" },
  { label: "Location", value: "Sanabis Tower" },
  { label: "Setup Time", value: "Same Day" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function VirtualOfficeExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Clean Dot Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute h-full w-full bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 50%, transparent 100%)',
          }}
        />
      </div>
      {/* Subtle gold accent */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 50% 40% at 80% 20%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Column - SEO Enhanced */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">What is a Virtual Office?</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Business Address Solutions in Bahrain
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong>virtual office in Bahrain</strong> provides businesses with a professional 
                business address and essential office services without the cost of physical office space. 
                This innovative solution is ideal for entrepreneurs, startups, freelancers, and international 
                companies looking to establish a <strong>registered business presence in Bahrain</strong> without 
                the overhead of traditional office leases.
              </p>
              <p>
                At Keylink Corp's <strong>virtual office in Sanabis</strong>, you'll receive a prestigious 
                business address at Exhibition Tower that can be used for your <strong>Commercial Registration (CR)</strong>, 
                professional mail handling and forwarding services, a dedicated business phone line with 
                call answering, and access to fully-equipped meeting rooms for client presentations—all 
                without maintaining a physical office.
              </p>
              <p>
                <strong>Virtual office services in Bahrain</strong> are particularly valuable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Foreign companies</strong> establishing a Bahrain presence without relocating staff</li>
                <li><strong>Remote entrepreneurs</strong> needing a professional business address for CR registration</li>
                <li><strong>Startups</strong> minimizing overhead while maintaining a prestigious image</li>
                <li><strong>Freelancers and consultants</strong> separating home and business addresses</li>
                <li><strong>Established businesses</strong> expanding into Bahrain's growing market</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Benefits Panel (Navy for contrast) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground overflow-hidden"
          >
            <div className="relative z-10">
              {/* Reception Image */}
              <div className="relative rounded-xl overflow-hidden mb-6 group">
                <img 
                  src={professionalReception} 
                  alt="Professional virtual office reception in Bahrain"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Key Benefits</span>
              </div>

              <h3 className="text-xl font-semibold mb-6">
                Why Choose a Virtual Office in Bahrain?
              </h3>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-primary-foreground/80 pt-2">{benefit.text}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary-foreground/10 rounded-xl p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xs text-primary-foreground/50 mb-1">{fact.label}</div>
                    <div className="text-lg font-bold text-accent">{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
