import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

export type FreeZoneFaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FreeZoneFaqItem[] = [
  {
    question: "Is Bahrain a free zone?",
    answer:
      "Bahrain is often described as free-zone-like because many activities allow 100% foreign ownership and have competitive tax conditions. For industrial operations, dedicated zones (BLZ, BIIP, BIW, and others) provide clearer zoning, infrastructure, and logistics advantages.",
  },
  {
    question: "Which Bahrain free zone is best for logistics?",
    answer:
      "For logistics and distribution, businesses commonly shortlist BIW (port-adjacent) and BLZ (logistics-focused). The best fit depends on your activity, space, and how you move goods (port, causeway, airport).",
  },
  {
    question: "How much does it cost to set up in a Bahrain industrial zone?",
    answer:
      "Costs depend on the company type, activity approvals, and the facility (warehouse/office/land). We’ll provide a clear cost range after a short activity and space review, including expected government fees and address costs.",
  },
  {
    question: "How long does registration take?",
    answer:
      "Many straightforward setups complete in 3–7 working days when documents and activity approvals are prepared correctly. Regulated activities may take longer.",
  },
  {
    question: "Do I need a local sponsor?",
    answer:
      "Many activities allow 100% foreign ownership. Some restricted activities may require additional structuring. We confirm eligibility before you commit to a zone or lease.",
  },
  {
    question: "What documents are typically required?",
    answer:
      "Common requirements include passport copies, proof of address, and details about shareholders and the business activity. Corporate shareholders typically need incorporation documents and board resolutions. We’ll send a checklist based on your exact structure.",
  },
];

export function FreeZoneFAQ(props: { items?: FreeZoneFaqItem[] }) {
  const items = props.items ?? defaultFaqs;

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answer },
      })),
    };
  }, [items]);

  return (
    <section className="section-spacing relative overflow-hidden bg-secondary/40">
      <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} className="opacity-55" />
      <SectionBackgroundOverlay variant="grid-lines" opacity={0.45} masked />
      {/* JSON-LD (kept in-body for SPA; crawlers can still read it) */}
      <script
        type="application/ld+json"
        data-schema="free-zone-bahrain-faq"
        // Avoid React managing text children inside <script>, which can trigger DOM removeChild errors
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 md:mb-12">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">FAQs</p>
            <h2 className="mt-3 text-balance">Free zone in Bahrain: common questions</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              Short answers for fast decisions. If your activity is regulated, we’ll confirm the exact approval path.
            </p>
          </header>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {items.map((faq, idx) => (
                  <AccordionItem key={faq.question} value={`fz-${idx}`} className="border-border">
                    <AccordionTrigger className="text-left text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
