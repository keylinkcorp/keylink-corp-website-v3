import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ManagementConsultingHero } from "@/components/services/management-consulting/ManagementConsultingHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ManagementAudienceClarity } from "@/components/services/management-consulting/ManagementAudienceClarity";
import { ManagementProblemAgitation } from "@/components/services/management-consulting/ManagementProblemAgitation";
import { ManagementSolutionFramework } from "@/components/services/management-consulting/ManagementSolutionFramework";
import { ManagementServicePillars } from "@/components/services/management-consulting/ManagementServicePillars";
import { WhyBahrainSection } from "@/components/services/consulting/WhyBahrainSection";
import { ManagementCaseStudies } from "@/components/services/management-consulting/ManagementCaseStudies";
import { ManagementTeamAuthority } from "@/components/services/management-consulting/ManagementTeamAuthority";
import { ManagementDIYComparison } from "@/components/services/management-consulting/ManagementDIYComparison";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { managementConsultingFAQs } from "@/components/services/management-consulting/managementConsultingFAQData";
import { managementConsultingSchema } from "@/lib/schema/managementConsultingSchema";
import { 
  Building2, 
  FileText, 
  Calculator,
  Plane
} from "lucide-react";
import { Target, TrendingUp, Clock, Users } from "lucide-react";

// Trust bar stats for management consulting page
const trustStats = [
  { icon: Target, value: 200, suffix: "+", label: "Strategic Projects" },
  { icon: TrendingUp, value: 340, suffix: "%", label: "Average Client ROI" },
  { icon: Clock, value: 10, suffix: "+", label: "Years of Expertise" },
  { icon: Users, value: 95, suffix: "%", label: "Retention Rate" },
];

// Related services
const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Register your WLL, SPC, or Branch Office in Bahrain",
    href: "/services/company-formation"
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Bookkeeping, VAT compliance, and financial reporting",
    href: "/services/accounting"
  },
  {
    icon: FileText,
    title: "PRO Services",
    description: "Government liaison and ministry coordination",
    href: "/services/pro-services"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, residence permits, and family visas",
    href: "/services/visa-immigration"
  }
];

const ManagementConsulting = () => {
  useEffect(() => {
    // Set page title
    document.title = "Management Consulting Bahrain - Strategic Advisory & Execution | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert management consulting in Bahrain. Strategic planning, market entry advisory, operational improvement. 200+ projects delivered. Free strategy consultation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert management consulting in Bahrain. Strategic planning, market entry advisory, operational improvement. 200+ projects delivered. Free strategy consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/management-consulting");

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="management-consulting"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "management-consulting");
    schemaScript.textContent = JSON.stringify(managementConsultingSchema);
    document.head.appendChild(schemaScript);

    // Cleanup
    return () => {
      const schema = document.querySelector('script[data-schema="management-consulting"]');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  return (
    <Layout>
      {/* Block 1: Hero */}
      <ManagementConsultingHero />

      {/* Block 2: Trust Bar */}
      <ServiceTrustBar stats={trustStats} />

      {/* Block 3: Audience Clarity */}
      <ManagementAudienceClarity />

      {/* Block 4: Problem Agitation (PAS) */}
      <ManagementProblemAgitation />

      {/* Block 5: Solution Framework */}
      <ManagementSolutionFramework />

      {/* Block 6: Service Pillars */}
      <ManagementServicePillars />

      {/* Block 7: Why Bahrain */}
      <WhyBahrainSection />

      {/* Block 8: Case Studies */}
      <ManagementCaseStudies />

      {/* Block 9: Team Authority */}
      <ManagementTeamAuthority />

      {/* Block 10: DIY vs Keylink Comparison */}
      <ManagementDIYComparison />

      {/* Block 11: Related Services */}
      <RelatedServicesGrid
        title="From Strategy to Operations"
        subtitle="Complete solutions for every stage of your Bahrain business journey."
        services={relatedServices}
        currentService="/services/management-consulting"
      />

      {/* Block 12: FAQ */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about management consulting in Bahrain."
        faqs={managementConsultingFAQs}
      />

      {/* Block 13: Final CTA */}
      <ServiceCTA
        badge="Start Your Journey"
        title="Ready to Turn Strategy Into Results?"
        subtitle="Book your free strategy consultation today. Our senior consultants will assess your needs, identify opportunities, and outline a clear path forward — no obligation."
        primaryCTA={{ text: "Book Free Strategy Session", href: "/contact" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        features={[
          "Free Initial Consultation",
          "Custom Strategy Roadmap",
          "Transparent Scope & Pricing"
        ]}
      />
    </Layout>
  );
};

export default ManagementConsulting;
