import type React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EditorialImage } from "@/components/shared/EditorialImage";
import {
  SectionBackgroundOverlay,
  type SectionOverlayVariant } from
"@/components/shared/SectionBackgroundOverlay";

type SplitSectionProps = {
  badge?: string;
  /** Optional override for the badge element classes (defaults to `section-badge`). */
  badgeClassName?: string;
  title: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  /** Override default header spacing (e.g., tighter rhythm for specific landing sections). */
  headerClassName?: string;
  /** Override the title top margin applied when a badge is present (default: `mt-3`). */
  titleTopMarginClassName?: string;
  /** Override the subtitle top margin (default: `mt-4`). */
  subtitleTopMarginClassName?: string;
  align?: "left" | "center";
  headerSize?: "default" | "compact";
  /** Where to render the header (badge/title/subtitle). Defaults to inside the content column. */
  headerPlacement?: "column" | "top";
  /** Apply LP-specific calmer heading scale (does not affect global typography). */
  useLpHeadings?: boolean;
  leadClassName?: string;
  hideImageCaption?: boolean;
  /** Extra content below subtitle (cards, lists, etc.) */
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  /** Layout mode: split (two-column) or stacked (image full-width on top, content below). */
  layout?: "split" | "stacked";
  imagePosition?: "left" | "right";
  /**
   * Controls column order below `lg` for split layout.
   * - default: keep current behavior (content first, image second)
   * - follow-imagePosition: if imagePosition="left" => image first; if "right" => content first
   */
  mobileOrder?: "default" | "follow-imagePosition" | "image-first" | "content-first";
  /** Desktop split layout column spans (lg+). Defaults to 6/6. */
  contentColSpanLg?: number;
  imageColSpanLg?: number;
  /** When true, the image column stays sticky while content scrolls (lg+ only). */
  imageSticky?: boolean;
  /** Top offset classes for sticky image (e.g. `lg:top-24`). */
  imageStickyTopClassName?: string;
  variant?: "default" | "subtle";
  /** Decorative overlay pattern behind the section (design-system consistent). */
  backgroundVariant?: SectionOverlayVariant;
  overlayOpacity?: number;
  overlayMasked?: boolean;
  imageRatio?: number;
  imageClassName?: string;
  /** Extra classes applied to the underlying <img> (object-position, etc.). */
  imageImgClassName?: string;
  /** Use consistent editorial image styling (default true). */
  imageTreatment?: "editorial" | "none";
  /** When imageTreatment="none", choose whether the frame is elevated or flat. */
  imageFrame?: "elevated" | "flat";
  imageOverlayStrength?: number;
  /** Only used when layout="stacked".
   * If provided, the stacked image uses an aspect ratio (better for very wide banners).
   */
  stackedImageRatio?: number;
  /** Only used when layout="stacked" and stackedImageRatio is not provided. */
  stackedImageHeightClassName?: string;
};

