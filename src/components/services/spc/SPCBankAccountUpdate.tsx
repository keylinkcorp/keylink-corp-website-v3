import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock, HelpCircle } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bankMeetingImage from "@/assets/bank-account-meeting.jpg";

const accordionData = [
  {
    id: "requirements",
    title: "Key Requirements",
    icon: CheckCircle2,
    content: [
      "Bank account must be opened before final CR issuance",
      "Minimum capital (BHD 50 for SPC) deposited and confirmed",
      "Account requirement applies to all company types in Bahrain"
    ]
  },
  {
    id: "timeline",
    title: "Timeline Impact",
    icon: Clock,
    content: [
      "Adds 3-5 business days to overall registration timeline",
      "Process can run parallel to other approval stages",
      "Early application recommended for faster completion"
    ]
  },
  {
    id: "help",
    title: "How Keylink Helps",
    icon: HelpCircle,
    content: [
      "Bank selection guidance based on your business needs",
      "Complete account opening assistance and documentation",
      "Coordination with banks for faster processing"
    ]
  }
];

export function SPCBankAccountUpdate() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content & Accordion */}
            <div>
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gold text-primary text-sm font-bold rounded-lg">
                      June 2024 Update
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Mandatory Bank Account Requirement
                  </h3>
                </div>
              </div>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                As of June 2024, opening a corporate bank account and depositing your minimum capital is now 
                <span className="text-gold font-semibold"> mandatory before final CR issuance</span>. This applies 
                to all new company formations in Bahrain.
              </p>

              {/* Accordion */}
              <Accordion type="single" collapsible defaultValue="requirements" className="space-y-3">
                {accordionData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <AccordionItem 
                      key={item.id} 
                      value={item.id}
                      className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden"
                    >
                      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]]:bg-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-white font-semibold text-left">{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5">
                        <ul className="space-y-3 pl-11">
                          {item.content.map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/80">
                              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={bankMeetingImage}
                  alt="Corporate bank account opening consultation in Bahrain"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-gold text-primary font-bold text-sm rounded-lg shadow-lg">
                  Required Since June 2024
                </div>
              </motion.div>
              
              {/* Decorative blur behind image */}
              <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
