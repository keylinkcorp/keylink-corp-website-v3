import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHeroSplit } from "@/components/services/shared/ServiceHeroSplit";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Clock, Shield } from "lucide-react";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

import heroImage from "@/assets/free-zone/sitra-hero.jpg";

export default function Sitra() {
  useEffect(() => {
    document.title = "Sitra Industrial Area | Setup & Requirements | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sitra Industrial Area guide: suitable for heavier industrial activities. Understand approvals, setup steps, and cost drivers with expert support."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain/sitra");
  }, []);

  return (
    <Layout>
      <ServiceHeroSplit
        badge="Zone Deep‑Dive"
        title="Sitra"
        highlight="Industrial Area"
        subtitle="A Sitra-focused guide for heavier industrial activities and space-led operations."
        features={[
          { icon: Clock, text: "Clear next steps" },
          { icon: Shield, text: "Compliance planning" },
          { icon: Building2, text: "Industrial fit" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        imageSrc={heroImage}
        imageAlt="Industrial area roadway with factories in the distance"
      />

      <script type="application/ld+json" data-schema="breadcrumb-sitra">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Free Zone in Bahrain", item: "https://keylinkcorp.com/free-zone-in-bahrain" },
            { "@type": "ListItem", position: 2, name: "Sitra Industrial Area", item: "https://keylinkcorp.com/free-zone-in-bahrain/sitra" },
          ],
        })}
      </script>

      <section className="section-spacing relative overflow-hidden bg-background">
        <SectionBackgroundOverlay variant="grid-lines" opacity={0.55} />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <Card className="card-elevated lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl">Sitra industrial use-cases</h2>
                <p className="mt-3 text-lg leading-relaxed">
                  Sitra is often considered for heavier activities where the activity category and facility suitability drive
                  the approvals. We’ll validate the compliant route before you commit.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-sm font-semibold text-primary">Back to comparison</p>
                  <p className="mt-2 text-sm text-muted-foreground">Return to the pillar page to compare all zones.</p>
                  <Link to="/free-zone-in-bahrain" className="mt-3 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                    Free zone in Bahrain guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">Common requirements</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Activity-specific approvals</li>
                  <li>• Facility suitability</li>
                  <li>• Lease/address alignment</li>
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
