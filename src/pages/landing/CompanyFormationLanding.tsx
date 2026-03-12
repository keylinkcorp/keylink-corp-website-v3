import { useEffect, useMemo, useState } from "react";

import { MessageCircle, Phone } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { SplitSection } from "@/components/shared/SplitSection";
import {
  FormationCostCalculator,
  type FormationCalculatorSnapshot,
} from "@/components/services/formation/FormationCostCalculator";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

import howItWorksImage from "@/assets/company-formation/lp/how-it-works-portrait.jpg";
import bookingImage from "@/assets/company-formation/lp/booking-portrait.jpg";
import testimonialsImage from "@/assets/company-formation/lp/testimonials-portrait.jpg";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";
import { CompanyFormationTrustBar } from "@/pages/landing/company-formation/CompanyFormationTrustBar";
import { CompanyFormationSegmentSwitcher } from "@/pages/landing/company-formation/CompanyFormationSegmentSwitcher";
import { CompanyFormationPricingSection } from "@/pages/landing/company-formation/CompanyFormationPricingSection";
import { CompanyFormationEstimateSummary } from "@/pages/landing/company-formation/CompanyFormationEstimateSummary";
import { CompanyFormationCallSection } from "@/pages/landing/company-formation/CompanyFormationCallSection";

const CALENDLY_BASE_URL =
  "https://calendly.com/keylinkcorp/free-consultation-google-meet?hide_gdpr_banner=1";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function mergeQueryParams(baseUrl: string, search: string) {
  try {
    const url = new URL(baseUrl);
    const incoming = new URLSearchParams(search);
    incoming.forEach((value, key) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export default function CompanyFormationLanding() {
  const [estimate, setEstimate] = useState<FormationCalculatorSnapshot | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;
    return mergeQueryParams(CALENDLY_BASE_URL, window.location.search);
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Company Formation in Bahrain 2026 | Free Consultation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Company formation in Bahrain in 3–7 days. 100% foreign ownership. Transparent pricing. Book a free 30‑minute consultation with Keylink."
      );
    }

    let robots = document.querySelector(
      'meta[name="robots"][data-lp="company-formation"]'
    ) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector(
      'link[rel="canonical"][data-lp="company-formation"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/company-formation");

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute("content", previousDescription);
      }
      robots?.remove();
      canonical?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
        <LandingHeader onLogoClick={() => scrollToId("top")} />

        <main id="top" className="flex-1">
          <CompanyFormationHeroMontage onBookClick={() => scrollToId("start")} />

          {/* CALCULATOR (Gates booking) */}
          <section
            aria-label="Company formation cost calculator"
            className="section-spacing-sm relative overflow-hidden"
          >
            <SectionBackgroundOverlay variant="ibelick-soft" opacity={0.9} masked />

            <div id="start" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="lp-card p-5 sm:p-6 md:p-8 noise-texture">
                <div className="max-w-2xl">
                  <span className="section-badge">Start here</span>
                  <h2 className="lp-h2">Calculate your estimate</h2>
                  <p className="mt-4 lp-section-subtitle">
                    Answer a few questions to see your estimate—then book your free consultation to confirm the exact
                    costs and timeline.
                  </p>
                </div>

                <div className="mt-8">
                  <FormationCostCalculator
                    embedded
                    showHeader={false}
                    onSeeResults={(snapshot) => {
                      setEstimate(snapshot);
                      setShowBooking(true);
                      requestAnimationFrame(() => scrollToId("book"));
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {estimate && (
            <CompanyFormationEstimateSummary estimate={estimate} onContinue={() => scrollToId("book")} />
          )}

          {/* HOW IT WORKS */}
          <SplitSection
            badge="The process"
            title="How it works"
            subtitle="A simple, conversion-focused flow: clarity first, then confident next steps."
            useLpHeadings
            imageSrc={howItWorksImage}
            imageAlt="Consultant explaining the company formation process"
            imagePosition="right"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_35%]"
          >
            <div className="grid gap-4">
              {[
                {
                  title: "Book a free consultation",
                  desc: "Pick a time that suits you—book directly on this page.",
                },
                {
                  title: "We map your best setup",
                  desc: "Company type + activities + requirements + timeline.",
                },
                {
                  title: "You receive a clear checklist",
                  desc: "Documents, costs, and steps to start with confidence.",
                },
              ].map((step, idx) => (
                <div key={step.title} className="lp-card p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Step {idx + 1}</div>
                      <div className="mt-1 text-lg font-semibold text-foreground">{step.title}</div>
                      <div className="mt-2 text-sm text-muted-foreground">{step.desc}</div>
                    </div>
                    <div className="hidden sm:flex step-number">{idx + 1}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 lp-card-flat bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Want exact costs + timeline?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Book the free call and we’ll tailor it to your activities and shareholders.
                  </p>
                </div>
                <Button onClick={() => scrollToId("book")}>Book now</Button>
              </div>
            </div>
          </SplitSection>

          {/* CONSULTATION VALUE */}
          <CompanyFormationCallSection />

          {/* TRUST + QUALIFYING (Moved below call section) */}
          <CompanyFormationTrustBar />
          <CompanyFormationSegmentSwitcher
            onScrollToCalculator={() => scrollToId("start")}
            onScrollToBooking={() => scrollToId("book")}
          />
          <CompanyFormationPricingSection
            onScrollToCalculator={() => scrollToId("start")}
            onScrollToBooking={() => scrollToId("book")}
          />

          {/* BOOKING (revealed after form submit) */}
          <div id="book" />
            {showBooking && (
              <section aria-label="Book free consultation" className="section-spacing-sm">
                <div className="container mx-auto px-4 md:px-6">
                  <span className="section-badge">Booking</span>
                  <h2 className="lp-h2">Book your free consultation</h2>
                  <p className="mt-4 lp-section-subtitle">Free, 30 minutes, no obligation—book directly below.</p>
                </div>
              <CalendlyBooking
                variant="plain"
                calendlyUrl={calendlyUrl}
                sectionId="book"
                imageSrc={bookingImage}
                imageAlt="Founder on a video call with a consultant"
              />
            </section>
          )}

          {/* TESTIMONIALS */}
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="ibelick-lines" opacity={0.8} masked />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <span className="section-badge">Results</span>
              <h2 className="lp-h2">Client feedback</h2>
              <p className="mt-4 lp-section-subtitle">A few recent outcomes—kept short for ad traffic.</p>

              <div className="mt-8">
                <div className="lp-card overflow-hidden">
                  <div className="relative aspect-[16/6]">
                    <img
                      src={testimonialsImage}
                      alt="Happy clients and consultants after a successful meeting"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                    />
                    <div aria-hidden className="absolute inset-0 overlay-navy-vertical opacity-60" />
                    <div aria-hidden className="absolute inset-0 overlay-gold-accent opacity-50" />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Client testimonial",
                    quote:
                      "Clear process, fast turnaround, and a transparent cost breakdown. Booking was easy and the checklist saved us time.",
                    img: testimonial1,
                  },
                  {
                    name: "Client testimonial",
                    quote:
                      "They explained the best structure for our business and guided us through requirements step-by-step. Very responsive team.",
                    img: testimonial2,
                  },
                ].map((t) => (
                  <div key={t.quote} className="lp-card p-6 sm:p-7 flex gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                      <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="lg:col-span-12">
                <span className="section-badge">FAQ</span>
                <h2 className="lp-h2">Questions (answered clearly)</h2>

                <div className="mt-8">
                  <div className="lp-card p-3 md:p-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="a">
                        <AccordionTrigger className="text-sm font-semibold">
                          How fast can I register a company in Bahrain?
                        </AccordionTrigger>
                        <AccordionContent>
                          Many setups can be completed in roughly 3–7 business days, depending on activities, approvals,
                          and documents.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="b">
                        <AccordionTrigger className="text-sm font-semibold">
                          Can foreigners own 100% of a Bahrain company?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes—many activities allow 100% foreign ownership. We’ll confirm eligibility based on your
                          activity and structure.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="c">
                        <AccordionTrigger className="text-sm font-semibold">
                          What documents do I need?
                        </AccordionTrigger>
                        <AccordionContent>
                          It depends on the structure and shareholders. After your call, we’ll share a clear document
                          checklist tailored to you.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="d">
                        <AccordionTrigger className="text-sm font-semibold">
                          Is the consultation really free?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes—30 minutes, no obligation. The goal is to give you clarity on cost, timeline, and next
                          steps.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="e">
                        <AccordionTrigger className="text-sm font-semibold">
                          Do you support MOIC/LMRA procedures?
                        </AccordionTrigger>
                        <AccordionContent>
                          We guide you through MOIC/LMRA requirements and related compliance steps as part of the setup
                          plan.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="ibelick-soft" opacity={0.85} masked />

              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative overflow-hidden lp-card p-7 sm:p-8 md:p-10">
                  <div aria-hidden className="absolute inset-0 overlay-gold-radial-center opacity-35" />
                  <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                      <h2 className="lp-h2 text-foreground">Ready to start?</h2>
                    <p className="mt-3 lp-section-subtitle">
                      Book your free consultation or contact us now—everything stays on this page.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToId("book")}>
                      Book Free Consultation
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="https://wa.me/97317008888">
                        <MessageCircle className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}

