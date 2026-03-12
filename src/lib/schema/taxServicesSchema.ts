export const taxServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/tax-services#service",
      "name": "Tax Services Bahrain - VAT Registration, Filing & Corporate Tax",
      "description": "Expert tax services in Bahrain including VAT registration, quarterly return filing, corporate tax advisory, and NBR compliance audits. NBR-registered agents with 100% compliance rate.",
      "provider": {
        "@type": "Organization",
        "@id": "https://keylinkcorp.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": [
        "VAT Registration",
        "VAT Return Filing",
        "Corporate Tax Advisory",
        "Tax Compliance Audits",
        "NBR Liaison Services"
      ],
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "150",
          "priceCurrency": "BHD",
          "description": "Starting price for VAT registration services"
        }
      }
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
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/tax-services#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need to register for VAT in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your annual turnover exceeds BHD 37,500. Businesses with turnover between BHD 18,750 and BHD 37,500 can register voluntarily. We assess your situation and handle the full NBR registration."
          }
        },
        {
          "@type": "Question",
          "name": "What is the VAT rate in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "10% standard rate (increased from 5% in January 2022). Applies to most goods and services with specific exemptions for healthcare, education, and certain financial services."
          }
        },
        {
          "@type": "Question",
          "name": "How often must I file VAT returns in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quarterly. Returns are due by the last day of the month following each quarter (e.g., Q1 return due by April 30). We manage your calendar and file before deadlines."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I miss a VAT deadline in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automatic penalties from NBR: BHD 500 for first offense, escalating to BHD 5,000+ for repeat violations. Incorrect filings trigger 5% penalties plus interest."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help if I already have outstanding VAT penalties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in remediation — filing overdue returns, documenting compliance, and negotiating penalty reductions where documentation supports the case."
          }
        },
        {
          "@type": "Question",
          "name": "What is corporate tax in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bahrain traditionally has 0% corporate tax. However, the 2024+ international tax framework may introduce changes for large multinationals. We monitor and prepare clients proactively."
          }
        },
        {
          "@type": "Question",
          "name": "How much do tax services cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VAT registration starts at BHD 150. Quarterly filing packages start at BHD 150/quarter. Corporate advisory is scoped individually. Free consultation to assess your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be in Bahrain for VAT registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We handle the entire process remotely with digital documentation. Physical presence is not required for registration or ongoing compliance."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for VAT registration in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial Registration (CR), valid trade license, bank statements, shareholder passport copies, and proof of business activity. We provide a complete checklist."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with tax services in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a free consultation. We assess your current status, identify gaps, and provide a clear compliance roadmap — no obligation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/tax-services#breadcrumb",
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
          "name": "Tax Services",
          "item": "https://keylinkcorp.com/services/tax-services"
        }
      ]
    }
  ]
};
