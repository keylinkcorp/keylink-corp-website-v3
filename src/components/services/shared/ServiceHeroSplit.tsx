import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, LucideIcon, Phone } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

interface FeaturePill {
  icon: LucideIcon;
  text: string;
}

interface ServiceHeroSplitProps {
  badge: string;
  title: string;
  highlight?: string;
  titleEnd?: string;
  subtitle: string;
  features: FeaturePill[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  priceFrom?: string;
  priceLabel?: string;
}

export function ServiceHeroSplit({
  badge,
  title,
  highlight,
  titleEnd,
  subtitle,
  features,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  priceFrom,
  priceLabel = "Starting from",
}: ServiceHeroSplitProps) {
  return (
    <section className="relative overflow-hidden">
      <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} />
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.55} masked />

      <div className="container relative z-10 mx-auto px-4 py-14 md:py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-6">
            <motion.div variants={staggerItem}>
              <span className="section-badge">{badge}</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
            >
              {title}{" "}
              {highlight ? <span className="text-accent">{highlight}</span> : null}
              {titleEnd ? ` ${titleEnd}` : null}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-7 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-7">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {priceFrom ? (
              <motion.div variants={staggerItem} className="mb-7">
                <div className="inline-flex items-baseline gap-2 px-5 py-3 bg-primary/5 rounded-2xl">
                  <span className="text-sm text-muted-foreground">{priceLabel}</span>
                  <span className="text-3xl font-bold text-primary">{priceFrom}</span>
                </div>
              </motion.div>
            ) : null}

            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gold text-base px-8 py-6">
                <Link to={primaryCTA.href}>
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <a href={secondaryCTA.href}>
                  <Phone className="w-5 h-5" />
                  {secondaryCTA.text}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="lg:col-span-6">
            <div className="card-elevated overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </AspectRatio>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
