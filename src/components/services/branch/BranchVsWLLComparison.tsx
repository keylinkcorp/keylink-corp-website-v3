import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitCompare, Check, X, ArrowRight, Building2, Users, Briefcase } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type EntityType = "branch" | "wll" | "repOffice";

const entities = [
  { id: "branch" as EntityType, name: "Branch Office", icon: Building2, color: "accent" },
  { id: "wll" as EntityType, name: "WLL (Subsidiary)", icon: Users, color: "primary" },
  { id: "repOffice" as EntityType, name: "Representative Office", icon: Briefcase, color: "muted-foreground" },
];

const comparisonData = [
  {
    attribute: "Legal Status",
    branch: "Extension of parent",
    wll: "Separate legal entity",
    repOffice: "Liaison office only",
  },
  {
    attribute: "Foreign Ownership",
    branch: "100%",
    wll: "100%",
    repOffice: "100%",
  },
  {
    attribute: "Liability",
    branch: "Parent company liable",
    wll: "Limited to capital",
    repOffice: "Parent company liable",
  },
  {
    attribute: "Commercial Activities",
    branch: "Full trading allowed",
    wll: "Full trading allowed",
    repOffice: "Marketing only—no trading",
  },
  {
    attribute: "Minimum Capital",
    branch: "No requirement",
    wll: "BHD 50 (SPC) / 20,000 (WLL)",
    repOffice: "No requirement",
  },
  {
    attribute: "Employee Visas",
    branch: "Yes—full visa sponsorship",
    wll: "Yes—full visa sponsorship",
    repOffice: "Limited—typically 2-3 max",
  },
  {
    attribute: "Setup Time",
    branch: "7-10 days",
    wll: "10-14 days",
    repOffice: "5-7 days",
  },
  {
    attribute: "Best For",
    branch: "Regional operations, project offices",
    wll: "Long-term local presence",
    repOffice: "Market research only",
  },
];

export function BranchVsWLLComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeEntity, setActiveEntity] = useState<EntityType>("branch");

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <GitCompare className="w-4 h-4" />
              Entity Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Branch vs WLL vs{" "}
              <span className="text-accent">Representative Office</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the right entity structure for your business objectives in Bahrain
            </p>
          </motion.div>

          {/* Entity Tabs */}
          <motion.div variants={staggerItem} className="flex justify-center gap-4 mb-12">
            {entities.map((entity) => (
              <button
                key={entity.id}
                onClick={() => setActiveEntity(entity.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all",
                  activeEntity === entity.id
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-white text-muted-foreground border border-border hover:border-accent"
                )}
              >
                <entity.icon className="w-5 h-5" />
                {entity.name}
              </button>
            ))}
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={staggerItem} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-border shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-primary text-white">
                <div className="p-4 font-semibold border-r border-white/10">Attribute</div>
                <div className={cn(
                  "p-4 font-semibold border-r border-white/10 text-center",
                  activeEntity === "branch" && "bg-accent text-primary"
                )}>
                  Branch Office
                </div>
                <div className={cn(
                  "p-4 font-semibold border-r border-white/10 text-center",
                  activeEntity === "wll" && "bg-accent text-primary"
                )}>
                  WLL (Subsidiary)
                </div>
                <div className={cn(
                  "p-4 font-semibold text-center",
                  activeEntity === "repOffice" && "bg-accent text-primary"
                )}>
                  Rep Office
                </div>
              </div>

              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "grid grid-cols-4",
                    index % 2 === 0 ? "bg-secondary/30" : "bg-white"
                  )}
                >
                  <div className="p-4 font-medium text-primary border-r border-border">
                    {row.attribute}
                  </div>
                  <div className={cn(
                    "p-4 text-center text-sm border-r border-border",
                    activeEntity === "branch" ? "bg-accent/10 font-semibold text-primary" : "text-muted-foreground"
                  )}>
                    {row.branch}
                  </div>
                  <div className={cn(
                    "p-4 text-center text-sm border-r border-border",
                    activeEntity === "wll" ? "bg-accent/10 font-semibold text-primary" : "text-muted-foreground"
                  )}>
                    {row.wll}
                  </div>
                  <div className={cn(
                    "p-4 text-center text-sm",
                    activeEntity === "repOffice" ? "bg-accent/10 font-semibold text-primary" : "text-muted-foreground"
                  )}>
                    {row.repOffice}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Panel */}
          <motion.div variants={staggerItem} className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Not sure which entity type is right for your business?
            </p>
            <Link to="/free-consultation">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary h-14 px-8 rounded-xl font-semibold">
                Get Expert Advice
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
