import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Settings, 
  Users, 
  TrendingUp, 
  Edit3, 
  MapPin, 
  UserCog,
  Building2,
  ArrowRight,
  Clock,
  Zap
} from "lucide-react";

const amendmentTypes = [
  {
    icon: Settings,
    title: "Activity Changes",
    description: "Add or remove commercial activities from your CR",
    timeline: "2-3 days"
  },
  {
    icon: Users,
    title: "Shareholder Transfers",
    description: "Transfer shares or add/remove shareholders",
    timeline: "3-5 days"
  },
  {
    icon: TrendingUp,
    title: "Capital Adjustments",
    description: "Increase or decrease registered share capital",
    timeline: "3-5 days"
  },
  {
    icon: Edit3,
    title: "Company Name Change",
    description: "Update your registered company name",
    timeline: "3-5 days"
  },
  {
    icon: MapPin,
    title: "Address Change",
    description: "Update registered office address",
    timeline: "2-3 days"
  },
  {
    icon: UserCog,
    title: "Signatory Updates",
    description: "Add, remove, or change authorized signatories",
    timeline: "2-3 days"
  },
  {
    icon: Building2,
    title: "Entity Conversion",
    description: "Convert between company types (e.g., SPC to WLL)",
    timeline: "5-10 days"
  },
  {
    icon: Users,
    title: "Manager/Director Changes",
    description: "Update management or board composition",
    timeline: "3-5 days"
  }
];

export function CRAmendmentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
                <Settings className="w-4 h-4" />
                CR Amendments
              </span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Need to Modify Your{" "}
              <span className="text-accent">Commercial Registration</span>?
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Business needs change. Whether you're expanding activities, restructuring ownership, 
              or updating company details, we handle all types of CR amendments efficiently through 
              the MOIC SIJILAT system.
            </motion.p>

            <motion.div variants={staggerItem} className="space-y-5 mb-10">
              <div className="flex items-center gap-4 p-5 bg-accent/5 rounded-2xl border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg">Fast Processing</div>
                  <div className="text-muted-foreground">Most amendments complete in 2-5 business days</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-primary/5 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg">Full-Service Handling</div>
                  <div className="text-muted-foreground">We manage all MOIC submissions and follow-ups</div>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={staggerItem}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              Request CR Amendment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Amendment Types Grid - Enhanced */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-5"
          >
            {amendmentTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border-2 border-border hover:border-accent shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:to-accent/10 flex items-center justify-center flex-shrink-0 transition-all">
                    <type.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1.5 group-hover:text-accent transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-sm font-bold rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      {type.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Have a complex amendment or company restructuring? 
            <a href="/contact" className="text-accent font-bold ml-2 hover:underline">
              Book a consultation for expert guidance →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
