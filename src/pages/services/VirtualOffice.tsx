import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  VirtualOfficeHero,
  VirtualOfficeLogos,
  VirtualOfficeExplainer,
  VirtualOfficePackages,
  VirtualOfficeFeatures,
  VirtualOfficeComparison,
  VirtualOfficeWhyChoose,
  VirtualOfficePricing,
  VirtualOfficeTestimonials,
  VirtualOfficeBenefits,
  VirtualOfficeContact,
  VirtualOfficeLocation,
} from "@/components/services/virtual-office";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { generateVirtualOfficeSchema } from "@/lib/schema/virtualOfficeSchema";

const virtualOfficeFAQs = [
  {
    question: "What is a virtual office in Bahrain?",
    answer: "A virtual office in Bahrain provides businesses with a professional business address, mail handling, and phone services without physical office space. It's perfect for remote businesses, startups, and foreign companies wanting to establish a presence in Bahrain while minimizing costs."
  },
  {
    question: "Can I use a virtual office address for CR registration in Bahrain?",
    answer: "Yes! Our virtual office address at Sanabis Exhibition Tower is fully compliant with MOIC requirements for Commercial Registration (CR) in Bahrain. Many of our clients use our address to register their companies, open business bank accounts, and establish their legal presence in the Kingdom."
  },
  {
    question: "How much does a virtual office cost in Bahrain?",
    answer: "Virtual office prices in Bahrain start from BHD 25/month for a basic business address package. Our Business Plus package at BHD 75/month includes a phone line and call answering, while the Executive package at BHD 150/month offers unlimited call handling and more meeting room hours."
  },
  {
    question: "What's the difference between a virtual office and a PO Box?",
    answer: "A PO Box provides only a postal address that cannot be used for CR registration. A virtual office provides a real street address (Sanabis Exhibition Tower) valid for CR, professional mail handling, phone answering services, and access to meeting rooms—essentially a complete business presence without physical office space."
  },
  {
    question: "Can foreign companies use a virtual office in Bahrain?",
    answer: "Absolutely! Virtual offices are ideal for foreign companies entering the Bahrain market. Our address satisfies legal requirements for company registration, and our services allow you to manage business operations remotely. Many international clients use our virtual office before deciding to open a physical presence."
  },
  {
    question: "Do you offer meeting rooms with virtual office packages?",
    answer: "Yes! All virtual office packages include access to our fully-equipped meeting rooms. Essential package members can book at hourly rates (BHD 25/hour), while Business Plus includes 4 hours/month and Executive includes 10 hours/month. Meeting rooms feature video conferencing, presentation equipment, and catering options."
  },
  {
    question: "How does mail handling work with a virtual office?",
    answer: "We receive all mail and packages on your behalf at our Sanabis address. You'll receive instant notifications when mail arrives. Depending on your package, we can store mail for pickup, scan documents and email them to you, or forward physical mail to any address worldwide."
  },
  {
    question: "Is there a phone answering service included?",
    answer: "Our Business Plus and Executive packages include professional call answering. Trained receptionists answer calls in your company name, take messages, and forward calls or messages according to your instructions. This ensures you never miss important business calls."
  },
  {
    question: "How quickly can I set up a virtual office in Bahrain?",
    answer: "Setup is typically same-day! Once you complete our simple online application and payment, your virtual office is active within 24 hours. You'll receive confirmation of your business address and can start using it for CR registration immediately."
  },
  {
    question: "Can I upgrade from virtual office to coworking or private office?",
    answer: "Yes! Many of our virtual office clients eventually upgrade to hot desks, dedicated desks, or private offices as their business grows. We offer seamless transitions with no penalties, and you can maintain your business address continuity throughout. Explore our coworking space options at /services/coworking-space."
  },
  {
    question: "What address will appear on my CR and business documents?",
    answer: "Your registered address will be: Sanabis Exhibition Tower, Sanabis, Kingdom of Bahrain. This prestigious address appears on your Commercial Registration, business cards, website, and all official correspondence."
  },
  {
    question: "Is there a minimum contract period for virtual offices?",
    answer: "Our virtual office packages are month-to-month with no long-term commitment. You can cancel with 30 days notice. We also offer discounted annual plans for those who prefer to pay upfront and save up to 15%."
  },
];

export default function VirtualOffice() {
  useEffect(() => {
    // SEO Meta Tags - Enhanced with primary keyword
    document.title = "Virtual Office in Bahrain | Business Address for CR Registration | Keylink Sanabis";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get a virtual office in Bahrain from BHD 25/month. Professional business address for CR registration, mail handling & phone answering in Sanabis. Same-day setup available!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Get a virtual office in Bahrain from BHD 25/month. Professional business address for CR registration, mail handling & phone answering in Sanabis. Same-day setup available!";
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://keylinkcorp.com/services/virtual-office";

    // JSON-LD Schema
    const schemas = generateVirtualOfficeSchema();
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`virtual-office-schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = `virtual-office-schema-${index}`;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`virtual-office-schema-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <Layout>
      <VirtualOfficeHero />
      <VirtualOfficeLogos />
      <VirtualOfficeExplainer />
      <VirtualOfficePackages />
      <VirtualOfficeFeatures />
      <VirtualOfficeComparison />
      <VirtualOfficeWhyChoose />
      <VirtualOfficePricing />
      <VirtualOfficeTestimonials />
      <VirtualOfficeBenefits />
      <VirtualOfficeContact />
      <VirtualOfficeLocation />
      <ServiceFAQ
        badge="FAQ"
        title="Frequently Asked Questions About Virtual Offices in Bahrain"
        subtitle="Everything you need to know about establishing your virtual business presence in Sanabis"
        faqs={virtualOfficeFAQs}
      />
      <ServiceCTA
        badge="Ready to Get Started?"
        title="Get Your Virtual Office in Bahrain Today"
        subtitle="Establish your professional business presence in Bahrain with our prestigious Sanabis address. Same-day setup, no long-term contracts."
        primaryCTA={{
          text: "Get Started Now",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "Call +973 1700 0000",
          href: "tel:+97317000000",
        }}
        features={[
          "Same-day setup",
          "CR-compliant address",
          "Month-to-month plans",
        ]}
      />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
}
