export const branchOfficeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/keylinkcorp",
        "https://twitter.com/keylinkcorp"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "name": "Keylink Corp - Branch Office Registration Bahrain",
      "description": "Professional branch office registration services in Bahrain for foreign companies. 100% foreign ownership, 7-10 day setup, no local sponsor required.",
      "url": "https://keylinkcorp.com/services/branch-office",
      "telephone": "+973-1234-5678",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2235",
        "longitude": "50.5876"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/branch-office/#service",
      "name": "Foreign Company Branch Office Registration in Bahrain",
      "description": "Complete branch office registration services for international companies establishing presence in Bahrain. Includes MOIC registration, commercial license, bank account support, and branch manager visa processing.",
      "provider": {
        "@id": "https://keylinkcorp.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Branch Office Registration",
      "offers": {
        "@type": "Offer",
        "price": "1200",
        "priceCurrency": "BHD",
        "priceValidUntil": "2025-12-31"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/branch-office/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a foreign company branch in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A foreign company branch in Bahrain is a legal extension of a parent company registered abroad. Unlike a subsidiary (WLL), it is not a separate legal entity—the parent company retains full liability. Branches can conduct the same activities as the parent and repatriate 100% of profits to headquarters without corporate tax."
          }
        },
        {
          "@type": "Question",
          "name": "Can a foreign company own 100% of a branch in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Foreign companies can establish a branch in Bahrain with 100% ownership. No local partner or sponsor is required. The parent company maintains complete control over the branch operations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum capital required for a branch office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no statutory minimum capital requirement for branch offices in Bahrain. However, adequate operational funding should be demonstrated. The branch operates under the parent company's capital structure."
          }
        },
        {
          "@type": "Question",
          "name": "How long does branch registration take in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branch office registration in Bahrain typically takes 7-10 business days with Keylink Corp. This includes document legalization verification, MOIC approval, commercial license issuance, and bank account opening."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required from the parent company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parent company documents include: Certificate of Incorporation, Memorandum and Articles of Association, Board Resolution authorizing branch establishment, audited financial statements, Good Standing Certificate—all apostilled or legalized for use in Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "Does the branch need a resident manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every branch office in Bahrain must appoint a resident branch manager who holds a valid Bahrain residence permit. The manager can be a foreign national with an investor or work visa."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a branch and a WLL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A branch is an extension of the parent company with no separate legal identity—parent company is fully liable. A WLL (Limited Liability Company) is a separate Bahraini legal entity with limited liability for shareholders. Branches have simpler setup but less liability protection; WLLs offer liability shield but require local incorporation."
          }
        },
        {
          "@type": "Question",
          "name": "Can a branch employ staff in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Branch offices can sponsor work visas for employees through LMRA. Visa quotas depend on office size and registered activities. Keylink handles all LMRA registrations and visa processing."
          }
        },
        {
          "@type": "Question",
          "name": "What are the annual compliance requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual branch compliance includes: Commercial Registration renewal, commercial license renewal, Chamber of Commerce fees, LMRA fees for employees, and submission of parent company's annual audited accounts. No local audit is required for the branch itself in most cases."
          }
        },
        {
          "@type": "Question",
          "name": "Is there corporate tax on branch profits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bahrain has no corporate income tax for most business activities. Branch profits can be repatriated to the parent company at 100% without withholding tax. This makes Bahrain attractive for regional headquarters and trading operations."
          }
        },
        {
          "@type": "Question",
          "name": "Do parent company documents need apostille?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All parent company documents must be apostilled (Hague Convention countries) or legalized through the Bahrain Embassy (non-Hague countries). Documents should be recent (within 3-6 months) and translated to Arabic by a certified translator."
          }
        },
        {
          "@type": "Question",
          "name": "Can I open a branch remotely without visiting Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Keylink handles the entire branch registration process remotely through Power of Attorney. All documents can be prepared, signed, and submitted without the parent company representatives visiting Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What business activities can a branch conduct?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branches can conduct the same activities as the parent company within Bahrain's permitted activity list. Common activities include trading, consulting, project management, marketing, technical services, and regional sales offices."
          }
        },
        {
          "@type": "Question",
          "name": "How much does branch registration cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branch registration with Keylink starts from BHD 1,200 for professional services. Government fees (CR registration, commercial license, Chamber of Commerce) range from BHD 400-600. Total setup costs typically range BHD 1,800-2,500 depending on activities and visa requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of a branch manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The branch manager is the authorized signatory and legal representative of the branch in Bahrain. They handle day-to-day operations, sign contracts, manage bank accounts, and liaise with government authorities. The manager must be a Bahrain resident."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert a branch to a WLL later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A branch can be converted to a WLL (subsidiary) when the parent company wants to establish a separate legal entity. This involves closing the branch and incorporating a new WLL—Keylink handles the full transition process to ensure business continuity."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/branch-office/#breadcrumb",
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
          "name": "Branch Office Registration",
          "item": "https://keylinkcorp.com/services/branch-office"
        }
      ]
    }
  ]
};
