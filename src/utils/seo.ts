import { STORE_CONFIG } from "../data/storeConfig";
import { PRODUCTS, Product } from "../data/products";
import { BLOG_ARTICLES, BlogArticle } from "../data/blogs";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface RouteMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: "website" | "article" | "product";
  ogImage: string;
  robots: string;
  breadcrumbs: BreadcrumbItem[];
  article?: BlogArticle;
  product?: Product;
  isNotFound?: boolean;
}

export function normalizePath(path: string): string {
  if (!path) return "/";
  // Remove trailing slash unless it's just "/"
  let normalized = path.trim();
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

export function getFullUrl(path: string): string {
  const cleanPath = normalizePath(path);
  const base = STORE_CONFIG.canonicalDomain.replace(/\/$/, "");
  return cleanPath === "/" ? `${base}/` : `${base}${cleanPath}`;
}

export function getMetadataForRoute(pathname: string): RouteMetadata {
  const path = normalizePath(pathname);
  const defaultImage = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85";
  const storeName = STORE_CONFIG.storeName;

  // 1. Homepage
  if (path === "/" || path === "") {
    return {
      title: `Gold, Diamond & Bridal Jewellery | ${storeName}`,
      description: `Discover timeless 22K BIS hallmarked gold, certified natural diamonds and heritage Indian bridal jewellery handcrafted at ${storeName}. Explore online or visit our salons.`,
      canonicalUrl: getFullUrl("/"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [{ name: "Home", url: "/" }],
    };
  }

  // 2. About Us
  if (path === "/about") {
    return {
      title: `Our 50-Year Heritage & Master Karigars | ${storeName}`,
      description: `Learn about ${storeName}'s five decades of goldsmithing legacy, uncompromised BIS 916 hallmarking purity, and generational Karigar craftsmanship since 1974.`,
      canonicalUrl: getFullUrl("/about"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
      ],
    };
  }

  // 3. Contact Us
  if (path === "/contact") {
    return {
      title: `Contact Our Concierge & Flagship Salons | ${storeName}`,
      description: `Connect with the ${storeName} client concierge, schedule in-store bridal trials, or consult our master gemologists. Showrooms in Mumbai, Delhi & Bengaluru.`,
      canonicalUrl: getFullUrl("/contact"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Contact Us", url: "/contact" },
      ],
    };
  }

  // 4. Store Locations
  if (path === "/store-locations" || path === "/locations") {
    return {
      title: `Flagship Showroom Locations & Salons | ${storeName}`,
      description: `Visit ${storeName} luxury salons in Mumbai Fort, New Delhi Mehrauli, Bengaluru Lavelle Road, and Hyderabad Jubilee Hills for private viewings.`,
      canonicalUrl: getFullUrl("/store-locations"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Store Locations", url: "/store-locations" },
      ],
    };
  }

  // 5. Main Collections Catalogue
  if (path === "/collections") {
    return {
      title: `Jewellery Collections: Gold, Diamond & Bridal | ${storeName}`,
      description: `Browse the complete ${storeName} catalogue: 22K hallmarked gold necklaces, certified solitaire rings, Nakashi bangles, and royal bridal sets.`,
      canonicalUrl: getFullUrl("/collections"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
      ],
    };
  }

  // 6. Category: Gold Jewellery
  if (path === "/collections/gold-jewellery" || path === "/gold") {
    return {
      title: `22K Gold Jewellery Collection | ${storeName}`,
      description: `Handcrafted 22K 916 BIS hallmarked yellow gold necklaces, solid Nakashi bangles, and antique temple ornaments created with zero resin weight at ${storeName}.`,
      canonicalUrl: getFullUrl("/collections/gold-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
        { name: "Gold Jewellery", url: "/collections/gold-jewellery" },
      ],
    };
  }

  // 7. Category: Diamond Jewellery
  if (path === "/collections/diamond-jewellery" || path === "/diamond") {
    return {
      title: `Certified Diamond Rings & Jewellery | ${storeName}`,
      description: `GIA and IGI certified natural diamond solitaire rings, continuous tennis bracelets, and cascading chandelier earrings mounted in 18K gold at ${storeName}.`,
      canonicalUrl: getFullUrl("/collections/diamond-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
        { name: "Diamond Jewellery", url: "/collections/diamond-jewellery" },
      ],
    };
  }

  // 8. Category: Bridal Jewellery
  if (path === "/collections/bridal-jewellery" || path === "/bridal") {
    return {
      title: `Royal Bridal Jewellery Collection & Trousseau | ${storeName}`,
      description: `For the beginning of forever: uncut syndicate Polki jadau chokers, cascading Rani Haars, maang tikkas, and solid 22K gold wedding kadas at ${storeName}.`,
      canonicalUrl: getFullUrl("/collections/bridal-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
        { name: "Bridal Jewellery", url: "/collections/bridal-jewellery" },
      ],
    };
  }

  // 9. Category: Men's Jewellery
  if (path === "/collections/mens-jewellery" || path === "/mens") {
    return {
      title: `Men's Fine Jewellery: Solid Gold Kadas & Chains | ${storeName}`,
      description: `Substantial solid 22K yellow gold cylindrical kadas, diamond-cut Cuban curb chains, and architectural diamond signet rings designed for men at ${storeName}.`,
      canonicalUrl: getFullUrl("/collections/mens-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
        { name: "Men's Jewellery", url: "/collections/mens-jewellery" },
      ],
    };
  }

  // 10. Category: Everyday Jewellery
  if (path === "/collections/everyday-jewellery" || path === "/everyday") {
    return {
      title: `Everyday Minimalist Gold Jewellery | ${storeName}`,
      description: `Understated 18K gold cable chains, modern diamond chevron mangalsutras, and dainty everyday solitaires engineered for daily elegance and durability at ${storeName}.`,
      canonicalUrl: getFullUrl("/collections/everyday-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Collections", url: "/collections" },
        { name: "Everyday Jewellery", url: "/collections/everyday-jewellery" },
      ],
    };
  }

  // 11. Custom Bespoke Atelier
  if (path === "/custom-jewellery" || path === "/custom") {
    return {
      title: `Custom Bespoke Jewellery Atelier | ${storeName}`,
      description: `Commission a one-of-a-kind heirloom with our head designers. 5-step bespoke process: consultation, 3D CAD modeling, gem selection, and master Karigar crafting.`,
      canonicalUrl: getFullUrl("/custom-jewellery"),
      ogType: "website",
      ogImage: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1200&q=80",
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Custom Jewellery", url: "/custom-jewellery" },
      ],
    };
  }

  // 12. Blog Listing
  if (path === "/blog") {
    return {
      title: `Jewellery Buying Guides, Care & Trends | ${storeName}`,
      description: `Expert gemological insights, 22K vs 18K gold comparisons, Indian bridal trousseau planning, and jewellery care manuals published by ${storeName}.`,
      canonicalUrl: getFullUrl("/blog"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Journal", url: "/blog" },
      ],
    };
  }

  // 13. Individual Blog Article (/blog/:slug)
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "").trim();
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);

    if (article) {
      return {
        title: article.metaTitle,
        description: article.metaDescription,
        canonicalUrl: article.canonicalUrl || getFullUrl(`/blog/${article.slug}`),
        ogType: "article",
        ogImage: article.featuredImage,
        robots: "index, follow",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
          { name: article.title, url: `/blog/${article.slug}` },
        ],
        article,
      };
    }
  }

  // 14. Individual Product (/products/:slug)
  if (path.startsWith("/products/")) {
    const slug = path.replace("/products/", "").trim();
    const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

    if (product) {
      const categoryPath =
        product.category === "Gold"
          ? "/collections/gold-jewellery"
          : product.category === "Diamond"
          ? "/collections/diamond-jewellery"
          : product.category === "Bridal"
          ? "/collections/bridal-jewellery"
          : product.category === "Men's Jewellery"
          ? "/collections/mens-jewellery"
          : "/collections/everyday-jewellery";

      return {
        title: product.metaTitle || `${product.name} (${product.purity}) | ${storeName}`,
        description: product.metaDescription || product.description,
        canonicalUrl: getFullUrl(`/products/${product.slug}`),
        ogType: "product",
        ogImage: product.image,
        robots: "index, follow",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Collections", url: "/collections" },
          { name: product.category, url: categoryPath },
          { name: product.name, url: `/products/${product.slug}` },
        ],
        product,
      };
    }
  }

  // 15. Privacy Policy
  if (path === "/privacy-policy") {
    return {
      title: `Privacy Policy & Client Data Confidentiality | ${storeName}`,
      description: `Read the ${storeName} client confidentiality and data privacy policy. Learn how personal records, PAN verification, and appointment details are secured.`,
      canonicalUrl: getFullUrl("/privacy-policy"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    };
  }

  // 16. Terms & Conditions
  if (path === "/terms-conditions") {
    return {
      title: `Terms of Sale, Hallmarking & Buyback Guarantees | ${storeName}`,
      description: `Understand ${storeName}'s terms of sale: BIS hallmarking transparency, net gold weight bullion calculations, lifetime buyback, and insured transit delivery.`,
      canonicalUrl: getFullUrl("/terms-conditions"),
      ogType: "website",
      ogImage: defaultImage,
      robots: "index, follow",
      breadcrumbs: [
        { name: "Home", url: "/" },
        { name: "Terms & Conditions", url: "/terms-conditions" },
      ],
    };
  }

  // 17. 404 Not Found
  return {
    title: `Page Not Found (404) | ${storeName}`,
    description: `The jewellery page or article you are looking for does not exist or has been relocated. Explore our current collections and buying guides at ${storeName}.`,
    canonicalUrl: getFullUrl(path),
    ogType: "website",
    ogImage: defaultImage,
    robots: "noindex, follow",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "404 Page Not Found", url: path },
    ],
    isNotFound: true,
  };
}
