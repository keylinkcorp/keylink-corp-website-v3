import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, CheckCircle2, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const requirementTabs = [
  {
    id: "drafting",
    label: "New MOA",
    items: [
      "Valid passport copies of all shareholders",
      "Proof of address for registered office",
      "Proposed company name (3 options)",
      "Business activity descriptions",
      "Capital contribution details per shareholder",
      "Management appointment decision"
    ]
  },
  {
    id: "amendment",
    label: "Amendment",
    items: [
      "Current MOA copy (notarized)",
      "Current CR certificate",
      "Board resolution authorizing amendment",
      "Updated shareholder details (if applicable)",
      "New activity descriptions (if changing scope)"
    ]
  },
  {
    id: "notarization",
    label: "Notarization",
    items: [
      "Existing MOA document",
      "Shareholder ID documents",
      "Physical presence or POA for signatories",
      "Translation (if original not in Arabic)"
    ]
  },
  {
    id: "attestation",
    label: "Attestation",
    items: [
      "Notarized MOA copy",
      "Ministry of Foreign Affairs attestation",
      "Embassy/consulate legalization (destination country)",
      "Apostille (Hague Convention countries)"
    ]
  }
];

export function MOARequirements() {
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
            MOA <span className="text-accent">Requirements</span> by Service
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Document checklists for each MOA service type
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="drafting" className="w-full">
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
                  <h3 className="text-xl font-bold mb-6">{tab.label} Documents</h3>
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
                <h4 className="font-bold text-primary mb-2">Document Requirements Vary</h4>
                <p className="text-muted-foreground">
                  Specific requirements depend on entity type, nationality of shareholders, 
                  and business activities. We provide a tailored checklist during your free consultation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
