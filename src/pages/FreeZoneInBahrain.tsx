import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const zones = [
  { name: "Bahrain Logistics Zone (BLZ)", path: "/free-zone-in-bahrain/blz", desc: "Premier logistics and industrial free zone" },
  { name: "Bahrain International Investment Park (BIIP)", path: "/free-zone-in-bahrain/biip", desc: "Industrial and manufacturing hub" },
  { name: "Bahrain Investment Wharf (BIW)", path: "/free-zone-in-bahrain/biw", desc: "Mixed-use industrial and commercial zone" },
  { name: "Sitra Industrial Area", path: "/free-zone-in-bahrain/sitra", desc: "Heavy industry and manufacturing zone" },
];

const FreeZoneInBahrain = () => {
  return (
    <>
      <Helmet>
        <title>Free Zones in Bahrain | Complete Guide | Keylink Corp</title>
        <meta name="description" content="Explore Bahrain's free zones — BLZ, BIIP, BIW, and Sitra. Learn about benefits, costs, and how to set up your business in a Bahrain free zone." />
      </Helmet>
      <Layout>
        <section className="section-spacing gradient-navy text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-badge">Free Zones</span>
              <h1 className="mb-6 text-primary-foreground">Free Zones in Bahrain</h1>
              <p className="lead text-primary-foreground/80">
                Bahrain offers several free zones with 100% foreign ownership, tax exemptions, and streamlined setup processes.
              </p>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {zones.map((zone) => (
                <Link key={zone.path} to={zone.path} className="card-elevated-hover p-8 block">
                  <h3 className="mb-3">{zone.name}</h3>
                  <p className="mb-4">{zone.desc}</p>
                  <span className="link-arrow">Learn more <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FreeZoneInBahrain;
