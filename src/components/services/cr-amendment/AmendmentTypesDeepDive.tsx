import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Users, 
  DollarSign, 
  Edit, 
  MapPin, 
  UserCheck, 
  RefreshCw, 
  Briefcase
} from "lucide-react";

const amendmentTypes = [
  {
    icon: FileText,
    title: "Activity Changes",
    description: "Adding or removing commercial activities is the most requested CR amendment. Businesses expand into new markets, pivot their offerings, or streamline operations. Each activity on your CR must match an approved ISIC4 code from the MOIC classification system.",
    details: "You can add multiple activities in a single amendment. Some activities require additional sector approvals—financial services need CBB clearance, food businesses need municipal permits. We handle all coordination."
  },
  {
    icon: Users,
    title: "Shareholder Transfers",
    description: "Transferring shares or adding new shareholders changes your CR ownership structure. This applies to WLLs, holding companies, and any multi-partner arrangement.",
    details: "The amendment requires notarized share transfer agreements and updated MOA documentation. Foreign shareholder additions may need security clearance from the Ministry of Interior, extending processing by 3-5 days."
  },
  {
    icon: DollarSign,
    title: "Capital Adjustments",
    description: "Increasing or decreasing your registered capital reflects changes in your business investment.",
    details: "Capital increases are straightforward—deposit additional funds, update the CR. Decreases require creditor notification periods and MOIC approval to protect third-party interests."
  },
  {
    icon: Edit,
    title: "Trade Name Change",
    description: "Rebranding your business requires a new trade name registration.",
    details: "MOIC must approve the new name—it cannot duplicate existing registrations or violate naming guidelines. Name reservation expires after 60 days, so coordinate your branding timeline."
  },
  {
    icon: MapPin,
    title: "Address Change",
    description: "Relocating your registered office address is a quick amendment.",
    details: "You need a valid lease agreement or flexi-desk contract for the new location. Some free zones have specific address requirements."
  },
  {
    icon: UserCheck,
    title: "Signatory Updates",
    description: "Adding or removing authorized signatories affects who can legally bind your company.",
    details: "New signatories need valid CPR or passport documentation. Banks require updated signatory cards before processing transactions."
  },
  {
    icon: RefreshCw,
    title: "Entity Conversion",
    description: "Converting between entity types—SPC to WLL, or vice versa—is the most complex amendment.",
    details: "It affects capital requirements, shareholder structures, and sometimes requires fresh banking documentation. Plan for 5-10 days processing."
  },
  {
    icon: Briefcase,
    title: "Manager/Director Changes",
    description: "Updating management positions or board composition reflects your current leadership.",
    details: "Required documents include board resolutions and updated signatory information. LMRA may need notification for visa-sponsored managers."
  }
];

const TRUNCATE_LENGTH = 100;

export function AmendmentTypesDeepDive() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const shouldShowToggle = (description: string, details: string) => {
    return (description.length + details.length) > TRUNCATE_LENGTH;
  };

  const getTruncatedText = (text: string) => {
    if (text.length <= TRUNCATE_LENGTH) return text;
    return text.slice(0, TRUNCATE_LENGTH).trim() + "...";
  };

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Ellipse mask fade pattern */}
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileText className="w-4 h-4" />
              Amendment Services
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Types of <span className="text-accent">CR Amendment</span> in Bahrain
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle all CR modification types through Sijilat with expert processing
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {amendmentTypes.map((type, index) => {
            const isExpanded = expandedCards.includes(index);
            const hasLongContent = shouldShowToggle(type.description, type.details);
            const fullContent = `${type.description} ${type.details}`;
            
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{type.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isExpanded || !hasLongContent 
                    ? fullContent 
                    : getTruncatedText(type.description)
                  }
                </p>
                
                {hasLongContent && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-accent text-sm font-medium mt-3 hover:underline transition-all"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
