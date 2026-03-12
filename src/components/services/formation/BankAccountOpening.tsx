import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import bankConsultationImage from "@/assets/bank-consultation-meeting.jpg";

const stats = [
  { value: 2, suffix: "-3", label: "Weeks", sublabel: "Average Timeline" },
  { value: 500, prefix: "BHD ", label: "Min Deposit", sublabel: "Starting From" },
  { value: 4, label: "Partner Banks", sublabel: "Major Institutions" },
  { value: 95, suffix: "%", label: "Approval Rate", sublabel: "For Our Clients" },
];

const banks = [
  { abbr: "NBB", name: "National Bank of Bahrain" },
  { abbr: "BBK", name: "Bank of Bahrain & Kuwait" },
  { abbr: "AUB", name: "Ahli United Bank" },
  { abbr: "SC", name: "Standard Chartered" },
];

export function BankAccountOpening() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleContact = () => {
    const phone = "97317000000";
    const message = encodeURIComponent("Hi, I'm interested in your Bank Account Opening assistance service for my Bahrain company.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      ref={ref}
      aria-labelledby="bank-account-heading"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background opacity-40 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,#000_28%,transparent_100%)]" />

      <div className="container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-3">
            Post-Formation Banking
          </p>
          <h2
            id="bank-account-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight"
          >
            Corporate Bank Account Opening
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open your business bank account in Bahrain with our direct introductions to major banks.
          </p>
        </motion.div>

        {/* Two Column Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={bankConsultationImage}
                alt="Professional business consultation meeting at a Bahrain bank"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gold" />
                  <span className="text-sm font-semibold">4 Major Banks</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-gold/50 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} duration={1.5} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-primary">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Description + CTA */}
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We handle bank introductions and documentation preparation, ensuring a smooth account opening process for your business.
              </p>
              <Button
                onClick={handleContact}
                className="group"
                size="lg"
              >
                Get bank introduction
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bank Partners Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-center mb-6">
            Partner Banks
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks.map((bank) => (
              <div
                key={bank.abbr}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-gold/50 hover:shadow-md transition-all"
              >
                <div className="text-lg font-bold text-primary mb-1">{bank.abbr}</div>
                <div className="text-xs text-muted-foreground leading-tight">{bank.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
