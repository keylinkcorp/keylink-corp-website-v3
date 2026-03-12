import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Building2, 
  TrendingUp, 
  Lightbulb,
  Utensils,
  Hotel,
  Heart,
  GraduationCap,
  Factory,
  Home,
  Truck,
  Banknote,
  ArrowRight
} from "lucide-react";
import industryImage from "@/assets/industry-consultant.webp";

const stages = [
  {
    id: "startup",
    label: "Startup",
    industries: [
      {
        icon: Monitor,
        title: "Technology & IT",
        description: "Startups, SaaS, software development, and digital services",
      },
      {
        icon: Building2,
        title: "Trading & Import/Export",
        description: "Wholesale, retail, distribution, and international trade",
      },
      {
        icon: TrendingUp,
        title: "E-commerce",
        description: "Online stores, digital marketplaces, and retail platforms",
      },
      {
        icon: Lightbulb,
        title: "Consulting Services",
        description: "Business, legal, and financial advisory services",
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    industries: [
      {
        icon: Utensils,
        title: "Food & Beverage",
        description: "Restaurants, cafes, catering, and food production",
      },
      {
        icon: Hotel,
        title: "Hospitality & Tourism",
        description: "Hotels, travel agencies, and event management",
      },
      {
        icon: Heart,
        title: "Healthcare & Wellness",
        description: "Clinics, pharmacies, fitness, and wellness centers",
      },
      {
        icon: GraduationCap,
        title: "Education & Training",
        description: "Schools, tutoring centers, and e-learning platforms",
      },
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    industries: [
      {
        icon: Factory,
        title: "Manufacturing",
        description: "Production, assembly, processing, and fabrication",
      },
      {
        icon: Home,
        title: "Real Estate",
        description: "Property development, management, and brokerage",
      },
      {
        icon: Truck,
        title: "Logistics & Transport",
        description: "Shipping, freight forwarding, and delivery services",
      },
      {
        icon: Banknote,
        title: "Financial Services",
        description: "Banking, insurance, fintech, and investment services",
      },
    ],
  },
];

export function IndustryServices() {
  const [activeTab, setActiveTab] = useState("startup");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"
      />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            {/* Header */}
            <div className="mb-10">
              <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
                Industry Expertise
              </p>
              <h2 className="text-[40px] md:text-[48px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
                We Serve Every Industry,{" "}
                <span className="text-gold">Your Success Is Our Focus</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-[1.8]">
                From tech startups to manufacturing, we provide tailored company formation 
                solutions across all major sectors in Bahrain.
              </p>
            </div>

            {/* Tabbed Interface */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start gap-2 bg-transparent p-0 mb-6">
                {stages.map((stage) => (
                  <TabsTrigger
                    key={stage.id}
                    value={stage.id}
                    className="px-6 py-3 rounded-lg text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground transition-all duration-300"
                  >
                    {stage.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <AnimatePresence mode="wait">
                {stages.map((stage) => (
                  <TabsContent 
                    key={stage.id} 
                    value={stage.id}
                    className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {stage.industries.map((industry, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <industry.icon className="h-6 w-6 text-gold" />
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-gold transition-colors">
                              {industry.title}
                            </h3>
                            <p className="text-muted-foreground text-[15px] leading-[1.7]">
                              {industry.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  View All Industries
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-6 w-full h-full bg-gold/10 rounded-2xl -z-10" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" 
              />
              
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={industryImage} 
                  alt="Professional business services in Bahrain" 
                  className="w-full h-[580px] object-cover"
                />
              </div>

              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-sm p-6 border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">12+</p>
                    <p className="text-sm text-muted-foreground">Industry Sectors</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
