import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Receipt, Users, Shield, Heart, Package, MapPin, 
  Plane, Building2, Zap, CreditCard, Car, Home, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Import images
import lmraClearanceImage from "@/assets/document-clearance/lmra-clearance.jpg";
import immigrationClearanceImage from "@/assets/document-clearance/immigration-clearance.jpg";
import commerceClearanceImage from "@/assets/document-clearance/commerce-clearance.jpg";
import ewaClearanceImage from "@/assets/document-clearance/ewa-clearance.jpg";
import cprServicesImage from "@/assets/document-clearance/cpr-services.jpg";
import trafficClearanceImage from "@/assets/document-clearance/traffic-clearance.jpg";
import municipalityClearanceImage from "@/assets/document-clearance/municipality-clearance.jpg";
import taxClearanceImage from "@/assets/document-clearance/tax-clearance.jpg";
import domesticLmraImage from "@/assets/document-clearance/domestic-lmra.jpg";
import gosiClearanceImage from "@/assets/document-clearance/gosi-clearance.jpg";
import policeClearanceImage from "@/assets/document-clearance/police-clearance.jpg";
import customsClearanceImage from "@/assets/document-clearance/customs-clearance.jpg";

const services = [
  {
    image: lmraClearanceImage,
    icon: Users,
    title: "LMRA Document Clearance",
    description: "Work permits, residence permits, and labor cards from Labour Market Regulatory Authority.",
    examples: ["New Work Permit", "Renew Work Permit", "Cancel Work Permit", "Visa Ceiling", "Change Occupation"]
  },
  {
    image: immigrationClearanceImage,
    icon: Plane,
    title: "Immigration Document Clearance",
    description: "Entry visas, exit permits, and residence visas from Immigration authorities.",
    examples: ["Visit Visa", "Business Visa", "Multiple Entry Visa", "Family Visa", "Grace Period"]
  },
  {
    image: commerceClearanceImage,
    icon: Building2,
    title: "Ministry of Commerce Clearance",
    description: "Commercial registrations, trade licenses, and trademark registrations.",
    examples: ["Commercial Registration", "Trade Licenses", "Trademark Registration"]
  },
  {
    image: ewaClearanceImage,
    icon: Zap,
    title: "EWA Clearance",
    description: "Electricity and Water Authority services for utility connections and transfers.",
    examples: ["New Connections", "Account Transfers", "Bill Payments"]
  },
  {
    image: cprServicesImage,
    icon: CreditCard,
    title: "CPR Services",
    description: "Central Population Registry services for ID cards and registration.",
    examples: ["New CPR Issue", "Family CPR", "CPR Renewal", "Chip Update"]
  },
  {
    image: trafficClearanceImage,
    icon: Car,
    title: "Traffic Document Clearance",
    description: "Vehicle registration, driving licenses, and traffic fine clearance.",
    examples: ["Vehicle Registration", "Driving Licenses", "Traffic Fines"]
  },
  {
    image: domesticLmraImage,
    icon: Home,
    title: "Domestic LMRA Services",
    description: "Household helper documentation and domestic work permit services.",
    examples: ["New Domestic Permit", "Renew Permit", "Cancel Permit"]
  },
  {
    image: taxClearanceImage,
    icon: Receipt,
    title: "Tax/NBR Clearance",
    description: "VAT and tax obligation confirmation from National Bureau for Revenue.",
    examples: ["VAT Clearance", "Tax Settlement", "NBR No-Objection"]
  },
  {
    image: gosiClearanceImage,
    icon: Heart,
    title: "SIO/GOSI Clearance",
    description: "Social Insurance Organization confirmation of pension and insurance settlements.",
    examples: ["Social Insurance Settlement", "End-of-Service", "Pension Clearance"]
  },
  {
    image: policeClearanceImage,
    icon: Shield,
    title: "Police Clearance",
    description: "Criminal record check from General Directorate of Criminal Investigation.",
    examples: ["Good Conduct Certificate", "Background Check", "Embassy Requirements"]
  },
  {
    image: customsClearanceImage,
    icon: Package,
    title: "Customs Clearance",
    description: "Customs Affairs clearance for import/export obligations and trade compliance.",
    examples: ["Trade Obligations", "Import Clearance", "Duty Settlements"]
  },
  {
    image: municipalityClearanceImage,
    icon: MapPin,
    title: "Municipality Clearance",
    description: "Local authority confirmation for permit settlements and zoning compliance.",
    examples: ["Permit Settlements", "Health Clearance", "Business Location"]
  }
];

export function DocumentClearanceServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Clearance Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Clearance Certificate Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We process every clearance your business needs — from employee exits to company closures.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all group"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-muted-foreground mb-4">
              Need a clearance not listed?
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
