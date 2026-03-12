import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { leaseRegistrationSchema } from "@/lib/schema/leaseRegistrationSchema";

// Lease Registration Components
import { LeaseHero } from "@/components/services/lease/LeaseHero";
import { LeaseTrustBar } from "@/components/services/lease/LeaseTrustBar";
import { LeaseCostCalculator } from "@/components/services/lease/LeaseCostCalculator";
import { WhatIsLeaseRegistration } from "@/components/services/lease/WhatIsLeaseRegistration";
import { WhyRegisterLease } from "@/components/services/lease/WhyRegisterLease";
import { LeaseTypesComparison } from "@/components/services/lease/LeaseTypesComparison";
import { LeaseProcessTimeline } from "@/components/services/lease/LeaseProcessTimeline";
import { LeaseRequirements } from "@/components/services/lease/LeaseRequirements";
import { LeaseGovernmentFees } from "@/components/services/lease/LeaseGovernmentFees";
import { CommonMistakes } from "@/components/services/lease/CommonMistakes";
import { LegalFramework } from "@/components/services/lease/LegalFramework";
import { VisaCRCrossLink } from "@/components/services/lease/VisaCRCrossLink";
import { WhyChooseKeylink } from "@/components/services/lease/WhyChooseKeylink";
import { LeaseTestimonials } from "@/components/services/lease/LeaseTestimonials";
import { LeaseFAQ } from "@/components/services/lease/LeaseFAQ";
import { LeaseCTA } from "@/components/services/lease/LeaseCTA";

const LeaseRegistration = () => {
  useEffect(() => {
    // Set page title
    document.title = "Lease Contract Registration Bahrain - Same-Day RERA Registration | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Register your lease contract in Bahrain in 24-48 hours. Full RERA compliance, Arabic translation included. Protect your tenancy rights. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Register your lease contract in Bahrain in 24-48 hours. Full RERA compliance, Arabic translation included. Protect your tenancy rights. Free consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/lease-contract-registration");

    // Inject JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="lease-registration"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "lease-registration");
    script.textContent = JSON.stringify(leaseRegistrationSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup schema on unmount
      const schemaScript = document.querySelector('script[data-schema="lease-registration"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <LeaseHero />
      <LeaseTrustBar />
      <LeaseCostCalculator />
      <WhatIsLeaseRegistration />
      <WhyRegisterLease />
      <LeaseTypesComparison />
      <LeaseProcessTimeline />
      <LeaseRequirements />
      <LeaseGovernmentFees />
      <CommonMistakes />
      <LegalFramework />
      <VisaCRCrossLink />
      <WhyChooseKeylink />
      <LeaseTestimonials />
      <LeaseFAQ />
      <LeaseCTA />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
};

export default LeaseRegistration;
