import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServicePricing } from "@/components/services/shared/ServicePricing";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { PROHero } from "@/components/services/pro/PROHero";
import { PROAudienceClarity } from "@/components/services/pro/PROAudienceClarity";
import { PROProblemAgitation } from "@/components/services/pro/PROProblemAgitation";
import { PROWhatIs } from "@/components/services/pro/PROWhatIs";
import { PROSolutionFramework } from "@/components/services/pro/PROSolutionFramework";
import { PROServicesList } from "@/components/services/pro/PROServicesList";
import { PROProcessTimeline } from "@/components/services/pro/PROProcessTimeline";
import { MinistriesCovered } from "@/components/services/pro/MinistriesCovered";
import { PRODIYComparison } from "@/components/services/pro/PRODIYComparison";
import { PROTeamAuthority } from "@/components/services/pro/PROTeamAuthority";
import { PROCaseStudy } from "@/components/services/pro/PROCaseStudy";
import { proFAQData } from "@/components/services/pro/proFAQData";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { proServicesSchema } from "@/lib/schema/proServicesSchema";
import {
  FileCheck,
  Clock,
  Building2,
  Award,
  RefreshCw,
  Plane,
  Calculator
} from "lucide-react";

const trustBarStats = [
  { icon: FileCheck, value: 5000, suffix: "+", label: "Documents Processed" },
  { icon: Building2, value: 15, suffix: "+", label: "Ministries Covered" },
  { icon: Clock, value: 98, suffix: "%", label: "Same-Day Rate" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" }
];

const pricingTiers = [
  {
    name: "Per-Task",
    price: "BHD 25",
    period: "from",
    description: "Pay only when you need it",
    features: [
      "Single document processing",
      "Government fee handling",
      "Collection & delivery",
      "WhatsApp updates",
      "24-48hr processing"
    ],
    ctaText: "Request Quote",
    ctaHref: "/contact"
  },
  {
    name: "Monthly Retainer",
    price: "BHD 300",
    period: "month",
    description: "For growing businesses",
    popular: true,
    features: [
      "Up to 10 tasks included",
      "Priority processing",
      "Dedicated PRO assigned",
      "Renewal reminders",
      "WhatsApp support",
      "Additional tasks at BHD 25"
    ],
    ctaText: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Premium Unlimited",
    price: "BHD 500",
    period: "month",
    description: "For enterprises needing full coverage",
    features: [
      "Unlimited PRO tasks",
      "Same-day priority",
      "Senior PRO assigned",
      "All renewals managed",
      "Quarterly compliance review",
      "24/7 emergency support"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact"
  }
];

const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Start a new business in Bahrain with 100% foreign ownership",
    href: "/services/company-formation",
    price: "BHD 750"
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "Annual commercial registration renewal services",
    href: "/services/cr-renewal",
    price: "BHD 150"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT registration, and audit support",
    href: "/services/accounting",
    price: "BHD 200/mo"
  }
];

export default function PROServices() {
  useEffect(() => {
    document.title = "PRO Services Bahrain | Government Liaison & Document Processing | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional PRO services in Bahrain. Same-day document processing across 15+ ministries. No office visits required. Fixed pricing from BHD 50. Skip the queues today.");
    }

    const existingSchema = document.querySelector('script[data-schema="pro-services"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "pro-services");
      script.textContent = JSON.stringify(proServicesSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="pro-services"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* 1. Hero */}
        <PROHero />
        
        {/* 2. Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />

        {/* 3. Services List */}
        <PROServicesList />
        
        {/* 4. Audience Clarity */}
        <PROAudienceClarity />
        
        {/* 5. Problem Agitation */}
        <PROProblemAgitation />
        
        {/* 6. What Is a PRO */}
        <PROWhatIs />
        
        {/* 7. Solution Framework */}
        <PROSolutionFramework />
        
        {/* 8. Process Timeline */}
        <PROProcessTimeline />
        
        {/* 9. Ministries Covered */}
        <MinistriesCovered />
        
        {/* 10. DIY Comparison */}
        <PRODIYComparison />
        
        {/* 11. Pricing */}
        <ServicePricing
          badge="Transparent Pricing"
          title="PRO Services Pricing"
          subtitle="Choose pay-per-task or save with a monthly retainer"
          tiers={pricingTiers}
        />
        
        {/* 12. Team Authority */}
        <PROTeamAuthority />
        
        {/* 13. Case Study */}
        <PROCaseStudy />
        
        {/* 14. Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Business Support"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/pro-services"
        />
        
        {/* 15. FAQ */}
        <ServiceFAQ
          badge="PRO Services FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our PRO services"
          faqs={proFAQData}
        />
        
        {/* 16. CTA */}
        <ServiceCTA
          badge="Skip the Queues"
          title="Let Us Handle Your Government Paperwork"
          subtitle="Professional PRO services that save you time, money, and stress"
          primaryCTA={{ text: "Get PRO Support", href: "/contact" }}
          secondaryCTA={{ text: "WhatsApp Us", href: "https://wa.me/97317000000" }}
          features={["All Ministries", "Same-Day Service", "Fixed Pricing"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
