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
import { RenewalTimeline } from "@/components/services/cr-renewal/RenewalTimeline";
import { RenewalRequirements } from "@/components/services/cr-renewal/RenewalRequirements";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { crRenewalSchema } from "@/lib/schema/crRenewalSchema";
import {
  RefreshCw,
  Clock,
  Shield,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Zap,
  Headphones,
  Building2,
  Plane,
  UserCheck,
  Calculator
} from "lucide-react";

const heroFeatures = [
  { icon: Clock, text: "Same-Day Processing" },
  { icon: Shield, text: "Penalty Avoidance" },
  { icon: CheckCircle2, text: "Full Compliance" }
];

const trustBarStats = [
  { icon: RefreshCw, value: 2000, suffix: "+", label: "CRs Renewed" },
  { icon: AlertTriangle, value: 0, suffix: "%", label: "Late Penalties" },
  { icon: Clock, value: 24, suffix: "hr", label: "Processing Time" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" }
];

const benefits = [
  {
    icon: AlertTriangle,
    title: "Penalty Avoidance",
    description: "Renew on time and avoid costly late fees up to BHD 100/month"
  },
  {
    icon: Clock,
    title: "Same-Day Processing",
    description: "Submit your renewal documents and receive confirmation within 24 hours"
  },
  {
    icon: FileCheck,
    title: "Document Handling",
    description: "We manage all paperwork, amendments, and MOIC submissions"
  },
  {
    icon: Calendar,
    title: "Renewal Reminders",
    description: "Never miss a deadline with our proactive reminder service"
  },
  {
    icon: Shield,
    title: "Compliance Guarantee",
    description: "Stay fully compliant with Bahrain's commercial registration laws"
  }
];

const pricingTiers = [
  {
    name: "Basic Renewal",
    price: "BHD 150",
    description: "Standard CR renewal with no changes",
    features: [
      "CR renewal processing",
      "MOIC submission",
      "Digital certificate delivery",
      "Email confirmation",
      "Basic support"
    ],
    ctaText: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Standard Package",
    price: "BHD 250",
    description: "Renewal with document updates",
    popular: true,
    features: [
      "Everything in Basic",
      "Activity amendments",
      "Address updates",
      "Shareholder changes",
      "Priority processing",
      "Dedicated account manager"
    ],
    ctaText: "Most Popular",
    ctaHref: "/contact"
  },
  {
    name: "Premium Package",
    price: "BHD 400",
    description: "Full renewal + LMRA compliance",
    features: [
      "Everything in Standard",
      "LMRA license renewal",
      "Trade license updates",
      "Municipality clearance",
      "Chamber of Commerce",
      "Express 12-hour processing"
    ],
    ctaText: "Get Premium",
    ctaHref: "/contact"
  }
];

const whyChooseDifferentiators = [
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Most renewals completed within 24 hours"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your renewal"
  },
  {
    icon: Calendar,
    title: "Proactive Reminders",
    description: "We remind you 30 days before expiry"
  },
  {
    icon: Shield,
    title: "Zero Penalties",
    description: "We've never had a client face late fees"
  },
  {
    icon: FileCheck,
    title: "Document Experts",
    description: "10+ years handling MOIC paperwork"
  },
  {
    icon: Award,
    title: "100% Success Rate",
    description: "All renewals approved first-time"
  }
];

