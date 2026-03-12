import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X, Info } from "lucide-react";

const visaTypes = [
  {
    name: "Work Visa",
    validity: "2 Years",
    processing: "5-10 Days",
    price: "BHD 250",
    sponsorRequired: true,
    familyEligible: true,
    multipleEntry: true,
    features: ["LMRA Registration", "CPR Card", "Medical Required"]
  },
  {
    name: "Family Visa",
    validity: "2 Years",
    processing: "5-7 Days",
    price: "BHD 350",
    sponsorRequired: true,
    familyEligible: false,
    multipleEntry: true,
    features: ["Spouse & Children", "School Access", "Healthcare"]
  },
  {
    name: "Golden Visa",
    validity: "10 Years",
    processing: "2-4 Weeks",
    price: "BHD 1,500",
    sponsorRequired: false,
    familyEligible: true,
    multipleEntry: true,
    features: ["No Sponsor Needed", "Family Included", "Work Anywhere"]
  },
  {
    name: "Visit Visa",
    validity: "14-30 Days",
    processing: "1-3 Days",
    price: "BHD 50",
    sponsorRequired: false,
    familyEligible: false,
    multipleEntry: false,
    features: ["E-Visa Available", "Extendable", "Business/Tourism"]
  },
  {
    name: "Flexi Permit",
    validity: "2 Years",
    processing: "3-5 Days",
    price: "BHD 500/yr",
    sponsorRequired: false,
    familyEligible: false,
    multipleEntry: true,
    features: ["Self-Sponsored", "Multiple Employers", "Freelance OK"]
  }
];

export function VisaTypeComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVisa, setSelectedVisa] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Visa Types</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Compare Visa Options
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right visa type for your needs in Bahrain
          </motion.p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Visa Type</th>
                <th className="px-6 py-4 text-center font-semibold">Validity</th>
                <th className="px-6 py-4 text-center font-semibold">Processing</th>
                <th className="px-6 py-4 text-center font-semibold">Sponsor Required</th>
                <th className="px-6 py-4 text-center font-semibold">Family Eligible</th>
                <th className="px-6 py-4 text-center font-semibold">Multiple Entry</th>
                <th className="px-6 py-4 text-center font-semibold">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {visaTypes.map((visa, index) => (
                <tr 
                  key={index}
                  className={`border-b border-border last:border-0 hover:bg-secondary/50 transition-colors ${
                    visa.name === "Golden Visa" ? "bg-accent/5" : ""
                  }`}
                >
                  <td className="px-6 py-5">
                    <div className="font-semibold text-foreground">{visa.name}</div>
                    <div className="flex gap-1 mt-1">
                      {visa.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center font-medium">{visa.validity}</td>
                  <td className="px-6 py-5 text-center text-muted-foreground">{visa.processing}</td>
                  <td className="px-6 py-5 text-center">
                    {visa.sponsorRequired ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {visa.familyEligible ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {visa.multipleEntry ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="font-bold text-accent">{visa.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:hidden space-y-4"
        >
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`bg-white rounded-xl p-5 border border-border shadow-sm ${
                visa.name === "Golden Visa" ? "border-accent" : ""
              }`}
              onClick={() => setSelectedVisa(selectedVisa === index ? null : index)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{visa.name}</h3>
                  <p className="text-sm text-muted-foreground">{visa.validity} validity</p>
                </div>
                <span className="font-bold text-accent text-lg">{visa.price}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {visa.features.map((feature, i) => (
                  <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className={`py-2 rounded ${visa.sponsorRequired ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="font-medium mb-1">Sponsor</div>
                  {visa.sponsorRequired ? "Required" : "Not Needed"}
                </div>
                <div className={`py-2 rounded ${visa.familyEligible ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="font-medium mb-1">Family</div>
                  {visa.familyEligible ? "Eligible" : "N/A"}
                </div>
                <div className="py-2 rounded bg-blue-50">
                  <div className="font-medium mb-1">Processing</div>
                  {visa.processing}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Help Note */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-4 py-2 rounded-full border border-border">
            <Info className="w-4 h-4 text-accent" />
            Not sure which visa is right for you? <a href="/contact" className="text-accent hover:underline">Get free consultation</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
