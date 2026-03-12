export const companyFormationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "description": "Bahrain's trusted company formation and business setup partner. Expert MOIC registration, WLL and SPC formation, commercial licensing, and LMRA compliance services.",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahrain Financial Harbour",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "1234",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/keylinkcorp",
        "https://twitter.com/keylinkcorp"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "name": "Keylink Corp - Company Formation Bahrain",
      "description": "Professional company formation services in Bahrain. Register your WLL, SPC, or branch office with 100% foreign ownership. MOIC registration, commercial licensing, and visa processing from BHD 750.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahrain Financial Harbour",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "1234",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "BHD 750 - BHD 2,500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ahmed Al-Rashid" },
          "datePublished": "2024-01-15",
          "reviewBody": "Keylink made our WLL company formation incredibly smooth. They handled all the MOIC paperwork and we were registered in just 5 days.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://keylinkcorp.com/services/company-formation/#webpage",
      "url": "https://keylinkcorp.com/services/company-formation",
      "name": "Company Formation in Bahrain 2026 | Register Your Business in 3-7 Days | Keylink Corp",
      "description": "Register your company in Bahrain with 100% foreign ownership from BHD 750. Expert WLL, SPC, and branch office formation in 3-7 days. MOIC registration, commercial licensing, and LMRA compliance included.",
      "isPartOf": { "@id": "https://keylinkcorp.com/#website" },
      "about": { "@id": "https://keylinkcorp.com/services/company-formation/#service" },
      "breadcrumb": { "@id": "https://keylinkcorp.com/services/company-formation/#breadcrumb" },
      "inLanguage": "en",
      "dateModified": "2026-02-03",
      "potentialAction": {
        "@type": "ReadAction",
        "target": "https://keylinkcorp.com/services/company-formation"
      }
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/company-formation/#service",
      "name": "Company Formation in Bahrain",
      "description": "Complete company formation services in Bahrain including SPC (Single Person Company), WLL (Limited Liability Company), Branch Office, and Holding Company registration. 100% foreign ownership allowed. Full MOIC registration, commercial licensing, and LMRA compliance from BHD 750.",
      "provider": { "@id": "https://keylinkcorp.com/#organization" },
      "serviceType": "Company Formation",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain",
        "alternateName": "Kingdom of Bahrain"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Company Formation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Package - SPC Formation",
            "description": "Single Person Company (SPC) registration with MOIC approval, commercial registration, and business license",
            "price": "750",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
          },
          {
            "@type": "Offer",
            "name": "Business Package - WLL Formation",
            "description": "Limited Liability Company (WLL) registration with visa support, LMRA registration, and corporate bank account assistance",
            "price": "1200",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
          },
          {
            "@type": "Offer",
            "name": "Premium Package - Full-Service Formation",
            "description": "Complete business setup with PRO services, visa processing, accounting setup, and ongoing compliance support",
            "price": "1800",
            "priceCurrency": "BHD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
          }
        ]
      }
    },
    // NEW: HowTo Schema for formation process
    {
      "@type": "HowTo",
      "@id": "https://keylinkcorp.com/services/company-formation/#howto",
      "name": "How to Register a Company in Bahrain",
      "description": "Step-by-step guide to company formation in Bahrain with 100% foreign ownership",
      "totalTime": "P7D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "BHD",
        "value": "750"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Initial Registration",
          "text": "Submit security approval request to MOIC, register company name, prepare capital deposit, and submit shareholder documentation."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Location & Approvals",
          "text": "Register business address, obtain sector-specific approvals if required, notarize documents, and open corporate bank account."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Final Compliance",
          "text": "Complete LMRA registration, process work visas for employees, and obtain national ID cards."
        }
      ]
    },
    // NEW: Product Schema with aggregated reviews
    {
      "@type": "Product",
      "@id": "https://keylinkcorp.com/services/company-formation/#product",
      "name": "Bahrain Company Formation Service",
      "description": "Professional company registration in Bahrain with 100% foreign ownership. Includes MOIC registration, commercial license, and LMRA compliance.",
      "brand": {
        "@type": "Brand",
        "name": "Keylink Corp"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "750",
        "highPrice": "2500",
        "priceCurrency": "BHD",
        "offerCount": 3
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    // NEW: ItemList for business activities
    {
      "@type": "ItemList",
      "@id": "https://keylinkcorp.com/services/company-formation/#activities",
      "name": "Permitted Business Activities in Bahrain",
      "description": "List of business activities available for company registration in Bahrain",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "General Trading",
          "description": "Import and export of goods, wholesale and retail trade"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Management Consulting",
          "description": "Business strategy, operations, and management advisory services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IT Services",
          "description": "Software development, IT consulting, and digital solutions"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "E-commerce",
          "description": "Online retail, digital marketplaces, and electronic commerce"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Healthcare Services",
          "description": "Medical clinics and healthcare facilities (requires NHRA approval)"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/company-formation/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to form a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With Keylink Corp, company formation in Bahrain takes 3-7 business days. This includes MOIC security approval, commercial registration, and trade license issuance. Our streamlined process is significantly faster than the industry average of 2-6 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners own 100% of a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Since 2017, Bahrain allows 100% foreign ownership in most business sectors. You can register a WLL (Limited Liability Company), SPC (Single Person Company), or branch office without a local sponsor. Some restricted activities like certain professional services may require a Bahraini partner."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital required to start a business in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum capital requirements vary by company type in Bahrain: SPC (Single Person Company) requires BHD 50 minimum, WLL (Limited Liability Company) requires BHD 20,000, and Holding Companies require BHD 250,000. The capital must be deposited in a Bahrain corporate bank account."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be physically present in Bahrain to register a company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We offer complete remote company formation services. All documents can be signed via Power of Attorney, and we handle all MOIC submissions, commercial registration, and LMRA filings on your behalf. Many entrepreneurs complete the entire business setup process without visiting Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What types of companies can I register in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Main company types in Bahrain include: Single Person Company (SPC) for solo entrepreneurs requiring BHD 50 capital, Limited Liability Company (WLL) for partnerships requiring BHD 20,000 capital, Branch Office for foreign company expansion, Holding Company for investment vehicles, and Representative Office for market research activities."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for company formation in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents for Bahrain company registration include: valid passport copies of all shareholders, professional CV/resume, proof of residential address (utility bill or bank statement), and a business plan for certain regulated activities. Corporate shareholders need additional documents such as certificate of incorporation, memorandum of association, and board resolutions."
          }
        },
        {
          "@type": "Question",
          "name": "How much does company formation cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our company formation packages start from BHD 750 for basic SPC registration. Full WLL formation with visa support starts at BHD 1,200. Premium packages with PRO services, accounting setup, and ongoing compliance start at BHD 1,800. All pricing is transparent with no hidden government fees."
          }
        },
        {
          "@type": "Question",
          "name": "What are the tax benefits of forming a company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bahrain offers significant tax advantages: 0% corporate income tax on most business activities, 0% personal income tax, 10% VAT (with BHD 37,500 registration threshold), double taxation treaties with 50+ countries, and free profit repatriation with no currency restrictions."
          }
        },
        {
          "@type": "Question",
          "name": "What is Tamkeen and how can it help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tamkeen is Bahrain's Labour Fund that provides support to businesses including up to 50% wage subsidy for Bahraini employees for 3 years, 80% coverage on training programs, and various business development grants. New companies can significantly reduce operating costs through these programs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bahrain Golden Visa and how do I qualify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bahrain Golden Visa is a 10-year residency program for investors and skilled professionals. Qualification criteria include: real estate investment of BHD 200,000+, qualifying business investment creating jobs, or exceptional talent in specific fields. Company owners with qualifying investments may be eligible."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get work visas through my company in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your visa quota depends on your office size and registered business activities. Keylink handles all LMRA visa processing including work permits, residence permits, and the Golden Visa program for qualified investors with BHD 500,000+ investment."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements for a Bahrain company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual compliance requirements include: Commercial Registration (CR) renewal with MOIC, commercial license renewal, audit requirements for WLL companies, LMRA fees for employees (BHD 10/month per worker), and municipal fees. Our compliance packages handle all these requirements automatically."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/company-formation/#breadcrumb",
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
          "name": "Company Formation in Bahrain",
          "item": "https://keylinkcorp.com/services/company-formation"
        }
      ]
    }
  ]
};
