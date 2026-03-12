// Local Sponsorship JSON-LD Schema for SEO
export const localSponsorshipSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/local-sponsorship",
      "name": "Local Sponsorship Services in Bahrain",
      "description": "Access restricted business sectors in Bahrain with vetted local sponsors and comprehensive legal protection. From BHD 600/year with 100% control guaranteed.",
      "url": "https://keylinkcorp.com/services/local-sponsorship",
      "logo": "https://keylinkcorp.com/logo.png",
      "image": "https://keylinkcorp.com/images/local-sponsorship.jpg",
      "priceRange": "BHD 600 - BHD 1000",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diplomatic Area",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": [
        "Local Sponsorship",
        "Nominee Shareholder Services",
        "Business Formation",
        "Legal Protection Framework"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Local Sponsorship Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Local Sponsorship Package",
            "price": "600",
            "priceCurrency": "BHD",
            "priceValidUntil": "2025-12-31",
            "description": "Complete local sponsorship with vetted sponsor, legal documentation, and ongoing support"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is local sponsorship in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local sponsorship is an arrangement where a Bahraini national holds the required 51% share in a company for activities classified as 'restricted' under Bahrain commercial law. With proper legal structuring, you maintain full operational control while the sponsor fulfills the legal ownership requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Is local sponsorship safe for foreign investors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when structured correctly. Our comprehensive protection framework including side agreements, Power of Attorney, and undated transfer documents ensures your investment and control remain protected. We've successfully safeguarded 100+ investments without disputes."
          }
        },
        {
          "@type": "Question",
          "name": "What business activities require a local sponsor in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Restricted activities include real estate brokerage, certain trading/import-export activities, manpower supply agencies, and some professional services. Most commercial activities allow 100% foreign ownership. We assess your specific situation during consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does local sponsorship cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our local sponsorship service costs BHD 600 per year with a one-time setup fee of BHD 200. This includes sponsor compensation, legal documentation, and ongoing support. No percentage of profits is taken."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to arrange a local sponsor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The complete process takes 5-7 business days from initial consultation to MOIC registration completion."
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep 100% of my business profits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our agreements specify that you receive all profits. The sponsor receives only the fixed annual fee with no profit-sharing arrangements."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my sponsor becomes problematic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide free sponsor replacement. Our team handles all documentation updates and ensures business continuity at no additional cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be in Bahrain to arrange sponsorship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The entire process can be completed remotely via Power of Attorney. Many clients complete arrangements without visiting Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change sponsors later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With our documentation structure, sponsor changes are straightforward. We assist with the transition process."
          }
        },
        {
          "@type": "Question",
          "name": "What legal protections are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Protection includes side agreements, irrevocable Power of Attorney, undated share transfer documents, and profit distribution agreements - all notarized and legally binding."
          }
        },
        {
          "@type": "Question",
          "name": "How do you vet your sponsors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our 5-point vetting includes background checks, financial assessment, track record review, character assessment, and ongoing monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my own sponsor instead?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but we strongly recommend allowing us to vet any sponsor you've identified. We can also draft the protection framework for sponsors you bring."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Keylink Corp - Local Sponsorship Services",
      "image": "https://keylinkcorp.com/logo.png",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diplomatic Area",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "postalCode": "317",
        "addressCountry": "BH"
      },
      "openingHours": "Mo-Th 08:00-17:00, Fr 08:00-12:00, Su 08:00-17:00",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "BHD, USD"
    }
  ]
};
