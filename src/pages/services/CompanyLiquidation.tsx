import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { LiquidationHero } from "@/components/services/liquidation/LiquidationHero";
import { LiquidationTrustBar } from "@/components/services/liquidation/LiquidationTrustBar";
import { LiquidationCostCalculator } from "@/components/services/liquidation/LiquidationCostCalculator";
import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { LiquidationTypesComparison } from "@/components/services/liquidation/LiquidationTypesComparison";
import { LiquidationConsequences } from "@/components/services/liquidation/LiquidationConsequences";
import { LiquidationProcessTimeline } from "@/components/services/liquidation/LiquidationProcessTimeline";
import { LiquidationRequirements } from "@/components/services/liquidation/LiquidationRequirements";
import { LiquidationGovernmentFees } from "@/components/services/liquidation/LiquidationGovernmentFees";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { LiquidationSuccessSnapshot } from "@/components/services/liquidation/LiquidationSuccessSnapshot";
import { LiquidationFAQ } from "@/components/services/liquidation/LiquidationFAQ";
import { LiquidationCTA } from "@/components/services/liquidation/LiquidationCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { BackToTop } from "@/components/BackToTop";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { generateCompanyLiquidationSchema } from "@/lib/schema/companyLiquidationSchema";
import { 
  FileX, 
  Shield, 
  Clock, 
  Users, 
  Wallet, 
  Building2,
  Scale,
  Gavel,
  CheckCircle2,
  Globe,
  Landmark,
  Phone
} from "lucide-react";
import liquidationConsultationImage from "@/assets/company-liquidation-consultation.jpg";

// Why Choose Keylink differentiators
const whyChooseItems = [
  {
    icon: Building2,
    title: "7-Ministry Expertise",
    description: "Single point of contact for MOIC, LMRA, SIO, GOSI, NBR, Municipality, and Banks."
  },
  {
    icon: Shield,
    title: "100% Compliance Rate",
    description: "Zero rejected applications or post-closure liability claims."
  },
  {
    icon: Clock,
    title: "4-6 Week Timeline",
    description: "Efficient parallel processing across all ministries."
  },
  {
    icon: Globe,
    title: "Remote Closure",
    description: "Complete the process without visiting Bahrain."
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "Government fees separated from service fees."
  },
  {
    icon: FileX,
    title: "Post-Closure Support",
    description: "Document archiving and certificate attestation."
  }
];

// Related services
const relatedServices = [
  {
    title: "CR Amendment",
    description: "Update your company details before closure",
    href: "/services/cr-amendment",
    icon: FileX
  },
  {
    title: "PRO Services",
    description: "Government liaison for ministry clearances",
    href: "/services/pro-services",
    icon: Landmark
  },
  {
    title: "Accounting Services",
    description: "Final audit and financial statement preparation",
    href: "/services/accounting",
    icon: Wallet
  },
  {
    title: "Visa & Immigration",
    description: "Employee visa cancellation processing",
    href: "/services/visa-immigration",
    icon: Users
  }
];

export default function CompanyLiquidation() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Company Liquidation in Bahrain | Close Your Business Properly | Keylink";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Professional company liquidation services in Bahrain. 7-ministry clearance process, voluntary liquidation, striking off, CR cancellation. Avoid BHD 5,000+ in penalties. 350+ successful closures."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Professional company liquidation services in Bahrain. 7-ministry clearance process, voluntary liquidation, striking off, CR cancellation. Avoid BHD 5,000+ in penalties. 350+ successful closures.";
      document.head.appendChild(meta);
    }

    // Inject JSON-LD structured data
    const schemas = generateCompanyLiquidationSchema();
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`liquidation-schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.id = `liquidation-schema-${index}`;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`liquidation-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <LiquidationHero />
      
      {/* Trust Bar */}
      <LiquidationTrustBar />
      
      {/* Cost Calculator */}
      <LiquidationCostCalculator />
      
      {/* What Is Company Liquidation */}
      <ServiceExplainer
        badge="Understanding Liquidation"
        badgeIcon={Scale}
        title={
          <>
            What Is Company <span className="text-accent">Liquidation</span> in Bahrain?
          </>
        }
        paragraphs={[
          "Company liquidation is the formal legal process of winding up a business, settling all debts, distributing remaining assets to shareholders, and cancelling the Commercial Registration with MOIC. In Bahrain, this process involves coordination with seven government ministries—MOIC, LMRA, SIO, GOSI, NBR, Municipal Affairs, and the Central Bank (if applicable).",
          "Unlike simply abandoning a dormant CR, proper liquidation provides legal protection against future claims, prevents personal liability for directors, and ensures clean records with all government authorities. Without formal closure, companies face accumulating fees, frozen bank accounts, and potential travel restrictions for directors."
        ]}
        keyFacts={[
          { icon: Gavel, label: "Legal Framework", text: "Commercial Companies Law No. 21 of 2001" },
          { icon: Users, label: "Requirement", text: "Liquidator appointment (internal or external)" },
          { icon: FileX, label: "WLLs", text: "Final audit mandatory" },
          { icon: Clock, label: "Notice Period", text: "90 days minimum for creditors" },
          { icon: CheckCircle2, label: "Final Step", text: "CR cancellation completes dissolution" }
        ]}
        panelTitle="Benefits of Proper Liquidation"
        panelSubtitle="Protect yourself and close cleanly"
        benefits={[
          { icon: Shield, text: "Legal Protection - Avoid personal liability claims" },
          { icon: CheckCircle2, text: "Clean Exit - Clear records with all 7 ministries" },
          { icon: Wallet, text: "Bank Account Closure - Proper fund distribution" },
          { icon: Building2, text: "Asset Recovery - Maximize shareholder returns" },
          { icon: Globe, text: "Travel Freedom - No pending government blocks" },
          { icon: FileX, text: "Future Ventures - Clean slate for new businesses" }
        ]}
        panelFooter={{
          icon: Phone,
          text: "Free Consultation Available"
        }}
      />
      
      {/* Liquidation Types Comparison */}
      <LiquidationTypesComparison />
      
      {/* Consequences / Pain Points */}
      <LiquidationConsequences />
      
      {/* 7-Ministry Process Timeline */}
      <LiquidationProcessTimeline />
      
      {/* Requirements Checklist */}
      <LiquidationRequirements />
      
      {/* Government Fees */}
      <LiquidationGovernmentFees />
      
      {/* Why Choose Keylink */}
      <ServiceWhyChoose
        badge="Why Keylink"
        title="Why Choose Keylink for Liquidation?"
        subtitle="350+ successful company closures with zero liability cases"
        differentiators={whyChooseItems}
        imageSrc={liquidationConsultationImage}
        imageAlt="Professional company liquidation consultation in Bahrain"
        floatingStatValue="350+"
        floatingStatLabel="Successful Closures"
      />
      
      {/* Success Snapshot */}
      <LiquidationSuccessSnapshot />
      
      {/* Related Services */}
      <RelatedServicesGrid
        title="Related Services"
        subtitle="Complete your business transition with our comprehensive services"
        services={relatedServices}
      />
      
      {/* FAQ */}
      <LiquidationFAQ />
      
      {/* Final CTA */}
      <LiquidationCTA />
      
      {/* Floating elements */}
      <BackToTop />
      <FloatingWhatsApp />
    </Layout>
  );
}
