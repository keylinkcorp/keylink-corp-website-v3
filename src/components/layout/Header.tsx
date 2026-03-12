import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Building2, FileText, Users, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KeylinkLogo } from "@/components/brand/KeylinkLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";


// Mega menu structure - 4 main pillars
const megaMenuItems = [
  {
    title: "Launch Business",
    icon: Building2,
    columns: [
      {
        heading: "Company Types",
        links: [
          { title: "Company Formation", href: "/services/company-formation", description: "Full business setup in Bahrain" },
          { title: "Single Person Company", href: "/services/single-person-company", description: "SPC for solo entrepreneurs" },
          { title: "Branch Office", href: "/services/branch-office", description: "Foreign company branch setup" },
          { title: "WLL Company", href: "/services/wll-company", description: "Limited liability company" },
        ],
      },
      {
        heading: "Registration",
        links: [
          { title: "Commercial Registration", href: "/services/commercial-registration", description: "New CR registration" },
          { title: "CR Amendment", href: "/services/cr-amendment", description: "Modify existing registration" },
          { title: "Lease Contract", href: "/services/lease-contract-registration", description: "Business lease registration" },
          { title: "Free Zone in Bahrain", href: "/free-zone-in-bahrain", description: "Free zones guide & setup support" },
        ],
      },
      {
        heading: "Licensing",
        links: [
          { title: "Business License", href: "/services/business-license", description: "Commercial license acquisition" },
          { title: "Memorandum of Association", href: "/services/moa", description: "Company legal documents" },
          { title: "Company Liquidation", href: "/services/company-liquidation", description: "Proper business closure" },
        ],
      },
    ],
    cta: {
      title: "Ready to start?",
      description: "Get your business registered in as little as 48 hours with our expert guidance.",
      buttonText: "Start Now",
      href: "/free-consultation",
    },
  },
  {
    title: "Grow Business",
    icon: Briefcase,
    columns: [
      {
        heading: "Consulting",
        links: [
          { title: "Business Consulting", href: "/services/business-consulting", description: "Strategic business advice" },
          { title: "Management Consulting", href: "/services/management-consulting", description: "Operational excellence" },
          { title: "Legal Consulting", href: "/services/legal-consulting", description: "Business legal support" },
        ],
      },
      {
        heading: "Financial Services",
        links: [
          { title: "Accounting Services", href: "/services/accounting-services", description: "Financial management" },
          { title: "Tax Services", href: "/services/tax-services", description: "Tax compliance & planning" },
          { title: "Bank Account Services", href: "/services/bank-account", description: "Corporate banking" },
        ],
      },
      {
        heading: "Office Solutions",
        links: [
          { title: "Virtual Office", href: "/services/virtual-office", description: "Professional business address" },
          { title: "Co-working Space", href: "/services/coworking-space", description: "Flexible work environment" },
          { title: "Business Incubators", href: "/services/business-incubators", description: "Startup support programs" },
        ],
      },
    ],
    cta: {
      title: "Scale with confidence",
      description: "Expert guidance to help your business thrive in Bahrain's competitive market.",
      buttonText: "Explore Services",
      href: "/services/business-consulting",
    },
  },
  {
    title: "Government Services",
    icon: FileText,
    columns: [
      {
        heading: "PRO Services",
        links: [
          { title: "PRO Services", href: "/services/pro-services", description: "Government liaison services" },
          { title: "Document Clearance", href: "/services/document-clearance", description: "Fast document processing" },
          { title: "Chamber of Commerce", href: "/services/chamber-of-commerce", description: "Chamber registration" },
          { title: "Compliance & Regulatory", href: "/services/compliance", description: "Stay compliant" },
        ],
      },
      {
        heading: "Visa Services",
        links: [
          { title: "Visa Services", href: "/services/visa-immigration", description: "Work, Family & Golden visas" },
        ],
      },
      {
        heading: "Document Services",
        links: [
          { title: "Certificate Attestation", href: "/services/certificate-attestation", description: "Document legalization" },
          { title: "Local Sponsorship", href: "/services/local-sponsorship", description: "Bahraini sponsor services" },
        ],
      },
    ],
    cta: {
      title: "Need help navigating?",
      description: "Our PRO experts handle all government procedures so you can focus on your business.",
      buttonText: "Get PRO Support",
      href: "/services/pro-services",
    },
  },
];

