export function generateCompanyLiquidationSchema() {
  const baseUrl = "https://keylinkbahrain.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Company Liquidation in Bahrain",
    "description": "Professional company liquidation and winding up services in Bahrain. Complete 7-ministry clearance process including MOIC, LMRA, SIO, GOSI, NBR coordination for voluntary liquidation, striking off, and CR cancellation.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Keylink Corporate Services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressCountry": "BH"
      },
      "telephone": "+973 1700 0000",
      "priceRange": "BHD 650 - BHD 1,500"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bahrain"
    },
    "serviceType": "Company Liquidation",
    "offers": [
      {
        "@type": "Offer",
        "name": "Voluntary Liquidation",
        "description": "Complete voluntary winding up for solvent companies",
        "price": "950",
        "priceCurrency": "BHD"
      },
      {
        "@type": "Offer",
        "name": "Striking Off (Deregistration)",
        "description": "CR cancellation for dormant companies",
        "price": "650",
        "priceCurrency": "BHD"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between liquidation and striking off?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Liquidation is a formal winding up process for active companies with assets and liabilities, requiring creditor notification and asset distribution. Striking off (deregistration) is a simpler process for dormant companies with no trading activity for 12+ months and no outstanding debts."
        }
      },
      {
        "@type": "Question",
        "name": "How long does company liquidation take in Bahrain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voluntary liquidation typically takes 4-8 weeks, including the 90-day creditor notice period. Striking off for dormant CRs can be completed in 2-4 weeks. Compulsory liquidation through court proceedings can take 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can I liquidate a company with outstanding debts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but debts must be settled during the liquidation process. The liquidator prioritizes creditor payments before any shareholder distributions. If liabilities exceed assets, this may require compulsory liquidation proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a liquidator for voluntary liquidation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bahrain's Commercial Companies Law requires appointing a liquidator for voluntary liquidation. This can be an internal party (shareholder/director) or an external professional appointed by the company."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to employees during liquidation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employees must be formally terminated with all end-of-service benefits paid as per Bahrain Labor Law. Work visas must be cancelled through LMRA, and SIO/GOSI contributions settled before the company can be closed."
        }
      },
      {
        "@type": "Question",
        "name": "Can I liquidate a company remotely without visiting Bahrain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with a valid Power of Attorney, Keylink can handle the entire liquidation process on your behalf. You can authorize a representative to sign documents and complete ministry clearances without visiting Bahrain."
        }
      },
      {
        "@type": "Question",
        "name": "What are the consequences of not closing my company properly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improper closure can result in frozen bank accounts, accumulating LMRA fines (BHD 100-500/month), travel bans for directors, personal liability for company debts, and difficulty obtaining clearances for future business ventures."
        }
      },
      {
        "@type": "Question",
        "name": "How much does company liquidation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Striking off starts from BHD 650, voluntary liquidation from BHD 950. Additional costs include government fees (BHD 100-300), final audit (if required), and employee settlement processing. Use our cost calculator for a personalized estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a final audit for liquidation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WLLs (Limited Liability Companies) typically require a final audit before liquidation. SPCs may not require a formal audit unless specifically requested by stakeholders. The liquidator will advise based on your company structure."
        }
      },
      {
        "@type": "Question",
        "name": "Can I reactivate a dormant CR instead of liquidating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if your CR has been dormant but not cancelled, it can be reactivated by paying outstanding renewal fees and penalties. This is often more cost-effective than starting a new company. Contact us to assess your options."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to company assets during liquidation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The liquidator inventories all assets, sells or transfers them as appropriate, settles creditor claims in priority order, and distributes remaining funds to shareholders. Asset distribution requires proper documentation and tax clearance."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I keep company records after closure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bahrain law requires retaining company records for at least 5 years after liquidation completion. This includes financial statements, tax records, employee files, and corporate resolutions. Keylink offers document archiving services."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Keylink Corporate Services - Company Liquidation",
    "image": `${baseUrl}/images/keylink-logo.png`,
    "url": `${baseUrl}/services/company-liquidation`,
    "telephone": "+973 1700 0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Diplomatic Area",
      "addressLocality": "Manama",
      "addressCountry": "BH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2285,
      "longitude": 50.5860
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "BHD 650 - BHD 1,500"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Company Liquidation",
        "item": `${baseUrl}/services/company-liquidation`
      }
    ]
  };

  return [serviceSchema, faqSchema, localBusinessSchema, breadcrumbSchema];
}
