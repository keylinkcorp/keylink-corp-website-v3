import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceBenefits } from "@/components/services/shared/ServiceBenefits";
import { ServicePricing } from "@/components/services/shared/ServicePricing";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { accountingSchema } from "@/lib/schema/accountingSchema";
import { Calculator, Clock, FileCheck, Shield, Award, Zap, Headphones, BarChart3, Building2, RefreshCw, Plane, UserCheck } from "lucide-react";

const heroFeatures = [
  { icon: Shield, text: "VAT Compliant" },
  { icon: BarChart3, text: "Cloud Accounting" },
  { icon: FileCheck, text: "Audit Ready" }
];

const trustBarStats = [
  { icon: Building2, value: 300, suffix: "+", label: "Clients Served" },
  { icon: Calculator, value: 50, suffix: "M+", label: "BHD Managed" },
  { icon: FileCheck, value: 100, suffix: "%", label: "Audit Pass Rate" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" }
];

const benefits = [
  { icon: BarChart3, title: "Cloud-Based", description: "Access your financial data anytime, anywhere" },
  { icon: Clock, title: "Real-Time Reports", description: "Up-to-date financial insights when you need them" },
  { icon: Shield, title: "VAT Compliance", description: "Stay compliant with Bahrain's VAT requirements" },
  { icon: FileCheck, title: "Audit-Ready Books", description: "Clean records ready for any audit" },
  { icon: Calculator, title: "Cost Savings", description: "Outsource for less than hiring in-house" }
];

const pricingTiers = [
  { name: "Starter", price: "BHD 200", period: "month", description: "Essential bookkeeping for small businesses", features: ["Monthly bookkeeping", "Bank reconciliation", "Basic financial reports", "Email support", "Quarterly review"], ctaHref: "/contact" },
  { name: "Business", price: "BHD 400", period: "month", description: "Full accounting + VAT for growing companies", popular: true, features: ["Everything in Starter", "VAT registration", "VAT return filing", "Payroll processing", "Dedicated accountant", "Monthly review calls"], ctaHref: "/contact" },
  { name: "Enterprise", price: "BHD 800", period: "month", description: "Complete financial management", features: ["Everything in Business", "Audit preparation", "CFO advisory", "Financial forecasting", "Board reporting", "24/7 priority support"], ctaHref: "/contact" }
];

const differentiators = [
  { icon: BarChart3, title: "Modern Cloud Tools", description: "We use the latest accounting software" },
  { icon: Shield, title: "VAT Experts", description: "Specialists in Bahrain VAT law" },
  { icon: Headphones, title: "Dedicated Support", description: "Your own accountant on call" },
  { icon: FileCheck, title: "Audit-Ready", description: "Clean books that pass every audit" },
  { icon: Zap, title: "Fast Turnaround", description: "Monthly reports delivered on time" },
  { icon: Award, title: "Certified Team", description: "Qualified chartered accountants" }
];

const faqs = [
  { question: "Do I need to register for VAT in Bahrain?", answer: "Businesses with annual turnover exceeding BHD 37,500 must register for VAT. Those between BHD 18,750-37,500 can voluntarily register." },
  { question: "What accounting software do you use?", answer: "We work with major platforms including QuickBooks, Xero, Zoho Books, and local solutions based on your preference." },
  { question: "How often will I receive financial reports?", answer: "Monthly reports are standard. Our Business and Enterprise plans include review calls to discuss your financial position." },
  { question: "Can you help with audit preparation?", answer: "Yes, our Enterprise plan includes full audit preparation. We ensure your books are clean and documentation is ready." },
  { question: "Do you handle payroll?", answer: "Yes, our Business and Enterprise plans include payroll processing, SIO contributions, and payslip generation." },
  { question: "What's the VAT rate in Bahrain?", answer: "Bahrain's VAT rate is 10%. VAT returns must be filed quarterly, and we handle all filings to ensure compliance." }
];

const relatedServices = [
  { icon: Building2, title: "Company Formation", description: "Start a new business in Bahrain", href: "/services/company-formation", price: "BHD 750" },
  { icon: RefreshCw, title: "CR Renewal", description: "Annual registration renewal", href: "/services/cr-renewal", price: "BHD 150" },
  { icon: Plane, title: "Visa & Immigration", description: "Work and family visas", href: "/services/visa-immigration", price: "BHD 250" },
  { icon: UserCheck, title: "PRO Services", description: "Government liaison", href: "/services/pro-services", price: "BHD 50" }
];

export default function Accounting() {
  useEffect(() => {
    document.title = "Accounting & Tax Services Bahrain - VAT | Bookkeeping | Audit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professional accounting services in Bahrain. Bookkeeping, VAT registration, audit support. Expert accountants from BHD 200/month.");
    const existing = document.querySelector('script[data-schema="accounting"]');
    if (!existing) { const s = document.createElement("script"); s.type = "application/ld+json"; s.setAttribute("data-schema", "accounting"); s.textContent = JSON.stringify(accountingSchema); document.head.appendChild(s); }
    return () => { const s = document.querySelector('script[data-schema="accounting"]'); if (s) s.remove(); };
  }, []);

  return (
    <>
      <Layout>
        <ServiceHero badge="Accounting Services" title="Accounting & Tax" highlight="Services" titleEnd="in Bahrain" subtitle="Bookkeeping. VAT. Audit Support. Keep Your Finances in Order." features={heroFeatures} primaryCTA={{ text: "Get a Quote", href: "/contact" }} secondaryCTA={{ text: "Book Consultation", href: "tel:+97317000000" }} priceFrom="BHD 200/mo" />
        <ServiceTrustBar stats={trustBarStats} />
        <ServiceBenefits badge="Benefits" title="Professional Financial Management" subtitle="Focus on growth while we handle your books" benefits={benefits} />
        <ServicePricing badge="Pricing" title="Accounting Packages" subtitle="Transparent monthly pricing with no hidden fees" tiers={pricingTiers} />
        <ServiceWhyChoose badge="Why Keylink" title="Trusted Accounting Partner" subtitle="300+ businesses trust us with their finances" differentiators={differentiators} floatingStatValue="BHD 50M+" floatingStatLabel="Assets Managed" />
        <ServiceFAQ badge="FAQ" title="Accounting Questions" faqs={faqs} />
        <RelatedServicesGrid badge="Related" title="Complete Business Services" services={relatedServices} currentService="/services/accounting" />
        <ServiceCTA badge="Get Started" title="Get Your Finances in Order" subtitle="Professional accounting from BHD 200/month" primaryCTA={{ text: "Get Quote", href: "/contact" }} features={["VAT Compliant", "Cloud-Based", "Audit Ready"]} />
      </Layout>
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
