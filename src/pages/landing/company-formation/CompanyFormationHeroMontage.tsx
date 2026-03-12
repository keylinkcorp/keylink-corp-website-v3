import {
  Check,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  Shield,
  Sparkles } from
"lucide-react";

import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/formation-hero-modern-consulting-3.jpg";

type CompanyFormationHeroMontageProps = {
  onBookClick: () => void;
  /** Optional overrides to reuse the same hero montage for adjacent landing pages. */
  badgeText?: string;
  title?: string;
  titleSuffix?: string;
  lead?: string;
  bullets?: Array<{icon: typeof Check;text: string;}>;
  primaryCtaLabel?: string;
  /** Optional hero image override (defaults to the shared formation portrait). */
  imageSrc?: string;
  /** If provided, renders a phone CTA button next to the primary CTA. */
  phoneCta?: {href: string;label: string;};
  /** If true, show WhatsApp CTA button. Defaults to true (original LP behavior). */
  showWhatsApp?: boolean;
  /** Optional short social proof line shown under the review strip. */
  socialProofLine?: string;
  /** Layout variant. Defaults to the original split layout for backwards compatibility. */
  variant?: "split" | "centered";
  /** Optional max-width override used by the centered variant containers. */
  contentMaxWidthClassName?: string;
};

export function CompanyFormationHeroMontage({
  onBookClick,
  badgeText = "Google Ads Offer • Free 30‑minute consultation",
  title = "Company Formation in Bahrain",
  titleSuffix = " (2026)",
  lead =
  "A premium, clear setup experience—100% foreign ownership guidance, transparent costs, and a realistic timeline.",
  bullets = [
  { icon: Check, text: "3–7 business days (typical) for many setups" },
  { icon: Shield, text: "MOIC/LMRA guidance and compliance support" },
  { icon: FileText, text: "Transparent checklist + clear next steps" }],

  primaryCtaLabel = "Get started",
  imageSrc = heroImage,
  phoneCta,
  showWhatsApp = true,
  socialProofLine,
  variant = "split",
  contentMaxWidthClassName
}: CompanyFormationHeroMontageProps) {
  const centeredMaxW = contentMaxWidthClassName ?? "max-w-[1120px]";

  if (variant === "centered") {
    return (
      <section className="relative overflow-hidden">
        {/* Background */}
        <div aria-hidden className="absolute inset-0 bg-background" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(hsl(var(--border)_/_0.7)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(0_0%_0%)_70%,transparent_100%)] opacity-60" />


        <div className={cn("relative mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-12 md:pb-16", centeredMaxW)}>
          {/* Copy */}
          <div className="mx-auto w-full max-w-[820px] text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground tracking-tight">
              <Sparkles className="h-[22px] w-[22px] text-accent" />
              {badgeText}
            </p>

            <h1 className="lp-h1 lp-hero-title text-balance mx-auto max-w-[22ch] text-4xl sm:text-5xl lg:text-6xl">
              {title}
              {titleSuffix ? <span className="text-accent">{titleSuffix}</span> : null}
            </h1>

            <p className="mt-5 lp-lead mx-auto max-w-[66ch] text-sm sm:text-base">{lead}</p>

            <ul className="mt-8 mx-auto flex w-full max-w-[700px] flex-col items-center gap-3 text-center text-sm">
              {bullets.map((item) =>
              <li
                key={item.text}
                className="flex w-full flex-col items-center justify-center gap-2 text-foreground/90 sm:flex-row sm:gap-3">

                  <item.icon className="h-[22px] w-[22px] text-accent" />
                  <span className="leading-relaxed sm:max-w-[54ch]">{item.text}</span>
                </li>
              )}
            </ul>

             <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
               <Button size="lg" className="w-full sm:w-auto lp-cta" onClick={onBookClick}>
                 {primaryCtaLabel}
               </Button>

               {phoneCta ? (
                 <Button variant="outline" size="lg" className="w-full sm:w-auto lp-cta-outline" asChild>
                   <a href={phoneCta.href}>
                     <Phone className="mr-2 h-[22px] w-[22px]" />
                     {phoneCta.label}
                   </a>
                 </Button>
               ) : null}

               {showWhatsApp ? (
                 <Button variant="outline" size="lg" className="w-full sm:w-auto lp-cta-outline" asChild>
                   <a href="https://wa.me/97317008888">
                     <MessageCircle className="mr-2 h-[22px] w-[22px]" />
                     WhatsApp
                   </a>
                 </Button>
               ) : null}
             </div>

            <HeroReviewStrip align="center" className="mt-8" />

            {socialProofLine ?
            <p className="mt-2 text-xs text-muted-foreground">{socialProofLine}</p> :
            null}

            <p className="mt-3 text-xs text-muted-foreground">
              Free • No obligation • You’ll get a cost breakdown + document checklist
            </p>
          </div>

          {/* Media panel */}
           <div className={cn("mt-10 md:mt-12 mx-auto", centeredMaxW)}>
             <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-background lp-card-flat shadow-[0_20px_60px_-40px_hsl(var(--navy)/0.28)]">
               <img
                 src={imageSrc}
                 alt="Diverse consulting team meeting in a Bahrain office with traditional design elements"
                 className="h-[320px] w-full object-cover object-center md:h-[460px]"
                 loading="eager"
                 fetchPriority="high"
               />

               {/* Subtle editorial toning (lighter than EditorialImage) */}
               <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.28]">
                 <div className="absolute inset-0 overlay-navy-vertical opacity-70" />
                 <div className="absolute inset-0 overlay-gold-accent opacity-50" />
                 <div className="absolute inset-0 noise-texture opacity-[0.18]" />
               </div>

               <div className="absolute bottom-5 left-5 right-5">
                 <div className="lp-card-flat flex items-center justify-between gap-3 bg-background/90 p-3 backdrop-blur-sm md:p-4">
                   <div className="flex items-center gap-2">
                     <Clock className="h-[22px] w-[22px] text-accent" />
                     <span className="text-sm font-medium text-foreground">Free 30‑minute call • Google Meet</span>
                   </div>
                   <span className="text-xs text-muted-foreground">Same‑page booking</span>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>);

  }

  return (
    <section className="relative overflow-hidden">
      {/* Calm background (no decorative blobs) */}
      <div aria-hidden className="absolute inset-0 bg-muted/20" />

      <div className="relative container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground tracking-tight">
                <Sparkles className="h-[22px] w-[22px] text-accent" />
                {badgeText}
              </p>

              <h1 className="lp-h1 lp-hero-title text-balance">
                {title}
                {titleSuffix ? <span className="text-accent">{titleSuffix}</span> : null}
              </h1>

              <p className="mt-5 lp-lead max-w-[56ch]">{lead}</p>

              <ul className="mt-7 space-y-3 text-sm">
                {bullets.map((item) =>
                <li key={item.text} className="flex items-start gap-3 text-foreground/90">
                    <item.icon className="mt-0.5 h-[22px] w-[22px] text-accent" />
                    {item.text}
                  </li>
                )}
              </ul>

               <div className="mt-7 flex flex-col sm:flex-row gap-3">
                 <Button size="lg" className="w-full sm:w-auto lp-cta" onClick={onBookClick}>
                   {primaryCtaLabel}
                 </Button>

                 {phoneCta ? (
                   <Button variant="outline" size="default" className={cn("w-full sm:w-auto", "lp-cta-outline")} asChild>
                     <a href={phoneCta.href}>
                       <Phone className="mr-2 h-[22px] w-[22px]" />
                       {phoneCta.label}
                     </a>
                   </Button>
                 ) : null}

                 {showWhatsApp ? (
                   <Button variant="outline" size="default" className={cn("w-full sm:w-auto", "lp-cta-outline")} asChild>
                     <a href="https://wa.me/97317008888">
                       <MessageCircle className="mr-2 h-[22px] w-[22px]" />
                       WhatsApp
                     </a>
                   </Button>
                 ) : null}
               </div>

              <HeroReviewStrip className="mt-5" />

              {socialProofLine ? <p className="mt-2 text-xs text-muted-foreground">{socialProofLine}</p> : null}

              <p className="mt-3 text-xs text-muted-foreground">
                Free • No obligation • You’ll get a cost breakdown + document checklist
              </p>
            </div>
          </div>

          {/* Montage */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              {/* Main */}
               <div className="relative rounded-3xl overflow-hidden lp-card-flat border border-border/40 shadow-[0_20px_60px_-40px_hsl(var(--navy)/0.28)]">
                 <img
                   src={imageSrc}
                   alt="Diverse consulting team meeting in a Bahrain office with traditional design elements"
                   className="w-full h-[340px] md:h-[460px] object-cover object-center"
                   loading="eager"
                   fetchPriority="high"
                 />

                 {/* Subtle editorial toning */}
                 <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.28]">
                   <div className="absolute inset-0 overlay-navy-vertical opacity-70" />
                   <div className="absolute inset-0 overlay-gold-accent opacity-50" />
                   <div className="absolute inset-0 noise-texture opacity-[0.18]" />
                 </div>

                 <div className="absolute bottom-5 left-5 right-5">
                   <div className="lp-card-flat bg-background/90 backdrop-blur-sm p-3 md:p-4 flex items-center justify-between gap-3">
                     <div className="flex items-center gap-2">
                       <Clock className="h-[22px] w-[22px] text-accent" />
                       <span className="text-sm text-foreground font-medium">Free 30‑minute call • Google Meet</span>
                     </div>
                     <span className="text-xs text-muted-foreground">Same‑page booking</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}