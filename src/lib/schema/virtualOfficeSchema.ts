export function generateVirtualOfficeSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://keylinkcorp.com/services/virtual-office",
    name: "Keylink Virtual Office Bahrain",
    alternateName: "Keylink Corp Virtual Office Services",
    description: "Best virtual office in Bahrain offering professional business address for CR registration, mail handling, phone answering, and meeting room access in Sanabis Exhibition Tower.",
    url: "https://keylinkcorp.com/services/virtual-office",
    telephone: "+973-1700-0000",
    email: "info@keylinkcorp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sanabis Exhibition Tower",
      addressLocality: "Sanabis",
      addressRegion: "Capital Governorate",
      postalCode: "",
      addressCountry: "BH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2235",
      longitude: "50.5876",
    },
    hasMap: "https://www.google.com/maps?q=Sanabis+Exhibition+Tower+Bahrain",
    image: "https://keylinkcorp.com/images/virtual-office-bahrain.jpg",
    priceRange: "BHD 25 - BHD 150",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "156",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "Country",
      name: "Bahrain",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Virtual Office",
    name: "Virtual Office Services in Bahrain",
    description: "Professional virtual office solutions in Bahrain including business address for CR registration, mail handling, phone answering, and on-demand meeting rooms.",
    provider: {
      "@type": "Organization",
      name: "Keylink Corp",
      url: "https://keylinkcorp.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Bahrain",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Virtual Office Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Essential Address",
          description: "Business address for CR registration with mail handling and building directory listing",
          price: "25",
          priceCurrency: "BHD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Business Plus",
          description: "Everything in Essential plus dedicated phone line, call answering, mail scanning, and 4 hours meeting room",
          price: "75",
          priceCurrency: "BHD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Executive Suite",
          description: "Premium virtual office with unlimited call answering, priority mail handling, 10 hours meeting room, and dedicated receptionist",
          price: "150",
          priceCurrency: "BHD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a virtual office in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A virtual office in Bahrain provides businesses with a professional business address, mail handling, and phone services without physical office space. It's perfect for remote businesses, startups, and foreign companies wanting to establish a presence in Bahrain while minimizing costs.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a virtual office address for CR registration in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our virtual office address at Sanabis Exhibition Tower is fully compliant with MOIC requirements for Commercial Registration (CR) in Bahrain. Many of our clients use our address to register their companies, open business bank accounts, and establish their legal presence in the Kingdom.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a virtual office cost in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Virtual office prices in Bahrain start from BHD 25/month for a basic business address package. Our Business Plus package at BHD 75/month includes a phone line and call answering, while the Executive package at BHD 150/month offers unlimited call handling and more meeting room hours.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a virtual office and a PO Box?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A PO Box provides only a postal address that cannot be used for CR registration. A virtual office provides a real street address (Sanabis Exhibition Tower) valid for CR, professional mail handling, phone answering services, and access to meeting rooms—essentially a complete business presence without physical office space.",
        },
      },
      {
        "@type": "Question",
        name: "Can foreign companies use a virtual office in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Virtual offices are ideal for foreign companies entering the Bahrain market. Our address satisfies legal requirements for company registration, and our services allow you to manage business operations remotely. Many international clients use our virtual office before deciding to open a physical presence.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer meeting rooms with virtual office packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! All virtual office packages include access to our fully-equipped meeting rooms. Essential package members can book at hourly rates (BHD 25/hour), while Business Plus includes 4 hours/month and Executive includes 10 hours/month. Meeting rooms feature video conferencing, presentation equipment, and catering options.",
        },
      },
      {
        "@type": "Question",
        name: "How does mail handling work with a virtual office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We receive all mail and packages on your behalf at our Sanabis address. You'll receive instant notifications when mail arrives. Depending on your package, we can store mail for pickup, scan documents and email them to you, or forward physical mail to any address worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a phone answering service included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Business Plus and Executive packages include professional call answering. Trained receptionists answer calls in your company name, take messages, and forward calls or messages according to your instructions. This ensures you never miss important business calls.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I set up a virtual office in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setup is typically same-day! Once you complete our simple online application and payment, your virtual office is active within 24 hours. You'll receive confirmation of your business address and can start using it for CR registration immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Can I upgrade from virtual office to coworking or private office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Many of our virtual office clients eventually upgrade to hot desks, dedicated desks, or private offices as their business grows. We offer seamless transitions with no penalties, and you can maintain your business address continuity throughout.",
        },
      },
      {
        "@type": "Question",
        name: "What address will appear on my CR and business documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your registered address will be: Sanabis Exhibition Tower, Sanabis, Kingdom of Bahrain. This prestigious address appears on your Commercial Registration, business cards, website, and all official correspondence.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a minimum contract period for virtual offices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our virtual office packages are month-to-month with no long-term commitment. You can cancel with 30 days notice. We also offer discounted annual plans for those who prefer to pay upfront and save up to 15%.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://keylinkcorp.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://keylinkcorp.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Virtual Office in Bahrain",
        item: "https://keylinkcorp.com/services/virtual-office",
      },
    ],
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
}
