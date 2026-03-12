export const moaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/moa#service",
      "name": "Memorandum of Association (MOA) Services in Bahrain",
      "description": "Professional MOA drafting, notarization, and attestation services in Bahrain. 48-hour turnaround, 100% MOIC approval. Commercial Companies Law compliant. Free consultation.",
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
      "serviceType": "MOA Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "MOA Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MOA Drafting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MOA Amendment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MOA Notarization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MOA Attestation"
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
          "name": "What is a Memorandum of Association in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Memorandum of Association (MOA) is the foundational legal document for every Bahrain company. It establishes your company's legal identity, ownership structure, business objectives, and capital. Required under Commercial Companies Law No. 21 of 2001, the MOA must be notarized and submitted to MOIC during company registration."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between MOA and Articles of Association?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Bahrain, these terms are often used interchangeably. The MOA defines the company's external relationship with third parties (name, objectives, capital), while Articles of Association typically refer to internal governance rules. For most entities, Bahrain combines both into a single Memorandum of Association document."
          }
        },
        {
          "@type": "Question",
          "name": "What are the mandatory clauses in a Bahrain MOA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every MOA must include five mandatory clauses: (1) Company name in Arabic and English, (2) Registered office address, (3) Business objectives and activities, (4) Capital amount and distribution, (5) Shareholder names and details. WLLs require additional Article 15 clauses for management and profit distribution."
          }
        },
        {
          "@type": "Question",
          "name": "How long does MOA drafting take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard MOA drafting takes 24-48 hours with Keylink. Simple SPC Memoranda can be completed in 24 hours. Complex WLL or Holding Company MOAs with multiple shareholders and special clauses typically require 48-72 hours for thorough drafting and compliance review."
          }
        },
        {
          "@type": "Question",
          "name": "Can I draft my own MOA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While technically possible, self-drafted MOAs frequently face MOIC rejection due to missing clauses, incorrect legal terminology, or non-compliance with Article 15 requirements. Professional drafting ensures first-time approval and prevents costly amendments later."
          }
        },
        {
          "@type": "Question",
          "name": "What is MOA notarization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Notarization is the legal authentication of your MOA by a licensed Bahrain notary public. All shareholders (or their POA representatives) must sign before the notary, who then seals and attests the document. Notarization is mandatory before MOIC submission."
          }
        },
        {
          "@type": "Question",
          "name": "How much does MOA notarization cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government notarization fees range from BHD 10-50 depending on document complexity and capital amount. Professional coordination fees are quoted separately. Keylink offers 48-hour notarization guarantee with express same-day options available."
          }
        },
        {
          "@type": "Question",
          "name": "Can foreigners sign MOA remotely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, foreign shareholders can authorize a local representative through a Power of Attorney (POA). The POA must be notarized and attested in the shareholder's home country, then legalized for use in Bahrain. Keylink coordinates this entire process remotely."
          }
        },
        {
          "@type": "Question",
          "name": "What is MOA attestation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOA attestation is the process of authenticating your MOA for use in foreign countries. It involves: (1) Notarization in Bahrain, (2) MOFA (Ministry of Foreign Affairs) attestation, (3) Embassy/consulate legalization of the destination country, or Apostille for Hague Convention countries."
          }
        },
        {
          "@type": "Question",
          "name": "How do I amend my existing MOA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOA amendments require a board resolution, updated MOA draft reflecting changes, notarization of the amended document, and submission through Sijilat 3.0. Common amendments include activity changes, shareholder updates, capital adjustments, and address changes. Processing takes 2-5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my MOA has errors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOA errors create serious problems: MOIC rejection during registration, bank account complications, visa processing delays, and potential contract disputes. Correcting errors requires a formal amendment process with government fees and notarization costs. Professional drafting prevents these issues."
          }
        },
        {
          "@type": "Question",
          "name": "Is MOA required for all company types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all Bahrain company types require a Memorandum of Association: SPC (Single Person Company), WLL (Limited Liability Company), Branch Offices, and Holding Companies. Each has specific MOA requirements based on the Commercial Companies Law."
          }
        },
        {
          "@type": "Question",
          "name": "What's Article 15 and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Article 15 of the Commercial Companies Law specifies additional mandatory clauses for WLL Memoranda. These include: profit/loss distribution percentages, management appointment procedures, share transfer restrictions, and partner meeting rules. Non-compliance results in MOIC rejection."
          }
        },
        {
          "@type": "Question",
          "name": "How long is an MOA valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The MOA remains valid as long as your company is active. There's no expiration or renewal requirement. However, you must amend the MOA whenever material changes occur (shareholders, capital, activities, address) to maintain compliance with your Commercial Registration."
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
          "name": "Memorandum of Association",
          "item": "https://keylinkcorp.com/services/moa"
        }
      ]
    }
  ]
};
