import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem, fadeInRight } from "@/lib/animations";
import { 
  ShoppingCart, 
  Briefcase, 
  Code, 
  Factory, 
  Utensils, 
  Heart, 
  Landmark, 
  GraduationCap, 
  Plane,
  ShoppingBag,
  AlertCircle,
  Check,
  ExternalLink,
  Building2,
  Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BusinessActivity {
  name: string;
  icon: typeof ShoppingCart;
  description: string;
  approvals?: string[];
}

const commercialActivities: BusinessActivity[] = [
  { name: "General Trading", icon: ShoppingCart, description: "Import and export of goods, wholesale and retail trade" },
  { name: "Import/Export", icon: ShoppingBag, description: "International trade and customs clearance services" },
  { name: "E-commerce", icon: Code, description: "Online retail, digital marketplaces, and electronic commerce" },
  { name: "Food & Beverage Trading", icon: Utensils, description: "Food import/export, distribution, and retail" },
  { name: "Construction Materials", icon: Factory, description: "Building materials trading and supply" },
  { name: "Electronics Trading", icon: ShoppingCart, description: "Consumer electronics, IT equipment sales" },
  { name: "Automobile Trading", icon: ShoppingCart, description: "Vehicle sales, parts, and accessories" },
];

const professionalServices: BusinessActivity[] = [
  { name: "Management Consulting", icon: Briefcase, description: "Business strategy, operations, and management advisory" },
  { name: "IT Services", icon: Code, description: "Software development, IT consulting, and digital solutions" },
  { name: "Marketing & Advertising", icon: Briefcase, description: "Digital marketing, PR, and advertising agencies" },
  { name: "HR Consulting", icon: Briefcase, description: "Recruitment, talent management, and HR solutions" },
  { name: "Training & Education", icon: GraduationCap, description: "Corporate training, educational services, and tutoring" },
  { name: "Translation Services", icon: Briefcase, description: "Language translation and interpretation" },
  { name: "Design Services", icon: Briefcase, description: "Graphic design, interior design, and creative services" },
];

const regulatedActivities: BusinessActivity[] = [
  { name: "Healthcare Services", icon: Heart, description: "Medical clinics, healthcare facilities", approvals: ["NHRA Approval", "Ministry of Health License"] },
  { name: "Financial Services", icon: Landmark, description: "Banking, investment, insurance services", approvals: ["CBB License", "Capital Requirements"] },
  { name: "Pharmaceuticals", icon: Heart, description: "Drug import, distribution, pharmacies", approvals: ["NHRA License", "Import Permit"] },
  { name: "Food Manufacturing", icon: Utensils, description: "Food production and processing", approvals: ["Municipality Approval", "Health Certificate"] },
  { name: "Travel & Tourism", icon: Plane, description: "Travel agencies, tour operators", approvals: ["Tourism Authority License"] },
  { name: "Education Institute", icon: GraduationCap, description: "Schools, universities, training centers", approvals: ["Ministry of Education Approval"] },
  { name: "Real Estate Brokerage", icon: Landmark, description: "Property sales and rentals", approvals: ["RERA License", "Bahraini Partner Required"] },
  { name: "Legal Services", icon: Briefcase, description: "Law firms, legal advisory", approvals: ["Bar Association", "Bahraini Lawyer Required"] },
];

const ActivityList = ({ activities, showApprovals = false }: { activities: BusinessActivity[]; showApprovals?: boolean }) => (
  <ul className="space-y-4 pt-2">
    {activities.map((activity) => (
      <li key={activity.name} className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <activity.icon className="w-4 h-4 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-primary">{activity.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
          {showApprovals && activity.approvals && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {activity.approvals.map((approval) => (
                <span 
                  key={approval} 
                  className="text-[10px] px-2 py-1 bg-orange-50 text-orange-600 rounded-md border border-orange-100"
                >
                  {approval}
                </span>
              ))}
            </div>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export function BusinessActivitiesDirectory() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern - Grid Lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p 
            variants={staggerItem}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-4"
          >
            Business Activities
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Permitted Business Activities in Bahrain
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Explore business activities available for company registration. Most activities allow 100% 
            foreign ownership. Regulated activities require additional approvals.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible defaultValue="commercial" className="space-y-4">
              {/* Commercial Activities */}
              <AccordionItem 
                value="commercial" 
                className="bg-white border border-border rounded-xl px-5 data-[state=open]:border-accent/40 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-base font-semibold text-primary">Commercial Activities</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                      <Check className="w-3 h-3 mr-1" />
                      {commercialActivities.length} activities
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ActivityList activities={commercialActivities} />
                </AccordionContent>
              </AccordionItem>

              {/* Professional Services */}
              <AccordionItem 
                value="professional" 
                className="bg-white border border-border rounded-xl px-5 data-[state=open]:border-accent/40 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-base font-semibold text-primary">Professional Services</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                      <Check className="w-3 h-3 mr-1" />
                      {professionalServices.length} activities
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ActivityList activities={professionalServices} />
                </AccordionContent>
              </AccordionItem>

              {/* Regulated Activities */}
              <AccordionItem 
                value="regulated" 
                className="bg-white border border-border rounded-xl px-5 data-[state=open]:border-accent/40 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-base font-semibold text-primary">Regulated Activities</span>
                      <p className="text-xs text-muted-foreground mt-0.5">Requires additional approvals</p>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      {regulatedActivities.length} activities
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ActivityList activities={regulatedActivities} showApprovals />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Legend Note */}
            <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">100% Foreign Ownership</p>
                  <p className="text-sm text-muted-foreground">Available for most commercial and professional activities in Bahrain</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                  alt="Modern business office in Bahrain representing diverse business activities"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Activities Available</p>
                  </div>
                </div>
              </motion.div>

              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 right-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                SIJILAT Registered
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SIJILAT Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground mb-3">
            For the complete official list of business activities, visit SIJILAT:
          </p>
          <a 
            href="https://www.sijilat.bh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            SIJILAT - Bahrain Business Registry
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
