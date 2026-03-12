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

const entityTypes = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company (SPC)",
    shortDescription: "Solo entrepreneurs & freelancers",
    fullContent: "Ideal for solo entrepreneurs and freelancers. Minimum capital of BHD 50, 100% foreign ownership allowed, with processing in 3-5 business days. Features include single shareholder structure, simplest formation process, full management control, and lower compliance requirements."
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL (Limited Liability Company)",
    shortDescription: "Partnerships & growing businesses",
    fullContent: "Perfect for partnerships and growing businesses. Minimum capital of BHD 20,000, 100% foreign ownership allowed, with processing in 5-7 business days. Allows 2-50 shareholders, suitable for partnerships, provides credibility with larger clients, offers flexible profit distribution, and is a scalable structure."
  },
  {
    id: "branch",
    icon: Building2,
    name: "Branch Office",
    shortDescription: "Foreign companies expanding to Bahrain",
    fullContent: "Extension of parent company for foreign expansion. No minimum capital required (uses parent company's), with parent company retaining 100% ownership. Processing takes 7-10 business days. Activities are limited to parent's scope, profit repatriation is allowed, and requires parent company financials."
  },
  {
    id: "holding",
    icon: Landmark,
    name: "Holding Company",
    shortDescription: "Investment vehicles & group structures",
    fullContent: "Designed for investment vehicles and multi-company group structures. Minimum capital of BHD 250,000, 100% foreign ownership allowed, with processing in 7-10 business days. Features include ownership of shares in other companies, tax optimization benefits, asset protection, and dividend income focus."
  }
];

export function CRTypesComparison() {
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
              Entity Types
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose Your <span className="text-accent">Company Structure</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare different CR types to find the right structure for your business goals
          </motion.p>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {entityTypes.map((type, index) => {
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
