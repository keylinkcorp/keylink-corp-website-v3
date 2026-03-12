import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  FileText,
  CheckCircle2,
  Globe
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const spcWllRequirements = [
  "Board Resolution for Liquidation",
  "Liquidator Appointment Letter",
  "Latest Audited Financial Statements",
  "LMRA Clearance Certificate",
  "SIO/GOSI Clearance Certificate",
  "NBR Tax Clearance",
  "Bank Closure Confirmation",
  "Final Liquidation Report"
];

const branchRequirements = [
  "Parent Company Resolution",
  "Power of Attorney (if remote)",
  "Manager Visa Cancellation",
  "LMRA Clearance Certificate",
  "Bank Account Closure",
  "Lease Termination Confirmation"
];

const holdingRequirements = [
  "Subsidiary Closure Certificates (all)",
  "Consolidated Final Audit",
  "Shareholder Distribution Schedule",
  "Board Resolution for Liquidation",
  "All SPC/WLL requirements listed above"
];

export function LiquidationRequirements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

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
              Documentation
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Liquidation <span className="text-accent">Requirements Checklist</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Documents needed to close your company in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="spc-wll" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-14 p-1 bg-secondary/50 rounded-xl">
              <TabsTrigger 
                value="spc-wll" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg h-12 font-semibold flex items-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                SPC / WLL
              </TabsTrigger>
              <TabsTrigger 
                value="branch" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg h-12 font-semibold flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Branch Office
              </TabsTrigger>
              <TabsTrigger 
                value="holding" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg h-12 font-semibold flex items-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                Holding Co.
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="spc-wll" className="mt-0">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  SPC / WLL Requirements
                </h3>
                <div className="space-y-4">
                  {spcWllRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/40 rounded-xl hover:bg-accent/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Note:</span> WLLs require a final audit 
                    before liquidation. SPCs may not require a formal audit unless requested by stakeholders.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="branch" className="mt-0">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  Branch Office Requirements
                </h3>
                <div className="space-y-4">
                  {branchRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/40 rounded-xl hover:bg-accent/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Important:</span> Branch closure requires 
                    parent company authorization. We can handle the entire process remotely with a valid Power of Attorney.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="holding" className="mt-0">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  Holding Company Requirements
                </h3>
                <div className="space-y-4">
                  {holdingRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/40 rounded-xl hover:bg-accent/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Critical:</span> All subsidiaries must be 
                    closed before the holding company can be liquidated. We coordinate multi-entity closures.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
