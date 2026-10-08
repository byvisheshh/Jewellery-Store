/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { STORE_CONFIG } from "./data/storeConfig";
import { PRODUCTS, Product, JewelleryCategory } from "./data/products";
import { BLOG_ARTICLES, BlogArticle } from "./data/blogs";

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
import { ContactPage } from "./pages/ContactPage";
import { StoreLocationsPage } from "./pages/StoreLocationsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  // Modals & Drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentContext, setAppointmentContext] = useState<string>("");

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("vanya_wishlist");
      return saved ? JSON.parse(saved) : ["prod-001", "prod-004"];
    } catch {
      return ["prod-001", "prod-004"];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("vanya_wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleNavigate = (route: string) => {
    if (route.startsWith("blog-")) {
      const slug = route.replace("blog-", "");
      const found = BLOG_ARTICLES.find((a) => a.slug === slug);
      if (found) {
        setActiveArticle(found);
        setCurrentRoute("blog-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectArticle = (article: BlogArticle) => {
    setActiveArticle(article);
    setCurrentRoute("blog-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenAppointment = (context?: string) => {
    setAppointmentContext(context || "");
    setIsAppointmentOpen(true);
  };

  // Compute dynamic SEO metadata
  let seoTitle = "";
  let seoDescription = "";

  if (currentRoute === "home") {
    seoTitle = "Vanya Jewellers – Luxury Indian Heritage & Diamond Jewellery";
    seoDescription =
      "Discover timeless 22K gold, certified diamond and heritage bridal jewellery handcrafted with exceptional artistry and BIS hallmarked purity.";
  } else if (currentRoute === "about") {
    seoTitle = "Our 50-Year Heritage & Master Karigars";
    seoDescription =
      "Learn about Vanya Jewellers' five decades of goldsmithing legacy, BIS hallmarking standards, and hereditary Karigar craftsmanship.";
  } else if (currentRoute === "collections") {
    seoTitle = "Complete High Jewellery Catalogue";
    seoDescription =
      "Explore 22K gold necklaces, certified solitaire diamond rings, and royal bridal trousseau sets.";
  } else if (currentRoute === "gold") {
    seoTitle = "22K BIS Hallmarked Gold Jewellery";
    seoDescription =
      "Exquisite Rajasthani filigree, temple nakashi, and heirloom 22K gold necklaces and kadas.";
  } else if (currentRoute === "diamond") {
    seoTitle = "Certified Natural Diamond Jewellery & Solitaires";
    seoDescription =
      "GIA and IGI certified natural diamond rings, tennis bracelets, and cascading cocktail earrings.";
  } else if (currentRoute === "bridal") {
    seoTitle = "Royal Indian Bridal Jewellery Trousseau";
    seoDescription =
      "For the beginning of forever: uncut syndicate polki chokers, layered rani haars, and auspicious bridal sets.";
  } else if (currentRoute === "mens") {
    seoTitle = "Men's Fine Jewellery | Solid 22K Gold Kadas & Chains";
    seoDescription =
      "Architectural signet rings, solid 22K gold kadas, and diamond-cut curb chains designed for men.";
  } else if (currentRoute === "everyday") {
    seoTitle = "Everyday Luxury Gold Jewellery";
    seoDescription =
      "Minimalist 18K gold chains, modern diamond mangalsutras, and lightweight daily elegance.";
  } else if (currentRoute === "custom") {
    seoTitle = "Bespoke Custom Jewellery Atelier";
    seoDescription =
      "Commission unique BIS hallmarked jewellery with our head designer, 3D CAD modeling, and master goldsmiths.";
  } else if (currentRoute === "blog") {
    seoTitle = "Jewellery Journal & Connoisseur Guides";
    seoDescription =
      "Comprehensive educational guides on 22K vs 18K gold, diamond 4Cs, bridal jewellery planning, and care rituals.";
  } else if (currentRoute === "blog-detail" && activeArticle) {
    seoTitle = activeArticle.metaTitle;
    seoDescription = activeArticle.metaDescription;
  } else if (currentRoute === "contact") {
    seoTitle = "Contact Our Concierge & Flagship Salons";
    seoDescription =
      "Connect with our client concierge, schedule in-store appointments, and find directions to our Mumbai flagship.";
  } else if (currentRoute === "locations") {
    seoTitle = "Showroom Locations: Mumbai, Delhi, Bengaluru, Hyderabad";
    seoDescription =
      "Visit our experiential jewellery salons with private bridal viewing suites and certified gemologists.";
  } else if (currentRoute === "privacy-policy") {
    seoTitle = "Privacy Policy & Client Discretion";
  } else if (currentRoute === "terms-conditions") {
    seoTitle = "Terms of Sale, Hallmarking & Lifetime Buyback";
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B18] selection:bg-[#EAE0CE] selection:text-[#1E1B18]">
      {/* Dynamic SEO Tagging & Schema Markup */}
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        product={selectedProduct}
        article={currentRoute === "blog-detail" ? activeArticle : null}
      />

      {/* Live Gold Bullion Rate Ticker Strip */}
      <GoldRateTicker />

      {/* Primary 3-Zone Luxury Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAppointment={() => handleOpenAppointment("General Viewing")}
        wishlistCount={wishlist.length}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentRoute === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("General Viewing")}
          />
        )}

        {currentRoute === "about" && (
          <AboutPage
            onOpenAppointment={() => handleOpenAppointment("Our Story & Heritage")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "collections" && (
          <CollectionsPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            initialCategory="All"
          />
        )}

        {currentRoute === "gold" && (
          <CategoryLandingPage
            category="Gold"
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("22K Gold Viewing")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "diamond" && (
          <CategoryLandingPage
            category="Diamond"
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("Diamond Solitaires")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "bridal" && (
          <CategoryLandingPage
            category="Bridal"
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("Bridal Trousseau")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "mens" && (
          <CategoryLandingPage
            category="Men's Jewellery"
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("Men's Jewellery")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "everyday" && (
          <CategoryLandingPage
            category="Everyday Jewellery"
            onSelectProduct={(p) => setSelectedProduct(p)}
            isWishlisted={isWishlisted}
            onToggleWishlist={handleToggleWishlist}
            onOpenAppointment={() => handleOpenAppointment("Everyday Jewellery")}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === "custom" && (
          <CustomJewelleryPage
            onOpenAppointment={() => handleOpenAppointment("Custom Bespoke Atelier")}
          />
        )}

        {currentRoute === "blog" && (
          <BlogListingPage onSelectArticle={handleSelectArticle} />
        )}

        {currentRoute === "blog-detail" && activeArticle && (
          <BlogPostPage
            article={activeArticle}
            onBack={() => handleNavigate("blog")}
            onSelectArticle={handleSelectArticle}
            onOpenAppointment={() => handleOpenAppointment(activeArticle.title)}
          />
        )}

        {currentRoute === "contact" && (
          <ContactPage
            onOpenAppointment={() => handleOpenAppointment("Contact Inquiry")}
            onNavigateToLocations={() => handleNavigate("locations")}
          />
        )}

        {currentRoute === "locations" && (
          <StoreLocationsPage
            onOpenAppointment={(showroom) =>
              handleOpenAppointment(`Showroom Visit: ${showroom}`)
            }
          />
        )}

        {currentRoute === "privacy-policy" && <PrivacyPolicyPage />}

        {currentRoute === "terms-conditions" && <TermsConditionsPage />}
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointment={() => handleOpenAppointment("Showroom Viewing")}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onBookAppointment={(productName) => handleOpenAppointment(productName)}
        onNavigateToLocations={() => handleNavigate("locations")}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedProduct={appointmentContext}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectArticle={handleSelectArticle}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistedProducts}
        onRemoveItem={(id) => setWishlist((prev) => prev.filter((pId) => pId !== id))}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onBookAppointment={(itemsSummary) => handleOpenAppointment(itemsSummary)}
      />
    </div>
  );
}
