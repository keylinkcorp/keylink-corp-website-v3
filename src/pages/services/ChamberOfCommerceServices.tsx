import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ChamberHero } from "@/components/services/chamber/ChamberHero";
import { ChamberTrustBar } from "@/components/services/chamber/ChamberTrustBar";
import { ChamberProblemAgitation } from "@/components/services/chamber/ChamberProblemAgitation";
import { ChamberAudienceClarity } from "@/components/services/chamber/ChamberAudienceClarity";
import { ChamberBCCIExplainer } from "@/components/services/chamber/ChamberBCCIExplainer";
import { ChamberServicePillars } from "@/components/services/chamber/ChamberServicePillars";
import { ChamberProcess } from "@/components/services/chamber/ChamberProcess";
import { ChamberDIYComparison } from "@/components/services/chamber/ChamberDIYComparison";
import { ChamberPricing } from "@/components/services/chamber/ChamberPricing";
import { ChamberGuarantees } from "@/components/services/chamber/ChamberGuarantees";
import { ChamberTeamAuthority } from "@/components/services/chamber/ChamberTeamAuthority";
import { ChamberRelatedServices } from "@/components/services/chamber/ChamberRelatedServices";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ChamberCTA } from "@/components/services/chamber/ChamberCTA";
import { chamberFAQData } from "@/components/services/chamber/chamberFAQData";
import { chamberServicesSchema } from "@/lib/schema/chamberServicesSchema";

const ChamberOfCommerceServices = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Chamber of Commerce Services Bahrain - BCCI Registration & Certificate of Origin | Keylink Corp";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert chamber of commerce services in Bahrain. BCCI membership registration, certificate of origin, document attestation. Same-day processing. 99.8% approval rate. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert chamber of commerce services in Bahrain. BCCI membership registration, certificate of origin, document attestation. Same-day processing. 99.8% approval rate. Free consultation.";
      document.head.appendChild(meta);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", "chamber of commerce bahrain, BCCI registration, certificate of origin bahrain, BCCI membership, document attestation bahrain, trade documentation bahrain, export documents bahrain, commercial invoice attestation");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/chamber-of-commerce");

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="chamber-services"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "chamber-services");
    script.text = JSON.stringify(chamberServicesSchema);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const schemaScript = document.querySelector('script[type="application/ld+json"][data-page="chamber-services"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <article itemScope itemType="https://schema.org/ProfessionalService">
        <meta itemProp="name" content="Chamber of Commerce Services Bahrain - Keylink Corp" />
        <meta itemProp="description" content="Expert chamber of commerce services in Bahrain including BCCI membership registration, certificate of origin issuance, and document attestation." />
        
        {/* Hero Section */}
        <ChamberHero />
        
        {/* Trust Bar */}
        <ChamberTrustBar />
        
        {/* Problem Agitation */}
        <ChamberProblemAgitation />
        
        {/* Audience Clarity */}
        <ChamberAudienceClarity />
        
        {/* BCCI Explainer */}
        <ChamberBCCIExplainer />
        
        {/* Service Pillars */}
        <ChamberServicePillars />
        
        {/* 3-Step Process */}
        <ChamberProcess />
        
        {/* DIY Comparison */}
        <ChamberDIYComparison />
        
        {/* Pricing */}
        <ChamberPricing />
        
        {/* Guarantees */}
        <ChamberGuarantees />
        
        {/* Team Authority */}
        <ChamberTeamAuthority />
        
        {/* Related Services */}
        <ChamberRelatedServices />
        
        {/* FAQ Section */}
        <ServiceFAQ 
          badge="Frequently Asked Questions"
          title="Chamber of Commerce Services FAQ"
          subtitle="Answers to common questions about BCCI membership and certificate of origin in Bahrain"
          faqs={chamberFAQData}
        />
        
        {/* Final CTA */}
        <ChamberCTA />
      </article>
    </Layout>
  );
};

export default ChamberOfCommerceServices;
