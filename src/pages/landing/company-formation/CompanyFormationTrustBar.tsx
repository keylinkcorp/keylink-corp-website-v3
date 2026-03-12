import { motion } from "framer-motion";

const items = [
  { k: "500+", v: "Businesses supported" },
  { k: "40+", v: "Countries served" },
  { k: "3–7", v: "Days typical" },
  { k: "100%", v: "Foreign ownership options" },
];

export function CompanyFormationTrustBar() {
  return (
    <section className="relative -mt-4 md:-mt-8">
      <div className="w-full px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border/40 bg-background p-4 md:p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {items.map((item, idx) => (
                <motion.div
                  key={item.v}
                  className="rounded-xl border border-border/30 bg-background p-4 md:p-5"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                    {item.k}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

