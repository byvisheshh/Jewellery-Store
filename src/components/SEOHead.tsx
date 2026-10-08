import React, { useEffect } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { Product } from "../data/products";
import { BlogArticle } from "../data/blogs";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  product?: Product | null;
  article?: BlogArticle | null;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  product,
  article,
}) => {
  useEffect(() => {
    const finalTitle = title
      ? `${title} | ${STORE_CONFIG.storeName}`
      : `${STORE_CONFIG.storeName} – Luxury Indian Heritage & Diamond Jewellery`;

    const finalDescription =
      description ||
      "Discover timeless 22K gold, certified diamond and heritage bridal jewellery handcrafted with exceptional artistry and BIS hallmarked purity.";

    document.title = finalTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", finalDescription);
    }

    // Update OpenGraph Title & Desc
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", finalTitle);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", finalDescription);
    }

    // JSON-LD Structured Data
    const existingScript = document.getElementById("jsonld-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    let schemaData: any = {
      "@context": "https://schema.org",
      "@type": "JewelryStore",
      name: STORE_CONFIG.storeName,
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
      priceRange: "₹₹₹₹",
      openingHours: "Mo-Su 10:30-20:30",
    };

    if (article) {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        image: article.featuredImage,
        datePublished: "2026-03-01T10:00:00+05:30",
        author: {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: STORE_CONFIG.storeName,
          logo: {
            "@type": "ImageObject",
            url: "https://vanyajewellers.com/logo.png",
          },
        },
      };
    } else if (product) {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product.description,
        category: product.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.price,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: STORE_CONFIG.storeName,
          },
        },
      };
    }

    const script = document.createElement("script");
    script.id = "jsonld-structured-data";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("jsonld-structured-data");
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, product, article]);

  return null;
};
