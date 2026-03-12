import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

import {
  Check,
  Clock,
  ClipboardList,
  FileText,
  Layers,
  Mail,
  MessageSquareText,
  Phone,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { AboutConsultancySection } from "@/components/landing/AboutConsultancySection";
import { OurServicesSection } from "@/components/landing/OurServicesSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { MobileStickyConsultationBar } from "@/components/landing/MobileStickyConsultationBar";
import { ConsultancyCostCalculator } from "@/components/landing/consultancy/ConsultancyCostCalculator";
import { CompanyLogosTicker } from "@/components/landing/CompanyLogosTicker";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { SplitSection } from "@/components/shared/SplitSection";
import { EditorialImage } from "@/components/shared/EditorialImage";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

import howItWorksImage from "@/assets/company-formation/lp/how-it-works-portrait.jpg";
import bookingImage from "@/assets/company-formation/lp/booking-portrait.jpg";
import testimonialsImage from "@/assets/company-formation/lp/testimonials-portrait.jpg";

import aboutConsultancyImage from "@/assets/company-formation/consultancy/about-consultancy-young-1.jpg";
import costCalculatorPortraitImage from "@/assets/company-formation/consultancy/cost-calculator-portrait-young-1.jpg";

import consultancyHeroImage from "@/assets/formation-hero-bahrain-office-traditional-consulting-1.jpg";

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

type FaqItem = { question: string; answer: string };

type LandingNavItem = {
  id: "calculator" | "blockers" | "approach" | "services" | "reviews" | "book";
  label: string;
};

const LANDING_NAV: LandingNavItem[] = [
  { id: "calculator", label: "Calculator" },
  { id: "blockers", label: "Blockers" },
  { id: "approach", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "book", label: "Book" },
];

function LandingStickyNav({ frameMaxWidthClassName }: { frameMaxWidthClassName: string }) {
  const [active, setActive] = useState<LandingNavItem["id"]>("calculator");

  useEffect(() => {
    const ids = LANDING_NAV.map((i) => i.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most "visible" entry to avoid rapid switching.
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const nextId = best?.target?.id as LandingNavItem["id"] | undefined;
        if (nextId) setActive(nextId);
      },
      {
        // Account for header + sticky nav height.
        root: null,
        rootMargin: "-120px 0px -65% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky z-30 top-[72px] md:top-[84px]">
      <div className={cn("mx-auto", frameMaxWidthClassName)}>
        <div className="border-b border-border/40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative -mx-2">
              <nav
                aria-label="Section navigation"
                className="flex items-center gap-1 overflow-x-auto py-2 px-2 scroll-smooth"
              >
                {LANDING_NAV.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className={cn(
                        "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "bg-accent/12 text-foreground"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Fade edges for overflow on mobile */}
              <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
              <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FAQS: FaqItem[] = [
  {
    question: "How long does company formation in Bahrain typically take?",
    answer:
      "Timelines depend on your activity, shareholder profile, and any required approvals. In the consultation we map a realistic sequence and share a checklist so you know what to prepare and when.",
  },
  {
    question: "Can foreigners own 100% of a Bahrain company?",
    answer:
      "Many activities can support full overseas ownership, but eligibility depends on the exact activity and structure. We’ll clarify what’s typically workable for your case and what approvals may be needed.",
  },
  {
    question: "Do you issue the Commercial Registration (CR)?",
    answer:
      "No. We are an independent business consultancy. The Commercial Registration (CR) is issued only by the Bahrain government authorities.",
  },
  {
    question: "What documents do I need to start?",
    answer:
      "It varies based on shareholders, activity, and the chosen structure. After the call, we share a tailored checklist so you can prepare documents in the right order.",
  },
  {
    question: "Are government fees included in your advisory fee?",
    answer:
      "Government fees are paid directly to the relevant authorities. Our pricing covers consultancy/advisory work such as planning, checklists, guidance, and coordination.",
  },
  {
    question: "Can you help with licensing and regulatory steps?",
    answer:
      "We provide guidance on licensing pathways, common approval steps, and documentation readiness. Where specialist support is needed, we can help coordinate the right service providers.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes—30 minutes, no obligation. You’ll leave with clarity on structure options, cost drivers, a realistic timeline, and next steps.",
  },
  {
    question: "What happens after I book?",
    answer:
      "We review your activity and shareholders, outline a recommended approach, and share a practical checklist. If you want ongoing support, we’ll suggest the best advisory package for your timeline.",
  },
];

type IconCardItem = {
  title: string;
  Icon: LucideIcon;
};

const COMMON_BLOCKERS: IconCardItem[] = [
  { title: "Unclear activity approvals and licensing steps", Icon: FileText },
  { title: "Confusing documentation requirements", Icon: ClipboardList },
  { title: "Uncertain timelines and sequencing", Icon: Clock },
  { title: "Inconsistent information across sources", Icon: Layers },
  { title: "Office/address decisions affecting costs", Icon: Route },
  { title: "Visa planning and compliance considerations", Icon: Shield },
];

export default function CompanyFormationConsultancyLandingModern() {
  const navigate = useNavigate();

  const FRAME_MAX_W_CLASS = "max-w-[1260px]";

  function FullBleedSection({
    children,
    className,
    withTopBorder,
  }: {
    children: React.ReactNode;
    className?: string;
    withTopBorder?: boolean;
  }) {
    return (
      <div className={cn("relative", className)}>
        {withTopBorder ? (
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-0 w-screen -translate-x-1/2 border-t border-border/60"
          />
        ) : null}

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 bottom-0 h-0 w-screen -translate-x-1/2 border-b border-border/60"
        />

        <div className={cn("mx-auto bg-background md:border-x md:border-border/60", FRAME_MAX_W_CLASS)}>
          {children}
        </div>
      </div>
    );
  }

  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;
    return mergeQueryParams(CALENDLY_BASE_URL, window.location.search);
  }, []);

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answer },
      })),
    };
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Company Formation Consultancy Bahrain | Free Call";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Start with a simple cost calculator, then book a free 30-minute consultation for Bahrain company formation guidance.",
      );
    }

    // NOTE: Unique identifiers so we don't collide with other LP routes.
    let robots = document.querySelector(
      'meta[name="robots"][data-lp="company-formation-consultancy-modern"]',
    ) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector(
      'link[rel="canonical"][data-lp="company-formation-consultancy-modern"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/lp/company-formation-consultancy-modern");

    // Add FAQ JSON-LD (unique marker to avoid collisions)
    let ld = document.querySelector(
      'script[type="application/ld+json"][data-lp="cfc-modern-faq"]',
    ) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.setAttribute("data-lp", "cfc-modern-faq");
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(faqJsonLd);

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) metaDescription.setAttribute("content", previousDescription);
      robots?.remove();
      canonical?.remove();
      ld?.remove();
    };
  }, [faqJsonLd]);

  return (
    <div className="min-h-screen bg-muted/20 cfc-typography">
      {/* Full-width sticky header with full-width bottom border */}
      <LandingHeader layout="framed" frameMaxWidthClassName={FRAME_MAX_W_CLASS} onLogoClick={() => scrollToId("top")} />
      <main id="top" className="flex-1">
        {/* Full-width hero (no side frame borders) */}
        <CompanyFormationHeroMontage
          variant="centered"
          contentMaxWidthClassName={FRAME_MAX_W_CLASS}
          imageSrc={consultancyHeroImage}
          onBookClick={() => scrollToId("calculator")}
          badgeText="Free consultation • Independent business consultancy"
          title="Company Formation Consultancy in Bahrain"
          titleSuffix=""
          lead="Independent guidance for your Bahrain business setup—get a clear checklist, realistic timeline, and cost drivers before you commit time or fees."
          bullets={[
            { icon: Check, text: "Consultation-first: clarity before you spend" },
            { icon: Shield, text: "Guidance on typical approvals and compliance steps" },
            { icon: FileText, text: "Tailored checklist + next-step plan" },
          ]}
          primaryCtaLabel="Start cost calculator"
          phoneCta={{ href: "tel:+97317008888", label: "Call +97317008888" }}
          showWhatsApp
          socialProofLine="4.9/5 reviews • 500+ clients supported • Response within 1 business day"
        />

        {/* Logos ticker: full-width borders, framed logos */}
        <CompanyLogosTicker frameMaxWidthClassName={FRAME_MAX_W_CLASS} />

        {/* Sticky in-page navigation (framed) */}
        <LandingStickyNav frameMaxWidthClassName={FRAME_MAX_W_CLASS} />

        {/* Framed content starts AFTER the ticker */}
        <FullBleedSection withTopBorder>
          {/* COST CALCULATOR */}
          <section
            id="calculator"
            aria-label="Cost calculator"
            className="section-spacing-sm relative overflow-hidden bg-secondary/30 scroll-mt-32"
          >
            <SectionBackgroundOverlay variant="grid-lines" opacity={0.5} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <div className="lp-card p-3 sm:p-4">
                    <EditorialImage
                      src={costCalculatorPortraitImage}
                      alt="Young consulting team reviewing costs and paperwork"
                      ratio={3 / 4}
                      loading="eager"
                      overlayStrength={0.55}
                      imgClassName="object-[center_40%]"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="section-badge">Cost calculator</span>
                  <h2 className="lp-h2">Start here: get an estimate</h2>
                  <p className="lp-section-subtitle max-w-2xl">
                    Answer a few questions to see a simple cost breakdown, then continue to your free consultation.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Takes ~60 seconds", "Checklist-driven guidance", "Independent consultancy"].map((t) => (
                      <div key={t} className="rounded-xl border border-border/30 bg-card/40 px-4 py-3">
                        <p className="text-xs font-medium text-foreground/90">{t}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 lp-card-flat bg-muted/20 p-5">
                    <p className="text-xs text-muted-foreground">
                      Trusted by 500+ clients • 4.9/5 reviews • You’ll see a cost range + key drivers (then you can book).
                    </p>
                  </div>

                  <div className="mt-7">
                    <ConsultancyCostCalculator onContinue={() => navigate("/free-consultation")} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FullBleedSection>

        {/* PROBLEM */}
        <div id="blockers" className="scroll-mt-32" />
        <FullBleedSection>
          <SplitSection
            badge="Common blockers"
            title="Starting a Business in Bahrain? Here’s What Usually Slows People Down"
            subtitle="We help you turn uncertainty into a clear sequence: what to prepare, what to decide, and what to expect—before you spend time or fees."
            useLpHeadings
            align="center"
            headerPlacement="top"
            imageSrc={howItWorksImage}
            imageAlt="Consultant explaining options and requirements"
            imagePosition="right"
            mobileOrder="image-first"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_35%]"
          >
            <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
              <ul className="divide-y divide-border/40">
                {COMMON_BLOCKERS.map(({ title, Icon }) => (
                  <li key={title} className="flex gap-3 px-5 py-4 sm:px-6 sm:py-5">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/30 bg-muted/20 shrink-0">
                      <Icon className="h-[22px] w-[22px] text-muted-foreground" />
                    </span>
                    <p className="text-base font-medium leading-relaxed text-foreground/90">{title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 lp-card-flat bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">Get clarity in one free consultation.</p>
                  <p className="mt-1 text-base text-muted-foreground">Clear checklist • Realistic timeline • Plain‑English next steps</p>
                </div>
                <Button className="lp-cta" onClick={() => scrollToId("book")}>Book free consultation</Button>
              </div>
            </div>
          </SplitSection>
        </FullBleedSection>

        {/* SOLUTION (5-step process) */}
        <div id="approach" className="scroll-mt-32" />
        <FullBleedSection>
          <SplitSection
            badge="Our approach"
            title="A 5‑Step Consultancy Process (Consultation → Checklist → Guidance)"
            subtitle="We provide independent advisory and guidance; authorities issue the CR. We keep everything structured, clear, and focused on decision-making."
            useLpHeadings
            align="center"
            headerPlacement="top"
            imageSrc={bookingImage}
            imageAlt="Consultation booking and checklist preview"
            imagePosition="left"
            mobileOrder="follow-imagePosition"
            imageSticky
            variant="default"
            backgroundVariant="ibelick-lines"
            overlayOpacity={0.8}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_45%]"
          >
            <div className="grid gap-4">
              {[
                {
                  icon: Check,
                  title: "1) Free consultation",
                  desc: "We understand your activity, shareholders, and timeline—and clarify what decisions matter first.",
                },
                {
                  icon: FileText,
                  title: "2) Checklist + structure",
                  desc: "You receive a tailored document checklist and a recommended setup path based on your goals.",
                },
                {
                  icon: Shield,
                  title: "3) Compliance guidance",
                  desc: "We explain typical approvals and common requirements so you can avoid avoidable delays.",
                },
                {
                  icon: Clock,
                  title: "4) Timeline planning",
                  desc: "We sequence the steps and set realistic expectations around timing and dependencies.",
                },
                {
                  icon: Sparkles,
                  title: "5) Coordination",
                  desc: "When needed, we coordinate support services (e.g., documentation prep, address options) so the plan stays on track.",
                },
              ].map((s, idx) => (
                <div key={s.title} className="lp-card p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                        <s.icon className="h-[22px] w-[22px] text-accent" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Step {idx + 1}</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex step-number">{idx + 1}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="lp-cta" onClick={() => scrollToId("calculator")}>Start calculator</Button>
              <Button variant="outline" className="lp-cta-outline" onClick={() => scrollToId("book")}>Get Free Consultation</Button>
              <Button variant="outline" className="lp-cta-outline" asChild>
                <a href="tel:+97317008888">
                  <Phone className="mr-2 h-[22px] w-[22px]" />
                  Call for consultation
                </a>
              </Button>
            </div>
          </SplitSection>
        </FullBleedSection>

        {/* SERVICES */}
        <div id="services" className="scroll-mt-32" />
        <FullBleedSection>
          <SplitSection
            badge="Services"
            title="Business Setup Advisory Services in Bahrain"
            subtitle="Choose the support you need—then we turn it into a clear plan, checklist, and next steps."
            useLpHeadings
            imageSrc={testimonialsImage}
            imageAlt="Professional advisory meeting"
            imagePosition="right"
            mobileOrder="image-first"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_40%]"
          >
            <div className="lp-card p-3 md:p-4">
              <Accordion type="single" collapsible>
                {[
                  {
                    k: "a",
                    title: "Company Formation Advisory",
                    bullets: [
                      "Structure and ownership discussion aligned to your activity",
                      "Activity and approval pathway overview (what typically applies)",
                      "Cost drivers and trade-offs (address, staffing, timing)",
                    ],
                    Icon: Target,
                  },
                  {
                    k: "b",
                    title: "Document Checklist & Readiness Review",
                    bullets: [
                      "Tailored checklist for shareholders and structure",
                      "Document readiness review to reduce back-and-forth",
                      "Clear sequencing: what to prepare first vs later",
                    ],
                    Icon: ClipboardList,
                  },
                  {
                    k: "c",
                    title: "Licensing & Regulatory Advisory",
                    bullets: [
                      "Guidance on common approvals for your activity",
                      "Requirements overview for regulated activities (where relevant)",
                      "Compliance checkpoints to keep the process predictable",
                    ],
                    Icon: ShieldCheck,
                  },
                  {
                    k: "d",
                    title: "Corporate Structuring Consultation",
                    bullets: [
                      "Guidance on common structures (e.g., SPC, WLL, branch)",
                      "Shareholder and governance considerations",
                    ],
                    Icon: Layers,
                  },
                  {
                    k: "e",
                    title: "Support Services Coordination",
                    bullets: [
                      "Coordination with support providers when needed",
                      "Accounting and bookkeeping options overview",
                      "Banking preparation guidance (what to expect and prepare)",
                    ],
                    Icon: MessageSquareText,
                  },
                ].map((s) => (
                  <AccordionItem key={s.k} value={s.k} className="border-b border-border/30 last:border-b-0">
                    <AccordionTrigger className="text-left px-4 py-4 rounded-2xl hover:bg-muted/20 transition-colors">
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                          <s.Icon className="h-[22px] w-[22px] text-accent" />
                        </span>
                        <span className="text-sm font-medium leading-snug sm:text-[15px]">{s.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-3 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-[22px] w-[22px] text-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <OurServicesSection />
          </SplitSection>
        </FullBleedSection>

        {/* TESTIMONIALS */}
        <div id="reviews" className="scroll-mt-32" />
        <FullBleedSection>
          <section aria-label="Testimonials" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">Reviews</span>
                <h2 className="lp-h2">Clarity-first guidance (what clients say)</h2>
                <p className="lp-section-subtitle">Independent advisory, structured checklists, and realistic expectations.</p>
              </div>

              <div className="mt-6 lp-card-flat bg-muted/20 p-5">
                <p className="text-xs text-muted-foreground">
                  Social proof helps, but the fastest path is still the calculator. If you’re early-stage, start with the estimate—then book.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-border/40 bg-background">
                <div className="grid divide-y divide-border/40 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-border/40">
                  {[
                    {
                      quote:
                        "The checklist and sequencing made everything much clearer. We knew what to prepare first and avoided delays.",
                      name: "Client",
                      role: "Founder",
                      img: testimonial1,
                    },
                    {
                      quote:
                        "Practical and direct. Clear next steps, realistic timeline, and helpful coordination when we needed it.",
                      name: "Client",
                      role: "Managing Partner",
                      img: testimonial2,
                    },
                    {
                      quote:
                        "Clear cost drivers, fewer surprises. The consultation saved us weeks of back-and-forth and helped us plan approvals properly.",
                      name: "Client",
                      role: "Operations Lead",
                      img: testimonial1,
                    },
                  ].map((t, idx) => (
                    <article key={idx} className="group relative p-6 md:p-7">
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.quote}</p>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={t.img}
                            alt="Client portrait"
                            className="h-10 w-10 rounded-full object-cover border border-border/40"
                            loading="lazy"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                          </div>
                        </div>

                        <div
                          aria-hidden
                          className={cn(
                            "h-11 w-11 shrink-0 rounded-full border border-border/40",
                            "bg-background/60 flex items-center justify-center",
                            "transition-colors group-hover:bg-muted/20",
                          )}
                        >
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FullBleedSection>

        {/* ABOUT */}
        <FullBleedSection>
          <AboutConsultancySection
            imageSrc={aboutConsultancyImage}
            onBackToCalculator={() => scrollToId("calculator")}
          />
        </FullBleedSection>


        {/* BOOKING / CONTACT */}
        <div id="book" className="scroll-mt-32" />
        <FullBleedSection>
          <section aria-label="Request a free consultation" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Get started</span>
              <h2 className="lp-h2">Request your free consultation</h2>
              <p className="mt-4 lp-section-subtitle">
                Share a few details first so we can prepare the right checklist—then you can book immediately if you’d like.
              </p>
            </div>

            <div className="container mx-auto px-4 md:px-6">
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" },
                  { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="lp-card lp-hover-lift p-5 sm:p-6 md:p-7 flex items-start gap-3"
                  >
                    <c.icon className="h-[22px] w-[22px] text-accent mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-semibold text-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Secondary: Calendly */}
            <div id="book-calendly" className="mt-10">
              <div className="container mx-auto px-4 md:px-6">
                <span className="section-badge">Booking</span>
                <h3 className="lp-h2">Prefer to book immediately?</h3>
                <p className="mt-4 lp-section-subtitle">Choose a time for your free consultation—30 minutes, no obligation.</p>
              </div>

              <CalendlyBooking
                variant="plain"
                calendlyUrl={calendlyUrl}
                sectionId="book-calendly"
                imageAlt="Business consultation call preview"
              />
            </div>
          </section>
        </FullBleedSection>

        {/* FAQs */}
        <FullBleedSection>
          <section aria-label="FAQs" className="section-spacing-sm bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">FAQs</span>
                <h2 className="lp-h2">Common questions</h2>
                <p className="lp-section-subtitle">Short, direct answers—then we personalize it on the call.</p>
              </div>

              <div className="mt-8 lp-card p-2 md:p-3">
                <Accordion type="single" collapsible className="columns-1 md:columns-2 md:gap-6">
                  {FAQS.map((f, idx) => (
                    <AccordionItem
                      key={f.question}
                      value={`faq-${idx}`}
                      className="break-inside-avoid mb-2 md:mb-3"
                    >
                      <AccordionTrigger className="px-4 md:px-5 py-3 text-sm font-medium">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 md:px-5 text-sm leading-relaxed text-muted-foreground">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </FullBleedSection>

        {/* FINAL CTA */}
        <FullBleedSection>
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="radial" opacity={1} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="relative overflow-hidden lp-card p-7 sm:p-9 md:p-12 text-center">
                <div aria-hidden className="absolute inset-0 overlay-gold-radial-center opacity-25" />

                {/* Icon badge */}
                <div className="relative mx-auto mb-5 w-fit">
                  <div className="mx-auto -mt-14 h-14 w-14 rounded-2xl border border-border/40 bg-background/80 backdrop-blur flex items-center justify-center shadow-sm">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    Ready to Start Your <span className="text-accent">Business</span> in Bahrain?
                  </h2>

                  <p className="mt-4 text-base md:text-lg text-muted-foreground">
                    What happens next: we review your details, share a tailored checklist, and confirm the most practical next steps for your timeline.
                  </p>

                  <ul className="mt-7 flex flex-wrap justify-center gap-2">
                    {["Free consultation (30 min)", "Tailored checklist", "Clear timeline + cost drivers"].map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs md:text-sm text-foreground/90 backdrop-blur-sm"
                      >
                        <Check className="h-4 w-4 text-accent" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="w-full sm:w-auto lp-cta" onClick={() => scrollToId("calculator")}>
                      Start calculator
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto lp-cta-outline" onClick={() => scrollToId("book")}>
                      Get Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto lp-cta-outline" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2 h-5 w-5" />
                        Call for consultation
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 lp-card-flat bg-muted/20 p-5">
                    <p className="text-xs text-muted-foreground">
                      Want to move faster? Ask for the document checklist template during your consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FullBleedSection>


        <MobileStickyConsultationBar
          onConsultationClick={() => scrollToId("book")}
          phoneHref="tel:+97317008888"
          phoneLabel="Call for consultation"
        />

        <LandingFooter frameMaxWidthClassName={FRAME_MAX_W_CLASS} />
      </main>
    </div>
  );
}
