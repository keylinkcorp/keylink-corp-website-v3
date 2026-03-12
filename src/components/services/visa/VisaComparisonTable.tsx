import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, X, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const visaTypes = [
  {
    name: "Work Visa",
    validity: "2 Years",
    processing: "5-10 Days",
    price: "BHD 250",
    sponsorRequired: true,
    familyEligible: "Yes (BHD 400+ salary)",
    multipleEntry: true,
    highlight: false
  },
  {
    name: "Family Visa",
    validity: "2 Years",
    processing: "5-7 Days",
    price: "BHD 350",
    sponsorRequired: true,
    familyEligible: "N/A",
    multipleEntry: true,
    highlight: false
  },
  {
    name: "Golden Visa",
    validity: "10 Years",
    processing: "2-4 Weeks",
    price: "BHD 1,500",
    sponsorRequired: false,
    familyEligible: "Yes",
    multipleEntry: true,
    highlight: true
  },
  {
    name: "Flexi Permit",
    validity: "2 Years",
    processing: "3-5 Days",
    price: "BHD 500/yr",
    sponsorRequired: false,
    familyEligible: "No",
    multipleEntry: true,
    highlight: false
  }
];

export function VisaComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Choose the Right Visa for Your Situation
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bahrain offers several residency pathways depending on your circumstances. Understanding 
            the differences helps you make an informed decision—and ensures you don't pay for 
            services you don't need.
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
                <th className="px-6 py-5 text-left font-semibold">Visa Type</th>
                <th className="px-6 py-5 text-center font-semibold">Validity</th>
                <th className="px-6 py-5 text-center font-semibold">Processing</th>
                <th className="px-6 py-5 text-center font-semibold">Sponsor Required</th>
                <th className="px-6 py-5 text-center font-semibold">Family Eligible</th>
                <th className="px-6 py-5 text-center font-semibold">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {visaTypes.map((visa, index) => (
                <tr 
                  key={index}
                  className={`border-b border-border last:border-0 hover:bg-secondary/50 transition-colors ${
                    visa.highlight ? "bg-accent/5 border-l-4 border-l-accent" : ""
                  }`}
                >
                  <td className="px-6 py-5">
                    <div className="font-semibold text-foreground text-lg">{visa.name}</div>
                    {visa.highlight && (
                      <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded mt-1 inline-block">
                        Recommended for Investors
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`font-medium ${visa.highlight ? "text-accent" : ""}`}>
                      {visa.validity}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center text-muted-foreground">{visa.processing}</td>
                  <td className="px-6 py-5 text-center">
                    {visa.sponsorRequired ? (
                      <span className="text-muted-foreground text-sm">Yes</span>
                    ) : (
                      <span className="text-accent font-medium text-sm">No (Self-sponsored)</span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-center text-sm">
                    {visa.familyEligible}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="font-bold text-primary text-lg">{visa.price}</span>
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
              className={`bg-white rounded-xl p-6 border shadow-sm ${
                visa.highlight ? "border-accent border-2" : "border-border"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{visa.name}</h3>
                  <p className="text-sm text-muted-foreground">{visa.validity} validity</p>
                  {visa.highlight && (
                    <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded mt-2 inline-block">
                      Recommended for Investors
                    </span>
                  )}
                </div>
                <span className="font-bold text-primary text-xl">{visa.price}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <div className="text-muted-foreground mb-1">Processing</div>
                  <div className="font-medium">{visa.processing}</div>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <div className="text-muted-foreground mb-1">Sponsor</div>
                  <div className="font-medium">{visa.sponsorRequired ? "Required" : "Not Needed"}</div>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg col-span-2">
                  <div className="text-muted-foreground mb-1">Family Eligible</div>
                  <div className="font-medium">{visa.familyEligible}</div>
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
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white px-5 py-3 rounded-full border border-border shadow-sm">
            <HelpCircle className="w-4 h-4 text-accent" />
            Not sure which visa suits your needs?{" "}
            <Link to="/contact" className="text-accent hover:underline font-medium">
              Book a free 15-minute consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
