import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyFormation from "./pages/services/CompanyFormation";
import CoworkingSpace from "./pages/services/CoworkingSpace";
import CompanyLiquidation from "./pages/services/CompanyLiquidation";
import CommercialRegistration from "./pages/services/CommercialRegistration";
import CRAmendment from "./pages/services/CRAmendment";
import CRRenewal from "./pages/services/CRRenewal";
import VisaImmigration from "./pages/services/VisaImmigration";
import PROServices from "./pages/services/PROServices";
import Accounting from "./pages/services/Accounting";
import AccountingServices from "./pages/services/AccountingServices";
import BusinessLicense from "./pages/services/BusinessLicense";
import SinglePersonCompany from "./pages/services/SinglePersonCompany";
import MOA from "./pages/services/MOA";
import BranchOffice from "./pages/services/BranchOffice";
import LeaseRegistration from "./pages/services/LeaseRegistration";
import WLLCompany from "./pages/services/WLLCompany";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import TaxServices from "./pages/services/TaxServices";
import ChamberOfCommerceServices from "./pages/services/ChamberOfCommerceServices";
import LegalConsulting from "./pages/services/LegalConsulting";
import BankAccount from "./pages/services/BankAccount";
import DocumentClearance from "./pages/services/DocumentClearance";
import CertificateAttestation from "./pages/services/CertificateAttestation";
import LocalSponsorship from "./pages/services/LocalSponsorship";
import BusinessIncubators from "./pages/services/BusinessIncubators";
import VirtualOffice from "./pages/services/VirtualOffice";
import FreeConsultation from "./pages/FreeConsultation";
import FreeZoneInBahrain from "./pages/FreeZoneInBahrain";
import CompanyFormationLanding from "./pages/landing/CompanyFormationLanding";
import CompanyFormationConsultancyLanding from "./pages/landing/CompanyFormationConsultancyLanding";
import CompanyFormationConsultancyLandingV2 from "./pages/landing/CompanyFormationConsultancyLandingV2";
import CompanyFormationConsultancyLandingModern from "./pages/landing/CompanyFormationConsultancyLandingModern";
import CompanyFormationConsultancyLandingModernAds from "./pages/landing/CompanyFormationConsultancyLandingModernAds";
import BLZ from "./pages/free-zone/BLZ";
import BIIP from "./pages/free-zone/BIIP";
import BIW from "./pages/free-zone/BIW";
import Sitra from "./pages/free-zone/Sitra";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/company-formation" element={<CompanyFormation />} />
          <Route path="/services/coworking-space" element={<CoworkingSpace />} />
          <Route path="/services/company-liquidation" element={<CompanyLiquidation />} />
          <Route path="/services/commercial-registration" element={<CommercialRegistration />} />
          <Route path="/services/cr-amendment" element={<CRAmendment />} />
          <Route path="/services/cr-renewal" element={<CRRenewal />} />
          <Route path="/services/visa-immigration" element={<VisaImmigration />} />
          <Route path="/services/pro-services" element={<PROServices />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/accounting-services" element={<AccountingServices />} />
          <Route path="/services/business-license" element={<BusinessLicense />} />
          <Route path="/services/single-person-company" element={<SinglePersonCompany />} />
          <Route path="/services/moa" element={<MOA />} />
          <Route path="/services/branch-office" element={<BranchOffice />} />
          <Route path="/services/lease-contract-registration" element={<LeaseRegistration />} />
          <Route path="/services/wll-company" element={<WLLCompany />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/management-consulting" element={<ManagementConsulting />} />
          <Route path="/services/tax-services" element={<TaxServices />} />
          <Route path="/services/chamber-of-commerce" element={<ChamberOfCommerceServices />} />
          <Route path="/services/legal-consulting" element={<LegalConsulting />} />
          <Route path="/services/bank-account" element={<BankAccount />} />
          <Route path="/services/document-clearance" element={<DocumentClearance />} />
          <Route path="/services/certificate-attestation" element={<CertificateAttestation />} />
          <Route path="/services/local-sponsorship" element={<LocalSponsorship />} />
          <Route path="/services/business-incubators" element={<BusinessIncubators />} />
          <Route path="/services/virtual-office" element={<VirtualOffice />} />
          <Route path="/free-zone-in-bahrain" element={<FreeZoneInBahrain />} />
          <Route path="/free-zone-in-bahrain/blz" element={<BLZ />} />
          <Route path="/free-zone-in-bahrain/biip" element={<BIIP />} />
          <Route path="/free-zone-in-bahrain/biw" element={<BIW />} />
          <Route path="/free-zone-in-bahrain/sitra" element={<Sitra />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/lp/company-formation" element={<CompanyFormationLanding />} />
          <Route
            path="/company-formation-consultancy-bahrain"
            element={<CompanyFormationConsultancyLanding />}
          />
          <Route
            path="/lp/company-formation-consultancy-v2"
            element={<CompanyFormationConsultancyLandingV2 />}
          />
          <Route
            path="/lp/company-formation-consultancy-modern"
            element={<CompanyFormationConsultancyLandingModern />}
          />
          <Route
            path="/lp/company-formation-consultancy-modern-ads"
            element={<CompanyFormationConsultancyLandingModernAds />}
          />

          {/* Legacy / convenience redirects to avoid 404s */}
          <Route path="/services/visa-services" element={<Navigate to="/services/visa-immigration" replace />} />
          <Route path="/cost-calculator" element={<Navigate to="/services/company-formation" replace />} />
          <Route path="/faqs" element={<Navigate to="/contact" replace />} />
          <Route path="/services/compliance" element={<Navigate to="/services/pro-services" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
