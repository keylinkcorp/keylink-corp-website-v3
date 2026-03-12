export const incubatorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#business",
      "name": "Keylink Corp - Business Incubator Services Bahrain",
      "description": "Expert guidance for business incubator and startup accelerator applications in Bahrain. End-to-end support from company formation to Tamkeen, FinTech Bay, and C5 Accelerate program acceptance. 85% first-application success rate for foreign entrepreneurs.",
      "url": "https://keylinkcorp.com/services/business-incubators",
      "telephone": "+973 1700 0000",
      "email": "incubators@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sanabis Exhibition Tower",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2235",
        "longitude": "50.5876"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "priceRange": "BHD 150 - BHD 1,200",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      }
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/business-incubators#service",
      "name": "Business Incubator & Startup Accelerator Services Bahrain",
      "description": "Complete startup incubator placement services in Bahrain including Tamkeen grant applications, FinTech Bay accelerator programs, and C5 Accelerate. Company formation, application preparation, interview coaching, and post-acceptance support for foreign entrepreneurs and local founders.",
      "provider": {
        "@id": "https://keylinkcorp.com/#business"
      },
      "serviceType": "Business Incubator & Accelerator Consulting",
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Incubator Services Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Application Review",
              "description": "Program eligibility assessment and documentation review for founders with existing Bahrain companies"
            },
            "price": "150",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Complete Package",
              "description": "Full end-to-end support from company formation through incubator acceptance with interview coaching and 3 months post-acceptance support"
            },
            "price": "750",
            "priceCurrency": "BHD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Program Strategy",
              "description": "Strategic applications to 2-3 incubator programs with investor pitch preparation and 6 months ongoing support"
            },
            "price": "1200",
            "priceCurrency": "BHD"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/business-incubators#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between an incubator and an accelerator in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Incubators like Tamkeen provide longer-term support (6-12 months) with grants and resources for early-stage ideas. Accelerators like C5 and FinTech Bay run intensive 12-week programs focused on rapid growth and investor readiness. Most Bahrain programs offer a blend of both elements."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreign entrepreneurs apply to Tamkeen programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Foreign entrepreneurs with a registered Bahrain company are eligible for most Tamkeen startup support programs. We specialize in structuring companies specifically for Tamkeen eligibility."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the incubator application process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From company formation to acceptance, the typical timeline is 6-8 weeks with our support. Direct applications without prior company registration often take 3-4 months due to documentation requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a physical office in Bahrain to apply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most programs accept virtual office addresses. We provide registered office services that meet all program requirements for founders operating remotely."
          }
        },
        {
          "@type": "Question",
          "name": "What funding is available through Bahrain incubator programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tamkeen offers non-dilutive grants up to BHD 10,000. FinTech Bay provides access to investor networks and regulatory sandbox benefits. C5 focuses on investment-readiness preparation rather than direct funding."
          }
        },
        {
          "@type": "Question",
          "name": "Is FinTech Bay only for fintech startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FinTech Bay specifically supports financial technology, digital banking, and payment solutions startups. For non-fintech ventures, Tamkeen or C5 are better fits."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my application is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With our Complete Package, we refine and resubmit your application at no additional cost. We also identify alternative programs you may qualify for."
          }
        },
        {
          "@type": "Question",
          "name": "Do incubator programs in Bahrain require equity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tamkeen programs are non-dilutive (no equity). FinTech Bay and C5 arrangements vary by cohort and individual negotiation. We help you understand terms before committing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply to multiple programs at once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with strategic timing. Our Multi-Program Strategy package helps you sequence applications to maximize acceptance chances without conflicting commitments."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for an incubator application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical requirements include Commercial Registration, business plan or pitch deck, financial projections, and founder identification. Specific requirements vary by program — we provide a complete checklist during consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a visa to live in Bahrain as a startup founder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once your company is registered, you can sponsor your own work visa. For larger investments, the Golden Visa program offers 10-year residency. We assist with both pathways."
          }
        },
        {
          "@type": "Question",
          "name": "What support do I get after being accepted into a program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Complete Package includes 3 months of post-acceptance support to help you navigate program requirements, access resources, and prepare for any follow-on applications."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/business-incubators#breadcrumb",
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
          "name": "Business Incubators & Accelerators",
          "item": "https://keylinkcorp.com/services/business-incubators"
        }
      ]
    }
  ]
};

export function generateIncubatorSchema() {
  return incubatorSchema;
}
