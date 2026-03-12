export const chamberServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/chamber-of-commerce#service",
      "name": "Chamber of Commerce Services Bahrain - BCCI Registration & Certificate of Origin",
      "description": "Complete chamber of commerce services in Bahrain including BCCI membership registration, certificate of origin issuance, and document attestation. Same-day processing available with 99.8% first-submission approval rate.",
      "provider": {
        "@type": "Organization",
        "@id": "https://keylinkcorp.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": [
        "BCCI Membership Registration",
        "Certificate of Origin",
        "Document Attestation",
        "Trade Documentation",
        "BCCI Liaison Services"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Certificate of Origin",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "35",
            "priceCurrency": "BHD",
            "description": "Starting price for Certificate of Origin processing"
          }
        },
        {
          "@type": "Offer",
          "name": "BCCI Membership Registration",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "75",
            "priceCurrency": "BHD",
            "description": "Service fee for BCCI membership registration"
          }
        },
        {
          "@type": "Offer",
          "name": "Document Attestation",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "25",
            "priceCurrency": "BHD",
            "description": "Starting price per document for attestation services"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "image": "https://keylinkcorp.com/logo.png",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BH",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/chamber-of-commerce#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Chamber of Commerce membership mandatory in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all registered businesses in Bahrain must maintain active BCCI membership. This is a legal requirement tied to Commercial Registration renewal."
          }
        },
        {
          "@type": "Question",
          "name": "How much does BCCI membership cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BCCI fees vary: Sole Proprietors ~BHD 50/year, SMEs ~BHD 100/year, large enterprises BHD 200+. Our service fee for registration starts at BHD 75."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Certificate of Origin and when do I need one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Certificate of Origin certifies where goods were manufactured. Required when exporting from Bahrain for customs clearance and tariff determination."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get a Certificate of Origin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With Keylink: 24-48 hours standard, same-day rush available (+BHD 20). DIY at BCCI typically takes 3-5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "Can you process documents if I am outside Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle everything remotely. Share documents via email/WhatsApp, and we manage all BCCI interactions. Certificates can be couriered internationally."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are needed for BCCI membership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Valid CR certificate, current trade license, shareholder passport copies, and proof of business address. We provide a detailed checklist."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle document attestation for other countries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide attestation for GCC/MENA markets including commercial invoices, packing lists, and contract legalization with embassy coordination."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my Certificate of Origin is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If rejected due to our error, we resubmit at no cost (First-Submission Approval guarantee). Our specialists review every application to minimize rejections."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with rush or urgent requests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, same-day CO processing available (+BHD 20). Requests before noon have highest same-day success rate. Contact us for time-sensitive needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I renew my BCCI membership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual renewal before expiration. We track deadlines, initiate proactively, and ensure continuous membership without gaps affecting license renewal."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between preferential and non-preferential CO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non-preferential CO certifies origin globally. Preferential CO qualifies for reduced tariffs under trade agreements. We advise which benefits your export scenario."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Keylink's chamber services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact via WhatsApp, phone, or website. Receive a quote within 2 hours. Most requests completed within 24-48 hours of engagement."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/chamber-of-commerce#breadcrumb",
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
          "name": "Chamber of Commerce Services",
          "item": "https://keylinkcorp.com/services/chamber-of-commerce"
        }
      ]
    }
  ]
};
