import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServicePricing } from "@/components/services/shared/ServicePricing";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { DocumentClearanceHero } from "@/components/services/document-clearance/DocumentClearanceHero";
import { DocumentClearanceAudienceClarity } from "@/components/services/document-clearance/DocumentClearanceAudienceClarity";
import { DocumentClearanceProblemAgitation } from "@/components/services/document-clearance/DocumentClearanceProblemAgitation";
import { DocumentClearanceWhatIs } from "@/components/services/document-clearance/DocumentClearanceWhatIs";
import { DocumentClearanceServicesGrid } from "@/components/services/document-clearance/DocumentClearanceServicesGrid";
import { DocumentClearanceAgenciesCovered } from "@/components/services/document-clearance/DocumentClearanceAgenciesCovered";
import { DocumentClearanceProcessTimeline } from "@/components/services/document-clearance/DocumentClearanceProcessTimeline";
import { DocumentClearanceDIYComparison } from "@/components/services/document-clearance/DocumentClearanceDIYComparison";
import { DocumentClearanceCaseStudy } from "@/components/services/document-clearance/DocumentClearanceCaseStudy";
import { DocumentClearanceTeamAuthority } from "@/components/services/document-clearance/DocumentClearanceTeamAuthority";
import { documentClearanceFAQData } from "@/components/services/document-clearance/documentClearanceFAQData";
import { documentClearanceSchema } from "@/lib/schema/documentClearanceSchema";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import {
  FileCheck,
  Building2,
  Clock,
  Award,
  RefreshCw,
  Plane,
  Scale
} from "lucide-react";

const trustBarStats = [
  { icon: FileCheck, value: 2500, suffix: "+", label: "Clearances Processed" },
  { icon: Building2, value: 7, suffix: "+", label: "Agencies Covered" },
  { icon: Clock, value: 98, suffix: "%", label: "Same-Day Rate" },
  { icon: Award, value: 0, suffix: "", label: "Client Office Visits" }
];

const pricingTiers = [
  {
    name: "Per-Clearance",
    price: "BHD 25",
    period: "from",
    description: "Pay only when you need it",
    features: [
      "Single clearance certificate",
      "Government fees included",
      "Collection & delivery",
      "WhatsApp updates",
      "1-3 day processing"
    ],
    ctaText: "Request Quote",
    ctaHref: "https://wa.me/97317000000"
  },
  {
    name: "Exit Bundle",
    price: "BHD 150",
    period: "",
    description: "Complete employee exit package",
    popular: true,
    features: [
      "LMRA + Tax + SIO clearances",
      "All government fees included",
      "Priority processing",
      "Single point of contact",
      "Delivery to office",
      "Visa cancellation support"
    ],
    ctaText: "Get Started",
    ctaHref: "https://wa.me/97317000000"
  },
  {
    name: "Corporate Retainer",
    price: "BHD 300",
    period: "month",
    description: "For HR teams with ongoing needs",
    features: [
      "Unlimited clearance requests",
      "Same-day priority",
      "Dedicated account manager",
      "Proactive deadline tracking",
      "Volume discounts on fees",
      "Monthly compliance report"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact"
  }
];

const relatedServices = [
  {
    icon: Building2,
    title: "PRO Services",
    description: "Complete government liaison services across 15+ ministries",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: Scale,
    title: "Company Liquidation",
    description: "Full closure support with all required clearances",
    href: "/services/company-liquidation",
    price: "BHD 1,500"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "Annual commercial registration renewal services",
    href: "/services/cr-renewal",
    price: "BHD 150"
  }
];

export default function DocumentClearance() {
  useEffect(() => {
    document.title = "Document Clearance Bahrain | Same-Day Certificates | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get document clearance certificates in Bahrain same-day. Tax, LMRA, Police, SIO clearances. 7+ agencies covered. Fixed pricing from BHD 25. Zero office visits.");
    }

    const existingSchema = document.querySelector('script[data-schema="document-clearance"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "document-clearance");
      script.textContent = JSON.stringify(documentClearanceSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="document-clearance"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* 1. Hero */}
        <DocumentClearanceHero />
        
        {/* 2. Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* 3. Audience Clarity */}
        <DocumentClearanceAudienceClarity />
        
        {/* 4. Problem Agitation */}
        <DocumentClearanceProblemAgitation />
        
        {/* 5. What Is Document Clearance */}
        <DocumentClearanceWhatIs />
        
        {/* 6. Services Grid */}
        <DocumentClearanceServicesGrid />
        
        {/* 7. Agencies Covered */}
        <DocumentClearanceAgenciesCovered />
        
        {/* 8. Process Timeline */}
        <DocumentClearanceProcessTimeline />
        
        {/* 9. DIY Comparison */}
        <DocumentClearanceDIYComparison />
        
        {/* 10. Pricing */}
        <ServicePricing
          badge="Transparent Pricing"
          title="Document Clearance Pricing"
          subtitle="Clear pricing with no hidden fees"
          tiers={pricingTiers}
        />
        
        {/* 11. Case Study */}
        <DocumentClearanceCaseStudy />
        
        {/* 12. Team Authority */}
        <DocumentClearanceTeamAuthority />
        
        {/* 13. Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Business Support"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/document-clearance"
        />
        
        {/* 14. FAQ */}
        <ServiceFAQ
          badge="Document Clearance FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about clearance certificates"
          faqs={documentClearanceFAQData}
        />
        
        {/* 15. CTA */}
        <ServiceCTA
          badge="Skip the Queues"
          title="Let Us Handle Your Clearance Certificates"
          subtitle="Professional clearance services that save your team time and eliminate compliance stress"
          primaryCTA={{ text: "WhatsApp Us Now", href: "https://wa.me/97317000000" }}
          secondaryCTA={{ text: "Request a Quote", href: "/contact" }}
          features={["Same-Day Processing", "All Agencies", "Fixed Pricing"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
