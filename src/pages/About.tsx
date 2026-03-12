import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Keylink Corp | Business Setup Experts in Bahrain</title>
        <meta name="description" content="Learn about Keylink Corp - your trusted partner for company formation and business setup in Bahrain. Over 10 years of experience helping businesses succeed." />
      </Helmet>
      <Layout>
        <section className="section-spacing gradient-navy text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">About Us</span>
              <h1 className="mb-6 text-primary-foreground">Your Trusted Partner in Bahrain</h1>
              <p className="lead text-primary-foreground/80">
                Keylink Corp has been helping businesses establish and grow in Bahrain for over a decade. 
                Our team of experts provides end-to-end support for company formation, compliance, and business services.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-4">Our Mission</h2>
                  <p className="text-lg leading-relaxed">
                    To simplify business setup in Bahrain by providing comprehensive, transparent, and reliable services 
                    that empower entrepreneurs and companies to focus on what matters most — growing their business.
                  </p>
                </div>
                <div>
                  <h2 className="mb-4">Our Vision</h2>
                  <p className="text-lg leading-relaxed">
                    To be the most trusted business services partner in Bahrain, known for our expertise, 
                    integrity, and commitment to client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="section-badge">Why Choose Us</span>
              <h2>What Sets Us Apart</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "10+ Years Experience", desc: "Deep expertise in Bahrain business regulations and processes" },
                { title: "500+ Companies Formed", desc: "Proven track record of successful company formations" },
                { title: "End-to-End Support", desc: "From formation to compliance, we handle everything" },
              ].map((item) => (
                <div key={item.title} className="card-elevated p-8 text-center">
                  <h3 className="mb-3">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
