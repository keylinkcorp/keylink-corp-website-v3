export const proServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/pro-services#service",
      "name": "PRO Services in Bahrain",
      "description": "Professional PRO services in Bahrain. Government liaison, document processing, and attestation. Expert support covering all 15+ ministries and government agencies.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "PRO Services",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "50",
        "highPrice": "3000",
        "priceCurrency": "BHD",
        "offerCount": "3"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a PRO and what do they do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A PRO (Public Relations Officer) is a government liaison specialist who handles document processing, visa applications, and other formalities with Bahrain government ministries on behalf of companies and individuals."
          }
        },
        {
          "@type": "Question",
          "name": "How long does PRO service take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most single-document services are completed within 24-48 hours. Complex processes involving multiple ministries may take 3-5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover all government ministries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we cover all 15+ government ministries and agencies including MOIC, LMRA, Immigration, Municipality, Chamber of Commerce, Ministry of Foreign Affairs, courts, and specialized authorities."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to visit any government offices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, our PROs visit all offices on your behalf. You simply provide documents, and we handle everything from submission to collection."
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
          "name": "PRO Services",
          "item": "https://keylinkcorp.com/services/pro-services"
        }
      ]
    }
  ]
};
