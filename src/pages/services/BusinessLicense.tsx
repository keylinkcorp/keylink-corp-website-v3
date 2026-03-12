import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { BLHero } from "@/components/services/bl/BLHero";
import { BLCostCalculator } from "@/components/services/bl/BLCostCalculator";
import { BLProblemValue } from "@/components/services/bl/BLProblemValue";
import { WhatIsBL } from "@/components/services/bl/WhatIsBL";
import { BLTypesComparison } from "@/components/services/bl/BLTypesComparison";
import { BLProcessSteps } from "@/components/services/bl/BLProcessSteps";
import { BLRequirementsChecklist } from "@/components/services/bl/BLRequirementsChecklist";
import { BLGovernmentFees } from "@/components/services/bl/BLGovernmentFees";
import { BL2024Update } from "@/components/services/bl/BL2024Update";
import { BLTestimonials } from "@/components/services/bl/BLTestimonials";
import { BLSuccessStory } from "@/components/services/bl/BLSuccessStory";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { businessLicenseSchema } from "@/lib/schema/businessLicenseSchema";
import teamImage from "@/assets/cr-team-collaboration.jpg";
import {
  FileText,
  Award,
  Clock,
  Users,
  Zap,
  Headphones,
  Globe,
  Shield,
  CheckCircle2,
  Building2,
  Plane,
  UserCheck,
  RefreshCw
} from "lucide-react";

// Trust bar stats
const trustBarStats = [
  { icon: Award, value: 2500, suffix: "+", label: "Licenses Issued" },
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Success Rate" },
  { icon: Clock, value: 48, suffix: "hr", label: "Processing" },
  { icon: Users, value: 10, suffix: "+", label: "Years Experience" }
];

// Why Choose differentiators
const whyChooseDifferentiators = [
  {
    icon: Zap,
    title: "Full-Service Convenience",
    description: "Zero client effort — we handle MOIC, banking, and all government liaisons"
  },
  {
    icon: Award,
    title: "100% Success Rate",
    description: "Never had a license application rejected in over a decade"
  },
  {
    icon: Shield,
    title: "MOIC Experts",
    description: "Deep expertise navigating SIJILAT and Bahrain regulations"
  },
  {
    icon: Globe,
    title: "Remote Registration",
    description: "Complete your business license without visiting Bahrain"
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "Fixed fees with government costs clearly separated"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "License renewals, amendments, and compliance assistance"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is a business license in Bahrain?",
    answer: "A business license in Bahrain consists of two documents: the Commercial Registration (CR), which establishes your legal entity, and the Trade License, which permits specific commercial activities. Both are issued by the Ministry of Industry and Commerce (MOIC) through the SIJILAT portal and are required for legal business operations."
  },
  {
    question: "How long does it take to get a business license in Bahrain?",
    answer: "Standard business license processing takes 3-7 business days for straightforward applications. Including the now-mandatory bank account opening, expect 10-14 days total. Complex cases with industrial or regulated activities may take 2-4 weeks."
  },
  {
    question: "How much does a business license cost in Bahrain?",
    answer: "Government fees range from BHD 250-600 annually depending on license type and activities. This includes Trade Name (BHD 15), CR (BHD 50-200), Trade License (BHD 20-300 per activity), and Chamber fees (BHD 50-100). Professional service fees are quoted separately."
  },
  {
    question: "Can foreigners get a business license in Bahrain?",
    answer: "Yes, Bahrain allows 100% foreign ownership for most commercial activities. Foreign entrepreneurs can obtain business licenses without requiring a local sponsor or partner. Only a few regulated sectors may require local partnership."
  },
  {
    question: "Do I need a local partner for a business license?",
    answer: "No local partner is required for most business activities. Bahrain actively encourages foreign investment with 100% ownership permitted. Certain regulated sectors like real estate may have local partnership requirements."
  },
  {
    question: "Can I get a business license remotely?",
    answer: "Yes, remote business license registration is fully possible through a Power of Attorney (POA). Our team can act as your authorized representative, handling all submissions without requiring your physical presence in Bahrain."
  },
  {
    question: "What documents do I need for a business license?",
    answer: "Individual applicants need: valid passport, proof of address, CV (for professional licenses), and photos. Corporate shareholders need: Certificate of Incorporation, MOA, Board Resolution, and Good Standing Certificate. All applicants need a Bahrain office address."
  },
  {
    question: "What types of business licenses are available?",
    answer: "Bahrain offers Commercial licenses (trading, retail), Industrial licenses (manufacturing), Professional licenses (consulting, services), and Services licenses (hospitality, healthcare). The right type depends on your planned business activities."
  },
  {
    question: "What is the difference between CR and trade license?",
    answer: "The Commercial Registration (CR) is your company identity document establishing the legal entity. The Trade License authorizes specific commercial activities you can conduct. Both are required and are typically issued together during the licensing process."
  },
  {
    question: "What are the 2024 business license requirements?",
    answer: "As of June 2024, new business licenses require proof of a corporate bank account before final CR issuance. This adds 5-10 days to the process. Minimum deposits vary by bank from BHD 500 to USD 10,000."
  },
  {
    question: "Which ministry handles business licensing in Bahrain?",
    answer: "The Ministry of Industry and Commerce (MOIC) handles all business licensing through the SIJILAT electronic portal. For regulated activities, additional approvals from sector-specific authorities (CBB for finance, NHRA for healthcare) may be required."
  },
  {
    question: "What happens if my business license expires?",
    answer: "Operating with an expired license incurs penalties of BHD 20-100 per month. Extended expiry (6+ months) may result in license cancellation requiring full re-registration. We recommend renewing at least 30 days before expiry."
  }
];

