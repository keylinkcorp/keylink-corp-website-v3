import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const faqs = [
  {
    question: "What is company formation in Bahrain and why do I need it?",
    answer: "Company formation is the legal process of registering a business entity with Bahrain's Ministry of Industry and Commerce (MOIC). It includes obtaining a Commercial Registration (CR) certificate, trade license, and establishing your company's legal identity under Bahrain's Commercial Companies Law (2001, amended 2017). Key benefits of forming in Bahrain include: 0% corporate tax on most business activities, 100% foreign ownership permitted in most sectors since 2017, access to 22+ international trade agreements, no currency restrictions with free capital movement, and a strategic GCC gateway location. Registration is required for any business operating in Bahrain to legally hire employees, open bank accounts, sign contracts, and access the GCC market.",
  },
  {
    question: "How long does it take to form a company in Bahrain?",
    answer: "With Keylink Corp, company formation takes 3-7 business days. This is significantly faster than the industry average of 2-6 weeks. Our streamlined process and established relationships with government authorities enable rapid processing.",
  },
  {
    question: "Can foreigners own 100% of a company in Bahrain?",
    answer: "Yes. Since 2017, Bahrain allows 100% foreign ownership in most business sectors. Some restricted activities (such as certain professional services) may require a local partner, but for the majority of commercial activities, full foreign ownership is permitted.",
  },
  {
    question: "What is the minimum capital required for a company?",
    answer: "Capital requirements vary by company type: SPC (Single Person Company) requires BHD 50 minimum, WLL (Limited Liability Company) requires BHD 20,000, and Holding Companies require BHD 250,000. We'll help you choose the structure that fits your needs and budget.",
  },
  {
    question: "Do I need to be physically present in Bahrain to register?",
    answer: "No. We offer complete remote formation services. All documents can be signed via Power of Attorney, and we handle all government submissions on your behalf. Many of our clients complete the entire process without visiting Bahrain.",
  },
  {
    question: "What types of companies can I register in Bahrain?",
    answer: "Main options include: Single Person Company (SPC) for solo entrepreneurs, Limited Liability Company (WLL) for partnerships, Branch Office for foreign company expansion, Holding Company for investment vehicles, and Representative Office for market research activities.",
  },
  {
    question: "What documents are needed for company formation?",
    answer: "Key documents include: valid passport copies, professional CV/resume, proof of residential address, and a business plan (for certain activities). Corporate shareholders need additional documents such as certificate of incorporation and board resolutions.",
  },
  {
    question: "How much does company formation cost in Bahrain?",
    answer: "Our packages start from BHD 750 for basic SPC registration. Full WLL formation with visa support starts at BHD 1,200. Premium packages with additional services start at BHD 1,800. All pricing is transparent with no hidden fees.",
  },
  {
    question: "Do I need a local sponsor or partner?",
    answer: "For most commercial activities, no local sponsor is required. 100% foreign ownership is permitted in most sectors. However, certain regulated activities may require a Bahraini partner or specialized licenses. We can advise on your specific situation.",
  },
  {
    question: "Can I get work visas through my company?",
    answer: "Yes. Your visa quota depends on your office size and business activities. We handle all visa processing as part of our services, including work permits, residence permits, and the Golden Visa program for qualified investors.",
  },
  {
    question: "What are the annual compliance requirements?",
    answer: "Annual requirements include: Commercial Registration (CR) renewal, commercial license renewal, audit requirements (for certain company types), and LMRA fees for employees. We offer ongoing compliance packages to handle all these requirements.",
  },
  {
    question: "How do I open a corporate bank account in Bahrain?",
    answer: "We assist with account opening at all major Bahrain banks including NBB, BBK, Ahli United, and international banks. Required documents include company registration papers, shareholder identification, and a business plan. The process typically takes 2-3 weeks.",
  },
  {
    question: "What is the step-by-step company formation process?",
    answer: "The process has three phases: (1) Initial Registration - security approval, name registration, capital deposit, and partner setup; (2) Location & Approvals - business address, sector approvals, notarization, and bank account; (3) Compliance - LMRA registration, visas, and ID cards.",
  },
  // New SEO-optimized FAQs
  {
    question: "What is the difference between SPC and WLL in Bahrain?",
    answer: "An SPC (Single Person Company) requires only one shareholder with a minimum capital of BHD 50, ideal for solo entrepreneurs. A WLL (Limited Liability Company) requires 2-50 shareholders with BHD 20,000 minimum capital, better suited for partnerships and larger operations. Both allow 100% foreign ownership. WLLs offer more flexibility for adding investors later.",
  },
  {
    question: "Which government ministries are involved in company formation?",
    answer: "The main authorities are: MOIC (Ministry of Industry and Commerce) for commercial registration and trade licenses, LMRA (Labour Market Regulatory Authority) for work permits and visas, and the SIJILAT system for electronic CR processing. For certain activities, sector-specific approvals from ministries like Health or Finance may be required.",
  },
  {
    question: "Can I convert my company type after registration?",
    answer: "Yes, company conversion is possible in Bahrain. For example, you can convert an SPC to a WLL when adding partners, or upgrade to a Holding Company. The process involves MOIC approval, amended memorandum of association, and updated capital requirements. We handle the full conversion process, typically completed in 2-3 weeks.",
  },
  {
    question: "What business activities are restricted for foreign ownership?",
    answer: "Most commercial activities allow 100% foreign ownership. Restricted activities include: real estate brokerage (requires Bahraini partner), certain media activities, and specific professional services like legal practice. We review your intended activities during consultation and advise on the optimal ownership structure.",
  },
  {
    question: "How long is the Commercial Registration (CR) valid?",
    answer: "The Commercial Registration (CR) is valid for one year from the date of issue. Annual renewal is required before expiry to maintain legal operating status. We offer CR renewal packages starting from BHD 350 and send reminders 60 days before expiry to ensure uninterrupted business operations.",
  },
  {
    question: "What is the Bahrain Golden Visa and how do I qualify?",
    answer: "The Bahrain Golden Visa is a 10-year residency program for investors and skilled professionals. Qualification criteria include: real estate investment of BHD 200,000+, business investment creating jobs, or exceptional talent in specific fields. As a company owner with qualifying investment, you may be eligible. We assist with Golden Visa applications as an add-on service.",
  },
  {
    question: "Can I operate my Bahrain company remotely from abroad?",
    answer: "Yes, many of our clients operate their Bahrain companies remotely. You'll need: a registered business address (we offer virtual office solutions), a local corporate bank account, and optionally a PRO service for ongoing government liaison. Remote operation works well for consulting, trading, and digital service companies.",
  },
  {
    question: "What happens if my company formation application is rejected?",
    answer: "Rejections are rare when working with experienced consultants. Common rejection reasons include: restricted business activities, incomplete documentation, or name conflicts. If rejection occurs, we identify the issue, prepare corrections, and resubmit at no additional charge. Our 100% success rate means we've never had a final rejection.",
  },
  // NEW SEO-optimized FAQs for 2025-2026
  {
    question: "What are the tax benefits of forming a company in Bahrain?",
    answer: "Bahrain offers significant tax advantages: 0% corporate income tax on most business activities, 0% personal income tax, 10% VAT (with BHD 37,500 registration threshold), double taxation treaties with 50+ countries including UK, France, and China, and free profit repatriation with no currency restrictions. This makes Bahrain one of the most tax-efficient jurisdictions in the GCC.",
  },
  {
    question: "What is Tamkeen and how can it help my new business?",
    answer: "Tamkeen is Bahrain's Labour Fund that provides substantial support to businesses. Key programs include: up to 50% wage subsidy for Bahraini employees for up to 3 years, 80% coverage on employee training and professional development, business expansion loans, and startup support programs. New companies can significantly reduce operating costs through these government incentives.",
  },
  {
    question: "What business activities are most popular for foreign investors in Bahrain?",
    answer: "Popular activities for foreign investors include: general trading and import/export, management and IT consulting, e-commerce and digital services, fintech (Bahrain is a regional fintech hub), food and beverage trading, and professional services. Most commercial activities allow 100% foreign ownership. Regulated sectors like healthcare, finance, and education require additional approvals.",
  },
  {
    question: "What are the latest 2025-2026 regulatory changes for company formation in Bahrain?",
    answer: "Recent updates include: enhanced SIJILAT 2.0 digital platform for faster processing, expanded remote company formation options, new business activities added including blockchain and AI consulting, updated flexible work visa schemes through LMRA, and improved processing times across government departments. We stay current with all regulatory changes to ensure smooth company registration.",
  },
  {
    question: "Can I register a fintech company in Bahrain?",
    answer: "Yes, Bahrain is the GCC's leading fintech hub. The Central Bank of Bahrain (CBB) offers a regulatory sandbox for testing innovative financial products. Fintech companies can register as WLL or SPC structures, with specific licensing requirements based on activities (payments, lending, crowdfunding, etc.). We have experience registering numerous fintech startups with CBB compliance.",
  },
  {
    question: "What is the SIJILAT system and how does it work?",
    answer: "SIJILAT is Bahrain's integrated electronic business licensing system managed by MOIC. It enables online submission of company registration applications, commercial license renewals, and business amendments. The system has reduced processing times significantly and allows for paperless transactions. We use SIJILAT to file all applications on your behalf for faster processing.",
  },
];

export function FormationFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Dashed pattern - top fade */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container relative">
        {/* Header - Centered at Top */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              FAQs
            </p>
          </motion.div>
          <motion.h2 
            variants={staggerItem}
            className="text-xl md:text-2xl font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8] max-w-2xl mx-auto"
          >
            Get answers to common questions about company formation in Bahrain. 
            Can't find what you're looking for? Our experts are here to help.
          </motion.p>
        </motion.div>

        {/* Two Column FAQ Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {/* Left Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <AccordionItem 
                    value={`left-${index}`}
                    className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-md data-[state=open]:border-l-4 data-[state=open]:border-l-accent transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5 gap-4">
                      <span className="text-left text-sm">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-[1.8] text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                >
                  <AccordionItem 
                    value={`right-${index}`}
                    className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-md data-[state=open]:border-l-4 data-[state=open]:border-l-accent transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5 gap-4">
                      <span className="text-left text-sm">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-[1.8] text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        {/* CTA Buttons - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              to="/free-consultation" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Ask Our Experts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              to="/faqs" 
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              View All FAQs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
