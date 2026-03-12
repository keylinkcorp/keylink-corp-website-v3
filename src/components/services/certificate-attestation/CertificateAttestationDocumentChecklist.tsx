import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { GraduationCap, Briefcase, User, FileText, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentCategories = [
  {
    icon: GraduationCap,
    title: "Educational Certificates",
    documents: [
      "Original certificate (degree/diploma/transcript)",
      "Copy of passport (front page)",
      "Authorization letter (if submitted by third party)"
    ]
  },
  {
    icon: Briefcase,
    title: "Commercial Documents",
    documents: [
      "Original document (contract/POA/company papers)",
      "Company CR copy",
      "Company authorization letter",
      "Signatory ID copy"
    ]
  },
  {
    icon: User,
    title: "Personal Documents",
    documents: [
      "Original certificate (birth/marriage)",
      "Passport copies of all parties mentioned",
      "Supporting documents (varies by requirement)"
    ]
  }
];

export function CertificateAttestationDocumentChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Document Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Documents Do You Need?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Requirements vary by document type. Here's a general guide — we'll provide a specific checklist for your situation.
            </p>
          </motion.div>

          {/* Document Categories Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {documentCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-2xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Important Note */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Not sure what you need?</h4>
                <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                  Send us a photo of your document and tell us the destination country. We'll provide a complete checklist within the hour.
                </p>
              </div>
              <Button 
                asChild
                className="bg-accent hover:bg-accent/90 text-primary font-semibold whitespace-nowrap"
              >
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  Get Free Review
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
