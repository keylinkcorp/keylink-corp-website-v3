import { ServiceExplainer } from "@/components/services/shared/ServiceExplainer";
import { 
  FileText, 
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Globe,
  Users,
  MapPin,
  Scale,
  Briefcase
} from "lucide-react";

const keyFacts = [
  { icon: Building2, label: "Governing Authority", text: "Ministry of Industry and Commerce" },
  { icon: FileText, label: "Processing Portal", text: "Sijilat 3.0 Electronic System" },
  { icon: Clock, label: "Standard Timeline", text: "2-5 Business Days" },
  { icon: Globe, label: "Requirement", text: "Mandatory for any CR change" }
];

const benefits = [
  { icon: FileText, text: "Change business activities" },
  { icon: Users, text: "Update shareholder structure" },
  { icon: Building2, text: "Modify company name" },
  { icon: MapPin, text: "Change registered address" },
  { icon: Scale, text: "Update capital amounts" },
  { icon: Briefcase, text: "Convert entity type" }
];

export function WhatIsCRAmendment() {
  return (
    <ServiceExplainer
      badge="Understanding CR Amendments"
      badgeIcon={FileText}
      title={<>What Is a <span className="text-accent">CR Amendment</span> in Bahrain?</>}
      paragraphs={[
        <>A Commercial Registration amendment is an official update to your existing CR details through the Ministry of Industry and Commerce (MOIC). When your business structure, activities, or ownership changes, Bahrain law requires you to reflect these updates in your CR within specific timeframes.</>,
        <>The MOIC processes all amendments through the Sijilat 3.0 electronic portal. Each amendment type follows a distinct workflow with different document requirements, government fees, and processing windows.</>,
        <>Failing to update your CR creates real problems. Banks may freeze transactions. Visa processing stops. Contracts become legally questionable. The MOIC can impose penalties or even cancel non-compliant registrations.</>,
        <>Most amendments complete in 2-5 business days when filed correctly. Complex changes like entity conversions or multi-shareholder transfers may extend to 7-10 days.</>
      ]}
      keyFacts={keyFacts}
      callout={{
        icon: AlertTriangle,
        title: "Compliance Deadline",
        text: "Most CR amendments must be filed within 30 days of the change occurring. Delayed amendments may result in penalties or rejection."
      }}
      panelTitle="What Amendments Enable"
      panelSubtitle="CR amendments allow you to officially update:"
      benefits={benefits}
      panelFooter={{
        icon: CheckCircle2,
        text: "Keep your CR current and fully compliant"
      }}
    />
  );
}
