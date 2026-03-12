import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ConsultationHero,
  CalendlyBooking,
  ConsultationProcess,
  ConsultationFAQ,
  ConsultationCTA,
} from "@/components/consultation";

const FreeConsultation = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://keylinkcorp.com/free-consultation",
        url: "https://keylinkcorp.com/free-consultation",
        name: "Free Business Consultation | Keylink Corp - Book Your Session",
        description:
          "Schedule a free 30-minute consultation with Keylink Corp's business setup experts. Discuss your goals, get a cost estimate, and learn about company formation in Bahrain.",
        isPartOf: {
          "@id": "https://keylinkcorp.com/#website",
        },
        breadcrumb: {
          "@id": "https://keylinkcorp.com/free-consultation#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://keylinkcorp.com/free-consultation#breadcrumb",
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
            name: "Free Consultation",
            item: "https://keylinkcorp.com/free-consultation",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://keylinkcorp.com/#organization",
        name: "Keylink Corp",
        url: "https://keylinkcorp.com",
        telephone: "+973 1700 8888",
        email: "info@keylinkcorp.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sanabis Exhibition Tower, Office 601",
          addressLocality: "Manama",
          addressCountry: "BH",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://keylinkcorp.com/free-consultation#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the consultation really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely! Our initial 30-minute consultation is completely free with no obligations. We believe in building trust first.",
            },
          },
          {
            "@type": "Question",
            name: "How long is the consultation session?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Each consultation is scheduled for 30 minutes. This gives us enough time to understand your business needs, discuss available options, and answer your questions.",
            },
          },
          {
            "@type": "Question",
            name: "What should I prepare before the call?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To make the most of our consultation, it helps to have a general idea of your business type, your target market, and any specific questions you have about company formation in Bahrain.",
            },
          },
          {
            "@type": "Question",
            name: "Can I reschedule my appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Of course! You can reschedule your appointment directly through the confirmation email you'll receive, or simply contact us via WhatsApp or phone.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after the consultation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "After our call, you'll receive a personalized summary via email that includes our recommendations, an estimated timeline, and a clear cost breakdown for your specific situation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Free Business Consultation | Keylink Corp - Book Your Session</title>
        <meta
          name="description"
          content="Schedule a free 30-minute consultation with Keylink Corp's business setup experts. Discuss your goals, get a cost estimate, and learn about company formation in Bahrain."
        />
        <meta
          name="keywords"
          content="free consultation, business setup Bahrain, company formation advice, Keylink Corp consultation, business consultation Bahrain"
        />
        <link rel="canonical" href="https://keylinkcorp.com/free-consultation" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free Business Consultation | Keylink Corp"
        />
        <meta
          property="og:description"
          content="Schedule a free 30-minute consultation with our business setup experts. Get personalized advice on company formation in Bahrain."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://keylinkcorp.com/free-consultation"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Business Consultation | Keylink Corp"
        />
        <meta
          name="twitter:description"
          content="Schedule a free 30-minute consultation with our business setup experts."
        />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Header />
      <main>
        <ConsultationHero />
        <CalendlyBooking />
        <ConsultationProcess />
        <ConsultationFAQ />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default FreeConsultation;
