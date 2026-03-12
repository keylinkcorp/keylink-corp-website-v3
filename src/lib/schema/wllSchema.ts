export const wllSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "description": "Bahrain's trusted WLL company formation partner. Expert Limited Liability Company registration, partnership formation, and MOIC compliance services for businesses.",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahrain Financial Harbour",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "1234",
        "addressCountry": "BH"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "name": "Keylink Corp - WLL Company Formation Bahrain",
      "description": "Professional WLL (With Limited Liability) company formation services in Bahrain. Register your partnership business with 2-50 shareholders and 100% foreign ownership from BHD 20,000 minimum capital. MOIC registration and LMRA support from BHD 1,200.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "priceRange": "BHD 1,200 - BHD 3,500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "400",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://keylinkcorp.com/services/wll-company/#webpage",
      "url": "https://keylinkcorp.com/services/wll-company",
      "name": "WLL Company Formation in Bahrain - Register in 5-7 Days | From BHD 1,200 | Keylink Corp",
      "description": "Form a Limited Liability Company (WLL) in Bahrain with 2-50 shareholders and 100% foreign ownership. BHD 20,000 minimum capital. Expert partnership registration & MOIC compliance. Free consultation.",
      "isPartOf": { "@id": "https://keylinkcorp.com/#website" },
      "about": { "@id": "https://keylinkcorp.com/services/wll-company/#service" },
      "breadcrumb": { "@id": "https://keylinkcorp.com/services/wll-company/#breadcrumb" },
      "inLanguage": "en"
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/wll-company/#service",
      "name": "WLL Company Formation in Bahrain",
      "description": "Complete WLL (With Limited Liability) company formation services in Bahrain. 2-50 shareholders allowed with 100% foreign ownership and BHD 20,000 minimum capital. Ideal for partnerships, joint ventures, and growing SMEs. Full MOIC registration, commercial licensing, and LMRA compliance from BHD 1,200.",
      "provider": { "@id": "https://keylinkcorp.com/#organization" },
      "serviceType": "WLL Formation",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain",
        "alternateName": "Kingdom of Bahrain"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WLL Formation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "WLL Starter Package",
            "description": "WLL company registration with MOIC approval, commercial registration, and business license",
            "price": "1200",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "WLL Business Package",
            "description": "WLL formation with investor visas, office setup, and bank account support",
            "price": "2500",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/wll-company/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a WLL company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A WLL (With Limited Liability) company is a partnership structure allowing 2-50 shareholders to operate with limited personal liability. Governed by Articles 224-271 of the Commercial Companies Law, WLL is Bahrain's preferred structure for joint ventures, family businesses, and growing SMEs."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners own 100% of a WLL in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Foreign nationals and corporations can own 100% of a WLL without requiring a local Bahraini partner. This makes Bahrain one of the most attractive GCC jurisdictions for international joint ventures."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital for WLL in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum capital for a WLL is BHD 20,000. This amount must be deposited in a Bahraini corporate bank account before Commercial Registration issuance, as mandated since June 2024."
          }
        },
        {
          "@type": "Question",
          "name": "How many shareholders can a WLL have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A WLL can have between 2 and 50 shareholders. Shareholders can be individuals, corporations, or a mix of both. For more than 50 shareholders, a different company structure (BSC) is required."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between WLL and SPC in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The key difference is shareholder count: SPC allows only 1 shareholder with BHD 50 minimum capital, while WLL allows 2-50 shareholders with BHD 20,000 minimum capital. WLLs typically have higher bank credibility and are preferred for partnerships and investor-backed businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How long does WLL registration take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WLL registration typically takes 5-7 business days with Keylink Corp. This includes security approval, name reservation, bank account opening, MOA notarization, CR issuance, and LMRA registration."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be in Bahrain to register a WLL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No physical presence is required. Keylink handles the entire process remotely through Power of Attorney. Documents can be signed, notarized, and submitted without visiting Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for WLL registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Individual shareholders need passport copies, CV, proof of address, and photographs. Corporate shareholders require incorporation certificates, board resolutions, and audited financials. Multi-shareholder partnerships also need a shareholder agreement and capital contribution schedule."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add shareholders to an existing WLL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adding shareholders requires a CR Amendment and MOA update. The new shareholder must meet KYC/UBO requirements, and capital contributions are adjusted accordingly. Keylink handles the full amendment process."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements for WLL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual WLL compliance includes CR renewal (BHD 50/year), commercial license renewal, Chamber of Commerce fees (BHD 100), and LMRA fees if you have employees. WLLs with employee visas may require annual audits depending on size."
          }
        },
        {
          "@type": "Question",
          "name": "Is WLL better than Branch Office for foreign companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your goals. WLL is a separate Bahraini legal entity offering limited liability and local credibility. Branch Offices are extensions of the parent company with unlimited liability to the parent. WLL is preferred for joint ventures and local partnerships; Branch is preferred for companies wanting direct control without local partners."
          }
        },
        {
          "@type": "Question",
          "name": "What business activities are allowed for WLL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WLLs can register for most commercial activities including trading, consulting, technology, professional services, manufacturing, and e-commerce. Some regulated activities (healthcare, financial services) require additional approvals."
          }
        },
        {
          "@type": "Question",
          "name": "How much does WLL formation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WLL formation with Keylink starts from BHD 1,200. Government fees are approximately BHD 310-540. Packages with visa processing, office setup, and bank account support range from BHD 1,800 to BHD 3,500 depending on shareholder count and service additions."
          }
        },
        {
          "@type": "Question",
          "name": "Can a single person form a WLL in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Decree 28/2020, a single shareholder can technically form a WLL (this is the SPC framework). However, for traditional multi-shareholder WLL benefits including partnership governance and higher credibility, you need at least 2 shareholders."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/wll-company/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://keylinkcorp.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://keylinkcorp.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "WLL Company Formation in Bahrain",
          "item": "https://keylinkcorp.com/services/wll-company"
        }
      ]
    }
  ]
};
