import { useEffect } from "react";
import { Check, Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialImage } from "@/components/shared/EditorialImage";

const benefits = [
  "Business structure advice tailored to your goals",
  "Transparent cost breakdown with no hidden fees",
  "Realistic timeline estimate for your setup",
  "Complete document checklist to get started",
  "Direct Q&A with our business setup experts",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" },
  { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+973 1700 8888", href: "https://wa.me/97317008888" },
];

type CalendlyBookingProps = {
  /** Defaults to Keylink free consultation Calendly link */
  calendlyUrl?: string;
  /** Widget height in px (default 700) */
  height?: number;
  /** Optional section id for on-page scrolling (e.g. "book") */
  sectionId?: string;
  /** Visual wrapper style (use "plain" when embedding inside an existing page canvas) */
  variant?: "band" | "plain";
  /** Optional image displayed at the top of the info panel (people-focused visual). */
  imageSrc?: string;
  imageAlt?: string;
};

export function CalendlyBooking({
  calendlyUrl = "https://calendly.com/keylinkcorp/free-consultation-google-meet?hide_gdpr_banner=1",
  height = 700,
  sectionId,
  variant = "band",
  imageSrc,
  imageAlt = "Consultation preview",
}: CalendlyBookingProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section
      id={sectionId}
      className={variant === "band" ? "py-16 md:py-24 bg-muted/30" : "py-8 md:py-10"}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Calendly Widget - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="lp-card overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: `${height}px` }}
              />
            </div>
          </div>

          {/* Info Panel - Takes 1 column */}
          <div className="space-y-6">
            {/* Optional Image */}
            {imageSrc ? (
              <EditorialImage
                src={imageSrc}
                alt={imageAlt}
                ratio={16 / 10}
                overlayStrength={0.55}
                imgClassName="object-[center_35%]"
              />
            ) : null}

            {/* What You'll Get Card */}
            <div className="lp-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </span>
                What You'll Get
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Card (flat, minimal) */}
            <div className="lp-card-flat bg-muted/20 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Prefer to Talk Now?</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="flex items-center gap-3 text-foreground/90 hover:text-foreground transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Business Hours</span>
                </div>
                <p className="text-sm text-muted-foreground">Sunday - Thursday: 8:00 AM - 5:00 PM</p>
              </div>

              {/* Location */}
              <div className="mt-4 pt-4 border-t border-border/60">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Our Office</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sanabis Exhibition Tower, Office 601
                  <br />
                  Manama, Kingdom of Bahrain
                </p>
              </div>

              <Button className="w-full mt-6" asChild>
                <a href="https://wa.me/97317008888">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

