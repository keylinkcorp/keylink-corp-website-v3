import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import crTeamImage from "@/assets/cr-team-collaboration.jpg";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { CRHero } from "@/components/services/cr/CRHero";
import { CRProblemValue } from "@/components/services/cr/CRProblemValue";
import { WhatIsCR } from "@/components/services/cr/WhatIsCR";
import { CRTypesComparison } from "@/components/services/cr/CRTypesComparison";
import { CRProcessSteps } from "@/components/services/cr/CRProcessSteps";
import { CRRequirementsChecklist } from "@/components/services/cr/CRRequirementsChecklist";
import { CRGovernmentFees } from "@/components/services/cr/CRGovernmentFees";
import { CRAmendmentsSection } from "@/components/services/cr/CRAmendmentsSection";
import { CRTestimonials } from "@/components/services/cr/CRTestimonials";
import { CRSuccessStory } from "@/components/services/cr/CRSuccessStory";
import { CRCostCalculator } from "@/components/services/cr/CRCostCalculator";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { commercialRegistrationSchema } from "@/lib/schema/commercialRegistrationSchema";
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
  Calendar,
  Building2,
  Plane,
  UserCheck,
  RefreshCw
} from "lucide-react";

// Trust bar stats
const trustBarStats = [
  { icon: FileText, value: 5000, suffix: "+", label: "CRs Processed" },
  { icon: Award, value: 100, suffix: "%", label: "Success Rate" },
  { icon: Clock, value: 48, suffix: "hr", label: "Processing" },
  { icon: Users, value: 10, suffix: "+", label: "Years Experience" }
];

// Why Choose differentiators
const whyChooseDifferentiators = [
  {
    icon: Zap,
    title: "Full-Service Convenience",
    description: "Zero client effort from start to finish - we handle everything"
  },
  {
    icon: Award,
    title: "100% Success Rate",
    description: "Never had a CR application rejected in 10+ years"
  },
  {
    icon: Shield,
    title: "MOIC Experts",
    description: "Deep expertise navigating Bahrain regulations and SIJILAT"
  },
  {
    icon: Globe,
    title: "Remote Registration",
    description: "Complete your CR without visiting Bahrain"
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "Fixed fees with no hidden costs or surprises"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "CR renewals, amendments, and compliance assistance"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is commercial registration in Bahrain?",
    answer: "Commercial Registration (CR) is the official government-issued license required to operate a business legally in Bahrain. Issued by the Ministry of Industry and Commerce (MOIC) through the SIJILAT electronic portal, it defines your company's legal structure, permitted activities, and ownership. All businesses must have a valid CR to operate, open bank accounts, hire employees, and sign contracts."
  },
  {
    question: "How long does CR registration take?",
    answer: "Standard CR registration takes 3-7 business days depending on the company type. Single Person Companies (SPC) typically complete in 3-5 days, while WLLs take 5-7 days. Branch offices and holding companies may require 7-10 days. Express processing is available for urgent requirements. Our streamlined process ensures first-time approval without delays."
  },
  {
    question: "Can foreigners register a CR in Bahrain?",
    answer: "Yes, Bahrain welcomes foreign investment and allows 100% foreign ownership for most business activities. Foreign entrepreneurs can register SPCs, WLLs, branch offices, and holding companies without requiring a local sponsor or partner. Only a few regulated sectors like real estate brokerage may require local partnership."
  },
  {
    question: "What is the difference between CR and trade license?",
    answer: "The Commercial Registration (CR) is your company registration certificate that establishes your legal entity, while the Trade License permits specific commercial activities. Both are required for legal operations. The CR identifies who you are as a company, while the trade license authorizes what business activities you can conduct. They are issued together during the registration process."
  },
  {
    question: "Can I register a CR remotely without visiting Bahrain?",
    answer: "Yes, remote CR registration is fully possible through a Power of Attorney (POA). Keylink can act as your authorized representative, handling all MOIC submissions, document processing, government fee payments, and approvals on your behalf. You simply provide the required documents, and we manage the entire process without requiring your physical presence in Bahrain."
  },
  {
    question: "What documents are needed for commercial registration?",
    answer: "Required documents vary by applicant type. Individuals need: valid passport, proof of address, CV (for certain activities), and passport photos. Corporate shareholders need: Certificate of Incorporation, MOA, Board Resolution, and Good Standing Certificate. All applicants need an office lease agreement or virtual office subscription. Additional documents may be required for regulated activities."
  },
  {
    question: "How much does commercial registration cost in Bahrain?",
    answer: "Government fees include: Name Reservation (BHD 15), CR Registration (BHD 50/year), Trade License (BHD 20-200 depending on activities), LMRA Registration (BHD 50), and Chamber of Commerce (BHD 50-100/year). Professional service fees for CR processing are quoted separately during consultation based on your specific requirements."
  },
  {
    question: "Do I need a local sponsor for CR registration?",
    answer: "No, a local sponsor is not required for most business activities in Bahrain. The country actively promotes foreign investment with 100% foreign ownership allowed for permitted activities. Only specific regulated sectors such as real estate brokerage or certain retail activities may require local partnership."
  },
  {
    question: "How do I amend my existing commercial registration?",
    answer: "CR amendments are processed through MOIC/SIJILAT portal. Common amendments include activity changes, shareholder transfers, capital adjustments, name changes, and address updates. Most amendments complete within 2-5 business days. Keylink handles all amendment submissions and follow-ups on your behalf."
  },
  {
    question: "What happens if my CR expires?",
    answer: "An expired CR attracts penalties of BHD 20-100 per month. You cannot legally operate, sign contracts, sponsor visas, or use banking services with an expired CR. Extended expiry (6+ months) may result in CR cancellation, requiring full re-registration. We recommend renewing at least 30 days before expiry."
  },
  {
    question: "Can I change my CR activities after registration?",
    answer: "Yes, you can add or remove commercial activities from your CR at any time through an amendment process. This requires MOIC approval and may need additional permits for regulated activities. Activity amendments typically complete in 2-3 business days. There's no limit to how many times you can amend activities."
  },
  {
    question: "Which ministry handles commercial registration in Bahrain?",
    answer: "The Ministry of Industry and Commerce (MOIC) handles all commercial registrations in Bahrain through the SIJILAT electronic portal. MOIC oversees company formation, trade licensing, and commercial law compliance. For certain regulated activities, additional approvals from sector-specific authorities (like CBB for financial services) may be required."
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
    title: "CR Renewal",
    description: "Annual CR renewal with penalty avoidance",
    href: "/services/cr-renewal",
    price: "BHD 150"
  }
];

