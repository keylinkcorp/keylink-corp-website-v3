import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Users, 
  Building2, 
  Landmark,
  FileText
} from "lucide-react";

const TRUNCATE_LENGTH = 100;

const moaTypes = [
  {
    id: "spc",
    icon: User,
    name: "SPC Memorandum",
    shortDescription: "Solo entrepreneurs with simplified structure",
    fullContent: "Single shareholder MOA with streamlined clauses. Minimum capital BHD 50. Includes: company objectives, sole shareholder details, capital amount, registered address, management by shareholder. No partner consent requirements. Fastest to draft at 24 hours."
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL Memorandum",
    shortDescription: "Partnerships with detailed governance",
    fullContent: "Multi-shareholder MOA requiring Article 15 compliance. Includes all SPC clauses plus: share distribution percentages, profit/loss allocation, management appointment rules, share transfer restrictions, partner meeting procedures, and dissolution terms. Typical drafting: 24-48 hours."
  },
  {
    id: "branch",
    icon: Building2,
    name: "Branch Office MOA",
    shortDescription: "Extension of parent company",
    fullContent: "Reference document connecting to parent company's MOA. Includes: parent company details, branch manager appointment, scope of activities (limited to parent's), registered address in Bahrain. Requires attested parent MOA and board resolution. Drafting: 48-72 hours."
  },
  {
    id: "holding",
    icon: Landmark,
    name: "Holding Company MOA",
    shortDescription: "Investment vehicle structure",
    fullContent: "Specialized MOA for companies holding shares in subsidiaries. Minimum capital BHD 250,000. Includes: investment objectives, subsidiary ownership structure, dividend distribution rules, board governance. Most complex drafting: 48-72 hours."
  }
];

export function MOATypesComparison() {
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
              <FileText className="w-4 h-4" />
              MOA by Entity Type
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose Your <span className="text-accent">MOA Format</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each entity type requires specific MOA clauses and structure
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {moaTypes.map((type, index) => {
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
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
                
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
