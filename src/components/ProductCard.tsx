import React from "react";
import { Product } from "../data/products";
import { STORE_CONFIG } from "../data/storeConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { Link } from "./Link";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isWishlisted,
  onToggleWishlist,
}) => {
  const productUrl = `/products/${product.slug}`;
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STORE_CONFIG.storeName}, I am interested in inquiring about "${product.name}" (${product.purity}, ${product.grossWeight}, Price: ${product.priceDisplay}). Please share more details.`
  )}`;

  const handleCardClick = (e: React.MouseEvent) => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <article className="group flex flex-col bg-white border border-[#E8E2D8] hover:border-[#AA8B56]/50 transition-all duration-300 hover:shadow-lg">
      {/* Product Image Area with Crawlable Anchor */}
      <div className="relative aspect-[4/5] bg-[#FAF8F5] overflow-hidden">
        <Link to={productUrl} className="block w-full h-full" title={`View ${product.name}`}>
          <ImageWithFallback
            src={product.image}
            alt={`${product.name} - ${product.purity} ${product.category}`}
            aspectRatio="aspect-[4/5]"
            className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover"
          />
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors z-10 cursor-pointer ${
            isWishlisted
              ? "bg-[#1E1B18] text-[#AA8B56]"
              : "bg-white/80 text-[#45403A] hover:bg-white hover:text-[#1E1B18]"
          }`}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          title={isWishlisted ? "In Wishlist" : "Save to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* BIS Hallmark Micro Kicker */}
        {product.bisHallmarked && (
          <div className="absolute bottom-3 left-3 bg-[#1E1B18]/85 backdrop-blur-sm text-[#EAE0CE] text-[10px] uppercase tracking-wider px-2 py-0.5">
            BIS 916 / 750
          </div>
        )}
      </div>

      {/* Product Details Area */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-1.5">
          {/* Metadata: Metal & Weight (Zero pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-[#8E877D] tracking-wider uppercase font-medium">
            <span>{product.metal}</span>
            <span aria-hidden="true">·</span>
            <span>{product.grossWeight}</span>
            {product.diamondSpecs && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#8F7040]">{product.diamondSpecs.totalCarat}</span>
              </>
            )}
          </div>

          {/* Product Name as Crawlable Heading Link */}
          <h3 className="font-serif text-lg text-[#1E1B18] group-hover:text-[#8F7040] transition-colors line-clamp-1 font-medium">
            <Link to={productUrl} title={product.name}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#666057] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-[#F4EFE6] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] tracking-wider uppercase text-[#8E877D] block">Price</span>
            <span className="text-base font-semibold text-[#1E1B18] tabular-nums">
              {product.priceDisplay}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick WhatsApp Inquiry */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#E8E2D8] hover:border-[#25D366] hover:text-[#25D366] text-[#666057] transition-colors"
              title={`Enquire about ${product.name} on WhatsApp`}
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* View Details Link with Descriptive Anchor */}
            <Link
              to={productUrl}
              className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#1E1B18] hover:bg-[#8F7040] transition-colors flex items-center gap-1"
              title={`View complete specifications for ${product.name}`}
            >
              <span>View Piece</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
