
Goal
- Add a new modern, professional “Our Services” section (info-only, no links) that matches the landing pages’ Minimal Premium / Ads UI theme.
- Apply the new section to BOTH routes:
  - /lp/company-formation-consultancy-modern
  - /lp/company-formation-consultancy-modern-ads
- Keep the existing “Services” accordion section intact, and add this as an additional section (per your choice).

What exists today (relevant findings)
- Both landing pages already have:
  - A sticky nav with an anchor id="services"
  - A “SERVICES” section using <SplitSection> and an Accordion (advisory-focused bullets).
- We already use a shared landing component pattern (AboutConsultancySection) that keeps both routes in sync and avoids “updated here but not there”.

UX / Layout decision
- We will NOT add a new sticky-nav item (to keep the nav clean for ads).
- We will place “Our Services” directly BELOW the existing accordion inside the same “services” block area, so users who click “Services” still land in the right place and then can scroll naturally to the expanded service catalog.
- The new section will be designed as a “category card grid” with clear hierarchy:
  - Top: section badge + title + subtitle
  - Middle: 4 category cards (Company Formation, Licensing & Compliance, Business Support, Workspace Solutions)
  - Each category card contains “service rows” (name + short description), with consistent spacing and subtle separators.

Content structure (exact items you provided)
1) Company Formation & Registration
- Commercial Registration (CR) Assistance — We prepare and submit all required documents to SIJILAT/MOIC on your behalf
- Trade Name Reservation — We search, reserve, and secure your business trade name
- MOA / Articles of Association Preparation — Drafting and notarizing your company's constitutional documents

2) Licensing & Compliance
- LMRA Work Permit & Visa Guidance — Full support for employee work permits, residency visas, and LMRA portal submissions
- PRO & Document Clearance Services — Handling government liaison, attestations, and official document processing

3) Business Support Services
- Bank Account Opening Support — Guidance and document preparation for corporate bank account setup in Bahrain

4) Workspace Solutions
- Virtual Office — MOIC-approved business address for CR issuance, mail handling, and professional presence without a physical lease
- Coworking Space — Flexible hot desks and dedicated workstations for startups, freelancers, and growing teams
- Business Incubator — Structured support program including mentorship, networking, business development workshops, and a collaborative environment for early-stage companies

Visual design (Minimal Premium, ad-friendly)
- Section wrapper: consistent spacing and container framing (same as other blocks).
- Category cards:
  - Use existing tokens: lp-card / lp-card-flat, border-border/40, bg-muted/20
  - Large icon chip (accent/10) + category title + a one-line category subtitle
  - Inside each card: a clean list of service rows with:
    - left: small check/dot indicator
    - right: bold service name + muted description
  - Subtle dividers between rows (border-border/20) to keep it “premium catalog” rather than a plain bullet list.
- Responsive grid:
  - Mobile: 1 column
  - md: 2 columns
  - Card padding: p-5 sm:p-6
- Optional (tasteful) polish:
  - A very subtle background overlay (muted radial or soft lines) consistent with other sections; no heavy patterns.

Implementation approach (to ensure both routes always match)
A) Create a shared component (recommended)
- Add: src/components/landing/OurServicesSection.tsx
  - Exports <OurServicesSection />
  - Keeps the services data in a typed constant array (categories + items).
  - Uses lucide-react icons for each category (examples):
    - Company Formation & Registration: Building2
    - Licensing & Compliance: ShieldCheck (or FileCheck2)
    - Business Support Services: Landmark (or Briefcase if already used elsewhere)
    - Workspace Solutions: MapPin
  - Info-only: no <Link>, no anchor tags.

B) Integrate into BOTH landing pages
1) src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
- Inside the existing “SERVICES” area, after the Accordion block, render:
  - <OurServicesSection />
- Keep the existing <div id="services" .../> anchor unchanged.

2) src/pages/landing/CompanyFormationConsultancyLandingModernAds.tsx
- Same integration point as above.

Placement detail (so it feels intentional, not tacked on)
- After the accordion card, add:
  - a small spacing + a premium divider (matching the project’s existing divider style), then
  - the “Our Services” header + grid.
- This keeps the first part “advisory” (accordion) and the second part “full catalog” (our services) in a logical sequence.

Files to be added/edited
- Add: src/components/landing/OurServicesSection.tsx
- Edit: src/pages/landing/CompanyFormationConsultancyLandingModern.tsx
- Edit: src/pages/landing/CompanyFormationConsultancyLandingModernAds.tsx

QA checklist (what you should test after implementation)
- On BOTH routes:
  - /lp/company-formation-consultancy-modern
  - /lp/company-formation-consultancy-modern-ads
- Confirm:
  - Clicking “Services” in the sticky nav scrolls to the Services area as before.
  - The existing accordion still works and looks unchanged.
  - The new “Our Services” section appears below it with:
    - 4 category cards
    - all items and descriptions visible
    - clean spacing and alignment
  - Mobile behavior:
    - cards stack 1-per-row
    - no text overflow, no cramped padding
  - Desktop behavior:
    - 2-column grid aligns nicely
    - consistent card heights are not required, but the layout should feel balanced.

Non-goals (to avoid scope creep)
- No routing changes.
- No clickable service links (as requested).
- No new sticky-nav entry (keep the ad landing focused and minimal). If you later want it, we can add a “Our Services” nav item pointing to an id like “services-catalog”.

Follow-up options (if you want extra conversion lift later)
- Add a small CTA row under the section (“Tell us what you need → Free consultation”) that scrolls to #book (still ad-friendly, not cluttered).
- Add a “Typical turnaround” micro-note under relevant items (kept realistic and compliant).
