export const businessLicenseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/business-license#service",
      "name": "Business License in Bahrain",
      "description": "Get your Bahrain business license with 100% foreign ownership. Commercial, industrial, and professional licenses in 3-7 days. Expert MOIC registration from BHD 350.",
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
      "serviceType": "Business Licensing",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business License Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial License"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial License"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional License"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Services License"
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
          "name": "What is a business license in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business license in Bahrain consists of two documents: the Commercial Registration (CR), which establishes your legal entity, and the Trade License, which permits specific commercial activities. Both are issued by the Ministry of Industry and Commerce (MOIC) through the SIJILAT portal and are required for legal business operations."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get a business license in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard business license processing takes 3-7 business days for straightforward applications. Including the now-mandatory bank account opening, expect 10-14 days total. Complex cases with industrial or regulated activities may take 2-4 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a business license cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government fees range from BHD 250-600 annually depending on license type and activities. This includes Trade Name (BHD 15), CR (BHD 50-200), Trade License (BHD 20-300 per activity), and Chamber fees (BHD 50-100). Professional service fees are quoted separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners get a business license in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bahrain allows 100% foreign ownership for most commercial activities. Foreign entrepreneurs can obtain business licenses without requiring a local sponsor or partner. Only a few regulated sectors may require local partnership."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a local partner for a business license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No local partner is required for most business activities. Bahrain actively encourages foreign investment with 100% ownership permitted. Certain regulated sectors like real estate may have local partnership requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a business license remotely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, remote business license registration is fully possible through a Power of Attorney (POA). Our team can act as your authorized representative, handling all submissions without requiring your physical presence in Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for a business license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Individual applicants need: valid passport, proof of address, CV (for professional licenses), and photos. Corporate shareholders need: Certificate of Incorporation, MOA, Board Resolution, and Good Standing Certificate. All applicants need a Bahrain office address."
          }
        },
        {
          "@type": "Question",
          "name": "What types of business licenses are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bahrain offers Commercial licenses (trading, retail), Industrial licenses (manufacturing), Professional licenses (consulting, services), and Services licenses (hospitality, healthcare). The right type depends on your planned business activities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between CR and trade license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Commercial Registration (CR) is your company identity document establishing the legal entity. The Trade License authorizes specific commercial activities you can conduct. Both are required and are typically issued together during the licensing process."
          }
        },
        {
          "@type": "Question",
          "name": "What are the 2024 business license requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of June 2024, new business licenses require proof of a corporate bank account before final CR issuance. This adds 5-10 days to the process. Minimum deposits vary by bank from BHD 500 to USD 10,000."
          }
        },
        {
          "@type": "Question",
          "name": "Which ministry handles business licensing in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ministry of Industry and Commerce (MOIC) handles all business licensing through the SIJILAT electronic portal. For regulated activities, additional approvals from sector-specific authorities (CBB for finance, NHRA for healthcare) may be required."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my business license expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Operating with an expired license incurs penalties of BHD 20-100 per month. Extended expiry (6+ months) may result in license cancellation requiring full re-registration. We recommend renewing at least 30 days before expiry."
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
          "name": "Business License",
          "item": "https://keylinkcorp.com/services/business-license"
        }
      ]
    }
  ]
};
