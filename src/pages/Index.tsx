import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustryServices } from "@/components/home/IndustryServices";
import { CompanyFormationProcess } from "@/components/home/CompanyFormationProcess";
import { CostCalculatorPreview } from "@/components/home/CostCalculatorPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Company Formation & Business Setup in Bahrain | Keylink Corp</title>
        <meta
          name="description"
          content="Start and grow your business in Bahrain with Keylink Corp. Company formation, CR services, PRO services, visas, accounting, and more—end-to-end support."
        />
        <link rel="canonical" href="https://keylinkcorp.com/" />
      </Helmet>

      <Layout>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <IndustryServices />
        <CompanyFormationProcess />
        <CostCalculatorPreview />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </Layout>
    </>
  );
};

export default Index;
