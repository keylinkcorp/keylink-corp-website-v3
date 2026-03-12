export const spcSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "description": "Bahrain's trusted Single Person Company formation partner. Expert SPC registration, MOIC approval, and LMRA compliance services for solo entrepreneurs.",
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
      "name": "Keylink Corp - SPC Formation Bahrain",
      "description": "Professional Single Person Company formation services in Bahrain. Register your SPC with 100% foreign ownership from BHD 50 minimum capital. MOIC registration and LMRA support from BHD 750.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "priceRange": "BHD 750 - BHD 1,500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "350",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://keylinkcorp.com/services/single-person-company/#webpage",
      "url": "https://keylinkcorp.com/services/single-person-company",
      "name": "Single Person Company in Bahrain - Register SPC in 3-14 Days | From BHD 750 | Keylink Corp",
      "description": "Start your solo business in Bahrain with 100% foreign ownership. Register a Single Person Company (SPC) in 3-14 days from BHD 50 minimum capital. Expert MOIC registration & LMRA support. Free consultation.",
      "isPartOf": { "@id": "https://keylinkcorp.com/#website" },
      "about": { "@id": "https://keylinkcorp.com/services/single-person-company/#service" },
      "breadcrumb": { "@id": "https://keylinkcorp.com/services/single-person-company/#breadcrumb" },
      "inLanguage": "en"
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/single-person-company/#service",
      "name": "Single Person Company Formation in Bahrain",
      "description": "Complete Single Person Company (SPC) formation services in Bahrain. 100% foreign ownership allowed with BHD 50 minimum capital. Ideal for solo entrepreneurs, consultants, and freelancers. Full MOIC registration, commercial licensing, and LMRA compliance from BHD 750.",
      "provider": { "@id": "https://keylinkcorp.com/#organization" },
      "serviceType": "SPC Formation",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain",
        "alternateName": "Kingdom of Bahrain"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SPC Formation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "SPC Starter Package",
            "description": "Single Person Company registration with MOIC approval, commercial registration, and business license",
            "price": "750",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "SPC Business Package",
            "description": "SPC formation with investor visa, virtual office, and bank account support",
            "price": "1200",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/single-person-company/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Single Person Company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Single Person Company (SPC) in Bahrain is a limited liability company owned by one individual shareholder. Under Decree 28/2020, SPC has been merged into the WLL (Limited Liability Company) framework, allowing a single shareholder to form a WLL with the same benefits—100% foreign ownership, limited liability protection, and BHD 50 minimum capital."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners own 100% of an SPC in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Foreign nationals can own 100% of a Single Person Company in Bahrain. There is no requirement for a local sponsor or Bahraini partner. This makes Bahrain one of the most attractive GCC countries for solo entrepreneurs and consultants seeking full ownership of their business."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital required for SPC in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum capital for a Single Person Company in Bahrain is BHD 50. However, we recommend BHD 2,150+ if you plan to sponsor work visas, as LMRA requires adequate capital for visa eligibility. The capital must be deposited in a Bahrain corporate bank account as of June 2024."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SPC registration take in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SPC registration in Bahrain typically takes 3-14 business days with Keylink Corp. This includes security approval (1-3 days), name reservation, bank account opening, document notarization, CR issuance, and LMRA registration. Foreign nationals may require additional processing time for security clearance."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be in Bahrain to register an SPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No physical presence is required. Keylink handles the entire SPC registration process remotely through Power of Attorney. All documents can be signed, notarized, and submitted without visiting Bahrain. Many solo entrepreneurs complete their business setup entirely online."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SPC and WLL in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Bahrain's 2020 Commercial Companies Law (Decree 28), SPC has been merged into the WLL framework. The key difference is shareholder count: SPC allows only 1 shareholder while WLL allows 2-50. Both offer limited liability, 100% foreign ownership, and similar registration processes. SPC has lower minimum capital (BHD 50 vs BHD 20,000 for traditional WLL)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my SPC to WLL later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Converting an SPC to a multi-shareholder WLL is straightforward when you're ready to add partners. The process involves amending your Commercial Registration, updating the Memorandum of Association, and registering the new shareholders. Keylink handles the full conversion process."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for SPC registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Individual SPC registration requires: valid passport copy, professional CV/resume, proof of residential address (utility bill or bank statement), passport-size photograph, and a brief business plan. Corporate shareholders need additional documents including certificate of incorporation, board resolution, and parent company financials."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements for SPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual SPC compliance includes: Commercial Registration renewal (BHD 50/year), commercial license renewal, Chamber of Commerce fees (BHD 50-100), and LMRA fees if you have employees (BHD 10/month per worker). Audit requirements are minimal for SPCs without employees."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a work visa through my SPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. As the SPC owner, you can obtain an investor visa. Your visa quota for employees depends on your office size and business activities. Virtual offices typically allow 0 visas, while serviced offices allow 2+ visas. Keylink handles all LMRA visa processing including investor and work permits."
          }
        },
        {
          "@type": "Question",
          "name": "What business activities are allowed for SPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SPCs can register for most commercial activities in Bahrain including consulting, trading, technology, professional services, and e-commerce. Some regulated activities (healthcare, financial services, legal) may require additional approvals. Keylink advises on activity selection and any sector-specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How much does SPC formation cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SPC formation with Keylink starts from BHD 750. This includes MOIC registration, commercial license, and basic compliance. Packages with investor visa, virtual office, and bank account support start at BHD 1,200. Government fees (CR registration, trade license, Chamber) are additional and transparently itemized."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/single-person-company/#breadcrumb",
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
          "name": "Single Person Company in Bahrain",
          "item": "https://keylinkcorp.com/services/single-person-company"
        }
      ]
    }
  ]
};
