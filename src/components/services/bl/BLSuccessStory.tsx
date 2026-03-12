import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Award, 
  Clock,
  Globe,
  CreditCard,
  Quote
} from "lucide-react";
import testimonialImage from "@/assets/testimonial-1.jpg";

export function BLSuccessStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Award className="w-4 h-4" />
              Case Study
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            From Dubai to Bahrain in <span className="text-accent">12 Days</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Client Profile Side */}
              <div className="lg:col-span-2 bg-primary p-10 text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Client Image */}
                  <div className="mb-8">
                    <img
                      src={testimonialImage}
                      alt="David Chen"
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20"
                    />
                  </div>

                  {/* Client Info */}
                  <h3 className="text-2xl font-bold mb-2">David Chen</h3>
                  <p className="text-white/70 mb-6">FinTech Consulting</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                      <Award className="w-5 h-5 text-accent" />
                      <span className="font-medium">Professional Services License</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-medium">12 Days (including bank)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Side */}
              <div className="lg:col-span-3 p-10">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-accent/30 mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    David wanted to expand his Dubai-based consulting firm to Bahrain but was concerned 
                    about navigating a new regulatory system remotely.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We handled his entire application — from trade name reservation to CR issuance — 
                    while David continued operating in the UAE. Using Power of Attorney, we submitted 
                    all documents, obtained his professional services license, and coordinated bank 
                    account opening with NBB.
                  </p>
                  <p className="text-lg font-semibold">
                    Result: David received his business license and corporate bank account in 12 days 
                    without setting foot in Bahrain.
                  </p>
                </div>

                {/* Client Quote */}
                <div className="bg-accent/5 border-2 border-accent/20 rounded-xl p-6 mb-8">
                  <p className="text-lg italic text-muted-foreground">
                    "The team made it feel effortless. I just sent my documents and they took care of everything."
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary/60 rounded-xl p-4 text-center border border-border">
                    <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Days to License</div>
                  </div>
                  <div className="bg-secondary/60 rounded-xl p-4 text-center border border-border">
                    <Globe className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Remote Process</div>
                  </div>
                  <div className="bg-secondary/60 rounded-xl p-4 text-center border border-border">
                    <CreditCard className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">✓</div>
                    <div className="text-sm text-muted-foreground">Bank Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
