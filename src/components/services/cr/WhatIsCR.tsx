import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { 
  Building2, 
  Scale, 
  Globe, 
  CreditCard, 
  Users, 
  FileText,
  CheckCircle2,
  Info
} from "lucide-react";

const simpleFacts = [
  { icon: FileText, text: "1-year validity with annual renewal" },
  { icon: Building2, text: "Issued by MOIC via SIJILAT portal" },
  { icon: Scale, text: "Required for all legal business operations" },
  { icon: Globe, text: "100% foreign ownership permitted" }
];

const benefits = [
  { icon: CreditCard, text: "Open corporate bank accounts" },
  { icon: Users, text: "Hire employees and sponsor visas" },
  { icon: FileText, text: "Sign legally binding contracts" },
  { icon: Globe, text: "Access GCC and MENA markets" },
  { icon: Building2, text: "Rent commercial premises" },
  { icon: Scale, text: "Participate in government tenders" }
];

export function WhatIsCR() {
  return (
    <ServiceExplainer
      badge="Understanding CR"
      badgeIcon={Info}
      title={<>What is <span className="text-accent">Commercial Registration</span> in Bahrain?</>}
      paragraphs={[
        <>Commercial Registration (CR) is the official government-issued license that authorizes businesses to operate legally in the Kingdom of Bahrain. It serves as your company's legal identity and is mandatory for all commercial entities conducting business in the country.</>,
        <>Issued by the <strong className="text-foreground">Ministry of Industry and Commerce (MOIC)</strong> through the SIJILAT electronic portal, the CR defines your company's legal structure, permitted business activities, and ownership details. It is governed by the Commercial Companies Law (2001) and Commercial Registration Law (2015).</>,
        <>Without a valid Commercial Registration, businesses cannot legally operate, open bank accounts, hire employees, or enter into contracts in Bahrain.</>
      ]}
      simpleFacts={simpleFacts}
      callout={{
        icon: Globe,
        title: "Remote Registration Available",
        text: "Foreign entrepreneurs can complete CR registration remotely through a Power of Attorney, without visiting Bahrain in person."
      }}
      panelTitle="What Your CR Enables"
      panelSubtitle="A valid Commercial Registration unlocks full business capabilities in Bahrain:"
      benefits={benefits}
      panelFooter={{
        icon: CheckCircle2,
        text: "Gateway to GCC markets from Bahrain"
      }}
    />
  );
}
