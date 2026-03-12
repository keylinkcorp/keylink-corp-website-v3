import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { TaxHero } from "@/components/services/tax/TaxHero";
import { TaxTrustBar } from "@/components/services/tax/TaxTrustBar";
import { TaxProblemAgitation } from "@/components/services/tax/TaxProblemAgitation";
import { TaxAudienceClarity } from "@/components/services/tax/TaxAudienceClarity";
import { TaxVATExplainer } from "@/components/services/tax/TaxVATExplainer";
import { TaxServicePillars } from "@/components/services/tax/TaxServicePillars";
import { TaxDIYComparison } from "@/components/services/tax/TaxDIYComparison";
import { TaxCaseStudy } from "@/components/services/tax/TaxCaseStudy";
import { TaxTeamAuthority } from "@/components/services/tax/TaxTeamAuthority";
import { TaxRelatedServices } from "@/components/services/tax/TaxRelatedServices";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { TaxCTA } from "@/components/services/tax/TaxCTA";
import { taxFAQData } from "@/components/services/tax/taxFAQData";
import { taxServicesSchema } from "@/lib/schema/taxServicesSchema";

const TaxServices = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Tax Services Bahrain - VAT Registration, Filing & Corporate Tax | Keylink Corp";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert tax services in Bahrain. VAT registration, quarterly filing, corporate tax advisory. NBR-registered agents. 100% compliance rate. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert tax services in Bahrain. VAT registration, quarterly filing, corporate tax advisory. NBR-registered agents. 100% compliance rate. Free consultation.";
      document.head.appendChild(meta);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", "tax services bahrain, VAT registration bahrain, VAT filing bahrain, corporate tax bahrain, NBR registration, tax compliance bahrain, VAT returns bahrain, tax advisory bahrain");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/tax-services");

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="tax-services"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "tax-services");
    script.text = JSON.stringify(taxServicesSchema);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const schemaScript = document.querySelector('script[type="application/ld+json"][data-page="tax-services"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <article itemScope itemType="https://schema.org/ProfessionalService">
        <meta itemProp="name" content="Tax Services Bahrain - Keylink Corp" />
        <meta itemProp="description" content="Expert tax services in Bahrain including VAT registration, quarterly return filing, corporate tax advisory, and NBR compliance audits." />
        
        {/* Hero Section */}
        <TaxHero />
        
        {/* Trust Bar */}
        <TaxTrustBar />
        
        {/* Problem Agitation - Penalty Reality Check */}
        <TaxProblemAgitation />
        
        {/* Audience Clarity */}
        <TaxAudienceClarity />
        
        {/* VAT Explainer */}
        <TaxVATExplainer />
        
        {/* Service Pillars */}
        <TaxServicePillars />
        
        {/* DIY Comparison */}
        <TaxDIYComparison />
        
        {/* Case Study */}
        <TaxCaseStudy />
        
        {/* Team Authority */}
        <TaxTeamAuthority />
        
        {/* Related Services */}
        <TaxRelatedServices />
        
        {/* FAQ Section */}
        <ServiceFAQ 
          badge="Frequently Asked Questions"
          title="Tax Services FAQ"
          subtitle="Answers to common questions about VAT and tax compliance in Bahrain"
          faqs={taxFAQData}
        />
        
        {/* Final CTA */}
        <TaxCTA />
      </article>
    </Layout>
  );
};

export default TaxServices;
