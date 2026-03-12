import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHeroSplit } from "@/components/services/shared/ServiceHeroSplit";
import { FreeZonesGuide } from "@/components/services/formation/FreeZonesGuide";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Building2, Clock, Globe, Shield, Timer, Users2 } from "lucide-react";
import { FreeZoneQuickAnswer } from "@/components/services/formation/free-zone/FreeZoneQuickAnswer";
import { FreeZoneComparison } from "@/components/services/formation/free-zone/FreeZoneComparison";
import { FreeZoneSetupSteps } from "@/components/services/formation/free-zone/FreeZoneSetupSteps";
import { FreeZoneFAQ } from "@/components/services/formation/free-zone/FreeZoneFAQ";
import { FreeZoneCostsFees } from "@/components/services/formation/free-zone/FreeZoneCostsFees";
import { FreeZoneDocumentsChecklist } from "@/components/services/formation/free-zone/FreeZoneDocumentsChecklist";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceBenefits } from "@/components/services/shared/ServiceBenefits";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { FreeZoneMidCTA } from "@/components/services/formation/free-zone/FreeZoneMidCTA";
import { FreeZoneStickyCTA } from "@/components/services/formation/free-zone/FreeZoneStickyCTA";

import heroImage from "@/assets/free-zone/free-zone-hero.jpg";

export default function FreeZoneInBahrain() {
  useEffect(() => {
    document.title = "Free Zone in Bahrain | Zones, Setup & Costs Guide | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Free zone in Bahrain: compare BLZ, BIIP, BIW and other industrial zones, understand setup steps and costs, and get expert support to register your business with confidence."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain");

    // FAQ schema cleanup (if hot-reloaded / navigated)
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="free-zone-bahrain-faq"]');
    if (existingSchema) existingSchema.remove();
  }, []);

  return (
    <Layout>
      <div className="pb-24 md:pb-0">
        <ServiceHeroSplit
          badge="Launch Business"
          title="Free zone in"
          highlight="Bahrain"
          subtitle="A modern, practical guide to Bahrain’s industrial zones and business parks—compare locations, understand costs, and choose a compliant setup path." 
          features={[
            { icon: Clock, text: "Fast setup guidance" },
            { icon: Shield, text: "Compliance-first" },
            { icon: Globe, text: "Built for foreign founders" },
          ]}
          primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
          secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
          priceFrom="BHD 1/sqm"
          priceLabel="Land from"
          imageSrc={heroImage}
          imageAlt="Bahrain industrial port skyline at golden hour"
        />

        <ServiceTrustBar
          stats={[
            { icon: Building2, value: 4, suffix: "", label: "Zones compared" },
            { icon: Timer, value: 7, suffix: "days", label: "Typical setup (simple cases)" },
            { icon: Users2, value: 500, suffix: "+", label: "Businesses supported" },
            { icon: Shield, value: 100, suffix: "%", label: "Compliance-first planning" },
          ]}
        />

        <ServiceBenefits
          badge="Why this guide"
          title="Make the zone decision once — and set up clean"
          subtitle="Short, practical guidance based on what actually causes delays: activity approvals, address compliance, and facility fit."
          benefits={[
            { icon: Shield, title: "Approval planning", description: "We confirm your activity path before you sign a lease or commit to a zone." },
            { icon: Clock, title: "Fewer delays", description: "Checklist-first submissions reduce back-and-forth and rework." },
            { icon: Globe, title: "Founder-friendly", description: "Built for foreign-owned structures (eligibility is activity-dependent)." },
            { icon: Building2, title: "Address fit", description: "We align your facility type (office/warehouse/land) with licensing." },
            { icon: Timer, title: "Clear timeline", description: "You’ll know what happens next and what information affects time and cost." },
          ]}
        />

        <FreeZoneQuickAnswer />

        <FreeZoneComparison />

        <FreeZoneMidCTA />

        <FreeZoneCostsFees />

        <FreeZonesGuide />

        <FreeZoneDocumentsChecklist />

        <FreeZoneSetupSteps />

        <FreeZoneFAQ />

        <RelatedServicesGrid
          badge="Related"
          title="Helpful next steps"
          subtitle="Internal pages that commonly sit next to industrial-zone setups."
          services={[
            {
              icon: Building2,
              title: "Company Formation",
              description: "Choose the right structure and register cleanly.",
              href: "/services/company-formation",
            },
            {
              icon: Shield,
              title: "Commercial Registration (CR)",
              description: "Understand CR flow, requirements, and timelines.",
              href: "/services/commercial-registration",
            },
            {
              icon: Building2,
              title: "Lease Contract Registration",
              description: "Make sure your address is compliant for licensing.",
              href: "/services/lease-contract-registration",
            },
            {
              icon: Globe,
              title: "Visa & Immigration",
              description: "Plan founder and staff visas alongside setup.",
              href: "/services/visa-immigration",
            },
          ]}
          currentService="/free-zone-in-bahrain"
        />

        <FormationCTA />
      </div>

      <FreeZoneStickyCTA />
    </Layout>
  );
}
