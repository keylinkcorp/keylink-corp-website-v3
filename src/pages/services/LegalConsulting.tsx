import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { LegalHero } from "@/components/services/legal/LegalHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { LegalAudienceClarity } from "@/components/services/legal/LegalAudienceClarity";
import { LegalProblemAgitation } from "@/components/services/legal/LegalProblemAgitation";
import { LegalFrameworkExplainer } from "@/components/services/legal/LegalFrameworkExplainer";
import { LegalServicePillars } from "@/components/services/legal/LegalServicePillars";
import { LegalProcessTimeline } from "@/components/services/legal/LegalProcessTimeline";
import { LegalDIYComparison } from "@/components/services/legal/LegalDIYComparison";
import { LegalCaseStudy } from "@/components/services/legal/LegalCaseStudy";
import { LegalTeamAuthority } from "@/components/services/legal/LegalTeamAuthority";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { legalFAQData } from "@/components/services/legal/legalFAQData";
import { legalConsultingSchema } from "@/lib/schema/legalConsultingSchema";
import { 
  Building2, 
  FileText, 
  Calculator,
  Plane
} from "lucide-react";
import { FileCheck, Shield, Clock, Users } from "lucide-react";

// Trust bar stats for legal consulting page
const trustStats = [
  { icon: FileCheck, value: 500, suffix: "+", label: "Contracts Drafted" },
  { icon: Shield, value: 100, suffix: "%", label: "Compliance Record" },
  { icon: Clock, value: 10, suffix: "+", label: "Years in Bahrain" },
  { icon: Users, value: 24, suffix: "/7", label: "Support Available" },
];

// Related services
const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Structure your entity with legal compliance built in",
    href: "/services/company-formation"
  },
  {
    icon: FileText,
    title: "PRO Services",
    description: "Government liaison for licenses and permits",
    href: "/services/pro-services"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas aligned with labour law",
    href: "/services/visa-immigration"
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Financial compliance alongside legal compliance",
    href: "/services/accounting"
  }
];

const LegalConsulting = () => {
  useEffect(() => {
    // Set page title
    document.title = "Legal Consultant Bahrain - Contract Drafting & Compliance | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert legal consultant in Bahrain. Contract drafting, commercial law advisory, regulatory compliance, legal due diligence. 500+ contracts delivered. Free consultation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert legal consultant in Bahrain. Contract drafting, commercial law advisory, regulatory compliance, legal due diligence. 500+ contracts delivered. Free consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/legal-consulting");

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="legal-consulting"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "legal-consulting");
    schemaScript.textContent = JSON.stringify(legalConsultingSchema);
    document.head.appendChild(schemaScript);

    // Cleanup
    return () => {
      const schema = document.querySelector('script[data-schema="legal-consulting"]');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  return (
    <Layout>
      {/* Block 1: Hero */}
      <LegalHero />

      {/* Block 2: Trust Bar */}
      <ServiceTrustBar stats={trustStats} />

      {/* Block 3: Audience Clarity */}
      <LegalAudienceClarity />

      {/* Block 4: Problem Agitation (PAS) */}
      <LegalProblemAgitation />

      {/* Block 5: Legal Framework Explainer */}
      <LegalFrameworkExplainer />

      {/* Block 6: Service Pillars */}
      <LegalServicePillars />

      {/* Block 7: Process Timeline */}
      <LegalProcessTimeline />

      {/* Block 8: DIY vs Legal Consultant Comparison */}
      <LegalDIYComparison />

      {/* Block 9: Case Studies */}
      <LegalCaseStudy />

      {/* Block 10: Team Authority */}
      <LegalTeamAuthority />

      {/* Block 11: Cross-Sell / Related Services */}
      <RelatedServicesGrid
        badge="Complete Business Support"
        title="From Legal Foundation to Operational Success"
        subtitle="Integrated services that work together to protect and grow your business."
        services={relatedServices}
        currentService="/services/legal-consulting"
      />

      {/* Block 12: FAQ */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about legal consulting services in Bahrain."
        faqs={legalFAQData}
      />

      {/* Block 13: Final CTA */}
      <ServiceCTA
        badge="Get Started"
        title="Protect Your Business with Trusted Legal Guidance"
        subtitle="Book your free legal consultation today. Our team will assess your needs, identify potential risks, and provide a clear roadmap — no obligation, no pressure."
        primaryCTA={{ text: "Book Free Legal Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        features={[
          "Free 30-Minute Consultation",
          "Confidential Assessment",
          "Transparent Fee Proposal"
        ]}
      />
    </Layout>
  );
};

export default LegalConsulting;
