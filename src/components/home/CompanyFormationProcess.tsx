import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShieldCheck, 
  Building2, 
  Landmark, 
  FileSignature,
  FileText,
  Upload,
  ClipboardCheck,
  CreditCard,
  Award,
  Building,
  Wallet,
  Rocket,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import formationImage from "@/assets/formation-consultant.webp";
import { fadeInUp, staggerItem } from "@/lib/animations";

const stageOneSteps = [
  {
    icon: ShieldCheck,
    title: "Obtaining Security",
    description: "Approvals From The Relevant Authorities"
  },
  {
    icon: Building2,
    title: "Suggested Name",
    description: "Choosing the right name for your Business"
  },
  {
    icon: Landmark,
    title: "Suggested Capital",
    description: "Paid up capital should match your business plan"
  },
  {
    icon: FileSignature,
    title: "Board Member",
    description: "Suggested Partner, Authorized Director, Signature"
  }
];

const stageTwoSteps = [
  {
    icon: FileText,
    title: "Document Preparation",
    description: "Gather passport copies, business plan, and forms"
  },
  {
    icon: Upload,
    title: "Application Submission",
    description: "Submit to MOICT and relevant authorities"
  },
  {
    icon: ClipboardCheck,
    title: "Review & Approval",
    description: "Government processing and verification"
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "Processing fees and registration costs"
  }
];

const stageThreeSteps = [
  {
    icon: Award,
    title: "CR Certificate",
    description: "Receive your Commercial Registration"
  },
  {
    icon: Building,
    title: "Office Setup",
    description: "Virtual office or physical location setup"
  },
  {
    icon: Wallet,
    title: "Bank Account",
    description: "Corporate bank account opening assistance"
  },
  {
    icon: Rocket,
    title: "Start Operations",
    description: "Begin your business journey in Bahrain"
  }
];

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const StepCard = ({ icon: Icon, title, description, index }: StepCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
  >
    <motion.div 
      className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className="w-6 h-6 text-primary" />
    </motion.div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-foreground text-base mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const CompanyFormationProcess = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-4">
                Plan, Start & Launch Your Business With{" "}
                <span className="text-accent">Keylink Corp</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Follow our proven 3-stage process for seamless company formation in Bahrain.
              </p>
            </div>

            {/* Tabbed Interface */}
            <Tabs defaultValue="stage-one" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6 bg-muted/50 p-1 rounded-xl h-auto">
                <TabsTrigger 
                  value="stage-one" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary rounded-lg py-3 px-4 font-semibold text-sm transition-all"
                >
                  Stage One
                </TabsTrigger>
                <TabsTrigger 
                  value="stage-two"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary rounded-lg py-3 px-4 font-semibold text-sm transition-all"
                >
                  Stage Two
                </TabsTrigger>
                <TabsTrigger 
                  value="stage-three"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary rounded-lg py-3 px-4 font-semibold text-sm transition-all"
                >
                  Stage Three
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="stage-one" className="mt-0 space-y-3">
                  {stageOneSteps.map((step, index) => (
                    <StepCard key={index} index={index} {...step} />
                  ))}
                </TabsContent>

                <TabsContent value="stage-two" className="mt-0 space-y-3">
                  {stageTwoSteps.map((step, index) => (
                    <StepCard key={index} index={index} {...step} />
                  ))}
                </TabsContent>

                <TabsContent value="stage-three" className="mt-0 space-y-3">
                  {stageThreeSteps.map((step, index) => (
                    <StepCard key={index} index={index} {...step} />
                  ))}
                </TabsContent>
              </AnimatePresence>
            </Tabs>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 h-auto rounded-lg group"
                >
                  View Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            {/* Gradient Background Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-3xl transform rotate-3 scale-105" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <img
                src={formationImage}
                alt="Professional business consultant ready to help with company formation"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">3 Simple Stages</p>
                    <p className="text-muted-foreground text-sm">To Launch Your Business</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
