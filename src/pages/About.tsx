import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import {
  AboutHero,
  AboutStory,
  AboutMission,
  AboutWhyChooseUs,
  AboutTeam,
  AboutValues,
  AboutAchievements,
  AboutCredentials,
  AboutTestimonials,
  AboutOffice,
  AboutCTA,
} from "@/components/about";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Keylink Corp - Bahrain's Leading Business Services Partner</title>
        <meta
          name="description"
          content="Learn about Keylink Corp - 10+ years of experience helping 1,000+ businesses succeed in Bahrain. Meet our team, discover our values, and see why we're trusted by entrepreneurs worldwide."
        />
        <meta
          name="keywords"
          content="Keylink Corp, about us, Bahrain business services, company formation Bahrain, business consulting Bahrain"
        />
        <link rel="canonical" href="https://keylinkcorp.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keylink Corp",
            url: "https://keylinkcorp.com",
            logo: "https://keylinkcorp.com/logo.png",
            foundingDate: "2014",
            description:
              "Bahrain's leading business services company providing company formation, PRO services, visa processing, and business consulting.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sanabis Exhibition Tower, Office 601",
              addressLocality: "Manama",
              addressCountry: "BH",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+973-1700-8888",
              contactType: "customer service",
              availableLanguage: ["English", "Arabic"],
            },
            sameAs: [
              "https://www.linkedin.com/company/keylinkcorp",
              "https://www.instagram.com/keylinkcorp",
            ],
          })}
        </script>
      </Helmet>

      <Layout>
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutWhyChooseUs />
        <AboutValues />
        <AboutTeam />
        <AboutAchievements />
        <AboutCredentials />
        <AboutTestimonials />
        <AboutOffice />
        <AboutCTA />
      </Layout>
    </>
  );
}
