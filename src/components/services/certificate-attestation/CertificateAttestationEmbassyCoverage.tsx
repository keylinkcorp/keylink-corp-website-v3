import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const gccEmbassies = [
  { country: "UAE", flag: "🇦🇪", code: "AE", processingTime: "2-3 days" },
  { country: "Saudi Arabia", flag: "🇸🇦", code: "SA", processingTime: "3-5 days" },
  { country: "Kuwait", flag: "🇰🇼", code: "KW", processingTime: "2-3 days" },
  { country: "Qatar", flag: "🇶🇦", code: "QA", processingTime: "2-3 days" },
  { country: "Oman", flag: "🇴🇲", code: "OM", processingTime: "2-3 days" },
];

const otherEmbassies = [
  { country: "India", flag: "🇮🇳", code: "IN", processingTime: "3-5 days" },
  { country: "Pakistan", flag: "🇵🇰", code: "PK", processingTime: "3-5 days" },
  { country: "Philippines", flag: "🇵🇭", code: "PH", processingTime: "2-3 days" },
  { country: "Egypt", flag: "🇪🇬", code: "EG", processingTime: "3-5 days" }
];

export function CertificateAttestationEmbassyCoverage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Enhanced with decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Decorative blur elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
              Embassy Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              15+ Embassies. One Point of Contact.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have established relationships with major embassies in Bahrain, ensuring smooth and predictable processing for your documents.
            </p>
          </motion.div>

          {/* GCC Section */}
          <motion.div variants={staggerItem} className="mb-8">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 text-center">
              GCC Countries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {gccEmbassies.map((embassy, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 text-center group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {embassy.flag}
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{embassy.code}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{embassy.country}</p>
                  <div className="flex items-center justify-center gap-1.5 text-sm">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent font-medium">{embassy.processingTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Countries Section */}
          <motion.div variants={staggerItem} className="mb-10">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 text-center">
              Other Countries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {otherEmbassies.map((embassy, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-accent/50 hover:shadow-accent/10 transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {embassy.flag}
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{embassy.code}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{embassy.country}</p>
                  <div className="flex items-center justify-center gap-1 text-xs">
                    <Clock className="w-3 h-3 text-accent" />
                    <span className="text-accent font-medium">{embassy.processingTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Note + CTA */}
          <motion.div 
            variants={staggerItem}
            className="text-center"
          >
            <div className="inline-block bg-secondary/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-border">
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Plus 6+ more embassies.</span>{" "}
                Need attestation for a country not listed?
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  Ask About Your Country
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
