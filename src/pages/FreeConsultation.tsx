import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";

const FreeConsultation = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation | Keylink Corp Bahrain</title>
        <meta name="description" content="Book a free consultation with Keylink Corp to discuss your business setup needs in Bahrain." />
      </Helmet>
      <Layout>
        <section className="section-spacing gradient-navy text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">Free Consultation</span>
              <h1 className="mb-6 text-primary-foreground">Book Your Free Consultation</h1>
              <p className="lead text-primary-foreground/80">
                Get expert advice on company formation, licensing, and business setup in Bahrain — completely free.
              </p>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container max-w-2xl text-center">
            <h2 className="mb-6">Schedule a Call</h2>
            <p className="mb-8">Our experts will guide you through the entire process. Choose a convenient time below.</p>
            <a href="https://wa.me/97317000283" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book via WhatsApp
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FreeConsultation;
