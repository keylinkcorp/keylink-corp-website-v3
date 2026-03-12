import { motion } from "framer-motion";
import { Calendar, Search, Video, Rocket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Book",
    description: "Schedule your preferred time slot using the calendar above",
  },
  {
    icon: Search,
    step: "2",
    title: "Prepare",
    description: "We research your business needs before the call",
  },
  {
    icon: Video,
    step: "3",
    title: "Meet",
    description: "30-minute Google Meet call with our expert team",
  },
  {
    icon: Rocket,
    step: "4",
    title: "Start",
    description: "Receive your personalized quote and begin your journey",
  },
];

export function ConsultationProcess() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process to get you started on your business
            journey in Bahrain
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 bottom-0 translate-y-full w-0.5 h-8 bg-accent/30 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