export default function CommercialRegistration() {
  useEffect(() => {
    // Update page title
    document.title = "Commercial Registration in Bahrain - CR Registration & Renewal | Keylink Corp";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Complete commercial registration services in Bahrain. New CR registration, amendments, and renewals. Expert MOIC processing with 100% success rate. Free consultation."
      );
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = "https://keylinkcorp.com/services/commercial-registration";

    // Inject JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="commercial-registration"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "commercial-registration");
      script.textContent = JSON.stringify(commercialRegistrationSchema);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const schemaScript = document.querySelector('script[data-schema="commercial-registration"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        {/* 1. Hero Section */}
        <CRHero />
        
        {/* 2. Trust Bar */}
        <ServiceTrustBar stats={trustBarStats} />
        
        {/* 2.5 CR Cost Calculator */}
        <CRCostCalculator />
        
        {/* 3. Problem/Value Proposition */}
        <CRProblemValue />
        
        {/* 4. What is Commercial Registration */}
        <WhatIsCR />
        
        {/* 5. CR Types Comparison */}
        <CRTypesComparison />
        
        {/* 6. 6-Step Process Timeline */}
        <CRProcessSteps />
        
        {/* 7. Requirements Checklist */}
        <CRRequirementsChecklist />
        
        {/* 8. Government Fees Breakdown */}
        <CRGovernmentFees />
        
        {/* 9. CR Amendments Section */}
        <CRAmendmentsSection />
        
        {/* 10. Why Choose Keylink */}
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Bahrain's Trusted CR Registration Partner"
          subtitle="10+ years of expertise in commercial registration with 100% success rate"
          differentiators={whyChooseDifferentiators}
          floatingStatValue="5,000+"
          floatingStatLabel="CRs Processed"
          imageSrc={crTeamImage}
          imageAlt="Team collaborating on commercial registration"
        />
        
        {/* 11. Testimonials */}
        <CRTestimonials />
        
        {/* 12. Client Success Story */}
        <CRSuccessStory />
        
        {/* 13. Related Services */}
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Your Business Setup"
          subtitle="Explore our other services to become fully operational in Bahrain"
          services={relatedServices}
          currentService="/services/commercial-registration"
        />
        
        {/* 14. FAQ Section */}
        <ServiceFAQ
          badge="FAQ"
          title="Commercial Registration Questions Answered"
          subtitle="Everything you need to know about CR registration in Bahrain"
          faqs={faqs}
        />
        
        {/* 15. Final CTA */}
        <ServiceCTA
          badge="Start Today"
          title="Ready to Register Your Business in Bahrain?"
          subtitle="Get expert guidance on commercial registration. Free consultation, no obligations."
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
