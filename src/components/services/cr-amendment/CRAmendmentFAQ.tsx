import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";

const crAmendmentFaqs = [
  {
    question: "How long does a CR amendment take in Bahrain?",
    answer: "Most CR amendments complete in 2-5 business days through the Sijilat portal. Activity changes and address updates are fastest at 2-3 days. Shareholder transfers and capital adjustments take 3-5 days. Entity conversions are most complex at 5-10 days. Express processing can reduce timelines by 50%."
  },
  {
    question: "Can I amend my CR activities after registration?",
    answer: "Yes, you can add or remove commercial activities anytime through a CR amendment. Each activity must match an approved ISIC4 code. Some activities require sector-specific approvals before MOIC will process the change. There is no limit to how many times you can amend activities."
  },
  {
    question: "What is the cost of CR amendment in Bahrain?",
    answer: "Government fees range from BHD 10 for address changes to BHD 50 for entity conversions. Activity changes cost BHD 20-50 per activity depending on category. Professional service fees are quoted separately based on amendment complexity and urgency level."
  },
  {
    question: "Can I change shareholders on my Bahrain CR?",
    answer: "Yes, shareholder transfers are processed through CR amendment. You need a notarized share transfer agreement, updated MOA, and new shareholder documentation. Foreign shareholders require security clearance which adds 3-5 days to processing."
  },
  {
    question: "Do I need to visit Bahrain for a CR amendment?",
    answer: "No, all CR amendments can be processed remotely through Power of Attorney. Keylink can act as your authorized representative, handling all Sijilat submissions and government liaison without requiring your physical presence."
  },
  {
    question: "What documents are needed for CR activity amendment?",
    answer: "Activity amendments require your current CR copy, updated trade license application, ISIC4 code selection, and eKey authentication. Regulated activities like financial services or healthcare need pre-approvals from sector authorities."
  },
  {
    question: "How do I increase capital on my Bahrain CR?",
    answer: "Capital increases require depositing additional funds into your corporate bank account, then filing a CR amendment with bank confirmation. The process takes 3-5 days. Decreases are more complex and require creditor notification periods."
  },
  {
    question: "What happens if I operate with outdated CR details?",
    answer: "Operating with incorrect CR information creates legal and operational problems. Banks may restrict transactions. Visa processing stops. Contracts become questionable. MOIC can impose penalties ranging from BHD 50-500 depending on the violation."
  },
  {
    question: "Can I change my company name on the CR?",
    answer: "Yes, trade name changes are processed through CR amendment. You first reserve the new name through MOIC (valid 60 days), then file the amendment. The new name cannot duplicate existing registrations or violate naming guidelines."
  },
  {
    question: "What is the difference between CR amendment and CR renewal?",
    answer: "CR amendment changes specific details on your registration—activities, shareholders, address, etc. CR renewal extends your registration validity for another year without changing any details. Both are processed through Sijilat but follow different workflows."
  },
  {
    question: "Do I need an eKey for CR amendment?",
    answer: "Yes, all CR amendments require eKey authentication through Sijilat 3.0. Basic eKeys work for simple changes like address updates. Complex amendments like entity conversions require Advanced eKey authentication."
  },
  {
    question: "Can I convert my SPC to WLL through amendment?",
    answer: "Yes, entity conversion from SPC to WLL (or vice versa) is processed as a CR amendment. It is the most complex amendment type, requiring updated MOA, capital verification, and potentially new banking documentation. Allow 5-10 business days."
  }
];

export function CRAmendmentFAQ() {
  return (
    <ServiceFAQ
      badge="Frequently Asked Questions"
      title="CR Amendment Questions Answered"
      subtitle="Everything you need to know about modifying your Commercial Registration in Bahrain"
      faqs={crAmendmentFaqs}
    />
  );
}
