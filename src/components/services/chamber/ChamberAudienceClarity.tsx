import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Ship, Building, FileCheck, Globe, Clock, Users, RefreshCw, Settings, Calendar, Network } from "lucide-react";

const exporterServices = [
  { icon: FileCheck, text: "Certificate of Origin issuance" },
  { icon: Globe, text: "Commercial invoice attestation" },
  { icon: Ship, text: "Packing list verification" },
  { icon: Globe, text: "Legalization for GCC/MENA markets" },
  { icon: Clock, text: "Rush processing for urgent shipments" }
];

const businessServices = [
  { icon: Users, text: "Initial BCCI membership registration" },
  { icon: RefreshCw, text: "Annual membership renewal" },
  { icon: Settings, text: "Activity code classification" },
  { icon: Calendar, text: "Trade license alignment" },
  { icon: Network, text: "Networking event access" }
];

export function ChamberAudienceClarity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chamber of Commerce Support for Every Business Stage
            </h2>
          </motion.div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Exporters & Importers */}
            <motion.div 
              variants={staggerItem}
              className="bg-white rounded-2xl border border-border p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Ship className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Exporters & Importers</h3>
              </div>
              <ul className="space-y-4">
                {exporterServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{service.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* New & Established Businesses */}
            <motion.div 
              variants={staggerItem}
              className="bg-white rounded-2xl border border-border p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">New & Established Businesses</h3>
              </div>
              <ul className="space-y-4">
                {businessServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{service.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