// Related services
const relatedServices = [
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: Building2,
    title: "Company Formation",
    description: "Complete company setup packages with full support",
    href: "/services/company-formation",
    price: "BHD 750"
  },
  {
    icon: UserCheck,
    title: "PRO Services",
    description: "Government liaison and document processing",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: RefreshCw,
    title: "License Renewal",
    description: "Annual renewal with penalty avoidance",
    href: "/services/cr-renewal",
    price: "BHD 150"
  }
];

export default function BusinessLicense() {
  useEffect(() => {
    // Update page title
    document.title = "Business License in Bahrain - Get Licensed in 3-7 Days | From BHD 350 | Keylink Corp";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get your Bahrain business license with 100% foreign ownership. Commercial, industrial, and professional licenses in 3-7 days. Expert MOIC registration from BHD 350. Free consultation."
      );
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = "https://keylinkcorp.com/services/business-license";

    // Inject JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="business-license"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "business-license");
      script.textContent = JSON.stringify(businessLicenseSchema);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const schemaScript = document.querySelector('script[data-schema="business-license"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* 1. Hero Section */}
        <BLHero />
        
        {/* 2. Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* 3. Cost Calculator */}
        <BLCostCalculator />
        
        {/* 4. Problem/Value Proposition */}
        <BLProblemValue />
        
        {/* 5. What is a Business License */}
        <WhatIsBL />
        
        {/* 6. License Types Comparison */}
        <BLTypesComparison />
        
        {/* 7. 6-Step Process Timeline */}
        <BLProcessSteps />
        
        {/* 8. Requirements Checklist */}
        <BLRequirementsChecklist />
        
        {/* 9. Government Fees Breakdown */}
        <BLGovernmentFees />
        
        {/* 10. 2024 Regulatory Update */}
        <BL2024Update />
        
        {/* 11. Why Choose Keylink */}
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Bahrain's Trusted Business License Partner"
          subtitle="10+ years of expertise with 100% success rate"
          differentiators={whyChooseDifferentiators}
          floatingStatValue="2,500+"
          floatingStatLabel="Licenses Issued"
          imageSrc={teamImage}
          imageAlt="Team collaborating on business licensing"
        />
        
        {/* 12. Testimonials */}
        <BLTestimonials />
        
        {/* 13. Client Success Story */}
        <BLSuccessStory />
        
        {/* 14. Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Your Business Setup"
          subtitle="Explore services to become fully operational in Bahrain"
          services={relatedServices}
          currentService="/services/business-license"
        />
        
        {/* 15. FAQ Section */}
        <ServiceFAQ
          badge="FAQ"
          title="Business License Questions Answered"
          subtitle="Everything you need to know about getting licensed in Bahrain"
          faqs={faqs}
        />
        
        {/* 16. Final CTA */}
        <ServiceCTA
          badge="Start Today"
          title="Ready to Get Your Business License in Bahrain?"
          subtitle="Expert guidance from application to approval. Free consultation, no obligations."
          primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
          secondaryCTA={{ text: "Call Us Now", href: "tel:+97317000000" }}
          features={["100% Success Rate", "Same-Week Processing", "Full MOIC Support"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
