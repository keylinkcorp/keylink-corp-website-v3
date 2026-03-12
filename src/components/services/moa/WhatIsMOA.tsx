import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { 
  FileText, 
  Building2, 
  Scale, 
  Clock, 
  AlertTriangle,
  Briefcase,
  Users,
  FileCheck,
  Globe,
  Shield,
  CheckCircle2
} from "lucide-react";

export function WhatIsMOA() {
  return (
    <ServiceExplainer
      badge="Understanding Your MOA"
      badgeIcon={FileText}
      title={
        <>What Is a <span className="text-accent">Memorandum of Association</span> in Bahrain?</>
      }
      paragraphs={[
        "The Memorandum of Association (MOA) is the foundational legal document for every company registered in Bahrain. Often called the company's \"birth certificate,\" it establishes your business identity, defines ownership structure, and sets operational boundaries under the Commercial Companies Law No. 21 of 2001.",
        "Every MOA submitted to the Ministry of Industry and Commerce (MOIC) must include five mandatory clauses: company name, registered address, business objectives, capital structure, and shareholder details. For WLLs specifically, Article 15 requires additional clauses covering profit distribution and management appointments.",
        "Unlike informal partnership agreements, the MOA creates legally binding obligations between shareholders and third parties. Banks require your MOA to open corporate accounts. Visa authorities reference it for employee sponsorship. Contract disputes often hinge on MOA provisions.",
        "Getting your MOA right from the start prevents costly amendments later. Common drafting errors—vague activity descriptions, missing share transfer clauses, incorrect capital representations—can delay registration by weeks or create compliance issues years down the line."
      ]}
      keyFacts={[
        { icon: Building2, label: "Legal Authority", text: "Commercial Companies Law No. 21/2001" },
        { icon: FileText, label: "Registration Portal", text: "Sijilat 3.0 Electronic System" },
        { icon: Scale, label: "Mandatory Elements", text: "5 Core Clauses Required" },
        { icon: Clock, label: "Drafting Timeline", text: "24-48 Hours with Keylink" }
      ]}
      callout={{
        icon: AlertTriangle,
        title: "Article 15 Compliance",
        text: "WLL Memoranda require specific clauses for profit distribution, management structure, and share transfer restrictions. Non-compliant MOAs are rejected by MOIC."
      }}
      panelTitle="Your MOA Enables"
      panelSubtitle="A properly drafted MOA unlocks:"
      benefits={[
        { icon: Building2, text: "Legal entity recognition" },
        { icon: Briefcase, text: "Commercial bank accounts" },
        { icon: Users, text: "Employee visa sponsorship" },
        { icon: FileCheck, text: "Government contract eligibility" },
        { icon: Globe, text: "International business credibility" },
        { icon: Shield, text: "Shareholder liability protection" }
      ]}
      panelFooter={{
        icon: CheckCircle2,
        text: "Foundation for your Bahrain business"
      }}
    />
  );
}
