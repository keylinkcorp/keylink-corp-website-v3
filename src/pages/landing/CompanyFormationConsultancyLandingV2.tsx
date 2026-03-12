import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Check, Clock, ClipboardList, Route, Shield, Sparkles } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { MobileStickyConsultationBar } from "@/components/landing/MobileStickyConsultationBar";
import { CompanyLogosTicker } from "@/components/landing/CompanyLogosTicker";
import { ConsultancyCostCalculator } from "@/components/landing/consultancy/ConsultancyCostCalculator";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";
import { ConsultancyV2Footer } from "@/components/landing/v2/ConsultancyV2Footer";
import { ConsultancyV2Header } from "@/components/landing/v2/ConsultancyV2Header";

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

const FAQS: FaqItem[] = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes—30 minutes, no obligation. You'll get a clear set of next steps, a realistic sequence, and a tailored checklist. Government fees (if any) are always paid directly to the relevant authorities.",
  },
  {
    question: "Can foreigners own 100% of a Bahrain company?",
    answer:
      "Many activities can support full overseas ownership, but it depends on your exact activity and structure. We'll explain what's typically workable for your case and what approvals may apply.",
  },
  {
    question: "How long does formation usually take?",
    answer:
      "Timelines vary by activity, shareholder profile, and approvals. In the call, we map the realistic sequence and help you avoid common delays.",
  },
  {
    question: "Do you issue the Commercial Registration (CR)?",
    answer:
      "No. We are an independent business consultancy. CR is issued only by Bahrain government authorities.",
  },
];

