export const crRenewalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/cr-renewal#service",
      "name": "Commercial Registration Renewal in Bahrain",
      "description": "Annual Commercial Registration renewal services in Bahrain. Same-day processing, penalty avoidance, and full compliance with MOIC requirements.",
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
      "serviceType": "CR Renewal",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "150",
        "highPrice": "400",
        "priceCurrency": "BHD",
        "offerCount": "3"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I renew my Commercial Registration (CR)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should renew your CR at least 30 days before expiry to avoid penalties. The CR is valid for one year and must be renewed annually."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my CR expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An expired CR attracts penalties of up to BHD 100 per month. Additionally, you cannot conduct business legally, open bank accounts, sponsor visas, or renew other licenses."
          }
        },
        {
          "@type": "Question",
          "name": "How long does CR renewal take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard CR renewal takes 1-2 business days. With our Premium package, we offer express processing in as little as 12 hours."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of CR renewal penalties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Late renewal penalties are BHD 20 for the first month, increasing up to BHD 100 per month for extended delays. After 6 months, your CR may be cancelled."
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
          "name": "CR Renewal",
          "item": "https://keylinkcorp.com/services/cr-renewal"
        }
      ]
    }
  ]
};
