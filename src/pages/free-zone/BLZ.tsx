import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHeroSplit } from "@/components/services/shared/ServiceHeroSplit";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Globe, Warehouse } from "lucide-react";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

import heroImage from "@/assets/free-zone/blz-hero.jpg";

export default function BLZ() {
  useEffect(() => {
    document.title = "Bahrain Logistics Zone (BLZ) | Setup, Costs & Requirements | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Bahrain Logistics Zone (BLZ) guide: ideal for logistics and distribution. Understand requirements, typical costs, and setup steps with expert support."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain/blz");
  }, []);

  return (
    <Layout>
      <ServiceHeroSplit
        badge="Zone Deep‑Dive"
        title="Bahrain Logistics Zone"
        highlight="(BLZ)"
        subtitle="A focused page for logistics, e‑commerce fulfillment, and regional distribution setups in Bahrain."
        features={[
          { icon: Clock, text: "Clear setup steps" },
          { icon: Warehouse, text: "Logistics-first" },
          { icon: Globe, text: "Regional access" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        imageSrc={heroImage}
        imageAlt="Modern logistics warehouse interior in Bahrain"
      />

      <script type="application/ld+json" data-schema="breadcrumb-blz">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Free Zone in Bahrain", item: "https://keylinkcorp.com/free-zone-in-bahrain" },
            { "@type": "ListItem", position: 2, name: "Bahrain Logistics Zone (BLZ)", item: "https://keylinkcorp.com/free-zone-in-bahrain/blz" },
          ],
        })}
      </script>

      <section className="section-spacing relative overflow-hidden bg-background">
        <SectionBackgroundOverlay variant="grid-lines" opacity={0.55} />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <Card className="card-elevated lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl">What BLZ is best for</h2>
                <p className="mt-3 text-lg leading-relaxed">
                  BLZ is typically shortlisted for distribution-led models where inbound/outbound movement and warehouse
                  workflow matter. We confirm zone-fit based on your registered activity and your space requirement.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-sm font-semibold text-primary">Need the big picture?</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    See the full pillar guide comparing all zones and setup steps.
                  </p>
                  <Link to="/free-zone-in-bahrain" className="mt-3 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                    Free zone in Bahrain guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">Typical inputs to price</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Business activity + approvals</li>
                  <li>• Space size (sqm) + facility type</li>
                  <li>• Lease/address compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FormationCTA />
    </Layout>
  );
}
