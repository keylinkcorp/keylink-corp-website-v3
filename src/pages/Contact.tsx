import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ContactHero,
  ContactMethods,
  ContactForm,
  ContactLocation,
  ContactFAQ,
} from "@/components/contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://keylinkcorp.com/contact#webpage",
        "url": "https://keylinkcorp.com/contact",
        "name": "Contact Us | Keylink Corp - Business Setup Experts in Bahrain",
        "description": "Get in touch with Keylink Corp for expert business setup services in Bahrain. Call +973 1700 8888, WhatsApp, email, or visit our Sanabis office.",
        "isPartOf": { "@id": "https://keylinkcorp.com/#website" },
        "about": { "@id": "https://keylinkcorp.com/#organization" },
        "breadcrumb": { "@id": "https://keylinkcorp.com/contact#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://keylinkcorp.com/contact#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://keylinkcorp.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": "https://keylinkcorp.com/contact"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://keylinkcorp.com/#localbusiness",
        "name": "Keylink Corp",
        "image": "https://keylinkcorp.com/logo.png",
        "url": "https://keylinkcorp.com",
        "telephone": "+973 1700 8888",
        "email": "info@keylinkcorp.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sanabis Exhibition Tower, Office 601, 6th Floor",
          "addressLocality": "Sanabis, Manama",
          "addressCountry": "BH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.2161,
          "longitude": 50.5458
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "$$",
        "areaServed": {
          "@type": "Country",
          "name": "Bahrain"
        },
        "knowsLanguage": ["en", "ar", "hi", "ur"]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Keylink Corp - Business Setup Experts in Bahrain</title>
        <meta
          name="description"
          content="Get in touch with Keylink Corp for expert business setup services in Bahrain. Call +973 1700 8888, WhatsApp, email, or visit our Sanabis office. Response within 1 hour."
        />
        <meta
          name="keywords"
          content="contact keylink corp, business setup bahrain contact, company formation bahrain phone, keylink bahrain address, business consultancy contact"
        />
        <link rel="canonical" href="https://keylinkcorp.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Keylink Corp - Business Setup Experts" />
        <meta
          property="og:description"
          content="Get in touch with Keylink Corp for expert business setup services in Bahrain. Call, WhatsApp, email, or visit us."
        />
        <meta property="og:url" content="https://keylinkcorp.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Keylink Corp" />
        <meta
          name="twitter:description"
          content="Get in touch with Keylink Corp for expert business setup services in Bahrain."
        />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        <ContactLocation />
        <ContactFAQ />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
