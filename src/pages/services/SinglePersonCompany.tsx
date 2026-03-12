import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SPCHero } from "@/components/services/spc/SPCHero";
import { SPCTrustBar } from "@/components/services/spc/SPCTrustBar";
import { SPCCostCalculator } from "@/components/services/spc/SPCCostCalculator";
import { WhyChooseSPC } from "@/components/services/spc/WhyChooseSPC";
import { SPCLegalUpdate } from "@/components/services/spc/SPCLegalUpdate";
import { SPCvsWLLComparison } from "@/components/services/spc/SPCvsWLLComparison";
import { SPCProcessTimeline } from "@/components/services/spc/SPCProcessTimeline";
import { SPCRequirements } from "@/components/services/spc/SPCRequirements";
import { SPCGovernmentFees } from "@/components/services/spc/SPCGovernmentFees";
import { SPCBankAccountUpdate } from "@/components/services/spc/SPCBankAccountUpdate";
import { SPCTestimonials } from "@/components/services/spc/SPCTestimonials";
import { SPCSuccessSnapshot } from "@/components/services/spc/SPCSuccessSnapshot";
import { SPCRelatedServices } from "@/components/services/spc/SPCRelatedServices";
import { SPCFAQ } from "@/components/services/spc/SPCFAQ";
import { SPCCTA } from "@/components/services/spc/SPCCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { spcSchema } from "@/lib/schema/spcSchema";

export default function SinglePersonCompany() {
  useEffect(() => {
    // Set page title
    document.title = "Single Person Company in Bahrain - Register SPC in 3-14 Days | From BHD 750 | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Start your solo business in Bahrain with 100% foreign ownership. Register a Single Person Company (SPC) in 3-14 days from BHD 50 minimum capital. Expert MOIC registration & LMRA support. Free consultation.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/single-person-company");

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Single Person Company in Bahrain - 100% Foreign Ownership | Keylink Corp" },
      { property: "og:description", content: "Register your SPC in Bahrain in 3-14 days. Single Person Company formation from BHD 50 capital. Expert business setup services with full MOIC and LMRA compliance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://keylinkcorp.com/services/single-person-company" },
      { property: "og:image", content: "https://keylinkcorp.com/og-single-person-company.jpg" },
      { property: "og:site_name", content: "Keylink Corp" },
      { property: "og:locale", content: "en_US" },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Single Person Company in Bahrain - Start in 3-14 Days" },
      { name: "twitter:description", content: "Register SPC with 100% foreign ownership from BHD 50 minimum capital. Expert Bahrain business setup services." },
      { name: "twitter:image", content: "https://keylinkcorp.com/og-single-person-company.jpg" },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="single-person-company"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "single-person-company");
      script.textContent = JSON.stringify(spcSchema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const schemaScript = document.querySelector('script[data-schema="single-person-company"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <SPCHero />
        <SPCTrustBar />
        <SPCCostCalculator />
        <WhyChooseSPC />
        <SPCLegalUpdate />
        <SPCvsWLLComparison />
        <SPCProcessTimeline />
        <SPCRequirements />
        <SPCGovernmentFees />
        <SPCBankAccountUpdate />
        <SPCTestimonials />
        <SPCSuccessSnapshot />
        <SPCRelatedServices />
        <SPCFAQ />
        <SPCCTA />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
