import { cn } from "@/lib/utils";

import versedag from "@/assets/company-logos/versedag.png";
import cbre from "@/assets/company-logos/cbre.png";
import braxtone from "@/assets/company-logos/braxtone.png";
import alsalam from "@/assets/company-logos/alsalam.jpg";
import incanto from "@/assets/company-logos/incanto.png";
import bfh from "@/assets/company-logos/bfh.jpg";
import isola from "@/assets/company-logos/isola.png";
import tsma from "@/assets/company-logos/tsma.png";
import nimble from "@/assets/company-logos/nimble.png";

const logos = [
  { name: "VersedAG", src: versedag, alt: "VersedAG logo" },
  { name: "CBRE", src: cbre, alt: "CBRE logo" },
  { name: "Braxtone", src: braxtone, alt: "Braxtone logo" },
  { name: "Al Salam", src: alsalam, alt: "Al Salam Bank logo" },
  { name: "Incanto", src: incanto, alt: "Incanto logo" },
  { name: "BFH", src: bfh, alt: "Bahrain Financing House (BFH) logo" },
  { name: "Isola", src: isola, alt: "Isola logo" },
  { name: "TSMA", src: tsma, alt: "TSMA logo" },
  { name: "Nimble", src: nimble, alt: "Nimble logo" },
];

type CompanyLogosTickerProps = {
  /** Optional max-width override for the framed ticker container. */
  frameMaxWidthClassName?: string;
};

export function CompanyLogosTicker({ frameMaxWidthClassName }: CompanyLogosTickerProps) {
  const framedMaxW = frameMaxWidthClassName ?? "max-w-[1120px]";

  return (
    <section
      aria-label="Company logos"
      className="relative border-y border-border/60"
    >
      {/* Framed ticker (clips the scroll inside the frame) */}
      <div className={cn("mx-auto border-x border-border/60 bg-muted/10 overflow-hidden", framedMaxW)}>
        <div className="relative py-6">
          {/* Fade edges (kept inside the framed layout) */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-muted/10 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-muted/10 to-transparent z-10" />

          <div className="flex items-center gap-12 md:gap-16 logo-ticker">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-10 md:h-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-7 md:h-8 w-auto object-contain grayscale opacity-60 contrast-125"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cfc_logo_scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker {
          width: max-content;
          animation: cfc_logo_scroll 30s linear infinite;
          will-change: transform;
          padding-inline: 1rem;
        }
        @media (min-width: 640px) {
          .logo-ticker { padding-inline: 1.25rem; }
        }
        .logo-ticker:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-ticker { animation: none; }
        }
      `}</style>
    </section>
  );
}
