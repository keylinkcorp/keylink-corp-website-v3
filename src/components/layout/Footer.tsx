import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { KeylinkLogo } from "@/components/brand/KeylinkLogo";

const footerLinks = {
  services: [
    { title: "Company Formation", href: "/services/company-formation" },
    { title: "Commercial Registration", href: "/services/commercial-registration" },
    { title: "PRO Services", href: "/services/pro-services" },
    { title: "Visa Services", href: "/services/visa-services" },
    { title: "Business Consulting", href: "/services/business-consulting" },
    { title: "Virtual Office", href: "/services/virtual-office" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Why Choose Us", href: "/about#why-choose-us" },
    { title: "Testimonials", href: "/about#testimonials" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
  ],
  resources: [
    { title: "Bahrain Business Laws", href: "/resources/business-laws" },
    { title: "Cost Calculator", href: "/cost-calculator" },
    { title: "FAQs", href: "/faqs" },
    { title: "Free Consultation", href: "/free-consultation" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="border-b border-navy-light">
        <div className="container py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business in Bahrain?</h2>
          <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Get expert guidance and support for all your business setup needs. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-md transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/cost-calculator"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/30 hover:bg-navy-light text-primary-foreground font-semibold rounded-md transition-colors"
            >
              Calculate Your Costs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <KeylinkLogo onDark className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted partner for business setup and corporate services in Bahrain. 
              We simplify the complexities of starting and managing your business.
            </p>
            <div className="space-y-3">
              <a href="tel:+97317000000" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="h-5 w-5" />
                <span>+973 1700 0000</span>
              </a>
              <a href="mailto:info@keylinkcorp.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@keylinkcorp.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Diplomatic Area, Manama, Kingdom of Bahrain</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-navy-light hover:bg-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-light hover:bg-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-light hover:bg-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-light hover:bg-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Keylink Corp. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
