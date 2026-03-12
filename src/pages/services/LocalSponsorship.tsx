import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { localSponsorshipSchema } from "@/lib/schema/localSponsorshipSchema";
import {
  SponsorshipHero,
  SponsorshipTrustBar,
  OwnershipRequirement,
  LegalProtectionFramework,
  SponsorVettingProcess,
  SponsorshipComparison,
  RestrictedActivities,
  SponsorshipProcess,
  SponsorshipPricing,
  SponsorshipGuarantee,
  SponsorshipFAQ,
  SponsorshipCTA
} from "@/components/services/local-sponsorship";

export default function LocalSponsorship() {
  useEffect(() => {
    // Set page title - Primary keyword at start
    document.title = "Local Sponsorship in Bahrain - Vetted Sponsors from BHD 600/year | Keylink Corp";
    
    // Set meta description with CTA and secondary keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Access restricted business sectors in Bahrain with 100% control. Our vetted local sponsors and legal protection framework safeguard your investment. From BHD 600/year. Free consultation.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/local-sponsorship");

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Local Sponsorship in Bahrain - 100% Control Guaranteed | Keylink Corp" },
      { property: "og:description", content: "Access restricted sectors in Bahrain with vetted local sponsors. Comprehensive legal protection framework protects your investment. From BHD 600/year." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://keylinkcorp.com/services/local-sponsorship" },
      { property: "og:image", content: "https://keylinkcorp.com/og-local-sponsorship.jpg" },
      { property: "og:site_name", content: "Keylink Corp" },
      { property: "og:locale", content: "en_US" },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Local Sponsorship in Bahrain - Vetted Sponsors from BHD 600/year" },
      { name: "twitter:description", content: "Access restricted business sectors with comprehensive legal protection. 100+ vetted sponsors in our network. Free consultation." },
      { name: "twitter:image", content: "https://keylinkcorp.com/og-local-sponsorship.jpg" },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="local-sponsorship"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "local-sponsorship");
      script.textContent = JSON.stringify(localSponsorshipSchema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const schemaScript = document.querySelector('script[data-schema="local-sponsorship"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <SponsorshipHero />
        <SponsorshipTrustBar />
        <OwnershipRequirement />
        <LegalProtectionFramework />
        <SponsorVettingProcess />
        <SponsorshipComparison />
        <RestrictedActivities />
        <SponsorshipProcess />
        <SponsorshipPricing />
        <SponsorshipGuarantee />
        <SponsorshipFAQ />
        <SponsorshipCTA />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
