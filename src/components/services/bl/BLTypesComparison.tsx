import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  ShoppingCart, 
  Factory, 
  Briefcase, 
  Building2
} from "lucide-react";

const TRUNCATE_LENGTH = 100;

const licenseTypes = [
  {
    id: "commercial",
    icon: ShoppingCart,
    name: "Commercial License",
    shortDescription: "Trading, retail, import/export, e-commerce",
    fullContent: "Best for trading, retail, import/export, and e-commerce businesses. Government fee ranges from BHD 50-200/year per activity, processing takes 3-5 business days. Typical activities include general trading, wholesale & distribution, commercial agencies, and retail operations. Available for WLL, SPC, and Branch Office entities."
  },
  {
    id: "industrial",
    icon: Factory,
    name: "Industrial License",
    shortDescription: "Manufacturing, production, assembly",
    fullContent: "Designed for manufacturing, production, and assembly operations. Government fee ranges from BHD 100-300/year, processing takes 5-10 business days. Covers factory operations, industrial processing, fabrication, and assembly plants. Typically used with WLL or Holding Company structures."
  },
  {
    id: "professional",
    icon: Briefcase,
    name: "Professional License",
    shortDescription: "Consultants, freelancers, service providers",
    fullContent: "Ideal for consultants, freelancers, and service providers. Government fee ranges from BHD 50-100/year, processing takes 3-5 business days. Covers legal & accounting, IT consulting, engineering services, and management consulting. Best suited for SPC (Single Person Company) structure."
  },
  {
    id: "services",
    icon: Building2,
    name: "Services License",
    shortDescription: "Hospitality, tourism, healthcare, education",
    fullContent: "Perfect for hospitality, tourism, healthcare, and education sectors. Government fee ranges from BHD 100-250/year, processing takes 5-7 business days. Covers restaurants & hotels, clinics & healthcare, training centers, and tourism services. Available for WLL and Branch structures."
  }
];

export function BLTypesComparison() {
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

  const shouldShowToggle = (content: string) => content.length > TRUNCATE_LENGTH;
  
  const getTruncatedText = (text: string) => {
    if (text.length <= TRUNCATE_LENGTH) return text;
    return text.slice(0, TRUNCATE_LENGTH).trim() + "...";
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Building2 className="w-4 h-4" />
              License Categories
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose the Right <span className="text-accent">License for Your Business</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bahrain offers four main license categories based on your business activities
          </motion.p>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {licenseTypes.map((type, index) => {
            const isExpanded = expandedCards.includes(index);
            const displayContent = isExpanded ? type.fullContent : type.shortDescription;
            const hasLongContent = shouldShowToggle(type.fullContent);

            return (
              <motion.div
                key={type.id}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{type.name}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isExpanded ? displayContent : getTruncatedText(type.shortDescription)}
                </p>
                
                {hasLongContent && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-accent text-sm font-medium mt-3 hover:underline"
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
