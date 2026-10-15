import React, { useState } from "react";
import { Product, PRODUCTS } from "../data/products";
import { BLOG_ARTICLES, BlogArticle } from "../data/blogs";
import { STORE_CONFIG } from "../data/storeConfig";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link } from "../components/Link";
import { ProductCard } from "../components/ProductCard";
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Scale, 
  ArrowRight,
  BookOpen,
  MapPin
} from "lucide-react";

interface ProductDetailPageProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenAppointment: (context?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenAppointment,
  onSelectProduct,
}) => {
  const [activeImage, setActiveImage] = useState(product.image);

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

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: product.category, url: categoryPath },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  // Find related educational guides based on product's relatedBlogSlugs
  const relatedGuides: BlogArticle[] = (product.relatedBlogSlugs || [])
    .map((slug) => BLOG_ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is BlogArticle => a !== undefined);

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STORE_CONFIG.storeName} Concierge, I would like to inquire about acquiring "${product.name}" (${product.purity}, Gross Weight: ${product.grossWeight}, Price: ${product.priceDisplay}). Please connect me with a senior jewellery specialist.`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Main Product Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Image Gallery & BIS Hallmark Badge */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[4/5] bg-white border border-[#E8E2D8] overflow-hidden shadow-sm">
            <ImageWithFallback
              src={activeImage}
              alt={product.name}
              aspectRatio="aspect-[4/5]"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Strip */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-20 shrink-0 border overflow-hidden cursor-pointer transition-all ${
                    activeImage === imgUrl
                      ? "border-[#AA8B56] ring-1 ring-[#AA8B56]"
                      : "border-[#E8E2D8] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View angle ${idx + 1} of ${product.name}`}
                >
                  <ImageWithFallback
                    src={imgUrl}
                    alt={`${product.name} angle ${idx + 1}`}
                    aspectRatio="aspect-square"
                  />
                </button>
              ))}
            </div>
          )}

          {/* BIS Hallmarking Trust Card */}
          <div className="bg-[#F4EFE6] p-5 border border-[#D8C6A5] text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#705530] font-semibold">
              <ShieldCheck className="w-5 h-5 text-[#AA8B56]" />
              <span>BIS Hallmarking & Legal Metrology Guarantee</span>
            </div>
            <p className="text-[#666057] leading-relaxed">
              Every gram of gold in this piece is certified under Bureau of Indian Standards (BIS) Hallmarking regulations with a unique laser-engraved 6-digit HUID code (<strong>{product.hallmarkCode}</strong>) verifiable on the official BIS CARE app.
            </p>
          </div>
        </div>

        {/* Right Column: Title, Specifications, Pricing & CTAs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            {/* Category kicker */}
            <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#8E877D] font-medium">
              <Link to={categoryPath} className="hover:text-[#AA8B56] transition-colors">
                {product.category} · {product.jewelleryType}
              </Link>
              <span className="text-emerald-700 font-medium">{product.availability}</span>
            </div>

            {/* Product H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal leading-tight">
              {product.name}
            </h1>

            {/* Price Row */}
            <div className="py-3 border-y border-[#E8E2D8] flex items-baseline justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8E877D] block">
                  Price (All taxes & making charges included)
                </span>
                <span className="text-2xl sm:text-3xl font-semibold text-[#1E1B18] tabular-nums">
                  {product.priceDisplay}
                </span>
              </div>
              <button
                onClick={() => onToggleWishlist(product)}
                className="flex items-center gap-1.5 text-xs text-[#666057] hover:text-[#AA8B56] transition-colors cursor-pointer"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#AA8B56] text-[#AA8B56]" : ""}`} />
                <span>{isWishlisted ? "Saved" : "Save to Wishlist"}</span>
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#45403A] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="space-y-3 pt-2">
            <h2 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#AA8B56]" />
              <span>Certified Specifications</span>
            </h2>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-white border border-[#E8E2D8]">
                <span className="text-[#8E877D] block">Gold Purity</span>
                <strong className="text-[#1E1B18] font-medium">{product.purity}</strong>
              </div>
              <div className="p-3 bg-white border border-[#E8E2D8]">
                <span className="text-[#8E877D] block">Gross Weight</span>
                <strong className="text-[#1E1B18] font-medium">{product.grossWeight}</strong>
              </div>
              {product.netGoldWeight && (
                <div className="p-3 bg-white border border-[#E8E2D8]">
                  <span className="text-[#8E877D] block">Net Gold Weight</span>
                  <strong className="text-[#1E1B18] font-medium">{product.netGoldWeight}</strong>
                </div>
              )}
              <div className="p-3 bg-white border border-[#E8E2D8]">
                <span className="text-[#8E877D] block">Occasion</span>
                <strong className="text-[#1E1B18] font-medium">{product.occasion}</strong>
              </div>
            </div>

            {/* Diamond Specs if applicable */}
            {product.diamondSpecs && (
              <div className="p-4 bg-white border border-[#E8E2D8] text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#8F7040] font-semibold uppercase tracking-wider text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Natural Diamond 4Cs Certification</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                  <div>
                    <span className="text-[#8E877D]">Carat:</span> <strong>{product.diamondSpecs.totalCarat}</strong>
                  </div>
                  <div>
                    <span className="text-[#8E877D]">Color / Clarity:</span> <strong>{product.diamondSpecs.color} / {product.diamondSpecs.clarity}</strong>
                  </div>
                  <div>
                    <span className="text-[#8E877D]">Grading Lab:</span> <strong>{product.diamondSpecs.certification}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Craftsmanship Highlights */}
          <div className="space-y-2 pt-2">
            <h3 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold">
              Craftsmanship Highlights
            </h3>
            <ul className="space-y-1.5 text-xs text-[#666057]">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#AA8B56] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-[#E8E2D8]">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => onOpenAppointment(`Product: ${product.name}`)}
                className="w-full py-2.5 px-3 bg-[#1E1B18] hover:bg-[#382917] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
                <span>Book In-Store Viewing</span>
              </button>

              <Link
                to="/store-locations"
                className="w-full py-2.5 px-3 border border-[#AA8B56] hover:bg-[#F4EFE6] text-[#1E1B18] font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-[#AA8B56]" />
                <span>Find Showrooms</span>
              </Link>
            </div>
          </div>

          {/* Product-to-Blog Educational Links (Mandated by Section 4.E) */}
          {relatedGuides.length > 0 && (
            <div className="pt-4 border-t border-[#E8E2D8] space-y-2.5 bg-[#FAF8F5] p-4">
              <span className="text-[11px] uppercase tracking-wider text-[#8F7040] font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Helpful Buying Guides for this Creation:</span>
              </span>
              <ul className="space-y-1.5 text-xs">
                {relatedGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      to={`/blog/${guide.slug}`}
                      className="text-[#1E1B18] hover:text-[#AA8B56] font-medium underline underline-offset-2 flex items-center gap-1 transition-colors"
                      title={guide.title}
                    >
                      <span>{guide.title}</span>
                      <ArrowRight className="w-3 h-3 text-[#AA8B56]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products from this Collection */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-[#E8E2D8] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
                More from {product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18]">
                Complementary Creations
              </h2>
            </div>
            <Link
              to={categoryPath}
              className="text-xs uppercase tracking-wider text-[#8F7040] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Explore all {product.category} Jewellery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                onSelect={onSelectProduct}
                isWishlisted={false}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
