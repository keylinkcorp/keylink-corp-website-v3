export const bankAccountSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkbahrain.com/services/bank-account#service",
      "name": "Business Bank Account Opening Bahrain",
      "description": "Professional corporate bank account opening assistance in Bahrain. Direct relationship manager introductions at NBB, BBK, AUB, and Standard Chartered. 95% approval rate, 2-3 week timeline.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://keylinkbahrain.com/#business"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Corporate Banking Services",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "BHD"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkbahrain.com/#business",
      "name": "Keylink Corporate Services",
      "image": "https://keylinkbahrain.com/logo.png",
      "telephone": "+973 1700 0000",
      "email": "info@keylinkbahrain.com",
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
      "openingHours": "Su-Th 08:00-17:00",
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkbahrain.com/services/bank-account#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum deposit to open a business bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum deposits vary by bank. NBB requires BHD 500, BBK requires BHD 1,000, AUB requires BHD 2,000, and Standard Chartered requires USD 10,000. However, your capital deposit requirement for CR purposes depends on your company type — BHD 50 for SPC, BHD 20,000 for WLL."
          }
        },
        {
          "@type": "Question",
          "name": "Can a foreigner open a corporate bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, foreigners can open corporate bank accounts in Bahrain. However, banks require extensive KYC documentation and may reject applications that don't meet their due diligence standards. Professional support significantly improves approval rates for foreign applicants."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to open a business bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With Keylink's direct bank introductions, most accounts are approved within 2-3 weeks. DIY applications typically take 4-6 weeks, and longer if rejected and resubmitted."
          }
        },
        {
          "@type": "Question",
          "name": "Which bank is best for business accounts in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best bank depends on your needs. NBB is ideal for local SMEs, BBK for trading companies, AUB for regional operations, and Standard Chartered for international businesses needing multi-currency capabilities."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a CR before opening a bank account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — in fact, since June 2024, you need a bank account before your CR can be finalized. You can begin the bank account application with your draft CR and MOA, then deposit capital once the account is approved."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for corporate bank account opening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Required documents include: CR Certificate (or draft CR), Trade License, Memorandum of Association, Board Resolution, Shareholder Passports, Proof of Business Address, and Source of Funds Documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I open a multi-currency account in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, most major banks offer multi-currency accounts supporting BHD, USD, EUR, GBP, and other currencies. Standard Chartered and AUB are particularly strong for international multi-currency requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Why do bank applications get rejected in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common rejection reasons include incomplete KYC documentation, unclear source of funds, missing board resolutions, and insufficient business justification. Banks are also more cautious with applicants they don't know."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 2024 bank account requirement for company formation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOIC Resolution No. 43 (June 2024) requires all new companies to open a corporate bank account and deposit their capital before final CR issuance. This applies to WLLs (BHD 20,000 minimum), SPCs (BHD 50 minimum), and Branch Offices."
          }
        },
        {
          "@type": "Question",
          "name": "Can I open an account remotely or do I need to visit Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most banks require at least one in-person meeting for account opening. However, we can prepare all documentation in advance and schedule your bank meeting to coincide with a planned visit, minimizing the time required in Bahrain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge for bank account opening assistance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we charge a professional service fee for bank account opening support. This covers documentation preparation, bank introduction, and process coordination. The fee is typically recovered by avoiding rejection-related delays and resubmission costs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your bank account service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a free consultation to discuss your needs. We'll assess your situation, recommend the best bank options, and outline the exact documents you'll need. From there, we handle the entire process."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkbahrain.com/services/bank-account#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://keylinkbahrain.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://keylinkbahrain.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Business Bank Account Opening",
          "item": "https://keylinkbahrain.com/services/bank-account"
        }
      ]
    }
  ]
};
