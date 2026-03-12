import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { AccountingHero } from "@/components/services/accounting/AccountingHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { AccountingProblemAgitation } from "@/components/services/accounting/AccountingProblemAgitation";
import { AccountingSolution } from "@/components/services/accounting/AccountingSolution";
import { AccountingCostCalculator } from "@/components/services/accounting/AccountingCostCalculator";
import { AccountingServicesGrid } from "@/components/services/accounting/AccountingServicesGrid";
import { VATDeepDive } from "@/components/services/accounting/VATDeepDive";
import { InHouseVsOutsource } from "@/components/services/accounting/InHouseVsOutsource";
import { AccountingTechStack } from "@/components/services/accounting/AccountingTechStack";
import { AccountingCaseStudy } from "@/components/services/accounting/AccountingCaseStudy";
import { AccountingTeamAuthority } from "@/components/services/accounting/AccountingTeamAuthority";
import { AccountingEndToEnd } from "@/components/services/accounting/AccountingEndToEnd";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { accountingServicesSchema } from "@/lib/schema/accountingServicesSchema";
import { accountingFAQData } from "@/components/services/accounting/accountingFAQData";
import { Building2, Calculator, FileCheck, Award, RefreshCw, Plane, UserCheck } from "lucide-react";

// Import AI-generated images
import heroImage from "@/assets/accounting-hero-professional.jpg";
import teamImage from "@/assets/accounting-team-collaboration.jpg";
import caseImage from "@/assets/accounting-success-client.jpg";
import techImage from "@/assets/accounting-cloud-dashboard.jpg";
import vatImage from "@/assets/accounting-vat-documents.jpg";
import solutionImage from "@/assets/accounting-solution-team.jpg";

const trustBarStats = [
  { icon: Building2, value: 300, suffix: "+", label: "Clients Served" },
  { icon: Calculator, value: 75, suffix: "M+", label: "BHD Managed" },
  { icon: FileCheck, value: 100, suffix: "%", label: "Audit Pass Rate" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" }
];

const relatedServices = [
  { icon: Building2, title: "Company Formation", description: "Start a new business in Bahrain", href: "/services/company-formation", price: "BHD 750" },
  { icon: RefreshCw, title: "CR Renewal", description: "Annual registration renewal", href: "/services/cr-renewal", price: "BHD 150" },
  { icon: Plane, title: "Visa & Immigration", description: "Work and family visas", href: "/services/visa-immigration", price: "BHD 250" },
  { icon: UserCheck, title: "PRO Services", description: "Government liaison", href: "/services/pro-services", price: "BHD 50" }
];

export default function AccountingServices() {
  useEffect(() => {
    // SEO: Title and Meta Description
    document.title = "Accounting Services Bahrain - Bookkeeping | VAT | Audit | CFO | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional accounting services in Bahrain. Outsourced bookkeeping, VAT registration, audit preparation & CFO advisory. NBR registered. 300+ clients served. Free consultation."
      );
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/accounting-services");

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[data-schema="accounting-services"]');
    if (!existingSchema) {
      const schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-schema", "accounting-services");
      schemaScript.textContent = JSON.stringify(accountingServicesSchema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="accounting-services"]');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return (
    <>
      <Layout>
        {/* Block 1: Hero */}
        <AccountingHero heroImage={heroImage} />
        
        {/* Block 2: Interactive Calculator */}
        <AccountingCostCalculator />
        
        {/* Block 3: Services Grid */}
        <AccountingServicesGrid />
        
        {/* Block 4: Problem Agitation */}
        <AccountingProblemAgitation />
        
        {/* Block 5: VAT Deep Dive */}
        <VATDeepDive vatImage={vatImage} />
        
        {/* Block 6: Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* Block 7: Solution */}
        <AccountingSolution solutionImage={solutionImage} />
        
        {/* Block 8: In-House vs Outsource Comparison */}
        <InHouseVsOutsource />
        
        {/* Block 9: Tech Stack */}
        <AccountingTechStack techImage={techImage} />
        
        {/* Block 10: Case Study */}
        <AccountingCaseStudy caseImage={caseImage} />
        
        {/* Block 11: Team Authority */}
        <AccountingTeamAuthority teamImage={teamImage} />
        
        {/* Block 12: End-to-End Integration */}
        <AccountingEndToEnd />
        
        {/* Block 13: Related Services */}
        <RelatedServicesGrid 
          badge="Related" 
          title="Complete Business Services" 
          services={relatedServices} 
          currentService="/services/accounting-services" 
        />
        
        {/* Block 14: FAQ */}
        <ServiceFAQ 
          badge="FAQ" 
          title="Accounting Questions Answered" 
          faqs={accountingFAQData} 
        />
        
        {/* Block 15: Final CTA */}
        <ServiceCTA 
          badge="Get Started" 
          title="Your Books Shouldn't Keep You Up at Night" 
          subtitle="Book your free financial health check. We'll assess your current setup and recommend the right service tier — no obligation."
          primaryCTA={{ text: "Book Free Consultation", href: "/contact" }} 
          features={["NBR Registered", "Dedicated Team", "Audit-Ready"]} 
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
