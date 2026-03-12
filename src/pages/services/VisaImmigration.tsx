import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { visaImmigrationSchema } from "@/lib/schema/visaImmigrationSchema";
import visaServicesImage from "@/assets/visa-services.jpg";

// New enhanced visa components
import {
  VisaServicesHero,
  VisaProblemAgitation,
  VisaComparisonTable,
  VisaProcessTimeline,
  VisaDocumentChecklists,
  VisaPricingCards,
  VisaApprovalGuarantee,
  VisaFAQ,
  GoldenVisaSection
} from "@/components/services/visa";

import {
  Plane,
  Clock,
  CheckCircle2,
  Users,
  Globe,
  Headphones,
  Shield,
  Building2,
  RefreshCw,
  UserCheck,
  Calculator
} from "lucide-react";

const trustBarStats = [
  { icon: Plane, value: 5000, suffix: "+", label: "Visas Processed" },
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Approval Rate" },
  { icon: Clock, value: 5, suffix: "days", label: "Average Processing" },
  { icon: Globe, value: 40, suffix: "+", label: "Nationalities Served" }
];

const whyChooseDifferentiators = [
  {
    icon: CheckCircle2,
    title: "100% Approval Rate",
    description: "We've never had a properly submitted application rejected"
  },
  {
    icon: Clock,
    title: "Fastest Processing",
    description: "Industry-leading turnaround times"
  },
  {
    icon: Globe,
    title: "All Nationalities",
    description: "Experience with 40+ nationalities"
  },
  {
    icon: Users,
    title: "Family Specialists",
    description: "Expert in dependent and family visas"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal case manager throughout"
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "100% LMRA and immigration compliant"
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
    icon: UserCheck,
    title: "PRO Services",
    description: "Government liaison and document processing",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT registration, and audit support",
    href: "/services/accounting",
    price: "BHD 200/mo"
  }
];

export default function VisaImmigration() {
  useEffect(() => {
    document.title = "Visa Services Bahrain - Work Visa, Family Visa & Golden Visa | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional visa services in Bahrain. Work visas, family visas, and 10-year Golden Visa. Fast 5-day processing with 100% approval rate. Expert immigration support for businesses and investors.");
    }

    const existingSchema = document.querySelector('script[data-schema="visa-immigration"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "visa-immigration");
      script.textContent = JSON.stringify(visaImmigrationSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="visa-immigration"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* Block 1: Enhanced Hero with AI Image */}
        <VisaServicesHero />
        
        {/* Block 2: Trust Bar with Animated Counters */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* Block 3: Problem Agitation Section */}
        <VisaProblemAgitation />
        
        {/* Block 4: Visa Type Comparison Table */}
        <VisaComparisonTable />
        
        {/* Block 5: 3-Phase Process Timeline */}
        <VisaProcessTimeline />
        
        {/* Block 6: Golden Visa Deep-Dive with AI Image */}
        <GoldenVisaSection />
        
        {/* Block 7: Document Checklists (Tabbed) */}
        <VisaDocumentChecklists />
        
        {/* Block 8: Transparent Pricing Cards */}
        <VisaPricingCards />
        
        {/* Block 9: 100% Approval Guarantee */}
        <VisaApprovalGuarantee />
        
        {/* Block 10: Why Choose Keylink */}
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Why Businesses Trust Keylink for Visa Services"
          subtitle="5,000+ visas processed with 100% approval rate"
          differentiators={whyChooseDifferentiators}
          imageSrc={visaServicesImage}
          imageAlt="Visa processing and passport services"
          floatingStatValue="100%"
          floatingStatLabel="Approval Rate"
        />
        
        {/* Block 11: Expanded FAQ (12+ Questions, Two-Column) */}
        <VisaFAQ />
        
        {/* Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Your Business Journey"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/visa-immigration"
        />
        
        {/* Block 12: Final CTA Section */}
        <ServiceCTA
          badge="Ready to Move to Bahrain?"
          title="Start Your Bahrain Visa Application Today"
          subtitle="Expert support from eligibility assessment to CPR card collection. 100% approval rate guaranteed."
          primaryCTA={{ text: "WhatsApp Consultation", href: "https://wa.me/97317000000" }}
          secondaryCTA={{ text: "Call Us", href: "tel:+97317000000" }}
          features={["5-Day Processing", "100% Approval Rate", "Family Support"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
