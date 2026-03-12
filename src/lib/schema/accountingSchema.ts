export const accountingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Accounting & Tax Services in Bahrain", "description": "Professional accounting services including bookkeeping, VAT registration, and audit support.", "provider": { "@type": "LocalBusiness", "name": "Keylink Corp" }, "areaServed": { "@type": "Country", "name": "Bahrain" }, "offers": { "@type": "AggregateOffer", "lowPrice": "200", "highPrice": "800", "priceCurrency": "BHD" } },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://keylinkcorp.com" }, { "@type": "ListItem", "position": 2, "name": "Accounting", "item": "https://keylinkcorp.com/services/accounting" }] }
  ]
};
