import { accountingFAQData } from "@/components/services/accounting/accountingFAQData";

export const accountingServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://keylinkcorp.com/services/accounting-services#service",
      "name": "Accounting & CFO Services in Bahrain",
      "description": "Professional outsourced accounting services including bookkeeping, VAT registration, audit preparation, and CFO advisory. NBR-registered VAT agents serving 300+ businesses in Bahrain.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Keylink Corp",
        "@id": "https://keylinkcorp.com/#organization",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Diplomatic Area",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        },
        "telephone": "+973-1700-0000",
        "email": "info@keylinkcorp.com",
        "priceRange": "BHD 200 - BHD 800/month"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": [
        "Bookkeeping",
        "VAT Registration",
        "VAT Return Filing",
        "Payroll Processing",
        "Audit Preparation",
        "CFO Advisory",
        "Financial Reporting"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Accounting Service Tiers",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Essentials",
            "description": "Monthly bookkeeping, bank reconciliation, and basic financial reports",
            "price": "200",
            "priceCurrency": "BHD",
            "priceValidUntil": "2025-12-31"
          },
          {
            "@type": "Offer",
            "name": "Growth",
            "description": "Full accounting with VAT registration, returns, and payroll processing",
            "price": "400",
            "priceCurrency": "BHD",
            "priceValidUntil": "2025-12-31"
          },
          {
            "@type": "Offer",
            "name": "Enterprise",
            "description": "Complete CFO services including audit preparation, forecasting, and advisory",
            "price": "800",
            "priceCurrency": "BHD",
            "priceValidUntil": "2025-12-31"
          }
        ]
      },
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
      "@id": "https://keylinkcorp.com/services/accounting-services#faq",
      "mainEntity": accountingFAQData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/accounting-services#breadcrumb",
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
          "name": "Accounting Services",
          "item": "https://keylinkcorp.com/services/accounting-services"
        }
      ]
    }
  ]
};
