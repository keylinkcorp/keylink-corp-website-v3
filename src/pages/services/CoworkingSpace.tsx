import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  CoworkingHero,
  CoworkingTrustBar,
  CoworkingLogos,
  CoworkingExplainer,
  WorkspaceTypes,
  CoworkingAmenities,
  CoworkingComparison,
  CoworkingWhyChoose,
  CoworkingPricing,
  CoworkingTestimonials,
  CoworkingGallery,
  CoworkingBenefits,
  CoworkingContact,
  CoworkingLocation,
} from "@/components/services/coworking";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { generateCoworkingSpaceSchema } from "@/lib/schema/coworkingSpaceSchema";

const coworkingFAQs = [
  {
    question: "What is the best coworking space in Bahrain?",
    answer: "Keylink Corp offers one of the best coworking spaces in Bahrain, located in Sanabis Exhibition Tower. We provide premium facilities including high-speed gigabit WiFi, fully-equipped meeting rooms, a prestigious business address for CR registration, and a thriving community of 500+ professionals. Our flexible memberships start from just BHD 15/day with no long-term commitments, making us the top choice for freelancers, startups, and established businesses in Bahrain."
  },
  {
    question: "How much does a coworking space cost in Bahrain?",
    answer: "Coworking space prices in Bahrain vary by membership type. At Keylink, our Day Pass costs BHD 15/day for flexible hot desk access. Our Flexible Membership is BHD 99/month for 10 days of access, and Dedicated Desk membership is BHD 199/month for unlimited 24/7 access with your own permanent desk. Private offices start from BHD 299/month for teams. All memberships include premium amenities like WiFi, coffee, and meeting room credits."
  },
  {
    question: "Can I use a coworking space address for CR registration in Bahrain?",
    answer: "Yes! Our coworking space in Sanabis provides a prestigious business address that can be used for CR (Commercial Registration) in Bahrain. This is included with our Flexible and Dedicated Desk memberships, or available as part of our Virtual Office package. Many of our members use our Sanabis Exhibition Tower address to establish their company presence in Bahrain while benefiting from professional mail handling services."
  },
  {
    question: "Is there a coworking space near Seef Mall in Bahrain?",
    answer: "Yes! Our Keylink coworking space is located in Sanabis Exhibition Tower, just a 5-minute drive from Seef Mall and 7 minutes from City Centre Bahrain. We're strategically positioned in a prime business location with easy access to major shopping destinations, restaurants, and transportation links. The location is also just 20 minutes from Bahrain International Airport."
  },
  {
    question: "Do you have private meeting rooms in your Bahrain coworking space?",
    answer: "Yes, we have multiple fully-equipped meeting rooms available for booking. Our meeting rooms feature video conferencing capabilities, presentation equipment, whiteboards, and comfortable seating for 4-12 people. Meeting room credits are included with all memberships, or non-members can book hourly starting at BHD 25/hour. Catering options are also available for client meetings."
  },
  {
    question: "What types of workspaces do you offer in Bahrain?",
    answer: "We offer four main workspace options: Hot Desks (from BHD 15/day) for flexible daily use, Dedicated Desks (from BHD 199/month) for your permanent spot with personal storage, Private Offices (from BHD 299/month) for teams of 2-20, and Meeting Rooms (from BHD 25/hour) for client meetings and presentations. We also offer Virtual Office packages for remote teams who need a business address."
  },
  {
    question: "What amenities are included with my coworking membership?",
    answer: "All memberships include high-speed gigabit WiFi, unlimited coffee and tea, access to kitchen facilities, printing services, mail handling, and invitations to networking events. Higher-tier memberships also include dedicated meeting room credits, 24/7 access, personal storage lockers, phone booth access, and reception services."
  },
  {
    question: "Do you offer virtual office services in Bahrain?",
    answer: "Yes! Our virtual office package provides a prestigious Sanabis business address for your company registration and mail handling, without the need for physical presence. You can also book meeting rooms hourly when you need to meet clients in person. This is perfect for businesses that want a professional presence in Bahrain without the overhead of physical office space. Learn more about our virtual office packages at /services/virtual-office."
  },
  {
    question: "Is there a minimum commitment or contract for coworking?",
    answer: "No long-term contracts required! Day passes are pay-as-you-go, and monthly memberships can be cancelled with 30 days notice. We believe in earning your business every month. You can upgrade, downgrade, or cancel your membership at any time without penalties."
  },
  {
    question: "Do you offer 24/7 access to the coworking space?",
    answer: "Dedicated desk members and private office tenants enjoy unlimited 24/7 access to the coworking space via secure key card entry. Flexible membership holders have access during standard business hours (Sunday-Thursday 8AM-8PM, Friday-Saturday 9AM-5PM). This makes us ideal for professionals who work non-traditional hours or need late-night access."
  },
  {
    question: "How do I get started with a coworking membership in Bahrain?",
    answer: "Getting started is simple! You can book a free tour to experience our coworking space firsthand, or sign up directly online. Our team will guide you through the onboarding process, and you can start working as soon as the next day. No lengthy paperwork or approval processes—just quick, flexible access to premium workspace in Bahrain."
  },
  {
    question: "Do you host networking events at your coworking space?",
    answer: "We regularly organize networking events, workshops, and community gatherings for our members. These include business breakfast sessions, industry meetups, skill-sharing workshops, and social events. Networking events are included with all memberships and are a great way to connect with fellow entrepreneurs, freelancers, and professionals in Bahrain's growing business ecosystem."
  },
];

export default function CoworkingSpace() {
  useEffect(() => {
    // SEO Meta Tags - Enhanced with primary keyword
    document.title = "Best Coworking Space in Bahrain | Hot Desks, Private Offices & Meeting Rooms | Keylink Sanabis";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Looking for a coworking space in Bahrain? Keylink offers flexible hot desks from BHD 15/day, private offices & meeting rooms in Sanabis. High-speed WiFi, business address & networking included. Book your free tour today!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Looking for a coworking space in Bahrain? Keylink offers flexible hot desks from BHD 15/day, private offices & meeting rooms in Sanabis. High-speed WiFi, business address & networking included. Book your free tour today!";
      document.head.appendChild(meta);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://keylinkcorp.com/services/coworking-space";

    // JSON-LD Schema
    const schemas = generateCoworkingSpaceSchema();
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`coworking-schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = `coworking-schema-${index}`;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`coworking-schema-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return (
    <Layout>
      <CoworkingHero />
      <CoworkingLogos />
      <CoworkingExplainer />
      <WorkspaceTypes />
      <CoworkingAmenities />
      <CoworkingComparison />
      <CoworkingWhyChoose />
      <CoworkingPricing />
      <CoworkingTestimonials />
      <CoworkingGallery />
      <CoworkingBenefits />
      <CoworkingContact />
      <CoworkingLocation />
      <ServiceFAQ
        badge="FAQ"
        title="Frequently Asked Questions About Coworking in Bahrain"
        subtitle="Everything you need to know about our flexible workspace solutions in Sanabis"
        faqs={coworkingFAQs}
      />
      <ServiceCTA
        badge="Ready to Get Started?"
        title="Book Your Free Coworking Space Tour Today"
        subtitle="Experience Bahrain's premier coworking space firsthand. See why 500+ professionals choose Keylink for their flexible workspace needs in Sanabis."
        primaryCTA={{
          text: "Schedule Free Tour",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "Call +973 1700 0000",
          href: "tel:+97317000000",
        }}
        features={[
          "No commitment required",
          "Same-day tours available",
          "Free day pass included",
        ]}
      />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
}
