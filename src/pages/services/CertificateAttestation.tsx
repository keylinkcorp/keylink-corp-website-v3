import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { CertificateAttestationHero } from "@/components/services/certificate-attestation/CertificateAttestationHero";
import { CertificateAttestationAudienceClarity } from "@/components/services/certificate-attestation/CertificateAttestationAudienceClarity";
import { CertificateAttestationProblemAgitation } from "@/components/services/certificate-attestation/CertificateAttestationProblemAgitation";
import { CertificateAttestationWhatIs } from "@/components/services/certificate-attestation/CertificateAttestationWhatIs";
import { CertificateAttestationServicesGrid } from "@/components/services/certificate-attestation/CertificateAttestationServicesGrid";
import { CertificateAttestationEmbassyCoverage } from "@/components/services/certificate-attestation/CertificateAttestationEmbassyCoverage";
import { CertificateAttestationProcessTimeline } from "@/components/services/certificate-attestation/CertificateAttestationProcessTimeline";
import { CertificateAttestationDIYComparison } from "@/components/services/certificate-attestation/CertificateAttestationDIYComparison";
import { CertificateAttestationCountryPricing } from "@/components/services/certificate-attestation/CertificateAttestationCountryPricing";
import { CertificateAttestationDocumentChecklist } from "@/components/services/certificate-attestation/CertificateAttestationDocumentChecklist";
import { CertificateAttestationGuarantees } from "@/components/services/certificate-attestation/CertificateAttestationGuarantees";
import { certificateAttestationFAQData } from "@/components/services/certificate-attestation/certificateAttestationFAQData";
import { certificateAttestationSchema } from "@/lib/schema/certificateAttestationSchema";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import {
  FileCheck,
  Building2,
  Award,
  Clock,
  Plane,
  Scale,
  FileText
} from "lucide-react";

const trustBarStats = [
  { icon: FileCheck, value: 3000, suffix: "+", label: "Documents Processed" },
  { icon: Building2, value: 15, suffix: "+", label: "Embassies Covered" },
  { icon: Award, value: 99.5, suffix: "%", label: "First-Time Approval" },
  { icon: Clock, value: 8, suffix: "+", label: "Years Experience" }
];

const relatedServices = [
  {
    icon: FileText,
    title: "PRO Services",
    description: "Complete government liaison services across 15+ ministries",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: Scale,
    title: "Document Clearance",
    description: "Tax, LMRA, Police clearance certificates for all needs",
    href: "/services/document-clearance",
    price: "BHD 25"
  },
  {
    icon: Building2,
    title: "Company Formation",
    description: "Complete company setup in Bahrain with full support",
    href: "/services/company-formation",
    price: "BHD 500"
  }
];

export default function CertificateAttestation() {
  useEffect(() => {
    document.title = "Certificate Attestation Bahrain | MOFA, Embassy, Apostille | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional certificate attestation in Bahrain. MOFA, Embassy legalization, Apostille. 15+ embassies covered. 99.5% first-time approval. From BHD 15. Free consultation.");
    }

    const existingSchema = document.querySelector('script[data-schema="certificate-attestation"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "certificate-attestation");
      script.textContent = JSON.stringify(certificateAttestationSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="certificate-attestation"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* 1. Hero */}
        <CertificateAttestationHero />
        
        {/* 2. Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* 3. Audience Clarity */}
        <CertificateAttestationAudienceClarity />
        
        {/* 4. Problem Agitation */}
        <CertificateAttestationProblemAgitation />
        
        {/* 5. What Is Certificate Attestation */}
        <CertificateAttestationWhatIs />
        
        {/* 6. Services Grid */}
        <CertificateAttestationServicesGrid />
        
        {/* 7. Embassy Coverage */}
        <CertificateAttestationEmbassyCoverage />
        
        {/* 8. Process Timeline */}
        <CertificateAttestationProcessTimeline />
        
        {/* 9. DIY Comparison */}
        <CertificateAttestationDIYComparison />
        
        {/* 10. Country-Specific Pricing */}
        <CertificateAttestationCountryPricing />
        
        {/* 11. Document Checklist */}
        <CertificateAttestationDocumentChecklist />
        
        {/* 12. Guarantees */}
        <CertificateAttestationGuarantees />
        
        {/* 13. Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Business Support"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/certificate-attestation"
        />
        
        {/* 14. FAQ */}
        <ServiceFAQ
          badge="Certificate Attestation FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about document attestation in Bahrain"
          faqs={certificateAttestationFAQData}
        />
        
        {/* 15. Final CTA */}
        <ServiceCTA
          badge="Skip the Confusion"
          title="Get Your Documents Attested Right — The First Time"
          subtitle="8+ years of expertise. 99.5% first-submission approval. Free consultation."
          primaryCTA={{ text: "WhatsApp Us Now", href: "https://wa.me/97317000000" }}
          secondaryCTA={{ text: "Request a Quote", href: "/contact" }}
          features={["15+ Embassies", "Same-Day Available", "Free Re-submission"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