// About dropdown with icons
const aboutDropdown = {
  title: "About",
  sections: [
    {
      links: [
        { title: "About Us", href: "/about", description: "Our story & mission", icon: "🏢" },
        { title: "Our Team", href: "/about", description: "Meet the experts", icon: "👥" },
        { title: "Why Choose Us", href: "/about", description: "What sets us apart", icon: "⭐" },
        { title: "Testimonials", href: "/about", description: "Client success stories", icon: "💬" },
      ],
    },
    {
      links: [
        { title: "Resources", href: "/resources", description: "Helpful guides & tools", icon: "📚" },
        { title: "Careers", href: "/careers", description: "Join our growing team", icon: "🚀" },
        { title: "Contact Us", href: "/contact", description: "Get in touch with us", icon: "📞" },
      ],
    },
  ],
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      scrolled 
        ? "bg-white shadow-sm" 
        : "bg-white border-b border-gray-100"
    )}>
      {/* Top bar */}
      <div className={cn(
        "hidden md:block bg-navy text-white transition-all duration-200 overflow-hidden",
        scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97317000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              <span className="tracking-wide">+973 1700 0000</span>
            </a>
            <a href="mailto:info@keylinkcorp.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              <span className="tracking-wide">info@keylinkcorp.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-white/90 tracking-wide text-[13px]">Your Trusted Business Partner in Bahrain</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-200 gap-4",
          // Keep enough height when scrolled so the logo never gets clipped
          scrolled ? "h-20 lg:h-24" : "h-20 lg:h-28",
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0" aria-label="Keylink Corp">
          <KeylinkLogo className={cn("w-auto transition-[height] duration-200", scrolled ? "h-10 lg:h-16" : "h-11 lg:h-20")} />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center items-center h-full">
          <NavigationMenuList className="gap-1">
            {megaMenuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent data-[state=open]:!bg-transparent text-gray-600 hover:text-navy data-[state=open]:text-navy font-medium text-[15px] px-5 h-12 py-0 leading-none transition-colors duration-200 tracking-wide">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-screen max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
                    <div className="grid grid-cols-4 gap-0">
                      {/* Navigation Columns */}
                      <div className={cn(
                        "grid gap-6 p-8",
                        item.columns.length === 1 ? "col-span-2 grid-cols-1" : "col-span-3",
                        item.columns.length === 2 && "grid-cols-2",
                        item.columns.length >= 3 && "grid-cols-3"
                      )}>
                        {item.columns.map((column) => (
                          <div key={column.heading}>
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 pb-2 border-b border-gold/20 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                              {column.heading}
                            </h3>
                            <ul
                              className={cn(
                                "space-y-0.5",
                                column.heading === "Company Types" &&
                                  column.links.length > 4 &&
                                  "grid grid-cols-2 gap-x-6 gap-y-0.5 space-y-0",
                              )}
                            >
                              {column.links.map((link, idx) => (
                                <li
                                  key={link.title}
                                  className={cn(
                                    column.heading === "Company Types" &&
                                      column.links.length > 4 &&
                                      (idx < 3 ? "col-span-2" : "col-span-1"),
                                  )}
                                >
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={link.href}
                                      className="group block rounded-lg py-2.5 pr-3 hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="text-sm font-medium text-gray-800 group-hover:text-navy transition-colors">
                                        {link.title}
                                      </div>
                                      <p className="text-[13px] text-gray-500 mt-0.5 group-hover:text-gray-600 transition-colors">
                                        {link.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Panel - 2 cols for single-column menus, 1 col for others */}
                      <div className={cn(
                        "relative overflow-hidden bg-navy rounded-xl",
                        item.columns.length === 1 ? "col-span-2" : "col-span-1"
                      )}>
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                          }}></div>
                        </div>
                        
                        {/* Content */}
                        <div className={cn(
                          "flex flex-col justify-between h-full relative z-10",
                          item.columns.length === 1 ? "p-8" : "p-6"
                        )}>
                          <div>
                            <div className={cn(
                              "rounded-xl bg-gold/20 flex items-center justify-center",
                              item.columns.length === 1 ? "w-12 h-12 mb-5" : "w-10 h-10 mb-4"
                            )}>
                              <ArrowRight className={cn("text-gold", item.columns.length === 1 ? "h-6 w-6" : "h-5 w-5")} />
                            </div>
                            <h4 className={cn(
                              "font-semibold text-white",
                              item.columns.length === 1 ? "text-xl mb-3" : "text-lg mb-2"
                            )}>
                              {item.cta.title}
                            </h4>
                            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                              {item.cta.description}
                            </p>
                          </div>
                          <Link to={item.cta.href} className="mt-6">
                            <Button className={cn(
                              "bg-gold hover:bg-gold-dark text-navy font-semibold",
                              item.columns.length === 1 ? "px-8" : "w-full"
                            )}>
                              {item.cta.buttonText}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            
            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent data-[state=open]:!bg-transparent text-gray-600 hover:text-navy data-[state=open]:text-navy font-medium text-[15px] px-5 h-12 py-0 leading-none transition-colors duration-200 tracking-wide">
                {aboutDropdown.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-80 p-2">
                  {aboutDropdown.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {sectionIndex > 0 && (
                        <div className="my-2 border-t border-gray-100"></div>
                      )}
                      <ul className="space-y-0.5">
                        {section.links.map((link) => (
                          <li key={link.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-lg mt-0.5">{link.icon}</span>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-gray-800 group-hover:text-navy transition-colors">
                                    {link.title}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {link.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Quick contact CTA */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <a 
                      href="tel:+97317000000" 
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-navy/5 hover:bg-navy/10 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                        <Phone className="h-4 w-4 text-navy" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Need help?</div>
                        <div className="text-sm font-medium text-navy">+973 1700 0000</div>
                      </div>
                    </a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <Link to="/free-consultation" className="hidden lg:flex flex-shrink-0">
          <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 h-12 rounded-xl shadow-sm">
            Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-navy transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white overflow-hidden">
          <nav className="container py-4 max-h-[75vh] overflow-y-auto">
            {megaMenuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-0">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-navy transition-colors"
                  onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                >
                  <span className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="tracking-wide">{item.title}</span>
                  </span>
                  <ChevronDown className={cn(
                    "h-4 w-4 text-gray-400 transition-transform duration-200",
                    openSubmenu === item.title && "rotate-180"
                  )} />
                </button>
                {openSubmenu === item.title && (
                  <div className="pb-4 space-y-4">
                    {item.columns.map((column) => (
                      <div key={column.heading} className="pl-12">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold"></span>
                          {column.heading}
                        </h4>
                        {column.links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.href}
                            className="block py-2.5 text-sm text-gray-600 hover:text-navy transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* About Dropdown in mobile */}
            <div className="border-b border-gray-100">
              <button
                className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-navy transition-colors"
                onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}
              >
                <span className="tracking-wide">{aboutDropdown.title}</span>
                <ChevronDown className={cn(
                  "h-4 w-4 text-gray-400 transition-transform duration-200",
                  openSubmenu === "about" && "rotate-180"
                )} />
              </button>
              {openSubmenu === "about" && (
                <div className="pb-4 pl-4">
                  {aboutDropdown.sections.map((section, sIndex) => (
                    <div key={sIndex} className={sIndex > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}>
                      {section.links.map((link) => (
                        <Link
                          key={link.title}
                          to={link.href}
                          className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-navy transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-base">{link.icon}</span>
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-6 pb-2">
              <Link to="/free-consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 rounded-xl shadow-md">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              {/* Quick contact */}
              <a 
                href="tel:+97317000000" 
                className="flex items-center justify-center gap-2 mt-4 py-3 text-navy font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>+973 1700 0000</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
