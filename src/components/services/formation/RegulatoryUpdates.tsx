import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Calendar, 
  FileText, 
  Building2, 
  Users, 
  Globe,
  Bell,
  ExternalLink,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const updates = [
  {
    date: "January 2026",
    icon: FileText,
    title: "Digital Business License System",
    description: "MOIC launches enhanced SIJILAT 2.0 platform with faster processing times and automated approvals for standard commercial activities.",
    source: "MOIC",
    sourceLink: "https://www.moic.gov.bh",
    category: "Digital",
  },
  {
    date: "December 2025",
    icon: Building2,
    title: "Remote Company Formation Expansion",
    description: "New regulations allow complete remote registration for additional business categories without physical presence requirement.",
    source: "MOIC",
    sourceLink: "https://www.moic.gov.bh",
    category: "Formation",
  },
  {
    date: "November 2025",
    icon: Users,
    title: "Flexible Work Visa Scheme Update",
    description: "LMRA introduces enhanced flexi-permit options with expanded eligible activities and simplified renewal process.",
    source: "LMRA",
    sourceLink: "https://www.lmra.bh",
    category: "Visa",
  },
  {
    date: "October 2025",
    icon: Globe,
    title: "New Business Activities Added",
    description: "Over 30 new commercial activities added to the SIJILAT registry including blockchain services, AI consulting, and green technology sectors.",
    source: "MOIC",
    sourceLink: "https://www.moic.gov.bh",
    category: "Activities",
  },
  {
    date: "September 2025",
    icon: FileText,
    title: "Commercial Companies Law Amendment",
    description: "Updated provisions for shareholder meetings, digital voting, and electronic document submission for company compliance.",
    source: "MOIC",
    sourceLink: "https://www.moic.gov.bh",
    category: "Legal",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Digital": return "bg-blue-100 text-blue-700";
    case "Formation": return "bg-green-100 text-green-700";
    case "Visa": return "bg-purple-100 text-purple-700";
    case "Activities": return "bg-orange-100 text-orange-700";
    case "Legal": return "bg-gray-100 text-gray-700";
    default: return "bg-muted text-muted-foreground";
  }
};

export function RegulatoryUpdates() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern - Subtle dots */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Last Updated: February 2026</span>
            </div>
          </motion.div>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Latest Bahrain Business Regulations
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Stay informed about the latest regulatory updates affecting company formation and 
            business operations in Bahrain for 2025-2026.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Updates */}
            <div className="space-y-8">
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-6 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-sm" />
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-primary/10 text-primary border-0 font-medium">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      {update.date}
                    </Badge>
                    <Badge className={`border-0 text-xs ${getCategoryColor(update.category)}`}>
                      {update.category}
                    </Badge>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl border border-border p-5 hover:border-accent/40 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <update.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">{update.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {update.description}
                        </p>
                        <a 
                          href={update.sourceLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline"
                        >
                          Source: {update.source}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-6 md:p-8 text-center border border-border">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Bell className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We monitor regulatory changes and update our clients proactively. 
              Schedule a consultation to discuss how these changes affect your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                <a href="https://www.moic.gov.bh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">MOIC Official</a>
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                <a href="https://www.lmra.bh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LMRA Official</a>
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                <a href="https://www.sijilat.bh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">SIJILAT Portal</a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
