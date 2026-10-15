/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { STORE_CONFIG } from "./data/storeConfig";
import { PRODUCTS, Product } from "./data/products";
import { BLOG_ARTICLES, BlogArticle } from "./data/blogs";
import { getMetadataForRoute, normalizePath } from "./utils/seo";
import { navigateTo } from "./components/Link";

// Global Components
import { GoldRateTicker } from "./components/GoldRateTicker";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ProductModal } from "./components/ProductModal";
import { AppointmentModal } from "./components/AppointmentModal";
import { SearchModal } from "./components/SearchModal";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { SEOHead } from "./components/SEOHead";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CategoryLandingPage } from "./pages/CategoryLandingPage";
import { CustomJewelleryPage } from "./pages/CustomJewelleryPage";
import { BlogListingPage } from "./pages/BlogListingPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { StoreLocationsPage } from "./pages/StoreLocationsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return normalizePath(window.location.pathname || "/");
    }
    return "/";
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modals & Drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentContext, setAppointmentContext] = useState<string>("");

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("nilam_wishlist") || localStorage.getItem("vanya_wishlist");
      return saved ? JSON.parse(saved) : ["prod-001", "prod-004"];
    } catch {
      return ["prod-001", "prod-004"];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("nilam_wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore storage errors
    }
  }, [wishlist]);

  // Synchronize state with URL changes (popstate and custom app:navigate)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(normalizePath(window.location.pathname || "/"));
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("app:navigate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("app:navigate", handleLocationChange);
    };
  }, []);

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleNavigate = (routeOrPath: string) => {
    let target = routeOrPath;
    if (!target.startsWith("/")) {
      if (target === "home") target = "/";
      else if (target === "about") target = "/about";
      else if (target === "contact") target = "/contact";
      else if (target === "locations" || target === "store-locations") target = "/store-locations";
      else if (target === "collections") target = "/collections";
      else if (target === "gold") target = "/collections/gold-jewellery";
      else if (target === "diamond") target = "/collections/diamond-jewellery";
      else if (target === "bridal") target = "/collections/bridal-jewellery";
      else if (target === "mens") target = "/collections/mens-jewellery";
      else if (target === "everyday") target = "/collections/everyday-jewellery";
      else if (target === "custom") target = "/custom-jewellery";
      else if (target === "blog") target = "/blog";
      else if (target.startsWith("blog-")) {
        target = `/blog/${target.replace("blog-", "")}`;
      } else if (target.startsWith("prod-")) {
        const prod = PRODUCTS.find((p) => p.id === target);
        target = prod ? `/products/${prod.slug}` : `/products/${target}`;
      } else if (target === "privacy-policy") target = "/privacy-policy";
      else if (target === "terms-conditions") target = "/terms-conditions";
      else target = `/${target}`;
    }
    navigateTo(target);
  };

  const handleOpenAppointment = (context?: string) => {
    setAppointmentContext(context || "");
    setIsAppointmentOpen(true);
  };

  // Compute dynamic SEO metadata for current URL
  const routeMetadata = getMetadataForRoute(currentPath);

  // Router View Renderer
  const renderCurrentView = () => {
    // 1. Homepage
    if (currentPath === "/" || currentPath === "") {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("General Viewing")}
        />
      );
    }

    // 2. About Us
    if (currentPath === "/about") {
      return (
        <AboutPage
          onOpenAppointment={() => handleOpenAppointment("Our Story & Heritage")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 3. Contact Us
    if (currentPath === "/contact") {
      return (
        <ContactPage
          onOpenAppointment={() => handleOpenAppointment("Contact Inquiry")}
          onNavigateToLocations={() => navigateTo("/store-locations")}
        />
      );
    }

    // 4. Store Locations
    if (currentPath === "/store-locations" || currentPath === "/locations") {
      return (
        <StoreLocationsPage
          onOpenAppointment={(showroom) =>
            handleOpenAppointment(`Showroom Visit: ${showroom}`)
          }
        />
      );
    }

    // 5. Complete Catalogue
    if (currentPath === "/collections") {
      return (
        <CollectionsPage
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          initialCategory="All"
        />
      );
    }

    // 6. Category: Gold Jewellery
    if (currentPath === "/collections/gold-jewellery" || currentPath === "/gold") {
      return (
        <CategoryLandingPage
          category="Gold"
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("22K Gold Viewing")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 7. Category: Diamond Jewellery
    if (currentPath === "/collections/diamond-jewellery" || currentPath === "/diamond") {
      return (
        <CategoryLandingPage
          category="Diamond"
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("Diamond Solitaires")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 8. Category: Bridal Jewellery
    if (currentPath === "/collections/bridal-jewellery" || currentPath === "/bridal") {
      return (
        <CategoryLandingPage
          category="Bridal"
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("Bridal Trousseau")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 9. Category: Men's Jewellery
    if (currentPath === "/collections/mens-jewellery" || currentPath === "/mens") {
      return (
        <CategoryLandingPage
          category="Men's Jewellery"
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("Men's Jewellery")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 10. Category: Everyday Jewellery
    if (currentPath === "/collections/everyday-jewellery" || currentPath === "/everyday") {
      return (
        <CategoryLandingPage
          category="Everyday Jewellery"
          onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          onOpenAppointment={() => handleOpenAppointment("Everyday Jewellery")}
          onNavigate={handleNavigate}
        />
      );
    }

    // 11. Custom Bespoke Atelier
    if (currentPath === "/custom-jewellery" || currentPath === "/custom") {
      return (
        <CustomJewelleryPage
          onOpenAppointment={() => handleOpenAppointment("Custom Bespoke Atelier")}
        />
      );
    }

    // 12. Blog Listing
    if (currentPath === "/blog") {
      return (
        <BlogListingPage
          onSelectArticle={(article) => navigateTo(`/blog/${article.slug}`)}
        />
      );
    }

    // 13. Individual Blog Article (/blog/:slug)
    if (currentPath.startsWith("/blog/")) {
      const slug = currentPath.replace("/blog/", "").replace(/\/$/, "").trim();
      const article = BLOG_ARTICLES.find((a) => a.slug === slug);

      if (article) {
        return (
          <BlogPostPage
            article={article}
            onBack={() => navigateTo("/blog")}
            onSelectArticle={(art) => navigateTo(`/blog/${art.slug}`)}
            onOpenAppointment={() => handleOpenAppointment(article.title)}
          />
        );
      }
      return <NotFoundPage />;
    }

    // 14. Individual Product Page (/products/:slug)
    if (currentPath.startsWith("/products/")) {
      const slug = currentPath.replace("/products/", "").replace(/\/$/, "").trim();
      const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

      if (product) {
        return (
          <ProductDetailPage
            product={product}
            isWishlisted={isWishlisted(product.id)}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={(ctx) => handleOpenAppointment(ctx || product.name)}
            onSelectProduct={(p) => navigateTo(`/products/${p.slug}`)}
          />
        );
      }
      return <NotFoundPage />;
    }

    // 15. Legal Policies
    if (currentPath === "/privacy-policy") {
      return <PrivacyPolicyPage />;
    }

    if (currentPath === "/terms-conditions") {
      return <TermsConditionsPage />;
    }

    // 16. Fallback: 404 Page Not Found
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B18] selection:bg-[#EAE0CE] selection:text-[#1E1B18]">
      {/* Dynamic SEO Tagging & Schema.org JSON-LD Graph */}
      <SEOHead metadata={routeMetadata} />

      {/* Live Gold Bullion Rate Ticker Strip */}
      <GoldRateTicker />

      {/* Primary 3-Zone Luxury Navbar with crawlable semantic links */}
      <Navbar
        currentPath={currentPath}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAppointment={() => handleOpenAppointment("General Viewing")}
        wishlistCount={wishlist.length}
      />

      {/* Main Content Router */}
      <main className="flex-1" id="main-content">
        {renderCurrentView()}
      </main>

      {/* Floating WhatsApp Concierge Button */}
      <WhatsAppButton />

      {/* Footer with Crawlable Category & Journal Links */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment("Showroom Viewing")}
      />

      {/* Quick View Modal for Products */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onBookAppointment={(productName) => handleOpenAppointment(productName)}
        onNavigateToLocations={() => navigateTo("/store-locations")}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedProduct={appointmentContext}
      />

      {/* Search Modal with Instant Article & Product Navigation */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => {
          setSelectedProduct(null);
          navigateTo(`/products/${p.slug}`);
        }}
        onSelectArticle={(a) => {
          navigateTo(`/blog/${a.slug}`);
        }}
      />

      {/* Saved Items Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistedProducts}
        onRemoveItem={(id) => setWishlist((prev) => prev.filter((pId) => pId !== id))}
        onSelectProduct={(p) => {
          setIsWishlistOpen(false);
          navigateTo(`/products/${p.slug}`);
        }}
        onBookAppointment={(itemsSummary) => handleOpenAppointment(itemsSummary)}
      />
    </div>
  );
}