export function SplitSection({
  badge,
  badgeClassName,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  headerClassName,
  titleTopMarginClassName,
  subtitleTopMarginClassName,
  align = "left",
  headerSize = "default",
  headerPlacement = "column",
  useLpHeadings = false,
  leadClassName,
  hideImageCaption = false,
  children,
  imageSrc,
  imageAlt,
  layout = "split",
  imagePosition = "right",
  mobileOrder = "default",
  contentColSpanLg = 6,
  imageColSpanLg = 6,
  imageSticky = false,
  imageStickyTopClassName,
  variant = "default",
  backgroundVariant,
  overlayOpacity,
  overlayMasked,
  imageRatio = 16 / 9,
  imageClassName,
  imageImgClassName,
  imageTreatment = "editorial",
  imageFrame = "elevated",
  imageOverlayStrength,
  stackedImageRatio,
  stackedImageHeightClassName =
    "h-[32vh] sm:h-[30vh] md:h-[25vh] min-h-[220px] md:min-h-[240px]"
}: SplitSectionProps) {
  const isSubtle = variant === "subtle";
  const resolvedOverlay: SectionOverlayVariant =
    backgroundVariant ?? (isSubtle ? "ibelick-lines" : "ibelick-soft");
  const isCenter = align === "center";
  const headingClass = cn(
    "text-balance",
    useLpHeadings ? "lp-h2" : "",
    headerSize === "compact" ? "text-2xl md:text-3xl" : ""
  );

  const resolvedBadgeClassName = badgeClassName ?? "section-badge";
  const resolvedTitleTopMargin = titleTopMarginClassName ?? "mt-3";
  const resolvedSubtitleTopMargin = subtitleTopMarginClassName ?? "mt-4";

  const renderHeaderOnTop = headerPlacement === "top";
  const renderHeaderInColumn = !renderHeaderOnTop;

  const useEditorialImage = imageTreatment !== "none";

  const colSpanLgClassMap: Record<number, string> = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12"
  };

  const resolvedContentColSpanLg = colSpanLgClassMap[contentColSpanLg] ?? "lg:col-span-6";
  const resolvedImageColSpanLg = colSpanLgClassMap[imageColSpanLg] ?? "lg:col-span-6";

  const desktopContentOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1";
  const desktopImageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2";

  const shouldApplyMobileOrder = layout === "split" && mobileOrder !== "default";

  const mobileContentOrder = (() => {
    if (!shouldApplyMobileOrder) return "";

    switch (mobileOrder) {
      case "follow-imagePosition":
        return imagePosition === "left" ? "order-2" : "order-1";
      case "image-first":
        return "order-2";
      case "content-first":
        return "order-1";
      default:
        return "";
    }
  })();

  const mobileImageOrder = (() => {
    if (!shouldApplyMobileOrder) return "";

    switch (mobileOrder) {
      case "follow-imagePosition":
        return imagePosition === "left" ? "order-1" : "order-2";
      case "image-first":
        return "order-1";
      case "content-first":
        return "order-2";
      default:
        return "";
    }
  })();

  const Header = (
    <header
      className={cn(
        "mb-7 md:mb-9",
        isCenter ? "text-center" : "text-left",
        headerClassName,
      )}
    >
      {badge ? <p className={resolvedBadgeClassName}>{badge}</p> : null}

      <h2
        className={cn(
          badge ? resolvedTitleTopMargin : "",
          headingClass,
          titleClassName,
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            resolvedSubtitleTopMargin,
            "text-lg leading-relaxed max-w-3xl",
            isCenter ? "mx-auto" : "",
            leadClassName,
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );


  return (
    <section
      className={cn(
        "section-spacing relative",
        imageSticky ? "overflow-visible" : "overflow-hidden",
        isSubtle ? "bg-secondary/40" : "bg-background"
      )}>

      <SectionBackgroundOverlay
        variant={resolvedOverlay}
        opacity={overlayOpacity}
        masked={overlayMasked} />


      <div className="container relative z-10">
        {renderHeaderOnTop ? <div className="max-w-6xl mx-auto">{Header}</div> : null}

        {layout === "stacked" ?
         <div className="max-w-6xl mx-auto">
            <div className={cn(imageClassName)}>
              {useEditorialImage ?
            typeof stackedImageRatio === "number" ?
            <EditorialImage
              src={imageSrc}
              alt={imageAlt}
              ratio={stackedImageRatio}
              overlayStrength={imageOverlayStrength}
              className={cn("w-full")}
              imgClassName={cn(imageImgClassName)} /> :


            <div className={stackedImageHeightClassName}>
                    <EditorialImage
                src={imageSrc}
                alt={imageAlt}
                ratio={undefined}
                overlayStrength={imageOverlayStrength}
                className={cn("h-full", "w-full")}
                imgClassName={cn("h-full", imageImgClassName)} />

                  </div> :


            <div
              className={cn(
                imageFrame === "flat" ?
                "rounded-2xl border border-border/30 bg-card overflow-hidden" :
                "card-elevated overflow-hidden",
                typeof stackedImageRatio === "number" ?
                "" :
                stackedImageHeightClassName
              )}>

                  {typeof stackedImageRatio === "number" ?
              <AspectRatio ratio={stackedImageRatio}>
                      <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  className={cn(
                    "h-full w-full object-cover",
                    imageImgClassName
                  )} />

                    </AspectRatio> :

              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className={cn("h-full w-full object-cover", imageImgClassName)} />

              }
                </div>
            }
            </div>

            {!hideImageCaption ?
          <div className="mt-3 text-xs text-muted-foreground">
                No logos, no watermarks — images are illustrative.
              </div> :
          null}

            <div className="mt-8">
              {renderHeaderInColumn ? Header : null}
              {children}
            </div>
          </div> :

        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
            <div
            className={cn(
              resolvedContentColSpanLg,
              mobileContentOrder,
              desktopContentOrder,
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            )}>

              {renderHeaderInColumn ? Header : null}
              {children}
            </div>

            <div
            className={cn(
              resolvedImageColSpanLg,
              mobileImageOrder,
              desktopImageOrder,
              imagePosition === "left" ? "lg:order-1" : "lg:order-2",
              imageSticky ?
              cn(
                "md:sticky md:self-start",
                imageStickyTopClassName ?? "md:top-24"
              ) :
              ""
            )}>

              <div className={cn(imageClassName)}>
                {useEditorialImage ?
              <EditorialImage
                src={imageSrc}
                alt={imageAlt}
                ratio={imageRatio}
                overlayStrength={imageOverlayStrength}
                imgClassName={imageImgClassName} /> :


              <div
                className={cn(
                  imageFrame === "flat" ?
                  "rounded-2xl border border-border/30 bg-card overflow-hidden" :
                  "card-elevated overflow-hidden"
                )}>

                    <AspectRatio ratio={imageRatio}>
                      <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    className={cn(
                      "h-full w-full object-cover",
                      imageImgClassName
                    )} />

                    </AspectRatio>
                  </div>
              }
              </div>

              {!hideImageCaption ?
            <div className="mt-3 text-xs text-muted-foreground">
                  ​
                </div> :
            null}
            </div>
          </div>
        }
      </div>
    </section>);

}