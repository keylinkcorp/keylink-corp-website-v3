import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Layout } from "@/components/layout/Layout";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";

import {
  IncubatorHero,
  IncubatorLogos,
  IncubatorExplainer,
  IncubatorBenefits,
  IncubatorProcess,
  IncubatorComparison,
  IncubatorTestimonials,
  EligibilityChecker,
  IncubatorPricing,
  IncubatorContact,
  IncubatorLocation
} from "@/components/services/incubator";

import { incubatorSchema } from "@/lib/schema/incubatorSchema";

// FAQ items for SEO
const faqItems = [
  {
    question: "What is the difference between an incubator and an accelerator in Bahrain?",
    answer: "Incubators like Tamkeen provide longer-term support (6-12 months) with grants and resources for early-stage ideas. Accelerators like C5 and FinTech Bay run intensive 12-week programs focused on rapid growth and investor readiness. Most Bahrain programs offer a blend of both elements."
  },
  {
    question: "Can foreign entrepreneurs apply to Tamkeen programs?",
    answer: "Yes. Foreign entrepreneurs with a registered Bahrain company are eligible for most Tamkeen startup support programs. We specialize in structuring companies specifically for Tamkeen eligibility."
  },
  {
    question: "How long does the incubator application process take?",
    answer: "From company formation to acceptance, the typical timeline is 6-8 weeks with our support. Direct applications without prior company registration often take 3-4 months due to documentation requirements."
  },
  {
    question: "Do I need a physical office in Bahrain to apply?",
    answer: "No. Most programs accept virtual office addresses. We provide registered office services that meet all program requirements for founders operating remotely."
  },
  {
    question: "What funding is available through Bahrain incubator programs?",
    answer: "Tamkeen offers non-dilutive grants up to BHD 10,000. FinTech Bay provides access to investor networks and regulatory sandbox benefits. C5 focuses on investment-readiness preparation rather than direct funding."
  },
  {
    question: "Is FinTech Bay only for fintech startups?",
    answer: "Yes. FinTech Bay specifically supports financial technology, digital banking, and payment solutions startups. For non-fintech ventures, Tamkeen or C5 are better fits."
  },
  {
    question: "What happens if my application is rejected?",
    answer: "With our Complete Package, we refine and resubmit your application at no additional cost. We also identify alternative programs you may qualify for."
  },
  {
    question: "Do incubator programs in Bahrain require equity?",
    answer: "Tamkeen programs are non-dilutive (no equity). FinTech Bay and C5 arrangements vary by cohort and individual negotiation. We help you understand terms before committing."
  },
  {
    question: "Can I apply to multiple programs at once?",
    answer: "Yes, with strategic timing. Our Multi-Program Strategy package helps you sequence applications to maximize acceptance chances without conflicting commitments."
  },
  {
    question: "What documents do I need for an incubator application?",
    answer: "Typical requirements include Commercial Registration, business plan or pitch deck, financial projections, and founder identification. Specific requirements vary by program — we provide a complete checklist during consultation."
  },
  {
    question: "How do I get a visa to live in Bahrain as a startup founder?",
    answer: "Once your company is registered, you can sponsor your own work visa. For larger investments, the Golden Visa program offers 10-year residency. We assist with both pathways."
  },
  {
    question: "What support do I get after being accepted into a program?",
    answer: "Our Complete Package includes 3 months of post-acceptance support to help you navigate program requirements, access resources, and prepare for any follow-on applications."
  }
];

export default function BusinessIncubators() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Business Incubator Bahrain | Startup Accelerator Services | Tamkeen & FinTech Bay</title>
        <meta 
          name="description" 
          content="Expert guidance for business incubator and startup accelerator applications in Bahrain. End-to-end support from company formation to Tamkeen, FinTech Bay, and C5 Accelerate program acceptance. 85% first-application success rate for foreign entrepreneurs."
        />
        <meta 
          name="keywords" 
          content="business incubator bahrain, startup accelerator bahrain, tamkeen startup program, fintech bay bahrain, c5 accelerate, startup funding bahrain, foreign entrepreneur bahrain, bahrain startup ecosystem"
        />
        <link rel="canonical" href="https://keylinkcorp.com/services/business-incubators" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Business Incubator Bahrain | Startup Accelerator Services" />
        <meta property="og:description" content="Launch your startup in Bahrain's thriving incubator ecosystem. Expert guidance for Tamkeen, FinTech Bay, and C5 Accelerate applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keylinkcorp.com/services/business-incubators" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(incubatorSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <IncubatorHero />

      {/* Partner Logos */}
      <IncubatorLogos />

      {/* SEO Explainer */}
      <IncubatorExplainer />


      {/* Benefits Grid */}
      <IncubatorBenefits />

      {/* Process Timeline */}
      <IncubatorProcess />

      {/* Comparison Section */}
      <IncubatorComparison />

      {/* Testimonials */}
      <IncubatorTestimonials />

      {/* Eligibility Checker */}
      <EligibilityChecker />

      {/* Pricing */}
      <IncubatorPricing />

      {/* FAQ */}
      <ServiceFAQ
        badge="Common Questions"
        title="Everything You Need to Know About Bahrain Incubators"
        subtitle="Answers to the questions founders ask most."
        faqs={faqItems}
      />

      {/* Contact Form */}
      <IncubatorContact />

      {/* Location */}
      <IncubatorLocation />

      {/* Final CTA */}
      <ServiceCTA
        badge="Ready to Launch?"
        title="Your Startup Journey Starts with a Single Conversation"
        subtitle="Book a free 15-minute WhatsApp consultation. We'll assess your eligibility, recommend the right program, and outline your fastest path to acceptance."
        primaryCTA={{ text: "Start WhatsApp Consultation", href: "https://wa.me/97317000000" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        features={[
          "Free eligibility assessment",
          "No commitment required",
          "Response within 2 hours"
        ]}
      />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
}
