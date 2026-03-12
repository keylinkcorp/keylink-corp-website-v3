import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Globe, Building2, FileQuestion, Clock, Users, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import audienceImage from "@/assets/pro-audience-split.jpg";

const audiences = [
  {
    icon: Globe,
    title: "Foreign Entrepreneurs",
    subtitle: "New to Bahrain's government system",
    concerns: [
      { icon: FileQuestion, text: "Confused by Arabic forms and requirements" },
      { icon: Clock, text: "Can't afford days lost in government queues" },
      { icon: Building2, text: "Unsure which ministry handles what" },
      { icon: Users, text: "No local contacts or relationships" }
    ]
  },
  {
    icon: Building2,
    title: "Established Local Businesses",
    subtitle: "Growing beyond one-person capacity",
    concerns: [
      { icon: RefreshCw, text: "Multiple CR and license renewals to track" },
      { icon: Users, text: "Staff visas and LMRA matters piling up" },
      { icon: Clock, text: "Core team stretched on admin tasks" },
      { icon: FileQuestion, text: "Compliance deadlines causing stress" }
    ]
  }
];

export function PROAudienceClarity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
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
              Is This For You?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PRO Services for Every Business Stage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're just landing in Bahrain or running a growing operation, 
              we've got your government paperwork covered.
            </p>
          </motion.div>

          {/* Two Audience Cards */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-border border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <audience.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {audience.concerns.map((concern, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <concern.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{concern.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Shared Image */}
          <motion.div 
            variants={staggerItem}
            className="rounded-2xl overflow-hidden shadow-lg mb-10"
          >
            <img
              src={audienceImage}
              alt="Foreign entrepreneur and local business owner handling government paperwork"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Sound familiar? Here's the thing — you don't have to do this alone.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/contact">
                Talk to a PRO Specialist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
