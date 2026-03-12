import {
  Briefcase,
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
  MapPin,
} from "lucide-react";

type SupportCard = {
  title: string;
  description: string;
  Icon: typeof Building2;
};

type SupportColumn = {
  title: string;
  subtitle: string;
  Icon: typeof Building2;
  cards: SupportCard[];
};

const COLUMNS: SupportColumn[] = [
  {
    title: "Company Formation & Registration",
    subtitle: "Core setup steps, kept structured and portal-ready.",
    Icon: Building2,
    cards: [
      {
        title: "Commercial Registration (CR) Assistance",
        description:
          "We prepare and submit all required documents to SIJILAT/MOIC on your behalf.",
        Icon: FileCheck2,
      },
      {
        title: "Trade Name Reservation",
        description: "We search, reserve, and secure your business trade name.",
        Icon: CheckCircle2,
      },
      {
        title: "MOA / Articles of Association Preparation",
        description:
          "Drafting and notarizing your company's constitutional documents.",
        Icon: Landmark,
      },
    ],
  },
  {
    title: "Licensing, Compliance & Operations",
    subtitle: "Approvals, clearances, and practical business essentials.",
    Icon: Briefcase,
    cards: [
      {
        title: "LMRA Work Permit & Visa Guidance",
        description:
          "Full support for employee work permits, residency visas, and LMRA portal submissions.",
        Icon: FileCheck2,
      },
      {
        title: "PRO & Document Clearance Services",
        description:
          "Handling government liaison, attestations, and official document processing.",
        Icon: CheckCircle2,
      },
      {
        title: "Bank Account Opening Support",
        description:
          "Guidance and document preparation for corporate bank account setup in Bahrain.",
        Icon: Landmark,
      },
    ],
  },
  {
    title: "Workspace Solutions",
    subtitle: "Address options and flexible spaces that fit your stage.",
    Icon: MapPin,
    cards: [
      {
        title: "Virtual Office",
        description:
          "MOIC-approved business address for CR issuance, mail handling, and professional presence without a physical lease.",
        Icon: MapPin,
      },
      {
        title: "Coworking Space",
        description:
          "Flexible hot desks and dedicated workstations for startups, freelancers, and growing teams.",
        Icon: Briefcase,
      },
      {
        title: "Business Incubator",
        description:
          "Structured support program including mentorship, networking, business development workshops, and a collaborative environment for early-stage companies.",
        Icon: Building2,
      },
    ],
  },
];

export function OurServicesSection() {
  return (
    <section aria-label="Support areas" className="mt-10">
      {/* Premium divider (matches other sections) */}
      <div className="relative my-8">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t border-border/30"
        />
        <div
          aria-hidden
          className="mx-auto h-px max-w-xl bg-gradient-to-r from-transparent via-border/60 to-transparent"
        />
      </div>

      <div className="max-w-none">
        <span className="section-badge">Our scope</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          What we handle
        </h3>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          A compact, scannable overview of the most common areas we support—designed to stay clean,
          credible, and ad-friendly.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.title} className="lp-card-flat bg-muted/20 p-5 sm:p-6">
            <div className="flex flex-col items-start">
              <div className="h-11 w-11 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <col.Icon className="h-[22px] w-[22px]" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{col.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{col.subtitle}</p>
            </div>

            <div className="mt-5 grid gap-3">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  className="lp-card-flat bg-background/60 border border-border/30 p-4 transition-shadow hover:shadow-sm"
                >
                  <div className="flex flex-col items-start">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <card.Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-foreground">{card.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
