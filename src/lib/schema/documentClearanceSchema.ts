export const documentClearanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/document-clearance#service",
      "name": "Document Clearance Services in Bahrain",
      "description": "Professional document clearance services in Bahrain. Same-day processing for Tax, LMRA, Police, SIO, Customs, and Municipality clearance certificates. Zero office visits required. Fixed pricing from BHD 25.",
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
      "serviceType": "Document Clearance",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "25",
        "highPrice": "300",
        "priceCurrency": "BHD",
        "offerCount": "3"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a document clearance certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clearance certificate is an official government document confirming no outstanding obligations with a specific agency. They're required for visa cancellations, company closures, emigration, and various regulatory processes."
          }
        },
        {
          "@type": "Question",
          "name": "Which agencies issue clearance certificates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main agencies are NBR (Tax), LMRA (Labour), Police (Criminal), SIO/GOSI (Social Insurance), Customs, and Municipality. Each has its own process and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get a clearance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most single clearances are issued same-day or within 24-48 hours. Complex cases or multiple clearances typically take 2-3 days."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to visit any government offices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our team visits all agencies on your behalf. You simply provide documents, and we handle everything from submission to collection and delivery."
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
          "name": "Document Clearance",
          "item": "https://keylinkcorp.com/services/document-clearance"
        }
      ]
    }
  ]
};
