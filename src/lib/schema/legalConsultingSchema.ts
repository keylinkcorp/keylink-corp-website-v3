export const legalConsultingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/legal-consulting#service",
      "name": "Legal Consultant Bahrain",
      "description": "Expert legal consultant in Bahrain. Contract drafting, commercial law advisory, regulatory compliance, and legal due diligence. 500+ contracts delivered. Free consultation available.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://keylinkcorp.com/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": [
        "Legal Consulting",
        "Contract Drafting",
        "Commercial Law Advisory",
        "Regulatory Compliance",
        "Legal Due Diligence",
        "Employment Law Consulting"
      ],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "BHD"
        }
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#business",
      "name": "Keylink Corp",
      "description": "Trusted legal consultant in Bahrain. Contract drafting, commercial law advisory, regulatory compliance, and legal due diligence for foreign investors and SMEs.",
      "url": "https://keylinkcorp.com",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkcorp.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2285",
        "longitude": "50.5860"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "185",
        "bestRating": "5"
      },
      "sameAs": [
        "https://www.linkedin.com/company/keylinkcorp",
        "https://twitter.com/keylinkcorp"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/legal-consulting#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a legal consultant cost in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fees depend on scope. Contract drafting starts from BHD 150. Compliance reviews from BHD 300. We provide transparent proposals before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a legal consultant for company formation in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While not legally required, professional legal review ensures your MOA, shareholder agreements, and employment contracts protect your interests from day one."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a legal consultant and a lawyer in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal consultants provide advisory services, contract drafting, and compliance support. For court representation, you need a licensed Bahraini advocate. We can refer you when litigation support is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can you draft contracts in Arabic and English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All commercial contracts can be provided in both languages. Arabic is the official language for legal documents in Bahrain, but bilingual versions are standard practice."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to draft a commercial contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard contracts take 3-5 working days. Complex agreements with negotiation may take 2-3 weeks. Rush services are available for urgent needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing legal support or only project-based work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options are available. Many clients start with a project and transition to monthly retainers for ongoing advisory, contract reviews, and compliance monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all sectors including technology, trading, manufacturing, healthcare, hospitality, and professional services. Our team includes specialists for regulated industries."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with employment law and labour disputes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We draft compliant employment contracts, review HR policies, and provide guidance on LMRA requirements. For formal disputes, we can refer you to litigation specialists."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle intellectual property protection in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We advise on trademark registration, copyright protection, and IP clauses in commercial contracts. We work with the relevant ministries for formal registrations."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if regulations change after you advise us?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor regulatory updates and proactively notify retainer clients of relevant changes. Project-based clients can request update reviews as needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can you conduct legal due diligence for acquisitions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Due diligence is a core service. We assess corporate records, contracts, compliance status, and potential liabilities before you commit to major transactions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with a free legal consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book through our website or call +973 1700 0000. The initial 30-minute consultation is free and confidential. We assess your needs and provide clear next steps."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/legal-consulting#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://keylinkcorp.com/"
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
          "name": "Legal Consultant Bahrain",
          "item": "https://keylinkcorp.com/services/legal-consulting"
        }
      ]
    }
  ]
};
