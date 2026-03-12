import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { MOAHero } from "@/components/services/moa/MOAHero";
import { MOATrustBar } from "@/components/services/moa/MOATrustBar";
import { MOACostCalculator } from "@/components/services/moa/MOACostCalculator";
import { WhatIsMOA } from "@/components/services/moa/WhatIsMOA";
import { MOATypesComparison } from "@/components/services/moa/MOATypesComparison";
import { MOAProcess } from "@/components/services/moa/MOAProcess";
import { MOARequirements } from "@/components/services/moa/MOARequirements";
import { MOAGovernmentFees } from "@/components/services/moa/MOAGovernmentFees";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { MOATestimonials } from "@/components/services/moa/MOATestimonials";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { moaSchema } from "@/lib/schema/moaSchema";
import { 
  Scale, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle2, 
  Headphones,
  Building2,
  FileText,
  Edit,
  Plane
} from "lucide-react";
import teamCollaboration from "@/assets/moa-team-collaboration.jpg";

const whyChooseDifferentiators = [
  { icon: Scale, title: "Commercial Law Expertise", description: "Deep knowledge of Law No. 21/2001 and Article 15 requirements" },
  { icon: Zap, title: "48-Hour Notarization", description: "Express service gets your MOA notarized same-day or next-day" },
  { icon: Globe, title: "Remote Drafting", description: "Complete MOA preparation without visiting Bahrain" },
  { icon: Shield, title: "First-Time Approval", description: "Zero rejection rate with MOIC submissions" },
  { icon: CheckCircle2, title: "Full-Lifecycle Support", description: "Drafting, amendments, attestation under one roof" },
  { icon: Headphones, title: "Dedicated Legal Team", description: "Direct access to our MOA specialists" }
];

const relatedServices = [
  { icon: Building2, title: "Company Formation", description: "Complete company setup packages", href: "/services/company-formation", price: "BHD 750" },
  { icon: FileText, title: "Commercial Registration", description: "CR registration and renewal", href: "/services/commercial-registration", price: "BHD 250" },
  { icon: Edit, title: "CR Amendment", description: "Modify your existing CR", href: "/services/cr-amendment", price: "BHD 100" },
  { icon: Plane, title: "Visa & Immigration", description: "Work visas and Golden Visa", href: "/services/visa-immigration", price: "BHD 250" }
];

