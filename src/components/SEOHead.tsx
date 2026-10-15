import React, { useEffect } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { RouteMetadata } from "../utils/seo";

interface SEOHeadProps {
  metadata: RouteMetadata;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ metadata }) => {
  useEffect(() => {
    // 1. Document Title
    document.title = metadata.title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", metadata.description);
    setMetaTag("name", "robots", metadata.robots);

    // 3. OpenGraph Tags
    setMetaTag("property", "og:title", metadata.title);
    setMetaTag("property", "og:description", metadata.description);
    setMetaTag("property", "og:url", metadata.canonicalUrl);
    setMetaTag("property", "og:type", metadata.ogType);
    setMetaTag("property", "og:image", metadata.ogImage);
    setMetaTag("property", "og:site_name", STORE_CONFIG.storeName);

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", metadata.title);
    setMetaTag("name", "twitter:description", metadata.description);
    setMetaTag("name", "twitter:image", metadata.ogImage);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", metadata.canonicalUrl);

    // 6. JSON-LD Structured Data
    const existingScript = document.getElementById("jsonld-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLdGraph: any[] = [];

    // Core LocalBusiness / JewelryStore Schema
    const storeSchema: any = {
      "@type": "JewelryStore",
      "@id": `${STORE_CONFIG.canonicalDomain}/#store`,
      name: STORE_CONFIG.storeName,
      url: STORE_CONFIG.canonicalDomain,
      logo: metadata.ogImage,
      image: metadata.ogImage,
      description: STORE_CONFIG.subTagline,
      telephone: STORE_CONFIG.phone,
      email: STORE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${STORE_CONFIG.flagshipAddress.line1}, ${STORE_CONFIG.flagshipAddress.line2}`,
        addressLocality: STORE_CONFIG.flagshipAddress.city,
        addressRegion: STORE_CONFIG.flagshipAddress.state,
        postalCode: STORE_CONFIG.flagshipAddress.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.9298,
        longitude: 72.8335,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "10:30",
          closes: "20:30",
        },
      ],
      priceRange: "₹₹₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    };
    jsonLdGraph.push(storeSchema);

    // WebSite Schema
    const websiteSchema: any = {
      "@type": "WebSite",
      "@id": `${STORE_CONFIG.canonicalDomain}/#website`,
      url: STORE_CONFIG.canonicalDomain,
      name: STORE_CONFIG.storeName,
      publisher: {
        "@id": `${STORE_CONFIG.canonicalDomain}/#store`,
      },
    };
    jsonLdGraph.push(websiteSchema);

    // BreadcrumbList Schema
    if (metadata.breadcrumbs && metadata.breadcrumbs.length > 0) {
      const breadcrumbSchema: any = {
        "@type": "BreadcrumbList",
        itemListElement: metadata.breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.url.startsWith("http")
            ? crumb.url
            : `${STORE_CONFIG.canonicalDomain.replace(/\/$/, "")}${crumb.url}`,
        })),
      };
      jsonLdGraph.push(breadcrumbSchema);
    }

    // BlogPosting Schema
    if (metadata.article) {
      const articleSchema: any = {
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": metadata.canonicalUrl,
        },
        headline: metadata.article.title,
        description: metadata.article.metaDescription,
        image: metadata.article.featuredImage,
        datePublished: metadata.article.publishedAt,
        dateModified: metadata.article.updatedAt || metadata.article.publishedAt,
        author: {
          "@type": "Person",
          name: metadata.article.author.name,
          jobTitle: metadata.article.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: STORE_CONFIG.storeName,
          url: STORE_CONFIG.canonicalDomain,
          logo: {
            "@type": "ImageObject",
            url: metadata.ogImage,
          },
        },
        articleSection: metadata.article.category,
        keywords: metadata.article.keywords.join(", "),
      };
      jsonLdGraph.push(articleSchema);
    }

    // Product Schema
    if (metadata.product) {
      const productSchema: any = {
        "@type": "Product",
        "@id": metadata.canonicalUrl,
        name: metadata.product.name,
        image: metadata.product.image,
        description: metadata.product.description,
        sku: metadata.product.id,
        mpn: metadata.product.hallmarkCode,
        category: metadata.product.category,
        brand: {
          "@type": "Brand",
          name: STORE_CONFIG.storeName,
        },
        offers: {
          "@type": "Offer",
          url: metadata.canonicalUrl,
          priceCurrency: "INR",
          price: metadata.product.price,
          availability: metadata.product.availability === "In Stock"
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": `${STORE_CONFIG.canonicalDomain}/#store`,
          },
        },
      };
      jsonLdGraph.push(productSchema);
    }

    const script = document.createElement("script");
    script.id = "jsonld-structured-data";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": jsonLdGraph,
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("jsonld-structured-data");
      if (s) s.remove();
    };
  }, [metadata]);

  return null;
};
