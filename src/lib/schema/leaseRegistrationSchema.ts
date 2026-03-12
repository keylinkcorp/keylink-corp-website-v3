export const leaseRegistrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keylinkcorp.com/#organization",
      "name": "Keylink Corp",
      "url": "https://keylinkcorp.com",
      "logo": "https://keylinkcorp.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/keylinkcorp",
        "https://twitter.com/keylinkcorp"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keylinkcorp.com/#localbusiness",
      "name": "Keylink Corp - Lease Registration Bahrain",
      "description": "Professional lease contract registration services in Bahrain. RERA-compliant, same-day processing, Arabic translation included. Protect your tenancy rights.",
      "url": "https://keylinkcorp.com/services/lease-registration",
      "telephone": "+973-1700-0000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manama",
        "addressRegion": "Capital Governorate",
        "addressCountry": "BH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.2235",
        "longitude": "50.5876"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "@id": "https://keylinkcorp.com/services/lease-registration/#service",
      "name": "Lease Contract Registration in Bahrain",
      "description": "Complete lease contract registration services for landlords and tenants in Bahrain. RERA-compliant registration through bahrain.bh portal, Arabic translation, and attestation services.",
      "provider": {
        "@id": "https://keylinkcorp.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bahrain"
      },
      "serviceType": "Lease Contract Registration",
      "offers": {
        "@type": "Offer",
        "price": "50",
        "priceCurrency": "BHD",
        "priceValidUntil": "2025-12-31"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://keylinkcorp.com/services/lease-registration/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is lease registration mandatory in Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Property Rent Law No. 27 of 2014, all lease contracts (residential and commercial) must be registered with RERA through the bahrain.bh portal. Unregistered leases have no legal standing in disputes."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible for registering the lease—landlord or tenant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either party can register, but traditionally the landlord initiates registration. Both parties are liable for non-registration fines, so it's in everyone's interest to ensure the lease is registered."
          }
        },
        {
          "@type": "Question",
          "name": "How much does lease registration cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Government fees range from BHD 1-10 depending on property type and rent amount. Professional service fees for full registration support start from BHD 50."
          }
        },
        {
          "@type": "Question",
          "name": "Can I register a lease in English?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RERA requires all lease contracts to be in Arabic or accompanied by a certified Arabic translation. We provide translation services as part of our registration package."
          }
        },
        {
          "@type": "Question",
          "name": "How long does lease registration take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard processing takes 1-3 business days. Same-day registration is available for urgent requirements through our express service."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I don't register my lease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unregistered leases cannot be used as evidence in the Rent Disputes Committee. Both landlord and tenant face fines of BHD 500 or more, and tenants cannot use the lease for visa sponsorship."
          }
        },
        {
          "@type": "Question",
          "name": "Can I register a lease retroactively?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but registering after lease commencement may trigger penalty exposure. We recommend registering before or immediately upon signing the contract."
          }
        },
        {
          "@type": "Question",
          "name": "Is lease registration required for short-term rentals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leases under 3 months may have different requirements. However, any tenancy that will be used for visa purposes or legal protection should be registered regardless of duration."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tenant register the lease without the landlord?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The tenant can submit registration, but landlord documents (ownership proof, CPR) are still required. We coordinate between both parties to obtain necessary documents."
          }
        },
        {
          "@type": "Question",
          "name": "How do I register a commercial lease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial lease registration follows the same bahrain.bh portal process but requires the tenant's Commercial Registration (CR) and additional business documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a registered lease for family visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A registered residential lease is one of the mandatory documents for family visa sponsorship in Bahrain. The lease proves adequate accommodation for sponsored dependents."
          }
        },
        {
          "@type": "Question",
          "name": "What if my lease is rejected during registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common rejection reasons include missing Arabic translation, incomplete property details, or document discrepancies. Our team reviews all documents before submission to prevent rejections."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to re-register when renewing a lease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Lease renewals are treated as new registrations and must be submitted through the RERA portal. We handle renewal registrations with the same process and pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can real estate agents register leases on behalf of clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Agents can register leases with proper authorization from the landlord or tenant. We work with many Bahrain real estate agencies for bulk registration services."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Rent Disputes Committee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Rent Disputes Committee is the official body that resolves landlord-tenant conflicts in Bahrain. Only parties with registered leases can file complaints or use the lease as evidence."
          }
        },
        {
          "@type": "Question",
          "name": "How do I verify if my lease is already registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check your registration status through the bahrain.bh portal using your CPR or lease reference number. If unsure, we can verify your registration status as part of our consultation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://keylinkcorp.com/services/lease-registration/#breadcrumb",
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
          "name": "Lease Registration",
          "item": "https://keylinkcorp.com/services/lease-registration"
        }
      ]
    }
  ]
};
