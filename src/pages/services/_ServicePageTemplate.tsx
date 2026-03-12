import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";

const makeServicePage = (title: string, description: string, badge: string) => {
  const Page = () => (
    <>
      <Helmet>
        <title>{title} | Keylink Corp Bahrain</title>
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <section className="section-spacing gradient-navy text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">{badge}</span>
              <h1 className="mb-6 text-primary-foreground">{title}</h1>
              <p className="lead text-primary-foreground/80">{description}</p>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container text-center">
            <h2 className="mb-6">Expert {badge} Services</h2>
            <p className="mb-8 max-w-2xl mx-auto">Our team provides comprehensive {badge.toLowerCase()} services in Bahrain. Contact us for a free consultation.</p>
            <a href="/free-consultation" className="btn-gold">Get Free Consultation</a>
          </div>
        </section>
      </Layout>
    </>
  );
  return Page;
};

export default makeServicePage;
