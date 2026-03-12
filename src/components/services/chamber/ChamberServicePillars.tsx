import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Users, RefreshCw, FileCheck, Stamp, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "BCCI Membership Registration",
    features: [
      "New member application",
      "Document preparation",
      "Fee calculation and payment",
      "Membership card collection",
      "Activity code alignment"
    ]
  },
  {
    icon: RefreshCw,
    title: "Annual Membership Renewal",
    features: [
      "Renewal deadline tracking",
      "Payment processing",
      "Updated membership documents",
      "License alignment verification",
      "Compliance confirmation"
    ]
  },
  {
    icon: FileCheck,
    title: "Certificate of Origin (CO)",
    features: [
      "Application preparation",
      "Product classification",
      "BCCI submission",
      "Same-day processing available",
      "Digital and physical copies"
    ]
  },
  {
    icon: Stamp,
    title: "Document Attestation",
    features: [
      "Commercial invoice attestation",
      "Packing list verification",
      "Contracts and agreements",
      "Legalization for GCC/MENA",
      "Ministry coordination"
    ]
  }
];

export function ChamberServicePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Chamber of Commerce Services Under One Roof
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From membership registration to certificate issuance, we handle every aspect of your BCCI requirements with precision and speed.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold pt-3">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