const faqs = [
  {
    question: "When should I renew my Commercial Registration (CR)?",
    answer: "You should renew your CR at least 30 days before expiry to avoid penalties. The CR is valid for one year and must be renewed annually. We recommend setting up reminders and contacting us 60 days before expiry for a stress-free renewal process."
  },
  {
    question: "What happens if my CR expires?",
    answer: "An expired CR attracts penalties of up to BHD 100 per month. Additionally, you cannot conduct business legally, open bank accounts, sponsor visas, or renew other licenses. Extended expiry may result in CR cancellation requiring full re-registration."
  },
  {
    question: "What documents do I need for CR renewal?",
    answer: "Required documents include: current CR certificate, valid trade license, lease agreement for registered address, owner/shareholder ID copies, and any amendments to company details. We'll provide a complete checklist based on your company type."
  },
  {
    question: "Can I renew my CR with outstanding amendments?",
    answer: "Yes, but amendments must be processed simultaneously with the renewal. Common amendments include activity changes, address updates, and shareholder modifications. Our Standard and Premium packages include amendment processing."
  },
  {
    question: "How long does CR renewal take?",
    answer: "Standard CR renewal takes 1-2 business days. With our Premium package, we offer express processing in as little as 12 hours. Renewals with amendments may take 3-5 business days depending on complexity."
  },
  {
    question: "Do I need to renew my Trade License separately?",
    answer: "Yes, the Trade License and CR are separate documents. However, both must be valid for your business to operate legally. Our Premium package includes Trade License renewal to ensure complete compliance."
  },
  {
    question: "What is the cost of CR renewal penalties?",
    answer: "Late renewal penalties are BHD 20 for the first month, increasing up to BHD 100 per month for extended delays. After 6 months, your CR may be cancelled. Our service ensures timely renewal to avoid any penalties."
  },
  {
    question: "Can I make changes to my CR during renewal?",
    answer: "Yes, renewal is an ideal time to update business activities, company address, shareholder details, or capital. Our Standard and Premium packages include these amendments at no extra charge."
  },
  {
    question: "Do I need to visit any government offices?",
    answer: "No, with our full-service renewal, you don't need to visit any offices. We handle all submissions, payments, and collections on your behalf. You simply provide documents and receive your renewed CR."
  },
  {
    question: "What if I want to change my company type during renewal?",
    answer: "Changing company type (e.g., SPC to WLL) requires additional procedures beyond standard renewal. Contact us for a consultation on company type conversion, which may involve new capital requirements and partner agreements."
  }
];

const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Start a new business in Bahrain with 100% foreign ownership",
    href: "/services/company-formation",
    price: "BHD 750"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: UserCheck,
    title: "PRO Services",
    description: "Government liaison and document processing",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT registration, and audit support",
    href: "/services/accounting",
    price: "BHD 200/mo"
  }
];

export default function CRRenewal() {
  useEffect(() => {
    document.title = "CR Renewal in Bahrain - Annual License Renewal | From BHD 150";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Annual Commercial Registration renewal in Bahrain. Avoid penalties with on-time renewal. Expert CR renewal services from BHD 150. Same-day processing available.");
    }

    const existingSchema = document.querySelector('script[data-schema="cr-renewal"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "cr-renewal");
      script.textContent = JSON.stringify(crRenewalSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="cr-renewal"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <ServiceHero
          badge="CR Renewal Services"
          title="Commercial Registration"
          highlight="Renewal"
          titleEnd="in Bahrain"
          subtitle="Avoid Penalties. Stay Compliant. Keep Your Business Running Smoothly."
          features={heroFeatures}
          primaryCTA={{ text: "Renew My CR", href: "/contact" }}
          secondaryCTA={{ text: "Call Us Now", href: "tel:+97317000000" }}
          priceFrom="BHD 150"
          priceLabel="Starting from"
        />
        
        <ServiceTrustBar stats={trustBarStats} />
        
        <ServiceBenefits
          badge="Why Renew On Time"
          title="Stay Compliant, Avoid Penalties"
          subtitle="Timely CR renewal keeps your business legal and penalty-free"
          benefits={benefits}
        />
        
        <RenewalTimeline />
        
        <ServicePricing
          badge="Transparent Pricing"
          title="CR Renewal Packages"
          subtitle="Choose the package that fits your renewal needs"
          tiers={pricingTiers}
        />
        
        <RenewalRequirements />
        
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Bahrain's Trusted CR Renewal Partner"
          subtitle="10+ years of handling commercial registration renewals with zero penalties"
          differentiators={whyChooseDifferentiators}
          floatingStatValue="2,000+"
          floatingStatLabel="CRs Renewed"
        />
        
        <ServiceFAQ
          badge="FAQ"
          title="CR Renewal Questions Answered"
          subtitle="Everything you need to know about renewing your Commercial Registration"
          faqs={faqs}
        />
        
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Your Business Needs"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/cr-renewal"
        />
        
        <ServiceCTA
          badge="Don't Risk Penalties"
          title="Renew Your CR Today"
          subtitle="Avoid costly penalties and keep your business compliant with hassle-free CR renewal"
          primaryCTA={{ text: "Start Renewal", href: "/contact" }}
          secondaryCTA={{ text: "Call Us", href: "tel:+97317000000" }}
          features={["Same-Day Processing", "Zero Penalties", "Full Compliance"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