const moaFaqs = [
  {
    question: "What is a Memorandum of Association in Bahrain?",
    answer: "The Memorandum of Association (MOA) is the foundational legal document for every Bahrain company. It establishes your company's legal identity, ownership structure, business objectives, and capital. Required under Commercial Companies Law No. 21 of 2001, the MOA must be notarized and submitted to MOIC during company registration."
  },
  {
    question: "What's the difference between MOA and Articles of Association?",
    answer: "In Bahrain, these terms are often used interchangeably. The MOA defines the company's external relationship with third parties (name, objectives, capital), while Articles of Association typically refer to internal governance rules. For most entities, Bahrain combines both into a single Memorandum of Association document."
  },
  {
    question: "What are the mandatory clauses in a Bahrain MOA?",
    answer: "Every MOA must include five mandatory clauses: (1) Company name in Arabic and English, (2) Registered office address, (3) Business objectives and activities, (4) Capital amount and distribution, (5) Shareholder names and details. WLLs require additional Article 15 clauses for management and profit distribution."
  },
  {
    question: "How long does MOA drafting take?",
    answer: "Standard MOA drafting takes 24-48 hours with Keylink. Simple SPC Memoranda can be completed in 24 hours. Complex WLL or Holding Company MOAs with multiple shareholders and special clauses typically require 48-72 hours for thorough drafting and compliance review."
  },
  {
    question: "Can I draft my own MOA?",
    answer: "While technically possible, self-drafted MOAs frequently face MOIC rejection due to missing clauses, incorrect legal terminology, or non-compliance with Article 15 requirements. Professional drafting ensures first-time approval and prevents costly amendments later."
  },
  {
    question: "What is MOA notarization?",
    answer: "Notarization is the legal authentication of your MOA by a licensed Bahrain notary public. All shareholders (or their POA representatives) must sign before the notary, who then seals and attests the document. Notarization is mandatory before MOIC submission."
  },
  {
    question: "How much does MOA notarization cost?",
    answer: "Government notarization fees range from BHD 10-50 depending on document complexity and capital amount. Professional coordination fees are quoted separately. Keylink offers 48-hour notarization guarantee with express same-day options available."
  },
  {
    question: "Can foreigners sign MOA remotely?",
    answer: "Yes, foreign shareholders can authorize a local representative through a Power of Attorney (POA). The POA must be notarized and attested in the shareholder's home country, then legalized for use in Bahrain. Keylink coordinates this entire process remotely."
  },
  {
    question: "What is MOA attestation?",
    answer: "MOA attestation is the process of authenticating your MOA for use in foreign countries. It involves: (1) Notarization in Bahrain, (2) MOFA (Ministry of Foreign Affairs) attestation, (3) Embassy/consulate legalization of the destination country, or Apostille for Hague Convention countries."
  },
  {
    question: "How do I amend my existing MOA?",
    answer: "MOA amendments require a board resolution, updated MOA draft reflecting changes, notarization of the amended document, and submission through Sijilat 3.0. Common amendments include activity changes, shareholder updates, capital adjustments, and address changes. Processing takes 2-5 business days."
  },
  {
    question: "What happens if my MOA has errors?",
    answer: "MOA errors create serious problems: MOIC rejection during registration, bank account complications, visa processing delays, and potential contract disputes. Correcting errors requires a formal amendment process with government fees and notarization costs. Professional drafting prevents these issues."
  },
  {
    question: "Is MOA required for all company types?",
    answer: "Yes, all Bahrain company types require a Memorandum of Association: SPC (Single Person Company), WLL (Limited Liability Company), Branch Offices, and Holding Companies. Each has specific MOA requirements based on the Commercial Companies Law."
  },
  {
    question: "What's Article 15 and why does it matter?",
    answer: "Article 15 of the Commercial Companies Law specifies additional mandatory clauses for WLL Memoranda. These include: profit/loss distribution percentages, management appointment procedures, share transfer restrictions, and partner meeting rules. Non-compliance results in MOIC rejection."
  },
  {
    question: "How long is an MOA valid?",
    answer: "The MOA remains valid as long as your company is active. There's no expiration or renewal requirement. However, you must amend the MOA whenever material changes occur (shareholders, capital, activities, address) to maintain compliance with your Commercial Registration."
  }
];

export default function MOA() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Memorandum of Association Bahrain - MOA Drafting & Notarization | Keylink Corp";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MOA drafting, notarization, and attestation services in Bahrain. 48-hour turnaround, 100% MOIC approval. Commercial Companies Law compliant. Free consultation.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Professional MOA drafting, notarization, and attestation services in Bahrain. 48-hour turnaround, 100% MOIC approval. Commercial Companies Law compliant. Free consultation.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/moa");

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="moa"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "moa");
    script.textContent = JSON.stringify(moaSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.querySelector('script[data-schema="moa"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <MOAHero />
      <MOATrustBar />
      <MOACostCalculator />
      <WhatIsMOA />
      <MOATypesComparison />
      <MOAProcess />
      <MOARequirements />
      <MOAGovernmentFees />
      <ServiceWhyChoose
        badge="Why Keylink"
        title="Bahrain's Trusted MOA Specialists"
        subtitle="10+ years of legal expertise drafting compliant Memoranda of Association"
        differentiators={whyChooseDifferentiators}
        imageSrc={teamCollaboration}
        imageAlt="Keylink legal team collaborating on MOA documentation"
        floatingStatValue="500+"
        floatingStatLabel="MOAs Drafted"
      />
      <MOATestimonials />
      <RelatedServicesGrid
        badge="Related Services"
        title="Complete Your Business Setup"
        subtitle="Explore our other services to become fully operational in Bahrain"
        services={relatedServices}
        currentService="/services/moa"
      />
      <ServiceFAQ
        badge="FAQ"
        title="MOA Questions Answered"
        subtitle="Everything you need to know about Memoranda of Association in Bahrain"
        faqs={moaFaqs}
      />
      <ServiceCTA
        badge="Get Started Today"
        title="Ready to Draft Your Memorandum of Association?"
        subtitle="Expert MOA drafting with 100% MOIC approval rate. Free consultation, no obligations."
        primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Call Us Now", href: "tel:+97317000000" }}
        features={["100% Approval Rate", "48-Hour Notarization", "Full Legal Compliance"]}
      />
    </Layout>
  );
}
