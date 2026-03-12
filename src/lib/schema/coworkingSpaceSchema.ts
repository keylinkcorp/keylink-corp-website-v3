// JSON-LD Schema for Coworking Space SEO - Enhanced with semantic keywords
export function generateCoworkingSpaceSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://keylinkcorp.com/services/coworking-space",
    name: "Keylink Coworking Space Bahrain",
    description: "Best coworking space in Bahrain offering hot desks, dedicated desks, private offices, meeting rooms, and virtual office services. Flexible memberships starting from BHD 15/day in Sanabis Exhibition Tower.",
    url: "https://keylinkcorp.com/services/coworking-space",
    telephone: "+973-1700-0000",
    email: "coworking@keylinkcorp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sanabis Exhibition Tower",
      addressLocality: "Sanabis",
      addressRegion: "Capital Governorate",
      addressCountry: "BH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2285",
      longitude: "50.5860",
    },
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
    priceRange: "BHD 15 - BHD 299",
    image: "https://keylinkcorp.com/images/coworking-space.jpg",
    hasMap: "https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain",
    sameAs: [
      "https://www.linkedin.com/company/keylinkcorp",
      "https://www.instagram.com/keylinkcorp",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Coworking Space Services in Bahrain",
    description: "Premium coworking space and shared office solutions in Bahrain. Hot desks, dedicated desks, private offices, meeting rooms, and virtual office services with flexible memberships.",
    provider: {
      "@type": "LocalBusiness",
      name: "Keylink Corp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sanabis Exhibition Tower",
        addressLocality: "Sanabis",
        addressCountry: "BH",
      },
    },
    serviceType: "Coworking Space",
    areaServed: {
      "@type": "Country",
      name: "Bahrain",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coworking Memberships in Bahrain",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Day Pass - Hot Desk Bahrain",
          description: "Flexible daily access to hot desk area in our Sanabis coworking space. Includes high-speed WiFi, coffee, and meeting room credits.",
          price: "15",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Flexible Membership - Shared Office Space",
          description: "10 days per month access to hot desk seating with business address, mail handling, and networking events in Bahrain.",
          price: "99",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Dedicated Desk - Premium Coworking",
          description: "Unlimited 24/7 access with your own dedicated desk, personal storage, and all premium amenities in Bahrain's top coworking space.",
          price: "199",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Private Office - Serviced Office Bahrain",
          description: "Ready-to-use private office suites for teams of 2-20. All-inclusive pricing with reception services and meeting room access.",
          price: "299",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Meeting Room Hire Bahrain",
          description: "Hourly meeting room booking with video conferencing, presentation equipment, and catering options available.",
          price: "25",
          priceCurrency: "BHD",
        },
        {
          "@type": "Offer",
          name: "Virtual Office Bahrain",
          description: "Business address for CR registration, mail handling, and on-demand meeting room access without physical office space.",
          price: "50",
          priceCurrency: "BHD",
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
        name: "What is the best coworking space in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keylink Corp offers one of the best coworking spaces in Bahrain, located in Sanabis Exhibition Tower. We provide premium facilities including high-speed gigabit WiFi, fully-equipped meeting rooms, a prestigious business address for CR registration, and a thriving community of 500+ professionals.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a coworking space cost in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Coworking space prices in Bahrain vary by membership type. Day Pass costs BHD 15/day, Flexible Membership is BHD 99/month for 10 days, Dedicated Desk is BHD 199/month for unlimited 24/7 access, and Private Offices start from BHD 299/month.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use a coworking space address for CR registration in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our coworking space in Sanabis provides a prestigious business address that can be used for CR (Commercial Registration) in Bahrain. This is included with Flexible and Dedicated Desk memberships, or available as part of our Virtual Office package.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a coworking space near Seef Mall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Keylink coworking space is located in Sanabis Exhibition Tower, just 5 minutes from Seef Mall and 7 minutes from City Centre Bahrain. The location is well-connected to major shopping destinations and just 20 minutes from Bahrain International Airport.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have private meeting rooms in your Bahrain coworking space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have multiple fully-equipped meeting rooms available for booking. Our meeting rooms feature video conferencing, presentation equipment, and comfortable seating for 4-12 people. Hourly booking starts at BHD 25/hour with catering options available.",
        },
      },
      {
        "@type": "Question",
        name: "What amenities are included with a coworking membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All memberships include high-speed gigabit WiFi, unlimited coffee and tea, access to kitchen facilities, printing services, mail handling, and networking events. Higher-tier memberships include 24/7 access, personal storage, phone booth access, and reception services.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer virtual office services in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our virtual office package provides a prestigious Sanabis business address for CR registration and mail handling, without needing physical presence. You can also book meeting rooms hourly when meeting clients in person.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a minimum contract for coworking in Bahrain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No long-term contracts required! Day passes are pay-as-you-go, and monthly memberships can be cancelled with 30 days notice. You can upgrade, downgrade, or cancel anytime without penalties.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer 24/7 access to the coworking space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dedicated desk members and private office tenants enjoy unlimited 24/7 access via secure key card entry. Flexible membership holders have access during business hours (Sunday-Thursday 8AM-8PM, Friday-Saturday 9AM-5PM).",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with a coworking membership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is simple! Book a free tour to experience our space firsthand, or sign up directly online. Our team will guide you through onboarding, and you can start working as soon as the next day with no lengthy paperwork.",
        },
      },
      {
        "@type": "Question",
        name: "Do you host networking events at your coworking space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We regularly organize networking events, workshops, and community gatherings including business breakfast sessions, industry meetups, and skill-sharing workshops. Events are included with all memberships and help you connect with fellow professionals.",
        },
      },
      {
        "@type": "Question",
        name: "Can my team grow into a larger space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! One of the biggest advantages of coworking is scalability. Start with hot desks, move to dedicated desks as your team grows, and transition to a private office. Our flexible terms make upgrading easy without breaking a lease.",
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
        name: "Coworking Space Bahrain",
        item: "https://keylinkcorp.com/services/coworking-space",
      },
    ],
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
}
