import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, CheckCircle2, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const requirementTabs = [
  {
    id: "activity",
    label: "Activity",
    items: [
      "Current CR copy",
      "Updated trade license application",
      "ISIC4 activity code selection",
      "Sector approvals (if applicable)",
      "eKey authentication"
    ]
  },
  {
    id: "shareholder",
    label: "Shareholder",
    items: [
      "Current CR and MOA copies",
      "Share transfer agreement (notarized)",
      "New shareholder passport/CPR",
      "Security clearance (foreign shareholders)",
      "Updated MOA reflecting new structure",
      "Good Standing Certificate (corporate shareholders)"
    ]
  },
  {
    id: "capital",
    label: "Capital",
    items: [
      "Current CR copy",
      "Board resolution for capital change",
      "Bank statement confirming deposit (increases)",
      "Creditor notification proof (decreases)",
      "Updated MOA"
    ]
  },
  {
    id: "address-name",
    label: "Address/Name",
    items: [
      "Current CR copy",
      "New lease agreement or flexi-desk contract (address)",
      "Name reservation certificate (name change)",
      "Updated trade license application"
    ]
  }
];

export function CRAmendmentRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

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
              Documents Required
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            CR Amendment <span className="text-accent">Requirements</span> by Type
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Document checklists for each amendment category
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-secondary/50">
              {requirementTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {requirementTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">{tab.label} Amendment Documents</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tab.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Note Box */}
          <div className="mt-8 bg-white rounded-2xl border-2 border-accent/30 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Customized Checklist Available</h4>
                <p className="text-muted-foreground">
                  Document requirements vary by amendment complexity. We provide a customized checklist 
                  during your free consultation tailored to your specific amendment needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
