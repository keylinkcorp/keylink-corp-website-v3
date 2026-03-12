import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { WLLHero } from "@/components/services/wll/WLLHero";
import { WLLTrustBar } from "@/components/services/wll/WLLTrustBar";
import { WLLCostCalculator } from "@/components/services/wll/WLLCostCalculator";
import { WhatIsWLL } from "@/components/services/wll/WhatIsWLL";
import { WLLvsSPCComparison } from "@/components/services/wll/WLLvsSPCComparison";
import { WhyChooseWLL } from "@/components/services/wll/WhyChooseWLL";
import { WLLProcessTimeline } from "@/components/services/wll/WLLProcessTimeline";
import { WLLRequirements } from "@/components/services/wll/WLLRequirements";
import { WLLGovernmentFees } from "@/components/services/wll/WLLGovernmentFees";
import { WLLBankAccountUpdate } from "@/components/services/wll/WLLBankAccountUpdate";
import { WLLSuccessSnapshot } from "@/components/services/wll/WLLSuccessSnapshot";
import { WLLTestimonials } from "@/components/services/wll/WLLTestimonials";
import { WLLRelatedServices } from "@/components/services/wll/WLLRelatedServices";
import { WLLFAQ } from "@/components/services/wll/WLLFAQ";
import { WLLCTA } from "@/components/services/wll/WLLCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { wllSchema } from "@/lib/schema/wllSchema";

const WLLCompany = () => {
  useEffect(() => {
    document.title = "WLL Company Formation in Bahrain - Register in 5-7 Days | From BHD 1,200 | Keylink Corp";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Form a Limited Liability Company (WLL) in Bahrain with 2-50 shareholders and 100% foreign ownership. BHD 20,000 minimum capital. Expert partnership registration & MOIC compliance. Free consultation.");
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/wll-company");

    const ogTags = [
      { property: "og:title", content: "WLL Company Formation in Bahrain - 100% Foreign Ownership | Keylink Corp" },
      { property: "og:description", content: "Register your WLL in Bahrain in 5-7 days. Partnership formation from BHD 1,200. Expert business setup services with full MOIC and LMRA compliance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://keylinkcorp.com/services/wll-company" },
      { property: "og:image", content: "https://keylinkcorp.com/og-wll-company.jpg" },
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

    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "WLL Company Formation in Bahrain - Start in 5-7 Days" },
      { name: "twitter:description", content: "Register WLL with 2-50 shareholders and 100% foreign ownership from BHD 1,200. Expert Bahrain business setup services." },
      { name: "twitter:image", content: "https://keylinkcorp.com/og-wll-company.jpg" },
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

    const existingSchema = document.querySelector('script[data-schema="wll-company"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "wll-company");
      script.textContent = JSON.stringify(wllSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="wll-company"]');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return (
    <Layout>
      <WLLHero />
      <WLLTrustBar />
      <WLLCostCalculator />
      <WhatIsWLL />
      <WLLvsSPCComparison />
      <WhyChooseWLL />
      <WLLProcessTimeline />
      <WLLRequirements />
      <WLLGovernmentFees />
      <WLLBankAccountUpdate />
      <WLLSuccessSnapshot />
      <WLLTestimonials />
      <WLLRelatedServices />
      <WLLFAQ />
      <WLLCTA />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
};

export default WLLCompany;
