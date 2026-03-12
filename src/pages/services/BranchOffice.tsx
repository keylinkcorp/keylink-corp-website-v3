import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { branchOfficeSchema } from "@/lib/schema/branchOfficeSchema";

// Branch Office Components
import { BranchHero } from "@/components/services/branch/BranchHero";
import { BranchTrustBar } from "@/components/services/branch/BranchTrustBar";
import { BranchCostCalculator } from "@/components/services/branch/BranchCostCalculator";
import { WhatIsBranch } from "@/components/services/branch/WhatIsBranch";
import { BranchVsWLLComparison } from "@/components/services/branch/BranchVsWLLComparison";
import { WhyBahrain } from "@/components/services/branch/WhyBahrain";
import { BranchProcessTimeline } from "@/components/services/branch/BranchProcessTimeline";
import { BranchRequirements } from "@/components/services/branch/BranchRequirements";
import { BranchGovernmentFees } from "@/components/services/branch/BranchGovernmentFees";
import { BranchManagerRequirements } from "@/components/services/branch/BranchManagerRequirements";
import { WhyChooseKeylink } from "@/components/services/branch/WhyChooseKeylink";
import { BranchSuccessSnapshot } from "@/components/services/branch/BranchSuccessSnapshot";
import { BranchTestimonials } from "@/components/services/branch/BranchTestimonials";
import { BranchRelatedServices } from "@/components/services/branch/BranchRelatedServices";
import { BranchFAQ } from "@/components/services/branch/BranchFAQ";
import { BranchCTA } from "@/components/services/branch/BranchCTA";

const BranchOffice = () => {
  useEffect(() => {
    // Set page title
    document.title = "Foreign Company Branch in Bahrain - Register in 7-10 Days | 100% Ownership | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Open a branch office in Bahrain with 100% foreign ownership. Register your foreign company branch in 7-10 days. No local sponsor. No minimum capital. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Open a branch office in Bahrain with 100% foreign ownership. Register your foreign company branch in 7-10 days. No local sponsor. No minimum capital. Free consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/branch-office");

    // Inject JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="branch-office"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "branch-office");
    script.textContent = JSON.stringify(branchOfficeSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup schema on unmount
      const schemaScript = document.querySelector('script[data-schema="branch-office"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <BranchHero />
      <BranchTrustBar />
      <BranchCostCalculator />
      <WhatIsBranch />
      <BranchVsWLLComparison />
      <WhyBahrain />
      <BranchProcessTimeline />
      <BranchRequirements />
      <BranchGovernmentFees />
      <BranchManagerRequirements />
      <WhyChooseKeylink />
      <BranchSuccessSnapshot />
      <BranchTestimonials />
      <BranchRelatedServices />
      <BranchFAQ />
      <BranchCTA />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
};

export default BranchOffice;
