import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { 
  Building2, 
  Scale, 
  Globe, 
  CreditCard, 
  Users, 
  FileText,
  CheckCircle2,
  Info,
  Calendar,
  AlertCircle
} from "lucide-react";

const keyFacts = [
  { icon: Building2, label: "Issuing Authority", text: "Ministry of Industry and Commerce (MOIC)" },
  { icon: FileText, label: "Processing Portal", text: "SIJILAT Electronic System" },
  { icon: Calendar, label: "Validity Period", text: "1 Year (renewable)" },
  { icon: Globe, label: "Foreign Ownership", text: "100% permitted for most activities" }
];

const benefits = [
  { icon: CreditCard, text: "Open corporate bank accounts" },
  { icon: Users, text: "Hire employees and sponsor visas" },
  { icon: FileText, text: "Sign legally binding contracts" },
  { icon: Globe, text: "Access GCC and MENA markets" },
  { icon: Building2, text: "Rent commercial premises" },
  { icon: Scale, text: "Participate in government tenders" }
];

export function WhatIsBL() {
  return (
    <ServiceExplainer
      badge="Understanding Licensing"
      badgeIcon={Info}
      title={<>What Is a <span className="text-accent">Business License</span> in Bahrain?</>}
      paragraphs={[
        <>A business license in Bahrain is the official government authorization required to operate commercially. It consists of two key documents: the <strong className="text-foreground">Commercial Registration (CR)</strong>, which establishes your legal entity, and the <strong className="text-foreground">Trade License</strong>, which permits specific business activities.</>,
        <>Both are issued by the <strong className="text-foreground">Ministry of Industry and Commerce (MOIC)</strong> through the SIJILAT electronic portal. Without a valid business license, you cannot legally operate, open bank accounts, hire employees, or sign contracts in Bahrain.</>
      ]}
      keyFacts={keyFacts}
      callout={{
        icon: AlertCircle,
        title: "Important: June 2024 Update",
        text: "All new business licenses now require proof of a corporate bank account before final issuance. We guide you through this requirement as part of our service."
      }}
      panelTitle="What Your License Enables"
      panelSubtitle="A valid business license unlocks full commercial capabilities in Bahrain:"
      benefits={benefits}
      panelFooter={{
        icon: CheckCircle2,
        text: "Gateway to GCC markets from Bahrain"
      }}
    />
  );
}
