export const visaImmigrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/visa-immigration#service",
      "name": "Visa Services Bahrain - Work Visa, Family Visa & Golden Visa",
      "description": "Professional visa services in Bahrain. Work visas, family visas, and 10-year Golden Visa. Fast 5-day processing with 100% approval rate. Expert immigration support for businesses and investors.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "telephone": "+973 1700 0000",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        },
        "priceRange": "BHD 250 - BHD 1,500"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Visa & Immigration Services",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "250",
        "highPrice": "1500",
        "priceCurrency": "BHD",
        "offerCount": "4"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Work Visa",
              "description": "Employment visa for company employees including LMRA registration and CPR card"
            },
            "price": "250",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Visa",
              "description": "Dependent visas for spouse and children with school enrollment support"
            },
            "price": "350",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golden Visa",
              "description": "10-year renewable residency permit for investors and professionals"
            },
            "price": "1500",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flexi Permit",
              "description": "Self-sponsored work permit for freelancers and consultants"
            },
            "price": "500",
            "priceCurrency": "BHD"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to get a work visa in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard processing takes 5-10 business days once all documents are submitted. This includes LMRA approval, visa issuance, and CPR card processing. Express options are available for urgent cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can I sponsor my family on a work visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, employees earning BHD 400+ monthly can sponsor their spouse and unmarried children under 25. Family visa processing adds 5-7 days after primary visa issuance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bahrain Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Golden Visa is a 10-year renewable residency permit for investors, entrepreneurs, talented professionals, and retirees. It offers independence from employer sponsorship."
          }
        },
        {
          "@type": "Question",
          "name": "Who is eligible for the Golden Visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligibility includes investors with BHD 100,000+ in Bahrain assets, business owners employing 10+ Bahrainis, executives earning BHD 2,000+/month, and retirees with sufficient pension income."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for a work visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Required documents include: passport (6+ months validity), passport-size photos, attested educational certificates, employment contract, company CR/license copies, and medical fitness certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change employers while on a work visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, visa transfer between employers is possible after completing 1 year with your current employer. Immediate transfer is available with a No Objection Certificate (NOC) from your current employer."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Flexi Permit and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Flexi Permit is a self-sponsored work permit allowing you to work for multiple employers without a fixed sponsor. It's valid for 2 years and costs approximately BHD 500/year."
          }
        },
        {
          "@type": "Question",
          "name": "How long can I stay on a visit visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit visas are valid for 14 days, extendable to 30 days. Multiple-entry visas are available for 3 months or 1 year. GCC residents can enter on e-visa for 2 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What medical tests are required for visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All work visa applicants must complete a medical exam including blood tests (HIV, Hepatitis B/C), chest X-ray, and general physical examination at an approved health center in Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply for permanent residency in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permanent residency is available after 15 years of continuous legal residence, or through the Golden Visa program for qualified investors and professionals."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my visa expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Overstaying results in fines of BHD 10/day and potential deportation. You may also face re-entry bans. Contact us for emergency renewal services to prevent overstay penalties."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle visa renewals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide full renewal services including medical re-examination, LMRA renewal, and CPR card updates. We recommend starting the renewal process 30 days before expiry."
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
          "name": "Visa Services",
          "item": "https://keylinkcorp.com/services/visa-immigration"
        }
      ]
    }
  ]
};
