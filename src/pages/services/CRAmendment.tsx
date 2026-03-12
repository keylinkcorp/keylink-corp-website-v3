import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { CRAmendmentHero } from "@/components/services/cr-amendment/CRAmendmentHero";
import { CRAmendmentTrustBar } from "@/components/services/cr-amendment/CRAmendmentTrustBar";
import { CRAmendmentCostCalculator } from "@/components/services/cr-amendment/CRAmendmentCostCalculator";
import { WhatIsCRAmendment } from "@/components/services/cr-amendment/WhatIsCRAmendment";
import { AmendmentTypesDeepDive } from "@/components/services/cr-amendment/AmendmentTypesDeepDive";
import { CommonMistakes } from "@/components/services/cr-amendment/CommonMistakes";
import { CRAmendmentProcess } from "@/components/services/cr-amendment/CRAmendmentProcess";
import { CRAmendmentRequirements } from "@/components/services/cr-amendment/CRAmendmentRequirements";
import { CRAmendmentGovernmentFees } from "@/components/services/cr-amendment/CRAmendmentGovernmentFees";
import { RegulatoryUpdates2024 } from "@/components/services/cr-amendment/RegulatoryUpdates2024";
import { CRAmendmentFAQ } from "@/components/services/cr-amendment/CRAmendmentFAQ";
import { CRAmendmentCTA } from "@/components/services/cr-amendment/CRAmendmentCTA";
import { crAmendmentSchema } from "@/lib/schema/crAmendmentSchema";

const CRAmendment = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "CR Amendment Bahrain - Modify Your Commercial Registration in 2-5 Days | Keylink Corp";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert CR amendment services in Bahrain. Activity changes, shareholder transfers, capital adjustments through Sijilat. 2-5 day processing, 100% success rate. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert CR amendment services in Bahrain. Activity changes, shareholder transfers, capital adjustments through Sijilat. 2-5 day processing, 100% success rate. Free consultation.";
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/cr-amendment");

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[data-schema="cr-amendment"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "cr-amendment");
    schemaScript.textContent = JSON.stringify(crAmendmentSchema);
    document.head.appendChild(schemaScript);

    return () => {
      const schema = document.querySelector('script[data-schema="cr-amendment"]');
      if (schema) schema.remove();
    };
  }, []);

  return (
    <Layout>
      <CRAmendmentHero />
      <CRAmendmentTrustBar />
      <CRAmendmentCostCalculator />
      <WhatIsCRAmendment />
      <AmendmentTypesDeepDive />
      <CommonMistakes />
      <CRAmendmentProcess />
      <CRAmendmentRequirements />
      <CRAmendmentGovernmentFees />
      <RegulatoryUpdates2024 />
      <CRAmendmentFAQ />
      <CRAmendmentCTA />
    </Layout>
  );
};

export default CRAmendment;
