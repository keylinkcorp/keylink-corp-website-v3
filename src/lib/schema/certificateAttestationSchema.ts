export const certificateAttestationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/certificate-attestation#service",
      "name": "Certificate Attestation Services in Bahrain",
      "description": "Professional certificate attestation, MOFA authentication, and embassy legalization services in Bahrain. Educational, commercial, and personal document attestation for 15+ embassies. 99.5% first-time approval rate. Services from BHD 15.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        },
        "telephone": "+97317000000",
        "url": "https://keylinkcorp.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Certificate Attestation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Certificate Attestation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MOFA Attestation"
            },
            "price": "15",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Embassy Legalization"
            },
            "price": "25",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Package Attestation"
            },
            "price": "75",
            "priceCurrency": "BHD"
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "15",
        "highPrice": "85",
        "priceCurrency": "BHD",
        "offerCount": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does certificate attestation cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certificate attestation in Bahrain starts from BHD 15 for MOFA attestation. Embassy legalization ranges from BHD 25-35 depending on the country. Full package attestation (including MOFA and Embassy) costs BHD 75-85. All government fees are included in our pricing."
          }
        },
        {
          "@type": "Question",
          "name": "How long does MOFA attestation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOFA attestation typically takes 1-2 working days for standard processing. Same-day MOFA attestation is available for urgent requests with an express service fee. We handle the entire process including submission and collection."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between attestation and apostille?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Attestation is the traditional process of verifying documents through a chain of authorities (Notary → MOFA → Embassy). Apostille is a simplified certification under the Hague Convention that's accepted in member countries. Not all countries accept apostille; GCC countries typically require full embassy attestation."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need attestation for UAE work visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, educational certificates require full attestation for UAE work visas. This includes MOFA Bahrain attestation followed by UAE Embassy legalization. We process UAE attestations in 3-5 days with a 99.5% first-time approval rate."
          }
        },
        {
          "@type": "Question",
          "name": "Which documents need embassy legalization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Documents that typically require embassy legalization include: educational certificates (degrees, diplomas, transcripts), commercial documents (contracts, POA, company documents), and personal documents (birth certificates, marriage certificates, police clearance). Requirements vary by destination country."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get same-day attestation in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, same-day attestation is available for MOFA and certain embassy services with our express processing option. Standard embassy legalization takes 2-5 days depending on the embassy. Contact us for urgent requirements."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Keylink Corp",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manama",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "url": "https://keylinkcorp.com",
      "telephone": "+97317000000",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "08:00",
          "closes": "17:00"
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
          "name": "Certificate Attestation",
          "item": "https://keylinkcorp.com/services/certificate-attestation"
        }
      ]
    }
  ]
};
