import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

const ministries = [
  {
    category: "Business & Commerce",
    entities: [
      "Ministry of Industry & Commerce (MOIC)",
      "Bahrain Chamber of Commerce & Industry",
      "Economic Development Board (EDB)",
      "Bahrain Investment Market"
    ]
  },
  {
    category: "Labour & Immigration",
    entities: [
      "Labour Market Regulatory Authority (LMRA)",
      "Nationality, Passports & Residence (NPRA)",
      "General Directorate of Immigration",
      "Social Insurance Organization (SIO)"
    ]
  },
  {
    category: "Legal & Government",
    entities: [
      "Ministry of Foreign Affairs",
      "Ministry of Justice",
      "Courts & Tribunals",
      "Bahrain Bourse"
    ]
  },
  {
    category: "Local Authorities",
    entities: [
      "Capital Municipality",
      "Northern Municipality",
      "Muharraq Municipality",
      "Southern Municipality"
    ]
  }
];

export function MinistriesCovered() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
              Full Coverage
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ministries & Agencies We Cover
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-white/70 max-w-2xl mx-auto">
            Our PROs have established relationships with all major government entities
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ministries.map((category, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="font-semibold text-accent mb-4">{category.category}</h3>
              <ul className="space-y-3">
                {category.entities.map((entity, entityIndex) => (
                  <li 
                    key={entityIndex}
                    className="flex items-start gap-2 text-white/80 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {entity}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 text-center"
        >
          <p className="text-white/60 text-sm">
            Plus specialized authorities: Central Bank, Telecom Regulatory Authority, Health Ministry, 
            Education Ministry, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
