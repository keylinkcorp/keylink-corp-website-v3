export const crAmendmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/cr-amendment#service",
      "name": "CR Amendment Services in Bahrain",
      "description": "Expert CR amendment services in Bahrain. Activity changes, shareholder transfers, capital adjustments through Sijilat. 2-5 day processing, 100% success rate.",
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
      "serviceType": "CR Amendment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CR Amendment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Activity Change Amendment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shareholder Transfer"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Capital Adjustment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Trade Name Change"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Address Change"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entity Conversion"
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
          "name": "How long does a CR amendment take in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most CR amendments complete in 2-5 business days through the Sijilat portal. Activity changes and address updates are fastest at 2-3 days. Shareholder transfers and capital adjustments take 3-5 days. Entity conversions are most complex at 5-10 days."
          }
        },
        {
          "@type": "Question",
          "name": "Can I amend my CR activities after registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can add or remove commercial activities anytime through a CR amendment. Each activity must match an approved ISIC4 code. Some activities require sector-specific approvals before MOIC will process the change."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of CR amendment in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government fees range from BHD 10 for address changes to BHD 50 for entity conversions. Activity changes cost BHD 20-50 per activity depending on category. Professional service fees are quoted separately."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change shareholders on my Bahrain CR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, shareholder transfers are processed through CR amendment. You need a notarized share transfer agreement, updated MOA, and new shareholder documentation. Foreign shareholders require security clearance."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to visit Bahrain for a CR amendment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, all CR amendments can be processed remotely through Power of Attorney. Keylink can act as your authorized representative, handling all Sijilat submissions without requiring your physical presence."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for CR activity amendment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Activity amendments require your current CR copy, updated trade license application, ISIC4 code selection, and eKey authentication. Regulated activities need pre-approvals from sector authorities."
          }
        },
        {
          "@type": "Question",
          "name": "How do I increase capital on my Bahrain CR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Capital increases require depositing additional funds into your corporate bank account, then filing a CR amendment with bank confirmation. The process takes 3-5 days."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I operate with outdated CR details?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Operating with incorrect CR information creates legal and operational problems. Banks may restrict transactions. Visa processing stops. MOIC can impose penalties ranging from BHD 50-500."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change my company name on the CR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, trade name changes are processed through CR amendment. You first reserve the new name through MOIC (valid 60 days), then file the amendment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between CR amendment and CR renewal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CR amendment changes specific details on your registration. CR renewal extends your registration validity for another year without changing any details. Both are processed through Sijilat."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an eKey for CR amendment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all CR amendments require eKey authentication through Sijilat 3.0. Basic eKeys work for simple changes. Complex amendments require Advanced eKey authentication."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my SPC to WLL through amendment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, entity conversion from SPC to WLL is processed as a CR amendment. It requires updated MOA, capital verification, and potentially new banking documentation. Allow 5-10 business days."
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
          "name": "CR Amendment",
          "item": "https://keylinkcorp.com/services/cr-amendment"
        }
      ]
    }
  ]
};
