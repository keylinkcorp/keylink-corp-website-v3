import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Building2, 
  FileText,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const individualRequirements = [
  "Valid passport copy (minimum 6 months validity)",
  "Professional CV/resume",
  "Proof of residential address (utility bill or bank statement)",
  "Passport-size photograph (white background)",
  "Business plan outline (brief description of activities)"
];

const corporateRequirements = [
  "Certificate of incorporation (attested)",
  "Board resolution authorizing Bahrain company formation",
  "Parent company Commercial Registration",
  "Audited financial statements (last 2 years)",
  "Power of Attorney for authorized signatory"
];

export function SPCRequirements() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <FileText className="w-4 h-4" />
              Documentation
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            SPC <span className="text-gold">Requirements Checklist</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Documents needed to register your Single Person Company in Bahrain
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1 bg-secondary/50 rounded-xl">
              <TabsTrigger 
                value="individual" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg h-12 font-semibold flex items-center gap-2"
              >
                <User className="w-5 h-5" />
                Individual Owner
              </TabsTrigger>
              <TabsTrigger 
                value="corporate" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg h-12 font-semibold flex items-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                Corporate Shareholder
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-0">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-gold" />
                  </div>
                  Individual Owner Requirements
                </h3>
                <div className="space-y-4">
                  {individualRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/40 rounded-xl hover:bg-gold/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gold/5 rounded-xl border border-gold/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Pro tip:</span> All documents should be 
                    recent (within 3 months) and may need to be attested depending on your country of origin.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="corporate" className="mt-0">
              <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  Corporate Shareholder Requirements
                </h3>
                <div className="space-y-4">
                  {corporateRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/40 rounded-xl hover:bg-gold/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gold/5 rounded-xl border border-gold/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Important:</span> Corporate documents 
                    must be apostilled or legalized through the Bahrain embassy in your country of incorporation.
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
