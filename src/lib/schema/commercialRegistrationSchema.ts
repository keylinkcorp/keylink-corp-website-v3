export const commercialRegistrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/commercial-registration#service",
      "name": "Commercial Registration in Bahrain",
      "description": "Complete commercial registration services in Bahrain. New CR registration, amendments, and renewals. Expert MOIC processing with 100% success rate.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "telephone": "+97317000000",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        },
        "priceRange": "$$"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Commercial Registration",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Registration Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "New CR Registration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CR Amendment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CR Renewal"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is commercial registration in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial Registration (CR) is the official license required to operate a business in Bahrain. Issued by the Ministry of Industry and Commerce (MOIC) through the SIJILAT portal, it authorizes legal business operations and is mandatory for all commercial entities."
          }
        },
        {
          "@type": "Question",
          "name": "How long does CR registration take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard CR registration takes 3-7 business days depending on the company type. Single Person Companies (SPC) typically complete in 3-5 days, while WLLs and branch offices may take 5-10 days. Express processing is available for urgent cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners register a CR in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bahrain allows 100% foreign ownership for most business activities. Foreign entrepreneurs can register SPCs, WLLs, and branch offices without requiring a local sponsor or partner for permitted activities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between CR and trade license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Commercial Registration (CR) is the company registration certificate, while the Trade License permits specific commercial activities. Both are required for legal operations. The CR identifies your company, while the trade license authorizes what business activities you can conduct."
          }
        },
        {
          "@type": "Question",
          "name": "Can I register a CR remotely without visiting Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, remote CR registration is possible through a Power of Attorney. Keylink can act as your authorized representative, handling all MOIC submissions, document processing, and approvals without requiring your physical presence in Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for commercial registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Required documents include: valid passport copies, proof of address, professional CV (for certain activities), passport photos, and office lease agreement. Corporate shareholders need Certificate of Incorporation, MOA, Board Resolution, and Good Standing Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How much does commercial registration cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government fees include: Name Reservation (BHD 15), CR Registration (BHD 50/year), Trade License (BHD 20-200 depending on activities), LMRA Registration (BHD 50), and Chamber of Commerce (BHD 50-100). Professional service fees are quoted separately."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a local sponsor for CR registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No local sponsor is required for most business activities in Bahrain. The country allows 100% foreign ownership for permitted activities. Only certain regulated sectors like real estate brokerage may require local partnership."
          }
        },
        {
          "@type": "Question",
          "name": "How do I amend my existing commercial registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CR amendments are processed through MOIC/SIJILAT. Common amendments include activity changes, shareholder transfers, capital adjustments, and address updates. Most amendments complete within 2-5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my CR expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An expired CR attracts penalties of BHD 20-100 per month. You cannot legally operate, sign contracts, sponsor visas, or use banking services. Extended expiry (6+ months) may result in CR cancellation requiring full re-registration."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change my CR activities after registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can add or remove commercial activities from your CR at any time through an amendment process. This requires MOIC approval and may need additional permits for regulated activities."
          }
        },
        {
          "@type": "Question",
          "name": "Which ministry handles commercial registration in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ministry of Industry and Commerce (MOIC) handles all commercial registrations in Bahrain through the SIJILAT electronic portal. MOIC oversees company formation, licensing, and commercial law compliance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
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
          "name": "Commercial Registration",
          "item": "https://keylinkcorp.com/services/commercial-registration"
        }
      ]
    }
  ]
};
