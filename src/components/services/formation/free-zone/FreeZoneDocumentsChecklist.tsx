import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, FileCheck, FileText, ShieldCheck } from "lucide-react";
import { SplitSection } from "@/components/shared/SplitSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import docsImage from "@/assets/free-zone/free-zone-documents.jpg";

const checklist = [
  "Passport copy (all shareholders)",
  "Proof of address",
  "Business activity description",
  "Shareholding structure",
  "Corporate documents (if corporate shareholder)",
  "Zone + space requirement (sqm)",
];

export function FreeZoneDocumentsChecklist() {
  return (
    <SplitSection
      badge="Documents"
      title="Documents checklist (download + internal resources)"
      subtitle="Get the right documents ready early — it’s the simplest way to reduce delays and keep your Bahrain setup on a predictable timeline."
      imageSrc={docsImage}
      imageAlt="Passport and company formation checklist on a clipboard"
      variant="subtle"
      backgroundVariant="grid-lines"
      overlayOpacity={0.55}
      imagePosition="right"
    >
      <Card className="card-elevated">
        <CardContent className="p-6">
          <Accordion type="single" collapsible defaultValue="quick" className="w-full">
            <AccordionItem value="quick" className="border-border">
              <AccordionTrigger className="hover:no-underline">
                <span className="flex items-start gap-4 text-left">
                  <span className="mt-0.5 w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">Quick checklist</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      The typical items we’ll request to keep approvals moving.
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="download" className="border-border">
              <AccordionTrigger className="hover:no-underline">
                <span className="flex items-start gap-4 text-left">
                  <span className="mt-0.5 w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-accent" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">Download</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Get the file + confirm anything activity-specific before you submit.
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="btn-gold">
                    <a
                      href="/downloads/free-zone-bahrain-documents-checklist.txt"
                      download
                      aria-label="Download Bahrain free zone documents checklist"
                    >
                      <Download className="w-4 h-4" />
                      Download checklist
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                    <Link to="/free-consultation">
                      Confirm requirements
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="services" className="border-border">
              <AccordionTrigger className="hover:no-underline">
                <span className="flex items-start gap-4 text-left">
                  <span className="mt-0.5 w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">Related services</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Helpful internal pages that affect compliance and timelines.
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  These pages explain the common items that impact approvals, address/lease suitability, and staffing/visa steps.
                </p>

                <div className="mt-5 space-y-3">
                  <Link
                    to="/services/commercial-registration"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-primary group-hover:underline">Commercial Registration (CR)</p>
                      <p className="text-sm text-muted-foreground">Understand the registration flow and typical requirements.</p>
                    </div>
                  </Link>

                  <Link
                    to="/services/lease-contract-registration"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-primary group-hover:underline">Lease Contract Registration</p>
                      <p className="text-sm text-muted-foreground">Make sure your address is compliant for licensing.</p>
                    </div>
                  </Link>

                  <Link
                    to="/services/visa-immigration"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-primary group-hover:underline">Visa &amp; Immigration</p>
                      <p className="text-sm text-muted-foreground">Plan visas for founders and staff as part of setup.</p>
                    </div>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </SplitSection>
  );
}
