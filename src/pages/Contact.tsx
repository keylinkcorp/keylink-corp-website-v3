import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Keylink Corp | Get in Touch</title>
        <meta name="description" content="Contact Keylink Corp for business setup, company formation, and corporate services in Bahrain. Call, email, or visit our office." />
      </Helmet>
      <Layout>
        <section className="section-spacing gradient-navy text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">Contact Us</span>
              <h1 className="mb-6 text-primary-foreground">Get in Touch</h1>
              <p className="lead text-primary-foreground/80">
                Have questions about business setup in Bahrain? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone", value: "+973 1700 0283" },
                    { icon: Mail, label: "Email", value: "info@keylinkcorp.com" },
                    { icon: MapPin, label: "Address", value: "Sanabis, Kingdom of Bahrain" },
                    { icon: Clock, label: "Hours", value: "Sun–Thu: 8:00 AM – 5:00 PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="step-number w-12 h-12 text-lg">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1">{item.label}</h4>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-elevated p-8">
                <h3 className="mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                  <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                  <input type="tel" placeholder="Your Phone" className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                  <textarea placeholder="Your Message" rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                  <button type="submit" className="btn-gold w-full">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