export default function CompanyFormationConsultancyLandingV2() {
  const navigate = useNavigate();

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
        "Start with a simple cost calculator, then book a free 30-minute consultation for Bahrain company formation guidance."
      );
    }

    let robots = document.querySelector('meta[name="robots"][data-lp="company-formation-consultancy-v2"]') as
      | HTMLMetaElement
      | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation-consultancy-v2");
      document.head.appendChild(robots);
    }
    // Keep noindex until you decide to promote V2.
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector('link[rel="canonical"][data-lp="company-formation-consultancy-v2"]') as
      | HTMLLinkElement
      | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation-consultancy-v2");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/lp/company-formation-consultancy-v2");

    // Add FAQ JSON-LD
    let ld = document.querySelector('script[type="application/ld+json"][data-lp="cfc-v2-faq"]') as
      | HTMLScriptElement
      | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.setAttribute("data-lp", "cfc-v2-faq");
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
    <div className="min-h-screen bg-muted/20">
      <div className="cfc-typography mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
        <ConsultancyV2Header onLogoClick={() => scrollToId("top")} onPrimaryClick={() => scrollToId("calculator")} />

        <main id="top" className="flex-1">
          <CompanyFormationHeroMontage
            onBookClick={() => scrollToId("calculator")}
            badgeText="Calculator-first • Free 30‑minute consultation"
            title="Company Formation Consultancy in Bahrain"
            titleSuffix=""
            lead="Start with a simple cost calculator, then get independent guidance on structure, approvals, and a realistic setup sequence—before you commit time or fees."
            bullets={[
              { icon: Check, text: "Simple cost drivers first (calculator)" },
              { icon: Shield, text: "Independent guidance + checklist" },
              { icon: Clock, text: "Realistic timeline and sequencing" },
            ]}
            primaryCtaLabel="Start cost calculator"
            phoneCta={{ href: "tel:+97317008888", label: "Call +97317008888" }}
            showWhatsApp={false}
            socialProofLine="4.9/5 reviews • 500+ clients supported • Response within 1 business day"
          />

          <CompanyLogosTicker />

          {/* OUTCOME STRIP */}
          <section aria-label="Outcomes" className="relative border-y border-border/60 bg-muted/10">
            <div className="container mx-auto px-4 md:px-6 py-8">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "A tailored checklist",
                    desc: "Know exactly what to prepare (and in what order).",
                    Icon: ClipboardList,
                  },
                  {
                    title: "A realistic sequence",
                    desc: "Understand approvals, dependencies, and timing.",
                    Icon: Route,
                  },
                  {
                    title: "Clear next steps",
                    desc: "Leave the call with a plan you can actually follow.",
                    Icon: Sparkles,
                  },
                ].map((i) => (
                  <div key={i.title} className="lp-card-flat bg-background/70 backdrop-blur-sm p-6">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                        <i.Icon className="h-5 w-5 text-accent" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{i.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COST CALCULATOR */}
          <section
            id="calculator"
            aria-label="Cost calculator"
            className="section-spacing-sm relative overflow-hidden bg-secondary/30 scroll-mt-24"
          >
            <SectionBackgroundOverlay variant="grid-lines" opacity={0.5} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <div className="lp-card p-6">
                    <p className="text-sm text-muted-foreground">Takes ~2 minutes</p>
                    <h2 className="mt-2 lp-h2">Get a quick estimate</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      No pricing tables here—just the inputs that actually change your costs.
                    </p>

                    <div className="mt-6">
                      <Button className="w-full" onClick={() => scrollToId("calculator-form")}>Start</Button>
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground">
                      Then you can book your free call and we’ll confirm the checklist + sequence.
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="section-badge">Calculator</span>
                  <h3 className="lp-h2" id="calculator-form">Answer a few questions</h3>
                  <p className="lp-section-subtitle max-w-2xl">
                    You’ll see the key cost drivers, then continue to your free consultation.
                  </p>

                  <div className="mt-8">
                    <ConsultancyCostCalculator onContinue={() => navigate("/free-consultation")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DIY vs GUIDED */}
          <section aria-label="DIY vs guided" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <span className="section-badge">Decision clarity</span>
                  <h2 className="lp-h2">DIY vs guided: what changes?</h2>
                  <p className="lp-section-subtitle">
                    We don’t replace government authorities—we reduce uncertainty, back-and-forth, and avoidable delays.
                  </p>
                </div>

                <div className="lg:col-span-7 grid gap-4 md:grid-cols-2">
                  <div className="lp-card p-6">
                    <p className="text-sm font-semibold">DIY path</p>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Research approvals across sources</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Trial-and-error on sequencing</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Unclear document readiness</li>
                    </ul>
                  </div>
                  <div className="lp-card p-6">
                    <p className="text-sm font-semibold">Guided with us</p>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Tailored checklist + sequencing</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Clear cost drivers & trade-offs</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />Realistic timeline expectations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS TIMELINE */}
          <section aria-label="Process timeline" className="section-spacing-sm relative overflow-hidden bg-muted/10">
            <div className="container mx-auto px-4 md:px-6 relative">
              <div className="max-w-3xl">
                <span className="section-badge">Process</span>
                <h2 className="lp-h2">What happens after the calculator?</h2>
                <p className="lp-section-subtitle">
                  A simple, structured flow—so you know what to expect.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  { title: "1) You book a free call", desc: "Pick a time that works. Google Meet. 30 minutes." },
                  { title: "2) We confirm your inputs", desc: "We validate the cost drivers and clarify what approvals typically apply." },
                  { title: "3) You receive a checklist", desc: "Tailored documents list + sequence based on shareholders/activity." },
                  { title: "4) You proceed with clarity", desc: "If you want ongoing guidance, we align on next steps and coordination." },
                ].map((s, idx) => (
                  <div key={s.title} className="lp-card p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                          <Check className="h-5 w-5 text-accent" />
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
                <Button onClick={() => scrollToId("book")}>Book free consultation</Button>
                <Button variant="outline" onClick={() => scrollToId("calculator")}>Edit calculator inputs</Button>
              </div>
            </div>
          </section>

          {/* BOOKING */}
          <section id="book" aria-label="Book" className="section-spacing-sm scroll-mt-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <span className="section-badge">Free call</span>
                  <h2 className="lp-h2">Book your 30‑minute consultation</h2>
                  <p className="lp-section-subtitle">
                    We’ll review your activity + shareholders, and share a realistic sequence and checklist.
                  </p>
                  <div className="mt-5 lp-card-flat bg-muted/20 p-6">
                    <p className="text-sm font-semibold text-foreground">You’ll leave with:</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />A tailored checklist</li>
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />A realistic timeline</li>
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />Clear next steps</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="lp-card p-3 md:p-4">
                    <CalendlyBooking calendlyUrl={calendlyUrl} variant="plain" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section aria-label="FAQs" className="section-spacing-sm bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">FAQs</span>
                <h2 className="lp-h2">Common questions</h2>
                <p className="lp-section-subtitle">Short, direct answers—then we personalize it on the call.</p>
              </div>

              <div className="mt-8 lp-card p-2 md:p-3">
                <Accordion type="single" collapsible>
                  {FAQS.map((f, idx) => (
                    <AccordionItem key={f.question} value={`faq-${idx}`}>
                      <AccordionTrigger className="px-4 md:px-5">{f.question}</AccordionTrigger>
                      <AccordionContent className="px-4 md:px-5 text-sm text-muted-foreground">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          <MobileStickyConsultationBar onConsultationClick={() => scrollToId("calculator")} />
        </main>

        <ConsultancyV2Footer />
      </div>
    </div>
  );
}
