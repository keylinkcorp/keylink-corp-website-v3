import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Users, 
  Building2, 
  Landmark
} from "lucide-react";

const TRUNCATE_LENGTH = 100;

const companyTypes = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company",
    shortDescription: "Solo entrepreneurs",
    fullContent: "Perfect for solo entrepreneurs. 100% foreign ownership allowed with minimum capital of BHD 50. Only 1 shareholder required, timeline of 3-5 days. Starting price from BHD 750."
  },
  {
    id: "wll",
    icon: Users,
    name: "Limited Liability Company",
    shortDescription: "Partnerships & SMEs",
    fullContent: "Ideal for partnerships and SMEs. 100% foreign ownership allowed with minimum capital of BHD 20,000. Requires 2-50 shareholders, timeline of 5-7 days. Starting price from BHD 1,200."
  },
  {
    id: "branch",
    icon: Building2,
    name: "Branch of Foreign Company",
    shortDescription: "Foreign expansion",
    fullContent: "Best for foreign companies expanding to Bahrain. 100% ownership retained by parent company. Uses parent's capital, timeline of 7-10 days. Starting price from BHD 1,500."
  },
  {
    id: "holding",
    icon: Landmark,
    name: "Bahrain Holding Company",
    shortDescription: "Investment vehicles",
    fullContent: "Designed for investment vehicles and group structures. 100% foreign ownership allowed with minimum capital of BHD 250,000. Requires 1+ shareholders, timeline of 7-10 days. Starting price from BHD 2,500."
  }
];

export function CompanyTypesComparison() {
  const ref = useRef<HTMLElement>(null);
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
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Company Types
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Choose the Right Company Structure
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Select the business entity that best fits your goals. All structures allow 100% foreign ownership.
          </p>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {companyTypes.map((type, index) => {
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
