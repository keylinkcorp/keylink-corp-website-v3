import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ConsultingHero } from "@/components/services/consulting/ConsultingHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ConsultingProblemAgitation } from "@/components/services/consulting/ConsultingProblemAgitation";
import { ConsultingSolution } from "@/components/services/consulting/ConsultingSolution";
import { ConsultingCostCalculator } from "@/components/services/consulting/ConsultingCostCalculator";
import { ConsultingServicesGrid } from "@/components/services/consulting/ConsultingServicesGrid";
import { WhyBahrainSection } from "@/components/services/consulting/WhyBahrainSection";
import { ConsultantVsDIY } from "@/components/services/consulting/ConsultantVsDIY";
import { ConsultingCaseStudies } from "@/components/services/consulting/ConsultingCaseStudies";
import { ConsultingTeamAuthority } from "@/components/services/consulting/ConsultingTeamAuthority";
import { FormationTestimonials } from "@/components/services/formation/FormationTestimonials";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { consultingFAQs } from "@/components/services/consulting/consultingFAQData";
import { businessConsultingSchema } from "@/lib/schema/businessConsultingSchema";
import { 
  Building2, 
  Users, 
  Award, 
  Clock,
  FileText,
  Briefcase,
  Calculator,
  Plane
} from "lucide-react";

// Trust bar stats for consulting page
const trustStats = [
  { icon: Building2, value: 500, suffix: "+", label: "Businesses Served" },
  { icon: Clock, value: 10, suffix: "+", label: "Years in Bahrain" },
  { icon: Award, value: 100, suffix: "%", label: "Success Rate" },
  { icon: Users, value: 24, suffix: "/7", label: "Support Available" },
];

// Related services - expanded to 6
const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Register your WLL, SPC, or Branch Office in Bahrain",
    href: "/services/company-formation"
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
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT filing, and NBR compliance",
    href: "/services/accounting"
  },
  {
    icon: Briefcase,
    title: "CR Renewal",
    description: "Annual commercial registration renewal services",
    href: "/services/cr-renewal"
  },
  {
    icon: FileText,
    title: "Lease Registration",
    description: "RERA-compliant lease contract registration",
    href: "/services/lease-registration"
  }
];

const BusinessConsulting = () => {
  useEffect(() => {
    // Set page title
    document.title = "Business Consultancy in Bahrain - End-to-End Business Partner | Keylink Corp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert business consultancy in Bahrain. Company formation, strategic advisory, PRO services & ongoing support. 500+ businesses served. Free consultation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Expert business consultancy in Bahrain. Company formation, strategic advisory, PRO services & ongoing support. 500+ businesses served. Free consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/business-consulting");

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="business-consulting"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "business-consulting");
    schemaScript.textContent = JSON.stringify(businessConsultingSchema);
    document.head.appendChild(schemaScript);

    // Cleanup
    return () => {
      const schema = document.querySelector('script[data-schema="business-consulting"]');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  return (
    <Layout>
      {/* Block 1: Hero */}
      <ConsultingHero />

      {/* Block 2: Trust Bar */}
      <ServiceTrustBar stats={trustStats} />

      {/* Block 3: Problem Agitation */}
      <ConsultingProblemAgitation />

      {/* Block 4: Solution Introduction */}
      <ConsultingSolution />

      {/* Block 5: Interactive Cost Calculator */}
      <ConsultingCostCalculator />

      {/* Block 6: Services Grid */}
      <ConsultingServicesGrid />

      {/* Block 7: Why Bahrain */}
      <WhyBahrainSection />

      {/* Block 8: Consultant vs DIY */}
      <ConsultantVsDIY />

      {/* Block 9: Case Studies */}
      <ConsultingCaseStudies />

      {/* Block 10: Team & Authority */}
      <ConsultingTeamAuthority />

      {/* Block 11: Testimonials */}
      <FormationTestimonials />

      {/* Block 12: Related Services */}
      <RelatedServicesGrid
        title="Explore Our Services"
        subtitle="Discover the full range of business services we offer in Bahrain."
        services={relatedServices}
        currentService="/services/business-consulting"
      />

      {/* Block 13: FAQ */}
      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about business consultancy in Bahrain."
        faqs={consultingFAQs}
      />

      {/* Block 14: Final CTA */}
      <ServiceCTA
        badge="Get Started"
        title="Ready to Simplify Your Bahrain Business Journey?"
        subtitle="Book your free consultation today. Our team will assess your needs and create a customized roadmap — no obligation."
        primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        features={[
          "Free Initial Consultation",
          "Custom Business Roadmap",
          "Transparent Scope & Timeline"
        ]}
      />
    </Layout>
  );
};

export default BusinessConsulting;
