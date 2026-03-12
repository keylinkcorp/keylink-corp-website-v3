import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { BankAccountHero } from "@/components/services/bank-account/BankAccountHero";
import { BankAccountTrustBar } from "@/components/services/bank-account/BankAccountTrustBar";
import { BankAccountMandateUpdate } from "@/components/services/bank-account/BankAccountMandateUpdate";
import { BankAccountAudienceClarity } from "@/components/services/bank-account/BankAccountAudienceClarity";
import { BankAccountProblemAgitation } from "@/components/services/bank-account/BankAccountProblemAgitation";
import { BankAccountSolutionFramework } from "@/components/services/bank-account/BankAccountSolutionFramework";
import { BankAccountComparison } from "@/components/services/bank-account/BankAccountComparison";
import { BankAccountCapitalRequirements } from "@/components/services/bank-account/BankAccountCapitalRequirements";
import { BankAccountProcessTimeline } from "@/components/services/bank-account/BankAccountProcessTimeline";
import { BankAccountRequirements } from "@/components/services/bank-account/BankAccountRequirements";
import { BankAccountDIYComparison } from "@/components/services/bank-account/BankAccountDIYComparison";
import { BankAccountCaseStudy } from "@/components/services/bank-account/BankAccountCaseStudy";
import { BankAccountTeamAuthority } from "@/components/services/bank-account/BankAccountTeamAuthority";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { bankAccountFAQData } from "@/components/services/bank-account/bankAccountFAQData";
import { bankAccountSchema } from "@/lib/schema/bankAccountSchema";
import { Building, FileText, Users, Briefcase } from "lucide-react";

const relatedServices = [
  {
    icon: Building,
    title: "Company Formation",
    description: "Complete SPC, WLL, or Branch setup in Bahrain",
    href: "/services/company-formation"
  },
  {
    icon: FileText,
    title: "Commercial Registration",
    description: "CR application, renewal, and amendments",
    href: "/services/commercial-registration"
  },
  {
    icon: Users,
    title: "Visa & Immigration",
    description: "Investor visas, employee work permits",
    href: "/services/visa-immigration"
  },
  {
    icon: Briefcase,
    title: "PRO Services",
    description: "Ministry approvals, document processing",
    href: "/services/pro-services"
  }
];

export default function BankAccount() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Business Bank Account Opening Bahrain | Keylink Corporate Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Open your corporate bank account in Bahrain faster. Direct relationship manager introductions at NBB, BBK, AUB, and Standard Chartered. 95% approval rate, 2-3 week timeline.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Open your corporate bank account in Bahrain faster. Direct relationship manager introductions at NBB, BBK, AUB, and Standard Chartered. 95% approval rate, 2-3 week timeline.";
      document.head.appendChild(newMeta);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkbahrain.com/services/bank-account");

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[data-schema="bank-account"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-schema", "bank-account");
    schemaScript.textContent = JSON.stringify(bankAccountSchema);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup
      const schemaToRemove = document.querySelector('script[data-schema="bank-account"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <article itemScope itemType="https://schema.org/Service">
        {/* Block 1: Hero */}
        <BankAccountHero />

        {/* Block 2: Trust Bar */}
        <BankAccountTrustBar />

        {/* Block 3: 2024 Regulatory Mandate */}
        <BankAccountMandateUpdate />

        {/* Block 4: Audience Clarity */}
        <BankAccountAudienceClarity />

        {/* Block 5: Problem Agitation */}
        <BankAccountProblemAgitation />

        {/* Block 6: Solution Framework */}
        <BankAccountSolutionFramework />

        {/* Block 7: Bank Comparison */}
        <BankAccountComparison />

        {/* Block 8: Capital Requirements */}
        <BankAccountCapitalRequirements />

        {/* Block 9: Process Timeline */}
        <BankAccountProcessTimeline />

        {/* Block 10: Requirements Checklist */}
        <BankAccountRequirements />

        {/* Block 11: DIY vs Professional */}
        <BankAccountDIYComparison />

        {/* Block 12: Case Study */}
        <BankAccountCaseStudy />

        {/* Block 13: Team Authority */}
        <BankAccountTeamAuthority />

        {/* Block 14: Related Services */}
        <RelatedServicesGrid 
          title="From Bank Account to Fully Operational"
          subtitle="Bank account opening is one step in your Bahrain business journey. We support you through the entire process."
          services={relatedServices}
        />

        {/* Block 15: FAQ */}
        <ServiceFAQ 
          faqs={bankAccountFAQData}
          title="Frequently Asked Questions About Business Bank Accounts"
        />

        {/* Block 16: Final CTA */}
        <ServiceCTA
          badge="Get Started Today"
          title="Ready to Skip the Rejection Cycle?"
          subtitle="Don't let bank account delays stall your Bahrain business launch. Our direct bank relationships get you approved faster — with a 95% first-attempt success rate."
          primaryCTA={{
            text: "Book Free Consultation",
            href: "/contact"
          }}
          secondaryCTA={{
            text: "Call +973 1700 0000",
            href: "tel:+97317000000"
          }}
          features={[
            "Free Initial Assessment",
            "Bank Matching Recommendation",
            "Full Documentation Support"
          ]}
        />
      </article>
    </Layout>
  );
}
